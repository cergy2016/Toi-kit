import React, { useState, useEffect } from 'react';
import { 
  PART_5_QUESTIONS, 
  PART_6_PASSAGES, 
  PART_7_PASSAGES, 
  LISTENING_ITEMS 
} from '../data/practiceBank';
import { tts, useTtsHelp } from '../services/tts';
import { StorageService } from '../services/storage';
import { 
  Headphones, 
  BookOpen, 
  Play, 
  Pause, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  AlertCircle, 
  Sparkles, 
  Info 
} from 'lucide-react';

interface PracticeBankTabProps {
  onAddErrorLog: (item: any) => void;
  onOpenAiForQuestion?: (qText: string, context?: string) => void;
}

type BankCategory = 'all' | 'listening' | 'part5' | 'part6' | 'part7';
type DifficultyFilter = 'all' | 'Elementary (500)' | 'Intermediate (750)' | 'Advanced (900)';

export const PracticeBankTab: React.FC<PracticeBankTabProps> = ({ onAddErrorLog, onOpenAiForQuestion }) => {
  const [category, setCategory] = useState<BankCategory>('part5');
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('all');
  
  // Current item pointer
  const [itemIndex, setItemIndex] = useState(0);

  // User selections & feedback states (persisted in storage)
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>(() => {
    const saved = StorageService.getPracticeProgress();
    const map: Record<string, 'A' | 'B' | 'C' | 'D'> = {};
    Object.keys(saved).forEach(k => {
      map[k] = saved[k].choice as any;
    });
    return map;
  });
  const [showScript, setShowScript] = useState<Record<string, boolean>>({});

  const ttsHelp = useTtsHelp();
  // Audio TTS states
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);

  // Sync TTS state
  useEffect(() => {
    const unsubscribe = tts.subscribe(state => {
      setIsPlayingAudio(state.isSpeaking && !state.isPaused);
    });
    return () => {
      unsubscribe();
      tts.stop();
    };
  }, []);

  // Filtered lists
  const filteredPart5 = PART_5_QUESTIONS.filter(q => 
    difficulty === 'all' ? true : q.difficulty === difficulty
  );

  const [listenPart, setListenPart] = useState<'all' | 1 | 2 | 3 | 4>('all');
  const filteredListening = listenPart === 'all' ? LISTENING_ITEMS : LISTENING_ITEMS.filter(l => l.part === listenPart);

  // Reset index when category or difficulty changes
  useEffect(() => {
    setItemIndex(0);
    tts.stop();
  }, [category, difficulty]);

  // Handle answering Part 5
  const handleAnswerPart5 = (qId: string, choice: 'A' | 'B' | 'C' | 'D') => {
    if (answers[qId]) return; // already answered
    setAnswers(prev => ({ ...prev, [qId]: choice }));

    const question = PART_5_QUESTIONS.find(q => q.id === qId);
    const isCorrect = question ? choice === question.correctAnswer : false;
    StorageService.savePracticeAnswer(qId, choice, isCorrect);

    if (question && !isCorrect) {
      onAddErrorLog({
        part: 5,
        questionText: question.questionText,
        userAnswer: choice,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation
      });
    }
  };

  // Handle answering Listening
  const handleAnswerListening = (itemId: string, qId: string, choice: 'A' | 'B' | 'C' | 'D') => {
    if (answers[qId]) return;
    setAnswers(prev => ({ ...prev, [qId]: choice }));

    const item = LISTENING_ITEMS.find(l => l.id === itemId);
    const subQ = item?.questions.find(q => q.id === qId);
    const isCorrect = subQ ? choice === subQ.correctAnswer : false;
    StorageService.savePracticeAnswer(qId, choice, isCorrect);

    if (subQ && !isCorrect) {
      onAddErrorLog({
        part: item?.part || 2,
        questionText: `[Listening Part ${item?.part}] ${subQ.questionText}`,
        userAnswer: choice,
        correctAnswer: subQ.correctAnswer,
        explanation: subQ.explanation
      });
    }
  };

  // Handle answering Part 6
  const handleAnswerPart6 = (passageId: string, qNum: number, choice: 'A' | 'B' | 'C' | 'D') => {
    const key = `${passageId}-${qNum}`;
    if (answers[key]) return;
    setAnswers(prev => ({ ...prev, [key]: choice }));

    const passage = PART_6_PASSAGES.find(p => p.id === passageId);
    const qObj = passage?.questions.find(q => q.number === qNum);
    const isCorrect = qObj ? choice === qObj.correctAnswer : false;
    StorageService.savePracticeAnswer(key, choice, isCorrect);

    if (qObj && !isCorrect) {
      onAddErrorLog({
        part: 6,
        questionText: `[Part 6 Blank ${qNum}] ${passage?.title}`,
        userAnswer: choice,
        correctAnswer: qObj.correctAnswer,
        explanation: qObj.explanation
      });
    }
  };

  // Handle answering Part 7
  const handleAnswerPart7 = (passageId: string, qId: string, choice: 'A' | 'B' | 'C' | 'D') => {
    if (answers[qId]) return;
    setAnswers(prev => ({ ...prev, [qId]: choice }));

    const passage = PART_7_PASSAGES.find(p => p.id === passageId);
    const qObj = passage?.questions.find(q => q.id === qId);
    const isCorrect = qObj ? choice === qObj.correctAnswer : false;
    StorageService.savePracticeAnswer(qId, choice, isCorrect);

    if (qObj && !isCorrect) {
      onAddErrorLog({
        part: 7,
        questionText: `[Part 7] ${qObj.questionText}`,
        userAnswer: choice,
        correctAnswer: qObj.correctAnswer,
        explanation: qObj.explanation
      });
    }
  };

  // Play audio for current listening item
  const handleToggleAudio = (script: string, file?: string) => {
    tts.setRate(playbackSpeed);
    tts.toggle(script, file);
  };

  const handleReplayAudio = (script: string, file?: string) => {
    tts.stop();
    tts.setRate(playbackSpeed);
    tts.speak(script, undefined, file);
  };

  // Calculate score summary
  const totalAnswered = Object.keys(answers).length;
  let correctCount = 0;

  // Count correct answers across all pools
  Object.entries(answers).forEach(([key, userChoice]) => {
    // Check Part 5
    const p5 = PART_5_QUESTIONS.find(q => q.id === key);
    if (p5 && p5.correctAnswer === userChoice) correctCount++;

    // Check Listening
    LISTENING_ITEMS.forEach(l => {
      const lq = l.questions.find(q => q.id === key);
      if (lq && lq.correctAnswer === userChoice) correctCount++;
    });

    // Check Part 6
    PART_6_PASSAGES.forEach(p => {
      p.questions.forEach(q => {
        if (`${p.id}-${q.number}` === key && q.correctAnswer === userChoice) correctCount++;
      });
    });

    // Check Part 7
    PART_7_PASSAGES.forEach(p => {
      p.questions.forEach(q => {
        if (q.id === key && q.correctAnswer === userChoice) correctCount++;
      });
    });
  });

  const accuracyPct = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto py-6 space-y-6">
      {/* Category Pills & Filters */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setCategory('part5')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition ${
                category === 'part5'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Part 5: Sentences ({PART_5_QUESTIONS.length} Qs)
            </button>
            <button
              onClick={() => setCategory('part6')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition ${
                category === 'part6'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Part 6: Text Completion ({PART_6_PASSAGES.length} Texts)
            </button>
            <button
              onClick={() => setCategory('part7')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition ${
                category === 'part7'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Part 7: Passages ({PART_7_PASSAGES.length} Sets)
            </button>
            <button
              onClick={() => setCategory('listening')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition flex items-center gap-1.5 ${
                category === 'listening'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>Parts 1-4 Audio ({LISTENING_ITEMS.length} Items)</span>
            </button>
          </div>

          {/* Difficulty Dropdown */}
          {category === 'part5' && (
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-400">Difficulty:</span>
              <select
                value={difficulty}
                onChange={e => setDifficulty(e.target.value as DifficultyFilter)}
                className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium px-2.5 py-1.5 text-slate-700 dark:text-slate-200"
              >
                <option value="all">All Levels</option>
                <option value="Elementary (500)">Elementary (500)</option>
                <option value="Intermediate (750)">Intermediate (750)</option>
                <option value="Advanced (900)">Advanced (900)</option>
              </select>
            </div>
          )}
        </div>

        {/* Practice Stats Summary */}
        <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 dark:border-slate-800 text-slate-500">
          <div className="flex items-center gap-4">
            <span>Attempted: <strong className="text-slate-800 dark:text-slate-200">{totalAnswered}</strong></span>
            <span>Correct: <strong className="text-emerald-600">{correctCount}</strong></span>
            <span>Accuracy: <strong className="text-indigo-600 dark:text-indigo-400">{accuracyPct}%</strong></span>
          </div>
          <span className="text-[11px] text-slate-400 italic">
            Missed questions are automatically logged in your Error Log
          </span>
        </div>
      </div>

      {/* ---------------- PART 5 VIEW ---------------- */}
      {category === 'part5' && filteredPart5.length > 0 && (() => {
        const q = filteredPart5[itemIndex];
        const userChoice = answers[q.id];
        const isAnswered = !!userChoice;
        const isCorrect = userChoice === q.correctAnswer;

        return (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between text-xs pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="font-bold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-lg">
                  Question {itemIndex + 1} of {filteredPart5.length}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 font-medium">{q.category}</span>
              </div>
              <span className={`px-2 py-0.5 rounded font-semibold text-[11px] ${
                q.difficulty.includes('500') ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' :
                q.difficulty.includes('750') ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' :
                'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
              }`}>
                {q.difficulty}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed">
              {q.questionText}
            </h3>

            {/* Options */}
            <div className="space-y-2.5">
              {q.options.map(opt => {
                const isSelected = userChoice === opt.key;
                const isTargetCorrect = opt.key === q.correctAnswer;

                let btnStyle = 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-300';

                if (isAnswered) {
                  if (isTargetCorrect) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 font-semibold';
                  } else if (isSelected && !isTargetCorrect) {
                    btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 font-semibold';
                  } else {
                    btnStyle = 'border-slate-200 dark:border-slate-800 opacity-60 text-slate-400';
                  }
                }

                return (
                  <button
                    key={opt.key}
                    onClick={() => handleAnswerPart5(q.id, opt.key)}
                    disabled={isAnswered}
                    className={`w-full text-left p-3.5 rounded-xl border transition flex items-center justify-between cursor-pointer ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                        isAnswered && isTargetCorrect 
                          ? 'bg-emerald-600 text-white' 
                          : isAnswered && isSelected && !isTargetCorrect
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {opt.key}
                      </span>
                      <span className="text-sm">{opt.text}</span>
                    </div>

                    {isAnswered && isTargetCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isTargetCorrect && (
                      <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation */}
            {isAnswered && (
              <div className={`p-4 rounded-xl border text-xs sm:text-sm space-y-2 ${
                isCorrect 
                  ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                  : 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 text-rose-950 dark:text-rose-200'
              }`}>
                <div className="flex items-center justify-between">
                  <strong>{isCorrect ? '✓ Correct! Explanation:' : '✗ Incorrect. Explanation:'}</strong>
                  {onOpenAiForQuestion && (
                    <button
                      onClick={() => onOpenAiForQuestion(q.questionText, q.explanation)}
                      className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Ask AI Tutor</span>
                    </button>
                  )}
                </div>
                <p className="leading-relaxed">{q.explanation}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setItemIndex(prev => Math.max(0, prev - 1))}
                disabled={itemIndex === 0}
                className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 disabled:opacity-40 flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Item</span>
              </button>

              <button
                onClick={() => setItemIndex(prev => Math.min(filteredPart5.length - 1, prev + 1))}
                disabled={itemIndex === filteredPart5.length - 1}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold disabled:opacity-40 flex items-center gap-1 cursor-pointer"
              >
                <span>Next Item</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })()}

      {/* ---------------- PART 6 VIEW ---------------- */}
      {category === 'part6' && PART_6_PASSAGES.length > 0 && (() => {
        const passage = PART_6_PASSAGES[itemIndex];

        return (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between text-xs pb-4 border-b border-slate-100 dark:border-slate-800">
              <span className="font-bold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-lg">
                Text {itemIndex + 1} of {PART_6_PASSAGES.length}: {passage.type}
              </span>
              <span className="text-slate-500 font-medium">{passage.title}</span>
            </div>

            {/* Passage Text */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 text-sm font-sans leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
              {passage.text}
            </div>

            {/* Questions for this text */}
            <div className="space-y-6 pt-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Blanks [131 - 134] Questions & Explanations:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {passage.questions.map(q => {
                  const key = `${passage.id}-${q.number}`;
                  const userChoice = answers[key];
                  const isAnswered = !!userChoice;

                  return (
                    <div key={q.number} className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-3 bg-white dark:bg-slate-900">
                      <div className="font-bold text-xs text-indigo-600 dark:text-indigo-400">
                        Blank [{q.number}]
                      </div>

                      <div className="space-y-1.5">
                        {q.options.map(opt => {
                          const isSelected = userChoice === opt.key;
                          const isTargetCorrect = opt.key === q.correctAnswer;

                          let style = 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-300';
                          if (isAnswered) {
                            if (isTargetCorrect) style = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold';
                            else if (isSelected && !isTargetCorrect) style = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                            else style = 'opacity-50 text-slate-400';
                          }

                          return (
                            <button
                              key={opt.key}
                              onClick={() => handleAnswerPart6(passage.id, q.number, opt.key)}
                              disabled={isAnswered}
                              className={`w-full text-left p-2 rounded-lg border text-xs flex items-center justify-between cursor-pointer ${style}`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-bold">{opt.key}.</span>
                                <span>{opt.text}</span>
                              </div>
                              {isAnswered && isTargetCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>

                      {isAnswered && (
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 p-2 rounded leading-relaxed">
                          <strong>Explanation:</strong> {q.explanation}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Passage Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setItemIndex(prev => Math.max(0, prev - 1))}
                disabled={itemIndex === 0}
                className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 disabled:opacity-40 flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Text</span>
              </button>

              <button
                onClick={() => setItemIndex(prev => Math.min(PART_6_PASSAGES.length - 1, prev + 1))}
                disabled={itemIndex === PART_6_PASSAGES.length - 1}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold disabled:opacity-40 flex items-center gap-1 cursor-pointer"
              >
                <span>Next Text</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })()}

      {/* ---------------- PART 7 VIEW ---------------- */}
      {category === 'part7' && PART_7_PASSAGES.length > 0 && (() => {
        const passage = PART_7_PASSAGES[itemIndex];

        return (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between text-xs pb-4 border-b border-slate-100 dark:border-slate-800">
              <span className="font-bold px-2.5 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-lg">
                Passage {itemIndex + 1} of {PART_7_PASSAGES.length}: {passage.format}
              </span>
              <span className="text-slate-500 font-medium">{passage.title}</span>
            </div>

            {/* Passages display */}
            <div className="space-y-4">
              {passage.passages.map((p, pIdx) => (
                <div key={pIdx} className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-2">
                  {p.label && (
                    <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                      {p.label}
                    </span>
                  )}
                  <p className="text-xs sm:text-sm font-sans leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Questions */}
            <div className="space-y-4 pt-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Comprehension Questions ({passage.questions.length}):
              </h4>

              <div className="space-y-4">
                {passage.questions.map((q, qIdx) => {
                  const userChoice = answers[q.id];
                  const isAnswered = !!userChoice;

                  return (
                    <div key={q.id} className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-3 bg-white dark:bg-slate-900">
                      <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                        {qIdx + 1}. {q.questionText}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map(opt => {
                          const isSelected = userChoice === opt.key;
                          const isTargetCorrect = opt.key === q.correctAnswer;

                          let style = 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-300';
                          if (isAnswered) {
                            if (isTargetCorrect) style = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold';
                            else if (isSelected && !isTargetCorrect) style = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                            else style = 'opacity-50 text-slate-400';
                          }

                          return (
                            <button
                              key={opt.key}
                              onClick={() => handleAnswerPart7(passage.id, q.id, opt.key)}
                              disabled={isAnswered}
                              className={`w-full text-left p-2.5 rounded-lg border text-xs flex items-center justify-between cursor-pointer ${style}`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="font-bold">{opt.key}.</span>
                                <span>{opt.text}</span>
                              </div>
                              {isAnswered && isTargetCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>

                      {isAnswered && (
                        <p className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-lg leading-relaxed">
                          <strong>Explanation:</strong> {q.explanation}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Passage Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setItemIndex(prev => Math.max(0, prev - 1))}
                disabled={itemIndex === 0}
                className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 disabled:opacity-40 flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Set</span>
              </button>

              <button
                onClick={() => setItemIndex(prev => Math.min(PART_7_PASSAGES.length - 1, prev + 1))}
                disabled={itemIndex === PART_7_PASSAGES.length - 1}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold disabled:opacity-40 flex items-center gap-1 cursor-pointer"
              >
                <span>Next Set</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })()}

      {/* ---------------- LISTENING (PARTS 1-4) VIEW ---------------- */}
      {category === 'listening' && (
        <div className="flex flex-wrap gap-2">
          {(['all', 1, 2, 3, 4] as const).map(pn => (
            <button
              key={String(pn)}
              onClick={() => { tts.stop(); setListenPart(pn); setItemIndex(0); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer ${
                listenPart === pn
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              {pn === 'all' ? `All (${LISTENING_ITEMS.length})` : `Part ${pn} (${LISTENING_ITEMS.filter(l => l.part === pn).length})`}
            </button>
          ))}
        </div>
      )}

      {category === 'listening' && filteredListening.length > 0 && (() => {
        const item = filteredListening[itemIndex];
        const isRevealed = !!showScript[item.id];

        return (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center justify-between text-xs pb-4 border-b border-slate-100 dark:border-slate-800">
              <span className="font-bold px-2.5 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-lg">
                Audio Script {itemIndex + 1} of {filteredListening.length} • Part {item.part} ({item.type})
              </span>
              <span className="text-slate-400">{item.audioFile ? 'Recorded MP3 audio' : 'Offline SpeechSynthesis Engine'}</span>
            </div>

            {item.imageFile && (
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
                <img
                  src={import.meta.env.BASE_URL + item.imageFile}
                  alt={item.questions.some(q => answers[q.id]) ? (item.imageAlt || 'Part 1 photograph') : 'Part 1 photograph'}
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            )}

            {/* Audio Player Card */}
            <div className="bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded-xl p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleToggleAudio(item.audioScript, item.audioFile)}
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition cursor-pointer shadow-xs"
                  >
                    {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isPlayingAudio ? 'Pause Spoken Audio' : 'Play Spoken Audio'}</span>
                  </button>

                  <button
                    onClick={() => handleReplayAudio(item.audioScript, item.audioFile)}
                    className="p-2.5 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-xl transition cursor-pointer"
                    title="Replay from beginning"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                {/* Speed selector */}
                <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
                  <span className="text-slate-400 px-1 text-[11px]">Speed:</span>
                  {[0.75, 1.0, 1.25].map(speed => (
                    <button
                      key={speed}
                      onClick={() => {
                        setPlaybackSpeed(speed);
                        tts.setRate(speed);
                      }}
                      className={`px-2 py-0.5 rounded font-medium cursor-pointer ${
                        playbackSpeed === speed 
                          ? 'bg-blue-600 text-white' 
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      {speed}x
                    </button>
                  ))}
                </div>
              </div>

              {ttsHelp && (
                <div className="flex items-start gap-2 text-xs text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-lg p-3">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{ttsHelp} You can still use "Show script" below to read the audio text.</span>
                </div>
              )}

              {/* Device Voice Warning */}
              <div className="flex items-start gap-2 text-xs text-blue-800 dark:text-blue-300">
                <Info className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  {item.audioFile ? 'Recorded audio (MP3). The statements and answer choices are spoken only, as in the real test. Use Show Spoken Audio Script to read them after you answer.' : "Audio is synthesized natively by your browser's TTS API without sending data to servers. Voice accent clarity depends on installed device voices."}
                </span>
              </div>
            </div>

            {item.graphic && (
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-x-auto">
                <div className="px-4 py-2 text-xs font-bold bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200">{item.graphic.title}</div>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800">
                      {item.graphic.headers.map(h => <th key={h} className="text-left px-4 py-2 font-semibold text-slate-700 dark:text-slate-200">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {item.graphic.rows.map((r, ri) => (
                      <tr key={ri} className="border-t border-slate-100 dark:border-slate-800">
                        {r.map((c, ci) => <td key={ci} className="px-4 py-2 text-slate-700 dark:text-slate-300">{c}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Questions for this listening item */}
            <div className="space-y-4">
              {item.questions.map((q, qIdx) => {
                const userChoice = answers[q.id];
                const isAnswered = !!userChoice;

                return (
                  <div key={q.id} className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-3 bg-white dark:bg-slate-900">
                    <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {qIdx + 1}. {q.questionText}
                    </div>

                    <div className={(item.part === 1 || item.part === 2) && !isAnswered && !isRevealed ? 'grid grid-cols-2 sm:grid-cols-4 gap-3' : 'space-y-2'}>
                      {q.options.map(opt => {
                        const hideText = (item.part === 1 || item.part === 2) && !isAnswered && !isRevealed;
                        const isSelected = userChoice === opt.key;
                        const isTargetCorrect = opt.key === q.correctAnswer;

                        let style = 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-300';
                        if (isAnswered) {
                          if (isTargetCorrect) style = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-semibold';
                          else if (isSelected && !isTargetCorrect) style = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                          else style = 'opacity-50 text-slate-400';
                        }

                        return (
                          <button
                            key={opt.key}
                            onClick={() => handleAnswerListening(item.id, q.id, opt.key)}
                            disabled={isAnswered}
                            className={`w-full text-left rounded-lg border flex items-center cursor-pointer ${hideText ? 'justify-center py-4' : 'justify-between p-2.5 text-xs'} ${style}`}
                          >
                            <div className="flex items-center gap-2">
                              <span className={hideText ? 'font-bold text-xl' : 'font-bold'}>{hideText ? opt.key : `${opt.key}.`}</span>
                              {!hideText && <span>{opt.text}</span>}
                            </div>
                            {isAnswered && isTargetCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <p className="text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-lg leading-relaxed">
                        <strong>Explanation:</strong> {q.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Show Script Toggle */}
            <div className="pt-2">
              <button
                onClick={() => setShowScript(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
              >
                {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{isRevealed ? 'Hide Audio Script' : 'Show Spoken Audio Script'}</span>
              </button>

              {isRevealed && (
                <div className="mt-3 p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 whitespace-pre-line leading-relaxed">
                  {item.audioScript}
                </div>
              )}
            </div>

            {/* Listening Item Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => {
                  tts.stop();
                  setItemIndex(prev => Math.max(0, prev - 1));
                }}
                disabled={itemIndex === 0}
                className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 disabled:opacity-40 flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Audio</span>
              </button>

              <button
                onClick={() => {
                  tts.stop();
                  setItemIndex(prev => Math.min(filteredListening.length - 1, prev + 1));
                }}
                disabled={itemIndex === filteredListening.length - 1}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold disabled:opacity-40 flex items-center gap-1 cursor-pointer"
              >
                <span>Next Audio</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
