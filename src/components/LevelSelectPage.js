import { levels } from '../data/levels.js';
import { storage } from '../storage.js';

export class LevelSelectPage {
  constructor(onNavigate) {
    this.onNavigate = onNavigate;
  }

  render() {
    const container = document.getElementById('app');
    const nickname = storage.getNickname();
    const progress = storage.getProgress();

    let levelCards = '';
    levels.forEach((level, index) => {
      const isCompleted = progress[level.id] ? true : false;
      const stars = progress[level.id] || 0;
      const isLocked = index > 0 && !progress[levels[index - 1].id];

      levelCards += `
        <div class="level-card ${isLocked ? 'locked' : ''}" onclick="window.APP.navigate('game', '${level.id}')">
          <div class="level-badge">${index + 1}</div>
          <div class="level-emoji">${level.emoji}</div>
          <h3>${level.name}</h3>
          <div class="level-stars">
            ${isCompleted ? '⭐'.repeat(3) : '☆☆☆'}
          </div>
          ${isLocked ? '<div class="lock-icon">🔒</div>' : ''}
        </div>
      `;
    });

    container.innerHTML = `
      <div class="level-select-container">
        <div class="level-header">
          <h1>Halo, ${nickname}! 👋</h1>
          <p>Pilih level untuk mulai belajar</p>
        </div>

        <div class="levels-grid">
          ${levelCards}
        </div>

        <button class="btn-logout" onclick="window.APP.navigate('home')">← Kembali ke Beranda</button>
      </div>
    `;

    this.addStyles();
  }

  addStyles() {
    if (!document.getElementById('level-select-styles')) {
      const style = document.createElement('style');
      style.id = 'level-select-styles';
      style.textContent = `
        .level-select-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 30px 20px;
          color: white;
        }

        .level-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .level-header h1 {
          color: white;
          font-size: 32px;
          margin-bottom: 10px;
        }

        .level-header p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 18px;
        }

        .levels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .level-card {
          background: white;
          color: #333;
          border-radius: 12px;
          padding: 15px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .level-card:not(.locked):hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .level-card.locked {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .level-badge {
          position: absolute;
          top: 5px;
          right: 5px;
          background: #667eea;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
        }

        .level-emoji {
          font-size: 48px;
          margin-bottom: 10px;
          margin-top: 5px;
        }

        .level-card h3 {
          margin: 10px 0;
          font-size: 16px;
          color: #333;
        }

        .level-stars {
          color: #FF9800;
          font-size: 18px;
          margin-bottom: 5px;
        }

        .lock-icon {
          font-size: 24px;
          margin-top: 10px;
        }

        .btn-logout {
          display: block;
          margin: 20px auto;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid white;
          padding: 12px 24px;
          font-size: 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-logout:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: none;
        }

        @media (max-width: 480px) {
          .level-header h1 {
            font-size: 24px;
          }
          .levels-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
}