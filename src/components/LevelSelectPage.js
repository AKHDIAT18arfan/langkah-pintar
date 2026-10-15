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
          <div class="level-icon-wrapper">${level.iconSvg}</div>
          <h3>${level.name}</h3>
          <p class="level-desc">${level.description}</p>
          <div class="level-stars">
            ${isCompleted ? '★ ★ ★' : '☆ ☆ ☆'}
          </div>
          ${isLocked ? '<div class="lock-badge">🔒</div>' : ''}
        </div>
      `;
    });

    return `
      <div class="level-select-page">
        <div class="level-select-content">
          <div class="level-header">
            <h1>Halo, ${nickname}!</h1>
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
            <button class="btn-materi" onclick="window.APP.navigate('materi')">Pelajari Materi</button>
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
        .level-select-page { min-height: 100vh; padding: 2rem; }
        .level-select-content { max-width: 1200px; margin: 0 auto; }
        .level-header { text-align: center; margin-bottom: 2.5rem; }
        .level-header h1 { margin-bottom: 1rem; }
        .level-header p { font-size: 1.2rem; margin-bottom: 1.5rem; }
        .progress-info { max-width: 500px; margin: 0 auto; padding: 1rem; display: flex; align-items: center; gap: 1rem; background: var(--n-surface); border: 2px solid var(--n-ink); box-shadow: 3px 3px 0 var(--n-ink); }
        .progress-label { font-weight: 600; text-transform: uppercase; font-size: 0.9rem; }
        .progress-bar { flex: 1; height: 10px; background: var(--n-btn); border: 2px solid var(--n-ink); overflow: hidden; }
        .progress-fill { height: 100%; background: var(--n-accent); }
        .progress-text { font-weight: 700; font-size: 0.9rem; }
        .levels-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem; }
        .level-card { background: var(--n-surface); border: 2px solid var(--n-ink); box-shadow: 4px 4px 0 var(--n-ink); padding: 1.5rem; text-align: center; cursor: pointer; transition: transform 0.15s ease, box-shadow 0.15s ease; position: relative; min-height: 220px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .level-card.locked { opacity: 0.5; cursor: not-allowed; }
        .level-card:not(.locked):hover { transform: translateY(-4px); box-shadow: 6px 6px 0 var(--n-ink); }
        .level-number { position: absolute; top: 0.5rem; right: 0.5rem; width: 32px; height: 32px; background: var(--n-accent); color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; border: 2px solid var(--n-ink); }
        .level-icon-wrapper { margin-bottom: 0.75rem; color: var(--n-accent); }
        .level-card h3 { margin: 0.5rem 0; font-size: 1.2rem; }
        .level-desc { font-size: 0.85rem; margin: 0.5rem 0; }
        .level-stars { font-size: 1.1rem; margin-top: 0.5rem; color: #eab308; }
        .lock-badge { position: absolute; bottom: 0.5rem; right: 0.5rem; font-size: 1.5rem; }
        .level-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
      `;
      document.head.appendChild(style);
    }
  }
}