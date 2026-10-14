# AGENTS.md: Aturan Kerja AI Agent untuk Langkah Pintar

Dokumen ini memandu AI Agent (Claude Code, Cursor, GitHub Copilot, atau sejenisnya) dalam mengembangkan fitur-fitur Langkah Pintar. Baca dokumen PRD terlebih dahulu sebelum melanjutkan.

## Konteks Proyek

- **Nama Proyek:** Langkah Pintar
- **Tujuan:** Website edukasi algoritma untuk anak SD (kelas 1–3), mobile-first.
- **Deadline:** 15 Oktober 2026, pukul 15.30 WIB.
- **Referensi Produk:** Lihat PRD.md di folder docs/ untuk detail lengkap.
- **Repository:** GitHub public (riwayat commit utuh sejak 5 Oktober 09.30 WIB).
- **Deployment:** Dokploy (disediakan panitia).

## Stack dan Arsitektur

### Teknologi
- **Build Tool:** Vite dengan template vanilla JavaScript.
- **Language:** JavaScript ES6+, vanilla (tidak ada framework React/Vue/Angular).
- **Styling:** CSS biasa dengan CSS Custom Properties (CSS variables).
- **Database:** Firebase (Authentication + Firestore).
- **Drag-and-Drop:** SortableJS.
- **Hosting:** Dokploy.

### Struktur Folder (dari PRD)
```
src/
├── main.js                    # Entry point, routing
├── data/
│   └── levels.js              # Data 6 level
├── auth.js                    # Firebase Auth wrapper
├── storage.js                 # Firebase Firestore + localStorage wrapper
├── components/
│   ├── HomePage.js
│   ├── LoginPage.js           # (Fase 4, jika ada waktu)
│   ├── ProfilePage.js         # (Fase 4, jika ada waktu)
│   ├── LevelSelectPage.js
│   ├── GamePage.js            # Mode susun urutan
│   └── FeedbackPage.js        # Umpan balik
└── styles/
    ├── main.css               # Reset + global
    ├── variables.css          # CSS custom properties
    ├── home.css
    ├── game.css
    └── feedback.css
```

## Aturan Kerja AI Agent

### 1. Satu Fitur per Task
- Setiap task harus menangani satu fitur atau komponen saja.
- Jangan campur perubahan di file yang tidak terkait.
- Contoh task yang baik:
  - "Buat HomePage.js dengan tombol Mulai/Masuk/Tamu"
  - "Setup SortableJS di GamePage dan test drag-and-drop"
  - "Aplikasikan palet warna ke semua halaman"
- Contoh task yang buruk:
  - "Bikin aplikasi lengkap sekaligus" (terlalu besar)
  - "Update HomePage dan login sekaligus" (bercampur)

### 2. Tidak Menambah Fitur di Luar Scope MVP
- Hanya kerjakan fitur yang ada di PRD.md.
- Di luar scope: debugging mode, dashboard guru, PWA, multi-bahasa, leaderboard, badge, achievement.
- Jika ada saran fitur tambahan, tanyakan pengguna dulu, jangan langsung kerjakan.
- Prioritas: game inti + localStorage, login hanya jika waktu ada.

### 3. Bahasa Pengguna: Bahasa Indonesia Sederhana, Ramah Anak
- Semua teks yang dilihat pengguna (button label, pesan, instruksi, umpan balik) harus Bahasa Indonesia.
- **Bahasa sederhana:** Hindari kata-kata sulit atau formal. Contoh:
  - ❌ "Mohon verifikasi autentikasi Anda"
  - ✅ "Masuk dengan email dan password"
- **Ramah anak:** Pesan harus positif, tidak menghakimi, mendorong.
  - Untuk jawaban benar: "Benar! Kamu hebat!", "Sempurna!", "Lanjut ke level berikutnya!"
  - Untuk jawaban salah: "Coba lagi!", "Lihat langkah ke-2, apa yang harus dilakukan terlebih dahulu?", bukan "Salah!", "Gagal!", "Coba lagi pls".
- Konsisten dengan tone di PRD untuk semua pesan error, instruksi, dan feedback.

### 4. Data Level Hanya di src/data/levels.js
- Semua data 6 level (nama, langkah, emoji, urutan benar) harus disimpan di satu file: src/data/levels.js.
- Jangan hardcode data level di component lain (GamePage, FeedbackPage, dll.).
- Struktur level sesuai PRD (id, name, description, emoji, steps array dengan id, text, order).
- Component mengimport dan pakai data ini, bukan membuat data sendiri.

### 5. Mobile-First: Uji 360px Dulu
- Desain dan kode dengan mobile-first mindset.
- Lebar minimal yang diuji: 360px (ukuran HP terkecil).
- Setiap kali ada perubahan styling, uji dulu di 360px sebelum desktop.
- Pastikan:
  - Tombol 48x48px minimal (ukuran sentuh anak).
  - Teks 16px untuk body, 14px minimum untuk label.
  - Spacing cukup (tidak tedesak).
  - Gambar/ikon tidak overflow.
  - Drag-and-drop lancar di layar kecil.

### 6. Kode Rapi, Fungsi Kecil, Komentar Seperlunya
- Pisahkan logic besar menjadi fungsi kecil yang mudah dipahami.
- Contoh:
  ```javascript
  // ✅ Baik
  function checkAnswer(userOrder, correctOrder) {
    return JSON.stringify(userOrder) === JSON.stringify(correctOrder);
  }
  
  function showFeedback(isCorrect) {
    if (isCorrect) showPositiveMessage();
    else showHintMessage();
  }
  
  // ❌ Buruk
  function longFunction() {
    // 200 baris logika tercampur
  }
  ```
- Komentar singkat hanya di logic kompleks atau keputusan design. Hindari komentar untuk setiap baris.
- Nama variabel jelas: `isCorrect`, `userSteps`, bukan `x`, `arr`, `temp`.

### 7. Semua Pemanggilan Firebase di auth.js dan storage.js
- Jangan panggil Firebase langsung dari component.
- Buat wrapper function di auth.js (signup, login, logout) dan storage.js (read progress, write progress, fallback localStorage).
- Semua error handling dan fallback dilakukan di wrapper ini.
- Component hanya memanggil function dari wrapper.
- Semua komunikasi dengan Firebase dibungkus dengan try-catch dan error handling yang jelas.

### 8. Penanganan Error dan Fallback ke Mode Tamu
- Jika Firebase (Authentication atau Firestore) gagal:
  - Aplikasi tetap bisa dimainkan sebagai tamu dengan localStorage.
  - Progress tersimpan di localStorage.
  - Saat koneksi kembali, coba sinkronisasi ke cloud (opsional di MVP).
  - Pesan kepada pengguna: "Koneksi sedang tidak stabil, tapi kamu masih bisa bermain. Progres akan disimpan di HP kamu."
- Jangan biarkan error Firebase membuat aplikasi crash. Selalu ada plan B.

### 9. Jangan Commit Kunci atau Konfigurasi Rahasia
- **Jangan pernah commit:**
  - File `.env` (Firebase keys, API keys, secrets apapun).
  - `config.js` yang berisi credentials.
  - Private keys atau token.
- **Harus ada:**
  - `.env` di `.gitignore`.
  - `.env.example` di repository (template tanpa nilai kunci).
- Saat push ke GitHub, double-check dengan `git status` bahwa `.env` tidak termasuk.
- Environment variable akan diisi di hosting (Dokploy) saat deployment.

### 10. Tidak Meminta atau Menyimpan Data Pribadi Selain yang Ditentukan
- **Data yang boleh disimpan:**
  - Email (untuk login).
  - Nama panggilan anak (nickname).
  - Progress level (bintang per level).
- **Data yang TIDAK boleh disimpan/diminta:**
  - Nama lengkap asli anak.
  - Alamat, nomor telepon, tanggal lahir, atau data pribadi lainnya.
  - Password tersimpan hanya di Firebase Authentication (hashed).
  - Cookie tracking atau analytics yang invasif.
- Ini penting untuk COPPA compliance (perlindungan anak di internet).

### 11. Semua Fitur Bisa Diakses Lewat Keyboard dan Sentuh
- Drag-and-drop harus support both mouse dan touch.
- Tab navigation bekerja di semua elemen interaktif (tombol, input, kartu yang klikable).
- Focus indicator jelas (outline atau border 2px).
- Jangan gunakan :hover saja; tambah :focus untuk keyboard.
- ARIA label untuk elemen yang tidak punya teks terlihat.

### 12. Setelah Selesai, Jelaskan Singkat Perubahan
- Saat task selesai, berikan penjelasan singkat (2–3 kalimat) tentang:
  - Apa yang diubah/ditambahkan.
  - File mana saja yang terpengaruh.
  - Apakah ada side effect atau dependency baru.
- Contoh:
  - ✅ "Membuat GamePage.js untuk mode susun urutan dengan SortableJS. File yang berubah: src/components/GamePage.js, src/styles/game.css, src/main.js (routing). Dependency: sortablejs sudah di npm."

### 13. Jika Ada Bug, Jelaskan Penyebabnya Dulu
- Sebelum fix, jelaskan:
  - Gejala bug apa.
  - Kira-kira penyebabnya di mana (logic error, DOM issue, event listener, dll.).
  - Rencana fix apa.
- Baru perbaiki seminimal mungkin (jangan refactor besar-besaran saat debug).
- Test ulang setelah fix.

### 14. Format Commit Message
- Ikuti format: `<type>: <deskripsi singkat>`
- **Type:** feat (fitur baru), fix (perbaikan bug), style (CSS/format), docs (dokumentasi), chore (setup/dependency).
- **Deskripsi:** singkat (max 50 karakter), imperatif, tanpa titik di akhir.
- Contoh:
  - ✅ `feat: add GamePage with drag-and-drop`
  - ✅ `fix: correct level data order in levels.js`
  - ✅ `style: apply color palette to all pages`
  - ✅ `docs: update README with demo account`

### 15. Larangan Force Push atau Rewrite Riwayat Commit
- Jangan gunakan `git push --force` atau `git rebase -i` untuk rewrite history.
- Juri akan cek riwayat commit lengkap; rewrite akan merusak kredibilitas.
- Jika ada kesalahan commit, gunakan `git revert` (buat commit baru yang undo), bukan `git reset --hard`.

### 16. Definition of Done per Feature
Fitur dianggap selesai (done) jika:
- **Fungsionalitas:** Bekerja sesuai spec PRD, tanpa error di localhost dan di link deploy.
- **Tampilan:** Rapi di 360px dan desktop, konsisten dengan palet warna + font.
- **Testing:** Sudah ditest di mobile device (HP/tablet fisik atau emulator) untuk touch interaction.
- **Commit:** Sudah di-commit dengan pesan deskriptif, tidak ada file rahasia di history.
- **Dokumentasi:** Perubahan dijelaskan singkat.
- Jika ada fitur bonus (contoh: sound effect), hanya jika tidak mengganggu scope utama.

## Prioritas Pengembangan

Mengingat deadline terbatas, ikuti urutan ini:

### Prioritas 1 (Wajib, Fase 1–2)
1. Setup repository, struktur folder, data levels.js.
2. HomePage: tombol Mulai, Masuk, Tamu.
3. LevelSelectPage: grid 6 level, status kunci/bintang.
4. GamePage: SortableJS, kartu langkah, drag-and-drop, tombol Periksa.
5. FeedbackPage: pesan benar/salah, penjelasan algoritma, Versi Robot, lanjut level.
6. localStorage untuk menyimpan progres + nama panggilan.
7. Deploy otomatis ke Dokploy, 6 level dimainkan tanpa error.

### Prioritas 2 (Tinggi, Fase 3)
1. Palet warna custom, font ramah anak.
2. Animasi (bintang, drag-and-drop, transisi).
3. Aksesibilitas dasar (label, kontras, keyboard).
4. Responsive 360px dan desktop.
5. Maskot SVG.

### Prioritas 3 (Bonus, Fase 4, jika waktu ada)
1. Firebase Authentication (signup, login, logout).
2. Firestore untuk simpan progres per akun.
3. Migrasi progres lokal ke akun saat login.
4. Profil pengguna.
5. Text-to-speech (Web Speech API).

Jika pukul 13.00 WIB game inti (Prioritas 1) sudah stabil dan ter-deploy, boleh mulai Prioritas 2. Jika Prioritas 2 sudah rapi, boleh mulai Prioritas 3. **Jika waktu habis, kirim versi Prioritas 1+2 (game inti + visual) saja, login bisa dilewatkan.**

## Saran untuk AI Agent

- **Jangan terlalu sering bertanya:** Sudah ada PRD lengkap. Ambil keputusan design/tech yang masuk akal dan lanjutkan. Tanya hanya jika spec benar-benar ambigu.
- **Fokus, jangan perfeksionisme:** Dalam waktu terbatas, "baik" lebih penting daripada "sempurna". 6 level dimainkan tanpa error dan tampilan rapi sudah cukup.
- **Test saat kerjakan, jangan di akhir:** Setiap fitur sudah tested di localhost sebelum push. Jangan menumpuk bug sampai akhir.
- **Catat apa yang dikerjakan:** Setiap selesai task, catat ke docs/prompt-log.md apa yang dikerjakan dan waktu. Ini buat jurnal terkurasi nanti.
- **Link deployment selalu aktif:** Sebelum cutoff, pastikan link Dokploy bisa dibuka dan semua 6 level bisa dimainkan. Ini yang juri lihat pertama kali.

## Penanganan Environment Variable

Environment variable Firebase (API key, project ID, dll.) disimpan secara aman:
- **Lokal:** File `.env` berisi value sebenarnya (tidak di-commit).
- **Production:** Variable diatur di dashboard Dokploy saat setup hosting.
- **Repository:** Hanya `.env.example` ada (template kosong tanpa value).

Saat setup di Dokploy, admin akan mengisi value sebenarnya di Environment tab.

## Kontaksi Support/Pertanyaan

Jika ada pertanyaan atau butuh klarifikasi:
- Baca PRD.md dulu (90% pertanyaan sudah dijawab di sana).
- Cek docs/prompt-log.md untuk lihat keputusan yang sudah dibuat.
- Jika masih butuh input, tanyakan ke human (pembuat proyek).