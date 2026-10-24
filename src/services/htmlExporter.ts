import { STRATEGY_GUIDES } from '../data/strategies';
import { GRAMMAR_LESSONS } from '../data/grammarLessons';
import { VOCABULARY_LIST } from '../data/vocabulary';
import { PART_5_QUESTIONS } from '../data/practiceBank';
import { DIAGNOSTIC_QUESTIONS } from '../data/diagnosticTest';

export function exportStandaloneSingleFileHtml(): void {
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TOEIC Mastery Toolkit, 2026 Edition (Standalone Offline)</title>
  <style>
    :root {
      --bg: #f8fafc;
      --card-bg: #ffffff;
      --text: #0f172a;
      --text-muted: #64748b;
      --border: #e2e8f0;
      --primary: #4f46e5;
      --primary-hover: #4338ca;
      --primary-light: #eef2ff;
      --success: #059669;
      --danger: #dc2626;
      --warning: #d97706;
      --warning-bg: #fef3c7;
    }
    .dark {
      --bg: #090d16;
      --card-bg: #0f172a;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --border: #1e293b;
      --primary: #6366f1;
      --primary-hover: #4f46e5;
      --primary-light: #1e1b4b;
      --success: #10b981;
      --danger: #ef4444;
      --warning: #f59e0b;
      --warning-bg: #451a03;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
    body { background-color: var(--bg); color: var(--text); min-height: 100vh; display: flex; flex-direction: column; transition: background-color 0.2s, color 0.2s; }
    header { background-color: var(--card-bg); border-bottom: 1px solid var(--border); position: sticky; top: 0; z-index: 100; padding: 0.75rem 1.5rem; }
    .header-top { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; margin-bottom: 0.5rem; }
    .brand { display: flex; align-items: center; gap: 0.75rem; }
    .logo { width: 36px; height: 36px; background: var(--primary); color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.25rem; }
    .nav-tabs { display: flex; gap: 0.5rem; overflow-x: auto; max-width: 1200px; margin: 0 auto; padding-top: 0.25rem; scrollbar-width: none; }
    .tab-btn { background: none; border: none; padding: 0.5rem 1rem; border-radius: 8px; font-size: 0.875rem; font-weight: 600; color: var(--text-muted); cursor: pointer; white-space: nowrap; transition: 0.15s; }
    .tab-btn:hover { color: var(--text); background: var(--primary-light); }
    .tab-btn.active { background: var(--primary); color: white; }
    .theme-toggle { background: var(--primary-light); border: 1px solid var(--border); color: var(--text); padding: 0.4rem 0.8rem; border-radius: 8px; cursor: pointer; font-size: 0.75rem; font-weight: 600; }
    .legal-bar { background: var(--warning-bg); border-bottom: 1px solid var(--border); color: var(--warning); padding: 0.4rem 1.5rem; font-size: 0.75rem; text-align: center; font-weight: 500; }
    main { flex: 1; max-width: 1100px; width: 100%; margin: 1.5rem auto; padding: 0 1rem; }
    .card { background: var(--card-bg); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
    .btn { background: var(--primary); color: white; border: none; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: 0.2s; display: inline-flex; align-items: center; gap: 0.5rem; }
    .btn:hover { background: var(--primary-hover); }
    .btn-outline { background: transparent; border: 1px solid var(--border); color: var(--text); }
    .btn-outline:hover { background: var(--primary-light); }
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    @media (max-width: 768px) { .grid-2 { grid-template-columns: 1fr; } }
    .option-btn { width: 100%; text-align: left; padding: 0.75rem 1rem; border: 1px solid var(--border); border-radius: 8px; background: var(--card-bg); color: var(--text); margin-bottom: 0.5rem; cursor: pointer; font-size: 0.875rem; transition: 0.15s; display: flex; align-items: center; justify-content: space-between; }
    .option-btn:hover { border-color: var(--primary); background: var(--primary-light); }
    .option-btn.correct { border-color: var(--success); background: rgba(5, 150, 105, 0.1); color: var(--success); font-weight: bold; }
    .option-btn.wrong { border-color: var(--danger); background: rgba(220, 38, 38, 0.1); color: var(--danger); }
    .badge { display: inline-block; padding: 0.2rem 0.5rem; border-radius: 6px; font-size: 0.75rem; font-weight: bold; background: var(--primary-light); color: var(--primary); }
    .explanation { padding: 0.75rem 1rem; border-radius: 8px; background: var(--primary-light); font-size: 0.8125rem; line-height: 1.5; margin-top: 0.75rem; }
    .hidden { display: none !important; }
    .flashcard { min-height: 220px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; border: 2px dashed var(--border); border-radius: 16px; padding: 2rem; cursor: pointer; margin-bottom: 1rem; }
  </style>
</head>
<body>
  <div class="legal-bar">
    Independent study tool. Not affiliated with or endorsed by ETS. TOEIC® is a registered trademark of ETS. Confirm latest test format on ets.org.
  </div>

  <header>
    <div class="header-top">
      <div class="brand">
        <div class="logo">T</div>
        <div>
          <h1 style="font-size: 1.1rem; font-weight: bold;">TOEIC Mastery Toolkit, 2026 Edition</h1>
          <p style="font-size: 0.75rem; color: var(--text-muted);">100% Offline Single-File Archive • Target 500 – 900+</p>
        </div>
      </div>
      <div>
        <button class="theme-toggle" onclick="toggleTheme()">🌓 Light / Dark</button>
      </div>
    </div>
    <div class="nav-tabs">
      <button class="tab-btn active" onclick="switchTab('overview')">Overview</button>
      <button class="tab-btn" onclick="switchTab('diagnostic')">Diagnostic</button>
      <button class="tab-btn" onclick="switchTab('strategy')">Part Strategy</button>
      <button class="tab-btn" onclick="switchTab('practice')">Practice Bank</button>
      <button class="tab-btn" onclick="switchTab('vocab')">500 Vocabulary</button>
      <button class="tab-btn" onclick="switchTab('grammar')">Grammar Drills</button>
      <button class="tab-btn" onclick="switchTab('errorlog')">Error Log</button>
    </div>
  </header>

  <main>
    <!-- TAB 1: OVERVIEW -->
    <div id="tab-overview" class="tab-content">
      <!-- Word of the Day Card -->
      <div class="card" style="border-left: 4px solid var(--primary); background: linear-gradient(135deg, var(--card-bg) 0%, var(--primary-light) 100%);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span style="font-size: 0.75rem; font-weight: bold; color: var(--primary); text-transform: uppercase;">✨ Business Word of the Day</span>
          <button class="btn btn-outline" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;" onclick="renderRandomWotd()">🎲 Shuffle Word</button>
        </div>
        <div id="wotd-container">
          <!-- Populated by JavaScript -->
        </div>
      </div>

      <div class="card">
        <h2 style="margin-bottom: 0.5rem;">TOEIC Test Structure & Scoring System</h2>
        <p style="color: var(--text-muted); font-size: 0.875rem; margin-bottom: 1.5rem;">
          Total score ranges from 10 to 990 points. The test consists of 2 sections: Listening (45 min, 100 Qs) and Reading (75 min, 100 Qs).
        </p>
        <div class="grid-2">
          <div style="padding: 1rem; border: 1px solid var(--border); border-radius: 12px;">
            <h3 style="color: var(--primary); margin-bottom: 0.5rem;">Listening Section (~45 Min, 100 Qs)</h3>
            <p style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 0.5rem;">Scaled: 5 to 495 points</p>
            <ul style="font-size: 0.875rem; line-height: 1.8; padding-left: 1.25rem;">
              <li><strong>Part 1: Photographs</strong> (6 Qs)</li>
              <li><strong>Part 2: Question-Response</strong> (25 Qs)</li>
              <li><strong>Part 3: Conversations</strong> (39 Qs)</li>
              <li><strong>Part 4: Short Talks</strong> (30 Qs)</li>
            </ul>
          </div>
          <div style="padding: 1rem; border: 1px solid var(--border); border-radius: 12px;">
            <h3 style="color: var(--primary); margin-bottom: 0.5rem;">Reading Section (75 Min, 100 Qs)</h3>
            <p style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 0.5rem;">Scaled: 5 to 495 points</p>
            <ul style="font-size: 0.875rem; line-height: 1.8; padding-left: 1.25rem;">
              <li><strong>Part 5: Incomplete Sentences</strong> (30 Qs, ~10 min)</li>
              <li><strong>Part 6: Text Completion</strong> (16 Qs, ~8 min)</li>
              <li><strong>Part 7: Reading Comprehension</strong> (54 Qs, ~55 min)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2: DIAGNOSTIC -->
    <div id="tab-diagnostic" class="tab-content hidden">
      <div class="card">
        <h2>Diagnostic Mini-Test (30 Questions)</h2>
        <p style="font-size: 0.875rem; color: var(--text-muted); margin-bottom: 1rem;">
          Test your baseline across all 7 parts. All estimated scores are for study guidance only.
        </p>
        <div id="diag-container"></div>
      </div>
    </div>

    <!-- TAB 3: STRATEGY -->
    <div id="tab-strategy" class="tab-content hidden">
      <div class="card">
        <h2>Part-by-Part Strategies & Trap Breakdowns</h2>
        <div id="strategy-selector" style="display: flex; gap: 0.5rem; margin: 1rem 0; overflow-x: auto;"></div>
        <div id="strategy-content"></div>
      </div>
    </div>

    <!-- TAB 4: PRACTICE BANK -->
    <div id="tab-practice" class="tab-content hidden">
      <div class="card">
        <h2>Practice Question Bank</h2>
        <div style="display: flex; justify-content: space-between; align-items: center; margin: 1rem 0;">
          <span id="p5-counter" class="badge">Question 1</span>
          <div>
            <button class="btn btn-outline" onclick="prevP5()">Previous</button>
            <button class="btn" onclick="nextP5()">Next</button>
          </div>
        </div>
        <div id="p5-card"></div>
      </div>
    </div>

    <!-- TAB 5: 500 VOCABULARY -->
    <div id="tab-vocab" class="tab-content hidden">
      <div class="card">
        <h2>500 Business & Workplace Vocabulary Trainer</h2>
        <p style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 1rem;">
          Click the card to flip between term and business definition.
        </p>
        <div id="vocab-flashcard" class="flashcard" onclick="flipVocabCard()"></div>
        <div style="display: flex; justify-content: center; gap: 1rem;">
          <button class="btn btn-outline" onclick="prevVocab()">Previous Term</button>
          <button class="btn btn-outline" onclick="speakVocab()">🔊 Pronounce</button>
          <button class="btn" onclick="nextVocab()">Next Term</button>
        </div>
      </div>
    </div>

    <!-- TAB 6: GRAMMAR -->
    <div id="tab-grammar" class="tab-content hidden">
      <div class="card">
        <h2>20 High-Yield Part 5 Grammar Lessons</h2>
        <div id="grammar-nav" style="display: flex; gap: 0.35rem; overflow-x: auto; margin: 1rem 0;"></div>
        <div id="grammar-lesson-content"></div>
      </div>
    </div>

    <!-- TAB 7: ERROR LOG -->
    <div id="tab-errorlog" class="tab-content hidden">
      <div class="card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <h2>Automatic Error Log</h2>
          <button class="btn btn-outline" onclick="clearErrorLog()">Clear All</button>
        </div>
        <div id="error-list"></div>
      </div>
    </div>
  </main>

  <script>
    // Embedded Complete Datasets
    const STRATEGIES = ${JSON.stringify(STRATEGY_GUIDES)};
    const GRAMMAR = ${JSON.stringify(GRAMMAR_LESSONS)};
    const VOCAB = ${JSON.stringify(VOCABULARY_LIST)};
    const PART5 = ${JSON.stringify(PART_5_QUESTIONS)};
    const DIAGNOSTIC = ${JSON.stringify(DIAGNOSTIC_QUESTIONS)};

    // Storage fallback for sandboxed previews
    (function () {
      try { localStorage.setItem('__p', '1'); localStorage.removeItem('__p'); return; } catch (e) {}
      var mem = {};
      var fake = { getItem: function (k) { return k in mem ? mem[k] : null; }, setItem: function (k, v) { mem[k] = String(v); }, removeItem: function (k) { delete mem[k]; } };
      try { Object.defineProperty(window, 'localStorage', { value: fake, configurable: true }); } catch (e) {}
    })();

    // Navigation state
    function switchTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      const target = document.getElementById('tab-' + tabId);
      if (target) target.classList.remove('hidden');
      event.target.classList.add('active');
    }

    function toggleTheme() {
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('toeic_theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    }

    // Vocabulary State
    let vocabIdx = 0;
    let vocabFlipped = false;
    function renderVocabCard() {
      const w = VOCAB[vocabIdx];
      const card = document.getElementById('vocab-flashcard');
      if (!card) return;
      if (!vocabFlipped) {
        card.innerHTML = '<span class="badge" style="margin-bottom: 1rem;">' + w.category + '</span><h3 style="font-size: 2rem;">' + w.word + '</h3><p style="color: var(--text-muted); font-size: 0.875rem;">(' + w.pos + ')</p><p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 1rem;">Click to flip for definition & collocation</p>';
      } else {
        card.innerHTML = '<p style="font-size: 1.1rem; font-weight: bold; margin-bottom: 0.5rem;">' + w.definition + '</p><p style="color: var(--warning); font-size: 0.875rem; margin-bottom: 0.5rem;"><strong>Collocation:</strong> ' + w.collocation + '</p><p style="font-size: 0.8125rem; font-style: italic; color: var(--text-muted);">"' + w.example + '"</p>';
      }
    }
    function flipVocabCard() { vocabFlipped = !vocabFlipped; renderVocabCard(); }
    function nextVocab() { vocabFlipped = false; vocabIdx = (vocabIdx + 1) % VOCAB.length; renderVocabCard(); }
    function prevVocab() { vocabFlipped = false; vocabIdx = (vocabIdx - 1 + VOCAB.length) % VOCAB.length; renderVocabCard(); }
    function speakVocab() {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(VOCAB[vocabIdx].word);
        u.lang = 'en-US';
        window.speechSynthesis.speak(u);
      }
    }

    // Part 5 Practice State
    let p5Idx = 0;
    let p5Answers = {};
    function renderP5() {
      const q = PART5[p5Idx];
      const counter = document.getElementById('p5-counter');
      const card = document.getElementById('p5-card');
      if (!card) return;
      counter.innerText = 'Question ' + (p5Idx + 1) + ' of ' + PART5.length + ' (' + q.difficulty + ')';
      const userChoice = p5Answers[q.id];
      let optionsHtml = '';
      q.options.forEach(opt => {
        let cls = 'option-btn';
        if (userChoice) {
          if (opt.key === q.correctAnswer) cls += ' correct';
          else if (opt.key === userChoice) cls += ' wrong';
        }
        optionsHtml += '<button class="' + cls + '" onclick="answerP5(\\'' + q.id + '\\', \\'' + opt.key + '\\')"><span><strong>' + opt.key + '.</strong> ' + opt.text + '</span></button>';
      });
      let explanationHtml = '';
      if (userChoice) {
        explanationHtml = '<div class="explanation"><strong>Explanation:</strong> ' + q.explanation + '</div>';
      }
      card.innerHTML = '<h3 style="margin-bottom: 1rem; font-size: 1.05rem;">' + q.questionText + '</h3>' + optionsHtml + explanationHtml;
    }
    function answerP5(qId, choice) {
      if (p5Answers[qId]) return;
      p5Answers[qId] = choice;
      const q = PART5.find(item => item.id === qId);
      if (q && choice !== q.correctAnswer) {
        logError(5, q.questionText, choice, q.correctAnswer, q.explanation);
      }
      renderP5();
    }
    function nextP5() { if (p5Idx < PART5.length - 1) { p5Idx++; renderP5(); } }
    function prevP5() { if (p5Idx > 0) { p5Idx--; renderP5(); } }

    // Error Log
    function getErrors() {
      try { return JSON.parse(localStorage.getItem('toeic_error_log')) || []; } catch(e) { return []; }
    }
    function logError(part, qText, userAns, correctAns, expl) {
      const list = getErrors();
      list.unshift({ part, qText, userAns, correctAns, expl, date: new Date().toLocaleDateString() });
      localStorage.setItem('toeic_error_log', JSON.stringify(list));
      renderErrorLog();
    }
    function renderErrorLog() {
      const container = document.getElementById('error-list');
      if (!container) return;
      const list = getErrors();
      if (list.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">No errors recorded yet. Practice questions to build your review list!</p>';
        return;
      }
      let html = '';
      list.forEach((err, idx) => {
        html += '<div style="border: 1px solid var(--border); border-radius: 12px; padding: 1rem; margin-bottom: 0.75rem;">' +
          '<div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-muted); margin-bottom:0.25rem;">' +
          '<span>Part ' + err.part + '</span><span>' + err.date + '</span></div>' +
          '<p style="font-weight:600; font-size:0.875rem; margin-bottom:0.5rem;">' + err.qText + '</p>' +
          '<p style="font-size:0.75rem; color:var(--danger); margin-bottom:0.25rem;">Your Choice: ' + err.userAns + ' | Correct: <strong>' + err.correctAns + '</strong></p>' +
          '<p style="font-size:0.75rem; color:var(--text-muted);">' + err.expl + '</p>' +
          '</div>';
      });
      container.innerHTML = html;
    }
    function clearErrorLog() {
      localStorage.removeItem('toeic_error_log');
      renderErrorLog();
    }

    function renderWotd(wordObj) {
      const c = document.getElementById('wotd-container');
      if (!c) return;
      const w = wordObj || VOCAB[new Date().getDate() % VOCAB.length];
      c.innerHTML = '<div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:0.25rem;">' +
        '<h3 style="font-size:1.35rem; color:var(--text);">' + w.word + ' <span style="font-size:0.8rem; font-weight:normal; color:var(--text-muted); font-style:italic;">(' + w.pos + ')</span></h3>' +
        '<span class="badge">' + w.category + '</span>' +
        '</div>' +
        '<p style="font-size:0.9rem; line-height:1.4; margin-bottom:0.5rem;">' + w.definition + '</p>' +
        '<p style="font-size:0.8125rem; color:var(--text-muted); margin-bottom:0.4rem;"><em>"' + w.example + '"</em></p>' +
        '<p style="font-size:0.8125rem; font-weight:600; color:var(--warning);">Collocation: ' + w.collocation + '</p>';
    }

    function renderRandomWotd() {
      const randomW = VOCAB[Math.floor(Math.random() * VOCAB.length)];
      renderWotd(randomW);
    }

    // Initialize
    window.onload = function() {
      renderWotd();
      renderVocabCard();
      renderP5();
      renderErrorLog();
      // Render Strategies Selector
      const stratSel = document.getElementById('strategy-selector');
      if (stratSel) {
        STRATEGIES.forEach(s => {
          stratSel.innerHTML += '<button class="tab-btn" onclick="renderStrategy(' + s.part + ')">Part ' + s.part + ': ' + s.name + '</button>';
        });
        renderStrategy(1);
      }
    };

    function renderStrategy(partNum) {
      const s = STRATEGIES.find(item => item.part === partNum);
      const c = document.getElementById('strategy-content');
      if (!s || !c) return;
      let trapsHtml = '<h4>The 5 Most Common Traps:</h4><ul>';
      s.traps.forEach(t => {
        trapsHtml += '<li><strong>' + t.title + ':</strong> ' + t.description + ' (<em>Example: ' + t.example + '</em>)</li>';
      });
      trapsHtml += '</ul>';
      c.innerHTML = '<h3 style="margin: 1rem 0 0.5rem 0;">Part ' + s.part + ': ' + s.name + ' (' + s.section + ')</h3>' +
        '<p style="font-size:0.875rem; color:var(--text-muted); margin-bottom:1rem;">' + s.taskDescription + '</p>' +
        '<p style="font-size:0.8125rem; background:var(--primary-light); padding:0.5rem; border-radius:6px; margin-bottom:1rem;">⏱️ <strong>Pacing:</strong> ' + s.timeRecommendation + '</p>' +
        '<div style="font-size:0.875rem; line-height:1.6;">' + trapsHtml + '</div>';
    }
  </script>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `toeic-mastery-toolkit-2026.html`;
  a.click();
  URL.revokeObjectURL(url);
}
