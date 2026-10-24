import React, { useState, useEffect } from 'react';
import { 
  EXAM_40_QUESTIONS, 
  calculateExamScore, 
  ExamQuestion 
} from '../data/examMode';
import { StorageService } from '../services/storage';
import { 
  Clock, 
  Flag, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Save, 
  Grid 
} from 'lucide-react';

interface ExamModeTabProps {
  onAddErrorLog: (item: any) => void;
}

export const ExamModeTab: React.FC<ExamModeTabProps> = ({ onAddErrorLog }) => {
  const [examState, setExamState] = useState<'intro' | 'active' | 'review'>('intro');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [showPalette, setShowPalette] = useState(false);

  // Timer countdown
  useEffect(() => {
    let timer: any = null;
    if (examState === 'active' && isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleSubmitExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [examState, isTimerRunning, timeLeft]);

  const handleStartExam = () => {
    setAnswers({});
    setFlagged({});
    setCurrentIdx(0);
    setTimeLeft(30 * 60);
    setIsTimerRunning(true);
    setExamState('active');
  };

  const handleSelectOption = (choice: 'A' | 'B' | 'C' | 'D') => {
    const q = EXAM_40_QUESTIONS[currentIdx];
    setAnswers(prev => ({ ...prev, [q.id]: choice }));
  };

  const handleToggleFlag = () => {
    const q = EXAM_40_QUESTIONS[currentIdx];
    setFlagged(prev => ({ ...prev, [q.id]: !prev[q.id] }));
  };

  const handleSubmitExam = () => {
    setIsTimerRunning(false);
    const scoreResult = calculateExamScore(answers);
    setResult(scoreResult);
    StorageService.saveExamAttempt(scoreResult);

    // Auto-record missed items into Error Log
    scoreResult.missedQuestions.forEach((q: ExamQuestion) => {
      onAddErrorLog({
        part: q.part,
        questionText: `[Exam Mode Part ${q.part}] ${q.questionText}`,
        userAnswer: answers[q.id] || 'Omitted',
        correctAnswer: q.correctAnswer,
        explanation: q.explanation
      });
    });

    setExamState('review');
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const currentQ = EXAM_40_QUESTIONS[currentIdx];
  const totalQuestions = EXAM_40_QUESTIONS.length;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6">
      {/* 1. INTRO SCREEN */}
      {examState === 'intro' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 mx-auto">
              <Clock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Timed Reading Exam Simulation
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Strict exam simulation: 40 questions across Parts 5, 6, and 7 within a strict 30-minute countdown. No instant hints or answers are revealed until submission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-slate-100 dark:border-slate-800 py-6">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Structure</span>
              <strong className="text-sm text-slate-800 dark:text-slate-200 block">
                20 Part 5 + 8 Part 6 + 12 Part 7
              </strong>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Strict Time Limit</span>
              <strong className="text-sm text-slate-800 dark:text-slate-200 block">
                30 Minutes (45 sec / question avg)
              </strong>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Exam Conditions</span>
              <strong className="text-sm text-slate-800 dark:text-slate-200 block">
                Flagging & Question Palette
              </strong>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p>
              Once you start, the clock cannot be paused. Use the question palette to jump between items and flag challenging questions for later review.
            </p>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={handleStartExam}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition shadow-xs cursor-pointer inline-flex items-center gap-2"
            >
              <span>Start 30-Minute Reading Exam</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 2. ACTIVE EXAM SCREEN */}
      {examState === 'active' && currentQ && (
        <div className="space-y-4">
          {/* Header Bar: Progress, Timer, Flag, Palette Toggle */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-2.5 py-1 bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 rounded-md">
                Q {currentIdx + 1} / {totalQuestions}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Part {currentQ.part}
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Flag Toggle */}
              <button
                onClick={handleToggleFlag}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer border ${
                  flagged[currentQ.id]
                    ? 'bg-amber-50 border-amber-300 text-amber-700 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-300'
                    : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-100'
                }`}
                title="Flag question for review"
              >
                <Flag className={`w-3.5 h-3.5 ${flagged[currentQ.id] ? 'fill-amber-500 text-amber-500' : ''}`} />
                <span className="hidden sm:inline">{flagged[currentQ.id] ? 'Flagged' : 'Flag'}</span>
              </button>

              {/* Palette Drawer Toggle */}
              <button
                onClick={() => setShowPalette(!showPalette)}
                className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 flex items-center gap-1.5 cursor-pointer"
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Palette ({answeredCount}/{totalQuestions})</span>
              </button>

              {/* Countdown Timer */}
              <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <Clock className={`w-4 h-4 ${timeLeft < 300 ? 'text-rose-500 animate-pulse' : 'text-slate-400'}`} />
                <span className={timeLeft < 300 ? 'text-rose-600 font-extrabold' : ''}>
                  {formatTime(timeLeft)}
                </span>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmitExam}
                className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold transition cursor-pointer"
              >
                Submit Exam
              </button>
            </div>
          </div>

          {/* Question Palette Modal / Tray */}
          {showPalette && (
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 pb-2 border-b border-slate-100 dark:border-slate-800">
                <span>Question Palette (Click to jump)</span>
                <span className="text-[11px] text-slate-400 font-normal">
                  Answered: {answeredCount} • Remaining: {totalQuestions - answeredCount}
                </span>
              </div>

              <div className="grid grid-cols-10 gap-1.5">
                {EXAM_40_QUESTIONS.map((q, idx) => {
                  const isAnswered = !!answers[q.id];
                  const isFlag = !!flagged[q.id];
                  const isCurrent = idx === currentIdx;

                  let style = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';

                  if (isCurrent) {
                    style = 'ring-2 ring-indigo-500 font-bold bg-indigo-50 text-indigo-700';
                  } else if (isFlag) {
                    style = 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300 font-bold';
                  } else if (isAnswered) {
                    style = 'bg-indigo-600 text-white font-bold';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setCurrentIdx(idx);
                        setShowPalette(false);
                      }}
                      className={`p-1.5 text-xs rounded border text-center transition cursor-pointer relative ${style}`}
                    >
                      {idx + 1}
                      {isFlag && <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-amber-500"></span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Main Question Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            {/* Passage text if Part 6 or 7 */}
            {currentQ.passageText && (
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-2 max-h-72 overflow-y-auto">
                {currentQ.passageTitle && (
                  <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                    {currentQ.passageTitle}
                  </span>
                )}
                <p className="text-xs sm:text-sm font-sans leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line">
                  {currentQ.passageText}
                </p>
              </div>
            )}

            {/* Question Stem */}
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed">
              {currentQ.questionText}
            </h3>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map(opt => {
                const isSelected = answers[currentQ.id] === opt.key;
                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(opt.key)}
                    className={`w-full text-left p-3.5 rounded-xl border transition flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/50 text-indigo-950 dark:text-indigo-100 font-medium'
                        : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/40 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                        isSelected 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}>
                        {opt.key}
                      </span>
                      <span className="text-sm">{opt.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className="px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 disabled:opacity-40 flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <span className="text-xs text-slate-400">
              Answered {answeredCount} of {totalQuestions}
            </span>

            {currentIdx < totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentIdx(prev => Math.min(totalQuestions - 1, prev + 1))}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmitExam}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Complete Exam</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* 3. POST-EXAM REVIEW SCREEN */}
      {examState === 'review' && result && (
        <div className="space-y-6">
          {/* Result Banner */}
          <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-purple-900/50 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300 px-2.5 py-0.5 rounded bg-purple-900/60 border border-purple-700/60">
                  ESTIMATE ONLY
                </span>
                <h2 className="text-3xl font-extrabold mt-2">
                  Estimated Reading Score: ~{result.estimatedReadingScaled} / 495
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Overall Accuracy: {result.totalCorrect} / {result.totalQuestions} ({result.percentage}%)
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-white/10 p-3 rounded-xl border border-white/10 text-center shrink-0">
                <div>
                  <p className="text-[10px] text-slate-300">Part 5</p>
                  <p className="text-sm font-bold text-white">{result.part5Correct} / {result.part5Total}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-300">Part 6</p>
                  <p className="text-sm font-bold text-white">{result.part6Correct} / {result.part6Total}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-300">Part 7</p>
                  <p className="text-sm font-bold text-white">{result.part7Correct} / {result.part7Total}</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 italic pt-2 border-t border-white/10">
              {result.disclaimer} All missed items were automatically recorded in your Error Log.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Full Exam Item Breakdown & Review
            </h3>
            <button
              onClick={handleStartExam}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Timed Exam</span>
            </button>
          </div>

          {/* Review List */}
          <div className="space-y-4">
            {EXAM_40_QUESTIONS.map(q => {
              const userChoice = answers[q.id];
              const isCorrect = userChoice === q.correctAnswer;

              return (
                <div 
                  key={q.id}
                  className={`p-5 rounded-2xl border text-sm space-y-3 ${
                    isCorrect 
                      ? 'border-emerald-200 dark:border-emerald-950 bg-emerald-50/20 dark:bg-emerald-950/10' 
                      : 'border-rose-200 dark:border-rose-950 bg-rose-50/20 dark:bg-rose-950/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Q{q.number}. [Part {q.part}] {q.questionText}
                    </span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0 ${
                      isCorrect 
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                        : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                    }`}>
                      {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      {isCorrect ? 'Correct' : 'Missed'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.options.map(opt => {
                      const isSelected = userChoice === opt.key;
                      const isTargetCorrect = opt.key === q.correctAnswer;
                      let badge = 'border-slate-200 dark:border-slate-800 text-slate-500';

                      if (isTargetCorrect) {
                        badge = 'border-emerald-400 bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200 font-bold';
                      } else if (isSelected && !isTargetCorrect) {
                        badge = 'border-rose-400 bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200 font-bold';
                      }

                      return (
                        <div key={opt.key} className={`p-2 rounded-lg border flex items-center gap-2 ${badge}`}>
                          <span className="font-bold">{opt.key}.</span>
                          <span>{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-xs bg-white/70 dark:bg-slate-800/60 p-3 rounded-lg border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>Explanation:</strong> {q.explanation}
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
