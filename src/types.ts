export type PartNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface QuestionOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface PracticeQuestion {
  id: string;
  part: PartNumber;
  category?: string;
  difficulty: 'Elementary (500)' | 'Intermediate (750)' | 'Advanced (900)';
  questionText: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  audioScript?: string; // For listening parts 2, 3, 4
  passageText?: string; // For parts 6, 7
  contextType?: string; // e.g., 'Email', 'Memo', 'Announcement', 'Telephone Message'
  imagePrompt?: string; // For Part 1 photo descriptions
}

export interface Part6Passage {
  id: string;
  title: string;
  type: string;
  text: string; // contains placeholders like [131], [132], [133], [134]
  questions: {
    number: number;
    options: QuestionOption[];
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
  }[];
}

export interface Part7Passage {
  id: string;
  title: string;
  format: 'Single Passage' | 'Multiple Passages';
  type: string; // e.g., 'Email & Invoice', 'Schedule & Memo', 'Article'
  passages: {
    label?: string;
    text: string;
  }[];
  questions: {
    id: string;
    questionText: string;
    options: QuestionOption[];
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
  }[];
}

export interface ListeningItem {
  id: string;
  part: 1 | 2 | 3 | 4;
  type: string; // 'Question-Response', 'Conversation', 'Short Talk'
  audioScript: string;
  graphic?: { title: string; headers: string[]; rows: string[][] }; // table shown with Part 3/4 questions
  title?: string;
  imageFile?: string; // Part 1 photograph (relative to the site root)
  imageAlt?: string;
  audioFile?: string; // pre-recorded MP3 (relative to the site root)
  speakers?: { role: string; text: string }[];
  questions: {
    id: string;
    questionText: string;
    options: QuestionOption[];
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
  }[];
}

export interface StrategyGuide {
  part: PartNumber;
  name: string;
  section: 'Listening' | 'Reading';
  totalQuestions: number;
  timeRecommendation: string;
  taskDescription: string;
  traps: { title: string; description: string; example: string }[];
  methodSteps: string[];
  workedExamples: {
    question: string;
    options: QuestionOption[];
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
    keyTakeaway: string;
  }[];
  dos: string[];
  donts: string[];
}

export interface VocabWord {
  id: number;
  word: string;
  pos: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase' | 'idiom' | 'preposition' | 'conjunction';
  definition: string;
  example: string;
  collocation: string;
  category:
    | 'Meetings & Negotiations'
    | 'Finance & Accounting'
    | 'HR & Personnel'
    | 'Travel & Commuting'
    | 'Office Operations & Tech'
    | 'Marketing & Sales'
    | 'Logistics & Procurement'
    | 'Logistics, Shipping & Procurement'
    | 'Contracts & Legal';
  box?: number; // 1 to 5 for Leitner SRS
  nextReviewDate?: string;
  missedCount?: number;
}

export interface GrammarLesson {
  id: number;
  title: string;
  category: string;
  ruleExplanation: string;
  toeicTrap: string;
  practiceItems: {
    question: string;
    options: QuestionOption[];
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
  }[];
}

export interface ErrorLogItem {
  id: string;
  timestamp: number;
  part: PartNumber;
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
  notes?: string;
  resolved?: boolean;
}

export interface StudyPlan {
  targetDate: string;
  dailyMinutes: 20 | 40 | 60;
  targetScore: number;
  weeks: {
    weekNumber: number;
    theme: string;
    days: {
      dayNumber: number;
      taskTitle: string;
      moduleLink: string;
      targetMinutes: number;
      completed: boolean;
    }[];
  }[];
  streak: number;
  lastStudyDate: string;
}

export interface AchievementBadge {
  id: string;
  title: string;
  description: string;
  category: 'all' | 'vocab' | 'practice' | 'grammar' | 'exam' | 'streak' | 'diagnostic' | 'wotd';
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  iconName: string;
  targetValue: number;
  currentValue: number;
  isUnlocked: boolean;
  unlockedAt?: string;
}

export interface UserOverallProgress {
  readinessPercentage: number;
  estimatedScoreMin: number;
  estimatedScoreMax: number;
  totalQuestionsAnswered: number;
  totalPracticeCorrect: number;
  diagnostic: {
    completed: boolean;
    overallScore?: number;
    listeningScore?: number;
    readingScore?: number;
    takenDate?: string;
    strongestPart?: string;
    weakestPart?: string;
  };
  vocabulary: {
    totalStudied: number;
    box1: number;
    box2: number;
    box3: number;
    box4: number;
    box5: number; // Mastered
    missedCount: number;
  };
  practiceBank: {
    totalAnswered: number;
    totalAvailable: number;
    accuracyRate: number;
    part5Answered: number;
    part6Answered: number;
    part7Answered: number;
    listeningAnswered: number;
  };
  grammar: {
    completedLessonsCount: number;
    totalLessons: number;
    drillsAnsweredCount: number;
    totalDrills: number;
  };
  examMode: {
    attemptsCount: number;
    bestScore?: number;
    latestScore?: number;
    averageScore?: number;
  };
  errorLog: {
    totalLogged: number;
    totalResolved: number;
    resolutionRate: number;
  };
  studyPlan: {
    hasPlan: boolean;
    streak: number;
    completedDays: number;
    totalDays: number;
  };
  wordOfTheDay: {
    daysStudiedCount: number;
    todayStudied: boolean;
  };
  badges: AchievementBadge[];
}
