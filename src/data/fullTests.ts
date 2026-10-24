import { PART_5_QUESTIONS, PART_6_PASSAGES, PART_7_PASSAGES, LISTENING_ITEMS } from './practiceBank';
import { ListeningItem, QuestionOption } from '../types';

export type FTSection = 'L' | 'R';
export type Letter = 'A' | 'B' | 'C' | 'D';

export interface FTQuestion {
  id: string;
  no: number; // running number in the test
  part: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  text: string;
  options: QuestionOption[];
  correct: Letter;
  explanation: string;
  category?: string;
}

export interface FTGroup {
  id: string;
  part: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  section: FTSection;
  kind: 'photo' | 'qr' | 'conv' | 'talk' | 'p5' | 'p6' | 'p7';
  item?: ListeningItem;
  passageText?: string;
  passages?: { label?: string; text: string }[];
  questions: FTQuestion[];
}

export interface FullTest {
  id: string;
  name: string;
  description: string;
  readingMinutes: number;
  groups: FTGroup[];
}

function rng(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffle<T>(arr: T[], seed: number): T[] {
  const r = rng(seed); const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

const POOL_P1 = shuffle(LISTENING_ITEMS.filter(i => !!i.audioFile && i.part === 1), 101);
const POOL_P2 = shuffle(LISTENING_ITEMS.filter(i => !!i.audioFile && i.part === 2), 102);
const POOL_P3 = shuffle(LISTENING_ITEMS.filter(i => !!i.audioFile && i.part === 3 && i.questions.length === 3), 103);
const POOL_P4 = shuffle(LISTENING_ITEMS.filter(i => !!i.audioFile && i.part === 4 && i.questions.length === 3), 104);
const POOL_P5 = shuffle(PART_5_QUESTIONS, 105);
const POOL_P6 = shuffle(PART_6_PASSAGES, 106);
const POOL_P7S = shuffle(PART_7_PASSAGES.filter(p => p.format === 'Single Passage'), 107);
const POOL_P7M5 = shuffle(PART_7_PASSAGES.filter(p => p.format !== 'Single Passage' && p.questions.length === 5), 108);
const POOL_P7M3 = shuffle(PART_7_PASSAGES.filter(p => p.format !== 'Single Passage' && p.questions.length === 3), 109);

const cursor: Record<string, number> = {};
function take<T>(pool: T[], key: string, n: number): T[] {
  const c = cursor[key] || 0; cursor[key] = c + n;
  const out: T[] = [];
  for (let i = 0; i < n; i++) out.push(pool[(c + i) % pool.length]);
  return out;
}

interface Def {
  id: string; name: string; description: string; readingMinutes: number;
  p1: number; p2: number; p3: number; p4: number; p5: number; p6: number;
  p7Single: { sets: number; questions: number };
  p7Multi: { sets: number; pool: 5 | 3 };
}

const DEFS: Def[] = [
  { id: 'A', name: 'Full Test A', description: '200 questions, same structure as the real test. Reading section timed at 75 minutes.', readingMinutes: 75,
    p1: 6, p2: 25, p3: 13, p4: 10, p5: 30, p6: 4, p7Single: { sets: 10, questions: 29 }, p7Multi: { sets: 5, pool: 5 } },
  { id: 'B', name: 'Full Test B', description: 'A second complete test with different questions. Reading section timed at 75 minutes.', readingMinutes: 75,
    p1: 6, p2: 25, p3: 13, p4: 10, p5: 30, p6: 4, p7Single: { sets: 10, questions: 29 }, p7Multi: { sets: 5, pool: 5 } },
  { id: 'Q', name: 'Quick Test', description: '90 questions (45 Listening + 45 Reading), about one hour. Same mix of question types as the one-hour format.', readingMinutes: 40,
    p1: 3, p2: 9, p3: 6, p4: 5, p5: 12, p6: 2, p7Single: { sets: 7, questions: 19 }, p7Multi: { sets: 2, pool: 3 } },
];

function buildTest(def: Def): FullTest {
  const groups: FTGroup[] = [];
  let no = 0;
  const key = (k: string) => k;

  const listening = (items: ListeningItem[], part: 1 | 2 | 3 | 4, kind: FTGroup['kind']) => {
    items.forEach(item => {
      const qs: FTQuestion[] = item.questions.map(q => ({
        id: `${def.id}-${q.id}`, no: ++no, part, text: q.questionText, options: q.options, correct: q.correctAnswer, explanation: q.explanation,
      }));
      groups.push({ id: `${def.id}-g${groups.length + 1}`, part, section: 'L', kind, item, questions: qs });
    });
  };
  listening(take(POOL_P1, key('p1'), def.p1), 1, 'photo');
  listening(take(POOL_P2, key('p2'), def.p2), 2, 'qr');
  listening(take(POOL_P3, key('p3'), def.p3), 3, 'conv');
  listening(take(POOL_P4, key('p4'), def.p4), 4, 'talk');

  take(POOL_P5, key('p5'), def.p5).forEach(q => {
    groups.push({
      id: `${def.id}-g${groups.length + 1}`, part: 5, section: 'R', kind: 'p5',
      questions: [{ id: `${def.id}-${q.id}`, no: ++no, part: 5, text: q.questionText, options: q.options, correct: q.correctAnswer, explanation: q.explanation, category: q.category }],
    });
  });

  take(POOL_P6, key('p6'), def.p6).forEach(p => {
    const nums = p.questions.map(() => ++no);
    let text = p.text;
    p.questions.forEach((q, i) => { text = text.split(`[${q.number}]`).join(`[${nums[i]}]`); });
    groups.push({
      id: `${def.id}-g${groups.length + 1}`, part: 6, section: 'R', kind: 'p6', passageText: text,
      questions: p.questions.map((q, i) => ({
        id: `${def.id}-${p.id}-${q.number}`, no: nums[i], part: 6, text: `Blank [${nums[i]}]`, options: q.options, correct: q.correctAnswer, explanation: q.explanation,
      })),
    });
  });

  // Part 7: single passages first (trimmed to the exact question total), then multiple passages
  const singles = take(POOL_P7S, key('p7s'), def.p7Single.sets).map(p => ({ p, qs: [...p.questions] }));
  let total = singles.reduce((s, x) => s + x.qs.length, 0);
  for (let i = singles.length - 1; total > def.p7Single.questions && i >= 0; i--) {
    const last = singles[i].qs[singles[i].qs.length - 1];
    const isInsertion = last && last.options.every(o => /^\[\d\]$/.test(o.text));
    if (singles[i].qs.length > 2 && !isInsertion) { singles[i].qs.pop(); total--; }
    if (i === 0 && total > def.p7Single.questions) i = singles.length;
  }
  const pushP7 = (p: typeof singles[0]['p'], qs: typeof singles[0]['qs']) => {
    groups.push({
      id: `${def.id}-g${groups.length + 1}`, part: 7, section: 'R', kind: 'p7', passages: p.passages,
      questions: qs.map(q => ({ id: `${def.id}-${q.id}`, no: ++no, part: 7 as const, text: q.questionText, options: q.options, correct: q.correctAnswer, explanation: q.explanation })),
    });
  };
  singles.forEach(x => pushP7(x.p, x.qs));
  take(def.p7Multi.pool === 5 ? POOL_P7M5 : POOL_P7M3, key('p7m' + def.p7Multi.pool), def.p7Multi.sets).forEach(p => pushP7(p, p.questions));

  return { id: def.id, name: def.name, description: def.description, readingMinutes: def.readingMinutes, groups };
}

export const FULL_TESTS: FullTest[] = DEFS.map(buildTest);

export function countQuestions(test: FullTest, section?: FTSection): number {
  return test.groups.filter(g => !section || g.section === section).reduce((s, g) => s + g.questions.length, 0);
}

// Approximate conversion. ETS does not publish its conversion tables and they differ for each test form.
export function estimateScaled(correct: number, total: number): number {
  if (!total) return 0;
  const s = Math.round((5 + (correct / total) * 490) / 5) * 5;
  return Math.max(5, Math.min(495, s));
}
export function estimateRange(correct: number, total: number): [number, number] {
  const s = estimateScaled(correct, total);
  return [Math.max(5, s - 25), Math.min(495, s + 25)];
}
