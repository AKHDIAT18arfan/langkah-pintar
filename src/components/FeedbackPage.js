// src/components/FeedbackPage.js

import { storage } from '../storage.js';
import { levels } from '../data/levels.js';

export class FeedbackPage {
  constructor(appInstance) {
    this.app = appInstance;
  }

  render(data) {
    const { isCorrect, levelId, correctOrder, userOrder } = data;
    const currentLevel = levels.find(l => l.id === levelId);

    const feedbackHTML = `
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

    return feedbackHTML;
  }

  addStyles() {
    if (!document.getElementById('feedback-page-styles')) {
      const style = document.createElement('style');
      style.id = 'feedback-page-styles';
      style.textContent = `
        .feedback-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #2d2d2d 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: var(--spacing-lg);
          position: relative;
        }

        .feedback-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(90deg, transparent 24%, rgba(255, 107, 53, 0.05) 25%, rgba(255, 107, 53, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.05) 75%, rgba(255, 107, 53, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(0deg, transparent 24%, rgba(255, 107, 53, 0.05) 25%, rgba(255, 107, 53, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 107, 53, 0.05) 75%, rgba(255, 107, 53, 0.05) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
          pointer-events: none;
          z-index: 0;
        }

        .feedback-container {
          position: relative;
          z-index: 1;
          max-width: 600px;
          width: 100%;
          animation: fadeInUp 0.5s ease-out;
        }

        .feedback-correct,
        .feedback-wrong {
          background: linear-gradient(135deg, var(--dark-card) 0%, #3d3d3d 100%);
          border: var(--border-width) solid var(--primary);
          border-radius: var(--border-radius);
          padding: var(--spacing-lg);
          text-align: center;
          box-shadow: var(--shadow-lg);
        }

        .feedback-correct {
          border-color: var(--success);
        }

        .feedback-wrong {
          border-color: var(--warning);
        }

        .stars-celebration {
          display: flex;
          justify-content: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
          font-size: 3.5rem;
        }

        .star-icon {
          display: inline-block;
          animation: bounce 0.6s ease-in-out;
        }

        .star-icon:nth-child(1) {
          animation-delay: 0s;
        }

        .star-icon:nth-child(2) {
          animation-delay: 0.2s;
        }

        .star-icon:nth-child(3) {
          animation-delay: 0.4s;
        }

        .think-emoji {
          font-size: 3.5rem;
          margin-bottom: var(--spacing-md);
          display: block;
        }

        .feedback-correct h2,
        .feedback-wrong h2 {
          font-size: var(--font-size-h2);
          color: var(--primary);
          margin-bottom: var(--spacing-md);
          text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);
        }

        .feedback-message {
          font-size: 1.2rem;
          color: var(--text-light);
          margin-bottom: var(--spacing-md);
        }

        .feedback-explanation,
        .feedback-hint {
          background: rgba(255, 107, 53, 0.1);
          border-left: 4px solid var(--primary);
          padding: var(--spacing-md);
          border-radius: 3px;
          margin: var(--spacing-lg) 0;
          text-align: left;
          font-size: 1rem;
          color: var(--text-light);
          line-height: 1.7;
        }

        .feedback-explanation p,
        .feedback-hint p {
          margin-bottom: 0.5rem;
        }

        .feedback-explanation p:last-child,
        .feedback-hint p:last-child {
          margin-bottom: 0;
        }

        .feedback-buttons {
          display: flex;
          gap: var(--spacing-md);
          margin-top: var(--spacing-lg);
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-robot,
        .btn-next,
        .btn-retry,
        .btn-back {
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: var(--font-weight-bold);
          border: var(--border-width) solid var(--primary);
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: all var(--transition-normal);
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: var(--shadow-md);
          flex: 1;
          min-width: 150px;
        }

        .btn-robot,
        .btn-next,
        .btn-retry {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          color: var(--text-light);
        }

        .btn-robot:hover,
        .btn-next:hover,
        .btn-retry:hover {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          transform: translateY(-3px);
          box-shadow: var(--shadow-lg);
        }

        .btn-back {
          background: transparent;
          color: var(--text-light);
          border-color: var(--text-light);
        }

        .btn-back:hover {
          background: var(--text-light);
          color: var(--primary);
          transform: translateY(-3px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .feedback-buttons {
            flex-direction: column;
          }

          .btn-robot,
          .btn-next,
          .btn-retry,
          .btn-back {
            width: 100%;
            min-width: auto;
          }

          .stars-celebration {
            font-size: 2.5rem;
          }

          .think-emoji {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .feedback-page {
            padding: var(--spacing-md);
          }

          .feedback-correct,
          .feedback-wrong {
            padding: var(--spacing-md);
          }

          .feedback-correct h2,
          .feedback-wrong h2 {
            font-size: 1.8rem;
          }

          .feedback-message {
            font-size: 1rem;
          }

          .btn-robot,
          .btn-next,
          .btn-retry,
          .btn-back {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `;

      document.head.appendChild(style);
    }
  }
}