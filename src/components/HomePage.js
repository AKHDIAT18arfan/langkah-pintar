export class HomePage {
  constructor(appInstance) {
    this.app = appInstance;
  }

  render() {
    return `
      <div class="home-page">
        <div class="home-grid-bg"></div>
        <div class="home-content">
          <div class="home-header">
            <div class="home-logo">
              <span class="logo-emoji">🤖</span>
              <span class="logo-text">LANGKAH PINTAR</span>
            </div>
            <h1>Belajar Algoritma untuk Anak SD</h1>
            <p class="home-subtitle">
              Pelajari cara kerja robot dengan menyusun langkah-langkah yang benar!
            </p>
          </div>

          <div class="home-features">
            <div class="feature-card">
              <span class="feature-emoji">🧩</span>
              <h3>Drag & Drop</h3>
              <p>Susun langkah-langkah dengan mudah</p>
            </div>
            <div class="feature-card">
              <span class="feature-emoji">⭐</span>
              <h3>Dapatkan Bintang</h3>
              <p>Raih 3 bintang di setiap level</p>
            </div>
            <div class="feature-card">
              <span class="feature-emoji">🚀</span>
              <h3>Tingkatkan Skill</h3>
              <p>Belajar tentang algoritma dan logika</p>
            </div>
          </div>

          <div class="home-cta">
            <button class="btn-start" onclick="window.APP.navigate('askName')">
              🎮 MULAI BERMAIN
            </button>
            <button class="btn-learn" onclick="window.APP.navigate('materi')">
              📖 PELAJARI MATERI
            </button>
          </div>

          <div class="home-levels-preview">
            <h2>6 Level Seru Menunggu</h2>
            <div class="levels-preview-grid">
              <div class="preview-item">🧼 Mencuci Tangan</div>
              <div class="preview-item">🪥 Menyikat Gigi</div>
              <div class="preview-item">🫖 Membuat Teh</div>
              <div class="preview-item">🎒 Berangkat Sekolah</div>
              <div class="preview-item">🌱 Menanam Biji</div>
              <div class="preview-item">🚦 Menyeberang Jalan</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  addStyles() {
    if (!document.getElementById('home-page-styles')) {
      const style = document.createElement('style');
      style.id = 'home-page-styles';
      style.textContent = `
        .home-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: var(--spacing-lg);
          position: relative;
          overflow-x: hidden;
        }

        .home-grid-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(90deg, transparent 24%, rgba(255, 107, 53, 0.03) 25%, rgba(255, 107, 53, 0.03) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.03) 75%, rgba(255, 107, 53, 0.03) 76%, transparent 77%, transparent),
            linear-gradient(0deg, transparent 24%, rgba(255, 107, 53, 0.03) 25%, rgba(255, 107, 53, 0.03) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.03) 75%, rgba(255, 107, 53, 0.03) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
        }

        .home-content {
          position: relative;
          z-index: 1;
          max-width: 1000px;
          width: 100%;
          text-align: center;
        }

        .home-header {
          margin-bottom: var(--spacing-2xl);
          animation: fadeInDown 0.6s ease-out;
        }

        .home-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
          animation: scaleIn 0.6s ease-out;
        }

        .logo-emoji {
          font-size: 3.5rem;
          animation: bounce 2s infinite;
        }

        .logo-text {
          font-size: 1.8rem;
          font-weight: var(--font-bold);
          color: var(--primary);
          letter-spacing: 2px;
          text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.7);
        }

        .home-header h1 {
          font-size: 3rem;
          margin-bottom: var(--spacing-md);
          animation: fadeInDown 0.7s ease-out 0.1s both;
        }

        .home-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 0.7s ease-out 0.2s both;
        }

        .home-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
          animation: fadeInUp 0.7s ease-out 0.3s both;
        }

        .feature-card {
          background: linear-gradient(135deg, var(--dark-card) 0%, var(--dark-card-light) 100%);
          border: var(--border-width) solid var(--primary);
          border-radius: var(--border-radius);
          padding: var(--spacing-lg);
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-md);
          position: relative;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: var(--border-width);
          background: linear-gradient(90deg, var(--primary), var(--accent), transparent);
          border-radius: var(--border-radius) var(--border-radius) 0 0;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent);
        }

        .feature-emoji {
          font-size: 2.5rem;
          display: block;
          margin-bottom: var(--spacing-md);
          animation: bounce 2s infinite;
        }

        .feature-card h3 {
          margin-bottom: var(--spacing-sm);
        }

        .feature-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          margin-bottom: 0;
        }

        .home-cta {
          display: flex;
          gap: var(--spacing-lg);
          justify-content: center;
          margin-bottom: var(--spacing-2xl);
          flex-wrap: wrap;
          animation: fadeInUp 0.7s ease-out 0.4s both;
        }

        .btn-start,
        .btn-learn {
          padding: 1.4rem 3rem;
          font-size: 1.1rem;
          font-weight: var(--font-bold);
          border: var(--border-width) solid var(--primary);
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: all var(--transition-normal);
          text-transform: uppercase;
          letter-spacing: 2px;
          box-shadow: var(--shadow-lg);
          min-width: 250px;
          position: relative;
          overflow: hidden;
        }

        .btn-start {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          color: var(--text-light);
        }

        .btn-start:hover {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .btn-learn {
          background: var(--dark-card);
          color: var(--accent);
          border-color: var(--accent);
        }

        .btn-learn:hover {
          background: var(--accent);
          color: var(--text-light);
          border-color: var(--accent);
        }

        .home-levels-preview {
          background: linear-gradient(135deg, var(--dark-card) 0%, var(--dark-card-light) 100%);
          border: var(--border-width) solid var(--primary);
          border-radius: var(--border-radius);
          padding: var(--spacing-lg);
          box-shadow: var(--shadow-lg);
          animation: fadeInUp 0.7s ease-out 0.5s both;
        }

        .home-levels-preview h2 {
          margin-bottom: var(--spacing-lg);
        }

        .levels-preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: var(--spacing-md);
        }

        .preview-item {
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 107, 53, 0.05) 100%);
          border: var(--border-width-sm) dashed var(--primary);
          border-radius: var(--border-radius);
          padding: var(--spacing-md);
          color: var(--text-light);
          font-weight: var(--font-semi);
          transition: all var(--transition-normal);
          cursor: default;
        }

        .preview-item:hover {
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(255, 107, 53, 0.1) 100%);
          border-color: var(--accent);
        }

        @media (max-width: 768px) {
          .home-header h1 {
            font-size: 2rem;
          }

          .home-subtitle {
            font-size: 1rem;
          }

          .home-features {
            grid-template-columns: 1fr;
          }

          .home-cta {
            flex-direction: column;
          }

          .btn-start,
          .btn-learn {
            width: 100%;
            min-width: auto;
            padding: 1.2rem 2rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .home-page {
            padding: var(--spacing-md);
          }

          .logo-emoji {
            font-size: 2.5rem;
          }

          .logo-text {
            font-size: 1.3rem;
          }

          .home-header h1 {
            font-size: 1.6rem;
          }

          .home-subtitle {
            font-size: 0.95rem;
          }

          .home-features {
            gap: var(--spacing-md);
          }

          .feature-card {
            padding: var(--spacing-md);
          }

          .feature-emoji {
            font-size: 2rem;
          }

          .btn-start,
          .btn-learn {
            padding: 1rem 1.5rem;
            font-size: 0.9rem;
          }

          .home-levels-preview {
            padding: var(--spacing-md);
          }

          .levels-preview-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
}