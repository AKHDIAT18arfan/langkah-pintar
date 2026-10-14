# PRD: Langkah Pintar - Website Edukasi Algoritma untuk Anak SD

## Ringkasan Eksekutif

Langkah Pintar adalah website edukasi interaktif yang memperkenalkan konsep algoritma kepada anak SD (kelas 1-3) melalui aktivitas menyusun urutan langkah kegiatan sehari-hari. Aplikasi ini menggunakan pendekatan "coding tanpa komputer" dengan jembatan visual ke dunia coding lewat fitur "Versi Robot". Pengguna dapat bermain sebagai tamu tanpa login terlebih dahulu, dengan opsi autentikasi Firebase untuk menyimpan progres. Batas waktu pengembangan: 1 hari (5–15 Oktober 2026). Batas pengumpulan: 15 Oktober 2026 pukul 15.30 WIB.

## Tujuan Pembelajaran

1. Membantu anak memahami bahwa suatu pekerjaan atau kegiatan dilakukan melalui langkah-langkah berurutan (algoritma).
2. Melatih anak berpikir runtut dan logis (computational thinking) tanpa menulis kode.
3. Menunjukkan bahwa urutan langkah yang sama dapat ditulis sebagai perintah robot, menjadi jembatan pertama ke dunia pemrograman.

## Target Pengguna

**Pengguna Utama:** Anak SD kelas 1–3 (usia 6–9 tahun), belum tentu lancar membaca. Konten awal difokuskan pada tingkat ini, dengan beberapa level sedikit lebih menantang untuk kelas atas (4–6).

**Pendamping:** Guru kelas dan orang tua, yang dapat memandu anak melalui aktivitas ini di sekolah atau rumah.

**Perangkat:** Mobile-first (smartphone dan tablet), juga dapat diakses di laptop atau desktop. Responsif untuk lebar layar minimal 360px.

## Fitur MVP (Minimum Viable Product)

### 1. Halaman Beranda
- Tampilan selamat datang dengan judul "Langkah Pintar" dan maskot sederhana (ilustrasi SVG).
- Tombol utama: "Mulai Belajar", "Masuk" (Login), dan "Main sebagai Tamu".
- Pesan sambutan singkat yang ramah anak: "Mari belajar berpikir seperti robot!"
- Informasi singkat tentang apa yang akan dipelajari.

### 2. Autentikasi (Firebase Authentication)
- Fitur daftar (sign-up): email dan password. Akun biasanya dibuat oleh orang tua atau guru.
- Fitur masuk (login): email dan password.
- Opsi masuk dengan Google (opsional, dapat ditambahkan jika waktu memungkinkan).
- Data pengguna yang disimpan: email, nama panggilan anak, dan progres level.
- Tombol keluar (logout) di profil atau menu.
- Mode tamu: pengguna dapat memulai bermain tanpa login; progres disimpan di localStorage lokal.

### 3. Halaman Profil Sederhana
- Menampilkan nama panggilan anak (misal, "Halo, Dina!").
- Ikon atau avatar sederhana pilihan saat daftar (opsional, MVP bisa dilewatkan).
- Opsi kembali ke beranda atau lanjut ke pilih level.
- Untuk pengguna tamu, nama panggilan dapat diatur di halaman pertama atau saat memulai.

### 4. Halaman Pilih Level
- Tampilan kartu atau grid berisi 6 level.
- Setiap kartu menunjukkan:
  - Nomor level dan nama aktivitas (misal, "Level 1: Mencuci Tangan").
  - Status kunci/terbuka: level pertama terbuka, level berikutnya terbuka saat level sebelumnya selesai.
  - Bintang yang dikumpulkan (0–3 bintang, menandakan banyaknya kali berhasil atau nilai score, tergantung mekanik yang dipilih).
- Klik kartu untuk masuk ke mode bermain level itu.

### 5. Mode Susun Urutan (Game Inti)
- Judul aktivitas dan penjelasan singkat (misal, "Susun langkah-langkah mencuci tangan dengan benar").
- Kartu-kartu langkah ditampilkan dalam urutan acak. Setiap kartu terdiri atas:
  - Emoji atau ikon besar (mudah dikenali anak).
  - Teks deskripsi pendek (maksimal 6 kata, bahasa Indonesia sederhana).
- Mekanisme drag-and-drop menggunakan SortableJS, mendukung layar sentuh dan mouse.
- Pengguna menyusun kartu dalam urutan yang benar, lalu menekan tombol "Periksa".
- Animasi halus saat kartu diseret dan diletakkan.

### 6. Umpan Balik Langsung (Feedback)
- **Jawaban Benar:**
  - Animasi bintang muncul dengan efek memutar atau melompat.
  - Pesan semangat positif tanpa mengenal orang (misal, "Benar! Kamu hebat!").
  - Penjelasan singkat: "Urutan langkah yang benar seperti ini disebut algoritma. Robot mengikuti algoritma untuk melakukan tugas!"
  - Tombol lanjut ke level berikutnya atau lihat Versi Robot.
- **Jawaban Salah:**
  - Pesan petunjuk lembut tanpa kata-kata negatif (misal, "Coba lihat lagi urutan langkah ke-2. Langkah apa yang harus dilakukan terlebih dahulu?").
  - Opsi untuk mencoba ulang atau melihat petunjuk visual.
  - Tidak ada kata seperti "salah", "gagal", atau "coba lagi", melainkan tone mendorong.

### 7. Tombol "Lihat Versi Robot"
- Menampilkan urutan langkah yang benar sebagai daftar bernomor ala kode:
  ```
  1. Basahi tangan dengan air
  2. Oleskan sabun ke telapak tangan
  3. Gosok telapak dan sela jari selama 20 detik
  4. Bilas dengan air mengalir
  5. Keringkan dengan handuk
  ```
- Ini adalah jembatan pertama ke konsep penulisan perintah (coding).
- Tombol "Kembali" untuk kembali ke umpan balik atau level berikutnya.

### 8. Fitur Baca Suara (Text-to-Speech)
- Tombol speaker di setiap halaman yang penting (beranda, instruksi level, kartu langkah).
- Menggunakan Web Speech API dengan bahasa Indonesia (id-ID).
- Opsional bagi pengguna (dapat diaktifkan/nonaktifkan).
- Membaca teks instruksi atau deskripsi kartu dengan suara yang jelas.

### 9. Penyimpanan Progres (State Management)
- **Pengguna Tamu:** Progres disimpan di localStorage browser. Mencakup:
  - Nama panggilan.
  - Status level mana yang sudah diselesaikan.
  - Berapa bintang yang dikumpulkan per level.
  - Saat tamu login atau mendaftar, progres lokal digabungkan dengan akun cloud.
- **Pengguna Login:** Progres disimpan di Firestore (Firebase) per akun:
  - Koleksi: "users"
  - Dokumen: UID pengguna
  - Field: nickname (nama panggilan), progress (peta level ID → jumlah bintang), lastUpdated (waktu update terakhir).
- **Fallback:** Jika Firebase gagal terhubung, aplikasi tetap berfungsi sebagai tamu dengan localStorage.

### 10. Penanganan Error dan Fallback
- Jika Firebase Authentication gagal, pengguna dapat melanjutkan bermain sebagai tamu.
- Jika Firestore gagal saat menyimpan progres, data ditampung di localStorage dan dicoba disimpan ulang saat koneksi kembali.
- Pesan error ditampilkan dengan bahasa ramah anak (misal, "Koneksi sedang tidak stabil, tapi kamu masih bisa bermain!").

## Di Luar Scope MVP

Fitur-fitur berikut tidak dimasukkan dalam rilis awal untuk membatasi waktu pengembangan:
- Mode Cari yang Salah (debugging mode).
- Dashboard untuk orang tua atau guru.
- Reset password khusus (hanya fitur logout).
- Verifikasi email saat daftar.
- Progressive Web App (PWA) atau offline capability.
- Multi-bahasa (hanya Bahasa Indonesia).
- Panel admin untuk mengelola pengguna atau konten.
- Leaderboard atau sistem kompetisi.
- Gamifikasi lanjutan (badge, achievement, dll.).

## Konten 6 Level

Setiap level menampilkan aktivitas sederhana dari kehidupan sehari-hari anak Indonesia. Data level disimpan dalam satu file: `src/data/levels.js`. Format setiap level harus memiliki id, name, description, emoji, dan steps array dengan id, text, dan order.

### Level 1: Mencuci Tangan
- Basahi tangan dengan air
- Oleskan sabun ke telapak
- Gosok telapak dan sela jari
- Bilas dengan air mengalir
- Keringkan dengan handuk

### Level 2: Menyikat Gigi
- Ambil sikat gigi dan pasta gigi
- Oleskan pasta ke bulu sikat
- Sikat semua permukaan gigi
- Berkumur dengan air
- Bersihkan sikat gigi

### Level 3: Membuat Teh Manis
- Siapkan air panas dalam cangkir
- Masukkan teh celup ke cangkir
- Tunggu 2–3 menit agar teh keluar
- Tambahkan gula sesuai selera
- Aduk sampai gula larut

### Level 4: Berangkat Sekolah
- Bangun dari tidur
- Mandi dan pakai seragam sekolah
- Sarapan pagi
- Bawa tas berisi buku dan alat tulis
- Berangkat ke sekolah

### Level 5: Menanam Biji
- Siapkan pot dan tanah gembur
- Taruh biji di tengah pot
- Tutup biji dengan tanah
- Siram dengan air secukupnya
- Taruh pot di tempat yang terang

### Level 6: Menyeberang Jalan
- Berhenti di tepi jalan
- Lihat ke arah kanan dan kiri
- Tunggu sampai aman (tidak ada kendaraan)
- Berjalan lurus ke seberang jalan
- Tiba di seberang dengan selamat

Setiap level memiliki 4–6 langkah, emoji representatif, dan deskripsi singkat.

## Alur Pengguna (User Flow)

1. **Beranda:** Pengguna melihat halaman selamat datang dengan maskot dan tombol utama.
2. **Pilih Masuk:** Pengguna dapat memilih "Masuk" (login), "Daftar" (sign-up), atau "Main sebagai Tamu".
3. **Autentikasi (Opsional):** Jika daftar/masuk, pengguna memasukkan email dan password. Firebase memverifikasi dan menyimpan akun.
4. **Profil/Selamat Datang:** Jika login, tampil profil dengan nama panggilan. Jika tamu, minta nama panggilan untuk personalisasi ("Halo, Dina!").
5. **Pilih Level:** Pengguna melihat 6 kartu level. Level 1 selalu terbuka, level berikutnya terbuka setelah level sebelumnya selesai.
6. **Mode Susun Urutan:** Pengguna menyaksikan 5–6 kartu langkah dalam urutan acak. Drag-and-drop untuk menyusun, lalu klik "Periksa".
7. **Umpan Balik:**
   - Jika benar: animasi bintang, pesan semangat, penjelasan algoritma, tombol "Lihat Versi Robot" atau "Lanjut ke Level Berikutnya".
   - Jika salah: petunjuk lembut untuk coba ulang.
8. **Versi Robot (Opsional):** Pengguna melihat urutan sebagai daftar bernomor, kemudian kembali ke level berikutnya.
9. **Selesai Level:** Bintang disimpan, progres diperbarui, pengguna kembali ke pilih level atau melanjutkan ke level berikutnya.
10. **Logout:** Pengguna dapat logout melalui menu profil dan kembali ke beranda.

## Panduan Visual dan Desain

### Gaya dan Tone
- **Ceria, hangat, dan ramah anak:** Warna-warna cerah namun tidak berlebihan. Maskot yang sederhana dan menggemaskan (bukan photorealistic).
- **Tidak generik:** Hindari gradien ungu standar, template AI, atau tampilan copy-paste. Pilih palet warna custom yang mencerminkan semangat edukasi anak.
- **Konsisten di semua halaman:** Satu set ikon, satu set warna, satu tipografi.

### Palet Warna
Contoh (dapat disesuaikan dengan custom color scheme):
- Warna Utama: Biru cerah untuk tombol dan highlight.
- Warna Sekunder: Hijau ceria untuk feedback positif.
- Warna Aksen: Oranye hangat untuk ikon atau elemen menarik perhatian.
- Warna Netral: Putih dan abu-abu terang untuk background.
- Warna Teks: Abu-abu gelap untuk teks utama, abu-abu medium untuk teks sekunder.

### Tipografi
- **Font Utama:** Baloo 2, Nunito, atau Fredoka (font yang ramah anak, mudah dibaca).
- **Fallback:** sans-serif generik (Arial, Helvetica).
- **Ukuran:**
  - Heading utama: 32–48px, bold.
  - Heading level: 24–28px, bold.
  - Body text (instruksi): 16–18px, normal.
  - Teks kartu: 14–16px, normal.
  - Label tombol: 16–18px, bold.

### Elemen UI
- **Tombol:** Minimal lebar 48px, tinggi 48px (ukuran target sentuh untuk anak). Sudut membulat 8–12px. Padding internal 12–16px. Margin antar tombol 8–12px.
- **Kartu Langkah:** Lebar responsif (90% container di mobile, max 120px di desktop). Tinggi 120–140px. Sudut membulat 12px. Padding 12px. Ikon/emoji 64–80px, teks 14px. Border tipis atau shadow halus.
- **Spacing:** Jarak vertikal antar elemen 16–24px. Jarak horizontal 12–16px. Padding halaman 16px di mobile, 24px di desktop.

### Animasi dan Interaksi
- **Drag-and-Drop:** Kartu berubah opacity saat diangkat, kembali normal saat diletakkan. Garis indikator (drop zone) muncul di posisi target.
- **Bintang Muncul:** Animasi scale dan rotate selama 0.6–0.8 detik.
- **Transisi Halaman:** Fade in/out 0.3 detik atau slide dari samping (opsional, hindari efek yang berlebihan).
- **Hover dan Focus:** Tombol mengubah shadow atau background color saat hover. Semua elemen interaktif memiliki outline atau border terlihat saat di-focus (keyboard).

### Aksesibilitas
- **Kontras Teks:** Rasio kontras minimal 4.5:1 (WCAG AA). Hindari kombinasi kontras rendah.
- **Label Tombol:** Semua tombol memiliki teks yang jelas atau atribut aria-label. Tidak bergantung pada icon saja.
- **Keyboard Navigation:** Semua elemen interaktif dapat diakses dengan Tab dan Enter. Focus indicator terlihat.
- **Tidak Bergantung Warna Saja:** Untuk menandakan benar/salah, gunakan icon, teks, atau pola visual tambahan, bukan hanya warna.
- **Text Sizing:** Perbolehkan pengguna memperbesar teks (zoom browser) tanpa layout berantakan.
- **Suara:** Konten suara (text-to-speech) optional, bukan wajib.

## Spesifikasi Teknis

### Stack Teknologi
- **Frontend:** Vite + JavaScript Vanilla (ES modules).
- **Styling:** CSS biasa dengan CSS Custom Properties (variables).
- **Interaksi Drag-and-Drop:** SortableJS (library ringan, cross-browser, mendukung touch).
- **Backend/Database:** Firebase (Authentication + Firestore).
- **Hosting:** Dokploy (disediakan panitia).

### Struktur Folder
```
langkah-pintar/
├── index.html
├── src/
│   ├── main.js                 # Entry point
│   ├── data/
│   │   └── levels.js           # Data 6 level
│   ├── auth.js                 # Firebase Auth wrapper
│   ├── storage.js              # Firebase Firestore wrapper + localStorage fallback
│   ├── components/
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── ProfilePage.js
│   │   ├── LevelSelectPage.js
│   │   ├── GamePage.js         # Mode susun urutan
│   │   └── FeedbackPage.js     # Umpan balik benar/salah
│   └── styles/
│       ├── main.css            # Reset + layout global
│       ├── variables.css       # CSS custom properties (warna, font, spacing)
│       ├── home.css
│       ├── game.css
│       └── feedback.css
├── public/
│   ├── assets/                 # Gambar, SVG, ikon
│   │   └── mascot.svg          # Maskot SVG
│   └── favicon.ico
├── docs/
│   ├── PRD.md                  # Dokumen ini
│   ├── AGENTS.md               # Aturan kerja AI Agent
│   └── prompt-log.md           # Log prompt terkurasi
├── .env                        # Environment variable (tidak di-commit)
├── .env.example                # Template environment variable
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js              # Konfigurasi Vite
└── README.md                   # Dokumentasi untuk pengguna dan juri
```

### Konfigurasi Firebase
Firebase config disimpan melalui environment variable untuk keamanan. File `.env` tidak di-commit ke Git. Template `.env.example` disimpan di repository tanpa nilai secret.

Hosting (Dokploy) akan membaca environment variable saat deployment untuk konfigurasi Firebase.

### Data Firestore
**Koleksi: users**
Setiap dokumen pengguna menyimpan nickname, progress per level, dan timestamp update terakhir. Aturan keamanan Firestore memastikan pengguna hanya bisa mengakses dan mengubah dokumen milik mereka sendiri.

### SEO Dasar
- **Title:** "Langkah Pintar - Belajar Algoritma untuk Anak SD"
- **Meta Description:** "Website edukasi interaktif untuk anak SD belajar algoritma melalui aktivitas sehari-hari."
- **Lang:** `<html lang="id">`
- **Meta Viewport:** `<meta name="viewport" content="width=device-width, initial-scale=1">`
- **Open Graph (opsional):** Meta property untuk sharing (title, description, image).

### Performa
- **Aset Gambar:** Kompresi PNG/SVG, hindari resolusi berlebihan. Gunakan SVG untuk ikon dan maskot.
- **Lazy Loading:** Gambar yang tidak langsung terlihat dapat di-lazy load (opsional untuk MVP kecil ini).
- **Bundle Size:** Hindari library berat. SortableJS (~26KB gzip) sudah ringan. Vanilla JS tanpa framework.
- **Caching:** Browser cache statis assets (CSS, JS, SVG) dengan header Cache-Control.

## Urutan Pengerjaan dan Milestone

Karena waktu terbatas (~1 hari), prioritas adalah game inti dengan localhost/localStorage dulu, baru login ditambahkan jika ada waktu sisa.

### Fase 1: Setup Awal (15–30 menit)
1. Repository GitHub public sudah dibuat dengan riwayat commit awal.
2. Kerangka Vite sudah dijalankan, struktur folder sudah ada.
3. Dokumen PRD.md dan AGENTS.md sudah disimpan di docs/.
4. Repository sudah dihubungkan ke Dokploy, deployment otomatis berfungsi.
5. Log prompt mulai dicatat di docs/prompt-log.md.

**Milestone:** Halaman kosong ter-deploy dengan link yang bisa dibuka.

### Fase 2: Data dan Game Inti (30–60 menit)
1. src/data/levels.js ditulis dengan 6 level lengkap.
2. src/components/HomePage.js: halaman beranda dengan maskot, tombol Mulai/Masuk/Tamu.
3. src/components/LevelSelectPage.js: grid/kartu pilih level dengan status kunci dan bintang.
4. src/components/GamePage.js: mode susun urutan dengan SortableJS, drag-and-drop, tombol Periksa.
5. src/components/FeedbackPage.js: umpan balik benar/salah dengan penjelasan algoritma dan Versi Robot.
6. src/storage.js: localStorage wrapper untuk menyimpan/membaca progres dan nama panggilan.
7. src/main.js: routing sederhana antar halaman menggunakan class atau fungsi.
8. Styling dasar dengan CSS variables (warna, font, spacing).

**Milestone:** Game 6 level berjalan di localhost dengan localStorage, tampilan rapi 360px dan desktop, semua level dapat dimainkan tanpa error.

### Fase 3: Polish Visual dan Testing (30–45 menit)
1. Palet warna custom diterapkan konsisten di semua halaman.
2. Font custom (Baloo 2, Nunito, atau Fredoka) dimuat dari Google Fonts atau bundled.
3. Animasi drag-and-drop, bintang muncul, transisi halaman ditambahkan.
4. Maskot SVG sederhana dibuat atau digunakan.
5. Testing drag-and-drop di layar sentuh (HP/tablet fisik jika ada).
6. Testing di berbagai ukuran layar (360px, 480px, 768px, desktop).
7. Aksesibilitas dasar: label tombol, kontras teks, keyboard navigation.

**Milestone:** Aplikasi ter-deploy dengan tampilan ceria dan tidak generik, semua 6 level dimainkan di HP tanpa masalah.

### Fase 4: Login dan Progres Cloud (30–60 menit, jika waktu ada)
1. src/auth.js: wrapper untuk Firebase Authentication dengan error handling.
2. src/storage.js: update untuk Firestore dengan fallback ke localStorage.
3. Halaman login/daftar dengan email dan password.
4. Profil pengguna login menampilkan nama panggilan.
5. Migrasi progres lokal ke akun saat user login/daftar.
6. Environment variable diisi di hosting.

**Milestone:** Pengguna dapat daftar, masuk, progres tersimpan di cloud, logout berfungsi. Mode tamu tetap berfungsi sebagai fallback.

### Fase 5: Dokumentasi Akhir dan Pengumpulan (15–30 menit)
1. README.md ditulis dengan deskripsi, link deploy, akun demo (jika login stabil), instruksi setup.
2. Jurnal prompt terkurasi (max 5 prompt terbaik) disusun dari log mentah.
3. Cek semua gerbang kelayakan: dokumen, repository, jurnal, link deploy yang berjalan.
4. Git push final.

**Milestone:** Semua gerbang kelayakan terpenuhi, siap dikumpulkan.

## Risiko dan Mitigasi

| Risiko | Penyebab | Mitigasi |
|--------|---------|----------|
| Fitur login belum stabil saat deadline | Kompleksitas Firebase + sinkronisasi data | Fokus game inti dulu, login jadi bonus. Jika belum stabil pukul 13.00, kirim versi tamu saja. |
| Drag-and-drop tidak jalan di touch device | Bug SortableJS atau implementasi salah | Test di HP/tablet fisik lebih awal, bukan menit terakhir. Fallback ke button ordering jika perlu. |
| Styling tidak rapi atau generik | Kurangnya waktu design atau kreativitas | Mulai dari palet warna + font dari awal. Hindari template default, gunakan CSS variables. |
| Koneksi Firebase gagal saat juri main | Network issue atau config key salah | Mode tamu selalu berfungsi, Firestore fallback ke localStorage. Test offline sendirian. |
| Deploy belum jalan saat deadline | Misconfigurasi Dokploy atau environment | Setup deploy dari awal (Fase 1), test setiap push, jangan tunggu akhir. |

## Kriteria Selesai (Definition of Done)

Aplikasi dianggap selesai jika:

1. **Fungsionalitas Lengkap:**
   - Semua 6 level dapat dimainkan sampai tuntas tanpa error di link deploy.
   - Mode tamu berfungsi penuh (bermain, menyimpan progres lokal, mode robot).
   - Mode login berfungsi (daftar, masuk, logout, progres tersimpan) atau di-skip jika waktu habis.
   - Drag-and-drop berfungsi di touch device dan mouse.
   - Umpan balik benar dan salah muncul dengan tepat.

2. **Tampilan dan UX:**
   - Layout rapi dan responsif di lebar 360px (mobile) dan 1920px (desktop).
   - Palet warna custom, font ramah anak, animasi halus.
   - Tombol dan elemen interaktif mudah digunakan anak-anak.
   - Tidak terlihat seperti template AI atau generik.

3. **Teknis dan Repository:**
   - Repository GitHub public dengan riwayat commit lengkap (sejak 5 Oktober 09.30 WIB).
   - Setiap fitur punya commit tersendiri dengan pesan deskriptif (feat:, fix:, style:, docs:).
   - Konfigurasi rahasia tidak di-commit (.gitignore bekerja).
   - Code rapi, fungsi kecil, komentar singkat seperlunya.

4. **Dokumentasi dan Gerbang Kelayakan:**
   - docs/PRD.md: lengkap sesuai template ini.
   - docs/AGENTS.md: lengkap dengan aturan kerja AI Agent.
   - docs/prompt-log.md: log prompt mentah (catatan real-time).
   - docs/jurnal-prompt.md: jurnal terkurasi max 5 prompt terbaik.
   - README.md: deskripsi, link deploy, akun demo, instruksi setup.

5. **Aksesibilitas Dasar:**
   - Semua tombol punya label teks atau aria-label.
   - Kontras teks minimal 4.5:1 (WCAG AA).
   - Keyboard navigation berfungsi (Tab, Enter, Arrow keys untuk drag-and-drop).
   - Tidak bergantung warna saja untuk benar/salah.

6. **Link Deploy Aktif:**
   - Aplikasi ter-hosting di Dokploy.
   - Link deployment dapat dibuka oleh juri tanpa login.
   - Semua fitur (6 level, feedback, robot view) dapat diakses langsung.

Jika Fase 4 (login) belum selesai saat deadline, aplikasi tetap dianggap lengkap asalkan Fase 2 (game inti + tamu) dan Fase 3 (visual) sudah sempurna.