/* ============================================================
   KNOW YOURSELF 
   ============================================================ */

const state = {
  nama: "", panggilan: "", hobi: "", suka: "", kata: "",
  tujuan: "", harapan: "", gems: 0, level: 1,
  currentLevel: 1, currentQuestion: 0,
  answers: {}, refleksi: {}, musicOn: false,
};

// ============ DATA LEVEL ============
const LEVELS = {
  1: {
    number: "LEVEL 1",
    title: "Kenali Perasaanmu 💗",
    questions: [
      { q: "1. Saat suasana hatimu sedang kurang baik, biasanya kamu akan...",
        options: ["A. Memilih sendiri sampai merasa lebih tenang", "B. Bercerita kepada orang yang dipercaya", "C. Melakukan kegiatan yang disukai untuk mengalihkan pikiran", "D. Tetap melakukan aktivitas seperti biasa"] },
      { q: "2. Ketika mendapatkan pujian dari orang lain, biasanya kamu merasa...",
        options: ["A. Senang dan semakin percaya diri", "B. Malu, tetapi sebenarnya merasa senang", "C. Biasa saja karena tidak terlalu memikirkannya", "D. Bingung harus merespons seperti apa"] },
      { q: "3. Hal kecil yang paling mudah membuatmu merasa bahagia adalah...",
        options: ["A. Mendapat perhatian dari orang lain", "B. Menghabiskan waktu dengan orang yang disukai", "C. Berhasil menyelesaikan sesuatu", "D. Melakukan hal yang memang aku sukai"] },
      { q: "4. Ketika seseorang membuatmu kecewa, biasanya kamu...",
        options: ["A. Langsung membicarakannya", "B. Memendamnya terlebih dahulu", "C. Mencoba memahami alasan orang tersebut", "D. Menjauh sebentar untuk menenangkan diri"] },
      { q: "5. Kalau sedang merasa lelah secara emosional, hal yang paling kamu butuhkan adalah...",
        options: ["A. Waktu untuk sendiri", "B. Seseorang untuk mendengarkan ceritaku", "C. Istirahat dan melakukan hal yang menyenangkan", "D. Dukungan dan semangat dari orang terdekat"] },
    ],
  },
  2: {
    number: "LEVEL 2",
    title: "Kenali Dirimu 🌷",
    questions: [
      { q: "1. Ketika harus memilih sesuatu yang penting, kamu biasanya...",
        options: ["A. Mengikuti apa yang menurutku benar", "B. Mempertimbangkan pendapat orang lain", "C. Memikirkan kelebihan dan kekurangannya terlebih dahulu", "D. Mengikuti apa yang paling sesuai dengan perasaanku"] },
      { q: "2. Kalau mendapat kesempatan mencoba sesuatu yang baru, kamu akan...",
        options: ["A. Langsung mencobanya", "B. Memikirkannya terlebih dahulu", "C. Mencari tahu lebih banyak tentang hal tersebut", "D. Menunggu sampai merasa benar-benar siap"] },
      { q: "3. Menurutmu, hal yang paling menggambarkan dirimu adalah...",
        options: ["A. Suka membantu orang lain", "B. Suka mencoba hal-hal baru", "C. Suka membuat atau menciptakan sesuatu", "D. Suka memikirkan sesuatu secara mendalam"] },
      { q: "4. Ketika orang lain memiliki pendapat yang berbeda denganmu, kamu biasanya...",
        options: ["A. Mendengarkan dan mencoba memahaminya", "B. Menjelaskan pendapatku dengan baik", "C. Memilih untuk tidak memperpanjang perbedaan", "D. Memikirkan kembali apakah pendapatku memang tepat"] },
      { q: "5. Hal yang paling ingin kamu kenali lebih jauh dari dirimu adalah...",
        options: ["A. Kelebihan yang aku miliki", "B. Minat dan hal yang aku sukai", "C. Kekurangan yang ingin aku perbaiki", "D. Tujuan dan keinginan untuk masa depan"] },
    ],
  },
  3: {
    number: "LEVEL 3",
    title: "Kenali Cara Kamu Menghadapi Situasi 🌱",
    questions: [
      { q: "1. Saat menghadapi masalah, hal pertama yang biasanya kamu lakukan adalah...",
        options: ["A. Mencari solusi sendiri", "B. Bercerita kepada orang yang dipercaya", "C. Menenangkan diri terlebih dahulu", "D. Mencari informasi atau saran tentang masalah tersebut"] },
      { q: "2. Ketika mengalami kegagalan, biasanya kamu...",
        options: ["A. Mencoba lagi", "B. Merasa kecewa terlebih dahulu, lalu bangkit kembali", "C. Mencari tahu apa yang menyebabkan kegagalan", "D. Membutuhkan waktu sebelum mencoba lagi"] },
      { q: "3. Kalau tugas atau pekerjaan terasa sulit, kamu biasanya...",
        options: ["A. Mengerjakannya sedikit demi sedikit", "B. Meminta bantuan jika benar-benar membutuhkannya", "C. Mencari cara lain agar lebih mudah", "D. Beristirahat sebentar lalu melanjutkannya"] },
      { q: "4. Ketika merasa takut melakukan kesalahan, kamu biasanya...",
        options: ["A. Tetap mencoba meskipun merasa takut", "B. Memastikan semuanya terlebih dahulu", "C. Meminta pendapat orang yang dipercaya", "D. Menunggu sampai merasa lebih yakin"] },
      { q: "5.Saat menghadapi sesuatu yang tidak sesuai dengan rencana, kamu biasanya...",
        options: ["A. Mencoba membuat rencana baru", "B. Menerima keadaan dan menyesuaikan diri", "C. Mencari tahu apa yang masih bisa dilakukan", "D. Membutuhkan waktu untuk menenangkan diri"] },
    ],
  },
  4: {
    number: "LEVEL 4",
    title: "Kenali Potensimu ✨",
    questions: [
      { q: "1. Kegiatan yang paling membuatmu bersemangat adalah...",
        options: ["A. Membantu atau mendengarkan orang lain", "B. Membuat sesuatu yang kreatif", "C. Mempelajari hal baru", "D. Menyelesaikan sesuatu yang membutuhkan ketelitian"] },
      { q: "2. Saat mengerjakan sesuatu yang kamu sukai, kamu biasanya...",
        options: ["A. Bisa melakukannya dalam waktu yang lama", "B. Merasa lebih percaya diri", "C. Ingin terus belajar dan mengembangkannya", "D. Merasa puas ketika berhasil menyelesaikannya"] },
      { q: "3. Orang lain biasanya meminta bantuanmu dalam hal...",
        options: ["A. Mendengarkan cerita atau memberikan saran", "B. Membuat sesuatu yang kreatif", "C. Menjelaskan atau mencari informasi", "D. Membantu menyelesaikan sesuatu dengan teliti"] },
      { q: "4. Kalau diberi kesempatan mengembangkan satu kemampuan, kamu ingin mengembangkan...",
        options: ["A. Kemampuan berkomunikasi", "B. Kemampuan kreativitas", "C. Kemampuan berpikir dan belajar", "D. Kemampuan mengatur dan menyelesaikan sesuatu"] },
      { q: "5. Hal yang ingin kamu capai dari dirimu di masa depan adalah...",
        options: ["A. Menjadi pribadi yang lebih percaya diri", "B. Mengembangkan kemampuan yang aku miliki", "C. Menemukan bidang yang benar-benar sesuai denganku", "D. Menjadi pribadi yang lebih mandiri dan mampu menghadapi berbagai keadaan"] },
    ],
  },
};

const REWARD_WORDS = [
  "Keren! Jawabanmu jujur dan bermakna. 💗",
  "Luar biasa! Kamu semakin mengenal dirimu. 🌸",
  "Bagus sekali! Terus jadi dirimu sendiri ya. ✨",
  "Hebat! Setiap jawaban membawamu lebih dekat. 🌷",
  "Mantap! Kamu berani jujur pada dirimu. 💐",
  "Sweet! Jawabanmu berarti untuk perjalananmu. 💕",
];

// ============ NAVIGASI ============
function showPage(id) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goToProfile() {
  showPage("page-profile");
  playMusicIfAllowed();
}

// ============ PANDUAN ============
const guideModal = document.getElementById("guide-modal");
document.getElementById("guide-toggle").addEventListener("click", () => {
  guideModal.classList.toggle("hidden");
});
function closeGuide() { guideModal.classList.add("hidden"); }
guideModal.addEventListener("click", (e) => {
  if (e.target === guideModal) guideModal.classList.add("hidden");
});

// ============ SIMPAN PROFIL ============
function saveProfile() {
  const nama = document.getElementById("in-nama").value.trim();
  const panggilan = document.getElementById("in-panggilan").value.trim();
  const hobi = document.getElementById("in-hobi").value.trim();
  const suka = document.getElementById("in-suka").value.trim();
  const kata = document.getElementById("in-kata").value.trim();
  const tujuan = document.getElementById("in-tujuan").value;
  const harapan = document.getElementById("in-harapan").value.trim();

  if (!nama || !panggilan) {
    alert("Isi nama dan nama panggilan dulu ya 💗");
    return;
  }

  state.nama = nama;
  state.panggilan = panggilan;
  state.hobi = hobi || "-";
  state.suka = suka || "-";
  state.kata = kata || "-";
  state.tujuan = tujuan;
  state.harapan = harapan || "-";

  document.getElementById("greet-title").textContent = `🌷 Hai, ${state.panggilan}!`;
  document.getElementById("greet-text").innerHTML =
    `Senang bisa mengenalmu.<br />Hari ini kita akan memulai perjalanan untuk mengenal dirimu lebih jauh. ✨`;
  document.getElementById("gems-display").textContent = state.gems;
  document.getElementById("level-display").textContent = state.level;

  showPage("page-greeting");
  playMusicIfAllowed();
}

// ============ LEVEL ============
function startLevel(level) {
  state.currentLevel = level;
  state.currentQuestion = 0;
  state.level = level;
  document.getElementById("level-display").textContent = level;
  document.getElementById("level-number").textContent = LEVELS[level].number;
  document.getElementById("level-title").textContent = LEVELS[level].title;
  document.getElementById("gems-mini").textContent = state.gems;
  document.getElementById("reward-inline").classList.add("hidden");
  updateProgress();
  showQuestion();
  showPage("page-level");
}

function showQuestion() {
  const levelData = LEVELS[state.currentLevel];
  const q = levelData.questions[state.currentQuestion];
  document.getElementById("question-text").textContent = q.q;

  const optionsWrap = document.getElementById("options");
  optionsWrap.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(i);
    optionsWrap.appendChild(btn);
  });

  document.getElementById("reward-inline").classList.add("hidden");
}

function selectAnswer(index) {
  const key = `L${state.currentLevel}Q${state.currentQuestion}`;
  state.answers[key] = index;

  document.querySelectorAll(".option-btn").forEach((b) => (b.disabled = true));

  const reward = document.getElementById("reward-inline");
  document.getElementById("reward-text").textContent =
    REWARD_WORDS[Math.floor(Math.random() * REWARD_WORDS.length)];
  reward.classList.remove("hidden");

  state.gems += 5;
  document.getElementById("gems-mini").textContent = state.gems;

  setTimeout(() => {
    reward.classList.add("hidden");
    state.currentQuestion++;
    updateProgress();

    if (state.currentQuestion < LEVELS[state.currentLevel].questions.length) {
      showQuestion();
    } else {
      finishLevel();
    }
  }, 6000);
}

function updateProgress() {
  const total = LEVELS[state.currentLevel].questions.length;
  const percent = (state.currentQuestion / total) * 100;
  document.getElementById("progress-fill").style.width = percent + "%";
}

function finishLevel() {
  const nextLevel = state.currentLevel + 1;
  const title = document.getElementById("levelup-title");
  const text = document.getElementById("levelup-text");

  state.gems += 25;
  document.getElementById("gems-display").textContent = state.gems;

  if (nextLevel <= 4) {
    title.textContent = `🎉 Keren, ${state.panggilan}! Kamu berhasil mencapai Level ${nextLevel}!`;
    text.textContent = "🌸 Satu langkah lagi untuk mengenal dirimu lebih jauh.";
    document.getElementById("btn-next-level").textContent = "LANJUT KE LEVEL " + nextLevel + " →";
    document.getElementById("btn-next-level").onclick = () => startLevel(nextLevel);
  } else {
    title.textContent = `🎉 Hebat, ${state.panggilan}! Kamu menyelesaikan semua level!`;
    text.textContent = "Sekarang saatnya refleksi diri. 🪞";
    document.getElementById("btn-next-level").textContent = "MENUJU REFLEKSI →";
    document.getElementById("btn-next-level").onclick = () => showPage("page-refleksi");
  }

  showPage("page-levelup");
  playMusicIfAllowed();
}

function nextLevel() { /* handled in finishLevel */ }

// ============ HASIL ============
function showResult() {
  state.refleksi = {
    r1: document.getElementById("ref-1").value.trim() || "-",
    r2: document.getElementById("ref-2").value.trim() || "-",
    r3: document.getElementById("ref-3").value.trim() || "-",
    r4: document.getElementById("ref-4").value.trim() || "-",
    r5: document.getElementById("ref-5").value.trim() || "-",
  };

  document.getElementById("r-nama").textContent = state.nama;
  document.getElementById("r-panggilan").textContent = state.panggilan;
  document.getElementById("r-hobi").textContent = state.hobi;
  document.getElementById("r-suka").textContent = state.suka;
  document.getElementById("r-kata").textContent = state.kata;
  document.getElementById("r-tujuan").textContent = state.tujuan;
  document.getElementById("r-harapan").textContent = state.harapan;
  document.getElementById("r-gems").textContent = state.gems;
  document.getElementById("r-level").textContent = state.level;
  document.getElementById("r-closing-name").textContent = state.panggilan;

  document.getElementById("result-about").innerHTML = generateAbout();

  const refWrap = document.getElementById("r-refleksi");
  refWrap.innerHTML = "";
  const labels = [
    "Hal baru yang disadari",
    "Kelebihan yang ingin dipertahankan",
    "Hal yang ingin dikembangkan",
    "Hal kecil yang membanggakan",
    "Pesan untuk diri sendiri",
  ];
  Object.values(state.refleksi).forEach((val, i) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${labels[i]}:</strong> ${val}`;
    refWrap.appendChild(p);
  });

  showPage("page-result");
  playMusicIfAllowed();
}

function generateAbout() {
  const answers = Object.values(state.answers);
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((a) => {
    const letter = ["A", "B", "C", "D"][a];
    if (letter) counts[letter]++;
  });

  let dominant = "A", max = 0;
  for (const k in counts) {
    if (counts[k] > max) { max = counts[k]; dominant = k; }
  }

  const descriptions = {
    A: `Kamu termasuk orang yang <strong>mandiri & tegas</strong>. Kamu cenderung mengikuti apa yang menurutmu benar, berani mencoba, dan suka mencari solusi sendiri. Kamu juga <strong>peka pada perasaan</strong> — kamu mengikuti apa yang paling sesuai dengan hatimu.`,
    B: `Kamu termasuk orang yang <strong>terbuka & hangat</strong>. Kamu nyaman bercerita, mendengarkan, dan menjalin kedekatan. Kamu sering jadi tempat curhat teman-temanmu, dan kamu <strong>menikmati kebersamaan</strong> itu. Kamu juga cenderung <strong>peka & jujur pada perasaan</strong>.`,
    C: `Kamu termasuk orang yang <strong>teliti & bijaksana</strong>. Kamu suka mempertimbangkan kelebihan dan kekurangan sebelum memutuskan, mencari informasi, dan memahami alasan di balik sesuatu. Kamu <strong>tenang dalam menghadapi situasi</strong> dan tidak terburu-buru.`,
    D: `Kamu termasuk orang yang <strong>reflektif & berhati-hati</strong>. Kamu butuh waktu untuk menenangkan diri, memastikan sesuatu, dan merasa benar-benar siap. Kamu <strong>menghargai proses</strong> dan tidak suka terburu-buru. Kamu juga <strong>peka pada perasaan</strong> — kamu mengikuti apa yang paling sesuai dengan hatimu.`,
  };

  return descriptions[dominant] +
    `<br /><br />💡 <strong>Hal yang mungkin perlu kamu ingat:</strong><br />
    Kamu hebat dalam menjadi dirimu sendiri. Jangan lupa, kamu juga berhak untuk terus tumbuh dan berkembang. 🌱`;
}

function restart() { location.reload(); }

// ============ MUSIC ============
const musicBtn = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");
bgMusic.volume = 0.4;

musicBtn.addEventListener("click", () => {
  if (state.musicOn) {
    bgMusic.pause();
    musicBtn.textContent = "🔇";
    musicBtn.classList.remove("playing");
    state.musicOn = false;
  } else {
    bgMusic.play().then(() => {
      musicBtn.textContent = "🎵";
      musicBtn.classList.add("playing");
      state.musicOn = true;
    }).catch(() => {
      alert("Musik tidak bisa diputar. Pastikan file music.mp3 ada di folder yang sama ya 💗");
    });
  }
});

function playMusicIfAllowed() {
  if (!state.musicOn) {
    bgMusic.play().then(() => {
      musicBtn.textContent = "🎵";
      musicBtn.classList.add("playing");
      state.musicOn = true;
    }).catch(() => {});
  }
}

// ============ PETALS ============
function createPetals() {
  const container = document.getElementById("petals");
  const emojis = ["🌸", "🌷", "💗", "✨", "💐", "🌺"];
  for (let i = 0; i < 15; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    petal.style.left = Math.random() * 100 + "%";
    petal.style.animationDuration = 8 + Math.random() * 8 + "s";
    petal.style.animationDelay = Math.random() * 5 + "s";
    petal.style.fontSize = 14 + Math.random() * 14 + "px";
    container.appendChild(petal);
  }
}

// ============ INIT ============
window.addEventListener("DOMContentLoaded", () => {
  createPetals();
  showPage("page-home");
});
