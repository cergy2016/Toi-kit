import React, { useState, useEffect } from 'react';
import { GRAMMAR_LESSONS } from '../data/grammarLessons';
import { StorageService } from '../services/storage';
import { 
  BookMarked, 
  Lightbulb, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Check 
} from 'lucide-react';

interface GrammarTabProps {
  onAddErrorLog: (item: any) => void;
  onOpenAiForQuestion?: (qText: string, context?: string) => void;
}

export const GrammarTab: React.FC<GrammarTabProps> = ({ onAddErrorLog, onOpenAiForQuestion }) => {
  const [selectedLessonId, setSelectedLessonId] = useState(1);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>(() => {
    const prog = StorageService.getGrammarProgress();
    const map: Record<string, 'A' | 'B' | 'C' | 'D'> = {};
    Object.keys(prog.answers).forEach(k => {
      map[k] = prog.answers[k].choice as any;
    });
    return map;
  });

  const lesson = GRAMMAR_LESSONS.find(l => l.id === selectedLessonId) || GRAMMAR_LESSONS[0];

  const handleSelectAnswer = (qIndex: number, choice: 'A' | 'B' | 'C' | 'D') => {
    const key = `g-${lesson.id}-${qIndex}`;
    if (userAnswers[key]) return; // already answered
    setUserAnswers(prev => ({ ...prev, [key]: choice }));

    const q = lesson.practiceItems[qIndex];
    const isCorrect = choice === q.correctAnswer;
    StorageService.saveGrammarAnswer(key, choice, isCorrect, lesson.id);

    // Check if this completes the 5 practice items in this lesson
    let answeredInThisLesson = 1;
    lesson.practiceItems.forEach((_, idx) => {
      const otherKey = `g-${lesson.id}-${idx}`;
      if (idx !== qIndex && userAnswers[otherKey]) {
        answeredInThisLesson++;
      }
    });

    if (answeredInThisLesson >= lesson.practiceItems.length) {
      StorageService.markGrammarLessonCompleted(lesson.id);
    }

    if (!isCorrect) {
      onAddErrorLog({
        part: 5,
        questionText: `[Grammar Lesson ${lesson.id}] ${q.question}`,
        userAnswer: choice,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation
      });
    }
  };

  // Calculate completed questions in this lesson
  let lessonCorrect = 0;
  let lessonAnswered = 0;
  lesson.practiceItems.forEach((q, idx) => {
    const key = `g-${lesson.id}-${idx}`;
    if (userAnswers[key]) {
      lessonAnswered++;
      if (userAnswers[key] === q.correctAnswer) lessonCorrect++;
    }
  });

  return (
    <div className="max-w-5xl mx-auto py-6 space-y-6">
      {/* Lesson Selector Header */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookMarked className="w-5 h-5 text-indigo-500" />
              <span>20 Essential Grammar Lessons for Part 5</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Core rules, business examples, trap warnings, and 5 interactive drills per lesson (100 items).
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Lesson {selectedLessonId} of 20</span>
            <span className="font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2.5 py-1 rounded-lg">
              {lessonAnswered === 5 ? `Score: ${lessonCorrect} / 5` : `${lessonAnswered} / 5 Drill Qs Answered`}
            </span>
          </div>
        </div>

        {/* Lesson Number Pills (1 to 20) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {GRAMMAR_LESSONS.map(l => {
            const isSelected = l.id === selectedLessonId;
            // Check if all 5 answered
            const isCompleted = [0, 1, 2, 3, 4].every(idx => !!userAnswers[`g-${l.id}-${idx}`]);

            return (
              <button
                key={l.id}
                onClick={() => setSelectedLessonId(l.id)}
                className={`w-9 h-9 rounded-xl text-xs font-bold shrink-0 transition flex items-center justify-center relative cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : isCompleted
                    ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
                title={`Lesson ${l.id}: ${l.title}`}
              >
                {l.id}
                {isCompleted && !isSelected && (
                  <Check className="w-2.5 h-2.5 absolute top-1 right-1 text-emerald-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Lesson Content */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        {/* Lesson Title & Category */}
        <div className="pb-4 border-b border-slate-100 dark:border-slate-800 space-y-1">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            Lesson {lesson.id} • {lesson.category}
          </span>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            {lesson.title}
          </h3>
        </div>

        {/* 1. Core Rule Explanation */}
        <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white">
            <Lightbulb className="w-4 h-4 text-indigo-500" />
            <span>Grammar Rule & Business Applications</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {lesson.ruleExplanation}
          </p>
        </div>

        {/* 2. TOEIC Trap Warning */}
        <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong>Key TOEIC Trap to Watch For:</strong>
            <p className="leading-relaxed">{lesson.toeicTrap}</p>
          </div>
        </div>

        {/* 3. Five Interactive Practice Drills */}
        <div className="space-y-5 pt-2">
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            Practice Drills (5 Questions)
          </h4>

          <div className="space-y-4">
            {lesson.practiceItems.map((q, idx) => {
              const key = `g-${lesson.id}-${idx}`;
              const userChoice = userAnswers[key];
              const isAnswered = !!userChoice;
              const isCorrect = userChoice === q.correctAnswer;

              return (
                <div 
                  key={idx}
                  className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 space-y-3 bg-white dark:bg-slate-900"
                >
                  <div className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {idx + 1}. {q.question}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map(opt => {
                      const isSelected = userChoice === opt.key;
                      const isTargetCorrect = opt.key === q.correctAnswer;

                      let style = 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-300';
                      if (isAnswered) {
                        if (isTargetCorrect) {
                          style = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 font-bold';
                        } else if (isSelected && !isTargetCorrect) {
                          style = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 font-bold';
                        } else {
                          style = 'border-slate-200 dark:border-slate-800 opacity-50 text-slate-400';
                        }
                      }

                      return (
                        <button
                          key={opt.key}
                          onClick={() => handleSelectAnswer(idx, opt.key)}
                          disabled={isAnswered}
                          className={`p-2.5 rounded-lg border text-xs text-left transition flex items-center justify-between cursor-pointer ${style}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-bold">{opt.key}.</span>
                            <span>{opt.text}</span>
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

                  {/* Explanation */}
                  {isAnswered && (
                    <div className={`p-3 rounded-lg border text-xs leading-relaxed space-y-1 ${
                      isCorrect 
                        ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200' 
                        : 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                    }`}>
                      <div className="flex items-center justify-between">
                        <strong>{isCorrect ? '✓ Correct!' : '✗ Incorrect:'}</strong>
                        {onOpenAiForQuestion && (
                          <button
                            onClick={() => onOpenAiForQuestion(q.question, q.explanation)}
                            className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            <Sparkles className="w-3 h-3" />
                            <span>Ask AI Tutor</span>
                          </button>
                        )}
                      </div>
                      <p>{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Lesson Navigation Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setSelectedLessonId(prev => Math.max(1, prev - 1))}
            disabled={selectedLessonId === 1}
            className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 disabled:opacity-40 flex items-center gap-1 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Lesson</span>
          </button>

          <span className="text-xs text-slate-400">
            {lessonCorrect} / 5 correct in this lesson
          </span>

          <button
            onClick={() => setSelectedLessonId(prev => Math.min(20, prev + 1))}
            disabled={selectedLessonId === 20}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold disabled:opacity-40 flex items-center gap-1 cursor-pointer"
          >
            <span>Next Lesson</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
