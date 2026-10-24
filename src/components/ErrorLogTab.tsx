import React, { useState, useEffect } from 'react';
import { ErrorLogItem, PartNumber } from '../types';
import { StorageService } from '../services/storage';
import { 
  AlertCircle, 
  Trash2, 
  CheckCircle2, 
  Search, 
  Download, 
  Check, 
  Edit3, 
  BookOpen, 
  ArrowRight 
} from 'lucide-react';

interface ErrorLogTabProps {
  onNavigate: (tab: any) => void;
}

export const ErrorLogTab: React.FC<ErrorLogTabProps> = ({ onNavigate }) => {
  const [items, setItems] = useState<ErrorLogItem[]>([]);
  const [selectedPart, setSelectedPart] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [notesInput, setNotesInput] = useState('');
  const [confirmClear, setConfirmClear] = useState(false);

  const loadItems = () => {
    const loaded = StorageService.getErrorLog();
    setItems(loaded);
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleToggleResolved = (id: string, current: boolean = false) => {
    StorageService.updateErrorItem(id, { resolved: !current });
    loadItems();
  };

  const handleRemove = (id: string) => {
    StorageService.removeErrorItem(id);
    loadItems();
  };

  const handleClearAll = () => {
    // Inline two-step confirm (window.confirm is blocked in sandboxed previews)
    if (!confirmClear) {
      setConfirmClear(true);
      setTimeout(() => setConfirmClear(false), 4000);
      return;
    }
    StorageService.clearErrorLog();
    setConfirmClear(false);
    loadItems();
  };

  const handleSaveNotes = (id: string) => {
    StorageService.updateErrorItem(id, { notes: notesInput });
    setEditingNotesId(null);
    loadItems();
  };

  const handleExportText = () => {
    if (items.length === 0) return;
    const content = items.map((item, idx) => `
# ${idx + 1}. [Part ${item.part}] Missed Question
Question: ${item.questionText}
Your Answer: ${item.userAnswer}
Correct Answer: ${item.correctAnswer}
Explanation: ${item.explanation}
${item.notes ? `Personal Notes: ${item.notes}` : ''}
Date Logged: ${new Date(item.timestamp).toLocaleString()}
Status: ${item.resolved ? 'Mastered / Resolved' : 'Needs Review'}
--------------------------------------------------
`).join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `toeic-error-log-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredItems = items.filter(item => {
    const matchPart = selectedPart === 'all' || item.part === selectedPart;
    const matchQuery = searchQuery.trim() === '' || 
      item.questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchPart && matchQuery;
  });

  return (
    <div className="max-w-5xl mx-auto py-6 space-y-6">
      {/* Header Bar */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-rose-500" />
            <span>Automatic Error Log ({items.length} Recorded Items)</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Missed items from Diagnostic, Practice Bank, Exam Mode, and Grammar drills are automatically preserved here for revision.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {items.length > 0 && (
            <>
              <button
                onClick={handleExportText}
                className="px-3.5 py-1.5 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Error Notebook</span>
              </button>
              <button
                onClick={handleClearAll}
                className="px-3 py-1.5 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 rounded-lg text-xs font-semibold hover:bg-rose-50 cursor-pointer"
              >
                {confirmClear ? 'Click again to confirm' : 'Clear Log'}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setSelectedPart('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition ${
              selectedPart === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
            }`}
          >
            All Parts ({items.length})
          </button>
          {[1, 2, 3, 4, 5, 6, 7].map(partNum => {
            const count = items.filter(i => i.part === partNum).length;
            return (
              <button
                key={partNum}
                onClick={() => setSelectedPart(partNum)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition ${
                  selectedPart === partNum
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
                }`}
              >
                Part {partNum} ({count})
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64 shrink-0">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search error text..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Error Items List */}
      {filteredItems.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-base text-slate-800 dark:text-slate-200">
            {items.length === 0 ? 'Your Error Log is Completely Empty!' : 'No items match your selected filter.'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Whenever you miss a question during Diagnostic, Practice Bank, or Exam Mode, it will automatically be stored here for targeted revision.
          </p>
          <button
            onClick={() => onNavigate('practice')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer mt-2"
          >
            <span>Practice Questions Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredItems.map(item => {
            const isEditing = editingNotesId === item.id;

            return (
              <div 
                key={item.id}
                className={`bg-white dark:bg-slate-900 border rounded-2xl p-5 shadow-xs space-y-3 transition ${
                  item.resolved 
                    ? 'border-emerald-200 dark:border-emerald-900/40 opacity-70' 
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      Part {item.part}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Logged on {new Date(item.timestamp).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleToggleResolved(item.id, item.resolved)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition cursor-pointer ${
                        item.resolved 
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' 
                          : 'border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{item.resolved ? 'Mastered' : 'Mark Resolved'}</span>
                    </button>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition cursor-pointer"
                      title="Remove from log"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white leading-relaxed">
                  {item.questionText}
                </h4>

                {/* Answers Comparison */}
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200">
                    Your Choice: <strong>{item.userAnswer}</strong>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200">
                    Correct Answer: <strong>{item.correctAnswer}</strong>
                  </div>
                </div>

                {/* Explanation */}
                <div className="text-xs bg-slate-50 dark:bg-slate-800/40 p-3 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>Explanation:</strong> {item.explanation}
                </div>

                {/* Personal Study Notes */}
                <div className="pt-2">
                  {isEditing ? (
                    <div className="space-y-2">
                      <textarea
                        value={notesInput}
                        onChange={e => setNotesInput(e.target.value)}
                        placeholder="Write personal takeaway, grammar rule reminder, or mnemonic..."
                        className="w-full p-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-800 dark:text-slate-200 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                        rows={2}
                      />
                      <div className="flex items-center gap-2 justify-end">
                        <button
                          onClick={() => setEditingNotesId(null)}
                          className="px-2.5 py-1 text-xs text-slate-500 hover:text-slate-700 cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleSaveNotes(item.id)}
                          className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-semibold cursor-pointer"
                        >
                          Save Notes
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-xs text-slate-500 bg-slate-50/60 dark:bg-slate-800/20 p-2.5 rounded-lg border border-dashed border-slate-200 dark:border-slate-800">
                      <span>
                        {item.notes ? (
                          <span><strong>Your Note:</strong> {item.notes}</span>
                        ) : (
                          <span className="italic text-slate-400">No personal study notes added yet.</span>
                        )}
                      </span>
                      <button
                        onClick={() => {
                          setEditingNotesId(item.id);
                          setNotesInput(item.notes || '');
                        }}
                        className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-semibold ml-2 cursor-pointer shrink-0"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>{item.notes ? 'Edit' : 'Add Note'}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
