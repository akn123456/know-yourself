/* ============================================
   KNOW YOURSELF — Interactive Journey
   ============================================ */

// ============================================
// 📚 DATA SOAL
// ============================================
const levels = {
  1: {
    title: "Level 1 — Kenali Perasaanmu 💗",
    questions: [
      { q: "Saat suasana hatimu sedang kurang baik, biasanya kamu akan...", opts: ["Memilih sendiri sampai merasa lebih tenang", "Bercerita kepada orang yang dipercaya", "Melakukan kegiatan yang disukai untuk mengalihkan pikiran", "Tetap melakukan aktivitas seperti biasa"] },
      { q: "Ketika mendapatkan pujian dari orang lain, biasanya kamu merasa...", opts: ["Senang dan semakin percaya diri", "Malu, tetapi sebenarnya merasa senang", "Biasa saja karena tidak terlalu memikirkannya", "Bingung harus merespons seperti apa"] },
      { q: "Hal kecil yang paling mudah membuatmu merasa bahagia adalah...", opts: ["Mendapat perhatian dari orang lain", "Menghabiskan waktu dengan orang yang disukai", "Berhasil menyelesaikan sesuatu", "Melakukan hal yang memang aku sukai"] },
      { q: "Ketika seseorang membuatmu kecewa, biasanya kamu...", opts: ["Langsung membicarakannya", "Memendamnya terlebih dahulu", "Mencoba memahami alasan orang tersebut", "Menjauh sebentar untuk menenangkan diri"] },
      { q: "Kalau sedang merasa lelah secara emosional, hal yang paling kamu butuhkan adalah...", opts: ["Waktu untuk sendiri", "Seseorang untuk mendengarkan ceritaku", "Istirahat dan melakukan hal yang menyenangkan", "Dukungan dan semangat dari orang terdekat"] }
    ]
  },
  2: {
    title: "Level 2 — Kenali Dirimu 🌷",
    questions: [
      { q: "Ketika harus memilih sesuatu yang penting, kamu biasanya...", opts: ["Mengikuti apa yang menurutku benar", "Mempertimbangkan pendapat orang lain", "Memikirkan kelebihan dan kekurangannya terlebih dahulu", "Mengikuti apa yang paling sesuai dengan perasaanku"] },
      { q: "Kalau mendapat kesempatan mencoba sesuatu yang baru, kamu akan...", opts: ["Langsung mencobanya", "Memikirkannya terlebih dahulu", "Mencari tahu lebih banyak tentang hal tersebut", "Menunggu sampai merasa benar-benar siap"] },
      { q: "Menurutmu, hal yang paling menggambarkan dirimu adalah...", opts: ["Suka membantu orang lain", "Suka mencoba hal-hal baru", "Suka membuat atau menciptakan sesuatu", "Suka memikirkan sesuatu secara mendalam"] },
      { q: "Ketika orang lain memiliki pendapat yang berbeda denganmu, kamu biasanya...", opts: ["Mendengarkan dan mencoba memahaminya", "Menjelaskan pendapatku dengan baik", "Memilih untuk tidak memperpanjang perbedaan", "Memikirkan kembali apakah pendapatku memang tepat"] },
      { q: "Hal yang paling ingin kamu kenali lebih jauh dari dirimu adalah...", opts: ["Kelebihan yang aku miliki", "Minat dan hal yang aku sukai", "Kekurangan yang ingin aku perbaiki", "Tujuan dan keinginan untuk masa depan"] }
    ]
  },
  3: {
    title: "Level 3 — Kenali Cara Kamu Menghadapi Situasi 🌱",
    questions: [
      { q: "Saat menghadapi masalah, hal pertama yang biasanya kamu lakukan adalah...", opts: ["Mencari solusi sendiri", "Bercerita kepada orang yang dipercaya", "Menenangkan diri terlebih dahulu", "Mencari informasi atau saran tentang masalah tersebut"] },
      { q: "Ketika mengalami kegagalan, biasanya kamu...", opts: ["Mencoba lagi", "Merasa kecewa terlebih dahulu, lalu bangkit kembali", "Mencari tahu apa yang menyebabkan kegagalan", "Membutuhkan waktu sebelum mencoba lagi"] },
      { q: "Kalau tugas atau pekerjaan terasa sulit, kamu biasanya...", opts: ["Mengerjakannya sedikit demi sedikit", "Meminta bantuan jika benar-benar membutuhkannya", "Mencari cara lain agar lebih mudah", "Beristirahat sebentar lalu melanjutkannya"] },
      { q: "Ketika merasa takut melakukan kesalahan, kamu biasanya...", opts: ["Tetap mencoba meskipun merasa takut", "Memastikan semuanya terlebih dahulu", "Meminta pendapat orang yang dipercaya", "Menunggu sampai merasa lebih yakin"] },
      { q: "Saat menghadapi sesuatu yang tidak sesuai dengan rencana, kamu biasanya...", opts: ["Mencoba membuat rencana baru", "Menerima keadaan dan menyesuaikan diri", "Mencari tahu apa yang masih bisa dilakukan", "Membutuhkan waktu untuk menenangkan diri"] }
    ]
  },
  4: {
    title: "Level 4 — Kenali Potensimu ✨",
    questions: [
      { q: "Kegiatan yang paling membuatmu bersemangat adalah...", opts: ["Membantu atau mendengarkan orang lain", "Membuat sesuatu yang kreatif", "Mempelajari hal baru", "Menyelesaikan sesuatu yang membutuhkan ketelitian"] },
      { q: "Saat mengerjakan sesuatu yang kamu sukai, kamu biasanya...", opts: ["Bisa melakukannya dalam waktu yang lama", "Merasa lebih percaya diri", "Ingin terus belajar dan mengembangkannya", "Merasa puas ketika berhasil menyelesaikannya"] },
      { q: "Orang lain biasanya meminta bantuanmu dalam hal...", opts: ["Mendengarkan cerita atau memberikan saran", "Membuat sesuatu yang kreatif", "Menjelaskan atau mencari informasi", "Membantu menyelesaikan sesuatu dengan teliti"] },
      { q: "Kalau diberi kesempatan mengembangkan satu kemampuan, kamu ingin mengembangkan...", opts: ["Kemampuan berkomunikasi", "Kemampuan kreativitas", "Kemampuan berpikir dan belajar", "Kemampuan mengatur dan menyelesaikan sesuatu"] },
      { q: "Hal yang ingin kamu capai dari dirimu di masa depan adalah...", opts: ["Menjadi pribadi yang lebih percaya diri", "Mengembangkan kemampuan yang aku miliki", "Menemukan bidang yang benar-benar sesuai denganku", "Menjadi pribadi yang lebih mandiri dan mampu menghadapi berbagai keadaan"] }
    ]
  }
};

// 💬 KATA PENYEMANGAT — HANYA 2 (tidak random)
const encouragements = [
  "Bagus banget! 🌸 Kamu semakin mengenal dirimu.",
  "Keren! 💗 Jawabanmu jujur dan bermakna."
];

// 🎉 TRANSISI LEVEL
const levelTransition = {
  1: { title: "🎉 Keren, {name}! Kamu berhasil mencapai Level 2!", text: "🌸 Satu langkah lagi untuk mengenal dirimu lebih jauh.", gems: 25 },
  2: { title: "🎉 Hebat, {name}! Kamu berhasil mencapai Level 3!", text: "🌱 Kamu semakin memahami dirimu sendiri.", gems: 25 },
  3: { title: "🎉 Luar biasa, {name}! Kamu berhasil mencapai Level 4!", text: "✨ Potensimu semakin terlihat jelas.", gems: 25 },
  4: { title: "🎉 Selamat, {name}! Kamu menyelesaikan semua level!", text: "💌 Saatnya refleksi diri dan melihat perjalananmu.", gems: 50 }
};

// 🧠 TRAIT MAPPING
const traitMap = {
  1: { A: "mandiri",  B: "sosial",   C: "pengalih", D: "pemendam" },
  2: { A: "intuitif", B: "sosial",   C: "analitis", D: "perasa"   },
  3: { A: "mandiri",  B: "sosial",   C: "tenang",   D: "analitis" },
  4: { A: "sosial",   B: "kreatif",  C: "pembelajar", D: "teliti" }
};

const traitAnalysis = {
  mandiri: {
    label: "proaktif & mandiri",
    text: "Kamu termasuk orang yang <strong>proaktif</strong> — ketika ada sesuatu yang perlu dilakukan, kamu sering jadi yang pertama bergerak. Kamu lebih suka <strong>memprosesnya sendiri</strong> terlebih dahulu sebelum membicarakannya. Kamu cukup <strong>percaya pada instingmu</strong> dan sering kali itu membawamu ke arah yang tepat.",
    note: "Mandiri itu kekuatan, tapi bukan berarti kamu harus selalu sendiri. Kadang berbagi beban itu juga bentuk keberanian."
  },
  sosial: {
    label: "terbuka & hangat",
    text: "Kamu termasuk orang yang <strong>terbuka pada orang lain</strong> — kamu nyaman bercerita, mendengarkan, dan menjalin kedekatan. Kamu sering jadi tempat curhat teman-temanmu, dan kamu <strong>menikmati kebersamaan</strong> itu. Kamu percaya bahwa hal-hal baik lebih indah kalau dibagi.",
    note: "Kamu hebat dalam menemani orang lain. Jangan lupa, kamu juga berhak ditemani."
  },
  pengalih: {
    label: "kreatif & adaptif",
    text: "Kamu punya cara unik untuk <strong>mengelola suasana hati</strong> — dengan melakukan hal yang kamu sukai. Kamu <strong>adaptif</strong> dan tahu bagaimana mengalihkan energi negatif jadi sesuatu yang lebih ringan. Ini kemampuan yang tidak semua orang punya.",
    note: "Mengalihkan pikiran itu boleh, tapi jangan lupa sesekali duduk sebentar dan dengarkan perasaanmu juga."
  },
  pemendam: {
    label: "tenang & reflektif",
    text: "Kamu cenderung <strong>memendam masalahmu sendiri</strong>. Mungkin karena kamu tidak ingin merepotkan orang lain, atau karena kamu belum menemukan orang yang tepat untuk bercerita. Kamu <strong>tenang di luar</strong>, tapi sering kali ada banyak hal yang berputar di dalam.",
    note: "Memendam itu bukan salah. Tapi tubuh dan pikiranmu juga butuh ruang untuk bersuara. Cari satu orang yang aman — itu sudah cukup."
  },
  intuitif: {
    label: "intuitif & tegas",
    text: "Kamu cenderung <strong>mengikuti apa yang menurutmu benar</strong>. Kamu punya kompas batin yang kuat dan tidak mudah goyah oleh pendapat orang lain. Kamu <strong>percaya pada dirimu sendiri</strong> dan itu membuatmu terlihat tegas.",
    note: "Kepercayaan pada diri sendiri itu bagus. Tapi tetap buka telinga untuk sudut pandang lain — kadang ada hikmah di sana."
  },
  analitis: {
    label: "analitis & teliti",
    text: "Kamu suka <strong>memikirkan kelebihan dan kekurangan</strong> sebelum memutuskan. Kamu <strong>teliti</strong>, tidak suka tergesa-gesa, dan cenderung mempertimbangkan banyak hal. Kamu merasa lebih aman kalau semuanya sudah dipikirkan matang.",
    note: "Berpikir matang itu baik. Tapi jangan sampai terlalu lama di kepala sendiri — kadang melangkah dulu baru tahu arahnya."
  },
  perasa: {
    label: "peka & jujur pada perasaan",
    text: "Kamu cenderung <strong>mengikuti apa yang paling sesuai dengan perasaanmu</strong>. Kamu peka, jujur pada diri sendiri, dan tidak suka berpura-pura. Kamu lebih memilih jalan yang terasa benar, meskipun tidak selalu mudah.",
    note: "Peka itu hadiah. Tapi sesekali, coba lihat juga dari sudut logika — kadang keduanya bisa jalan bareng."
  },
  tenang: {
    label: "tenang & menenangkan",
    text: "Saat menghadapi masalah, kamu cenderung <strong>menenangkan diri terlebih dahulu</strong> sebelum bertindak. Kamu tidak suka gegabah, dan kamu tahu bahwa kepala dingin lebih berguna daripada emosi. Kamu sering jadi <strong>penenang</strong> di sekitarmu.",
    note: "Ketenanganmu itu kekuatan. Tapi jangan lupa, kamu juga boleh merasa — tidak harus selalu jadi yang paling tenang."
  },
  kreatif: {
    label: "kreatif & ekspresif",
    text: "Kamu paling bersemangat saat <strong>membuat atau menciptakan sesuatu</strong>. Kamu punya sisi kreatif yang kuat, dan kamu menikmati proses menciptakan lebih dari sekadar hasilnya. Ekspresi diri adalah caramu bernapas.",
    note: "Kreativitasmu itu anugerah. Jangan berhenti berkarya, bahkan saat tidak ada yang melihat."
  },
  pembelajar: {
    label: "ingin tahu & berkembang",
    text: "Kamu paling bersemangat saat <strong>mempelajari hal baru</strong>. Kamu punya rasa ingin tahu yang besar, suka mengeksplorasi, dan tidak cepat puas dengan jawaban dangkal. Kamu <strong>tumbuh lewat pengetahuan</strong>.",
    note: "Terus belajar itu hebat. Tapi ingat, tidak semua hal harus dipahami — kadang cukup dijalani."
  },
  teliti: {
    label: "detail & tuntas",
    text: "Kamu menikmati hal-hal yang <strong>membutuhkan ketelitian</strong>. Kamu detail, teliti, dan suka menyelesaikan sesuatu sampai tuntas. Kamu adalah orang yang bisa diandalkan untuk hal-hal yang butuh presisi.",
    note: "Ketelitianmu itu kekuatan. Tapi jangan terlalu keras pada diri sendiri kalau ada yang tidak sempurna."
  }
};

// 🌐 STATE
let user = {
  name: "", nickname: "", hobby: "", like: "", word: "", goal: "", hope: "",
  gems: 0, level: 1,
  answers: {},
  reflections: {}
};

let currentLevel = 1;
let currentQuestion = 0;
let selectedOption = null;
let lastEncouragementIndex = -1;

// ============================================
// 🎵 MUSIK
// ============================================
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");
let musicPlaying = false;

musicBtn.addEventListener("click", () => {
  if (musicPlaying) {
    music.pause();
    musicBtn.textContent = "🔇";
  } else {
    music.play().catch(() => {});
    musicBtn.textContent = "🎵";
  }
  musicPlaying = !musicPlaying;
});

// ============================================
// 📖 PANDUAN
// ============================================
function toggleGuide() {
  const panel = document.getElementById("guidePanel");
  const isOpen = panel.classList.toggle("open");
  panel.setAttribute("aria-hidden", !isOpen);
  const btn = document.getElementById("guideToggle");
  if (btn) btn.setAttribute("aria-expanded", isOpen);
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("guideToggle");
  if (btn) btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleGuide();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const panel = document.getElementById("guidePanel");
    if (panel.classList.contains("open")) {
      panel.classList.remove("open");
      panel.setAttribute("aria-hidden", "true");
    }
  }
});

document.addEventListener("click", (e) => {
  const panel = document.getElementById("guidePanel");
  const btn = document.getElementById("guideToggle");
  if (!panel || !btn) return;
  if (panel.classList.contains("open") &&
      !panel.contains(e.target) &&
      !btn.contains(e.target)) {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
  }
});

// ============================================
// 📄 NAVIGASI
// ============================================
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToIntro() { showPage("page-intro"); }

// ============================================
// 🌷 SUBMIT PERKENALAN
// ============================================
function submitIntro() {
  const name = document.getElementById("inputName").value.trim();
  const nickname = document.getElementById("inputNickname").value.trim();
  const hobby = document.getElementById("inputHobby").value.trim();
  const like = document.getElementById("inputLike").value.trim();
  const word = document.getElementById("inputWord").value.trim();
  const goal = document.getElementById("inputGoal").value;
  const hope = document.getElementById("inputHope").value.trim();

  if (!name || !nickname) {
    alert("Isi nama dan nama panggilan dulu ya 💗");
    return;
  }

  user.name = name;
  user.nickname = nickname;
  user.hobby = hobby;
  user.like = like;
  user.word = word;
  user.goal = goal;
  user.hope = hope;

  document.getElementById("welcomeTitle").textContent = `🌷 Hai, ${nickname}!`;
  document.getElementById("welcomeText").textContent = "Senang bisa mengenalmu. Hari ini kita akan memulai perjalanan untuk mengenal dirimu lebih jauh. ✨";
  updateStats();

  showPage("page-welcome");
}

// ============================================
// 📊 STATS
// ============================================
function updateStats() {
  document.getElementById("gemsDisplay").textContent = user.gems;
  document.getElementById("levelDisplay").textContent = user.level;
  document.getElementById("gemsDisplay2").textContent = user.gems;
  document.getElementById("levelDisplay2").textContent = user.level;
}

// ============================================
// 🚀 MULAI LEVEL
// ============================================
function startLevel(level) {
  currentLevel = level;
  currentQuestion = 0;
  selectedOption = null;
  user.answers[level] = [];

  document.getElementById("levelLabel").textContent = levels[level].title;
  showPage("page-level");
  renderQuestion();
}

// ============================================
// ❓ RENDER PERTANYAAN
// ============================================
function renderQuestion() {
  const levelData = levels[currentLevel];
  const q = levelData.questions[currentQuestion];

  const progress = (currentQuestion / levelData.questions.length) * 100;
  document.getElementById("progressFill").style.width = progress + "%";

  document.getElementById("questionText").textContent = `${currentQuestion + 1}. ${q.q}`;

  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";
  q.opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;
    btn.onclick = () => selectOption(btn, i);
    container.appendChild(btn);
  });

  const fb = document.getElementById("feedback");
  fb.classList.remove("show");
  fb.innerHTML = "";
  selectedOption = null;
}

// ============================================
// ✅ PILIH OPSI (dengan tombol LANJUT)
// ============================================
function selectOption(btn, index) {
  document.querySelectorAll(".option").forEach(o => {
    o.classList.remove("selected");
    o.style.pointerEvents = "none";
  });
  btn.classList.add("selected");
  selectedOption = index;

  user.answers[currentLevel][currentQuestion] = index;

  // Ambil kata penyemangat (hanya 2 pilihan, gantian)
  lastEncouragementIndex = (lastEncouragementIndex + 1) % encouragements.length;
  const msg = encouragements[lastEncouragementIndex];

  const fb = document.getElementById("feedback");
  fb.innerHTML = `
    <div style="margin-bottom:10px;">
      ${msg}
    </div>
    <button class="btn-next-q" onclick="nextQuestion()">
      LANJUT <span class="btn-emoji">→</span>
    </button>
  `;
  fb.classList.add("show");
}

// ============================================
// ➡️ NEXT QUESTION
// ============================================
function nextQuestion() {
  const levelData = levels[currentLevel];
  currentQuestion++;

  if (currentQuestion < levelData.questions.length) {
    renderQuestion();
  } else {
    finishLevel();
  }
}

// ============================================
// 🎉 LEVEL SELESAI
// ============================================
function finishLevel() {
  const trans = levelTransition[currentLevel];
  user.gems += trans.gems;

  if (currentLevel < 4) {
    user.level = currentLevel + 1;
  } else {
    user.level = 4;
  }

  document.getElementById("transitionTitle").textContent = trans.title.replace("{name}", user.nickname);
  document.getElementById("transitionText").textContent = trans.text + ` +${trans.gems} 💎 Gems`;
  updateStats();

  const btn = document.getElementById("nextLevelBtn");
  if (currentLevel < 4) {
    btn.innerHTML = `LANJUT KE LEVEL ${currentLevel + 1} <span class="btn-emoji">→</span>`;
    btn.onclick = () => startLevel(currentLevel + 1);
  } else {
    btn.innerHTML = `LANJUT KE REFLEKSI <span class="btn-emoji">🪞</span>`;
    btn.onclick = () => showPage("page-reflection");
  }

  showPage("page-transition");
}

function nextLevel() { /* di-override di finishLevel */ }

// ============================================
// 🪞 SUBMIT REFLEKSI
// ============================================
function submitReflection() {
  user.reflections = {
    r1: document.getElementById("ref1").value.trim(),
    r2: document.getElementById("ref2").value.trim(),
    r3: document.getElementById("ref3").value.trim(),
    r4: document.getElementById("ref4").value.trim(),
    r5: document.getElementById("ref5").value.trim()
  };

  renderResult();
  showPage("page-result");
  launchConfetti();
}

// ============================================
// 🧠 ANALISIS TRAIT
// ============================================
function analyzeTraits() {
  const scores = {};
  for (let level = 1; level <= 4; level++) {
    const answers = user.answers[level] || [];
    answers.forEach((ansIdx) => {
      const letter = String.fromCharCode(65 + ansIdx);
      const trait = traitMap[level]?.[letter];
      if (trait) scores[trait] = (scores[trait] || 0) + 1;
    });
  }
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topTraits = sorted.slice(0, 2).map(([trait]) => trait);
  return { scores, topTraits };
}

// ============================================
// 💌 RENDER HASIL
// ============================================
function renderResult() {
  const goalText = {
    A: "Lebih mengenal diriku",
    B: "Menemukan kelebihan yang aku punya",
    C: "Memahami perasaanku",
    D: "Aku cuma penasaran ingin mencoba 😆"
  }[user.goal] || "-";

  const v = (val) => val && val.trim() ? val : "<em style='opacity:.5'>— belum diisi —</em>";

  const { topTraits } = analyzeTraits();
  const primary   = traitAnalysis[topTraits[0]] || traitAnalysis.mandiri;
  const secondary = traitAnalysis[topTraits[1]] || null;

  let html = `
    <div class="result-section">

      <div class="result-hero analysis-hero">
        <div class="analysis-label">🌷 TENTANG DIRIMU</div>
        <p class="analysis-text">
          Kamu termasuk orang yang <strong>${primary.label}</strong>.
          ${primary.text}
          ${secondary ? `Kamu juga cenderung <strong>${secondary.label}</strong> — ${secondary.text.charAt(0).toLowerCase() + secondary.text.slice(1)}` : ""}
        </p>
        <div class="analysis-note">
          <div class="note-label">💡 HAL YANG MUNGKIN PERLU KAMU INGAT</div>
          <p>${primary.note}</p>
        </div>
      </div>

      <h4 class="result-section-title">📋 Profil</h4>
      <div class="profile-grid">
        <div class="profile-item"><span class="label">Nama</span><span class="value">${v(user.name)}</span></div>
        <div class="profile-item"><span class="label">Panggilan</span><span class="value">${v(user.nickname)}</span></div>
        <div class="profile-item"><span class="label">Hobi</span><span class="value">${v(user.hobby)}</span></div>
        <div class="profile-item"><span class="label">Hal yang disukai</span><span class="value">${v(user.like)}</span></div>
        <div class="profile-item"><span class="label">Kata menggambarkan</span><span class="value">${v(user.word)}</span></div>
        <div class="profile-item"><span class="label">Tujuan</span><span class="value">${v(goalText)}</span></div>
      </div>

      <h4 class="result-section-title">💌 Harapanmu</h4>
      <div class="reflection-card">${v(user.hope)}</div>

      <h4 class="result-section-title">🎁 Hadiah Perjalanan</h4>
      <div class="reward-row">
        <div class="reward-card gems">
          <span class="reward-icon">💎</span>
          <div class="reward-value">${user.gems}</div>
          <div class="reward-label">Gems</div>
        </div>
        <div class="reward-card level">
          <span class="reward-icon">🌱</span>
          <div class="reward-value">${user.level}</div>
          <div class="reward-label">Level</div>
        </div>
      </div>

      <h4 class="result-section-title">🪞 Refleksi Diri</h4>
      <div class="reflection-list">
        <div class="reflection-card">${v(user.reflections.r1)}</div>
        <div class="reflection-card">${v(user.reflections.r2)}</div>
        <div class="reflection-card">${v(user.reflections.r3)}</div>
        <div class="reflection-card">${v(user.reflections.r4)}</div>
        <div class="reflection-card">${v(user.reflections.r5)}</div>
      </div>

      <div class="result-closing">
        <span class="heart">💗</span>
        Terima kasih sudah berjalan bersama dirimu sendiri.<br>
        Terus tumbuh ya, <strong>${user.nickname}</strong>! ✨
      </div>
    </div>
  `;

  document.getElementById("resultContent").innerHTML = html;
}

// ============================================
// 🎊 CONFETTI
// ============================================
function launchConfetti() {
  const emojis = ["🌸", "✨", "💗", "🎀", "⭐", "🌷", "💎"];
  for (let i = 0; i < 25; i++) {
    const el = document.createElement("div");
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.cssText = `
      position: fixed;
      top: -40px;
      left: ${Math.random() * 100}vw;
      font-size: ${16 + Math.random() * 18}px;
      z-index: 9999;
      pointer-events: none;
      animation: confettiFall ${2 + Math.random() * 2}s linear forwards;
      animation-delay: ${Math.random() * 0.5}s;
    `;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4500);
  }
}

// ============================================
// 🔄 RESTART
// ============================================
function restartJourney() {
  if (!confirm("Yakin mau ulangi perjalanan dari awal?")) return;

  user = {
    name: "", nickname: "", hobby: "", like: "", word: "", goal: "", hope: "",
    gems: 0, level: 1,
    answers: {},
    reflections: {}
  };
  currentLevel = 1;
  currentQuestion = 0;
  selectedOption = null;
  lastEncouragementIndex = -1;

  document.querySelectorAll("input, textarea").forEach(el => el.value = "");
  document.getElementById("inputGoal").selectedIndex = 0;

  showPage("page-home");
}

// ============================================
// 🎬 INIT
// ============================================
showPage("page-home");
