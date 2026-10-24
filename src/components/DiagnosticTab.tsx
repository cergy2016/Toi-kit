import React, { useState, useEffect } from 'react';
import { 
  DIAGNOSTIC_QUESTIONS, 
  calculateDiagnosticScore 
} from '../data/diagnosticTest';
import { StorageService } from '../services/storage';
import { tts, useTtsHelp } from '../services/tts';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  Award, 
  Clock, 
  AlertTriangle, 
  ChevronRight, 
  ChevronLeft, 
  ArrowRight, 
  Sparkles, 
  Info 
} from 'lucide-react';

interface DiagnosticTabProps {
  onNavigate: (tab: any) => void;
  onAddErrorLog: (item: any) => void;
}

export const DiagnosticTab: React.FC<DiagnosticTabProps> = ({ onNavigate, onAddErrorLog }) => {
  const [testState, setTestState] = useState<'intro' | 'testing' | 'results'>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
  const [timerActive, setTimerActive] = useState(false);
  const [result, setResult] = useState<any>(null);

  // Audio TTS states
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const ttsHelp = useTtsHelp();

  // Load existing diagnostic result if any
  useEffect(() => {
    const saved = StorageService.getDiagnosticResult();
    if (saved && !result) {
      setResult(saved);
    }
  }, []);

  // Timer countdown
  useEffect(() => {
    let interval: any = null;
    if (testState === 'testing' && timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleCompleteTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [testState, timerActive, timeLeft]);

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

  const handleStartTest = () => {
    setUserAnswers({});
    setCurrentIndex(0);
    setTimeLeft(25 * 60);
    setTimerActive(true);
    setTestState('testing');
  };

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D') => {
    const currentQ = DIAGNOSTIC_QUESTIONS[currentIndex];
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.id]: key
    }));
  };

  const handlePlayAudio = () => {
    const currentQ = DIAGNOSTIC_QUESTIONS[currentIndex];
    if (!currentQ.audioScript) return;

    tts.setRate(playbackSpeed);
    tts.toggle(currentQ.audioScript);
  };

  const handleReplayAudio = () => {
    const currentQ = DIAGNOSTIC_QUESTIONS[currentIndex];
    if (!currentQ.audioScript) return;
    tts.stop();
    tts.setRate(playbackSpeed);
    tts.speak(currentQ.audioScript);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setPlaybackSpeed(newSpeed);
    tts.setRate(newSpeed);
  };

  const handleCompleteTest = () => {
    tts.stop();
    setTimerActive(false);
    const scoreResult = calculateDiagnosticScore(userAnswers);
    setResult(scoreResult);
    StorageService.saveDiagnosticResult(scoreResult);

    // Automatically record missed questions into Error Log
    DIAGNOSTIC_QUESTIONS.forEach(q => {
      const userChoice = userAnswers[q.id];
      if (userChoice && userChoice !== q.correctAnswer) {
        onAddErrorLog({
          part: q.part,
          questionText: `[Part ${q.part}] ${q.questionText}`,
          userAnswer: userChoice,
          correctAnswer: q.correctAnswer,
          explanation: q.explanation
        });
      }
    });

    setTestState('results');
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const currentQ = DIAGNOSTIC_QUESTIONS[currentIndex];
  const totalQuestions = DIAGNOSTIC_QUESTIONS.length;
  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="max-w-4xl mx-auto py-4 space-y-6">
      {/* INTRO SCREEN */}
      {testState === 'intro' && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 mx-auto">
              <Award className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              TOEIC Diagnostic Mini-Test
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              A balanced 30-question diagnostic sample across Parts 1 through 7 designed to gauge your current baseline strengths and pinpoint areas for study.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-slate-100 dark:border-slate-800 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">
                30
              </div>
              <div>
                <p className="text-xs text-slate-400">Question Pool</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">14 Listening + 16 Reading</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">
                <Clock className="w-5 h-5 text-indigo-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Time Limit</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">25 Minutes Countdown</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">
                <Volume2 className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Speech Synthesis</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Browser Audio Engine</p>
              </div>
            </div>
          </div>

          {/* Previous Result Banner if present */}
          {result && (
            <div className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                  Previous Diagnostic Result
                </span>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  Estimated Score: ~{result.totalEstimatedScore} / 990 pts
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Listening: ~{result.listeningScaled} • Reading: ~{result.readingScaled}
                </p>
              </div>
              <button
                onClick={() => setTestState('results')}
                className="px-3 py-1.5 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 rounded-lg text-xs font-semibold hover:bg-indigo-50 cursor-pointer"
              >
                View Full Results
              </button>
            </div>
          )}

          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 rounded-xl p-4 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
            <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong>Audio Notice:</strong> Listening questions utilize the offline browser SpeechSynthesis API. Audio quality, timbre, and accent fidelity depend on your specific device and operating system voice packs.
            </p>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={handleStartTest}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition shadow-xs cursor-pointer inline-flex items-center gap-2"
            >
              <span>Begin 30-Question Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ACTIVE TESTING SCREEN */}
      {testState === 'testing' && currentQ && (
        <div className="space-y-4">
          {/* Top Control Bar: Progress & Timer */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-2.5 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 rounded-md">
                Question {currentIndex + 1} of {totalQuestions}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Part {currentQ.part} ({currentQ.section})
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-slate-700 dark:text-slate-200">
                <Clock className={`w-4 h-4 ${timeLeft < 300 ? 'text-rose-500 animate-pulse' : 'text-slate-400'}`} />
                <span className={timeLeft < 300 ? 'text-rose-600 font-extrabold' : ''}>
                  {formatTime(timeLeft)}
                </span>
              </div>

              <button
                onClick={handleCompleteTest}
                className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold transition cursor-pointer"
              >
                Submit Early
              </button>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            {/* Part 1 Photo Description */}
            {currentQ.imagePrompt && (
              <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 rounded-xl p-4 text-center">
                <span className="text-xs font-semibold text-slate-400 block mb-1">
                  [PHOTOGRAPH VISUAL DESCRIPTION]
                </span>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200 italic">
                  "{currentQ.imagePrompt}"
                </p>
              </div>
            )}

            {/* Listening Audio Controls */}
            {currentQ.audioScript && (
              <div className="bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded-xl p-4 space-y-3">
                {ttsHelp && (
                  <div className="text-xs text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-lg p-3">
                    {ttsHelp}
                  </div>
                )}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePlayAudio}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition cursor-pointer"
                    >
                      {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      <span>{isPlayingAudio ? 'Pause Spoken Audio' : 'Play Spoken Audio'}</span>
                    </button>
                    <button
                      onClick={handleReplayAudio}
                      className="p-2 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-lg transition cursor-pointer"
                      title="Replay from start"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Playback speed selector */}
                  <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
                    <span className="text-slate-400 px-1 text-[11px]">Speed:</span>
                    {[0.8, 1.0, 1.2].map(speed => (
                      <button
                        key={speed}
                        onClick={() => handleSpeedChange(speed)}
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

                <p className="text-[11px] text-blue-700 dark:text-blue-300">
                  🎧 Listen closely to the spoken options. In Parts 1 and 2, statements are NOT printed on real test booklets.
                </p>
              </div>
            )}

            {/* Reading Passage if Part 6 or 7 */}
            {currentQ.passageText && (
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-xs sm:text-sm font-sans leading-relaxed text-slate-800 dark:text-slate-200 whitespace-pre-line max-h-72 overflow-y-auto">
                {currentQ.passageText}
              </div>
            )}

            {/* Question Text */}
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-relaxed">
                {currentQ.questionText}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-2.5">
              {currentQ.options.map(opt => {
                const isSelected = userAnswers[currentQ.id] === opt.key;
                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(opt.key)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
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
              onClick={() => {
                tts.stop();
                setCurrentIndex(prev => Math.max(0, prev - 1));
              }}
              disabled={currentIndex === 0}
              className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <span className="text-xs text-slate-400">
              Answered {answeredCount} of {totalQuestions}
            </span>

            {currentIndex < totalQuestions - 1 ? (
              <button
                onClick={() => {
                  tts.stop();
                  setCurrentIndex(prev => Math.min(totalQuestions - 1, prev + 1));
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleCompleteTest}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Submit Diagnostic Test</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* RESULTS SCREEN */}
      {testState === 'results' && result && (
        <div className="space-y-6">
          {/* Estimated Score Banner */}
          <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-indigo-800/40 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 px-2.5 py-0.5 rounded bg-indigo-800/40 border border-indigo-700/50">
                  ESTIMATE ONLY
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
                  Estimated TOEIC® Score: ~{result.totalEstimatedScore}
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Scale: 10 – 990 points • Labeled as an approximation only
                </p>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10 shrink-0">
                <div className="text-center">
                  <p className="text-[11px] text-slate-300">Listening</p>
                  <p className="text-xl font-bold text-blue-300">~{result.listeningScaled}</p>
                  <p className="text-[10px] text-slate-400">{result.listeningCorrect} / {result.listeningTotal} correct</p>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <p className="text-[11px] text-slate-300">Reading</p>
                  <p className="text-xl font-bold text-purple-300">~{result.readingScaled}</p>
                  <p className="text-[10px] text-slate-400">{result.readingCorrect} / {result.readingTotal} correct</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 italic pt-2 border-t border-white/10">
              {result.disclaimer}
            </p>
          </div>

          {/* Section & Part Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs space-y-4">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between">
                <span>Performance Breakdown by Part</span>
                <span className="text-xs text-slate-400 font-normal">Accuracy %</span>
              </h3>

              <div className="space-y-3">
                {Object.entries(result.partStats).map(([part, stat]: [string, any]) => {
                  const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                  return (
                    <div key={part} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-slate-700 dark:text-slate-300">Part {part}</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{stat.correct}/{stat.total} ({pct}%)</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${pct >= 75 ? 'bg-emerald-500' : pct >= 50 ? 'bg-indigo-500' : 'bg-rose-500'}`}
                          style={{ width: `${pct}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Analysis & Recommended Study Focus */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Diagnostic Diagnosis
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-xl">
                    <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 block">
                      Strongest Area
                    </span>
                    <p className="text-base font-bold text-emerald-900 dark:text-emerald-100">
                      Part {result.strongestPart}
                    </p>
                  </div>

                  <div className="p-3 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800/60 rounded-xl">
                    <span className="text-[11px] font-semibold text-rose-700 dark:text-rose-300 block">
                      Weakest Area
                    </span>
                    <p className="text-base font-bold text-rose-900 dark:text-rose-100">
                      Part {result.weakestPart}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-xl text-xs text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-200/60 dark:border-slate-700/60">
                  <strong>Recommended Study Focus:</strong> {result.recommendedFocus}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={() => onNavigate('grammar')}
                  className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold transition cursor-pointer"
                >
                  Review Grammar Lessons
                </button>
                <button
                  onClick={() => onNavigate('practice')}
                  className="px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 rounded-lg text-xs font-semibold transition cursor-pointer"
                >
                  Open Practice Bank
                </button>
                <button
                  onClick={handleStartTest}
                  className="px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 rounded-lg text-xs font-semibold transition cursor-pointer"
                >
                  Retake Test
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4">
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Full Question Review ({DIAGNOSTIC_QUESTIONS.length} Questions)
            </h3>

            <div className="space-y-4">
              {DIAGNOSTIC_QUESTIONS.map((q, idx) => {
                const userChoice = userAnswers[q.id];
                const isCorrect = userChoice === q.correctAnswer;
                return (
                  <div 
                    key={q.id} 
                    className={`p-4 rounded-xl border text-sm space-y-2 ${
                      isCorrect 
                        ? 'border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/20' 
                        : 'border-rose-200 dark:border-rose-900/60 bg-rose-50/20 dark:bg-rose-950/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {idx + 1}. [Part {q.part}] {q.questionText}
                      </span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                        isCorrect 
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' 
                          : 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200'
                      }`}>
                        {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                        {isCorrect ? 'Correct' : 'Missed'}
                      </span>
                    </div>

                    <div className="flex gap-4 text-xs">
                      <span className="text-slate-500">
                        Your Answer: <strong className={isCorrect ? 'text-emerald-600' : 'text-rose-600'}>{userChoice || 'None'}</strong>
                      </span>
                      <span className="text-slate-500">
                        Correct Answer: <strong className="text-emerald-600">{q.correctAnswer}</strong>
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-white/60 dark:bg-slate-800/60 p-2 rounded-lg">
                      <strong>Explanation:</strong> {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
