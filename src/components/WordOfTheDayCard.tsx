import React, { useState, useEffect } from 'react';
import { WordOfTheDayService } from '../services/wordOfTheDayService';
import { VocabWord } from '../types';
import { tts } from '../services/tts';
import { 
  Sparkles, 
  Volume2, 
  BookmarkPlus, 
  AlertCircle, 
  ChevronLeft, 
  ChevronRight, 
  Shuffle, 
  Calendar, 
  Check, 
  ArrowRight,
  TrendingUp 
} from 'lucide-react';

interface WordOfTheDayCardProps {
  onNavigateToVocab?: (word?: VocabWord) => void;
  variant?: 'full' | 'compact' | 'hero';
}

export const WordOfTheDayCard: React.FC<WordOfTheDayCardProps> = ({ 
  onNavigateToVocab, 
  variant = 'full' 
}) => {
  const [dayOffset, setDayOffset] = useState<number>(0);
  const [wotdData, setWotdData] = useState<{ word: VocabWord; dateStr: string; dayIndex: number }>(() => 
    WordOfTheDayService.getWordOfTheDay(0)
  );
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Reload word when offset changes
  useEffect(() => {
    setWotdData(WordOfTheDayService.getWordOfTheDay(dayOffset));
    setFeedbackMsg(null);
  }, [dayOffset]);

  // Sync speaking state
  useEffect(() => {
    const unsub = tts.subscribe(state => {
      setIsSpeaking(state.isSpeaking && !state.isPaused);
    });
    return () => unsub();
  }, []);

  const { word, dateStr } = wotdData;
  const wordStatus = WordOfTheDayService.getWordStatus(word.id);

  const handleSpeak = () => {
    tts.speak(word.word, 'US');
  };

  const handleAddToTrainer = () => {
    WordOfTheDayService.addWordToTrainer(word.id, wordStatus.box ? wordStatus.box + 1 : 1);
    setFeedbackMsg(wordStatus.box ? `Advanced to Box ${Math.min(5, wordStatus.box + 1)}!` : 'Added to Box 1 (Learning)!');
    setTimeout(() => setFeedbackMsg(null), 3000);
  };

  const handleAddToMissed = () => {
    WordOfTheDayService.addWordToMissed(word.id);
    setFeedbackMsg('Added to "Words I Missed" queue!');
    setTimeout(() => setFeedbackMsg(null), 3000);
  };

  const handleRandomWord = () => {
    const randomW = WordOfTheDayService.getRandomWord();
    setWotdData({
      word: randomW,
      dateStr: 'Random Spotlight',
      dayIndex: randomW.id - 1
    });
    setFeedbackMsg(null);
  };

  const handleJumpToToday = () => {
    setDayOffset(0);
  };

  return (
    <div className={`bg-gradient-to-br from-white via-indigo-50/20 to-white dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900 border border-indigo-100 dark:border-indigo-900/60 rounded-2xl shadow-xs overflow-hidden transition-all ${
      variant === 'compact' ? 'p-4' : 'p-5 sm:p-6'
    }`}>
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-indigo-100/70 dark:border-indigo-900/40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-300 fill-amber-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
                Word of the Day
              </span>
              {dayOffset === 0 ? (
                <span className="text-[10px] font-bold px-2 py-0.2 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Today
                </span>
              ) : (
                <button
                  onClick={handleJumpToToday}
                  className="text-[10px] font-medium text-slate-500 hover:text-indigo-600 underline cursor-pointer"
                >
                  Jump to Today
                </button>
              )}
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
              <Calendar className="w-3 h-3" />
              <span>{dateStr}</span>
            </p>
          </div>
        </div>

        {/* Date / Shuffle Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setDayOffset(prev => prev - 1)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            title="Previous Day's Word"
            aria-label="Previous Day"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDayOffset(prev => prev + 1)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            title="Next Day's Word"
            aria-label="Next Day"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={handleRandomWord}
            className="p-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition cursor-pointer ml-1"
            title="Surprise me with a random business word"
            aria-label="Random Word"
          >
            <Shuffle className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Word Presentation */}
      <div className="mt-4 space-y-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {word.word}
            </h3>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 italic">
              {word.pos}
            </span>
            <button
              onClick={handleSpeak}
              className={`p-2 rounded-xl transition cursor-pointer ${
                isSpeaking 
                  ? 'bg-indigo-600 text-white animate-pulse' 
                  : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900'
              }`}
              title="Listen to native audio pronunciation"
              aria-label="Pronounce word"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              {word.category}
            </span>
            {wordStatus.box > 0 && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                Box {wordStatus.box}
              </span>
            )}
            {wordStatus.missedCount > 0 && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                Missed {wordStatus.missedCount}x
              </span>
            )}
          </div>
        </div>

        {/* Definition */}
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
          {word.definition}
        </p>

        {/* Example Sentence & Collocation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          <div className="bg-white/80 dark:bg-slate-800/80 rounded-xl p-3 border border-slate-200/80 dark:border-slate-700/80 space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Workplace Context
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic">
              "{word.example}"
            </p>
          </div>

          <div className="bg-amber-50/70 dark:bg-amber-950/30 rounded-xl p-3 border border-amber-200/60 dark:border-amber-800/60 space-y-1">
            <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              High-Frequency TOEIC Collocation
            </span>
            <p className="text-xs sm:text-sm font-semibold text-amber-900 dark:text-amber-200">
              {word.collocation}
            </p>
          </div>
        </div>

        {/* Toast confirmation message */}
        {feedbackMsg && (
          <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800 flex items-center gap-2 animate-fadeIn">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{feedbackMsg}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleAddToTrainer}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition cursor-pointer"
              title="Save to Leitner Spaced-Repetition System"
            >
              <BookmarkPlus className="w-3.5 h-3.5" />
              <span>{wordStatus.box > 0 ? `Promote in SRS (Box ${wordStatus.box})` : 'Add to Vocab Trainer'}</span>
            </button>

            <button
              onClick={handleAddToMissed}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950 text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
              title="Add to your personal 'Words I Missed' drill list"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Add to "Words I Missed"</span>
            </button>
          </div>

          {onNavigateToVocab && (
            <button
              onClick={() => onNavigateToVocab(word)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
            >
              <span>Explore 500 Vocabulary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
