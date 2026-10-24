/**
 * Answer-position balancing.
 * The source question banks put the correct answer on A or B for ~94% of items
 * and never on D. This module reorders the options deterministically at load
 * time so A, B, C and D are used about equally, and keeps everything that
 * mentions a letter (audio scripts, explanations) in sync.
 */
type Key = 'A' | 'B' | 'C' | 'D';
const KEYS: Key[] = ['A', 'B', 'C', 'D'];

interface Opt { key: Key; text: string }
interface BQ {
  options: Opt[];
  correctAnswer: Key;
  explanation: string;
  audioScript?: string;
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Hands out target positions in shuffled blocks so each position is used equally. */
function makeTargets(seed: number) {
  const rnd = mulberry32(seed);
  const queues: Record<number, number[]> = {};
  return (n: number): number => {
    if (!queues[n] || queues[n].length === 0) {
      const block = Array.from({ length: n }, (_, i) => i);
      for (let i = block.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [block[i], block[j]] = [block[j], block[i]];
      }
      queues[n] = block;
    }
    return queues[n].shift() as number;
  };
}

function stripPrefix(t: string): string {
  return t.replace(/^\([A-D]\)\s+/, '');
}

function remapScript(script: string, map: Record<string, Key>): string {
  const lines = script.split('\n');
  const slots: number[] = [];
  const found: { key: string; line: string }[] = [];
  lines.forEach((ln, i) => {
    const m = ln.match(/^(Statement\s+)?\(([A-D])\)(.*)$/);
    if (m) {
      const nk = map[m[2]];
      if (!nk) return;
      slots.push(i);
      found.push({ key: nk, line: (m[1] || '') + '(' + nk + ')' + m[3] });
    }
  });
  found.sort((a, b) => (a.key < b.key ? -1 : 1));
  slots.forEach((slot, i) => {
    lines[slot] = found[i].line;
  });
  return lines.join('\n');
}

function remapExplanation(text: string, map: Record<string, Key>): string {
  // One pass, so a letter is never remapped twice.
  return text.replace(
    /\bOption ([A-D])\b|\(([A-D])\)|([\s.,;])([A-D])(?= (?:answers|repeats|starts|begins|uses|mentions|confuses|sounds)\b)/g,
    (m, o, p, pre, b) => {
      if (o) return 'Option ' + (map[o] || o);
      if (p) return '(' + (map[p] || p) + ')';
      return pre + (map[b] || b);
    }
  );
}

function rebalance<T extends BQ>(q: T, target: number, fixExplanation: boolean, fixScript: boolean): T {
  const opts = q.options.map(o => ({ ...o, text: stripPrefix(o.text) }));
  const n = opts.length;
  const ci = opts.findIndex(o => o.key === q.correctAnswer);
  if (ci < 0 || n < 2) return { ...q, options: opts };
  const t = Math.min(target, n - 1);
  const others = opts.filter((_, i) => i !== ci);
  const ordered: Opt[] = [];
  let oi = 0;
  for (let i = 0; i < n; i++) ordered.push(i === t ? opts[ci] : others[oi++]);
  const map: Record<string, Key> = {};
  const next = ordered.map((o, i) => {
    map[o.key] = KEYS[i];
    return { key: KEYS[i], text: o.text };
  });
  const out: T = { ...q, options: next, correctAnswer: KEYS[t] };
  if (fixExplanation) out.explanation = remapExplanation(q.explanation, map);
  if (fixScript && q.audioScript) out.audioScript = remapScript(q.audioScript, map);
  return out;
}

/** Flat list of questions (Part 5, diagnostic, exam, grammar practice). */
export function balanceFlat<T extends BQ>(list: T[], seed: number, fixExplanation = true): T[] {
  const next = makeTargets(seed);
  return list.map(q => rebalance(q, next(q.options.length), fixExplanation, true));
}

/** Items that each hold a `questions` array (Part 6, Part 7, listening sets). */
export function balanceNested<I extends { questions: Q[]; audioScript?: string }, Q extends BQ>(
  items: I[],
  seed: number,
  fixExplanation = true
): I[] {
  const next = makeTargets(seed);
  return items.map(item => {
    const single = item.questions.length === 1;
    const questions = item.questions.map(q =>
      rebalance(q, next(q.options.length), fixExplanation, false)
    );
    let audioScript = item.audioScript;
    if (single && audioScript && /\([A-D]\)/.test(audioScript)) {
      const orig = item.questions[0];
      const bal = questions[0];
      const map: Record<string, Key> = {};
      orig.options.forEach(o => {
        const nt = stripPrefix(o.text);
        const hit = bal.options.find(b => b.text === nt);
        if (hit) map[o.key] = hit.key;
      });
      audioScript = remapScript(audioScript, map);
    }
    return { ...item, questions, audioScript } as I;
  });
}
