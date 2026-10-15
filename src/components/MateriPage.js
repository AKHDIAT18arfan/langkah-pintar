// src/components/MateriPage.js
export class MateriPage {
  constructor(appInstance) {
    this.app = appInstance;
  }

  render() {
    return `
      <div class="materi-page">
        <div class="materi-container">
          <!-- Back Button -->
          <button class="btn-back" onclick="window.APP.navigate('home')">
            ← Kembali ke Beranda
          </button>

          <!-- Hero Section -->
          <section class="materi-hero">
            <div class="materi-hero-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>
            </div>
            <h1 class="materi-title">Apa Itu Pseudocode?</h1>
            <p class="materi-subtitle">
              Belajar menulis algoritma seperti seorang programmer! 
              Pseudocode adalah "kode semu" yang membantu kita merancang program sebelum menulis kode sesungguhnya.
            </p>
          </section>

          <!-- Main Content -->
          <section class="materi-content">
            <!-- Definition Section -->
            <div class="materi-section">
              <h2 class="section-title">Pengertian Pseudocode</h2>
              <div class="section-card">
                <p>
                  <strong>Pseudocode</strong> adalah cara menggambarkan algoritma komputer secara informal 
                  dengan bahasa yang mudah dimengerti manusia. Berbeda dengan kode program sebenarnya yang 
                  terikat aturan sintaks, pseudocode ditulis bebas tanpa pedoman ketat.
                </p>
                <div class="highlight-text">
                  <strong>Analogi:</strong> Pseudocode ibarat "sketsa" sebelum membangun rumah. 
                  Ia menjadi kerangka awal untuk merancang program dengan logika yang jelas.
                </div>
              </div>
            </div>

            <!-- Characteristics Section -->
            <div class="materi-section">
              <h2 class="section-title">Ciri-Ciri Pseudocode</h2>
              <div class="characteristics-grid">
                <div class="char-card">
                  <div class="char-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  </div>
                  <h3>Bahasa Sederhana</h3>
                  <p>Menggunakan bahasa Inggris atau sehari-hari yang mudah dipahami</p>
                </div>
                <div class="char-card">
                  <div class="char-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  </div>
                  <h3>Fokus Algoritma</h3>
                  <p>Menekankan logika dan alur, bukan detail sintaks</p>
                </div>
                <div class="char-card">
                  <div class="char-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  </div>
                  <h3>Lintas Platform</h3>
                  <p>Tidak terikat bahasa pemrograman tertentu</p>
                </div>
                <div class="char-card">
                  <div class="char-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  </div>
                  <h3>Mirip Pemrograman</h3>
                  <p>Menggunakan kata kunci seperti IF, FOR, WHILE</p>
                </div>
              </div>
            </div>

            <!-- Keywords Section -->
            <div class="materi-section">
              <h2 class="section-title">Kata Kunci Umum dalam Pseudocode</h2>
              <div class="keywords-grid">
                <div class="keyword-card">
                  <div class="keyword-name">INPUT</div>
                  <div class="keyword-desc">Menerima data dari pengguna</div>
                </div>
                <div class="keyword-card">
                  <div class="keyword-name">OUTPUT</div>
                  <div class="keyword-desc">Menampilkan hasil/keluaran</div>
                </div>
                <div class="keyword-card">
                  <div class="keyword-name">IF-THEN-ELSE</div>
                  <div class="keyword-desc">Pengambilan keputusan/kondisi</div>
                </div>
                <div class="keyword-card">
                  <div class="keyword-name">FOR</div>
                  <div class="keyword-desc">Pengulangan dengan jumlah tertentu</div>
                </div>
                <div class="keyword-card">
                  <div class="keyword-name">WHILE</div>
                  <div class="keyword-desc">Pengulangan selama kondisi terpenuhi</div>
                </div>
                <div class="keyword-card">
                  <div class="keyword-name">SET/ASSIGN</div>
                  <div class="keyword-desc">Memberikan nilai ke variabel</div>
                </div>
              </div>
            </div>

            <!-- Example Section -->
            <div class="materi-section">
              <h2 class="section-title">Contoh Pseudocode</h2>
              
              <h3 class="example-title">Contoh 1: Menghitung Luas Lingkaran</h3>
              <div class="pseudocode-box">
                <pre><code>MULAI
  INPUT radius
  luas = 3.14 × radius × radius
  OUTPUT luas
SELESAI</code></pre>
              </div>

              <h3 class="example-title mt-3">Contoh 2: Urutan Kegiatan Harian</h3>
              <div class="pseudocode-box">
                <pre><code>MULAI
  UNTUK setiap kegiatan dalam daftar:
    JIKA urutan benar MAKA
      OUTPUT "Benar!"
    JIKA TIDAK
      OUTPUT "Coba lagi..."
    AKHIR JIKA
  AKHIR UNTUK
SELESAI</code></pre>
              </div>

              <h3 class="example-title mt-3">Contoh 3: Memvalidasi Password</h3>
              <div class="pseudocode-box">
                <pre><code>MULAI
  INPUT password
  IF panjang password >= 8 THEN
    IF password mengandung angka THEN
      OUTPUT "Password valid!"
    ELSE
      OUTPUT "Password harus punya angka"
    ENDIF
  ELSE
    OUTPUT "Password minimal 8 karakter"
  ENDIF
SELESAI</code></pre>
              </div>
            </div>

            <!-- Benefits Section -->
            <div class="materi-section">
              <h2 class="section-title">Manfaat Pseudocode</h2>
              <div class="benefits-list">
                <div class="benefit-item">
                  <span class="benefit-number">1</span>
                  <div>
                    <h3>Perencanaan Awal</h3>
                    <p>Membantu merencanakan logika program sebelum menulis kode sebenarnya</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="benefit-number">2</span>
                  <div>
                    <h3>Mudah Dipahami</h3>
                    <p>Programmer dan non-programmer bisa memahami algoritma dengan mudah</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="benefit-number">3</span>
                  <div>
                    <h3>Deteksi Kesalahan</h3>
                    <p>Menemukan logika yang kurang tepat lebih awal, sebelum coding</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="benefit-number">4</span>
                  <div>
                    <h3>Kolaborasi Tim</h3>
                    <p>Memudahkan komunikasi antar developer yang berbeda latar belakang</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tips Section -->
            <div class="materi-section">
              <h2 class="section-title">Tips Menulis Pseudocode yang Baik</h2>
              <div class="tips-grid">
                <div class="tip-card">
                  <div class="tip-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <h3>Pahami Tujuan Dulu</h3>
                  <p>Tanyakan pada diri sendiri: "Apa yang ingin saya capai?"</p>
                </div>
                <div class="tip-card">
                  <div class="tip-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </div>
                  <h3>Gunakan Bahasa Sederhana</h3>
                  <p>Tulis seperti menjelaskan kepada teman, bukan komputer</p>
                </div>
                <div class="tip-card">
                  <div class="tip-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
                  </div>
                  <h3>Kapitalisasi Perintah</h3>
                  <p>Tulis IF, FOR, WHILE dengan huruf besar agar terlihat jelas</p>
                </div>
                <div class="tip-card">
                  <div class="tip-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>
                  </div>
                  <h3>Gunakan Indentasi</h3>
                  <p>Berikan jarak/indent pada blok kode untuk struktur yang rapi</p>
                </div>
                <div class="tip-card">
                  <div class="tip-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>
                  </div>
                  <h3>Satu Instruksi per Baris</h3>
                  <p>Setiap baris satu aksi, jangan membuat baris terlalu panjang</p>
                </div>
                <div class="tip-card">
                  <div class="tip-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h3>Periksa Ulang</h3>
                  <p>Pastikan logika benar dan semua kasus tercakup</p>
                </div>
              </div>
            </div>

            <!-- Connection Section -->
            <div class="materi-section highlight-section">
              <h2 class="section-title">Hubungan dengan Game Langkah Pintar</h2>
              <div class="connection-box">
                <p>
                  Dalam game <strong>Langkah Pintar</strong>, Anda belajar pseudocode dengan cara yang 
                  menyenangkan! Setiap level menampilkan:
                </p>
                <ul class="connection-list">
                  <li><strong>Kegiatan Harian</strong> → Algoritma nyata dalam kehidupan</li>
                  <li><strong>Urutan Langkah</strong> → Instruksi yang harus diatur (seperti pseudocode!)</li>
                  <li><strong>Robot View</strong> → Melihat pseudocode dari perspektif komputer</li>
                  <li><strong>Feedback</strong> → Penjelasan algoritma saat Anda selesai</li>
                </ul>
                <p class="mt-2">
                  Dengan bermain, Anda sudah memahami konsep pseudocode seperti sekumpulan perintah 
                  yang harus dijalankan dalam urutan yang benar!
                </p>
              </div>
            </div>

            <!-- CTA Section -->
            <div class="materi-cta">
              <h2>Siap Bermain?</h2>
              <p>Sekarang Anda sudah memahami pseudocode. Mari kembali ke game dan terapkan ilmu ini!</p>
              <button class="btn-play" onclick="window.APP.navigate('levels')">
                Mulai Bermain Sekarang
              </button>
            </div>
          </section>
        </div>
      </div>
    `;
  }

  addStyles() {
    // Gaya sudah dimuat secara terpisah via src/styles/materi.css
  }
}