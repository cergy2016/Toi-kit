/**
 * SpeechSynthesis service for TOEIC listening practice.
 * Uses the browser's built-in text-to-speech (no server, works offline).
 * Long scripts are spoken in short chunks: Chrome silently stops long utterances,
 * and chunks also allow a reliable pause/resume and a male/female voice split.
 */
import { useEffect, useState } from 'react';

export interface VoiceOption {
  voice: SpeechSynthesisVoice;
  accent: 'US' | 'UK' | 'AU' | 'CA' | 'Global';
  label: string;
}

interface Chunk { text: string; role: 'man' | 'woman' | 'neutral' }
type State = { isSpeaking: boolean; isPaused: boolean };

// Novelty and low-quality voices (macOS ships many) must never be chosen.
const BAD_VOICE = /(albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|good news|hysterical|junior|kathy|organ|princess|ralph|trinoi|whisper|zarvox|fred|superstar|wobble|jester|grandma|grandpa|bonnes nouvelles|mauvaises nouvelles|bouffon|bulles|cloches|murmure|orgue|violoncelles|eddy|flo\b|reed|rocko|sandy|shelley)/i;
const GOOD_QUALITY = /(premium|enhanced|de qualit|natural|neural|online|google)/i;
const MALE_NAME = /(evan|nathan|alex|tom\b|guy|david|mark|daniel|aaron|lee\b|ryan|james|george|oliver|thomas|male)/i;
const FEMALE_NAME = /(samantha|ava\b|allison|susan|zira|aria|jenny|karen|moira|tessa|matilda|victoria|serena|emma|libby|sonia|hazel|female)/i;

function voiceScore(v: SpeechSynthesisVoice): number {
  const n = v.name;
  if (BAD_VOICE.test(n)) return -100;
  let sc = 0;
  if (GOOD_QUALITY.test(n)) sc += 30;
  if (/samantha|ava\b|evan|nathan|daniel|alex|aria|jenny|guy|zira|david|mark|allison|susan|tom\b/i.test(n)) sc += 20;
  if (v.lang.toLowerCase().replace('_', '-') === 'en-us') sc += 6;
  else if (/en-gb/i.test(v.lang)) sc += 3;
  if (v.localService) sc += 1;
  return sc;
}

class TTSService {
  private synth: SpeechSynthesis | null = null;
  private voices: VoiceOption[] = [];
  private rate = 1.0;
  private isSpeaking = false;
  private isPaused = false;
  private queue: Chunk[] = [];
  private index = 0;
  private runId = 0;
  private timer: number | null = null;
  private audioEl: HTMLAudioElement | null = null;
  private lastError = '';
  private listeners: Array<(s: State) => void> = [];
  private helpListeners: Array<() => void> = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      try {
        this.synth.addEventListener('voiceschanged', () => { this.loadVoices(); this.emitHelp(); });
      } catch {
        this.synth.onvoiceschanged = () => { this.loadVoices(); this.emitHelp(); };
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    const en = this.synth.getVoices().filter(v => v.lang.toLowerCase().replace('_', '-').startsWith('en'));
    this.voices = en.map(v => {
      const l = v.lang.toLowerCase().replace('_', '-');
      let accent: VoiceOption['accent'] = 'Global';
      if (l.includes('us')) accent = 'US';
      else if (l.includes('gb') || l.includes('uk')) accent = 'UK';
      else if (l.includes('au')) accent = 'AU';
      else if (l.includes('ca')) accent = 'CA';
      return { voice: v, accent, label: `${v.name} (${accent})` };
    });
  }

  public getAvailableVoices(): VoiceOption[] {
    if (this.voices.length === 0) this.loadVoices();
    return this.voices;
  }

  /** Message to show the user when audio cannot work, otherwise null. */
  public getHelp(): string | null {
    if (!this.synth) {
      return 'Spoken audio is not supported in this browser. Open the app in Chrome, Edge or Safari, or read the script instead.';
    }
    if (this.lastError) {
      return 'Audio could not start (' + this.lastError + '). Open the app in a normal Chrome, Edge or Safari tab (not an embedded preview) and check that your device volume is on.';
    }
    return null;
  }

  public subscribeHelp(cb: () => void): () => void {
    this.helpListeners.push(cb);
    return () => { this.helpListeners = this.helpListeners.filter(c => c !== cb); };
  }
  private emitHelp() { this.helpListeners.forEach(cb => cb()); }

  public setRate(r: number) {
    this.rate = Math.max(0.6, Math.min(1.5, r));
    if (this.audioEl) this.audioEl.playbackRate = this.rate;
  }
  public getRate() { return this.rate; }

  public subscribe(cb: (s: State) => void): () => void {
    this.listeners.push(cb);
    cb({ isSpeaking: this.isSpeaking, isPaused: this.isPaused });
    return () => { this.listeners = this.listeners.filter(c => c !== cb); };
  }
  private notify() {
    this.listeners.forEach(cb => cb({ isSpeaking: this.isSpeaking, isPaused: this.isPaused }));
  }

  private buildChunks(text: string): Chunk[] {
    const out: Chunk[] = [];
    text
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\[\d+\]/g, '')
      .split('\n')
      .forEach(raw => {
        let line = raw.trim();
        if (!line) return;
        let role: Chunk['role'] = 'neutral';
        const sp = line.match(/^(Man|Woman|Speaker A|Speaker B|Narrator)\s*:\s*/i);
        if (sp) {
          const who = sp[1].toLowerCase();
          role = who === 'man' || who === 'speaker a' ? 'man' : who === 'woman' || who === 'speaker b' ? 'woman' : 'neutral';
          line = line.slice(sp[0].length);
        }
        line = line
          .replace(/^Statement\s*\(([A-D])\)\s*:?\s*/i, 'Statement $1. ')
          .replace(/^\(([A-D])\)\s*/, '$1. ');
        // split long lines at sentence ends so each chunk stays short
        const parts = line.match(/[^.!?]+[.!?]+["')\]]*\s*|[^.!?]+$/g) || [line];
        let cur = '';
        parts.forEach(p => {
          if ((cur + p).length > 170 && cur) { out.push({ text: cur.trim(), role }); cur = p; }
          else cur += p;
        });
        if (cur.trim()) out.push({ text: cur.trim(), role });
      });
    return out;
  }

  private pickVoice(role: Chunk['role'], pref?: string): SpeechSynthesisVoice | undefined {
    const all = this.getAvailableVoices();
    if (all.length === 0) return undefined;
    let pool = pref ? all.filter(x => x.accent === pref) : all;
    if (pool.length === 0) pool = all;
    const ranked = pool
      .map(x => ({ v: x.voice, sc: voiceScore(x.voice) }))
      .sort((p, q) => q.sc - p.sc);
    const usable = ranked.filter(x => x.sc > -50);
    const list = usable.length ? usable : ranked;
    const gender = (re: RegExp) => list.find(x => re.test(x.v.name));
    if (role === 'man') return (gender(MALE_NAME) || list[0]).v;
    if (role === 'woman') return (gender(FEMALE_NAME) || list[Math.min(1, list.length - 1)]).v;
    return list[0].v;
  }

  private speakFrom(i: number, id: number, pref?: string) {
    if (!this.synth || id !== this.runId) return;
    if (i >= this.queue.length) {
      this.isSpeaking = false; this.isPaused = false; this.index = 0; this.notify(); return;
    }
    this.index = i;
    const c = this.queue[i];
    const u = new SpeechSynthesisUtterance(c.text);
    u.lang = 'en-US';
    u.rate = this.rate;
    u.pitch = c.role === 'man' ? 0.85 : c.role === 'woman' ? 1.12 : 1.0;
    u.volume = 1;
    const voice = this.pickVoice(c.role, pref);
    if (voice) { u.voice = voice; u.lang = voice.lang; }
    let started = false;
    u.onstart = () => { started = true; this.lastError = ''; this.emitHelp(); };
    u.onend = () => {
      if (id !== this.runId || this.isPaused) return;
      this.timer = window.setTimeout(() => this.speakFrom(i + 1, id, pref), 350);
    };
    u.onerror = e => {
      if (id !== this.runId) return;
      const code = (e as SpeechSynthesisErrorEvent).error;
      if (code === 'canceled' || code === 'interrupted') return;
      this.lastError = code || 'unknown error';
      this.isSpeaking = false; this.isPaused = false;
      this.notify(); this.emitHelp();
    };
    this.isSpeaking = true;
    this.notify();
    this.synth.speak(u);
    // If nothing starts within 4 s the browser blocked audio (sandbox, no voices, no user gesture)
    window.setTimeout(() => {
      if (id === this.runId && !started && !this.isPaused && this.isSpeaking) {
        this.lastError = this.getAvailableVoices().length === 0 ? 'no English voice installed' : 'blocked by the browser';
        this.runId++;
        this.synth?.cancel();
        this.isSpeaking = false; this.notify(); this.emitHelp();
      }
    }, 4000);
  }

  private speakSynth(text: string, pref?: 'US' | 'UK' | 'AU' | 'CA'): void {
    if (!this.synth) { this.lastError = 'speech is not supported'; this.emitHelp(); return; }
    this.lastError = '';
    this.queue = this.buildChunks(text);
    const id = ++this.runId;
    // Chrome needs a short gap after cancel() before speak() works reliably
    window.setTimeout(() => this.speakFrom(0, id, pref), 80);
  }

  /** Plays the recorded MP3 when one is given (falls back to device speech if it fails). */
  public speak(text: string, pref?: 'US' | 'UK' | 'AU' | 'CA', file?: string): void {
    this.stop();
    this.lastError = '';
    if (file) {
      const base = ((import.meta as any).env && (import.meta as any).env.BASE_URL) || '/';
      const el = new Audio(base + file);
      el.playbackRate = this.rate;
      this.audioEl = el;
      el.onplaying = () => { this.isSpeaking = true; this.isPaused = false; this.notify(); };
      el.onended = () => { this.isSpeaking = false; this.isPaused = false; this.audioEl = null; this.notify(); };
      el.onerror = () => { this.audioEl = null; this.speakSynth(text, pref); };
      el.play().catch(() => {
        if (this.audioEl === el) { this.audioEl = null; this.speakSynth(text, pref); }
      });
      this.isSpeaking = true; this.notify();
      return;
    }
    this.speakSynth(text, pref);
  }

  public toggle(text: string, file?: string): void {
    if (this.isSpeaking && !this.isPaused) this.pause();
    else if (this.isPaused) this.resume();
    else this.speak(text, undefined, file);
  }

  public pause(): void {
    if (this.audioEl && this.isSpeaking && !this.isPaused) {
      this.audioEl.pause(); this.isPaused = true; this.notify(); return;
    }
    if (!this.synth || !this.isSpeaking || this.isPaused) return;
    this.isPaused = true;
    this.runId++;               // invalidate callbacks of the running chunk
    if (this.timer) { clearTimeout(this.timer); this.timer = null; }
    this.synth.cancel();
    this.notify();
  }

  public resume(): void {
    if (this.audioEl && this.isPaused) {
      this.isPaused = false; this.audioEl.play().catch(() => {}); this.notify(); return;
    }
    if (!this.synth || !this.isPaused) return;
    this.isPaused = false;
    const id = ++this.runId;
    window.setTimeout(() => this.speakFrom(this.index, id), 80);
  }

  public stop(): void {
    if (this.audioEl) { this.audioEl.onended = null; this.audioEl.onerror = null; this.audioEl.pause(); this.audioEl = null; }
    this.runId++;
    if (this.timer) { clearTimeout(this.timer); this.timer = null; }
    if (this.synth) this.synth.cancel();
    this.isSpeaking = false; this.isPaused = false; this.queue = []; this.index = 0;
    this.notify();
  }
}

export const tts = new TTSService();

/** React hook: returns a help message when audio is unavailable, else null. */
export function useTtsHelp(): string | null {
  const [help, setHelp] = useState<string | null>(tts.getHelp());
  useEffect(() => {
    setHelp(tts.getHelp());
    return tts.subscribeHelp(() => setHelp(tts.getHelp()));
  }, []);
  return help;
}
