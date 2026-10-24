import React, { useState, useEffect } from 'react';
import { TabId, Header } from './components/Header';
import { LegalBanner } from './components/LegalBanner';
import { OverviewTab } from './components/OverviewTab';
import { ProgressTab } from './components/ProgressTab';
import { DiagnosticTab } from './components/DiagnosticTab';
import { StrategyTab } from './components/StrategyTab';
import { PracticeBankTab } from './components/PracticeBankTab';
import { ExamModeTab } from './components/ExamModeTab';
import { FullTestTab } from './components/FullTestTab';
import { VocabularyTab } from './components/VocabularyTab';
import { GrammarTab } from './components/GrammarTab';
import { StudyPlannerTab } from './components/StudyPlannerTab';
import { ErrorLogTab } from './components/ErrorLogTab';
import { AiCoachModal } from './components/AiCoachModal';
import { WordOfTheDayModal } from './components/WordOfTheDayModal';
import { StorageService } from './services/storage';
import { ProgressService } from './services/progressService';
import { exportStandaloneSingleFileHtml } from './services/htmlExporter';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => StorageService.getTheme());
  const [streakCount, setStreakCount] = useState<number>(() => {
    const plan = StorageService.getStudyPlan();
    return plan?.streak || 1;
  });
  const [errorLogCount, setErrorLogCount] = useState<number>(() => {
    return StorageService.getErrorLog().length;
  });
  const [unlockedBadgesCount, setUnlockedBadgesCount] = useState<number>(() => {
    return Object.keys(StorageService.getUnlockedBadges()).length;
  });

  // WOTD Modal state
  const [isWotdModalOpen, setIsWotdModalOpen] = useState(false);

  // AI Modal state
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiQuestionPrompt, setAiQuestionPrompt] = useState('');
  const [aiContext, setAiContext] = useState('');
  const [hasApiKey, setHasApiKey] = useState<boolean>(() => {
    return !!StorageService.getGeminiApiKey();
  });

  useEffect(() => {
    StorageService.setTheme(theme);
  }, [theme]);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    StorageService.setTheme(nextTheme);
  };

  const handleAddErrorLog = (item: any) => {
    StorageService.addErrorLogItem(item);
    setErrorLogCount(StorageService.getErrorLog().length);
  };

  const handleOpenAiForQuestion = (qText: string, context?: string) => {
    setAiQuestionPrompt(`Can you explain why the correct answer is right and why the distractors are wrong for this question: "${qText}"?`);
    setAiContext(context || '');
    setIsAiModalOpen(true);
  };

  const handleExportHtml = () => {
    exportStandaloneSingleFileHtml();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* 1. Legal Disclaimer Banner (Pinned top) */}
      <LegalBanner />

      {/* 2. Sticky Header with Tabs & Tools */}
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        streakCount={streakCount}
        errorLogCount={errorLogCount}
        unlockedBadgesCount={unlockedBadgesCount}
        onOpenAiModal={() => setIsAiModalOpen(true)}
        onOpenWotdModal={() => setIsWotdModalOpen(true)}
        hasApiKey={hasApiKey}
        onExportHtml={handleExportHtml}
      />

      {/* 3. Main Content Area */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 max-w-7xl w-full mx-auto pb-16">
        {activeTab === 'overview' && (
          <OverviewTab onNavigate={setActiveTab} />
        )}

        {activeTab === 'progress' && (
          <ProgressTab onNavigate={setActiveTab} />
        )}

        {activeTab === 'diagnostic' && (
          <DiagnosticTab 
            onNavigate={setActiveTab} 
            onAddErrorLog={handleAddErrorLog} 
          />
        )}

        {activeTab === 'strategy' && (
          <StrategyTab />
        )}

        {activeTab === 'practice' && (
          <PracticeBankTab 
            onAddErrorLog={handleAddErrorLog} 
            onOpenAiForQuestion={handleOpenAiForQuestion}
          />
        )}

        {activeTab === 'fulltest' && <FullTestTab onAddErrorLog={handleAddErrorLog} />}
        {activeTab === 'exam' && (
          <ExamModeTab 
            onAddErrorLog={handleAddErrorLog} 
          />
        )}

        {activeTab === 'vocabulary' && (
          <VocabularyTab 
            onAddErrorLog={handleAddErrorLog} 
          />
        )}

        {activeTab === 'grammar' && (
          <GrammarTab 
            onAddErrorLog={handleAddErrorLog} 
            onOpenAiForQuestion={handleOpenAiForQuestion}
          />
        )}

        {activeTab === 'planner' && (
          <StudyPlannerTab 
            onNavigate={setActiveTab} 
            streakCount={streakCount}
            onUpdateStreak={setStreakCount}
          />
        )}

        {activeTab === 'error-log' && (
          <ErrorLogTab onNavigate={setActiveTab} />
        )}
      </main>

      {/* 4. Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs py-6 px-4 text-center text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            TOEIC Mastery Toolkit, 2026 Edition • 100% Offline Single-Page Educational Application.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={handleExportHtml}
              className="text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
            >
              Export Offline Standalone HTML
            </button>
            <span>•</span>
            <span className="text-slate-400">No telemetry • No tracking</span>
          </div>
        </div>
      </footer>

      {/* 5. Optional AI Coach Modal */}
      <AiCoachModal
        isOpen={isAiModalOpen}
        onClose={() => {
          setIsAiModalOpen(false);
          setHasApiKey(!!StorageService.getGeminiApiKey());
        }}
        initialQuestion={aiQuestionPrompt}
        initialContext={aiContext}
      />

      {/* 6. Word of the Day Modal */}
      <WordOfTheDayModal
        isOpen={isWotdModalOpen}
        onClose={() => {
          setIsWotdModalOpen(false);
          setUnlockedBadgesCount(Object.keys(StorageService.getUnlockedBadges()).length);
        }}
        onNavigateToVocab={() => {
          setActiveTab('vocabulary');
        }}
      />
    </div>
  );
}
