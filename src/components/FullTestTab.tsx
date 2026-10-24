import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FULL_TESTS, FullTest, FTGroup, FTQuestion, Letter, countQuestions, estimateRange } from '../data/fullTests';
import { Clock, Flag, Headphones, BookOpen, Play, Eye, EyeOff, Grid, ChevronLeft, ChevronRight, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface Props { onAddErrorLog: (item: any) => void; }

const HIST_KEY = 'toeic_fulltest_history_v1';
type Phase = 'intro' | 'listening' | 'break' | 'reading' | 'result';
const base = () => (import.meta as any).env.BASE_URL as string;

function loadHistory(): any[] { try { return JSON.parse(localStorage.getItem(HIST_KEY) || '[]'); } catch { return []; } }
function saveHistory(h: any[]) { try { localStorage.setItem(HIST_KEY, JSON.stringify(h.slice(-30))); } catch { /* ignore */ } }
const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

export const FullTestTab: React.FC<Props> = ({ onAddErrorLog }) => {
  const [phase, setPhase] = useState<Phase>('intro');
  const [test, setTest] = useState<FullTest | null>(null);
  const [answers, setAnswers] = useState<Record<string, Letter>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [gi, setGi] = useState(0); // index inside current section
  const [timeLeft, setTimeLeft] = useState(0);
  const [showTimer, setShowTimer] = useState(true);
  const [showPalette, setShowPalette] = useState(false);
  const [played, setPlayed] = useState<Record<string, boolean>>({});
  const [playing, setPlaying] = useState(false);
  const [history, setHistory] = useState<any[]>(loadHistory);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const lGroups = useMemo(() => test ? test.groups.filter(g => g.section === 'L') : [], [test]);
  const rGroups = useMemo(() => test ? test.groups.filter(g => g.section === 'R') : [], [test]);
  const groups = phase === 'listening' ? lGroups : rGroups;
  const group: FTGroup | undefined = groups[gi];

  // Reading timer
  useEffect(() => {
    if (phase !== 'reading') return;
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [phase]);
  useEffect(() => { if (phase === 'reading' && timeLeft <= 0) finish(); /* eslint-disable-next-line */ }, [timeLeft, phase]);

  // Stop audio when leaving a group
  useEffect(() => () => { audioRef.current?.pause(); }, [gi, phase]);

  const start = (t: FullTest) => {
    setTest(t); setAnswers({}); setFlagged({}); setPlayed({}); setGi(0); setPlaying(false);
    setTimeLeft(t.readingMinutes * 60); setPhase('listening');
  };

  const playGroup = () => {
    if (!group?.item?.audioFile || played[group.id]) return;
    setPlayed(p => ({ ...p, [group.id]: true }));
    const a = audioRef.current; if (!a) return;
    a.src = base() + group.item.audioFile;
    setPlaying(true);
    a.play().catch(() => setPlaying(false));
  };

  const finish = () => {
    if (!test) return;
    audioRef.current?.pause();
    const all = test.groups.flatMap(g => g.questions.map(q => ({ g, q })));
    const calc = (sec: 'L' | 'R') => {
      const sub = all.filter(x => x.g.section === sec);
      return { correct: sub.filter(x => answers[x.q.id] === x.q.correct).length, total: sub.length };
    };
    const L = calc('L'), R = calc('R');
    const parts: Record<number, { c: number; t: number }> = {};
    all.forEach(({ q }) => { const p = (parts[q.part] ||= { c: 0, t: 0 }); p.t++; if (answers[q.id] === q.correct) p.c++; });
    const entry = { ts: Date.now(), test: test.id, name: test.name, L, R, parts };
    const h = [...history, entry]; setHistory(h); saveHistory(h);
    all.forEach(({ q }) => {
      if (answers[q.id] !== q.correct) {
        onAddErrorLog({
          part: q.part, questionText: `[${test.name} Q${q.no}] ${q.text}`,
          userAnswer: answers[q.id] || 'Omitted', correctAnswer: q.correct, explanation: q.explanation,
        });
      }
    });
    setPhase('result');
  };

  const answer = (q: FTQuestion, k: Letter) => setAnswers(a => ({ ...a, [q.id]: k }));

  // ---------- INTRO ----------
  if (phase === 'intro') {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Full Tests</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Complete tests that follow the real structure. Listening comes first, then Reading. Your score is an estimate, not an official ETS score.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {FULL_TESTS.map(t => (
            <div key={t.id} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 flex flex-col gap-3">
              <div className="font-semibold text-lg">{t.name}</div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{t.description}</p>
              <ul className="text-sm space-y-1">
                <li>Listening: {countQuestions(t, 'L')} questions, audio plays once</li>
                <li>Reading: {countQuestions(t, 'R')} questions, {t.readingMinutes} minutes</li>
              </ul>
              <button onClick={() => start(t)} className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700">
                <Play className="w-4 h-4" /> Start
              </button>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800 p-4 text-sm space-y-1">
          <div className="font-semibold">Test conditions</div>
          <ul className="list-disc pl-5">
            <li>Each audio file plays one time only. You cannot go back in the Listening section.</li>
            <li>Part 1 and Part 2 statements are spoken only, as in the real test.</li>
            <li>Reading: use Back and Next, flag questions, and open the review panel at any time.</li>
            <li>No penalty for wrong answers. Answer every question.</li>
          </ul>
        </div>
        {history.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Your attempts</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200 dark:border-slate-800">
                <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-2 text-left">Date</th><th className="p-2 text-left">Test</th><th className="p-2">Listening</th><th className="p-2">Reading</th><th className="p-2">Estimated total</th></tr></thead>
                <tbody>
                  {[...history].reverse().map((h, i) => {
                    const l = estimateRange(h.L.correct, h.L.total), r = estimateRange(h.R.correct, h.R.total);
                    return (
                      <tr key={i} className="border-t border-slate-200 dark:border-slate-800">
                        <td className="p-2">{new Date(h.ts).toLocaleDateString()}</td><td className="p-2">{h.name}</td>
                        <td className="p-2 text-center">{h.L.correct}/{h.L.total}</td><td className="p-2 text-center">{h.R.correct}/{h.R.total}</td>
                        <td className="p-2 text-center">{l[0] + r[0]} to {l[1] + r[1]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ---------- BREAK ----------
  if (phase === 'break' && test) {
    return (
      <div className="max-w-xl mx-auto text-center space-y-4 py-10">
        <Headphones className="w-10 h-10 mx-auto text-indigo-600" />
        <h2 className="text-2xl font-bold">Listening section complete</h2>
        <p className="text-slate-600 dark:text-slate-400">The Reading section starts when you press the button. The {test.readingMinutes}-minute timer starts immediately.</p>
        <button onClick={() => { setGi(0); setTimeLeft(test.readingMinutes * 60); setPhase('reading'); }} className="rounded-lg bg-indigo-600 text-white px-6 py-3 font-medium hover:bg-indigo-700">Start Reading</button>
      </div>
    );
  }

  // ---------- RESULT ----------
  if (phase === 'result' && test) {
    const all = test.groups.flatMap(g => g.questions.map(q => ({ g, q })));
    const sec = (s: 'L' | 'R') => { const sub = all.filter(x => x.g.section === s); return { c: sub.filter(x => answers[x.q.id] === x.q.correct).length, t: sub.length }; };
    const L = sec('L'), R = sec('R');
    const lr = estimateRange(L.c, L.t), rr = estimateRange(R.c, R.t);
    const partRows = [1, 2, 3, 4, 5, 6, 7].map(p => {
      const sub = all.filter(x => x.q.part === p); const c = sub.filter(x => answers[x.q.id] === x.q.correct).length;
      return { p, c, t: sub.length, pct: sub.length ? Math.round((c / sub.length) * 100) : 0 };
    });
    const weakest = [...partRows].sort((a, b) => a.pct - b.pct)[0];
    const missed = all.filter(x => answers[x.q.id] !== x.q.correct);
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">{test.name}: results</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border p-4 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"><div className="text-sm text-slate-500">Listening</div><div className="text-2xl font-bold">{L.c}/{L.t}</div><div className="text-sm">Estimated {lr[0]} to {lr[1]} / 495</div></div>
          <div className="rounded-xl border p-4 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"><div className="text-sm text-slate-500">Reading</div><div className="text-2xl font-bold">{R.c}/{R.t}</div><div className="text-sm">Estimated {rr[0]} to {rr[1]} / 495</div></div>
          <div className="rounded-xl border p-4 bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800"><div className="text-sm text-slate-500">Estimated total</div><div className="text-2xl font-bold">{lr[0] + rr[0]} to {lr[1] + rr[1]}</div><div className="text-sm">out of 990</div></div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">This is an estimate. ETS does not publish its conversion tables and they change from one test form to another, so the real score can differ by 25 points or more per section.{test.id === 'Q' ? ' The Quick Test has 90 questions, so its estimate is less precise than a full test.' : ''}</p>
        <div>
          <h3 className="font-semibold mb-2">By part</h3>
          <table className="w-full text-sm border border-slate-200 dark:border-slate-800">
            <thead className="bg-slate-100 dark:bg-slate-800"><tr><th className="p-2 text-left">Part</th><th className="p-2">Correct</th><th className="p-2">Accuracy</th><th className="p-2 text-left w-1/2"> </th></tr></thead>
            <tbody>{partRows.map(r => (
              <tr key={r.p} className="border-t border-slate-200 dark:border-slate-800">
                <td className="p-2">Part {r.p}</td><td className="p-2 text-center">{r.c}/{r.t}</td><td className="p-2 text-center">{r.pct}%</td>
                <td className="p-2"><div className="h-2 rounded bg-slate-200 dark:bg-slate-700"><div className={`h-2 rounded ${r.pct >= 75 ? 'bg-emerald-500' : r.pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${r.pct}%` }} /></div></td>
              </tr>))}</tbody>
          </table>
          {weakest && <p className="mt-2 text-sm">Weakest part: <b>Part {weakest.p}</b> ({weakest.pct}%). Missed questions were added to your Error Log.</p>}
        </div>
        <div>
          <h3 className="font-semibold mb-2">Missed questions ({missed.length})</h3>
          <div className="space-y-3">
            {missed.slice(0, 60).map(({ q }) => (
              <div key={q.id} className="rounded-lg border border-slate-200 dark:border-slate-800 p-3 text-sm bg-white dark:bg-slate-900">
                <div className="font-medium">Q{q.no} (Part {q.part}) {q.part <= 2 ? '' : q.text}</div>
                <div className="mt-1 flex items-center gap-2"><XCircle className="w-4 h-4 text-rose-500" /> Your answer: {answers[q.id] || 'none'} <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-3" /> Correct: {q.correct} ({q.options.find(o => o.key === q.correct)?.text})</div>
                <div className="mt-1 text-slate-600 dark:text-slate-400">{q.explanation}</div>
              </div>
            ))}
            {missed.length > 60 && <div className="text-sm text-slate-500">{missed.length - 60} more are in your Error Log.</div>}
          </div>
        </div>
        <button onClick={() => { setPhase('intro'); setTest(null); }} className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800"><RotateCcw className="w-4 h-4" /> Back to tests</button>
      </div>
    );
  }

  if (!test || !group) return null;
  const isL = phase === 'listening';
  const allQs = (isL ? lGroups : rGroups).flatMap(g => g.questions);
  const answeredInSec = allQs.filter(q => answers[q.id]).length;
  const hasAudio = !!group.item?.audioFile;
  const hideOptionText = group.part === 1 || group.part === 2;

  const next = () => {
    if (gi < groups.length - 1) { setGi(gi + 1); setPlaying(false); }
    else if (isL) { setPhase('break'); }
  };
  const goto = (idx: number) => { setGi(idx); setShowPalette(false); };

  return (
    <div className="space-y-4">
      <audio ref={audioRef} onEnded={() => setPlaying(false)} onError={() => setPlaying(false)} className="hidden" />
      {/* top bar */}
      <div className="flex flex-wrap items-center gap-3 justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3">
        <div className="flex items-center gap-2 font-medium">
          {isL ? <Headphones className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
          {test.name} · {isL ? 'Listening' : 'Reading'} · Part {group.part}
        </div>
        <div className="text-sm">Q{group.questions[0].no}{group.questions.length > 1 ? ` to ${group.questions[group.questions.length - 1].no}` : ''} · {answeredInSec}/{allQs.length} answered</div>
        {!isL && (
          <div className="flex items-center gap-2">
            {showTimer ? <span className={`inline-flex items-center gap-1 font-mono ${timeLeft < 300 ? 'text-rose-600' : ''}`}><Clock className="w-4 h-4" />{fmt(Math.max(0, timeLeft))}</span> : <span className="text-sm text-slate-500">Timer hidden</span>}
            <button onClick={() => setShowTimer(s => !s)} className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Toggle timer">{showTimer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
            <button onClick={() => setShowPalette(s => !s)} className="inline-flex items-center gap-1 px-2 py-1 rounded border text-sm hover:bg-slate-100 dark:hover:bg-slate-800"><Grid className="w-4 h-4" /> Review</button>
          </div>
        )}
      </div>

      {showPalette && !isL && (
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3">
          <div className="text-sm mb-2">Answered {answeredInSec}, flagged {allQs.filter(q => flagged[q.id]).length}, unanswered {allQs.length - answeredInSec}</div>
          <div className="flex flex-wrap gap-1">
            {rGroups.map((g, idx) => g.questions.map(q => (
              <button key={q.id} onClick={() => goto(idx)} className={`w-9 h-9 text-xs rounded border ${flagged[q.id] ? 'border-amber-500 bg-amber-100 dark:bg-amber-900/40' : answers[q.id] ? 'bg-indigo-100 dark:bg-indigo-900/40 border-indigo-300' : 'border-slate-300 dark:border-slate-700'}`}>{q.no}</button>
            )))}
          </div>
        </div>
      )}

      {/* body */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-4">
        {isL && hasAudio && (
          <div className="flex items-center gap-3">
            <button onClick={playGroup} disabled={!!played[group.id]} className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 disabled:opacity-50"><Play className="w-4 h-4" />{played[group.id] ? (playing ? 'Playing...' : 'Played') : 'Play audio (once)'}</button>
            <span className="text-sm text-slate-500">{group.part === 1 ? 'Look at the photo and listen to four statements.' : group.part === 2 ? 'Listen to the question and three responses.' : 'Listen, then answer.'}</span>
          </div>
        )}
        {isL && group.item?.imageFile && <img src={base() + group.item.imageFile} alt={group.item.imageAlt || 'Part 1 photograph'} className="w-full max-w-xl rounded-lg border" />}
        {isL && group.item?.graphic && (
          <div className="overflow-x-auto">
            <div className="font-medium text-sm mb-1">{group.item.graphic.title}</div>
            <table className="text-sm border border-slate-300 dark:border-slate-700">
              <thead><tr>{group.item.graphic.headers.map((h, i) => <th key={i} className="border px-3 py-1 bg-slate-100 dark:bg-slate-800 text-left">{h}</th>)}</tr></thead>
              <tbody>{group.item.graphic.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} className="border px-3 py-1">{c}</td>)}</tr>)}</tbody>
            </table>
          </div>
        )}
        {!isL && group.passageText && <div className="whitespace-pre-line rounded-lg bg-slate-50 dark:bg-slate-800/60 p-4 text-sm leading-relaxed">{group.passageText}</div>}
        {!isL && group.passages && group.passages.map((p, i) => (
          <div key={i} className="whitespace-pre-line rounded-lg bg-slate-50 dark:bg-slate-800/60 p-4 text-sm leading-relaxed">
            {p.label && <div className="font-semibold mb-1">{p.label}</div>}{p.text}
          </div>
        ))}

        {group.questions.map(q => (
          <div key={q.id} className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <div className="font-medium">{q.no}. {isL && group.part <= 2 ? 'Select the best answer.' : q.text}</div>
              {!isL && <button onClick={() => setFlagged(f => ({ ...f, [q.id]: !f[q.id] }))} className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded border ${flagged[q.id] ? 'border-amber-500 bg-amber-100 dark:bg-amber-900/40' : ''}`}><Flag className="w-3 h-3" />{flagged[q.id] ? 'Flagged' : 'Flag'}</button>}
            </div>
            <div className="grid gap-2">
              {q.options.map(o => (
                <button key={o.key} onClick={() => answer(q, o.key)} className={`text-left rounded-lg border px-3 py-2 ${answers[q.id] === o.key ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/40' : 'border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                  <b>({o.key})</b> {hideOptionText ? '' : o.text}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* nav */}
      <div className="flex justify-between">
        {!isL ? <button onClick={() => setGi(Math.max(0, gi - 1))} disabled={gi === 0} className="inline-flex items-center gap-1 rounded-lg border px-4 py-2 disabled:opacity-40"><ChevronLeft className="w-4 h-4" /> Back</button> : <span className="text-sm text-slate-500 self-center">No going back in Listening</span>}
        {isL || gi < groups.length - 1 ? (
          <button onClick={() => { if (isL && hasAudio && !played[group.id] && !confirm('You have not played this audio. Continue anyway?')) return; next(); }} className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 text-white px-4 py-2">{isL && gi === groups.length - 1 ? 'Finish Listening' : 'Next'} <ChevronRight className="w-4 h-4" /></button>
        ) : (
          <button onClick={() => { const un = allQs.length - answeredInSec; if (un === 0 || confirm(`${un} questions are unanswered. Submit anyway?`)) finish(); }} className="rounded-lg bg-emerald-600 text-white px-4 py-2">Submit test</button>
        )}
      </div>
    </div>
  );
};
