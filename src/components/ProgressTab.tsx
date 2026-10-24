import React, { useState, useEffect } from 'react';
import { ProgressService } from '../services/progressService';
import { UserOverallProgress, AchievementBadge } from '../types';
import { StorageService } from '../services/storage';
import { 
  Trophy, 
  Award, 
  Target, 
  Sparkles, 
  BookMarked, 
  Crown, 
  BookOpen, 
  ShieldCheck, 
  Layers, 
  Compass, 
  Clock, 
  Zap, 
  CheckCircle2, 
  Flame, 
  Calendar, 
  TrendingUp, 
  ArrowRight, 
  RotateCcw, 
  Download, 
  Check, 
  AlertCircle,
  HelpCircle,
  Lock,
  Unlock,
  BarChart3
} from 'lucide-react';

interface ProgressTabProps {
  onNavigate: (tab: any) => void;
}

export const ProgressTab: React.FC<ProgressTabProps> = ({ onNavigate }) => {
  const [progress, setProgress] = useState<UserOverallProgress>(() => 
    ProgressService.getUserProgress()
  );
  const [badgeFilter, setBadgeFilter] = useState<'all' | 'unlocked' | 'locked' | 'vocab' | 'practice' | 'grammar'>('all');
  const [copyFeedback, setCopyFeedback] = useState(false);

  // Refresh progress whenever tab mounts
  useEffect(() => {
    setProgress(ProgressService.getUserProgress());
  }, []);

  const {
    readinessPercentage,
    estimatedScoreMin,
    estimatedScoreMax,
    totalQuestionsAnswered,
    diagnostic,
    vocabulary,
    practiceBank,
    grammar,
    examMode,
    errorLog,
    studyPlan,
    wordOfTheDay,
    badges
  } = progress;

  const unlockedCount = badges.filter(b => b.isUnlocked).length;

  // Filtered badges
  const filteredBadges = badges.filter(badge => {
    if (badgeFilter === 'unlocked') return badge.isUnlocked;
    if (badgeFilter === 'locked') return !badge.isUnlocked;
    if (badgeFilter === 'vocab') return badge.category === 'vocab';
    if (badgeFilter === 'practice') return badge.category === 'practice';
    if (badgeFilter === 'grammar') return badge.category === 'grammar';
    return true;
  });

  const getTierColors = (tier: AchievementBadge['tier'], isUnlocked: boolean) => {
    if (!isUnlocked) {
      return {
        bg: 'bg-slate-50 dark:bg-slate-800/40',
        border: 'border-slate-200 dark:border-slate-800',
        badgeBg: 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400',
        iconBg: 'bg-slate-100 dark:bg-slate-800 text-slate-400',
      };
    }

    switch (tier) {
      case 'platinum':
        return {
          bg: 'bg-gradient-to-br from-indigo-50/70 via-purple-50/50 to-white dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-slate-900',
          border: 'border-purple-300 dark:border-purple-700 shadow-sm',
          badgeBg: 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white',
          iconBg: 'bg-indigo-600 text-white shadow-xs',
        };
      case 'gold':
        return {
          bg: 'bg-gradient-to-br from-amber-50/80 via-yellow-50/40 to-white dark:from-amber-950/40 dark:via-yellow-950/30 dark:to-slate-900',
          border: 'border-amber-300 dark:border-amber-700 shadow-sm',
          badgeBg: 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white',
          iconBg: 'bg-amber-500 text-white shadow-xs',
        };
      case 'silver':
        return {
          bg: 'bg-gradient-to-br from-slate-100/80 via-zinc-50/50 to-white dark:from-slate-800/60 dark:via-zinc-900/40 dark:to-slate-900',
          border: 'border-slate-300 dark:border-slate-600 shadow-xs',
          badgeBg: 'bg-slate-600 text-white dark:bg-slate-500',
          iconBg: 'bg-slate-600 text-white dark:bg-slate-500 shadow-xs',
        };
      case 'bronze':
      default:
        return {
          bg: 'bg-gradient-to-br from-orange-50/70 via-amber-50/30 to-white dark:from-orange-950/30 dark:via-amber-950/20 dark:to-slate-900',
          border: 'border-orange-300 dark:border-orange-800',
          badgeBg: 'bg-orange-700 text-white',
          iconBg: 'bg-orange-700 text-white shadow-xs',
        };
    }
  };

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'BookMarked': return <BookMarked className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'Crown': return <Crown className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Trophy': return <Trophy className="w-5 h-5" />;
      case 'Clock': return <Clock className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Calendar': return <Calendar className="w-5 h-5" />;
      default: return <Award className="w-5 h-5" />;
    }
  };

  const handleCopySummary = () => {
    const report = `=== TOEIC Mastery Toolkit 2026: Progress Report ===
Overall Test Readiness: ${readinessPercentage}%
Projected Score Band: ${estimatedScoreMin} - ${estimatedScoreMax} pts (ESTIMATE ONLY)
Total Questions Mastered: ${totalQuestionsAnswered}
Badges Earned: ${unlockedCount} / ${badges.length}
Daily Study Streak: ${studyPlan.streak} days

--- Module Breakdown ---
• Diagnostic Test: ${diagnostic.completed ? `Completed (${diagnostic.overallScore} pts)` : 'Not yet taken'}
• 500 Business Vocabulary: ${vocabulary.totalStudied}/500 studied, ${vocabulary.box5} in Leitner Box 5 (Mastered)
• Part 5 Grammar: ${grammar.completedLessonsCount}/${grammar.totalLessons} lessons completed (${grammar.drillsAnsweredCount}/100 drills)
• Practice Bank: ${practiceBank.totalAnswered}/${practiceBank.totalAvailable} questions answered (Accuracy: ${practiceBank.accuracyRate}%)
• Exam Mode: ${examMode.attemptsCount} attempts, Best Score: ${examMode.bestScore}/40
• Error Log: ${errorLog.totalResolved}/${errorLog.totalLogged} errors resolved (${errorLog.resolutionRate}%)
• Word of the Day: ${wordOfTheDay.daysStudiedCount} days completed`;

    navigator.clipboard.writeText(report);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-6 animate-fadeIn">
      {/* ---------------- 1. TOP HERO STATS & READINESS ---------------- */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm border border-indigo-900/60 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/30">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Real-Time Performance Analytics</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Your TOEIC® Mastery Progress
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Track your diagnostic standing, practice mastery, Leitner vocabulary retention, and earn achievement badges as you advance toward your target score.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={handleCopySummary}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition border border-white/10 cursor-pointer"
                title="Copy formatted summary to clipboard"
              >
                {copyFeedback ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
                <span>{copyFeedback ? 'Copied to Clipboard!' : 'Export Progress Report'}</span>
              </button>
            </div>
          </div>

          {/* Readiness Index & Projected Score Card */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full lg:w-auto shrink-0">
            {/* Readiness Index */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center flex flex-col items-center justify-center">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/10"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-indigo-400"
                    strokeDasharray={`${readinessPercentage}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-sm font-extrabold text-white">
                  {readinessPercentage}%
                </span>
              </div>
              <span className="text-xs font-bold text-slate-200 mt-2">Test Readiness</span>
              <span className="text-[10px] text-slate-400">Weighted Index</span>
            </div>

            {/* Projected Score Band */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center flex flex-col items-center justify-center">
              <TrendingUp className="w-6 h-6 text-emerald-400 mb-1" />
              <div className="text-lg sm:text-xl font-extrabold text-white">
                {estimatedScoreMin} – {estimatedScoreMax}
              </div>
              <span className="text-xs font-bold text-slate-200">Projected Score</span>
              <span className="text-[10px] text-amber-300 font-semibold uppercase tracking-wider">
                ESTIMATE ONLY
              </span>
            </div>

            {/* Badges Unlocked */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 text-center flex flex-col items-center justify-center col-span-2 sm:col-span-1">
              <Trophy className="w-6 h-6 text-amber-400 mb-1" />
              <div className="text-lg sm:text-xl font-extrabold text-white">
                {unlockedCount} / {badges.length}
              </div>
              <span className="text-xs font-bold text-slate-200">Badges Earned</span>
              <span className="text-[10px] text-slate-400">
                {Math.round((unlockedCount / badges.length) * 100)}% Complete
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- 2. MODULE MASTERY BREAKDOWN ---------------- */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span>Module Mastery Breakdown</span>
          </h3>
          <span className="text-xs text-slate-500">Click any card to continue studying</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Diagnostic Card */}
          <div 
            onClick={() => onNavigate('diagnostic')}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700 transition cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Diagnostic Test</h4>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  diagnostic.completed 
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' 
                    : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                }`}>
                  {diagnostic.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                30-question diagnostic establishing baseline Listening and Reading metrics.
              </p>
              {diagnostic.completed ? (
                <div className="mt-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 text-xs space-y-1">
                  <div className="flex justify-between font-semibold">
                    <span>Diagnostic Estimate:</span>
                    <strong className="text-indigo-600 dark:text-indigo-400">{diagnostic.overallScore} / 990 pts</strong>
                  </div>
                  {diagnostic.strongestPart && (
                    <div className="text-[11px] text-slate-500">
                      Strongest: <span className="font-medium text-emerald-600 dark:text-emerald-400">{diagnostic.strongestPart}</span>
                    </div>
                  )}
                  {diagnostic.weakestPart && (
                    <div className="text-[11px] text-slate-500">
                      Focus Area: <span className="font-medium text-rose-600 dark:text-rose-400">{diagnostic.weakestPart}</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mt-3 text-xs text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 p-2.5 rounded-xl border border-amber-200 dark:border-amber-800">
                  Take the diagnostic to uncover your initial strengths and estimated score band.
                </div>
              )}
            </div>
            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>{diagnostic.completed ? 'Retake Diagnostic' : 'Start Diagnostic'}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* 500 Vocabulary Card */}
          <div 
            onClick={() => onNavigate('vocabulary')}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700 transition cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">500 Business Vocab</h4>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                  {vocabulary.totalStudied} / 500
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Leitner Spaced-Repetition System across 8 corporate domains.
              </p>

              {/* Stacked Leitner Bar */}
              <div className="mt-3 space-y-1.5">
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>Box 5 (Mastered): <strong className="text-emerald-600 dark:text-emerald-400">{vocabulary.box5}</strong></span>
                  <span>Missed: <strong className="text-rose-600">{vocabulary.missedCount}</strong></span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 flex overflow-hidden">
                  <div style={{ width: `${(vocabulary.box5 / 500) * 100}%` }} className="bg-emerald-500" title={`Box 5: ${vocabulary.box5}`} />
                  <div style={{ width: `${(vocabulary.box4 / 500) * 100}%` }} className="bg-teal-500" title={`Box 4: ${vocabulary.box4}`} />
                  <div style={{ width: `${(vocabulary.box3 / 500) * 100}%` }} className="bg-blue-500" title={`Box 3: ${vocabulary.box3}`} />
                  <div style={{ width: `${(vocabulary.box2 / 500) * 100}%` }} className="bg-amber-500" title={`Box 2: ${vocabulary.box2}`} />
                  <div style={{ width: `${(vocabulary.box1 / 500) * 100}%` }} className="bg-orange-500" title={`Box 1: ${vocabulary.box1}`} />
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>Box 1: {vocabulary.box1}</span>
                  <span>Box 2: {vocabulary.box2}</span>
                  <span>Box 3: {vocabulary.box3}</span>
                  <span>Box 4: {vocabulary.box4}</span>
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>Practice Flashcards & SRS</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Part 5 Grammar Card */}
          <div 
            onClick={() => onNavigate('grammar')}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700 transition cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                    <BookMarked className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Part 5 Grammar</h4>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300">
                  {grammar.completedLessonsCount} / {grammar.totalLessons} Lessons
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                20 core business grammar lessons with rule breakdowns and 100 drill items.
              </p>
              <div className="mt-3 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Drills Answered:</span>
                  <span className="font-semibold">{grammar.drillsAnsweredCount} / {grammar.totalDrills}</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-purple-600 rounded-full transition-all"
                    style={{ width: `${(grammar.drillsAnsweredCount / grammar.totalDrills) * 100}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>Explore Grammar Lessons</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Practice Bank Card */}
          <div 
            onClick={() => onNavigate('practice')}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700 transition cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Practice Bank</h4>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
                  {practiceBank.totalAnswered} / {practiceBank.totalAvailable} Qs
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                175+ original practice items with speech synthesis audio and detailed explanations.
              </p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl">
                <div>Part 5: <strong>{practiceBank.part5Answered}/60</strong></div>
                <div>Part 6: <strong>{practiceBank.part6Answered}/60</strong></div>
                <div>Part 7: <strong>{practiceBank.part7Answered}/42</strong></div>
                <div>Audio (P2-4): <strong>{practiceBank.listeningAnswered}/15</strong></div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>Open Practice Bank</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Exam Mode Card */}
          <div 
            onClick={() => onNavigate('exam')}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700 transition cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Exam Mode</h4>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300">
                  {examMode.attemptsCount} Attempts
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Timed 40-question Reading simulation under strict 30-minute exam conditions.
              </p>
              <div className="mt-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl p-2.5 text-xs flex justify-between items-center font-semibold">
                <span>Best Score:</span>
                <span className="text-rose-600 dark:text-rose-400">
                  {examMode.bestScore ? `${examMode.bestScore} / 40 (${Math.round((examMode.bestScore / 40) * 100)}%)` : 'Not attempted'}
                </span>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>Simulate Timed Exam</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Error Log Card */}
          <div 
            onClick={() => onNavigate('error-log')}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-xs hover:border-indigo-300 dark:hover:border-indigo-700 transition cursor-pointer flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-950 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Error Remediation</h4>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300">
                  {errorLog.totalResolved} / {errorLog.totalLogged} Fixed
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Automatically logs every missed question across Diagnostic, Practice, and Exam modes.
              </p>
              <div className="mt-3 space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-500">Resolution Rate:</span>
                  <span className="text-emerald-600 dark:text-emerald-400">{errorLog.resolutionRate}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all"
                    style={{ width: `${errorLog.resolutionRate}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>Review Error Log</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- 3. MOTIVATIONAL ACHIEVEMENT BADGES ---------------- */}
      <div className="space-y-4 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500 fill-amber-500" />
              <span>Milestone Achievement Badges ({unlockedCount}/{badges.length} Unlocked)</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Unlock badges as you master vocabulary, complete practice items, and maintain study consistency.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'All' },
              { id: 'unlocked', label: `Unlocked (${unlockedCount})` },
              { id: 'locked', label: `In Progress (${badges.length - unlockedCount})` },
              { id: 'vocab', label: 'Vocab' },
              { id: 'practice', label: 'Practice' },
              { id: 'grammar', label: 'Grammar' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setBadgeFilter(f.id as any)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition whitespace-nowrap cursor-pointer ${
                  badgeFilter === f.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBadges.map(badge => {
            const styles = getTierColors(badge.tier, badge.isUnlocked);
            const progressRatio = Math.min(100, Math.round((badge.currentValue / badge.targetValue) * 100));

            return (
              <div
                key={badge.id}
                className={`rounded-2xl p-4 sm:p-5 border transition-all relative overflow-hidden flex flex-col justify-between ${styles.bg} ${styles.border}`}
              >
                <div>
                  {/* Top Badge Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${styles.iconBg}`}>
                        {getBadgeIcon(badge.iconName)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug">
                          {badge.title}
                        </h4>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.2 rounded-full inline-block mt-0.5 ${styles.badgeBg}`}>
                          {badge.tier}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0">
                      {badge.isUnlocked ? (
                        <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs" title="Badge Unlocked!">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-400 flex items-center justify-center" title="Locked">
                          <Lock className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {badge.description}
                  </p>
                </div>

                {/* Bottom Progress Meter */}
                <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-700/50 space-y-1.5">
                  <div className="flex justify-between items-center text-[11px] font-semibold">
                    <span className="text-slate-500 dark:text-slate-400">
                      {badge.isUnlocked ? (
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                          <Unlock className="w-3 h-3" />
                          Unlocked
                        </span>
                      ) : (
                        `Progress: ${badge.currentValue} / ${badge.targetValue}`
                      )}
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-bold">
                      {progressRatio}%
                    </span>
                  </div>

                  <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        badge.isUnlocked ? 'bg-emerald-500' : 'bg-indigo-600 dark:bg-indigo-400'
                      }`}
                      style={{ width: `${progressRatio}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
