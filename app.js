// ===== State =====
let currentMode = '';      // 'ana' | 'jal' | 'interview'
let currentDifficulty = ''; // 'beginner' | 'intermediate' | 'advanced'
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answers = []; // { question, correct, userAnswer, wasCorrect }

// ===== Navigation =====
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(id);
  page.classList.add('active');
  // Re-trigger animation
  page.style.animation = 'none';
  page.offsetHeight; // reflow
  page.style.animation = '';
}

function goBack(target) {
  showPage(target);
}

// ===== Start Quiz =====
function startQuiz(mode) {
  currentMode = mode;
  const diffIcon = document.getElementById('diff-icon');
  const diffTitle = document.getElementById('diff-title');

  if (mode === 'ana') {
    diffIcon.className = 'airline-logo ana-logo';
    diffIcon.textContent = 'ANA';
    diffTitle.textContent = 'ANA 企業分析クイズ';
  } else if (mode === 'jal') {
    diffIcon.className = 'airline-logo jal-logo';
    diffIcon.textContent = 'JAL';
    diffTitle.textContent = 'JAL 企業分析クイズ';
  } else {
    diffIcon.className = 'airline-logo interview-logo';
    diffIcon.textContent = '💬';
    diffTitle.textContent = '面接対策クイズ';
  }

  showPage('difficulty');
}

// ===== Select Difficulty =====
function selectDifficulty(diff) {
  currentDifficulty = diff;
  currentIndex = 0;
  score = 0;
  answers = [];

  // Get question pool and shuffle
  let pool = [];
  if (currentMode === 'ana') {
    pool = QUIZ_DATA.ana[diff] || [];
  } else if (currentMode === 'jal') {
    pool = QUIZ_DATA.jal[diff] || [];
  } else {
    pool = QUIZ_DATA.interview[diff] || [];
  }

  currentQuestions = shuffleArray([...pool]).slice(0, 10);

  // Update progress bar color
  const fill = document.getElementById('progress-fill');
  if (currentMode === 'ana') {
    fill.style.background = 'linear-gradient(90deg, #00467F, #00A0E9)';
  } else if (currentMode === 'jal') {
    fill.style.background = 'linear-gradient(90deg, #8B0000, #E8384F)';
  } else {
    fill.style.background = 'linear-gradient(90deg, #6C5CE7, #A29BFE)';
  }

  showPage('quiz');
  renderQuestion();
}

// ===== Render Question =====
function renderQuestion() {
  const q = currentQuestions[currentIndex];
  if (!q) return;

  // Update progress
  document.getElementById('q-current').textContent = currentIndex + 1;
  document.getElementById('q-total').textContent = currentQuestions.length;
  document.getElementById('progress-fill').style.width =
    ((currentIndex + 1) / currentQuestions.length * 100) + '%';

  // Badge
  const badge = document.getElementById('q-badge');
  if (currentMode === 'ana') {
    badge.className = 'question-badge ana';
    badge.textContent = 'ANA';
  } else if (currentMode === 'jal') {
    badge.className = 'question-badge jal';
    badge.textContent = 'JAL';
  } else {
    badge.className = 'question-badge interview';
    badge.textContent = '面接対策';
  }

  // Question text
  document.getElementById('q-text').textContent = q.question;

  // Shuffle choices
  const labels = ['A', 'B', 'C', 'D'];
  const shuffledChoices = shuffleArray(
    q.choices.map((c, i) => ({ text: c, isCorrect: i === q.answer }))
  );

  const choicesEl = document.getElementById('choices');
  choicesEl.innerHTML = '';

  shuffledChoices.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="choice-label">${labels[i]}</span><span>${c.text}</span>`;
    btn.addEventListener('click', () => handleAnswer(btn, c.isCorrect, shuffledChoices, q));
    choicesEl.appendChild(btn);
  });

  // Hide explanation & next
  document.getElementById('explanation').classList.add('hidden');
  document.getElementById('next-btn').classList.add('hidden');

  // Animate content
  const content = document.getElementById('quiz-content');
  content.style.animation = 'none';
  content.offsetHeight;
  content.style.animation = 'slideUp 0.4s ease';
}

// ===== Handle Answer =====
function handleAnswer(btn, isCorrect, shuffledChoices, q) {
  // Prevent double click
  const allBtns = document.querySelectorAll('.choice-btn');
  if (btn.classList.contains('answered')) return;

  allBtns.forEach(b => b.classList.add('answered'));

  if (isCorrect) {
    btn.classList.add('correct');
    score++;
  } else {
    btn.classList.add('wrong');
    // Highlight correct answer
    allBtns.forEach((b, i) => {
      if (shuffledChoices[i].isCorrect) {
        b.classList.add('correct');
      }
    });
  }

  // Store answer
  answers.push({
    question: q.question,
    correct: q.choices[q.answer],
    userAnswer: btn.querySelector('span:last-child').textContent,
    wasCorrect: isCorrect
  });

  // Show explanation
  const exp = document.getElementById('explanation');
  const expIcon = document.getElementById('exp-icon');
  const expText = document.getElementById('exp-text');
  const expSource = document.getElementById('exp-source');

  exp.classList.remove('hidden', 'wrong-exp');
  if (isCorrect) {
    expIcon.textContent = '✅ 正解！';
  } else {
    expIcon.textContent = '❌ 不正解';
    exp.classList.add('wrong-exp');
  }
  expText.textContent = q.explanation;
  expSource.textContent = q.source ? `出典: ${q.source}` : '';

  // Show next button
  const nextBtn = document.getElementById('next-btn');
  nextBtn.classList.remove('hidden');

  if (currentIndex === currentQuestions.length - 1) {
    nextBtn.textContent = '結果を見る 🎉';
  } else {
    nextBtn.textContent = '次の問題 →';
  }
}

// ===== Next Question =====
function nextQuestion() {
  currentIndex++;
  if (currentIndex >= currentQuestions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

// ===== Show Result =====
function showResult() {
  showPage('result');

  const pct = score / currentQuestions.length;
  const icon = document.getElementById('result-icon');
  const title = document.getElementById('result-title');
  const scoreNum = document.getElementById('score-num');
  const msg = document.getElementById('result-msg');
  const fill = document.getElementById('score-fill');

  scoreNum.textContent = score;

  // Animated score bar
  setTimeout(() => {
    fill.style.width = (pct * 100) + '%';
    if (pct >= 0.8) {
      fill.style.background = 'linear-gradient(90deg, #10B981, #34D399)';
    } else if (pct >= 0.5) {
      fill.style.background = 'linear-gradient(90deg, #F59E0B, #FBBF24)';
    } else {
      fill.style.background = 'linear-gradient(90deg, #EF4444, #F87171)';
    }
  }, 100);

  if (pct === 1) {
    icon.textContent = '🏆';
    title.textContent = 'パーフェクト！';
    msg.textContent = '完璧な知識です！面接でも自信を持って話せるレベルですね。';
  } else if (pct >= 0.8) {
    icon.textContent = '🎉';
    title.textContent = 'すばらしい！';
    msg.textContent = 'かなりの企業理解度です。間違えた部分を復習すればさらに磨きがかかります。';
  } else if (pct >= 0.6) {
    icon.textContent = '💪';
    title.textContent = 'いい感じ！';
    msg.textContent = '基礎はしっかりしています。もう少し深掘りして、面接で差をつけましょう。';
  } else if (pct >= 0.4) {
    icon.textContent = '📚';
    title.textContent = 'もう少し！';
    msg.textContent = '企業研究をもう一段深めましょう。公式サイトやIR情報を読み込むと効果的です。';
  } else {
    icon.textContent = '🔥';
    title.textContent = 'これから伸びる！';
    msg.textContent = 'まだまだ伸びしろがあります！一つずつ確実に覚えていきましょう。';
  }

  // Review
  const review = document.getElementById('result-review');
  review.innerHTML = '<h3 style="font-size:1rem;font-weight:600;margin-bottom:12px;">解答一覧</h3>';
  answers.forEach((a, i) => {
    const div = document.createElement('div');
    div.className = `review-item ${a.wasCorrect ? 'review-correct' : 'review-wrong'}`;
    div.innerHTML = `
      <span class="review-icon">${a.wasCorrect ? '✅' : '❌'}</span>
      <div class="review-text">
        <div class="review-q">Q${i+1}. ${a.question}</div>
        ${!a.wasCorrect ? `<div class="review-a">正解: ${a.correct}</div>` : ''}
      </div>
    `;
    review.appendChild(div);
  });
}

// ===== Retry =====
function retryQuiz() {
  selectDifficulty(currentDifficulty);
}

// ===== Utility =====
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
