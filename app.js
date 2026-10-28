/* =============================================
   app.js  –  Birthday Surprise for Bhagee 💖
   Step-by-Step Screen Architecture
   ============================================= */

/* ─────────────────────────────────────────────
   ★  CONFIG & CONTENT (Sinhala - Romantic & Funny)
───────────────────────────────────────────── */
const GF_NAME     = "Bhagya";
const GF_NICKNAME = "භාගී";
const YOUR_NAME   = "සසි";

const STORIES = [
  {
    emoji: "👀",
    date: "මුලින්ම දැක්ක දවස",
    title: "ඔයාව දැක්ක වෙලාවේ...",
    body: "ඔයාව මුලින්ම දැකපු වෙලාවේ මට හිතුණේ 'අම්මෝ මේ කෙල්ල නම් හරි හුරතල් පාටයි, හැබැයි පොඩ්ඩක් සැර පාටයි' කියලා! එදාම මගේ හිත හොරකම් කරගත්තා. 🥰"
  },
  {
    emoji: "💘",
    date: "ආදරෙයි කිව්ව දවස",
    title: "2023.11.15 ✨",
    body: "2023.11.15 — ඔයා මට මුලින්ම 'ආදරෙයි' කිව්ව දවස. මට සතුටට මොනවා කරන්නද හිතාගන්න බැරි වුණා. මගේ මුළු ජීවිතේම වෙනස් වෙච්ච ලස්සනම දවසක්!"
  },
  {
    emoji: "🏰",
    date: "අපේ First Trip එක",
    title: "Galle Fort එකේ ඇවිද්ද දවස 🌊",
    body: "අපි මුලින්ම ඇවිදින්න ගියේ Galle Fort එකට. මුහුදු හුළඟ වැදි වැදි, අතින් අල්ලගෙන පැය ගණන් ඇවිදපු හැටි මට තාම ඊයේ වගේ මතකයි."
  },
  {
    emoji: "🍿",
    date: "Movie Dates",
    title: "Neera ඉඳන් ආදරණීය තරුවක් වෙනකම් 🎬",
    body: "මුලින්ම 'Neera' බැලුවා, ළඟදි 'ආදරණීය තරුවක්' බැලුවා... ෆිල්ම් එකේ මොනවා වුණත් මම බැලුවේ ඔයා පොප්කෝන් කන හුරතල් විදිහ දිහා තමයි! 😂"
  },
  {
    emoji: "😤",
    date: "කේන්තිකාරී",
    title: "පොඩි දේටත් තරහ යන භාගී 🙈",
    body: "පොඩි දේටත් කේන්ති අරන් කට උල් කරගන්නවා, හැබැයි විනාඩි පහකින් ඇවිත් 'මට බඩගිනියි අනේ' කියනවා! ඔයාගේ ඔය ගති වලට මම හරිම ආදරෙයි. 😂❤️"
  },
  {
    emoji: "🎂",
    date: "අද දවස",
    title: "Happy Birthday, භාගී! 🎉",
    body: "අද මගේ මුළු ලෝකෙම උපන්දිනය! ඔයා මගේ ජීවිතේට ආවට මම හැමදාමත් වාසනාවන්තයි. Happy Birthday මගේ රත්තරන් කෙල්ලේ! 💖✨"
  }
];

const QUIZ = [
  {
    q: "මට මුලින්ම ආදරෙයි කිව්වේ කවද්ද? 💖",
    opts: [
      "2023.10.12 📅",
      "2023.11.15 💘",
      "2023.12.01 🗓️",
      "2023.11.25 ✨"
    ],
    correct: 1
  },
  {
    q: "අපි දෙන්නා මුලින්ම බලන්න ගියපු ෆිල්ම් එක මොකක්ද? 🎬",
    opts: [
      "Kathuru Mithuru 🍿",
      "Neera (නීරා) 🎥",
      "Gindari 3 🎭",
      "Midunu Vishwaya 🌌"
    ],
    correct: 1
  },
  {
    q: "අපි මුලින්ම ඇවිදින්න ගියේ කොහෙද? 🌊",
    opts: [
      "Lotus Tower 🗼",
      "Viharamahadevi Park 🌸",
      "Galle Fort (ගාල්ල කොටුව) 🏰",
      "Mirissa Beach 🏖️"
    ],
    correct: 2
  },
  {
    q: "අපි අන්තිමට එකට බලන්න ගියපු ෆිල්ම් එක මොකක්ද? ⭐",
    opts: [
      "Adarneeya Taruwak (ආදරණීය තරුවක්) 🌟",
      "Sinhabahu 🦁",
      "Siri Kula 🎬",
      "Komaali Kings 👑"
    ],
    correct: 0
  }
];

const ENVELOPES = [
  {
    icon: "💌",
    label: "Open when\nyou miss me",
    title: "මාව මතක් වෙන වෙලාවට...",
    body: "ඇස් දෙක පියාගන්න භාගී... මම හැම තත්පරේම ඔයාගේ හිත ළඟ ඉන්නවා. මටත් ඔයාව හැමවෙලේම මතක් වෙනවා! 💕"
  },
  {
    icon: "😤",
    label: "Open when\nyou're angry",
    title: "කේන්ති ගිය වෙලාවට...",
    body: "අනේ කේන්ති ගන්න එපා මගේ රත්තරන්... ඔයා කේන්ති ගත්තම හුරතල් වුණාට හිනාවෙලා ඉන්නකොට ඊට වඩා දාහක් ලස්සනයි! බලන්න දැන් හිනාවක් ආවා නේද? 😁❤️"
  },
  {
    icon: "🌙",
    label: "Open at\n12:00 AM",
    title: "රෑ 12:00 ට...",
    body: "රෑ 12 වුණ ගමන් මුලින්ම සුභ පතන්න ඕන මට! සුභම සුභ උපන්දිනයක් මගේ ආදරණීය භාගී! 🎂✨"
  },
  {
    icon: "💪",
    label: "Open when\nyou're sad",
    title: "හිතට දුක හිතුණ වෙලාවට...",
    body: "මගේ කෙල්ල ශක්තිමත්! පොඩි දේවල් වලට හිත රිද්දගන්න එපා. මොන දේ වුණත් මම හැමදාම ඔයාගේ ළඟින් ඉන්නවා. 🌟"
  },
  {
    icon: "🍔",
    label: "Open when\nyou're hungry",
    title: "බඩගිනි වෙලාවට...",
    body: "දැන්ම මට කෝල් එකක් හරි මැසේජ් එකක් හරි දාලා කියන්න මොනවද කන්න ඕන කියලා! අපි ඉක්මනටම මොනවා හරි කන්න යමු! 😋🍕"
  },
  {
    icon: "💖",
    label: "Open when\nyou need love",
    title: "ආදරේ ඕන වෙලාවට...",
    body: "වචන වලින් කියන්න බැරි තරම්, මුළු හදවතින්ම මම ඔයාට ආදරෙයි මගේ භාගී. හැමදාමත් ඔයා මගේ විතරයි! 💝"
  }
];

const WRAPPED = [
  {
    grad: "linear-gradient(160deg,#7c3aed,#ec4899)",
    emoji: "📅",
    label: "අපේ ආදරේ",
    num: "2023.11.15",
    unit: "සිට අද දක්වා",
    desc: "එදා ඉඳන් අද වෙනකම් හැම තත්පරයක්ම ඔයා නිසා මට හරිම විශේෂයි භාගී."
  },
  {
    grad: "linear-gradient(160deg,#059669,#065f46)",
    emoji: "💬",
    label: "මැසේජ් සහ කෝල්ස්",
    num: "කෝටි ගණනක්",
    unit: "විතර",
    desc: "කෝටි ගාණක් කතා කළත් ඔයා එක්ක කතා කරලා මට තාම ඇති වෙලා නෑ! 😂"
  },
  {
    grad: "linear-gradient(160deg,#dc2626,#7f1d1d)",
    emoji: "❤️",
    label: "මගේ හිතේ අයිතිකාරී",
    num: "100%",
    unit: "භාගී විතරයි",
    desc: "එදා, අද, හෙට හැමදාමත් මගේ හිතේ ඉන්නේ ඔයා විතරයි! No doubts!"
  },
  {
    grad: "linear-gradient(160deg,#d97706,#92400e)",
    emoji: "🏰",
    label: "ට්‍රිප් සහ ෆිල්ම්ස්",
    num: "Galle Fort+",
    unit: "Endless Fun",
    desc: "Galle Fort වල ඉඳන් Neera, ආදරණීය තරුවක් වෙනකම්... හැම ගමනක්ම සුපිරි!"
  },
  {
    grad: "linear-gradient(160deg,#7e22ce,#4c1d95)",
    emoji: "🍀",
    label: "මගේ වාසනාව",
    num: "Lucky",
    unit: "To Have You",
    desc: "ඔයා වගේ කෙල්ලෙක් මට ලැබුණු එක තමයි මගේ ජීවිතේ ලොකුම වාසනාව! 🥰"
  }
];

const LETTER =
`මගේ ආදරණීය භාගී, 💖

සුභම සුභ උපන්දිනයක් මගේ රත්තරන් කෙල්ලට! 🎂✨

මට කවදාවත් හිතුණේ නෑ ඔයා වගේ පොඩි කේන්තිකාර, ඒත් මාරම හුරතල් කෙල්ලෙක් මගේ ජීවිතේට ඇවිත් මගේ ලෝකෙම මෙහෙම කණපිට පෙරලයි කියලා! 😂❤️

ඔයාගේ ඔය පොඩි දේටත් කට උල් කරන් තරහ වෙන එකටයි, ඊළඟ තත්පරේ කිසි දෙයක් නොවුණා වගේ "මට බඩගිනියි" කියන එකටයි මම තාමත් පුදුම විදිහට ආදරෙයි. 

අපේ රණ්ඩු, බඩගින්නට කරපු විකාර, ෆිල්ම් වලට වඩා එකිනෙකා දිහා බලාගෙන හිනාවෙච්ච දවස්... ඒ හැම තත්පරයක්ම මගේ ජීවිතේ ලස්සනම මතක.

ලොකු කතා ඕන නෑ මගේ භාගී — ඔයා මගේ ළඟින් ඉන්නවා නම් මට මුළු ලෝකෙම තියෙනවා වගේ. හැමදාමත් ඔහොමම මගේ ළඟින් හිනාවෙලා ඉන්න.

මම ඔයාට හැමදාමත් ගොඩාආආආක් ආදරෙයි! 🥰🌹

ඔයාගේ ආදරණීය,
${YOUR_NAME} 💖`;

/* ─────────────────────────────────────────────
   STEP-BY-STEP NAVIGATION SYSTEM
───────────────────────────────────────────── */
const STEPS = ['landing', 'sec-timeline', 'sec-quiz', 'sec-gifts', 'sec-wrapped', 'sec-final'];
let currentStepIndex = 0;
let storyIdx   = 0;
let wrappedIdx = 0;
let quizIdx    = 0;
let quizScore  = 0;
let openedEnvs = new Set();
let confettiStarted = false;

function goToStep(index) {
  if (index < 0 || index >= STEPS.length) return;
  currentStepIndex = index;

  // Show only active step section
  STEPS.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) {
      if (i === index) {
        el.classList.add('active');
        el.scrollTop = 0;
      } else {
        el.classList.remove('active');
      }
    }
  });

  // Update bottom navigation
  const bnav = document.getElementById('bnav');
  if (bnav) {
    bnav.style.display = index > 0 ? 'flex' : 'none';
    document.querySelectorAll('.bn').forEach(btn => {
      const stepNum = parseInt(btn.dataset.step, 10);
      btn.classList.toggle('on', stepNum === index);
    });
  }

  // Trigger final card animations if final step
  if (STEPS[index] === 'sec-final' && !confettiStarted) {
    confettiStarted = true;
    setTimeout(() => {
      fireConfetti();
      typewriter();
    }, 400);
  }
}
window.goToStep = goToStep;

function goToSection(id) {
  const idx = STEPS.indexOf(id);
  if (idx !== -1) goToStep(idx);
}
window.goToSection = goToSection;

function startExp() {
  goToStep(1);
}

function replayAll() {
  confettiStarted = false;
  document.getElementById('finalLetter').textContent = '';
  goToStep(0);
}

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const gfNameEl = document.getElementById('gfNameEl');
  if (gfNameEl) gfNameEl.textContent = GF_NICKNAME;

  buildStories();
  buildQuiz();
  buildEnvelopes();
  buildWrapped();
  spawnEmojis();
  heartCanvas();

  goToStep(0);
});

/* ─────────────────────────────────────────────
   STORIES (Carousel)
───────────────────────────────────────────── */
function buildStories() {
  const wrap = document.getElementById('storyWrap');
  const dotsEl = document.getElementById('storyDots');
  wrap.querySelectorAll('.story-card').forEach(c => c.remove());
  dotsEl.innerHTML = '';

  STORIES.forEach((s, i) => {
    const c = document.createElement('div');
    c.className = 'story-card' + (i === 0 ? ' active' : '');
    c.id = `sc${i}`;
    c.innerHTML = `
      <span class="story-emoji">${s.emoji}</span>
      <div class="story-date">${s.date}</div>
      <h3 class="story-title">${s.title}</h3>
      <p class="story-body">${s.body}</p>`;
    wrap.appendChild(c);

    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' on' : '');
    d.onclick = () => jumpStory(i);
    dotsEl.appendChild(d);
  });
  updateBar();
}

function showStory(i) {
  document.querySelectorAll('.story-card').forEach((c, idx) => {
    c.classList.toggle('active', idx === i);
  });
  document.querySelectorAll('#storyDots .dot').forEach((d, idx) => {
    d.classList.toggle('on', idx === i);
  });
  updateBar();
}

function nextStory() {
  if (storyIdx < STORIES.length - 1) { 
    storyIdx++; 
    showStory(storyIdx); 
  } else {
    goToStep(2); // Auto advance to Quiz
  }
}
function prevStory() {
  if (storyIdx > 0) { storyIdx--; showStory(storyIdx); }
}
function jumpStory(i) { storyIdx = i; showStory(i); }

function updateBar() {
  const pct = ((storyIdx + 1) / STORIES.length) * 100;
  const bar = document.getElementById('storyBar');
  if (bar) bar.style.width = pct + '%';
}

/* ─────────────────────────────────────────────
   QUIZ
───────────────────────────────────────────── */
function buildQuiz() {
  quizIdx = 0; quizScore = 0;
  showQuestion();
}

function showQuestion() {
  const q = QUIZ[quizIdx];
  const card = document.getElementById('quizCard');
  card.style.display = 'block';
  document.getElementById('quizResult').style.display = 'none';
  document.getElementById('quizNextBtn').style.display = 'none';

  card.innerHTML = `
    <div class="q-num">ප්‍රශ්නය ${quizIdx + 1} / ${QUIZ.length}</div>
    <p class="q-text">${q.q}</p>
    <div class="q-opts">
      ${q.opts.map((o, i) => `<button class="q-opt" id="opt${i}" onclick="pickOpt(${i})">${o}</button>`).join('')}
    </div>`;
}

function pickOpt(chosen) {
  const q = QUIZ[quizIdx];
  document.querySelectorAll('.q-opt').forEach(b => b.disabled = true);
  document.getElementById(`opt${q.correct}`).classList.add('correct');
  if (chosen !== q.correct) document.getElementById(`opt${chosen}`).classList.add('wrong');
  else quizScore++;

  setTimeout(() => {
    quizIdx++;
    if (quizIdx < QUIZ.length) showQuestion();
    else showQuizResult();
  }, 1200);
}

function showQuizResult() {
  document.getElementById('quizCard').style.display = 'none';
  const res = document.getElementById('quizResult');
  res.style.display = 'block';
  const emojis = ['😅','🙈','🥰','🤩'];
  const msgs = [
    `${quizScore}/${QUIZ.length} — අම්මෝ භාගී... ඔයාට නම් අමතක වෙලා හොඳටම! කණ මිරිකන්න තමයි තියෙන්නේ! 😂`,
    `${quizScore}/${QUIZ.length} — ලඟින් ගියා නේද භාගී! තව ටිකයි! 💛`,
    `${quizScore}/${QUIZ.length} — ඔයා අපි ගැන හොඳටම දන්නවා මගේ භාගී! 🥰`,
    `${quizScore}/${QUIZ.length} — 4/4 ම හරි! ඔයා නම් සුපිරිම කෙල්ලෙක් මගේ භාගී! 🌟💖`
  ];
  const idx = quizScore <= 1 ? 0 : quizScore <= 2 ? 1 : quizScore === 3 ? 2 : 3;
  document.getElementById('scoreEmoji').textContent = emojis[idx];
  document.getElementById('scoreMsg').textContent = msgs[idx];
  document.getElementById('quizNextBtn').style.display = 'inline-block';
}

/* ─────────────────────────────────────────────
   ENVELOPES
───────────────────────────────────────────── */
function buildEnvelopes() {
  const grid = document.getElementById('envGrid');
  grid.innerHTML = '';
  ENVELOPES.forEach((e, i) => {
    const c = document.createElement('div');
    c.className = 'env-card';
    c.id = `env${i}`;
    c.innerHTML = `<span class="env-icon">${e.icon}</span><div class="env-label">${e.label}</div>`;
    c.onclick = () => openEnv(i);
    grid.appendChild(c);
  });
}

function openEnv(i) {
  const e = ENVELOPES[i];
  if (!openedEnvs.has(i)) {
    openedEnvs.add(i);
    const card = document.getElementById(`env${i}`);
    card.classList.add('opened');
    const badge = document.createElement('div');
    badge.className = 'env-check'; badge.textContent = '✓';
    card.appendChild(badge);
    if (openedEnvs.size >= 3) {
      document.getElementById('giftsNextBtn').style.display = 'inline-block';
    }
  }
  document.getElementById('mEmoji').textContent = e.icon;
  document.getElementById('mTitle').textContent = e.title;
  document.getElementById('mBody').textContent = e.body;
  document.getElementById('modalBg').classList.add('show');
}

function closeModal() { document.getElementById('modalBg').classList.remove('show'); }
function modalTap(ev) { if (ev.target === document.getElementById('modalBg')) closeModal(); }

/* ─────────────────────────────────────────────
   WRAPPED
───────────────────────────────────────────── */
function buildWrapped() {
  const frame = document.getElementById('wrappedFrame');
  const dotsEl = document.getElementById('wrappedDots');
  frame.innerHTML = '';
  dotsEl.innerHTML = '';

  WRAPPED.forEach((s, i) => {
    const sl = document.createElement('div');
    sl.className = 'w-slide' + (i === 0 ? ' active' : '');
    sl.id = `ws${i}`;
    sl.innerHTML = `
      <div class="w-bg" style="background:${s.grad}"></div>
      <div class="w-inner">
        <span class="w-emoji">${s.emoji}</span>
        <div class="w-label">${s.label}</div>
        <div class="w-num">${s.num}</div>
        <div class="w-unit">${s.unit}</div>
        <p class="w-desc">${s.desc}</p>
      </div>`;
    frame.appendChild(sl);
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' on' : '');
    d.onclick = () => jumpWrapped(i);
    dotsEl.appendChild(d);
  });
}

function showWrapped(i) {
  document.querySelectorAll('.w-slide').forEach((s, idx) => s.classList.toggle('active', idx === i));
  document.querySelectorAll('#wrappedDots .dot').forEach((d, idx) => d.classList.toggle('on', idx === i));
}
function nextWrapped() { 
  if (wrappedIdx < WRAPPED.length - 1) { 
    wrappedIdx++; 
    showWrapped(wrappedIdx); 
  } else {
    goToStep(5); // Advance to final step
  }
}
function prevWrapped() { if (wrappedIdx > 0) { wrappedIdx--; showWrapped(wrappedIdx); } }
function jumpWrapped(i) { wrappedIdx = i; showWrapped(i); }

/* ─────────────────────────────────────────────
   FINAL LETTER – TYPEWRITER
───────────────────────────────────────────── */
function typewriter() {
  const el = document.getElementById('finalLetter');
  el.textContent = '';
  let i = 0;
  function tick() {
    if (i < LETTER.length) {
      el.textContent += LETTER[i++];
      el.scrollTop = el.scrollHeight;
      setTimeout(tick, 22);
    }
  }
  tick();
}

/* ─────────────────────────────────────────────
   CONFETTI
───────────────────────────────────────────── */
function fireConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas || typeof confetti === 'undefined') return;
  const shoot = confetti.create(canvas, { resize: true });
  const colors = ['#ff6b9d','#ffd700','#c084fc','#ff4081','#ffffff'];
  let n = 0;
  function burst() {
    shoot({
      particleCount: 50,
      spread: 80,
      origin: { x: Math.random() * .8 + .1, y: .4 },
      colors,
      scalar: 1.1
    });
    if (++n < 5) setTimeout(burst, 500);
  }
  burst();
}

/* ─────────────────────────────────────────────
   HEART CANVAS (Background Animation)
───────────────────────────────────────────── */
function heartCanvas() {
  const cvs = document.getElementById('heartCanvas');
  if (!cvs) return;
  const ctx = cvs.getContext('2d');
  function resize() { cvs.width = window.innerWidth; cvs.height = window.innerHeight; }
  window.addEventListener('resize', resize);
  resize();

  const pts = Array.from({ length: 28 }, () => ({
    x: Math.random() * cvs.width,
    y: Math.random() * cvs.height,
    sz: 7 + Math.random() * 14,
    sp: .35 + Math.random() * .65,
    op: .08 + Math.random() * .35,
    dr: (Math.random() - .5) * .4
  }));

  function drawHeart(x, y, s, a) {
    ctx.save(); ctx.globalAlpha = a;
    ctx.fillStyle = `hsl(${330 + Math.random()*25},100%,72%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x, y-s/4, x-s/2, y-s/2, x-s/2, y-s*.7);
    ctx.bezierCurveTo(x-s/2, y-s*1.1, x, y-s*.9, x, y-s*.6);
    ctx.bezierCurveTo(x, y-s*.9, x+s/2, y-s*1.1, x+s/2, y-s*.7);
    ctx.bezierCurveTo(x+s/2, y-s/2, x, y-s/4, x, y);
    ctx.fill(); ctx.restore();
  }

  (function loop() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    pts.forEach(p => {
      p.y -= p.sp; p.x += p.dr;
      if (p.y < -30) { p.y = cvs.height + 30; p.x = Math.random() * cvs.width; }
      drawHeart(p.x, p.y, p.sz, p.op);
    });
    requestAnimationFrame(loop);
  })();
}

/* ─────────────────────────────────────────────
   FLOATING EMOJIS (Landing)
───────────────────────────────────────────── */
function spawnEmojis() {
  const box = document.getElementById('floatBox');
  if (!box) return;
  ['💖','🌸','✨','💫','🌷','🎀','💝','🌟','🦋','🌹'].forEach((e, i) => {
    const el = document.createElement('span');
    el.className = 'float-emoji';
    el.textContent = e;
    el.style.cssText = `left:${5 + i*9}%;font-size:${14+Math.floor(Math.random()*14)}px;animation-duration:${5+Math.random()*6}s;animation-delay:${Math.random()*4}s`;
    box.appendChild(el);
  });
}

/* ─────────────────────────────────────────────
   SWIPE (Touch) Support for Stories + Wrapped
───────────────────────────────────────────── */
let tx = 0;
document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) < 50) return;
  if (currentStepIndex === 1) {
    dx < 0 ? nextStory() : prevStory();
  } else if (currentStepIndex === 4) {
    dx < 0 ? nextWrapped() : prevWrapped();
  }
}, { passive: true });

/* Keyboard */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') { 
    if (currentStepIndex === 1) nextStory();
    else if (currentStepIndex === 4) nextWrapped();
  }
  if (e.key === 'ArrowLeft') { 
    if (currentStepIndex === 1) prevStory();
    else if (currentStepIndex === 4) prevWrapped();
  }
});
