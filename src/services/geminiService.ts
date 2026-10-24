import { GoogleGenAI } from '@google/genai';
import { StorageService } from './storage';

const SYSTEM_PROMPT = `You are a world-class TOEIC Listening & Reading preparation tutor for the 2026 test edition.
Provide concise, professional, encouraging explanations in US English.
Break down grammar rules, identify common test traps, explain why wrong options (distractors) fail, and highlight high-yield business English collocations.`;

function friendlyError(status: number, detail: string): string {
  if (status === 401 || status === 403) return 'The API key was rejected. Check that you pasted the full key and that it is active.';
  if (status === 429) return 'Rate limit reached on your free key. Wait a minute and try again.';
  if (status >= 500) return 'The AI provider is having problems. Try again in a moment.';
  return 'Request failed (' + status + '). ' + detail.slice(0, 160);
}

const GROQ_PREFERRED = [
  'llama-3.3-70b-versatile',
  'openai/gpt-oss-120b',
  'llama-3.1-70b-versatile',
  'openai/gpt-oss-20b',
  'meta-llama/llama-4-maverick-17b-128e-instruct',
  'meta-llama/llama-4-scout-17b-16e-instruct',
  'qwen/qwen3-32b',
  'llama-3.1-8b-instant',
];
const GROQ_SKIP = /whisper|guard|tts|playai|orpheus|compound|embed|distil-whisper|safeguard/i;
let groqModelCache: { key: string; model: string } | null = null;

/** Asks Groq which models this key can use and picks the best chat model. */
async function discoverGroqModel(key: string): Promise<string> {
  if (groqModelCache && groqModelCache.key === key) return groqModelCache.model;
  const res = await fetch('https://api.groq.com/openai/v1/models', {
    headers: { Authorization: 'Bearer ' + key },
  });
  if (!res.ok) throw new Error(friendlyError(res.status, await res.text().catch(() => '')));
  const data = await res.json();
  const ids: string[] = (data?.data || []).map((m: any) => m.id).filter((id: string) => id && !GROQ_SKIP.test(id));
  if (ids.length === 0) throw new Error('Your Groq key has no chat model available.');
  const model = GROQ_PREFERRED.find(m => ids.includes(m)) || ids[0];
  groqModelCache = { key, model };
  return model;
}

async function groqCall(key: string, model: string, fullPrompt: string, signal: AbortSignal): Promise<Response> {
  return fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key },
    body: JSON.stringify({
      model,
      temperature: 0.3,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: fullPrompt },
      ],
    }),
    signal,
  });
}

async function askGroq(key: string, fullPrompt: string): Promise<string> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 60000);
  try {
    let model = groqModelCache && groqModelCache.key === key ? groqModelCache.model : GROQ_PREFERRED[0];
    let res = await groqCall(key, model, fullPrompt, ctrl.signal);
    if (!res.ok && (res.status === 404 || res.status === 400)) {
      // The default model is not available for this key: look up what is
      groqModelCache = null;
      model = await discoverGroqModel(key);
      res = await groqCall(key, model, fullPrompt, ctrl.signal);
    }
    if (!res.ok) throw new Error(friendlyError(res.status, await res.text().catch(() => '')));
    const data = await res.json();
    return data?.choices?.[0]?.message?.content || 'No response generated.';
  } catch (e: any) {
    if (e?.name === 'AbortError') throw new Error('The request timed out. Try again.');
    throw e;
  } finally {
    clearTimeout(timer);
  }
}

async function discoverGeminiModel(key: string): Promise<string> {
  const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + encodeURIComponent(key));
  if (!res.ok) throw new Error(friendlyError(res.status, await res.text().catch(() => '')));
  const data = await res.json();
  const names: string[] = (data?.models || [])
    .filter((m: any) => (m.supportedGenerationMethods || []).includes('generateContent'))
    .map((m: any) => String(m.name).replace(/^models\//, ''))
    .filter((n: string) => /^gemini-[\d.]+-flash(-lite)?$/.test(n));
  if (names.length === 0) throw new Error('Your Gemini key has no usable Flash model.');
  names.sort((a, b) => parseFloat(b.split('-')[1]) - parseFloat(a.split('-')[1]));
  return names[0];
}

export async function askGeminiCoach(prompt: string, context?: string): Promise<string> {
  const userKey = StorageService.getGeminiApiKey();
  if (!userKey) {
    throw new Error('Please enter your personal Gemini or Groq API key in the AI Coach settings to use this feature.');
  }

  const fullPrompt = context
    ? `Context:\n${context}\n\nUser Question:\n${prompt}`
    : prompt;

  // Groq keys start with "gsk_", Google AI Studio keys start with "AIza"
  if (userKey.startsWith('gsk_')) return askGroq(userKey, fullPrompt);

  const callGemini = async (model: string) => {
    const ai = new GoogleGenAI({ apiKey: userKey });
    const response = await ai.models.generateContent({
      model,
      contents: fullPrompt,
      config: { systemInstruction: SYSTEM_PROMPT, temperature: 0.3 },
    });
    return response.text || 'No response generated.';
  };

  try {
    try {
      return await callGemini('gemini-2.5-flash');
    } catch (e: any) {
      const m = String(e?.message || e);
      if (!/not found|404|no longer|deprecated|not supported/i.test(m)) throw e;
      return await callGemini(await discoverGeminiModel(userKey));
    }
  } catch (e: any) {
    const msg = String(e?.message || e);
    if (/API key|401|403|PERMISSION|UNAUTHENTICATED/i.test(msg)) throw new Error(friendlyError(401, msg));
    if (/429|quota|RESOURCE_EXHAUSTED/i.test(msg)) throw new Error(friendlyError(429, msg));
    throw new Error('Gemini request failed. ' + msg.slice(0, 160));
  }
}
