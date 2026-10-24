import { ErrorLogItem, VocabWord, StudyPlan } from '../types';

const STORAGE_KEYS = {
  THEME: 'toeic_theme',
  ERROR_LOG: 'toeic_error_log',
  VOCAB_PROGRESS: 'toeic_vocab_progress',
  STUDY_PLAN: 'toeic_study_plan',
  EXAM_HISTORY: 'toeic_exam_history',
  DIAGNOSTIC_RESULT: 'toeic_diagnostic_result',
  GEMINI_API_KEY: 'toeic_user_gemini_key',
  FAVORITES: 'toeic_favorites',
  PRACTICE_PROGRESS: 'toeic_practice_progress',
  GRAMMAR_PROGRESS: 'toeic_grammar_progress',
  WOTD_HISTORY: 'toeic_wotd_history',
  STRATEGY_READ: 'toeic_strategy_read',
  UNLOCKED_BADGES: 'toeic_unlocked_badges',
};

export const StorageService = {
  // Theme
  getTheme(): 'light' | 'dark' {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  },

  setTheme(theme: 'light' | 'dark'): void {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },

  // Error Log
  getErrorLog(): ErrorLogItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ERROR_LOG);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  addErrorLogItem(item: Omit<ErrorLogItem, 'id' | 'timestamp'>): void {
    try {
      const current = this.getErrorLog();
      // Check if duplicate question already exists
      const exists = current.find(e => e.questionText.trim() === item.questionText.trim());
      if (exists) {
        exists.userAnswer = item.userAnswer;
        exists.timestamp = Date.now();
        exists.resolved = false;
        localStorage.setItem(STORAGE_KEYS.ERROR_LOG, JSON.stringify(current));
        return;
      }
      const newItem: ErrorLogItem = {
        ...item,
        id: 'err_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        timestamp: Date.now(),
        resolved: false,
      };
      localStorage.setItem(STORAGE_KEYS.ERROR_LOG, JSON.stringify([newItem, ...current]));
    } catch (e) {
      console.warn('Could not save error log', e);
    }
  },

  updateErrorItem(id: string, updates: Partial<ErrorLogItem>): void {
    try {
      const current = this.getErrorLog();
      const updated = current.map(item => item.id === id ? { ...item, ...updates } : item);
      localStorage.setItem(STORAGE_KEYS.ERROR_LOG, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not update error log item', e);
    }
  },

  removeErrorItem(id: string): void {
    try {
      const current = this.getErrorLog();
      const filtered = current.filter(item => item.id !== id);
      localStorage.setItem(STORAGE_KEYS.ERROR_LOG, JSON.stringify(filtered));
    } catch (e) {
      console.warn('Could not remove error item', e);
    }
  },

  clearErrorLog(): void {
    localStorage.removeItem(STORAGE_KEYS.ERROR_LOG);
  },

  // Vocabulary SRS
  getVocabProgress(): Record<number, { box: number; nextReview: number; missedCount: number }> {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.VOCAB_PROGRESS);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  saveVocabProgress(id: number, box: number, isMissed: boolean): void {
    try {
      const progress = this.getVocabProgress();
      const current = progress[id] || { box: 1, nextReview: Date.now(), missedCount: 0 };
      const intervals = [1, 3, 7, 14, 30]; // days per box
      const days = intervals[Math.min(box - 1, 4)] || 1;
      
      progress[id] = {
        box: Math.max(1, Math.min(5, box)),
        nextReview: Date.now() + days * 24 * 60 * 60 * 1000,
        missedCount: isMissed ? current.missedCount + 1 : current.missedCount,
      };
      localStorage.setItem(STORAGE_KEYS.VOCAB_PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.warn('Could not save vocab progress', e);
    }
  },

  // Study Plan
  getStudyPlan(): StudyPlan | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STUDY_PLAN);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  saveStudyPlan(plan: StudyPlan): void {
    try {
      localStorage.setItem(STORAGE_KEYS.STUDY_PLAN, JSON.stringify(plan));
    } catch (e) {
      console.warn('Could not save study plan', e);
    }
  },

  // Diagnostic Results
  getDiagnosticResult(): any | null {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.DIAGNOSTIC_RESULT);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  },

  saveDiagnosticResult(result: any): void {
    try {
      localStorage.setItem(STORAGE_KEYS.DIAGNOSTIC_RESULT, JSON.stringify(result));
    } catch (e) {
      console.warn('Could not save diagnostic result', e);
    }
  },

  // User Gemini API Key (Optional client-side use)
  getGeminiApiKey(): string {
    return localStorage.getItem(STORAGE_KEYS.GEMINI_API_KEY) || '';
  },

  setGeminiApiKey(key: string): void {
    if (key.trim()) {
      localStorage.setItem(STORAGE_KEYS.GEMINI_API_KEY, key.trim());
    } else {
      localStorage.removeItem(STORAGE_KEYS.GEMINI_API_KEY);
    }
  },

  // Exam History
  getExamHistory(): any[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.EXAM_HISTORY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveExamAttempt(attempt: any): void {
    try {
      const history = this.getExamHistory();
      localStorage.setItem(STORAGE_KEYS.EXAM_HISTORY, JSON.stringify([attempt, ...history]));
    } catch (e) {
      console.warn('Could not save exam attempt', e);
    }
  },

  // Vocabulary Helpers
  markVocabAsMissed(id: number): void {
    try {
      const progress = this.getVocabProgress();
      const current = progress[id] || { box: 1, nextReview: Date.now(), missedCount: 0 };
      progress[id] = {
        box: 1,
        nextReview: Date.now(),
        missedCount: current.missedCount + 1,
      };
      localStorage.setItem(STORAGE_KEYS.VOCAB_PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.warn('Could not mark vocab as missed', e);
    }
  },

  promoteVocabWord(id: number, targetBox?: number): void {
    try {
      const progress = this.getVocabProgress();
      const current = progress[id] || { box: 1, nextReview: Date.now(), missedCount: 0 };
      const nextBox = targetBox ? Math.max(1, Math.min(5, targetBox)) : Math.min(5, (current.box || 1) + 1);
      const intervals = [1, 3, 7, 14, 30];
      const days = intervals[nextBox - 1] || 1;
      progress[id] = {
        box: nextBox,
        nextReview: Date.now() + days * 24 * 60 * 60 * 1000,
        missedCount: current.missedCount,
      };
      localStorage.setItem(STORAGE_KEYS.VOCAB_PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.warn('Could not promote vocab word', e);
    }
  },

  // Practice Bank Progress
  getPracticeProgress(): Record<string, { choice: string; isCorrect: boolean; timestamp: number }> {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PRACTICE_PROGRESS);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  savePracticeAnswer(questionId: string, choice: string, isCorrect: boolean): void {
    try {
      const progress = this.getPracticeProgress();
      progress[questionId] = {
        choice,
        isCorrect,
        timestamp: Date.now(),
      };
      localStorage.setItem(STORAGE_KEYS.PRACTICE_PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.warn('Could not save practice progress', e);
    }
  },

  // Grammar Progress
  getGrammarProgress(): { completedLessons: number[]; answers: Record<string, { choice: string; isCorrect: boolean }> } {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.GRAMMAR_PROGRESS);
      return data ? JSON.parse(data) : { completedLessons: [], answers: {} };
    } catch {
      return { completedLessons: [], answers: {} };
    }
  },

  saveGrammarAnswer(key: string, choice: string, isCorrect: boolean, lessonId: number): void {
    try {
      const current = this.getGrammarProgress();
      current.answers[key] = { choice, isCorrect };
      localStorage.setItem(STORAGE_KEYS.GRAMMAR_PROGRESS, JSON.stringify(current));
    } catch (e) {
      console.warn('Could not save grammar answer', e);
    }
  },

  markGrammarLessonCompleted(lessonId: number): void {
    try {
      const current = this.getGrammarProgress();
      if (!current.completedLessons.includes(lessonId)) {
        current.completedLessons.push(lessonId);
        localStorage.setItem(STORAGE_KEYS.GRAMMAR_PROGRESS, JSON.stringify(current));
      }
    } catch (e) {
      console.warn('Could not mark grammar lesson completed', e);
    }
  },

  // Word of the Day History
  getWotdHistory(): string[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.WOTD_HISTORY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  recordWotdStudied(dateStr?: string): void {
    try {
      const today = dateStr || new Date().toISOString().slice(0, 10);
      const history = this.getWotdHistory();
      if (!history.includes(today)) {
        history.push(today);
        localStorage.setItem(STORAGE_KEYS.WOTD_HISTORY, JSON.stringify(history));
      }
    } catch (e) {
      console.warn('Could not record WOTD study', e);
    }
  },

  isWotdStudiedToday(dateStr?: string): boolean {
    const today = dateStr || new Date().toISOString().slice(0, 10);
    return this.getWotdHistory().includes(today);
  },

  // Strategies Read
  getStrategyRead(): number[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STRATEGY_READ);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  toggleStrategyRead(partNumber: number): number[] {
    try {
      const current = this.getStrategyRead();
      const updated = current.includes(partNumber)
        ? current.filter(p => p !== partNumber)
        : [...current, partNumber];
      localStorage.setItem(STORAGE_KEYS.STRATEGY_READ, JSON.stringify(updated));
      return updated;
    } catch {
      return [];
    }
  },

  // Achievement Badges
  getUnlockedBadges(): Record<string, string> {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.UNLOCKED_BADGES);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  saveUnlockedBadge(badgeId: string): void {
    try {
      const badges = this.getUnlockedBadges();
      if (!badges[badgeId]) {
        badges[badgeId] = new Date().toISOString();
        localStorage.setItem(STORAGE_KEYS.UNLOCKED_BADGES, JSON.stringify(badges));
      }
    } catch (e) {
      console.warn('Could not save unlocked badge', e);
    }
  },

  // Reset Progress (Optional user utility)
  resetAllProgress(): void {
    const keysToReset = [
      STORAGE_KEYS.DIAGNOSTIC_RESULT,
      STORAGE_KEYS.PRACTICE_PROGRESS,
      STORAGE_KEYS.GRAMMAR_PROGRESS,
      STORAGE_KEYS.VOCAB_PROGRESS,
      STORAGE_KEYS.EXAM_HISTORY,
      STORAGE_KEYS.ERROR_LOG,
      STORAGE_KEYS.WOTD_HISTORY,
      STORAGE_KEYS.STRATEGY_READ,
      STORAGE_KEYS.UNLOCKED_BADGES,
    ];
    keysToReset.forEach(k => localStorage.removeItem(k));
  }
};
