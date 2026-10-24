import { AchievementBadge, UserOverallProgress } from '../types';
import { StorageService } from './storage';
import { VOCABULARY_LIST } from '../data/vocabulary';
import { GRAMMAR_LESSONS } from '../data/grammarLessons';
import { 
  PART_5_QUESTIONS, 
  PART_6_PASSAGES, 
  PART_7_PASSAGES, 
  LISTENING_ITEMS 
} from '../data/practiceBank';

// Define the comprehensive list of 15 motivational achievement badges
export const BADGE_DEFINITIONS: Omit<AchievementBadge, 'currentValue' | 'isUnlocked' | 'unlockedAt'>[] = [
  {
    id: 'first_diagnostic',
    title: 'First Step',
    description: 'Complete the 30-question Diagnostic Mini-Test to establish your baseline.',
    category: 'diagnostic',
    tier: 'bronze',
    iconName: 'Target',
    targetValue: 1,
  },
  {
    id: 'vocab_starter',
    title: 'Word Apprentice',
    description: 'Review and study at least 25 business vocabulary terms.',
    category: 'vocab',
    tier: 'bronze',
    iconName: 'Sparkles',
    targetValue: 25,
  },
  {
    id: 'vocab_century',
    title: 'Lexicon Builder',
    description: 'Study 100 business vocabulary words in the SRS trainer.',
    category: 'vocab',
    tier: 'silver',
    iconName: 'BookMarked',
    targetValue: 100,
  },
  {
    id: 'vocab_master_50',
    title: 'Memory Master',
    description: 'Promote 50 vocabulary words to Leitner Box 5 (Mastered).',
    category: 'vocab',
    tier: 'gold',
    iconName: 'Award',
    targetValue: 50,
  },
  {
    id: 'vocab_grand',
    title: 'Business Lexicon Titan',
    description: 'Encounter and study all 500 business vocabulary terms.',
    category: 'vocab',
    tier: 'platinum',
    iconName: 'Crown',
    targetValue: 500,
  },
  {
    id: 'grammar_explorer',
    title: 'Grammar Foundations',
    description: 'Complete practice drills for at least 5 Part 5 grammar lessons.',
    category: 'grammar',
    tier: 'bronze',
    iconName: 'BookOpen',
    targetValue: 5,
  },
  {
    id: 'grammar_complete',
    title: 'Master of Syntax',
    description: 'Complete all 20 Part 5 business grammar lessons.',
    category: 'grammar',
    tier: 'gold',
    iconName: 'ShieldCheck',
    targetValue: 20,
  },
  {
    id: 'practice_starter',
    title: 'Drill Pioneer',
    description: 'Answer at least 25 questions in the Practice Bank.',
    category: 'practice',
    tier: 'bronze',
    iconName: 'Layers',
    targetValue: 25,
  },
  {
    id: 'practice_all_parts',
    title: 'TOEIC Polymath',
    description: 'Complete questions across all 4 Practice Bank sections (Listening, Part 5, Part 6, Part 7).',
    category: 'practice',
    tier: 'silver',
    iconName: 'Compass',
    targetValue: 4,
  },
  {
    id: 'practice_century',
    title: 'Question Bank Champion',
    description: 'Answer 100 questions in the Practice Bank.',
    category: 'practice',
    tier: 'gold',
    iconName: 'Trophy',
    targetValue: 100,
  },
  {
    id: 'exam_finisher',
    title: 'Simulation Veteran',
    description: 'Complete a full 30-minute timed Reading Exam.',
    category: 'exam',
    tier: 'silver',
    iconName: 'Clock',
    targetValue: 1,
  },
  {
    id: 'exam_high_scorer',
    title: '900 Club Contender',
    description: 'Score 80% or higher (32+/40) on a timed Exam Mode simulation.',
    category: 'exam',
    tier: 'gold',
    iconName: 'Zap',
    targetValue: 1,
  },
  {
    id: 'error_slayer',
    title: 'Mistake Alchemist',
    description: 'Review and resolve at least 10 items in your Error Log.',
    category: 'all',
    tier: 'bronze',
    iconName: 'CheckCircle2',
    targetValue: 10,
  },
  {
    id: 'streak_master',
    title: 'Relentless Consistency',
    description: 'Maintain a 7-day daily study streak.',
    category: 'streak',
    tier: 'silver',
    iconName: 'Flame',
    targetValue: 7,
  },
  {
    id: 'wotd_devotee',
    title: 'Daily Business Scholar',
    description: 'Study the Word of the Day on 5 different days.',
    category: 'wotd',
    tier: 'bronze',
    iconName: 'Calendar',
    targetValue: 5,
  },
];

export const ProgressService = {
  /**
   * Aggregates full user progress across all modules
   */
  getUserProgress(): UserOverallProgress {
    // 1. Diagnostic
    const diagnosticData = StorageService.getDiagnosticResult();
    const isDiagDone = !!diagnosticData && !!diagnosticData.overallScore;

    // 2. Vocabulary
    const vocabProgress = StorageService.getVocabProgress();
    let box1 = 0, box2 = 0, box3 = 0, box4 = 0, box5 = 0;
    let missedCount = 0;
    const studiedWordIds = Object.keys(vocabProgress);

    studiedWordIds.forEach(idStr => {
      const p = vocabProgress[Number(idStr)];
      if (p) {
        if (p.box === 1) box1++;
        else if (p.box === 2) box2++;
        else if (p.box === 3) box3++;
        else if (p.box === 4) box4++;
        else if (p.box === 5) box5++;

        if (p.missedCount > 0) missedCount++;
      }
    });
    const totalVocabStudied = studiedWordIds.length;

    // 3. Practice Bank
    const practiceProgress = StorageService.getPracticeProgress();
    const answeredKeys = Object.keys(practiceProgress);
    let totalPracticeCorrect = 0;
    let part5Answered = 0;
    let part6Answered = 0;
    let part7Answered = 0;
    let listeningAnswered = 0;

    answeredKeys.forEach(k => {
      const item = practiceProgress[k];
      if (item.isCorrect) totalPracticeCorrect++;

      if (k.startsWith('p5-')) part5Answered++;
      else if (k.startsWith('p6-')) part6Answered++;
      else if (k.startsWith('p7-')) part7Answered++;
      else if (k.startsWith('list-')) listeningAnswered++;
    });

    // Total available in practice bank: 60 (P5) + 60 (P6) + 42 (P7) + 15 (Listening) = 177
    const totalPracticeAvailable = 177;
    const practiceAccuracy = answeredKeys.length > 0 
      ? Math.round((totalPracticeCorrect / answeredKeys.length) * 100) 
      : 0;

    // 4. Grammar
    const grammarProgress = StorageService.getGrammarProgress();
    const completedLessonsCount = grammarProgress.completedLessons.length;
    const drillsAnsweredCount = Object.keys(grammarProgress.answers).length;
    const totalLessons = GRAMMAR_LESSONS.length;
    const totalDrills = totalLessons * 5; // 100 drills

    // 5. Exam Mode
    const examHistory = StorageService.getExamHistory();
    const attemptsCount = examHistory.length;
    let bestExamScore = 0;
    let latestExamScore = 0;
    let totalScoreSum = 0;

    if (attemptsCount > 0) {
      latestExamScore = examHistory[0].score || 0;
      examHistory.forEach((att: any) => {
        const s = att.score || 0;
        if (s > bestExamScore) bestExamScore = s;
        totalScoreSum += s;
      });
    }
    const averageScore = attemptsCount > 0 ? Math.round(totalScoreSum / attemptsCount) : 0;

    // 6. Error Log
    const errorLog = StorageService.getErrorLog();
    const totalLogged = errorLog.length;
    const totalResolved = errorLog.filter(e => e.resolved).length;
    const resolutionRate = totalLogged > 0 ? Math.round((totalResolved / totalLogged) * 100) : 0;

    // 7. Study Plan
    const studyPlan = StorageService.getStudyPlan();
    let planCompletedDays = 0;
    let planTotalDays = 0;
    if (studyPlan && studyPlan.weeks) {
      studyPlan.weeks.forEach(w => {
        w.days.forEach(d => {
          planTotalDays++;
          if (d.completed) planCompletedDays++;
        });
      });
    }

    // 8. Word of the Day
    const wotdHistory = StorageService.getWotdHistory();
    const daysStudiedCount = wotdHistory.length;
    const todayStudied = StorageService.isWotdStudiedToday();

    // 9. Strategies
    const strategyRead = StorageService.getStrategyRead();

    // 10. Compute Badges
    const unlockedBadgesMap = StorageService.getUnlockedBadges();
    const computedBadges: AchievementBadge[] = BADGE_DEFINITIONS.map(def => {
      let currentValue = 0;

      switch (def.id) {
        case 'first_diagnostic':
          currentValue = isDiagDone ? 1 : 0;
          break;
        case 'vocab_starter':
          currentValue = totalVocabStudied;
          break;
        case 'vocab_century':
          currentValue = totalVocabStudied;
          break;
        case 'vocab_master_50':
          currentValue = box5;
          break;
        case 'vocab_grand':
          currentValue = totalVocabStudied;
          break;
        case 'grammar_explorer':
          currentValue = completedLessonsCount;
          break;
        case 'grammar_complete':
          currentValue = completedLessonsCount;
          break;
        case 'practice_starter':
          currentValue = answeredKeys.length;
          break;
        case 'practice_all_parts': {
          let sectionsWithActivity = 0;
          if (listeningAnswered >= 1) sectionsWithActivity++;
          if (part5Answered >= 1) sectionsWithActivity++;
          if (part6Answered >= 1) sectionsWithActivity++;
          if (part7Answered >= 1) sectionsWithActivity++;
          currentValue = sectionsWithActivity;
          break;
        }
        case 'practice_century':
          currentValue = answeredKeys.length;
          break;
        case 'exam_finisher':
          currentValue = attemptsCount;
          break;
        case 'exam_high_scorer':
          currentValue = (bestExamScore >= 32) ? 1 : 0; // 32/40 = 80%
          break;
        case 'error_slayer':
          currentValue = totalResolved;
          break;
        case 'streak_master':
          currentValue = studyPlan?.streak || 1;
          break;
        case 'wotd_devotee':
          currentValue = daysStudiedCount;
          break;
        default:
          currentValue = 0;
      }

      const isUnlocked = currentValue >= def.targetValue || !!unlockedBadgesMap[def.id];
      const unlockedAt = unlockedBadgesMap[def.id] || (isUnlocked ? new Date().toISOString() : undefined);

      // Auto persist unlock if reached
      if (isUnlocked && !unlockedBadgesMap[def.id]) {
        StorageService.saveUnlockedBadge(def.id);
      }

      return {
        ...def,
        currentValue,
        isUnlocked,
        unlockedAt,
      };
    });

    // 11. Compute Overall Readiness Index (0 - 100%)
    // Weightings: Diagnostic (15%), Practice Bank (30%), Vocab (25%), Grammar (15%), Exam (15%)
    const diagPart = isDiagDone ? 15 : 0;
    const practicePart = Math.min(30, Math.round((answeredKeys.length / totalPracticeAvailable) * 30));
    const vocabPart = Math.min(25, Math.round((totalVocabStudied / 200) * 15 + (box5 / 50) * 10));
    const grammarPart = Math.min(15, Math.round((completedLessonsCount / totalLessons) * 15));
    const examPart = attemptsCount > 0 ? Math.min(15, 8 + Math.round((bestExamScore / 40) * 7)) : 0;

    const readinessPercentage = Math.min(100, diagPart + practicePart + vocabPart + grammarPart + examPart);

    // 12. Estimated Score Range Projection (ESTIMATE ONLY)
    // Baseline from diagnostic if taken, else estimated from practice + exam performance
    let baseEstimated = 550;
    if (isDiagDone && diagnosticData.overallScore) {
      baseEstimated = diagnosticData.overallScore;
    } else if (attemptsCount > 0) {
      baseEstimated = 400 + Math.round((bestExamScore / 40) * 450);
    }

    // Boost with vocabulary and grammar mastery
    const bonus = Math.round((box5 / 50) * 40) + Math.round((completedLessonsCount / 20) * 30);
    const estimatedMid = Math.min(990, Math.max(300, baseEstimated + bonus));
    const estimatedScoreMin = Math.max(10, Math.round((estimatedMid - 40) / 10) * 10);
    const estimatedScoreMax = Math.min(990, Math.round((estimatedMid + 40) / 10) * 10);

    return {
      readinessPercentage,
      estimatedScoreMin,
      estimatedScoreMax,
      totalQuestionsAnswered: answeredKeys.length + drillsAnsweredCount + (isDiagDone ? 30 : 0) + (attemptsCount * 40),
      totalPracticeCorrect,
      diagnostic: {
        completed: isDiagDone,
        overallScore: diagnosticData?.overallScore,
        listeningScore: diagnosticData?.listeningScore,
        readingScore: diagnosticData?.readingScore,
        takenDate: diagnosticData?.date ? new Date(diagnosticData.date).toLocaleDateString() : undefined,
        strongestPart: diagnosticData?.strongestPart,
        weakestPart: diagnosticData?.weakestPart,
      },
      vocabulary: {
        totalStudied: totalVocabStudied,
        box1,
        box2,
        box3,
        box4,
        box5,
        missedCount,
      },
      practiceBank: {
        totalAnswered: answeredKeys.length,
        totalAvailable: totalPracticeAvailable,
        accuracyRate: practiceAccuracy,
        part5Answered,
        part6Answered,
        part7Answered,
        listeningAnswered,
      },
      grammar: {
        completedLessonsCount,
        totalLessons,
        drillsAnsweredCount,
        totalDrills,
      },
      examMode: {
        attemptsCount,
        bestScore: bestExamScore,
        latestScore: latestExamScore,
        averageScore,
      },
      errorLog: {
        totalLogged,
        totalResolved,
        resolutionRate,
      },
      studyPlan: {
        hasPlan: !!studyPlan,
        streak: studyPlan?.streak || 1,
        completedDays: planCompletedDays,
        totalDays: planTotalDays,
      },
      wordOfTheDay: {
        daysStudiedCount,
        todayStudied,
      },
      badges: computedBadges,
    };
  }
};
