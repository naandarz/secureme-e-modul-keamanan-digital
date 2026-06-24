const lessons = [
  {
    code: "LESSON_01",
    duration: "± 12 menit",
    title: "Dasar Keamanan dan Privasi Digital",
    text: "Keamanan digital adalah upaya melindungi perangkat, akun, jaringan, dan data dari akses yang tidak sah. Privasi digital adalah kemampuan seseorang mengendalikan data pribadi serta jejak aktivitasnya di ruang digital. Keduanya saling berkaitan: akun yang tidak aman dapat menyebabkan privasi bocor, sedangkan kebiasaan membagikan data secara berlebihan dapat meningkatkan risiko keamanan.",
    case: "Seorang mahasiswa mengunggah foto kartu mahasiswa dan tiket perjalanan ke media sosial. Tanpa sadar, ia memperlihatkan nama lengkap, nomor identitas, lokasi, dan jadwal perjalanan. Data tersebut bisa dimanfaatkan orang lain untuk penipuan atau penyalahgunaan identitas.",
    visual: [
      ["🔐", "Keamanan", "Melindungi akun, perangkat, jaringan, dan data dari serangan."],
      ["👁", "Privasi", "Mengontrol siapa yang boleh melihat, memakai, atau menyimpan data pribadi."],
      ["🧭", "Jejak Digital", "Rekam aktivitas online yang dapat tertinggal dalam waktu lama."]
    ]
  },
  {
    code: "LESSON_02",
    duration: "± 10 menit",
    title: "Data Pribadi dan Jejak Digital",
    text: "Data pribadi mencakup informasi yang dapat mengidentifikasi seseorang, seperti nama, alamat, nomor telepon, email, foto wajah, NIK, data lokasi, akun media sosial, hingga pola aktivitas online. Jejak digital terbentuk dari unggahan, komentar, pencarian, lokasi, serta izin aplikasi yang diberikan pengguna.",
    case: "Aplikasi edit foto meminta akses kontak, lokasi, kamera, mikrofon, dan penyimpanan. Jika pengguna menyetujui semua izin tanpa membaca kebutuhan aplikasi, data yang tidak relevan berpotensi ikut terkumpul.",
    visual: [
      ["🪪", "Identitas", "Nama, NIK, email, nomor telepon, foto, dan alamat."],
      ["📍", "Lokasi", "Riwayat lokasi dapat menunjukkan pola aktivitas harian."],
      ["📱", "Izin Aplikasi", "Kamera, mikrofon, kontak, penyimpanan, dan notifikasi perlu dikontrol."]
    ]
  },
  {
    code: "LESSON_03",
    duration: "± 15 menit",
    title: "Ancaman Digital yang Sering Terjadi",
    text: "Ancaman digital dapat berbentuk phishing, malware, ransomware, social engineering, penipuan online, pencurian akun, dan penyadapan jaringan publik. Serangan tidak selalu memakai teknologi rumit; banyak serangan memanfaatkan kelengahan, rasa panik, atau kepercayaan korban.",
    case: "Korban menerima pesan yang mengatasnamakan kampus dan menyatakan akun akademik akan diblokir. Pesan berisi link login palsu. Setelah korban memasukkan email dan password, akun dapat diambil alih oleh penyerang.",
    visual: [
      ["🎣", "Phishing", "Pesan atau situs palsu untuk mencuri data login."],
      ["🦠", "Malware", "Program berbahaya yang dapat merusak atau mencuri data."],
      ["🎭", "Social Engineering", "Manipulasi psikologis agar korban memberikan informasi rahasia."]
    ]
  },
  {
    code: "LESSON_04",
    duration: "± 12 menit",
    title: "Password, OTP, dan Autentikasi Dua Faktor",
    text: "Password kuat sebaiknya panjang, unik, tidak mudah ditebak, dan tidak digunakan ulang di banyak akun. OTP adalah kode sekali pakai yang tidak boleh diberikan kepada siapa pun. Autentikasi dua faktor atau MFA menambah lapisan keamanan karena login tidak hanya bergantung pada password.",
    case: "Seseorang memakai password yang sama untuk email, media sosial, dan marketplace. Ketika satu layanan bocor, penyerang mencoba password yang sama di akun lain dan berhasil masuk.",
    visual: [
      ["🧱", "Password Kuat", "Panjang, unik, dan memakai kombinasi karakter."],
      ["🚫", "OTP Rahasia", "Kode OTP tidak boleh dibagikan, termasuk kepada orang yang mengaku petugas."],
      ["✅", "2FA/MFA", "Lapisan keamanan tambahan untuk memverifikasi pemilik akun." ]
    ]
  },
  {
    code: "LESSON_05",
    duration: "± 10 menit",
    title: "Praktik Aman Harian",
    text: "Praktik aman dapat dimulai dari langkah sederhana: memperbarui aplikasi, memeriksa alamat website, tidak sembarang mengunduh file, memakai jaringan yang aman, logout dari perangkat umum, mencadangkan data penting, dan mengatur privasi akun media sosial.",
    case: "Mahasiswa memakai Wi-Fi publik untuk membuka akun penting tanpa proteksi. Di jaringan publik, risiko penyadapan atau halaman login palsu lebih tinggi. Untuk aktivitas sensitif, gunakan jaringan terpercaya dan hindari memasukkan data penting pada koneksi yang meragukan.",
    visual: [
      ["🔄", "Update", "Pembaruan menutup celah keamanan pada aplikasi dan sistem."],
      ["🌐", "Cek URL", "Pastikan domain benar sebelum login atau mengisi data."],
      ["💾", "Backup", "Cadangan data mengurangi dampak kehilangan perangkat atau ransomware."]
    ]
  }
];

const quizQuestions = [
  {
    q: "Apa perbedaan utama keamanan digital dan privasi digital?",
    options: [
      "Keamanan digital melindungi perangkat dan akun, sedangkan privasi digital mengatur kontrol atas data pribadi.",
      "Keamanan digital hanya membahas media sosial, sedangkan privasi hanya membahas antivirus.",
      "Keduanya sama persis dan tidak memiliki perbedaan.",
      "Privasi digital hanya diperlukan oleh perusahaan besar."
    ],
    answer: 0
  },
  {
    q: "Manakah contoh password yang paling kuat?",
    options: ["12345678", "namasaya2026", "qwertyums", "B!ruLangit_2026#"],
    answer: 3
  },
  {
    q: "Mengapa OTP tidak boleh dibagikan kepada orang lain?",
    options: [
      "Karena OTP dapat dipakai untuk mengambil alih akun atau menyetujui transaksi.",
      "Karena OTP hanya berguna untuk mempercepat internet.",
      "Karena OTP adalah kode promosi aplikasi.",
      "Karena OTP harus selalu dipublikasikan di media sosial."
    ],
    answer: 0
  },
  {
    q: "Ciri umum pesan phishing adalah...",
    options: [
      "Memakai bahasa wajar dan tidak meminta data pribadi.",
      "Memakai link mencurigakan, mendesak korban, dan meminta password/OTP.",
      "Selalu dikirim dari alamat resmi kampus.",
      "Tidak pernah menggunakan lampiran."
    ],
    answer: 1
  },
  {
    q: "Mengapa izin aplikasi perlu diperiksa?",
    options: [
      "Agar semua aplikasi dapat membaca seluruh data pengguna.",
      "Agar aplikasi tidak mengakses kamera, mikrofon, lokasi, atau kontak tanpa kebutuhan jelas.",
      "Agar baterai selalu penuh.",
      "Agar aplikasi tidak perlu diperbarui."
    ],
    answer: 1
  },
  {
    q: "Autentikasi dua faktor atau MFA berguna untuk...",
    options: [
      "Menghapus semua password secara otomatis.",
      "Menambah lapisan verifikasi saat login.",
      "Membuat semua akun menjadi publik.",
      "Mengganti fungsi backup data."
    ],
    answer: 1
  },
  {
    q: "Tindakan aman saat menerima link login dari pesan mencurigakan adalah...",
    options: [
      "Langsung klik karena terlihat mendesak.",
      "Masukkan password lalu ganti nanti.",
      "Buka situs resmi secara manual dan periksa kebenaran pesan.",
      "Kirim link tersebut ke semua teman."
    ],
    answer: 2
  },
  {
    q: "Contoh jejak digital adalah...",
    options: [
      "Komentar, unggahan, riwayat lokasi, dan aktivitas akun online.",
      "Hanya file yang tersimpan di flashdisk.",
      "Hanya foto yang dicetak di kertas.",
      "Hanya percakapan lisan di kelas."
    ],
    answer: 0
  },
  {
    q: "Praktik aman ketika memakai perangkat umum adalah...",
    options: [
      "Menyimpan password di browser perangkat umum.",
      "Logout setelah selesai dan tidak menyimpan kredensial.",
      "Membuka semua akun pribadi tanpa batas.",
      "Mengunduh file sembarangan."
    ],
    answer: 1
  },
  {
    q: "Mengapa backup data penting?",
    options: [
      "Agar data tetap dapat dipulihkan saat perangkat rusak, hilang, atau terkena ransomware.",
      "Agar password menjadi pendek.",
      "Agar link phishing otomatis hilang.",
      "Agar aplikasi tidak membutuhkan update."
    ],
    answer: 0
  }
];

const dragItems = [
  { text: "Mengaktifkan autentikasi dua faktor", type: "aman" },
  { text: "Membagikan OTP kepada orang lain", type: "berisiko" },
  { text: "Memeriksa domain sebelum login", type: "aman" },
  { text: "Menggunakan password sama di semua akun", type: "berisiko" },
  { text: "Memperbarui aplikasi secara berkala", type: "aman" },
  { text: "Klik lampiran dari pengirim tidak dikenal", type: "berisiko" },
  { text: "Mengatur izin lokasi aplikasi", type: "aman" },
  { text: "Login akun penting di Wi-Fi publik sembarangan", type: "berisiko" }
];

const flashcards = [
  ["Phishing", "Upaya penipuan untuk mendapatkan data pribadi melalui pesan, email, atau situs palsu."],
  ["Malware", "Perangkat lunak berbahaya yang dapat merusak sistem, mencuri data, atau mengunci file."],
  ["OTP", "Kode sekali pakai untuk verifikasi. Jangan pernah membagikannya kepada siapa pun."],
  ["MFA", "Multi-Factor Authentication, yaitu verifikasi tambahan selain password."],
  ["Jejak Digital", "Rekam aktivitas online seperti unggahan, komentar, lokasi, pencarian, dan interaksi digital."],
  ["Data Pribadi", "Informasi yang dapat mengidentifikasi seseorang, seperti nama, email, NIK, foto, lokasi, atau nomor telepon."]
];

const visited = new Set(JSON.parse(localStorage.getItem("securemeVisited") || "[]"));
let currentLesson = 0;
let currentFlash = 0;
let selectedDragItem = null;
let phishingFound = new Set();

function qs(selector, parent = document) { return parent.querySelector(selector); }
function qsa(selector, parent = document) { return [...parent.querySelectorAll(selector)]; }

function updateClock() {
  const clock = qs("#clock");
  if (!clock) return;
  clock.textContent = "SYS.TIME " + new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}
setInterval(updateClock, 1000);
updateClock();

function markVisited(id) {
  visited.add(id);
  localStorage.setItem("securemeVisited", JSON.stringify([...visited]));
  const total = 6;
  const pct = Math.round((Math.min(visited.size, total) / total) * 100);
  qs("#progressFill").style.width = pct + "%";
  qs("#progressLabel").textContent = pct + "%";
  qs("#progressText").textContent = pct >= 100 ? "Semua area modul telah dibuka." : `${visited.size} dari ${total} area telah dibuka.`;
}

function observeSections() {
  const sections = qsa(".module-section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        markVisited(entry.target.dataset.module || id);
        qsa(".side-link").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(section => observer.observe(section));
}

function renderLesson(index) {
  currentLesson = (index + lessons.length) % lessons.length;
  const lesson = lessons[currentLesson];
  qs("#lessonCode").textContent = lesson.code;
  qs("#lessonDuration").textContent = lesson.duration;
  qs("#lessonTitle").textContent = lesson.title;
  qs("#lessonText").textContent = lesson.text;
  qs("#lessonCase").textContent = lesson.case;
  qs("#lessonVisual").innerHTML = lesson.visual.map(item => `
    <div class="info-tile">
      <span class="icon">${item[0]}</span>
      <b>${item[1]}</b>
      <span>${item[2]}</span>
    </div>
  `).join("");
  qsa(".lesson-tab").forEach((tab, i) => tab.classList.toggle("active", i === currentLesson));
}

function initLessons() {
  renderLesson(0);
  qsa(".lesson-tab").forEach(tab => tab.addEventListener("click", () => renderLesson(Number(tab.dataset.lesson))));
  qs("#prevLesson").addEventListener("click", () => renderLesson(currentLesson - 1));
  qs("#nextLesson").addEventListener("click", () => renderLesson(currentLesson + 1));
}

function extractYoutubeId(url) {
  try {
    const value = url.trim();
    if (!value) return null;
    if (/^[a-zA-Z0-9_-]{11}$/.test(value)) return value;
    const parsed = new URL(value);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.replace("/", "").slice(0, 11);
    if (parsed.searchParams.get("v")) return parsed.searchParams.get("v").slice(0, 11);
    const embedMatch = parsed.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
    if (embedMatch) return embedMatch[1];
  } catch (error) {
    return null;
  }
  return null;
}

function initVideo() {
  qs("#loadVideo").addEventListener("click", () => {
    const id = extractYoutubeId(qs("#youtubeInput").value);
    const hint = qs("#videoHint");
    if (!id) {
      hint.textContent = "Link tidak valid. Gunakan link YouTube standar atau ID video 11 karakter.";
      hint.style.color = "var(--danger)";
      return;
    }
    qs("#youtubeFrame").src = `https://www.youtube.com/embed/${id}`;
    hint.textContent = "Video berhasil dimuat ke dalam e-modul.";
    hint.style.color = "var(--success)";
    markVisited("video");
  });

  qsa(".mini-question button").forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".mini-question");
      qsa("button", parent).forEach(b => b.classList.remove("correct", "wrong"));
      const isCorrect = btn.dataset.correct === "true";
      btn.classList.add(isCorrect ? "correct" : "wrong");
      qs("#miniFeedback").textContent = isCorrect
        ? "Benar. Keamanan digital dimulai dari kebiasaan tidak mudah membagikan data rahasia."
        : "Belum tepat. Periksa kembali sumber pesan dan jangan terburu-buru memberikan data rahasia.";
    });
  });
}

function evaluatePassword(value) {
  const rules = [
    { label: "Minimal 12 karakter", pass: value.length >= 12 },
    { label: "Mengandung huruf kecil", pass: /[a-z]/.test(value) },
    { label: "Mengandung huruf besar", pass: /[A-Z]/.test(value) },
    { label: "Mengandung angka", pass: /\d/.test(value) },
    { label: "Mengandung simbol", pass: /[^A-Za-z0-9]/.test(value) },
    { label: "Tidak memakai pola umum seperti 123456 atau qwerty", pass: !/(123456|qwerty|password|admin|namasaya)/i.test(value) }
  ];
  const score = rules.filter(rule => rule.pass).length;
  return { rules, score };
}

function initPasswordLab() {
  const input = qs("#passwordInput");
  const bar = qs("#strengthBar");
  const result = qs("#strengthResult");
  const checklist = qs("#passwordChecklist");
  function update() {
    const { rules, score } = evaluatePassword(input.value);
    const pct = Math.round((score / rules.length) * 100);
    bar.style.width = pct + "%";
    let label = "Lemah";
    let color = "var(--danger)";
    if (score >= 5) { label = "Kuat"; color = "var(--success)"; }
    else if (score >= 3) { label = "Sedang"; color = "var(--warning)"; }
    bar.style.background = color;
    result.textContent = input.value ? `Status: ${label} (${score}/${rules.length} indikator terpenuhi)` : "Status: menunggu input.";
    checklist.innerHTML = rules.map(rule => `<li>${rule.pass ? "✅" : "⬜"} ${rule.label}</li>`).join("");
  }
  input.addEventListener("input", update);
  qs("#showPassword").addEventListener("click", () => {
    input.type = input.type === "password" ? "text" : "password";
    qs("#showPassword").textContent = input.type === "password" ? "Lihat" : "Tutup";
  });
  update();
}

function initPhishingLab() {
  qsa(".hotspot").forEach(button => {
    button.addEventListener("click", () => {
      button.classList.add("found");
      phishingFound.add(button.dataset.flag);
      qs("#phishingFeedback").innerHTML = `<strong>${phishingFound.size}/4 tanda bahaya ditemukan.</strong><br>${[...phishingFound].map(item => `+ ${item}`).join("<br>")}`;
      if (phishingFound.size === 4) {
        qs("#phishingFeedback").innerHTML += "<br><br>✅ Bagus. Pesan ini sangat mencurigakan dan sebaiknya tidak dibuka.";
      }
    });
  });
}

function renderDragItems() {
  const source = qs("#dragSource");
  source.innerHTML = dragItems.map((item, index) => `<div class="drag-item" draggable="true" data-index="${index}" data-type="${item.type}">${item.text}</div>`).join("");
  qsa(".drag-item").forEach(item => {
    item.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", item.dataset.index);
      selectedDragItem = item;
    });
    item.addEventListener("click", () => {
      qsa(".drag-item").forEach(el => el.classList.remove("selected"));
      selectedDragItem = item;
      item.classList.add("selected");
      qs("#dragFeedback").textContent = "Kartu dipilih. Ketuk kotak kategori untuk memindahkan.";
    });
  });
}

function initDragLab() {
  renderDragItems();
  qsa(".drop-zone").forEach(zone => {
    zone.addEventListener("dragover", e => { e.preventDefault(); zone.classList.add("drag-over"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
    zone.addEventListener("drop", e => {
      e.preventDefault();
      zone.classList.remove("drag-over");
      const index = e.dataTransfer.getData("text/plain");
      const item = qs(`.drag-item[data-index="${index}"]`);
      if (item) placeDragItem(zone, item);
    });
    zone.addEventListener("click", () => {
      if (selectedDragItem) placeDragItem(zone, selectedDragItem);
    });
  });
  qs("#checkDrag").addEventListener("click", () => {
    const placed = qsa(".drop-zone .drag-item");
    if (placed.length < dragItems.length) {
      qs("#dragFeedback").textContent = `Masih ada ${dragItems.length - placed.length} kartu yang belum ditempatkan.`;
      return;
    }
    let correct = 0;
    placed.forEach(item => {
      const zone = item.closest(".drop-zone").dataset.zone;
      const ok = item.dataset.type === zone;
      if (ok) correct++;
      item.style.background = ok ? "#d7ffe7" : "#ffe2e2";
      item.style.color = "#111";
    });
    qs("#dragFeedback").textContent = `Skor drag and drop: ${correct}/${dragItems.length}. ${correct === dragItems.length ? "Semua benar." : "Periksa kartu yang berwarna merah."}`;
  });
}

function placeDragItem(zone, item) {
  const empty = qs(".empty", zone);
  if (empty) empty.style.display = "none";
  item.classList.remove("selected");
  item.style.background = "";
  item.style.color = "";
  zone.appendChild(item);
  selectedDragItem = null;
}

function renderFlashcard() {
  const [term, definition] = flashcards[currentFlash];
  qs("#flashTerm").textContent = term;
  qs("#flashDefinition").textContent = definition;
  qs("#flashcard").classList.remove("flipped");
}

function initFlashcards() {
  const card = qs("#flashcard");
  const flip = () => card.classList.toggle("flipped");
  card.addEventListener("click", flip);
  card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") flip(); });
  qs("#flipFlash").addEventListener("click", flip);
  qs("#prevFlash").addEventListener("click", () => { currentFlash = (currentFlash - 1 + flashcards.length) % flashcards.length; renderFlashcard(); });
  qs("#nextFlash").addEventListener("click", () => { currentFlash = (currentFlash + 1) % flashcards.length; renderFlashcard(); });
  renderFlashcard();
}

function initReflection() {
  qs("#saveReflection").addEventListener("click", () => {
    const checked = qsa(".reflect-check").filter(item => item.checked).length;
    const plan = qs("#reflectionText").value.trim();
    const message = checked >= 4
      ? "Audit Anda sudah baik. Pertahankan kebiasaan aman dan evaluasi izin aplikasi secara berkala."
      : "Masih ada beberapa kebiasaan yang bisa ditingkatkan. Mulai dari password unik dan aktifkan 2FA.";
    localStorage.setItem("securemeReflection", JSON.stringify({ checked, plan, savedAt: new Date().toISOString() }));
    qs("#reflectionFeedback").innerHTML = `✅ Refleksi tersimpan. ${message}${plan ? `<br><br>Rencana Anda: ${escapeHtml(plan)}` : ""}`;
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function renderQuiz() {
  const form = qs("#quizForm");
  form.innerHTML = quizQuestions.map((item, index) => `
    <div class="question-block" data-question="${index}">
      <h3>${index + 1}. ${item.q}</h3>
      ${item.options.map((option, optionIndex) => `
        <label class="option-label">
          <input type="radio" name="q${index}" value="${optionIndex}" />
          <span>${option}</span>
        </label>
      `).join("")}
    </div>
  `).join("");
}

function initQuiz() {
  renderQuiz();
  qs("#submitQuiz").addEventListener("click", () => {
    let score = 0;
    quizQuestions.forEach((item, index) => {
      const block = qs(`[data-question="${index}"]`);
      const selected = qs(`input[name="q${index}"]:checked`);
      qsa(".option-label", block).forEach((label, optionIndex) => {
        label.classList.remove("correct", "wrong");
        if (optionIndex === item.answer) label.classList.add("correct");
      });
      if (selected && Number(selected.value) === item.answer) {
        score++;
      } else if (selected) {
        selected.closest(".option-label").classList.add("wrong");
      }
    });
    const pct = Math.round((score / quizQuestions.length) * 100);
    const panel = qs("#scorePanel");
    panel.classList.remove("excellent", "medium", "low");
    let title = "Perlu Mengulang Materi";
    let cls = "low";
    let recommendation = "Pelajari ulang materi ancaman digital, password, OTP, dan praktik aman harian.";
    if (pct >= 80) { title = "Sangat Baik"; cls = "excellent"; recommendation = "Pemahaman Anda sangat baik. Lanjutkan dengan menerapkan checklist keamanan pada akun pribadi."; }
    else if (pct >= 60) { title = "Cukup Baik"; cls = "medium"; recommendation = "Pemahaman sudah cukup. Perkuat lagi bagian phishing, izin aplikasi, dan 2FA."; }
    panel.classList.add(cls);
    qs("#scoreTitle").textContent = `${title} — Skor ${pct}`;
    qs("#scoreText").textContent = `Jawaban benar: ${score}/${quizQuestions.length}. ${recommendation}`;
    markVisited("evaluasi");
    panel.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  qs("#resetQuiz").addEventListener("click", () => {
    renderQuiz();
    const panel = qs("#scorePanel");
    panel.classList.remove("excellent", "medium", "low");
    qs("#scoreTitle").textContent = "Belum ada nilai.";
    qs("#scoreText").textContent = "Kerjakan evaluasi untuk mendapatkan skor.";
  });
}

function initThemeAndMenu() {
  const savedTheme = localStorage.getItem("securemeTheme");
  if (savedTheme) document.documentElement.dataset.theme = savedTheme;
  qs("#themeToggle").addEventListener("click", () => {
    const current = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = current;
    localStorage.setItem("securemeTheme", current);
  });
  qs("#menuToggle").addEventListener("click", () => qs("#sidePanel").classList.toggle("open"));
  qsa(".side-link").forEach(link => link.addEventListener("click", () => qs("#sidePanel").classList.remove("open")));
}

function boot() {
  initThemeAndMenu();
  observeSections();
  initLessons();
  initVideo();
  initPasswordLab();
  initPhishingLab();
  initDragLab();
  initFlashcards();
  initReflection();
  initQuiz();
  visited.forEach(id => markVisited(id));
  if (visited.size === 0) markVisited("pembuka");
}

document.addEventListener("DOMContentLoaded", boot);
