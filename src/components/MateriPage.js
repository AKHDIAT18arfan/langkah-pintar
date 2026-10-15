export class MateriPage {
  constructor(appInstance) {
    this.app = appInstance;
  }

  render() {
    const materiHTML = `
      <div class="materi-page">
        <div class="materi-container">
          <!-- Back Button -->
          <button class="btn-back" onclick="window.APP.navigate('home')">
            ← Kembali ke Beranda
          </button>

          <!-- Hero Section -->
          <section class="materi-hero">
            <h1 class="materi-title">🤖 Apa Itu Pseudocode?</h1>
            <p class="materi-subtitle">
              Belajar menulis algoritma seperti seorang programmer! 
              Pseudocode adalah "kode semu" yang membantu kita merancang program sebelum menulis kode sesungguhnya.
            </p>
          </section>

          <!-- Main Content -->
          <section class="materi-content">
            <!-- Definition Section -->
            <div class="materi-section">
              <h2 class="section-title">📖 Pengertian Pseudocode</h2>
              <div class="section-card">
                <p>
                  <strong>Pseudocode</strong> adalah cara menggambarkan algoritma komputer secara informal 
                  dengan bahasa yang mudah dimengerti manusia. Berbeda dengan kode program sebenarnya yang 
                  terikat aturan sintaks, pseudocode ditulis bebas tanpa pedoman ketat.
                </p>
                <p class="highlight-text">
                  💡 <strong>Analogi:</strong> Pseudocode ibarat "sketsa" sebelum membangun rumah. 
                  Ia menjadi kerangka awal untuk merancang program dengan logika yang jelas.
                </p>
              </div>
            </div>

            <!-- Characteristics Section -->
            <div class="materi-section">
              <h2 class="section-title">✨ Ciri-Ciri Pseudocode</h2>
              <div class="characteristics-grid">
                <div class="char-card">
                  <div class="char-icon">📝</div>
                  <h3>Bahasa Sederhana</h3>
                  <p>Menggunakan bahasa Inggris atau sehari-hari yang mudah dipahami</p>
                </div>
                <div class="char-card">
                  <div class="char-icon">🎯</div>
                  <h3>Fokus Algoritma</h3>
                  <p>Menekankan logika dan alur, bukan detail sintaks</p>
                </div>
                <div class="char-card">
                  <div class="char-icon">🌍</div>
                  <h3>Lintas Platform</h3>
                  <p>Tidak terikat bahasa pemrograman tertentu</p>
                </div>
                <div class="char-card">
                  <div class="char-icon">⚙️</div>
                  <h3>Mirip Pemrograman</h3>
                  <p>Menggunakan kata kunci seperti IF, FOR, WHILE</p>
                </div>
              </div>
            </div>

            <!-- Keywords Section -->
            <div class="materi-section">
              <h2 class="section-title">🔑 Kata Kunci Umum dalam Pseudocode</h2>
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
              <h2 class="section-title">💻 Contoh Pseudocode</h2>
              
              <h3 class="example-title">Contoh 1: Menghitung Luas Lingkaran</h3>
              <div class="pseudocode-box">
                <pre><code>MULAI
  INPUT radius
  luas = 3.14 × radius × radius
  OUTPUT luas
SELESAI</code></pre>
              </div>

              <h3 class="example-title mt-3">Contoh 2: Urutan Kegiatan Harian (Seperti Game Kita!)</h3>
              <div class="pseudocode-box">
                <pre><code>MULAI
  UNTUK setiap kegiatan dalam daftar:
    JIKA urutan benar MAKA
      OUTPUT "Benar! ⭐"
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
      OUTPUT "Password valid! ✅"
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
              <h2 class="section-title">🎁 Manfaat Pseudocode</h2>
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
              <h2 class="section-title">💪 Tips Menulis Pseudocode yang Baik</h2>
              <div class="tips-grid">
                <div class="tip-card">
                  <div class="tip-emoji">📌</div>
                  <h3>Pahami Tujuan Dulu</h3>
                  <p>Tanyakan pada diri sendiri: "Apa yang ingin saya capai?"</p>
                </div>
                <div class="tip-card">
                  <div class="tip-emoji">📝</div>
                  <h3>Gunakan Bahasa Sederhana</h3>
                  <p>Tulis seperti menjelaskan kepada teman, bukan komputer</p>
                </div>
                <div class="tip-card">
                  <div class="tip-emoji">⬆️</div>
                  <h3>Kapitalisasi Perintah</h3>
                  <p>Tulis IF, FOR, WHILE dengan huruf besar agar terlihat jelas</p>
                </div>
                <div class="tip-card">
                  <div class="tip-emoji">📊</div>
                  <h3>Gunakan Indentasi</h3>
                  <p>Berikan jarak/indent pada blok kode untuk struktur yang rapi</p>
                </div>
                <div class="tip-card">
                  <div class="tip-emoji">✂️</div>
                  <h3>Satu Instruksi per Baris</h3>
                  <p>Setiap baris satu aksi, jangan membuat baris terlalu panjang</p>
                </div>
                <div class="tip-card">
                  <div class="tip-emoji">✅</div>
                  <h3>Periksa Ulang</h3>
                  <p>Pastikan logika benar dan semua kasus tercakup</p>
                </div>
              </div>
            </div>

            <!-- Connection Section -->
            <div class="materi-section highlight-section">
              <h2 class="section-title">🎮 Hubungan dengan Game Langkah Pintar</h2>
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
                  yang harus dijalankan dalam urutan yang benar! 🚀
                </p>
              </div>
            </div>

            <!-- CTA Section -->
            <div class="materi-cta">
              <h2>Siap Bermain? 🎯</h2>
              <p>Sekarang Anda sudah memahami pseudocode. Mari kembali ke game dan terapkan ilmu ini!</p>
              <button class="btn-play" onclick="window.APP.navigate('levels')">
                Mulai Bermain Sekarang ✨
              </button>
            </div>
          </section>
        </div>
      </div>
    `;

    return materiHTML;
  }

  addStyles() {
    const styles = `
      <style>
        .materi-page {
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2a2a2a 100%);
          min-height: 100vh;
          padding: 2rem 1rem;
        }

        .materi-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .btn-back {
          display: inline-block;
          margin-bottom: 2rem;
          padding: 0.8rem 1.5rem;
          background: var(--dark-card);
          color: var(--primary);
          border: 2px solid var(--primary);
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s;
          font-size: 0.95rem;
        }

        .btn-back:hover {
          background: var(--primary);
          color: var(--text-light);
        }

        .materi-hero {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeInDown 0.5s ease-out;
        }

        .materi-title {
          font-size: 2.5rem;
          color: var(--primary);
          text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.5);
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .materi-subtitle {
          font-size: 1.2rem;
          color: var(--text-light);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .materi-content {
          animation: fadeInUp 0.5s ease-out;
        }

        .materi-section {
          margin-bottom: 2.5rem;
          animation: slideInLeft 0.5s ease-out;
        }

        .section-title {
          font-size: 1.8rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
          border-bottom: 3px solid var(--accent);
          padding-bottom: 0.5rem;
        }

        .section-card {
          background: var(--dark-card);
          border: 3px solid var(--primary);
          border-radius: 4px;
          padding: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .section-card p {
          margin-bottom: 1rem;
          color: var(--text-light);
          line-height: 1.8;
        }

        .highlight-text {
          background: rgba(255, 107, 53, 0.1);
          padding: 1rem;
          border-left: 4px solid var(--accent);
          border-radius: 3px;
          font-size: 1rem;
        }

        .characteristics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .char-card {
          background: linear-gradient(135deg, var(--dark-card) 0%, #3d3d3d 100%);
          border: 3px solid var(--primary);
          border-radius: 4px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s;
          box-shadow: var(--shadow-md);
        }

        .char-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: var(--shadow-lg);
        }

        .char-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .char-card h3 {
          font-size: 1.1rem;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }

        .char-card p {
          font-size: 0.95rem;
          color: var(--text-light);
          opacity: 0.9;
        }

        .keywords-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .keyword-card {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          border-radius: 4px;
          padding: 1rem;
          text-align: center;
          box-shadow: var(--shadow-md);
          transition: all 0.3s;
        }

        .keyword-card:hover {
          transform: scale(1.05);
          box-shadow: var(--shadow-lg);
        }

        .keyword-name {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-light);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .keyword-desc {
          font-size: 0.9rem;
          color: var(--text-light);
          opacity: 0.95;
        }

        .pseudocode-box {
          background: #0a0a0a;
          border: 2px solid var(--accent);
          border-radius: 4px;
          padding: 1.5rem;
          overflow-x: auto;
          margin: 1rem 0;
          font-family: 'Courier New', monospace;
          font-size: 1rem;
          line-height: 1.8;
        }

        .pseudocode-box code {
          color: var(--accent);
          font-weight: 500;
        }

        .pseudocode-box pre {
          margin: 0;
          color: var(--accent);
        }

        .example-title {
          font-size: 1.2rem;
          color: var(--primary);
          margin-top: 1.5rem;
          margin-bottom: 0.8rem;
        }

        .mt-3 {
          margin-top: 1.5rem;
        }

        .mt-2 {
          margin-top: 1rem;
        }

        .benefits-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .benefit-item {
          display: flex;
          gap: 1.5rem;
          background: var(--dark-card);
          border: 3px solid var(--primary);
          border-radius: 4px;
          padding: 1.5rem;
          align-items: flex-start;
          box-shadow: var(--shadow-md);
          transition: all 0.3s;
        }

        .benefit-item:hover {
          transform: translateX(10px);
          border-color: var(--accent);
        }

        .benefit-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          color: var(--text-light);
          border-radius: 4px;
          font-weight: 700;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .benefit-item h3 {
          font-size: 1.2rem;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }

        .benefit-item p {
          font-size: 0.95rem;
          color: var(--text-light);
          margin: 0;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .tip-card {
          background: linear-gradient(135deg, var(--dark-card) 0%, #3d3d3d 100%);
          border: 3px dashed var(--primary);
          border-radius: 4px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s;
          box-shadow: var(--shadow-md);
        }

        .tip-card:hover {
          border-style: solid;
          border-color: var(--accent);
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .tip-emoji {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .tip-card h3 {
          font-size: 1.1rem;
          color: var(--accent);
          margin-bottom: 0.8rem;
        }

        .tip-card p {
          font-size: 0.95rem;
          color: var(--text-light);
          margin: 0;
        }

        .highlight-section {
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%);
          border: 3px solid var(--primary);
          border-radius: 4px;
          padding: 2rem;
        }

        .connection-box {
          background: var(--dark-card);
          border: 2px dashed var(--accent);
          border-radius: 4px;
          padding: 1.5rem;
          font-size: 1rem;
        }

        .connection-list {
          list-style: none;
          margin: 1rem 0;
          padding: 0;
        }

        .connection-list li {
          padding: 0.8rem 0;
          padding-left: 2rem;
          position: relative;
          color: var(--text-light);
        }

        .connection-list li::before {
          content: '🎮';
          position: absolute;
          left: 0;
        }

        .materi-cta {
          text-align: center;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          border-radius: 4px;
          padding: 2rem;
          margin-top: 3rem;
          box-shadow: var(--shadow-lg);
        }

        .materi-cta h2 {
          color: var(--text-light);
          font-size: 2rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
        }

        .materi-cta p {
          color: var(--text-light);
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }

        .btn-play {
          display: inline-block;
          padding: 1rem 2rem;
          background: var(--text-light);
          color: var(--primary);
          border: 3px solid var(--text-light);
          border-radius: 4px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .btn-play:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .materi-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .characteristics-grid,
          .keywords-grid,
          .tips-grid {
            grid-template-columns: 1fr;
          }

          .benefit-item {
            flex-direction: column;
            text-align: center;
          }

          .benefit-number {
            width: 100%;
          }

          .materi-cta {
            padding: 1.5rem;
          }

          .materi-cta h2 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .materi-page {
            padding: 1rem;
          }

          .materi-title {
            font-size: 1.5rem;
          }

          .section-title {
            font-size: 1.2rem;
          }

          .pseudocode-box {
            font-size: 0.85rem;
            padding: 1rem;
          }
        }
      </style>
    `;

    if (!document.querySelector('style[data-materi]')) {
      const styleTag = document.createElement('style');
      styleTag.setAttribute('data-materi', 'true');
      styleTag.innerHTML = styles;
      document.head.appendChild(styleTag);
    }
  }
}