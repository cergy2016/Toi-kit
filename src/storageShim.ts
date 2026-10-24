// Falls back to in-memory storage when localStorage is blocked
// (sandboxed iframes, some in-app browsers, private modes). Without this the app renders a blank page.
(function () {
  try {
    const k = '__toeic_probe';
    window.localStorage.setItem(k, '1');
    window.localStorage.removeItem(k);
    return;
  } catch {
    /* fall through to the in-memory store */
  }
  const mem: Record<string, string> = {};
  const fake = {
    getItem: (k: string) => (k in mem ? mem[k] : null),
    setItem: (k: string, v: string) => { mem[k] = String(v); },
    removeItem: (k: string) => { delete mem[k]; },
    clear: () => { Object.keys(mem).forEach(k => delete mem[k]); },
    key: (i: number) => Object.keys(mem)[i] ?? null,
    get length() { return Object.keys(mem).length; },
  };
  try {
    Object.defineProperty(window, 'localStorage', { value: fake, configurable: true });
  } catch {
    /* ignore */
  }
})();
export {};
