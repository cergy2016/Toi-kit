import { StudyPlan } from '../types';

export function generateStudyPlan(
  targetDate: string,
  dailyMinutes: 20 | 40 | 60,
  targetScore: number,
  durationWeeks: 4 | 8 | 12
): StudyPlan {
  const themes = [
    'Foundations & Diagnostic Baseline',
    'Part 1 & 2 Listening Precision',
    'Part 5 Grammar Mastery: Tenses & Voice',
    'Part 5 Grammar Mastery: Prepositions & Clauses',
    'Part 6 Text Cohesion & Transitions',
    'Part 3 & 4 Long Dialogue & Talk Strategy',
    'Part 7 Single Passages: Skimming & Scanning',
    'Part 7 Multi-Passage Cross-Referencing',
    'High-Yield Business Vocabulary Sprint',
    'Timed Reading Exam Conditioning',
    'Error Log Diagnosis & Weak-Spot Eradication',
    'Final Polish & Pacing Mastery'
  ];

  const weeks = [];

  for (let w = 1; w <= durationWeeks; w++) {
    const theme = themes[(w - 1) % themes.length];
    const days = [];

    for (let d = 1; d <= 7; d++) {
      let taskTitle = '';
      let moduleLink = 'practice';

      if (d === 7) {
        // Rest / Review day
        taskTitle = 'Weekly Review: Clear all items in your Error Log & review SRS Vocab Flashcards';
        moduleLink = 'error-log';
      } else if (w === 1 && d === 1) {
        taskTitle = 'Take the 30-question Diagnostic Mini-Test to assess your baseline score';
        moduleLink = 'diagnostic';
      } else if (d === 6) {
        taskTitle = 'Exam Mode: Complete a 30-minute timed Reading test under strict conditions';
        moduleLink = 'exam';
      } else {
        const cycle = (w * 5 + d) % 6;
        if (cycle === 0) {
          const lessonId = ((w * 2 + d) % 20) + 1;
          taskTitle = `Grammar Drill: Complete Lesson ${lessonId} & answer all 5 interactive questions`;
          moduleLink = 'grammar';
        } else if (cycle === 1) {
          const partNum = ((w + d) % 7) + 1;
          taskTitle = `Strategy Study: Read Part ${partNum} guide, traps, and worked examples`;
          moduleLink = 'strategy';
        } else if (cycle === 2) {
          taskTitle = 'Vocabulary Trainer: Review 25 SRS business flashcards and test yourself in Quiz Mode';
          moduleLink = 'vocabulary';
        } else if (cycle === 3) {
          taskTitle = 'Practice Bank: Complete 15 Part 5 Incomplete Sentence questions with full review';
          moduleLink = 'practice';
        } else if (cycle === 4) {
          taskTitle = 'Listening Drill: Practice with SpeechSynthesis audio scripts in Parts 2, 3, and 4';
          moduleLink = 'practice';
        } else {
          taskTitle = 'Reading Comprehension: Solve 2 Part 7 reading passages and review answer explanations';
          moduleLink = 'practice';
        }
      }

      days.push({
        dayNumber: d,
        taskTitle,
        moduleLink,
        targetMinutes: dailyMinutes,
        completed: false
      });
    }

    weeks.push({
      weekNumber: w,
      theme,
      days
    });
  }

  return {
    targetDate,
    dailyMinutes,
    targetScore,
    weeks,
    streak: 1,
    lastStudyDate: new Date().toISOString().split('T')[0]
  };
}
