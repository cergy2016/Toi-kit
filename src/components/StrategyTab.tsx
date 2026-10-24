import React, { useState } from 'react';
import { STRATEGY_GUIDES } from '../data/strategies';
import { PartNumber } from '../types';
import { 
  Headphones, 
  BookOpen, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Lightbulb, 
  ListChecks, 
  HelpCircle 
} from 'lucide-react';

export const StrategyTab: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<PartNumber>(1);

  const guide = STRATEGY_GUIDES.find(g => g.part === selectedPart) || STRATEGY_GUIDES[0];

  return (
    <div className="max-w-5xl mx-auto py-6 space-y-8">
      {/* Part Selection Header Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {STRATEGY_GUIDES.map(item => {
          const isSelected = item.part === selectedPart;
          return (
            <button
              key={item.part}
              onClick={() => setSelectedPart(item.part)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {item.section === 'Listening' ? (
                <Headphones className="w-3.5 h-3.5" />
              ) : (
                <BookOpen className="w-3.5 h-3.5" />
              )}
              <span>Part {item.part}: {item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Strategy Guide Card */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-8">
        {/* Title & Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                guide.section === 'Listening'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                  : 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300'
              }`}>
                {guide.section} Section
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {guide.totalQuestions} Questions Total
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Part {guide.part}: {guide.name}
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700/60 text-xs">
            <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
            <div>
              <span className="text-slate-400 block text-[10px]">Timing Recommendation</span>
              <strong className="text-slate-700 dark:text-slate-200">{guide.timeRecommendation}</strong>
            </div>
          </div>
        </div>

        {/* 1. What the Task Is */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-indigo-500" />
            <span>Task Overview & Format</span>
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/30 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
            {guide.taskDescription}
          </p>
        </div>

        {/* 2. Step-by-Step Method */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ListChecks className="w-4 h-4 text-indigo-500" />
            <span>Step-by-Step Master Method</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {guide.methodSteps.map((step, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 text-xs sm:text-sm text-slate-800 dark:text-slate-200"
              >
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. The 5 Most Common Traps */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <span>The 5 Most Common Traps</span>
          </h3>
          <div className="space-y-3">
            {guide.traps.map((trap, idx) => (
              <div 
                key={idx}
                className="border border-amber-200 dark:border-amber-900/60 bg-amber-50/30 dark:bg-amber-950/20 rounded-xl p-4 space-y-1.5 text-xs sm:text-sm"
              >
                <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[11px] flex items-center justify-center">
                    !
                  </span>
                  <span>{trap.title}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-7">
                  {trap.description}
                </p>
                <p className="text-amber-800 dark:text-amber-400 font-mono text-[11px] pl-7 italic">
                  Trap Example: {trap.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Five Worked Examples with Explanations */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-emerald-500" />
            <span>5 Worked Examples with Line-by-Line Breakdown</span>
          </h3>
          <div className="space-y-4">
            {guide.workedExamples.map((ex, idx) => (
              <div 
                key={idx}
                className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 sm:p-5 space-y-3 bg-white dark:bg-slate-900/60"
              >
                <div className="font-semibold text-sm text-slate-900 dark:text-white">
                  Example {idx + 1}: {ex.question}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {ex.options.map(opt => {
                    const isCorrect = opt.key === ex.correctAnswer;
                    return (
                      <div 
                        key={opt.key}
                        className={`p-2 rounded-lg border flex items-center gap-2 ${
                          isCorrect 
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-semibold' 
                            : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        <span className="font-bold">{opt.key}.</span>
                        <span>{opt.text}</span>
                        {isCorrect && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 ml-auto shrink-0" />}
                      </div>
                    );
                  })}
                </div>

                <div className="text-xs bg-slate-50 dark:bg-slate-800/40 p-3 rounded-lg border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 leading-relaxed space-y-1">
                  <p><strong>Explanation:</strong> {ex.explanation}</p>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                    💡 <strong>Key Takeaway:</strong> {ex.keyTakeaway}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Do and Don't List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* DOS */}
          <div className="border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/20 rounded-xl p-5 space-y-3">
            <h4 className="font-bold text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>DO'S FOR PART {guide.part}</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {guide.dos.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DON'TS */}
          <div className="border border-rose-200 dark:border-rose-900/60 bg-rose-50/20 dark:bg-rose-950/20 rounded-xl p-5 space-y-3">
            <h4 className="font-bold text-sm text-rose-800 dark:text-rose-300 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
              <span>DON'TS FOR PART {guide.part}</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {guide.donts.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
