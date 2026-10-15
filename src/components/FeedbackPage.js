export class FeedbackPage {
  constructor(appInstance) {
    this.app = appInstance;
  }

  render(data) {
    const { isCorrect, levelId } = data;

    return `
      <div class="feedback-page">
        <div class="feedback-container">
          ${isCorrect ? `
            <div class="feedback-correct">
              <div class="stars-celebration">
                <span class="star-icon">⭐</span>
                <span class="star-icon">⭐</span>
                <span class="star-icon">⭐</span>
              </div>
              <h2>Sempurna! 🎉</h2>
              <p class="feedback-message">Urutan langkah-langkahmu sudah benar!</p>
              <div class="feedback-explanation">
                <p><strong>Tahukah kamu?</strong></p>
                <p>Urutan langkah yang benar disebut <strong>ALGORITMA</strong>. Algoritma adalah langkah-langkah teratur yang membuat komputer (atau robot) bisa menyelesaikan pekerjaan dengan sempurna.</p>
              </div>
              <div class="feedback-buttons">
                <button class="btn-robot" onclick="window.APP.showRobotView()">📖 Lihat Versi Robot</button>
                <button class="btn-next" onclick="window.APP.nextLevel()">Lanjut Level →</button>
              </div>
            </div>
          ` : `
            <div class="feedback-wrong">
              <div class="think-emoji">🤔</div>
              <h2>Coba Lagi</h2>
              <p class="feedback-message">Urutan-mu masih belum tepat.</p>
              <div class="feedback-hint">
                <p>💡 <strong>Petunjuk:</strong> Perhatikan lagi urutan langkah-langkahnya. Apa yang harus dilakukan lebih dulu?</p>
              </div>
              <div class="feedback-buttons">
                <button class="btn-retry" onclick="window.APP.navigate('game', '${levelId}')">🔄 Coba Lagi</button>
                <button class="btn-back" onclick="window.APP.navigate('levels')">← Kembali</button>
              </div>
            </div>
          `}
        </div>
      </div>
    `;
  }

  addStyles() {
    if (!document.getElementById('feedback-page-styles')) {
      const style = document.createElement('style');
      style.id = 'feedback-page-styles';
      style.textContent = `
        .feedback-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 2rem;
          position: relative;
        }

        .feedback-container {
          position: relative;
          z-index: 1;
          max-width: 600px;
          width: 100%;
        }

        .feedback-correct,
        .feedback-wrong {
          padding: 2rem;
          text-align: center;
        }

        .stars-celebration {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          font-size: 3.5rem;
        }

        .think-emoji {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .feedback-message {
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }

        .feedback-explanation,
        .feedback-hint {
          padding: 1rem;
          border-left: 4px solid;
          margin: 1.5rem 0;
          text-align: left;
          font-size: 1rem;
          line-height: 1.7;
        }

        .feedback-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-robot,
        .btn-next,
        .btn-retry,
        .btn-back {
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 1px;
          flex: 1;
          min-width: 150px;
        }
      `;
      document.head.appendChild(style);
    }
  }
}