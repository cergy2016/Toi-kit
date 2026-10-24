import React, { useState, useEffect, useMemo } from 'react';
import { VOCABULARY_LIST } from '../data/vocabulary';
import { VocabWord } from '../types';
import { StorageService } from '../services/storage';
import { tts } from '../services/tts';
import { WordOfTheDayCard } from './WordOfTheDayCard';
import { 
  Sparkles, 
  RotateCw, 
  Volume2, 
  Search, 
  Layers, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Bookmark, 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle, 
  TrendingUp, 
  BookMarked,
  Plus,
  BookmarkCheck,
  AlertCircle
} from 'lucide-react';

interface VocabularyTabProps {
  onAddErrorLog?: (item: any) => void;
}

type ViewMode = 'flashcards' | 'quiz' | 'missed' | 'directory';

export const VocabularyTab: React.FC<VocabularyTabProps> = ({ onAddErrorLog }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('flashcards');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showWotdCard, setShowWotdCard] = useState(false);
  
  // SRS progress stored in state and localStorage
  const [srsProgress, setSrsProgress] = useState<Record<number, { box: number; nextReview: number; missedCount: number }>>({});
  
  // Flashcard states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Quiz Mode states
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState({ correct: 0, total: 0 });
  const [quizSelectedOption, setQuizSelectedOption] = useState<number | null>(null);

  const handleMarkWordMissed = (wordId: number) => {
    StorageService.markVocabAsMissed(wordId);
    setSrsProgress(StorageService.getVocabProgress());
  };

  const handlePromoteWord = (wordId: number) => {
    StorageService.promoteVocabWord(wordId);
    setSrsProgress(StorageService.getVocabProgress());
  };

  // Load progress from localStorage
  useEffect(() => {
    const loaded = StorageService.getVocabProgress();
    setSrsProgress(loaded);
  }, []);

  // Filtered vocabulary list
  const filteredWords = useMemo(() => {
    return VOCABULARY_LIST.filter(w => {
      const matchCat = selectedCategory === 'all' || w.category === selectedCategory;
      const matchSearch = searchQuery.trim() === '' || 
        w.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.collocation.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // "Words I Missed" list
  const missedWords = useMemo(() => {
    return VOCABULARY_LIST.filter(w => {
      const prog = srsProgress[w.id];
      return prog && prog.missedCount > 0;
    });
  }, [srsProgress]);

  // Handle Box Progression in Flashcards
  const handleRateCard = (id: number, rating: 'again' | 'hard' | 'good' | 'easy') => {
    const currentProg = srsProgress[id] || { box: 1, nextReview: Date.now(), missedCount: 0 };
    let newBox = currentProg.box;
    let isMissed = false;

    if (rating === 'again') {
      newBox = 1;
      isMissed = true;
    } else if (rating === 'hard') {
      newBox = Math.max(1, currentProg.box);
    } else if (rating === 'good') {
      newBox = Math.min(5, currentProg.box + 1);
    } else if (rating === 'easy') {
      newBox = Math.min(5, currentProg.box + 2);
    }

    StorageService.saveVocabProgress(id, newBox, isMissed);
    setSrsProgress(StorageService.getVocabProgress());

    // Advance to next card
    setIsFlipped(false);
    if (currentIndex < filteredWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // Pronounce word using SpeechSynthesis
  const handleSpeak = (text: string) => {
    tts.stop();
    tts.setRate(1.0);
    tts.speak(text);
  };

  // Generate 4 Quiz options for Quiz Mode
  const quizTargetWord = filteredWords[quizIndex % filteredWords.length] || VOCABULARY_LIST[0];
  const quizOptions = useMemo(() => {
    if (!quizTargetWord) return [];
    // Pick 3 distractors from same category or random
    const pool = VOCABULARY_LIST.filter(w => w.id !== quizTargetWord.id);
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const distractors = shuffled.slice(0, 3);
    const options = [quizTargetWord, ...distractors].sort(() => 0.5 - Math.random());
    return options;
  }, [quizTargetWord?.id]);

  const handleAnswerQuiz = (selectedWordId: number) => {
    if (quizSelectedOption !== null) return;
    setQuizSelectedOption(selectedWordId);

    const isCorrect = selectedWordId === quizTargetWord.id;
    setQuizScore(prev => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      total: prev.total + 1
    }));

    // Update SRS
    StorageService.saveVocabProgress(quizTargetWord.id, isCorrect ? 3 : 1, !isCorrect);
    setSrsProgress(StorageService.getVocabProgress());

    if (!isCorrect && onAddErrorLog) {
      onAddErrorLog({
        part: 5,
        questionText: `[Vocabulary Quiz] What is the definition of "${quizTargetWord.word}"?`,
        userAnswer: VOCABULARY_LIST.find(w => w.id === selectedWordId)?.word || 'Incorrect',
        correctAnswer: quizTargetWord.word,
        explanation: `${quizTargetWord.word} (${quizTargetWord.pos}): ${quizTargetWord.definition}. Example: "${quizTargetWord.example}"`
      });
    }
  };

  const handleNextQuizQuestion = () => {
    setQuizSelectedOption(null);
    setQuizIndex(prev => prev + 1);
  };

  // Calculate box counts
  const boxCounts = useMemo(() => {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    VOCABULARY_LIST.forEach(w => {
      const b = srsProgress[w.id]?.box || 1;
      counts[b as 1 | 2 | 3 | 4 | 5]++;
    });
    return counts;
  }, [srsProgress]);

  const currentWord = filteredWords[currentIndex] || VOCABULARY_LIST[0];
  const currentBox = srsProgress[currentWord?.id]?.box || 1;

  const categories = [
    'all',
    'Meetings & Negotiations',
    'Finance & Accounting',
    'HR & Personnel',
    'Travel & Commuting',
    'Office Operations & Tech',
    'Marketing & Sales',
    'Logistics & Procurement',
    'Contracts & Legal'
  ];

  return (
    <div className="max-w-5xl mx-auto py-6 space-y-6">
      {/* Top Bar: Mode Switcher & Stats */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-500" />
              <span>500 Business & Workplace Vocabulary</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              High-frequency TOEIC collocations, definitions, realistic business context, and Leitner spaced repetition.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start sm:self-auto">
            <button
              onClick={() => setViewMode('flashcards')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                viewMode === 'flashcards'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Flashcards (SRS)
            </button>
            <button
              onClick={() => {
                setViewMode('quiz');
                setQuizSelectedOption(null);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                viewMode === 'quiz'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Quiz Mode
            </button>
            <button
              onClick={() => setViewMode('missed')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer flex items-center gap-1 ${
                viewMode === 'missed'
                  ? 'bg-white dark:bg-slate-700 text-rose-600 dark:text-rose-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <span>Missed Words</span>
              {missedWords.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-rose-100 text-rose-700 font-bold">
                  {missedWords.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setViewMode('directory')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                viewMode === 'directory'
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-300 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              Directory
            </button>
          </div>
        </div>

        {/* Leitner Box Progress Bars */}
        <div className="grid grid-cols-5 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-center">
          {[1, 2, 3, 4, 5].map(b => (
            <div key={b} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 block">Box {b}</span>
              <strong className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                {boxCounts[b as 1 | 2 | 3 | 4 | 5]}
              </strong>
              <span className="text-[9px] text-slate-400 block mt-0.5">
                {b === 1 ? 'New' : b === 2 ? 'Review' : b === 3 ? 'Retaining' : b === 4 ? 'Proficient' : 'Mastered'}
              </span>
            </div>
          ))}
        </div>

        {/* Word of the Day Spotlight Toggle */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={() => setShowWotdCard(prev => !prev)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{showWotdCard ? 'Hide Word of the Day' : 'View Today\'s Business Word of the Day'}</span>
          </button>
          <span className="text-[11px] text-slate-400">
            {boxCounts[5]} / 500 Mastered (Box 5)
          </span>
        </div>
      </div>

      {/* Optional Word of the Day card */}
      {showWotdCard && (
        <WordOfTheDayCard variant="full" />
      )}

      {/* Category Filter Pills & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat === 'all' ? 'All 500 Words' : cat}
            </button>
          ))}
        </div>

        {/* Keyword Search */}
        <div className="relative w-full sm:w-64 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search word or collocation..."
            value={searchQuery}
            onChange={e => {
              setSearchQuery(e.target.value);
              setCurrentIndex(0);
            }}
            className="w-full pl-9 pr-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* ---------------- 1. FLASHCARD MODE ---------------- */}
      {viewMode === 'flashcards' && currentWord && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>Card {currentIndex + 1} of {filteredWords.length}</span>
            <span className="font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              Leitner SRS Box {currentBox}
            </span>
          </div>

          {/* Interactive Flip Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="min-h-[300px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xs flex flex-col justify-between cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 transition relative overflow-hidden select-none"
          >
            {/* Top Card Badge */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2.5 py-1 rounded-lg">
                {currentWord.category}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSpeak(currentWord.word);
                }}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                title="Pronounce word"
              >
                <Volume2 className="w-5 h-5 text-indigo-500" />
              </button>
            </div>

            {/* Front of Card (Word & POS) */}
            {!isFlipped ? (
              <div className="text-center my-auto py-8 space-y-3">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {currentWord.word}
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {currentWord.pos}
                </span>
                <p className="text-xs text-slate-400 pt-4 flex items-center justify-center gap-1.5">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Click anywhere to reveal definition & business collocation</span>
                </p>
              </div>
            ) : (
              /* Back of Card (Definition, Collocation, Example) */
              <div className="my-auto py-4 space-y-5 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-400 block">DEFINITION</span>
                  <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                    {currentWord.definition}
                  </p>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/40 p-3 rounded-xl border border-amber-200/60 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200">
                  <span className="font-bold block text-[11px] text-amber-700 dark:text-amber-300 uppercase">
                    ⭐ High-Yield TOEIC Collocation:
                  </span>
                  <strong className="text-sm font-semibold">{currentWord.collocation}</strong>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold text-slate-400 block">WORKPLACE EXAMPLE</span>
                  <p className="text-xs sm:text-sm italic text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl">
                    "{currentWord.example}"
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Card Footer */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
              <span>Card #{currentWord.id}</span>
              <span className="text-[11px]">Click to flip</span>
            </div>
          </div>

          {/* SRS Grading Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button
              onClick={() => handleRateCard(currentWord.id, 'again')}
              className="p-3 bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-900/60 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 rounded-xl text-xs font-bold transition flex flex-col items-center gap-1 cursor-pointer"
            >
              <span>Again (Missed)</span>
              <span className="text-[10px] font-normal text-rose-500">Reset to Box 1</span>
            </button>

            <button
              onClick={() => handleRateCard(currentWord.id, 'hard')}
              className="p-3 bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 rounded-xl text-xs font-bold transition flex flex-col items-center gap-1 cursor-pointer"
            >
              <span>Hard</span>
              <span className="text-[10px] font-normal text-amber-500">Stay in Box {currentBox}</span>
            </button>

            <button
              onClick={() => handleRateCard(currentWord.id, 'good')}
              className="p-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 rounded-xl text-xs font-bold transition flex flex-col items-center gap-1 cursor-pointer"
            >
              <span>Good</span>
              <span className="text-[10px] font-normal text-blue-500">Advance +1 Box</span>
            </button>

            <button
              onClick={() => handleRateCard(currentWord.id, 'easy')}
              className="p-3 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 rounded-xl text-xs font-bold transition flex flex-col items-center gap-1 cursor-pointer"
            >
              <span>Easy</span>
              <span className="text-[10px] font-normal text-emerald-500">Advance +2 Boxes</span>
            </button>
          </div>
        </div>
      )}

      {/* ---------------- 2. QUIZ MODE ---------------- */}
      {viewMode === 'quiz' && quizTargetWord && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between text-xs pb-4 border-b border-slate-100 dark:border-slate-800">
            <span className="font-bold text-slate-500">
              Quiz Question {quizIndex + 1}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">Score:</span>
              <strong className="text-emerald-600">{quizScore.correct} / {quizScore.total}</strong>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
              {quizTargetWord.category} • Select the correct term for:
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
              "{quizTargetWord.definition}"
            </h3>
            <p className="text-xs text-slate-400 italic">
              Workplace Context: "{quizTargetWord.example}"
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {quizOptions.map(opt => {
              const isSelected = quizSelectedOption === opt.id;
              const isTargetCorrect = opt.id === quizTargetWord.id;
              const hasAnswered = quizSelectedOption !== null;

              let style = 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200';

              if (hasAnswered) {
                if (isTargetCorrect) {
                  style = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold';
                } else if (isSelected && !isTargetCorrect) {
                  style = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 font-bold';
                } else {
                  style = 'border-slate-200 dark:border-slate-800 opacity-50 text-slate-400';
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleAnswerQuiz(opt.id)}
                  disabled={hasAnswered}
                  className={`p-4 rounded-xl border text-left transition flex items-center justify-between cursor-pointer ${style}`}
                >
                  <div>
                    <strong className="text-base block">{opt.word}</strong>
                    <span className="text-xs text-slate-400 font-mono">({opt.pos})</span>
                  </div>

                  {hasAnswered && isTargetCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                  {hasAnswered && isSelected && !isTargetCorrect && <XCircle className="w-5 h-5 text-rose-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          {quizSelectedOption !== null && (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="text-xs text-slate-600 dark:text-slate-300">
                Collocation: <strong>{quizTargetWord.collocation}</strong>
              </div>
              <button
                onClick={handleNextQuizQuestion}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ---------------- 3. WORDS I MISSED LIST ---------------- */}
      {viewMode === 'missed' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-500" />
                <span>Words I Missed ({missedWords.length})</span>
              </h3>
              <p className="text-xs text-slate-500">
                Words you answered incorrectly in Flashcards or Quiz Mode.
              </p>
            </div>
            {missedWords.length > 0 && (
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setViewMode('flashcards');
                }}
                className="px-3.5 py-1.5 bg-rose-600 text-white rounded-lg text-xs font-semibold hover:bg-rose-700 transition cursor-pointer"
              >
                Drill Missed Words
              </button>
            )}
          </div>

          {missedWords.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">No missed words logged yet!</p>
              <p className="text-xs">Practice flashcards or test yourself in Quiz Mode to build your study queue.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {missedWords.map(w => {
                const prog = srsProgress[w.id];
                return (
                  <div key={w.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <strong className="text-base text-slate-900 dark:text-white">{w.word}</strong>
                        <span className="text-xs text-slate-400 font-mono">({w.pos})</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                          Missed {prog?.missedCount || 1}x
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300">{w.definition}</p>
                      <p className="text-[11px] text-amber-700 dark:text-amber-300 font-medium">Collocation: {w.collocation}</p>
                    </div>

                    <button
                      onClick={() => handleSpeak(w.word)}
                      className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 hover:text-slate-800 self-start sm:self-auto cursor-pointer"
                      title="Pronounce"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ---------------- 4. SEARCHABLE DIRECTORY ---------------- */}
      {viewMode === 'directory' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Word Directory ({filteredWords.length} terms)
            </h3>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredWords.map(w => {
              const prog = srsProgress[w.id];
              const box = prog?.box || 0;
              const isMissed = prog && prog.missedCount > 0;

              return (
                <div key={w.id} className="py-3 flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-xs sm:text-sm">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <strong className="text-sm sm:text-base text-slate-900 dark:text-white">{w.word}</strong>
                      <span className="text-xs text-slate-400 font-mono">({w.pos})</span>
                      <span className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded">
                        {w.category}
                      </span>
                      {box > 0 && (
                        <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                          Box {box}
                        </span>
                      )}
                      {isMissed && (
                        <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                          Missed ({prog.missedCount}x)
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">{w.definition}</p>
                    <p className="text-amber-700 dark:text-amber-400 text-xs font-medium">
                      Collocation: <strong>{w.collocation}</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0">
                    <button
                      onClick={() => handleSpeak(w.word)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600 cursor-pointer"
                      title="Pronounce"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handlePromoteWord(w.id)}
                      className="px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition cursor-pointer"
                      title="Save or advance in Leitner SRS trainer"
                    >
                      {box > 0 ? `+ Box ${Math.min(5, box + 1)}` : '+ Add to SRS'}
                    </button>
                    <button
                      onClick={() => handleMarkWordMissed(w.id)}
                      className="px-2 py-1 text-[11px] font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950 transition cursor-pointer"
                      title="Add to personal 'Words I Missed' drill queue"
                    >
                      + Missed
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
