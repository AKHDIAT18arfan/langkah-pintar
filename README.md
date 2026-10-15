# Langkah Pintar

Website edukasi interaktif yang mengajarkan konsep algoritma kepada anak SD melalui aktivitas menyusun urutan langkah sehari-hari.

## 🎮 Cara Bermain

1. Kunjungi link deployment (peserta14.m1sec.my.id)
2. Klik "Mulai Belajar"
3. Masukkan nama kamu
4. Pilih level (1-6)
5. Susun kartu langkah dalam urutan yang benar dengan drag-and-drop
6. Klik "Periksa" untuk lihat feedback
7. Jika benar, lihat "Versi Robot" dan lanjut level berikutnya

## 📚 6 Level

1. **Mencuci Tangan** 🧼
2. **Menyikat Gigi** 🪥
3. **Membuat Teh Manis** 🫖
4. **Berangkat Sekolah** 🎒
5. **Menanam Biji** 🌱
6. **Menyeberang Jalan** 🚦

## 🛠️ Teknologi

- Vite + Vanilla JavaScript
- CSS Custom Properties
- SortableJS (drag-and-drop)
- localStorage (penyimpanan progres)
- Firebase (untuk login, fase 4)

## 📖 Dokumentasi

- `docs/PRD.md` - Spesifikasi produk lengkap
- `docs/AGENTS.md` - Aturan kerja AI Agent
- `docs/prompt-log.md` - Log prompt terkurasi

## 🚀 Deploy

Aplikasi di-deploy otomatis di Dokploy setiap kali push ke GitHub.

**Link:** peserta14.m1sec.my.id

## 👨‍💻 Setup Lokal

```bash
git clone https://github.com/AKHDIAT18arfan/langkah-pintar.git
cd langkah-pintar
npm install
npm install sortablejs
npm run dev
```

Buka http://localhost:5173

## 📝 Proses Vibe Coding

Aplikasi ini dikembangkan dengan vibe coding (AI-assisted development) menggunakan Claude. Setiap fitur dikerjakan satu per satu, ditest, di-commit, lalu di-deploy otomatis. Proses tercatat di docs/prompt-log.md.