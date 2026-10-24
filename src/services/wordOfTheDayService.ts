import { VOCABULARY_LIST } from '../data/vocabulary';
import { VocabWord } from '../types';
import { StorageService } from './storage';

export const WordOfTheDayService = {
  /**
   * Deterministically calculates the Word of the Day based on the calendar day.
   * Allows optional day offset (-1 for yesterday, 1 for tomorrow, etc.)
   */
  getWordOfTheDay(offsetDays: number = 0): { word: VocabWord; dateStr: string; dayIndex: number } {
    const now = new Date();
    // Adjust for offset
    const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offsetDays);
    
    // Hash based on year, month, day to pick a distributed index from the 500 words
    const y = targetDate.getFullYear();
    const m = targetDate.getMonth() + 1;
    const d = targetDate.getDate();
    
    // Simple robust hash for stable, well-distributed daily index
    const daySeed = (y * 365 + m * 31 + d * 7 + 137) >>> 0;
    const index = daySeed % VOCABULARY_LIST.length;
    
    const dateStr = targetDate.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    return {
      word: VOCABULARY_LIST[index],
      dateStr,
      dayIndex: index,
    };
  },

  getRandomWord(): VocabWord {
    const randomIndex = Math.floor(Math.random() * VOCABULARY_LIST.length);
    return VOCABULARY_LIST[randomIndex];
  },

  getWordStatus(wordId: number): {
    inTrainer: boolean;
    box: number;
    missedCount: number;
    isStudiedToday: boolean;
  } {
    const progress = StorageService.getVocabProgress();
    const item = progress[wordId];
    const isStudiedToday = StorageService.isWotdStudiedToday();
    
    return {
      inTrainer: !!item,
      box: item ? item.box : 0,
      missedCount: item ? item.missedCount : 0,
      isStudiedToday,
    };
  },

  addWordToTrainer(wordId: number, targetBox: number = 1): void {
    StorageService.promoteVocabWord(wordId, targetBox);
    StorageService.recordWotdStudied();
  },

  addWordToMissed(wordId: number): void {
    StorageService.markVocabAsMissed(wordId);
    StorageService.recordWotdStudied();
  },

  markTodayAsStudied(): void {
    StorageService.recordWotdStudied();
  }
};
