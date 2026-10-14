export class HomePage {
  constructor(onNavigate) {
    this.onNavigate = onNavigate;
  }

  render() {
    const container = document.getElementById('app');
    container.innerHTML = `
      <div class="home-container">
        <div class="home-content">
          <div class="mascot" style="font-size: 80px; margin-bottom: 20px;">🤖</div>
          <h1>Langkah Pintar</h1>
          <p class="tagline">Belajar Berpikir seperti Robot!</p>
          
          <div class="intro-text">
            <p>Mari belajar algoritma melalui aktivitas sehari-hari. Susun langkah-langkah dengan benar dan lihat bagaimana robot mengikuti perintah mu.</p>
          </div>

          <div class="home-buttons">
            <button class="btn-primary btn-large" onclick="window.APP.navigate('askName')">
              Mulai Belajar ✨
            </button>
          </div>
        </div>
      </div>
    `;

    this.addStyles();
  }

  addStyles() {
    if (!document.getElementById('home-styles')) {
      const style = document.createElement('style');
      style.id = 'home-styles';
      style.textContent = `
        .home-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          color: white;
          text-align: center;
        }

        .home-content {
          max-width: 500px;
          width: 100%;
        }

        .home-content h1 {
          color: white;
          font-size: 48px;
          margin-bottom: 10px;
        }

        .tagline {
          font-size: 20px;
          opacity: 0.9;
          margin-bottom: 30px;
        }

        .intro-text {
          background: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 30px;
          font-size: 16px;
          line-height: 1.6;
        }

        .home-buttons {
          display: flex;
          gap: 15px;
          flex-direction: column;
        }

        .btn-large {
          padding: 16px 24px !important;
          font-size: 18px !important;
          height: auto !important;
          min-height: 56px !important;
          border-radius: 12px !important;
          font-weight: 700 !important;
        }

        .btn-primary {
          background-color: #FF6B6B;
          color: white;
        }

        .btn-primary:hover {
          background-color: #EE5A52;
          transform: translateY(-3px);
        }

        @media (max-width: 480px) {
          .home-content h1 {
            font-size: 36px;
          }
          .mascot {
            font-size: 60px !important;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
}