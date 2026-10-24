import React, { useState, useEffect } from 'react';
import { StorageService } from '../services/storage';
import { askGeminiCoach } from '../services/geminiService';
import { 
  Bot, 
  X, 
  Key, 
  Send, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Loader2 
} from 'lucide-react';

interface AiCoachModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuestion?: string;
  initialContext?: string;
}

export const AiCoachModal: React.FC<AiCoachModalProps> = ({
  isOpen,
  onClose,
  initialQuestion,
  initialContext
}) => {
  const [apiKey, setApiKey] = useState('');
  const [savedKey, setSavedKey] = useState('');
  const [prompt, setPrompt] = useState(initialQuestion || '');
  const [context, setContext] = useState(initialContext || '');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      const key = StorageService.getGeminiApiKey();
      setSavedKey(key);
      setApiKey(key);
      if (initialQuestion) setPrompt(initialQuestion);
      if (initialContext) setContext(initialContext);
      setErrorMsg('');
      setResponse('');
    }
  }, [isOpen, initialQuestion, initialContext]);

  if (!isOpen) return null;

  const handleSaveKey = () => {
    StorageService.setGeminiApiKey(apiKey.trim());
    setSavedKey(apiKey.trim());
    setErrorMsg('');
  };

  const handleAskCoach = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setIsLoading(true);
    setErrorMsg('');
    setResponse('');

    try {
      const res = await askGeminiCoach(prompt, context);
      setResponse(res);
    } catch (err: any) {
      setErrorMsg(err.message || 'Could not reach the AI provider. Check your key and connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                TOEIC AI Coach (Optional)
              </h3>
              <p className="text-xs text-slate-500">
                Client-side AI with your own free Gemini or Groq key
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 overflow-y-auto space-y-5 text-xs sm:text-sm">
          {/* API Key Configuration Card */}
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200 text-xs">
                <Key className="w-4 h-4 text-amber-500" />
                <span>Your Gemini or Groq API Key</span>
              </div>
              {savedKey ? (
                <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Key configured
                </span>
              ) : (
                <span className="text-[11px] text-slate-400">
                  Optional feature
                </span>
              )}
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Your API key is saved solely inside your local browser storage and sent only to Google (Gemini) or Groq, depending on the key you paste. Keys starting with gsk_ use Groq, keys starting with AIza use Gemini. The toolkit works 100% offline without an API key!
            </p>

            <div className="flex gap-2">
              <input
                type="password"
                placeholder="Paste a Gemini (AIza...) or Groq (gsk_...) key"
                value={apiKey}
                onChange={e => setApiKey(e.target.value)}
                className="flex-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={handleSaveKey}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold transition cursor-pointer"
              >
                Save Key
              </button>
            </div>
          </div>

          {/* Ask Form */}
          <form onSubmit={handleAskCoach} className="space-y-3">
            {context && (
              <div className="bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <span className="font-bold text-[10px] text-slate-400 uppercase">Context Attached:</span>
                <p className="line-clamp-2">{context}</p>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Ask the AI Tutor a Question:
              </label>
              <textarea
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                rows={3}
                placeholder="e.g., Why is 'Despite' correct instead of 'Although'? Can you explain the subtle difference between 'comply with' and 'adhere to'?"
                className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setPrompt('Please generate 2 new realistic TOEIC Part 5 questions testing subjunctive verbs.')}
                  className="px-2.5 py-1 text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200"
                >
                  Generate 2 Questions
                </button>
                <button
                  type="button"
                  onClick={() => setPrompt('Break down the sentence structure and explain why the distractors are wrong.')}
                  className="px-2.5 py-1 text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200"
                >
                  Analyze Distractors
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>{isLoading ? 'Analyzing...' : 'Ask Tutor'}</span>
              </button>
            </div>
          </form>

          {/* Error Message */}
          {errorMsg && (
            <div className="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 rounded-xl text-xs text-rose-700 dark:text-rose-300 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* AI Response Display */}
          {response && (
            <div className="bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-2 font-bold text-xs text-indigo-700 dark:text-indigo-300">
                <Sparkles className="w-4 h-4 text-indigo-500" />
                <span>AI Tutor Explanation</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed">
                {response}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
