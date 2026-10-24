import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { WordOfTheDayCard } from './WordOfTheDayCard';
import { VocabWord } from '../types';

interface WordOfTheDayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToVocab?: (word?: VocabWord) => void;
}

export const WordOfTheDayModal: React.FC<WordOfTheDayModalProps> = ({
  isOpen,
  onClose,
  onNavigateToVocab,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-2 sm:p-4">
          <WordOfTheDayCard 
            variant="full"
            onNavigateToVocab={(w) => {
              onClose();
              if (onNavigateToVocab) onNavigateToVocab(w);
            }} 
          />
        </div>
      </div>
    </div>
  );
};
