import { levels } from '../data/levels.js';
import { storage } from '../storage.js';

export class GamePage {
  constructor(onNavigate) {
    this.onNavigate = onNavigate;
    this.currentLevel = null;
    this.shuffledSteps = [];
    this.sortable = null;
  }

  render(levelId) {
    this.currentLevel = levels.find(l => l.id === levelId);
    if (!this.currentLevel) return;

    this.shuffledSteps = this.shuffleArray([...this.currentLevel.steps]);

    const container = document.getElementById('app');
    container.innerHTML = `
      <div class="game-container">
        <div class="game-header">
          <h1>${this.currentLevel.emoji} ${this.currentLevel.name}</h1>
          <p class="game-description">${this.currentLevel.description}</p>
        </div>

        <div class="steps-container" id="stepsContainer">
          ${this.shuffledSteps.map(step => `
            <div class="step-card" draggable="true" data-step-id="${step.id}">
              <span class="step-emoji">${this.getEmoji(step.order)}</span>
              <span class="step-text">${step.text}</span>
            </div>
          `).join('')}
        </div>

        <div class="game-actions">
          <button class="btn-primary" onclick="window.APP.checkAnswer()">Periksa ✓</button>
          <button class="btn-secondary" onclick="window.APP.navigate('levels')">Kembali</button>
        </div>

        <div id="feedback"></div>
      </div>
    `;

    this.addStyles();
    this.initDragAndDrop();
  }

  initDragAndDrop() {
    const container = document.getElementById('stepsContainer');
    const cards = container.querySelectorAll('.step-card');

    cards.forEach(card => {
      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
        card.style.opacity = '0.5';
      });

      card.addEventListener('dragend', () => {
        card.style.opacity = '1';
      });

      card.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        if (card !== document.querySelector('.drag-over')) {
          document.querySelectorAll('.step-card').forEach(c => c.classList.remove('drag-over'));
          card.classList.add('drag-over');
        }
      });

      card.addEventListener('dragleave', () => {
        card.classList.remove('drag-over');
      });

      card.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedCard = document.querySelector('[data-dragging="true"]');
        if (draggedCard && draggedCard !== card) {
          container.insertBefore(draggedCard, card);
        }
        card.classList.remove('drag-over');
      });
    });

    // Setup drag marker
    cards.forEach(card => {
      card.addEventListener('mousedown', () => {
        document.querySelectorAll('.step-card').forEach(c => c.removeAttribute('data-dragging'));
        card.setAttribute('data-dragging', 'true');
      });
    });

    document.addEventListener('mouseup', () => {
      document.querySelectorAll('.step-card').forEach(c => c.removeAttribute('data-dragging'));
    });
  }

  checkAnswer() {
    const container = document.getElementById('stepsContainer');
    const cards = container.querySelectorAll('.step-card');
    const userOrder = Array.from(cards).map(card => parseInt(card.getAttribute('data-step-id').match(/\d+$/)[0]));
    const correctOrder = this.currentLevel.steps.map(step => parseInt(step.id.match(/\d+$/)[0]));

    const isCorrect = JSON.stringify(userOrder) === JSON.stringify(correctOrder);

    this.showFeedback(isCorrect);
  }

  showFeedback(isCorrect) {
    const feedbackDiv = document.getElementById('feedback');
    const stepsContainer = document.getElementById('stepsContainer');

    if (isCorrect) {
      stepsContainer.style.pointerEvents = 'none';
      feedbackDiv.innerHTML = `
        <div class="feedback-message feedback-correct">
          <div style="font-size: 48px; margin-bottom: 15px;">⭐⭐⭐</div>
          <p>Benar! Kamu hebat! 🎉</p>
          <p style="margin-top: 15px; opacity: 0.9;">Urutan langkah yang benar disebut <strong>ALGORITMA</strong>. Robot mengikuti algoritma untuk melakukan setiap tugas!</p>
          
          <button class="btn-success" onclick="window.APP.showRobotView()" style="margin-top: 20px;">Lihat Versi Robot 🤖</button>
          <button class="btn-primary" onclick="window.APP.nextLevel()" style="margin-top: 10px;">Lanjut Level Berikutnya →</button>
        </div>
      `;
    } else {
      feedbackDiv.innerHTML = `
        <div class="feedback-message feedback-wrong">
          <p>Hmm, coba lihat lagi urutan langkahnya. Langkah mana yang harus dilakukan terlebih dahulu? 🤔</p>
          <button class="btn-secondary" onclick="location.reload()" style="margin-top: 15px;">Coba Lagi</button>
        </div>
      `;
    }
  }

  showRobotView() {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerHTML = `
      <div class="robot-view" style="background: rgba(0,0,0,0.3); padding: 20px; border-radius: 12px; margin-top: 20px;">
        <p style="color: white; margin-bottom: 15px; font-weight: 600;">📝 Inilah perintah robot:</p>
        <div class="robot-code">
          <ol>
            ${this.currentLevel.steps.map(step => `<li>${step.text}</li>`).join('')}
          </ol>
        </div>
        <p style="color: white; margin-top: 15px; font-size: 14px; opacity: 0.9;">Ini seperti kode robot! Robot mengikuti urutan ini untuk menyelesaikan tugas dengan sempurna. 🤖</p>
        <button class="btn-success" onclick="window.APP.nextLevel()" style="margin-top: 15px;">Lanjut Level Berikutnya →</button>
      </div>
    `;
  }

  nextLevel() {
    const currentIndex = levels.findIndex(l => l.id === this.currentLevel.id);
    storage.setLevelProgress(this.currentLevel.id, 3);

    if (currentIndex < levels.length - 1) {
      window.APP.navigate('game', levels[currentIndex + 1].id);
    } else {
      alert('Selamat! Kamu sudah menyelesaikan semua level! 🎊');
      window.APP.navigate('levels');
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getEmoji(order) {
    const emojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'];
    return emojis[order - 1] || '➡️';
  }

  addStyles() {
    if (!document.getElementById('game-styles')) {
      const style = document.createElement('style');
      style.id = 'game-styles';
      style.textContent = `
        .game-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
          color: white;
        }

        .game-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .game-header h1 {
          color: white;
          font-size: 28px;
          margin-bottom: 10px;
        }

        .game-description {
          font-size: 16px;
          opacity: 0.95;
        }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 12px;
          margin-bottom: 30px;
          padding: 20px;
          background: rgba(255,255,255,0.1);
          border-radius: 12px;
          min-height: 200px;
        }

        .step-card {
          background: white;
          color: #333;
          border-radius: 10px;
          padding: 12px;
          text-align: center;
          cursor: grab;
          user-select: none;
          transition: all 0.3s ease;
          min-height: 110px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        .step-card:active {
          cursor: grabbing;
          opacity: 0.7;
          transform: scale(1.05);
        }

        .step-card.drag-over {
          background: #FFE082;
          transform: scale(1.05);
        }

        .step-emoji {
          font-size: 32px;
          margin-bottom: 5px;
          display: block;
        }

        .step-text {
          font-size: 12px;
          font-weight: 600;
          line-height: 1.3;
        }

        .game-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary, .btn-success {
          padding: 12px 20px;
          font-size: 16px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          min-height: auto;
          min-width: auto;
        }

        .btn-primary {
          background: #FF6B6B;
          color: white;
        }

        .btn-primary:hover {
          background: #EE5A52;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: #FF9800;
          color: white;
        }

        .btn-secondary:hover {
          background: #F57C00;
        }

        .btn-success {
          background: #4CAF50;
          color: white;
        }

        .btn-success:hover {
          background: #45a049;
        }

        .feedback-message {
          background: rgba(255,255,255,0.2);
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          animation: slideIn 0.4s ease;
        }

        .feedback-correct {
          background: rgba(76, 175, 80, 0.3);
          border: 2px solid #4CAF50;
        }

        .feedback-wrong {
          background: rgba(255, 152, 0, 0.3);
          border: 2px solid #FF9800;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .game-header h1 {
            font-size: 22px;
          }
          .steps-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            min-height: auto;
            padding: 15px;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
}