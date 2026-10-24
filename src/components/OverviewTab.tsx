import React, { useMemo } from 'react';
import { 
  Headphones, 
  BookOpen, 
  Clock, 
  Award, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink,
  Trophy,
  BarChart3,
  Sparkles
} from 'lucide-react';
import { WordOfTheDayCard } from './WordOfTheDayCard';
import { ProgressService } from '../services/progressService';

interface OverviewTabProps {
  onNavigate: (tab: any) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ onNavigate }) => {
  const progress = useMemo(() => ProgressService.getUserProgress(), []);
  const unlockedBadgesCount = progress.badges.filter(b => b.isUnlocked).length;

  return (
    <div className="space-y-8 max-w-6xl mx-auto py-6">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden border border-indigo-900/50">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/30">
            <Award className="w-3.5 h-3.5" />
            <span>2026 Test Blueprint & Strategy</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Master the TOEIC® Listening & Reading Test
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            The TOEIC® Listening and Reading test measures everyday English communication skills in a global corporate environment. Total test duration is approximately 2 hours for 200 questions, scored on a scale from 10 to 990.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => onNavigate('diagnostic')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold rounded-xl transition shadow-xs cursor-pointer"
            >
              <span>Take Diagnostic Mini-Test (30 Qs)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('progress')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm rounded-xl transition shadow-xs cursor-pointer"
            >
              <Trophy className="w-4 h-4 fill-slate-950" />
              <span>View Progress & Badges ({unlockedBadgesCount} Earned)</span>
            </button>
            <button
              onClick={() => onNavigate('strategy')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold rounded-xl transition border border-white/10 cursor-pointer"
            >
              <span>Explore 7-Part Strategies</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress & Readiness Quick Snapshot Banner */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">Your Study Progress</h3>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                {progress.readinessPercentage}% Ready
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Projected Score: <strong className="text-slate-800 dark:text-slate-200">{progress.estimatedScoreMin} – {progress.estimatedScoreMax} pts</strong> (ESTIMATE ONLY) • {unlockedBadgesCount} / {progress.badges.length} Badges
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <div className="w-32 bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden hidden sm:block">
            <div 
              className="bg-indigo-600 h-full rounded-full transition-all" 
              style={{ width: `${progress.readinessPercentage}%` }} 
            />
          </div>
          <button
            onClick={() => onNavigate('progress')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-xs transition cursor-pointer shrink-0"
          >
            <span>Full Analytics & Badges</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Official ETS Confirmation Reminder */}
      <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-blue-900 dark:text-blue-200">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed">
            <strong>Important Format Verification Notice:</strong> While this toolkit reflects the established modern TOEIC Listening & Reading format, always confirm the latest official test regulations, identification requirements, and registration dates on the official ETS website.
          </div>
        </div>
        <a
          href="https://www.ets.org/toeic"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition shrink-0"
        >
          <span>Visit ETS.org</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Word of the Day Feature Showcase */}
      <div className="space-y-2">
        <WordOfTheDayCard 
          onNavigateToVocab={() => onNavigate('vocabulary')} 
          variant="full" 
        />
      </div>

      {/* Test Structure Cards: Listening & Reading */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LISTENING SECTION */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Section 1: Listening Comprehension</h3>
                  <p className="text-xs text-slate-500">Audio plays only once • Recorded in US, UK, AU, CA accents</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold px-2.5 py-1 bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
                  ~45 Min • 100 Qs
                </span>
                <p className="text-[11px] text-slate-400 mt-1">Scale: 5 – 495 pts</p>
              </div>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800/80 mt-4 text-sm">
              <div className="py-3 flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Part 1: Photographs</h4>
                  <p className="text-xs text-slate-500">Select the spoken statement describing each photo.</p>
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                  6 Questions
                </span>
              </div>

              <div className="py-3 flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Part 2: Question-Response</h4>
                  <p className="text-xs text-slate-500">Hear 1 prompt and 3 spoken choices (A, B, C). No text printed.</p>
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                  25 Questions
                </span>
              </div>

              <div className="py-3 flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Part 3: Conversations</h4>
                  <p className="text-xs text-slate-500">13 dialogues (2-3 speakers) with 3 questions each. Includes graphics.</p>
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                  39 Questions
                </span>
              </div>

              <div className="py-3 flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Part 4: Short Talks</h4>
                  <p className="text-xs text-slate-500">10 monologues (announcements, voicemails, tours) with 3 questions each.</p>
                </div>
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                  30 Questions
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 -mx-6 -mb-6 p-4 rounded-b-2xl">
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span><strong>Key Listening Rule:</strong> Never wait for questions to be read. Preview the next 3 questions during the audio pauses!</span>
            </div>
          </div>
        </div>

        {/* READING SECTION */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Section 2: Reading Comprehension</h3>
                  <p className="text-xs text-slate-500">Self-paced reading • Strict time management is crucial</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold px-2.5 py-1 bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800">
                  75 Min • 100 Qs
                </span>
                <p className="text-[11px] text-slate-400 mt-1">Scale: 5 – 495 pts</p>
              </div>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800/80 mt-4 text-sm">
              <div className="py-3 flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Part 5: Incomplete Sentences</h4>
                  <p className="text-xs text-slate-500">Fill in grammar and vocabulary blanks. Target: 15-20s per item.</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    30 Questions
                  </span>
                  <p className="text-[10px] text-slate-400 mt-0.5">Budget: ~10 min</p>
                </div>
              </div>

              <div className="py-3 flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Part 6: Text Completion</h4>
                  <p className="text-xs text-slate-500">4 business texts with 4 blanks each (includes sentence insertion).</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    16 Questions
                  </span>
                  <p className="text-[10px] text-slate-400 mt-0.5">Budget: ~8 min</p>
                </div>
              </div>

              <div className="py-3 flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200">Part 7: Reading Comprehension</h4>
                  <p className="text-xs text-slate-500">Single passages (29 Qs) and Double/Triple passages (25 Qs).</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                    54 Questions
                  </span>
                  <p className="text-[10px] text-slate-400 mt-0.5">Budget: ~55 min</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 -mx-6 -mb-6 p-4 rounded-b-2xl">
            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              <Clock className="w-4 h-4 text-purple-500 shrink-0" />
              <span><strong>Recommended Reading Pacing:</strong> Part 5 (10 min) + Part 6 (8 min) + Part 7 (55 min) + Review (2 min) = 75 minutes.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Score Equivalence & Target Score Guidelines */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
          TOEIC Score Scale & CEFR Benchmark Levels
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
          Total scores range from 10 to 990 points (sum of Listening 5-495 and Reading 5-495). Scores are scaled based on statistical equating rather than a raw percentage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">CEFR A2</span>
              <span className="text-xs font-bold px-2 py-0.5 bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 rounded">
                400 – 545
              </span>
            </div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Elementary / Basic</h4>
            <p className="text-xs text-slate-500 mt-1">Can handle routine workplace greetings, simple notices, and basic email inquiries.</p>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">CEFR B1</span>
              <span className="text-xs font-bold px-2 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 rounded">
                550 – 780
              </span>
            </div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Intermediate Professional</h4>
            <p className="text-xs text-slate-500 mt-1">Can follow business discussions, draft memos, and participate in workplace meetings.</p>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">CEFR B2</span>
              <span className="text-xs font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded">
                785 – 940
              </span>
            </div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Working Proficiency</h4>
            <p className="text-xs text-slate-500 mt-1">Can negotiate effectively, analyze complex multi-passage reports, and synthesize meetings.</p>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">CEFR C1</span>
              <span className="text-xs font-bold px-2 py-0.5 bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 rounded">
                945 – 990
              </span>
            </div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Advanced Professional</h4>
            <p className="text-xs text-slate-500 mt-1">Fluent communication, nuanced understanding of cultural idioms, and high speed under pressure.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
