import React, { useState, useEffect } from 'react';
import { StudyPlan } from '../types';
import { StorageService } from '../services/storage';
import { generateStudyPlan } from '../services/plannerGenerator';
import { 
  Calendar, 
  Clock, 
  Flame, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Sparkles, 
  Target 
} from 'lucide-react';

interface StudyPlannerTabProps {
  onNavigate: (tab: any) => void;
  streakCount: number;
  onUpdateStreak: (newStreak: number) => void;
}

export const StudyPlannerTab: React.FC<StudyPlannerTabProps> = ({ 
  onNavigate, 
  streakCount, 
  onUpdateStreak 
}) => {
  const [plan, setPlan] = useState<StudyPlan | null>(null);
  const [showConfig, setShowConfig] = useState(false);

  // Form inputs
  const defaultDate = new Date(Date.now() + 8 * 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const [targetDate, setTargetDate] = useState(defaultDate);
  const [dailyMinutes, setDailyMinutes] = useState<20 | 40 | 60>(40);
  const [targetScore, setTargetScore] = useState<number>(750);
  const [durationWeeks, setDurationWeeks] = useState<4 | 8 | 12>(8);

  const [expandedWeek, setExpandedWeek] = useState<number>(1);

  // Load plan from localStorage
  useEffect(() => {
    const saved = StorageService.getStudyPlan();
    if (saved) {
      setPlan(saved);
      // Auto-expand first incomplete week
      const incompleteWeek = saved.weeks.find(w => w.days.some(d => !d.completed));
      if (incompleteWeek) {
        setExpandedWeek(incompleteWeek.weekNumber);
      }
    } else {
      setShowConfig(true);
    }
  }, []);

  const handleGeneratePlan = (e: React.FormEvent) => {
    e.preventDefault();
    const newPlan = generateStudyPlan(targetDate, dailyMinutes, targetScore, durationWeeks);
    setPlan(newPlan);
    StorageService.saveStudyPlan(newPlan);
    setShowConfig(false);
    setExpandedWeek(1);
  };

  const handleToggleTask = (weekNum: number, dayNum: number) => {
    if (!plan) return;

    let justCompleted = false;
    const updatedWeeks = plan.weeks.map(w => {
      if (w.weekNumber === weekNum) {
        return {
          ...w,
          days: w.days.map(d => {
            if (d.dayNumber === dayNum) {
              justCompleted = !d.completed;
              return { ...d, completed: !d.completed };
            }
            return d;
          })
        };
      }
      return w;
    });

    // Check streak update
    let newStreak = streakCount;
    const todayStr = new Date().toISOString().split('T')[0];
    if (justCompleted && plan.lastStudyDate !== todayStr) {
      newStreak = streakCount + 1;
      onUpdateStreak(newStreak);
    }

    const updatedPlan: StudyPlan = {
      ...plan,
      weeks: updatedWeeks,
      streak: newStreak,
      lastStudyDate: todayStr
    };

    setPlan(updatedPlan);
    StorageService.saveStudyPlan(updatedPlan);
  };

  // Calculate overall completion stats
  let totalTasks = 0;
  let completedTasks = 0;
  if (plan) {
    plan.weeks.forEach(w => {
      w.days.forEach(d => {
        totalTasks++;
        if (d.completed) completedTasks++;
      });
    });
  }
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Calculate days remaining to target date
  let daysUntilTest = 0;
  if (plan?.targetDate) {
    const diff = new Date(plan.targetDate).getTime() - Date.now();
    daysUntilTest = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }

  return (
    <div className="max-w-5xl mx-auto py-6 space-y-6">
      {/* Plan Dashboard Header */}
      {plan && !showConfig && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Personalized TOEIC Study Schedule
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Target Score: {plan.targetScore}+ Points
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Test Date: {new Date(plan.targetDate).toLocaleDateString()} • {plan.dailyMinutes} min/day commitment
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Days Remaining Banner */}
              <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-xl text-center">
                <span className="text-[10px] text-slate-400 block">Countdown</span>
                <strong className="text-base font-bold text-indigo-700 dark:text-indigo-300">
                  {daysUntilTest} Days
                </strong>
              </div>

              {/* Daily Streak */}
              <div className="p-3 bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 rounded-xl text-center">
                <span className="text-[10px] text-slate-400 block">Daily Streak</span>
                <strong className="text-base font-bold text-orange-600 flex items-center justify-center gap-1">
                  <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
                  <span>{plan.streak}</span>
                </strong>
              </div>

              <button
                onClick={() => setShowConfig(true)}
                className="p-3 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 cursor-pointer"
                title="Adjust plan settings"
              >
                Modify Plan
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                Overall Study Plan Progress ({completedTasks} of {totalTasks} Tasks Completed)
              </span>
              <span className="font-bold text-indigo-600 dark:text-indigo-400">{completionPercentage}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div 
                className="h-full rounded-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Plan Setup / Modification Form */}
      {showConfig && (
        <form onSubmit={handleGeneratePlan} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Configure Your Personalized TOEIC Study Plan
            </h3>
            <p className="text-xs text-slate-500">
              Customize your preparation timeframe, target test date, and daily study budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Target Test Date */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Target Test Date:
              </label>
              <input
                type="date"
                required
                value={targetDate}
                onChange={e => setTargetDate(e.target.value)}
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Target Score */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Target Score Goal:
              </label>
              <select
                value={targetScore}
                onChange={e => setTargetScore(Number(e.target.value))}
                className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200"
              >
                <option value={600}>600 – Intermediate (CEFR B1)</option>
                <option value={750}>750 – Upper-Intermediate (CEFR B2)</option>
                <option value={850}>850 – Advanced Professional (CEFR B2+)</option>
                <option value={900}>900+ – Working Mastery (CEFR C1)</option>
              </select>
            </div>

            {/* Daily Minutes */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Daily Study Budget:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[20, 40, 60].map(mins => (
                  <button
                    type="button"
                    key={mins}
                    onClick={() => setDailyMinutes(mins as 20 | 40 | 60)}
                    className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer ${
                      dailyMinutes === mins
                        ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {mins} min/day
                  </button>
                ))}
              </div>
            </div>

            {/* Duration Weeks */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Preparation Duration:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[4, 8, 12].map(w => (
                  <button
                    type="button"
                    key={w}
                    onClick={() => setDurationWeeks(w as 4 | 8 | 12)}
                    className={`p-2.5 rounded-xl border text-xs font-semibold cursor-pointer ${
                      durationWeeks === w
                        ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
                        : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {w} Weeks
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            {plan && (
              <button
                type="button"
                onClick={() => setShowConfig(false)}
                className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-xs font-semibold rounded-xl text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition cursor-pointer"
            >
              Generate Study Schedule
            </button>
          </div>
        </form>
      )}

      {/* Week-by-Week Accordion */}
      {plan && (
        <div className="space-y-4">
          <h3 className="font-bold text-base text-slate-900 dark:text-white">
            Daily Study Schedule ({plan.weeks.length} Weeks)
          </h3>

          <div className="space-y-3">
            {plan.weeks.map(week => {
              const isExpanded = expandedWeek === week.weekNumber;
              const weekCompletedCount = week.days.filter(d => d.completed).length;

              return (
                <div 
                  key={week.weekNumber}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs"
                >
                  {/* Week Header Toggle */}
                  <button
                    onClick={() => setExpandedWeek(isExpanded ? 0 : week.weekNumber)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition cursor-pointer"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          Week {week.weekNumber}: {week.theme}
                        </span>
                        {weekCompletedCount === 7 && (
                          <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 rounded-full">
                            Completed
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400">
                        {weekCompletedCount} of 7 daily modules completed
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </div>
                  </button>

                  {/* Day Checklist */}
                  {isExpanded && (
                    <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800/60">
                      {week.days.map(day => (
                        <div key={day.dayNumber} className="py-3 flex items-start justify-between gap-3 text-xs sm:text-sm">
                          <div className="flex items-start gap-3">
                            <button
                              onClick={() => handleToggleTask(week.weekNumber, day.dayNumber)}
                              className="mt-0.5 text-slate-400 hover:text-indigo-600 transition cursor-pointer shrink-0"
                            >
                              {day.completed ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100 dark:fill-emerald-950" />
                              ) : (
                                <Circle className="w-5 h-5" />
                              )}
                            </button>

                            <div className="space-y-0.5">
                              <span className="font-bold text-slate-400 text-[11px] block">
                                Day {day.dayNumber} ({day.targetMinutes} min)
                              </span>
                              <span className={`leading-relaxed ${day.completed ? 'line-through text-slate-400' : 'text-slate-800 dark:text-slate-200'}`}>
                                {day.taskTitle}
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={() => onNavigate(day.moduleLink)}
                            className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold shrink-0 flex items-center gap-1 cursor-pointer"
                          >
                            <span>Open</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
