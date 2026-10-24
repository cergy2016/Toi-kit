import React from 'react';
import { 
  BookOpen, 
  Target, 
  Compass, 
  Layers, 
  Clock, 
  Sparkles, 
  BookMarked, 
  Calendar, 
  AlertCircle, 
  Sun, 
  Moon, 
  Bot, 
  Flame, 
  Download,
  Trophy
} from 'lucide-react';

export type TabId = 
  | 'overview' 
  | 'progress'
  | 'diagnostic' 
  | 'strategy' 
  | 'practice' 
  | 'exam' 
  | 'fulltest'
  | 'vocabulary' 
  | 'grammar' 
  | 'planner' 
  | 'error-log';

interface HeaderProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  streakCount: number;
  errorLogCount: number;
  unlockedBadgesCount?: number;
  onOpenAiModal: () => void;
  onOpenWotdModal: () => void;
  hasApiKey: boolean;
  onExportHtml: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  theme,
  onToggleTheme,
  streakCount,
  errorLogCount,
  unlockedBadgesCount,
  onOpenAiModal,
  onOpenWotdModal,
  hasApiKey,
  onExportHtml,
}) => {
  const navItems: { id: TabId; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'overview', label: 'Test Overview', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'progress', label: 'Progress & Badges', icon: <Trophy className="w-4 h-4 text-amber-500" />, badge: unlockedBadgesCount },
    { id: 'diagnostic', label: 'Diagnostic Test', icon: <Target className="w-4 h-4" /> },
    { id: 'strategy', label: 'Part Strategies', icon: <Compass className="w-4 h-4" /> },
    { id: 'practice', label: 'Practice Bank', icon: <Layers className="w-4 h-4" /> },
    { id: 'exam', label: 'Exam Mode', icon: <Clock className="w-4 h-4" /> },
    { id: 'fulltest', label: 'Full Tests', icon: <Target className="w-4 h-4" /> },
    { id: 'vocabulary', label: '500 Vocabulary', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'grammar', label: 'Part 5 Grammar', icon: <BookMarked className="w-4 h-4" /> },
    { id: 'planner', label: 'Study Planner', icon: <Calendar className="w-4 h-4" /> },
    { id: 'error-log', label: 'Error Log', icon: <AlertCircle className="w-4 h-4" />, badge: errorLogCount },
  ];

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Bar */}
        <div className="flex items-center justify-between h-16 gap-2">
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer min-w-0" onClick={() => onTabChange('overview')}>
            <div className="w-10 h-10 rounded-xl bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              T
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-lg font-bold truncate tracking-tight text-slate-900 dark:text-white">
                  TOEIC Mastery Toolkit
                </h1>
                <span className="hidden sm:inline text-[11px] font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800">
                  2026 Edition
                </span>
              </div>
              <p className="hidden sm:block text-xs text-slate-500 dark:text-slate-400">
                100% Offline Study Companion • Target 500 – 900+
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Streak Counter */}
            <div 
              className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 rounded-lg text-xs font-semibold border border-orange-200 dark:border-orange-800/60"
              title="Daily study streak counter"
            >
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
              <span>{streakCount}<span className="hidden sm:inline"> {streakCount === 1 ? 'day' : 'days'} streak</span><span className="sm:hidden">d</span></span>
            </div>

            {/* Word of the Day Button */}
            <button
              onClick={onOpenWotdModal}
              className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-semibold border border-indigo-200 dark:border-indigo-800/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors cursor-pointer"
              title="Daily Business Word of the Day"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="hidden md:inline">Word of Day</span>
            </button>

            {/* AI Coach Button */}
            <button
              onClick={onOpenAiModal}
              className={`flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                hasApiKey 
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              title="Optional AI Tutor with your personal Gemini API key"
            >
              <Bot className="w-4 h-4 text-indigo-500" />
              <span className="hidden sm:inline">AI Coach</span>
              {hasApiKey && <span className="w-2 h-2 rounded-full bg-emerald-500"></span>}
            </button>

            {/* Export Standalone Single-File HTML */}
            <button
              onClick={onExportHtml}
              className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              title="Export complete toolkit as an offline single-file HTML document"
            >
              <Download className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              <span className="hidden sm:inline">Export Single HTML</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Horizontal Navigation Tabs */}
        <nav className="flex space-x-1 overflow-x-auto pb-2 scrollbar-none border-t border-slate-100 dark:border-slate-800/80 pt-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-xs dark:bg-indigo-500'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
