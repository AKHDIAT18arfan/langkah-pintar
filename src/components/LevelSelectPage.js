import { levels } from '../data/levels.js';
import { storage } from '../storage.js';

export class LevelSelectPage {
  constructor(appInstance) {
    this.app = appInstance;
  }

  render() {
    const nickname = storage.getNickname();
    const progress = storage.getProgress();

    let levelCards = '';
    levels.forEach((level, index) => {
      const isCompleted = progress[level.id] ? true : false;
      const isLocked = index > 0 && !progress[levels[index - 1].id];

      levelCards += `
        <div class="level-card ${isLocked ? 'locked' : ''}" onclick="${!isLocked ? `window.APP.navigate('game', '${level.id}')` : ''}">
          <div class="level-number">${index + 1}</div>
          <div class="level-emoji">${level.emoji}</div>
          <h3>${level.name}</h3>
          <p class="level-desc">${level.description}</p>
          <div class="level-stars">
            ${isCompleted ? '⭐⭐⭐' : '☆☆☆'}
          </div>
          ${isLocked ? '<div class="lock-badge">🔒</div>' : ''}
        </div>
      `;
    });

    return `
      <div class="level-select-page">
        <div class="level-grid-bg"></div>
        <div class="level-select-content">
          <div class="level-header">
            <h1>Halo, ${nickname}! 👋</h1>
            <p>Pilih level untuk mulai belajar algoritma</p>
            <div class="progress-info">
              <span class="progress-label">Progress</span>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${(Object.keys(progress).length / levels.length) * 100}%"></div>
              </div>
              <span class="progress-text">${Object.keys(progress).length}/${levels.length}</span>
            </div>
          </div>

          <div class="levels-grid">
            ${levelCards}
          </div>

          <div class="level-actions">
            <button class="btn-back" onclick="window.APP.navigate('home')">← Kembali ke Beranda</button>
            <button class="btn-materi" onclick="window.APP.navigate('materi')">📖 Pelajari Materi</button>
          </div>
        </div>
      </div>
    `;
  }

  addStyles() {
    if (!document.getElementById('level-select-styles')) {
      const style = document.createElement('style');
      style.id = 'level-select-styles';
      style.textContent = `
        .level-select-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%);
          padding: var(--spacing-lg);
          position: relative;
          overflow-x: hidden;
        }

        .level-grid-bg {
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

        .level-select-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }

        .level-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
          animation: fadeInDown 0.6s ease-out;
        }

        .level-header h1 {
          margin-bottom: var(--spacing-md);
        }

        .level-header p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
        }

        .progress-info {
          max-width: 500px;
          margin: 0 auto;
          background: linear-gradient(135deg, var(--dark-card) 0%, var(--dark-card-light) 100%);
          border: var(--border-width) solid var(--primary);
          border-radius: var(--border-radius);
          padding: var(--spacing-md);
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          box-shadow: var(--shadow-md);
        }

        .progress-label {
          font-weight: var(--font-semi);
          color: var(--primary);
          white-space: nowrap;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .progress-bar {
          flex: 1;
          height: 8px;
          background: var(--dark-border);
          border-radius: 10px;
          overflow: hidden;
          border: var(--border-width-sm) solid var(--primary);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transition: width 0.5s ease-out;
          box-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
        }

        .progress-text {
          font-weight: var(--font-bold);
          color: var(--accent);
          font-size: 0.9rem;
          min-width: 40px;
          text-align: right;
        }

        .levels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .level-card {
          background: linear-gradient(135deg, var(--dark-card) 0%, var(--dark-card-light) 100%);
          border: var(--border-width) solid var(--primary);
          border-radius: var(--border-radius);
          padding: var(--spacing-lg);
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-normal);
          box-shadow: var(--shadow-md);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 220px;
        }

        .level-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: var(--border-width);
          background: linear-gradient(90deg, var(--primary), var(--accent), transparent);
          border-radius: var(--border-radius) var(--border-radius) 0 0;
        }

        .level-card:not(.locked):hover {
          transform: translateY(-12px) scale(1.05);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent);
          background: linear-gradient(135deg, var(--dark-card-light) 0%, #3d3d3d 100%);
        }

        .level-card.locked {
          opacity: 0.5;
          cursor: not-allowed;
          border-color: var(--dark-border);
        }

        .level-number {
          position: absolute;
          top: var(--spacing-sm);
          right: var(--spacing-sm);
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          color: var(--text-light);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: var(--font-bold);
          font-size: 1.2rem;
          box-shadow: var(--shadow-md);
        }

        .level-emoji {
          font-size: 3.5rem;
          margin-bottom: var(--spacing-sm);
          display: block;
          transition: transform var(--transition-normal);
        }

        .level-card:not(.locked):hover .level-emoji {
          transform: scale(1.2) rotate(10deg);
        }

        .level-card h3 {
          margin: var(--spacing-sm) 0;
          font-size: 1.3rem;
          color: var(--accent);
        }

        .level-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin: var(--spacing-sm) 0;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .level-stars {
          color: #FFA726;
          font-size: 1.2rem;
          margin-top: var(--spacing-sm);
          letter-spacing: 2px;
        }

        .lock-badge {
          font-size: 2rem;
          position: absolute;
          bottom: var(--spacing-sm);
          right: var(--spacing-sm);
        }

        .level-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .btn-back,
        .btn-materi {
          padding: 1.2rem 2.4rem;
          font-size: 1rem;
          font-weight: var(--font-bold);
          border: var(--border-width) solid var(--primary);
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: all var(--transition-normal);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          box-shadow: var(--shadow-md);
          flex: 1;
          min-width: 200px;
          position: relative;
          overflow: hidden;
        }

        .btn-back {
          background: var(--dark-card);
          color: var(--text-light);
          border-color: var(--text-light);
        }

        .btn-back:hover {
          background: var(--text-light);
          color: var(--primary);
          border-color: var(--text-light);
        }

        .btn-materi {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          color: var(--text-light);
          border-color: var(--primary);
        }

        .btn-materi:hover {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 1024px) {
          .levels-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: var(--spacing-md);
          }

          .level-card {
            min-height: 200px;
            padding: var(--spacing-md);
          }

          .level-emoji {
            font-size: 2.8rem;
          }

          .level-card h3 {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .level-select-page {
            padding: var(--spacing-md);
          }

          .level-header h1 {
            font-size: 2rem;
          }

          .level-header p {
            font-size: 1rem;
          }

          .levels-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: var(--spacing-md);
          }

          .level-card {
            min-height: 160px;
          }

          .level-emoji {
            font-size: 2rem;
          }

          .level-card h3 {
            font-size: 1rem;
          }

          .level-desc {
            font-size: 0.8rem;
          }

          .level-actions {
            flex-direction: column;
          }

          .btn-back,
          .btn-materi {
            width: 100%;
            min-width: auto;
          }
        }

        @media (max-width: 480px) {
          .level-select-page {
            padding: var(--spacing-sm);
          }

          .level-header h1 {
            font-size: 1.6rem;
          }

          .progress-info {
            flex-direction: column;
            gap: var(--spacing-sm);
          }

          .progress-bar {
            width: 100%;
          }

          .levels-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--spacing-sm);
          }

          .level-card {
            min-height: 140px;
            padding: var(--spacing-sm);
          }

          .level-emoji {
            font-size: 1.8rem;
            margin-bottom: var(--spacing-xs);
          }

          .level-card h3 {
            font-size: 0.9rem;
            margin: 0.3rem 0;
          }

          .level-desc {
            display: none;
          }

          .level-number {
            width: 32px;
            height: 32px;
            font-size: 1rem;
            top: var(--spacing-xs);
            right: var(--spacing-xs);
          }

          .level-stars {
            font-size: 1rem;
          }

          .btn-back,
          .btn-materi {
            padding: 1rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
}