import Sortable from 'sortablejs';
import { levels } from '../data/levels.js';
import { storage } from '../storage.js';

export class GamePage {
  constructor(appInstance) {
    this.app = appInstance;
    this.currentLevel = null;
    this.shuffledSteps = [];
    this.sortable = null;
  }

  // Sekarang MENGEMBALIKAN string HTML (main.js yang memasangnya ke #app)
  render(levelId) {
    this.currentLevel = levels.find(l => l.id === levelId);
    if (!this.currentLevel) return '';

    this.shuffledSteps = this.shuffleUntilDifferent([...this.currentLevel.steps]);

    return `
      <div class="game-container">
        <div class="game-header">
          <h1>${this.currentLevel.emoji} ${this.currentLevel.name}</h1>
          <p class="game-description">${this.currentLevel.description} Seret kartu untuk mengubah urutan.</p>
        </div>

        <div class="steps-container" id="stepsContainer">
          ${this.shuffledSteps.map(step => `
            <div class="step-card" data-step-id="${step.id}">
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
  }

  // main.js memanggil addStyles() SETELAH render() dipasang ke DOM,
  // jadi di sini kita pasang SortableJS (CSS sudah ada di theme.css).
  addStyles() {
    this.initSortable();
  }

  initSortable() {
    const container = document.getElementById('stepsContainer');
    if (!container) return;
    if (this.sortable) this.sortable.destroy();

    this.sortable = Sortable.create(container, {
      animation: 150,
      delay: 120,
      delayOnTouchOnly: true,
      ghostClass: 'sortable-ghost',
      chosenClass: 'sortable-chosen',
      onEnd: () => {
        container.querySelectorAll('.step-card').forEach(c => c.classList.remove('ok', 'bad'));
        const fb = document.getElementById('feedback');
        if (fb) fb.innerHTML = '';
      }
    });
  }

  checkAnswer() {
    const cards = Array.from(document.querySelectorAll('#stepsContainer .step-card'));
    const userOrder = cards.map(card => card.dataset.stepId);
    const correctOrder = this.currentLevel.steps.map(step => step.id);

    cards.forEach((card, i) => {
      card.classList.remove('ok', 'bad');
      card.classList.add(userOrder[i] === correctOrder[i] ? 'ok' : 'bad');
    });

    const isCorrect = userOrder.every((id, i) => id === correctOrder[i]);
    this.showFeedback(isCorrect);
  }

  showFeedback(isCorrect) {
    const feedbackDiv = document.getElementById('feedback');

    if (isCorrect) {
      if (this.sortable) this.sortable.option('disabled', true);
      storage.setLevelProgress(this.currentLevel.id, 3);

      feedbackDiv.innerHTML = `
        <div class="feedback-message feedback-correct">
          <div style="font-size: 40px;">⭐⭐⭐</div>
          <p><strong>Benar! Kamu hebat! 🎉</strong></p>
          <p>Urutan langkah yang benar disebut <strong>ALGORITMA</strong>. Robot mengikuti algoritma untuk melakukan setiap tugas!</p>
          <div class="feedback-buttons">
            <button class="btn-success" onclick="window.APP.showRobotView()">Lihat Versi Robot 🤖</button>
            <button class="btn-primary" onclick="window.APP.nextLevel()">Lanjut Level →</button>
          </div>
        </div>
      `;
    } else {
      feedbackDiv.innerHTML = `
        <div class="feedback-message feedback-wrong">
          <p>Hmm, coba lihat lagi urutan langkahnya. Kartu berwarna merah belum di tempat yang tepat. Langkah mana yang harus dilakukan lebih dulu? 🤔</p>
          <div class="feedback-buttons">
            <button class="btn-secondary" onclick="window.APP.navigate('game', '${this.currentLevel.id}')">Acak Ulang 🔄</button>
          </div>
        </div>
      `;
    }
  }

  showRobotView() {
    const feedbackDiv = document.getElementById('feedback');
    feedbackDiv.innerHTML = `
      <div class="robot-view">
        <p><strong>📝 Inilah perintah robot:</strong></p>
        <div class="robot-code">
          <ol>
            ${this.currentLevel.steps.map(step => `<li>${step.text}</li>`).join('')}
          </ol>
        </div>
        <p>Ini seperti kode robot! Robot mengikuti urutan ini untuk menyelesaikan tugas dengan sempurna. 🤖</p>
        <div class="feedback-buttons">
          <button class="btn-success" onclick="window.APP.nextLevel()">Lanjut Level →</button>
        </div>
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

  // Pastikan hasil acak tidak langsung sama dengan urutan benar
  shuffleUntilDifferent(array) {
    const correct = array.map(s => s.id).join();
    let shuffled = this.shuffleArray([...array]);
    while (shuffled.map(s => s.id).join() === correct) {
      shuffled = this.shuffleArray([...array]);
    }
    return shuffled;
  }
}