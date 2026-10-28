/* ========================================================
   app.js – Birthday Surprise for Bhagee 💖
   Modern Mobile Interactive Experience
   ======================================================== */

/* ─────────────────────────────────────────────
   ★ CONFIG & CONTENT
   (Change names, dates, or image paths easily!)
───────────────────────────────────────────── */
const GF_NAME       = "Bhagya";
const GF_NICKNAME   = "භාගී";
const YOUR_NAME     = "සසි";
const LOVE_START    = new Date("2023-11-15T00:00:00"); // Our Love Anniversary

// Story Timeline with Polaroid Cards
// (Tip: Drop your real photos in an 'assets/' folder as 'assets/story1.jpg' etc., or keep beautiful illustrations!)
const STORIES = [
  {
    emoji: "👀",
    date: "මුලින්ම දැක්ක දවස",
    title: "ඔයාව දැක්ක වෙලාවේ...",
    body: "ඔයාව මුලින්ම දැකපු වෙලාවේ මට හිතුණේ 'අම්මෝ මේ කෙල්ල නම් හරි හුරතල් පාටයි, හැබැයි පොඩ්ඩක් සැර පාටයි' කියලා! එදාම මගේ හිත හොරකම් කරගත්තා. 🥰",
    caption: "The first spark ✨",
    image: null
  },
  {
    emoji: "💘",
    date: "ආදරෙයි කිව්ව දවස",
    title: "2023.11.15 ✨",
    body: "2023.11.15 — ඔයා මට මුලින්ම 'ආදරෙයි' කිව්ව දවස. මට සතුටට මොනවා කරන්නද හිතාගන්න බැරි වුණා. මගේ මුළු ජීවිතේම වෙනස් වෙච්ච ලස්සනම දවසක්!",
    caption: "She said YES! 💖",
    image: null
  },
  {
    emoji: "🏰",
    date: "අපේ First Trip එක",
    title: "Galle Fort එකේ ඇවිද්ද දවස 🌊",
    body: "අපි මුලින්ම ඇවිදින්න ගියේ Galle Fort එකට. මුහුදු හුළඟ වැදි වැදි, අතින් අල්ලගෙන පැය ගණන් ඇවිදපු හැටි මට තාම ඊයේ වගේ මතකයි.",
    caption: "Galle Fort Memories 🌊",
    image: null
  },
  {
    emoji: "🚂",
    date: "අමතක නොවන Trips",
    title: "Ohiya Train Trip එක 🌲",
    body: "අපි ගියපු trips වලින් කවදාවත් අමතක වෙන්නේ නැතිම එකක් තමයි Ohiya Train Trip එක! කඳු, තේ වතු, මීදුම මැද්දෙන් කෝච්චියේ ජනේලෙන් එබිලා, ඔයාගේ අතින් අල්ලගෙන ගියපු ඒ ලස්සන ගමන තාමත් මගේ හිතේ තියෙනවා. 🍃⛰️",
    caption: "Misty Ohiya Ride 🌲🚂",
    image: null
  },
  {
    emoji: "🎬",
    date: "Movie Dates",
    title: "Neera ඉඳන් ආදරණීය තරුවක් වෙනකම් 🎬",
    body: "මුලින්ම 'Neera' බැලුවා, ළඟදි 'ආදරණීය තරුවක්' බැලුවා... හෝල් එකේ අඳුර මැද්දේ ඔයාගේ අතින් තදින් අල්ලගෙන, ඔයා හිනාවෙන ලස්සන දිහා බලාගෙන හිටපු ඒ හැම මොහොතක්ම මට හරිම විශේෂයි! 🥰✨",
    caption: "Our Movie Dates 🎬💖",
    image: null
  },
  {
    emoji: "😤",
    date: "කේන්තිකාරී",
    title: "පොඩි දේටත් තරහ යන භාගී 🙈",
    body: "පොඩි දේටත් කේන්ති අරන් කට උල් කරගන්නවා... හැබැයි ඉතින් දවස් දෙක තුනක් යද්දී ඇයි තරහ වුණේ කියලවත් මතක නෑ, ආයෙත් සුපුරුදු හුරතලේම තමයි! ඔයාගේ ඔය අහිංසක ගති වලට මම හරිම ආදරෙයි. 😂❤️",
    caption: "Cute Angry Queen 👑",
    image: null
  },
  {
    emoji: "🎂",
    date: "අද දවස",
    title: "Happy Birthday, භාගී! 🎉",
    body: "අද මගේ මුළු ලෝකෙම උපන්දිනය! ඔයා මගේ ජීවිතේට ආවට මම හැමදාමත් වාසනාවන්තයි. Happy Birthday මගේ රත්තරන් කෙල්ලේ! 💖✨",
    caption: "Forever Yours 💕",
    image: null
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
    isClock: true,
    grad: "linear-gradient(160deg,#7c3aed,#ec4899)",
    emoji: "⏳",
    label: "අපේ ආදරේ සජීවීව (LIVE)",
    num: "2023.11.15",
    unit: "සිට ගෙවුණු කාලය",
    desc: "අපි දෙන්නා ආදරෙන් බැඳුණු මොහොතේ ඉඳන් මේ තත්පරය වෙනකම් ගෙවුණු සුන්දර කාලය:"
  },
  {
    isClock: false,
    grad: "linear-gradient(160deg,#059669,#065f46)",
    emoji: "💬",
    label: "මැසේජ් සහ කෝල්ස්",
    num: "කෝටි ගණනක්",
    unit: "විතර",
    desc: "කෝටි ගාණක් කතා කළත් ඔයා එක්ක කතා කරලා මට තාම ඇති වෙලා නෑ! 😂"
  },
  {
    isClock: false,
    grad: "linear-gradient(160deg,#dc2626,#7f1d1d)",
    emoji: "❤️",
    label: "මගේ හිතේ අයිතිකාරී",
    num: "100%",
    unit: "භාගී විතරයි",
    desc: "එදා, අද, හෙට හැමදාමත් මගේ හිතේ ඉන්නේ ඔයා විතරයි! No doubts!"
  },
  {
    isClock: false,
    grad: "linear-gradient(160deg,#d97706,#92400e)",
    emoji: "🌲",
    label: "ට්‍රිප් සහ ෆිල්ම්ස්",
    num: "Ohiya & More+",
    unit: "Endless Fun",
    desc: "Galle Fort, Ohiya කෝච්චි ගමන වල ඉඳන් Neera, ආදරණීය තරුවක් වෙනකම්... හැම ගමනක්ම සුපිරි!"
  },
  {
    isClock: false,
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

ඔයාගේ ඔය පොඩි දේටත් කට උල් කරන් තරහ වෙන එකටයි, හැබැයි දවස් දෙක තුනක් යද්දී තරහ වෙච්ච හේතුවත් අමතක කරලා ආයෙත් සුපුරුදු හුරතලෙන් ළඟට එන එකටයි මම තාමත් පුදුම විදිහට ආදරෙයි. 

අපේ රණ්ඩු, Galle Fort, Ohiya ගියපු අමතක නොවන ගමන්, හෝල් වල අතින් අල්ලන් ෆිල්ම් බලපු දවස්... ඒ හැම තත්පරයක්ම මගේ ජීවිතේ ලස්සනම මතක.

ලොකු කතා ඕන නෑ මගේ භාගී — ඔයා මගේ ළඟින් ඉන්නවා නම් මට මුළු ලෝකෙම තියෙනවා වගේ. හැමදාමත් ඔහොමම මගේ ළඟින් හිනාවෙලා ඉන්න.

මම ඔයාට හැමදාමත් ගොඩාආආආක් ආදරෙයි! 🥰🌹

ඔයාගේ ආදරණීය,
${YOUR_NAME} 💖`;

/* ─────────────────────────────────────────────
   NAVIGATION SYSTEM (8 Steps)
───────────────────────────────────────────── */
const STEPS = [
  'landing',      // 0
  'sec-timeline',  // 1
  'sec-quiz',      // 2
  'sec-gifts',     // 3
  'sec-scratch',   // 4 (New!)
  'sec-wrapped',   // 5
  'sec-cake',      // 6 (New!)
  'sec-final'      // 7
];

let currentStepIndex = 0;
let storyIdx   = 0;
let wrappedIdx = 0;
let quizIdx    = 0;
let quizScore  = 0;
let openedEnvs = new Set();
let confettiStarted = false;
let candlesBlown = false;

function triggerHaptic(len = 20) {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    try { navigator.vibrate(len); } catch (_) {}
  }
}

function goToStep(index) {
  if (index < 0 || index >= STEPS.length) return;
  triggerHaptic(15);
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

  // Trigger step-specific logic
  if (STEPS[index] === 'sec-scratch') {
    initScratchCard();
  } else if (STEPS[index] === 'sec-final' && !confettiStarted) {
    confettiStarted = true;
    setTimeout(() => {
      fireConfetti();
      typewriter();
    }, 350);
  }
}
window.goToStep = goToStep;

function startExperience() {
  triggerHaptic(25);
  playRomanticMusic();
  goToStep(1);
}
window.startExperience = startExperience;

function replayAll() {
  confettiStarted = false;
  candlesBlown = false;
  const wishMsg = document.getElementById('wishMsg');
  if (wishMsg) wishMsg.style.display = 'none';
  const cakeNext = document.getElementById('cakeNextBtn');
  if (cakeNext) cakeNext.style.display = 'none';
  document.querySelectorAll('.flame').forEach(f => f.classList.remove('extinguished'));
  document.getElementById('finalLetter').textContent = '';
  goToStep(0);
}
window.replayAll = replayAll;

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
  startLoveCounters();

  goToStep(0);
});

/* ─────────────────────────────────────────────
   ROMANTIC AUDIO & MUSIC BOX SYNTHESIZER
───────────────────────────────────────────── */
let isMusicPlaying = false;
let audioCtx = null;
let synthTimer = null;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Romantic acoustic music box notes (C major / A minor romantic arpeggios)
const MELODY = [
  { note: 523.25, dur: 0.6 }, // C5
  { note: 659.25, dur: 0.6 }, // E5
  { note: 783.99, dur: 0.8 }, // G5
  { note: 987.77, dur: 1.0 }, // B5
  { note: 880.00, dur: 0.8 }, // A5
  { note: 659.25, dur: 0.6 }, // E5
  { note: 587.33, dur: 0.8 }, // D5
  { note: 523.25, dur: 1.2 }, // C5
  { note: 440.00, dur: 0.6 }, // A4
  { note: 523.25, dur: 0.6 }, // C5
  { note: 659.25, dur: 0.8 }, // E5
  { note: 587.33, dur: 1.2 }, // D5
];

let melodyIndex = 0;
function playNextSynthNote() {
  if (!isMusicPlaying || !audioCtx) return;
  const item = MELODY[melodyIndex];
  melodyIndex = (melodyIndex + 1) % MELODY.length;

  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(item.note, audioCtx.currentTime);

    // Warm bell/chime envelope
    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, audioCtx.currentTime + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + item.dur * 1.5);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + item.dur * 1.6);
  } catch (_) {}

  synthTimer = setTimeout(playNextSynthNote, item.dur * 1000);
}

function playRomanticMusic() {
  initAudioContext();
  const audio = document.getElementById('bgMusicAudio');
  const toggle = document.getElementById('musicToggle');
  const disc = document.getElementById('musicDisc');
  const text = document.getElementById('musicText');

  isMusicPlaying = true;
  if (toggle) toggle.classList.add('playing');
  if (disc) disc.classList.add('spinning');
  if (text) text.textContent = "Playing 🎵";

  // Check if an actual mp3 is provided in assets/music.mp3
  if (audio && audio.src && audio.src !== window.location.href) {
    audio.play().catch(() => {
      // Fallback to our romantic Web Audio Synthesizer
      playNextSynthNote();
    });
  } else {
    playNextSynthNote();
  }
}

function pauseRomanticMusic() {
  isMusicPlaying = false;
  if (synthTimer) clearTimeout(synthTimer);
  const audio = document.getElementById('bgMusicAudio');
  if (audio) audio.pause();

  const toggle = document.getElementById('musicToggle');
  const disc = document.getElementById('musicDisc');
  const text = document.getElementById('musicText');

  if (toggle) toggle.classList.remove('playing');
  if (disc) disc.classList.remove('spinning');
  if (text) text.textContent = "Paused 🔇";
}

function toggleMusic() {
  triggerHaptic(15);
  if (isMusicPlaying) {
    pauseRomanticMusic();
  } else {
    playRomanticMusic();
  }
}
window.toggleMusic = toggleMusic;

/* ─────────────────────────────────────────────
   LIVE RELATIONSHIP COUNTER
───────────────────────────────────────────── */
function updateLoveCounter() {
  const now = new Date();
  const diffMs = now - LOVE_START;
  if (diffMs < 0) return;

  const totalSecs = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSecs / 86400);
  const hours = Math.floor((totalSecs % 86400) / 3600);
  const minutes = Math.floor((totalSecs % 3600) / 60);
  const seconds = totalSecs % 60;

  // Update Landing Badge
  const landingCount = document.getElementById('landingDaysCount');
  if (landingCount) {
    landingCount.textContent = `අපි ආදරෙන් බැඳී අදට දින ${days} යි`;
  }

  // Update Wrapped Live Clock
  const dVal = document.getElementById('clkDays');
  const hVal = document.getElementById('clkHours');
  const mVal = document.getElementById('clkMins');
  const sVal = document.getElementById('clkSecs');

  if (dVal) dVal.textContent = days;
  if (hVal) hVal.textContent = hours.toString().padStart(2, '0');
  if (mVal) mVal.textContent = minutes.toString().padStart(2, '0');
  if (sVal) sVal.textContent = seconds.toString().padStart(2, '0');
}

function startLoveCounters() {
  updateLoveCounter();
  setInterval(updateLoveCounter, 1000);
}

/* ─────────────────────────────────────────────
   STORIES (Carousel & Polaroid)
───────────────────────────────────────────── */
function getIllustrationSvg(index) {
  const svgs = [
    // 0: First meeting
    `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs><linearGradient id="g0" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#3b0764"/><stop offset="100%" stop-color="#701a75"/></linearGradient></defs>
      <rect width="200" height="200" fill="url(#g0)"/>
      <circle cx="100" cy="100" r="45" fill="#f472b6" opacity="0.3"/>
      <text x="100" y="115" font-size="52" text-anchor="middle">👀</text>
    </svg>`,
    // 1: Love date
    `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#831843"/><stop offset="100%" stop-color="#be185d"/></linearGradient></defs>
      <rect width="200" height="200" fill="url(#g1)"/>
      <circle cx="100" cy="100" r="50" fill="#fbcfe8" opacity="0.25"/>
      <text x="100" y="118" font-size="56" text-anchor="middle">💘</text>
    </svg>`,
    // 2: Galle Fort
    `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#0369a1"/></linearGradient></defs>
      <rect width="200" height="200" fill="url(#g2)"/>
      <circle cx="100" cy="80" r="32" fill="#ffd700" opacity="0.8"/>
      <path d="M0,150 Q50,135 100,150 T200,150 L200,200 L0,200 Z" fill="#0284c7" opacity="0.7"/>
      <text x="100" y="140" font-size="44" text-anchor="middle">🏰</text>
    </svg>`,
    // 3: Ohiya Train Trip
    `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#064e3b"/><stop offset="100%" stop-color="#022c22"/></linearGradient></defs>
      <rect width="200" height="200" fill="url(#g3)"/>
      <path d="M0,135 Q50,95 110,130 T200,120 L200,200 L0,200 Z" fill="#047857" opacity="0.6"/>
      <path d="M0,160 Q70,130 140,165 T200,150 L200,200 L0,200 Z" fill="#065f46" opacity="0.8"/>
      <circle cx="150" cy="65" r="28" fill="#fef08a" opacity="0.4"/>
      <text x="100" y="145" font-size="52" text-anchor="middle">🚂</text>
    </svg>`,
    // 4: Movies
    `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs><linearGradient id="g4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#18181b"/><stop offset="100%" stop-color="#3f3f46"/></linearGradient></defs>
      <rect width="200" height="200" fill="url(#g4)"/>
      <circle cx="100" cy="100" r="50" fill="#a855f7" opacity="0.2"/>
      <text x="100" y="115" font-size="52" text-anchor="middle">🎬</text>
    </svg>`,
    // 5: Angry cute
    `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs><linearGradient id="g5" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#450a0a"/><stop offset="100%" stop-color="#991b1b"/></linearGradient></defs>
      <rect width="200" height="200" fill="url(#g5)"/>
      <circle cx="100" cy="100" r="45" fill="#fecaca" opacity="0.2"/>
      <text x="100" y="115" font-size="52" text-anchor="middle">😤</text>
    </svg>`,
    // 6: Birthday celebration
    `<svg viewBox="0 0 200 200" width="100%" height="100%">
      <defs><linearGradient id="g6" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#2e1065"/><stop offset="100%" stop-color="#d97706"/></linearGradient></defs>
      <rect width="200" height="200" fill="url(#g6)"/>
      <circle cx="100" cy="100" r="50" fill="#fef08a" opacity="0.3"/>
      <text x="100" y="118" font-size="54" text-anchor="middle">🎂</text>
    </svg>`
  ];
  return svgs[index % svgs.length];
}

function buildStories() {
  const wrap = document.getElementById('storyWrap');
  const dotsEl = document.getElementById('storyDots');
  wrap.querySelectorAll('.story-card').forEach(c => c.remove());
  dotsEl.innerHTML = '';

  STORIES.forEach((s, i) => {
    const c = document.createElement('div');
    c.className = 'story-card' + (i === 0 ? ' active' : '');
    c.id = `sc${i}`;

    const mediaHtml = s.image
      ? `<img src="${s.image}" class="polaroid-img" alt="${s.title}" onerror="this.outerHTML=getIllustrationSvg(${i})"/>`
      : getIllustrationSvg(i);

    c.innerHTML = `
      <div class="polaroid-frame">
        <div class="polaroid-img-wrapper">
          ${mediaHtml}
        </div>
        <div class="polaroid-caption">${s.caption || s.title}</div>
      </div>
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
  triggerHaptic(12);
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
    goToStep(2);
  }
}
window.nextStory = nextStory;

function prevStory() {
  if (storyIdx > 0) {
    storyIdx--;
    showStory(storyIdx);
  }
}
window.prevStory = prevStory;

function jumpStory(i) {
  storyIdx = i;
  showStory(i);
}

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
  
  if (chosen === q.correct) {
    triggerHaptic(30);
    quizScore++;
    document.getElementById(`opt${chosen}`).classList.add('correct');
  } else {
    triggerHaptic(60);
    document.getElementById(`opt${chosen}`).classList.add('wrong');
    document.getElementById(`opt${q.correct}`).classList.add('correct');
  }

  setTimeout(() => {
    quizIdx++;
    if (quizIdx < QUIZ.length) showQuestion();
    else showQuizResult();
  }, 1100);
}
window.pickOpt = pickOpt;

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
  triggerHaptic(20);
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

function closeModal() {
  triggerHaptic(10);
  document.getElementById('modalBg').classList.remove('show');
}
window.closeModal = closeModal;

function modalTap(ev) {
  if (ev.target === document.getElementById('modalBg')) closeModal();
}
window.modalTap = modalTap;

/* ─────────────────────────────────────────────
   SCRATCH CARD (Interactive Canvas)
───────────────────────────────────────────── */
let scratchInitialized = false;
let isScratching = false;

function initScratchCard() {
  if (scratchInitialized) return;
  const cvs = document.getElementById('scratchCanvas');
  if (!cvs) return;
  scratchInitialized = true;
  const ctx = cvs.getContext('2d');

  // Fill with holographic silver coating
  const grad = ctx.createLinearGradient(0, 0, cvs.width, cvs.height);
  grad.addColorStop(0, '#c7c7c7');
  grad.addColorStop(0.3, '#f5f5f5');
  grad.addColorStop(0.5, '#ffd700');
  grad.addColorStop(0.7, '#e0e0e0');
  grad.addColorStop(1, '#a6a6a6');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, cvs.width, cvs.height);

  // Add decorative pattern & text on foil
  ctx.fillStyle = '#2d1b3d';
  ctx.font = 'bold 16px Outfit, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('✨ SCRATCH HERE ✨', cvs.width / 2, cvs.height / 2 - 15);
  ctx.font = '13px Outfit, sans-serif';
  ctx.fillStyle = '#555';
  ctx.fillText('මෙතන ඇඟිල්ලෙන් අතුල්ලන්න', cvs.width / 2, cvs.height / 2 + 15);

  function scratch(e) {
    if (!isScratching) return;
    const rect = cvs.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    triggerHaptic(5);
    checkScratchProgress();
  }

  let scratchCheckCount = 0;
  function checkScratchProgress() {
    scratchCheckCount++;
    if (scratchCheckCount % 15 !== 0) return;

    try {
      const imgData = ctx.getImageData(0, 0, cvs.width, cvs.height);
      const pixels = imgData.data;
      let clearCount = 0;
      for (let i = 3; i < pixels.length; i += 32) {
        if (pixels[i] === 0) clearCount++;
      }
      const pct = clearCount / (pixels.length / 32);
      if (pct > 0.45) {
        cvs.style.transition = 'opacity 0.6s';
        cvs.style.opacity = '0';
        setTimeout(() => { cvs.style.display = 'none'; }, 600);
        document.getElementById('scratchHint').textContent = "✨ Secret Message Revealed! ✨";
        triggerHaptic(40);
        fireConfetti();
      }
    } catch (_) {}
  }

  cvs.addEventListener('mousedown', () => { isScratching = true; });
  cvs.addEventListener('mouseup', () => { isScratching = false; });
  cvs.addEventListener('mousemove', scratch);

  cvs.addEventListener('touchstart', (e) => { isScratching = true; scratch(e); }, { passive: false });
  cvs.addEventListener('touchend', () => { isScratching = false; });
  cvs.addEventListener('touchmove', (e) => { e.preventDefault(); scratch(e); }, { passive: false });
}

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

    let centerHtml = '';
    if (s.isClock) {
      centerHtml = `
        <div class="live-clock-grid">
          <div class="clock-unit-card">
            <span class="clock-val" id="clkDays">--</span>
            <span class="clock-lbl">දින</span>
          </div>
          <div class="clock-unit-card">
            <span class="clock-val" id="clkHours">--</span>
            <span class="clock-lbl">පැය</span>
          </div>
          <div class="clock-unit-card">
            <span class="clock-val" id="clkMins">--</span>
            <span class="clock-lbl">මිනිත්තු</span>
          </div>
          <div class="clock-unit-card">
            <span class="clock-val" id="clkSecs">--</span>
            <span class="clock-lbl">තත්පර</span>
          </div>
        </div>`;
    } else {
      centerHtml = `
        <div class="w-num">${s.num}</div>
        <div class="w-unit">${s.unit}</div>`;
    }

    sl.innerHTML = `
      <div class="w-bg" style="background:${s.grad}"></div>
      <div class="w-inner">
        <span class="w-emoji">${s.emoji}</span>
        <div class="w-label">${s.label}</div>
        ${centerHtml}
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
  triggerHaptic(12);
  document.querySelectorAll('.w-slide').forEach((s, idx) => s.classList.toggle('active', idx === i));
  document.querySelectorAll('#wrappedDots .dot').forEach((d, idx) => d.classList.toggle('on', idx === i));
}

function nextWrapped() {
  if (wrappedIdx < WRAPPED.length - 1) {
    wrappedIdx++;
    showWrapped(wrappedIdx);
  } else {
    goToStep(6);
  }
}
window.nextWrapped = nextWrapped;

function prevWrapped() {
  if (wrappedIdx > 0) {
    wrappedIdx--;
    showWrapped(wrappedIdx);
  }
}
window.prevWrapped = prevWrapped;

function jumpWrapped(i) {
  wrappedIdx = i;
  showWrapped(i);
}

/* ─────────────────────────────────────────────
   BIRTHDAY CAKE & CANDLE BLOW
───────────────────────────────────────────── */
function blowCandles() {
  if (candlesBlown) return;
  candlesBlown = true;
  triggerHaptic(50);

  // Extinguish flames
  const f1 = document.getElementById('flame1');
  const f2 = document.getElementById('flame2');
  const f3 = document.getElementById('flame3');
  if (f1) f1.classList.add('extinguished');
  if (f2) f2.classList.add('extinguished');
  if (f3) f3.classList.add('extinguished');

  // Hide button, show wish message
  const blowBtn = document.getElementById('blowBtn');
  if (blowBtn) blowBtn.style.display = 'none';

  const wishMsg = document.getElementById('wishMsg');
  if (wishMsg) wishMsg.style.display = 'block';

  const nextBtn = document.getElementById('cakeNextBtn');
  if (nextBtn) nextBtn.style.display = 'inline-flex';

  fireConfetti();
}
window.blowCandles = blowCandles;

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
      setTimeout(tick, 20);
    }
  }
  tick();
}

/* ─────────────────────────────────────────────
   WHATSAPP VOICE NOTE PLAYER
───────────────────────────────────────────── */
let isVoiceNotePlaying = false;
let vnTimer = null;

function toggleVoiceNote() {
  triggerHaptic(20);
  const card = document.getElementById('voiceNoteCard');
  const btn = document.getElementById('vnPlayBtn');
  const dur = document.getElementById('vnDuration');

  if (isVoiceNotePlaying) {
    isVoiceNotePlaying = false;
    if (card) card.classList.remove('playing');
    if (btn) btn.textContent = '▶';
    if (vnTimer) clearInterval(vnTimer);
  } else {
    isVoiceNotePlaying = true;
    if (card) card.classList.add('playing');
    if (btn) btn.textContent = '❚❚';

    // Simulate playback timer
    let secs = 0;
    if (vnTimer) clearInterval(vnTimer);
    vnTimer = setInterval(() => {
      secs++;
      if (dur) dur.textContent = `0:${secs < 10 ? '0' : ''}${secs} / 0:45`;
      if (secs >= 45) {
        clearInterval(vnTimer);
        isVoiceNotePlaying = false;
        if (card) card.classList.remove('playing');
        if (btn) btn.textContent = '▶';
      }
    }, 1000);
  }
}
window.toggleVoiceNote = toggleVoiceNote;

/* ─────────────────────────────────────────────
   CONFETTI BLAST
───────────────────────────────────────────── */
function fireConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (typeof confetti === 'undefined') return;
  const shoot = canvas ? confetti.create(canvas, { resize: true }) : confetti;
  const colors = ['#ffd700', '#ff6b9d', '#c084fc', '#ff4081', '#ffffff'];

  let count = 0;
  function burst() {
    shoot({
      particleCount: 50,
      spread: 75,
      origin: { x: Math.random() * 0.8 + 0.1, y: 0.4 },
      colors,
      scalar: 1.15
    });
    if (++count < 5) setTimeout(burst, 450);
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
    sp: 0.35 + Math.random() * 0.65,
    op: 0.08 + Math.random() * 0.35,
    dr: (Math.random() - 0.5) * 0.4
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
   TOUCH SWIPE SUPPORT FOR MOBILE
───────────────────────────────────────────── */
let tx = 0;
document.addEventListener('touchstart', e => {
  tx = e.touches[0].clientX;
}, { passive: true });

document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) < 45) return;
  if (currentStepIndex === 1) {
    dx < 0 ? nextStory() : prevStory();
  } else if (currentStepIndex === 5) {
    dx < 0 ? nextWrapped() : prevWrapped();
  }
}, { passive: true });

/* Keyboard Support */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    if (currentStepIndex === 1) nextStory();
    else if (currentStepIndex === 5) nextWrapped();
  }
  if (e.key === 'ArrowLeft') {
    if (currentStepIndex === 1) prevStory();
    else if (currentStepIndex === 5) prevWrapped();
  }
});
