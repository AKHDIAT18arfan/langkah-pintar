/* ============================================
    ROBOT COMPANION - Langkah Pintar (Neo-Brutalist Pixel)
    Maskot robot piksel dengan ikon SVG bersih,
    posisi mata mengikuti kursor, dan UI selaras.
   ============================================ */

export class RobotCompanion {
  constructor() {
    this.isOpen = false;
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;

    this.responses = {
      algoritma: [
        "Algoritma adalah urutan langkah yang harus diikuti untuk menyelesaikan tugas!",
        "Bayangkan algoritma seperti resep masak - setiap langkah sangat penting!",
        "Algoritma membuat robot bisa melakukan pekerjaan dengan sempurna!"
      ],
      pseudocode: [
        "Pseudocode adalah cara menulis algoritma dengan bahasa yang mudah dipahami manusia.",
        "Pseudocode itu seperti sketsa sebelum membangun rumah - kerangka awalnya saja!",
        "Dengan pseudocode, kita bisa merencanakan program sebelum menulis kode sungguhan."
      ],
      urutan: [
        "Urutan yang benar sangat penting dalam algoritma! Kalau urutan salah, hasilnya akan salah.",
        "Setiap langkah harus rapi dan berurutan. Tidak bisa loncat-loncat!",
        "Dalam game ini, kamu belajar mengurutkan langkah dengan benar!"
      ],
      game: [
        "Game Langkah Pintar ini mengajarkan cara berpikir seperti programmer!",
        "Dengan bermain, kamu sedang belajar algoritma tanpa sadar!",
        "Setiap level adalah algoritma nyata dari kehidupan sehari-hari!"
      ],
      default: [
        "Kamu bisa tanya tentang: algoritma, pseudocode, urutan, atau game!",
        "Aku bisa bantu jelaskan konsep programming untuk anak SD.",
        "Tanya aku apa saja tentang belajar pemrograman!",
        "Selamat belajar algoritma! Semoga kamu suka game ini!"
      ]
    };
  }

  init() {
    this.createRobotElement();
    this.createChatBox();
    this.addEventListeners();
    this.animate();
  }

  createRobotElement() {
    const robotContainer = document.createElement('div');
    robotContainer.id = 'robot-container';
    robotContainer.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
      user-select: none;
    `;

    // Desain Robot SVG Pixelated
    const robotHTML = `
      <svg id="robot-figure" 
           width="64" height="74" viewBox="0 0 70 80" 
           style="pointer-events: auto; cursor: pointer; filter: drop-shadow(4px 4px 0 var(--n-ink)); transition: transform 0.1s ease;">
        <!-- Antena Kiri -->
        <rect x="22" y="8" width="4" height="8" fill="var(--n-ink)"/>
        <rect x="19" y="3" width="10" height="6" fill="var(--n-accent)" stroke="var(--n-ink)" stroke-width="2"/>
        
        <!-- Antena Kanan -->
        <rect x="44" y="8" width="4" height="8" fill="var(--n-ink)"/>
        <rect x="41" y="3" width="10" height="6" fill="var(--n-accent)" stroke="var(--n-ink)" stroke-width="2"/>
        
        <!-- Kepala Kotak Piksel -->
        <rect x="12" y="14" width="46" height="36" fill="var(--n-accent)" stroke="var(--n-ink)" stroke-width="3"/>
        
        <!-- Mata Kiri -->
        <rect x="20" y="22" width="10" height="10" fill="#ffffff" stroke="var(--n-ink)" stroke-width="2"/>
        <rect id="left-pupil" x="23" y="25" width="4" height="4" fill="var(--n-ink)"/>
        
        <!-- Mata Kanan -->
        <rect x="40" y="22" width="10" height="10" fill="#ffffff" stroke="var(--n-ink)" stroke-width="2"/>
        <rect id="right-pupil" x="43" y="25" width="4" height="4" fill="var(--n-ink)"/>
        
        <!-- Mulut Piksel -->
        <rect x="27" y="38" width="16" height="4" fill="var(--n-ink)"/>
        
        <!-- Badan Kotak -->
        <rect x="17" y="52" width="36" height="24" fill="var(--n-surface)" stroke="var(--n-ink)" stroke-width="3"/>
        <rect x="29" y="60" width="12" height="8" fill="var(--n-accent)" stroke="var(--n-ink)" stroke-width="2"/>
      </svg>
    `;

    robotContainer.innerHTML = robotHTML;

    const robotFigure = robotContainer.querySelector('#robot-figure');
    robotFigure.addEventListener('click', () => this.toggleChat());
    robotFigure.addEventListener('mouseover', () => {
      robotFigure.style.transform = 'translate(-2px, -2px)';
    });
    robotFigure.addEventListener('mouseout', () => {
      robotFigure.style.transform = 'translate(0, 0)';
    });

    document.body.appendChild(robotContainer);
    this.robotContainer = robotContainer;
  }

  createChatBox() {
    const chatBox = document.createElement('div');
    chatBox.id = 'robot-chat';
    chatBox.style.cssText = `
      position: fixed;
      bottom: 105px;
      right: 20px;
      width: 320px;
      background: var(--n-surface);
      border: 3px solid var(--n-ink);
      box-shadow: 6px 6px 0 var(--n-ink);
      z-index: 999;
      display: none;
      font-family: var(--n-body);
      font-size: 13px;
      color: var(--n-ink);
      pointer-events: auto;
      max-height: 420px;
      overflow: hidden;
      flex-direction: column;
    `;

    // SVG Ikon Robot untuk Header Panel Obrolan
    const headerIconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 6px;"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>`;

    chatBox.innerHTML = `
      <div style="background: var(--n-accent); color: #fff; padding: 12px 16px; font-weight: 700; border-bottom: 3px solid var(--n-ink); display: flex; justify-content: space-between; align-items: center; font-family: var(--n-head); letter-spacing: 1px;">
        <span style="display: flex; align-items: center;">${headerIconSvg} Asisten Robot</span>
        <button id="close-chat" style="background: var(--n-surface); color: var(--n-ink); border: 2px solid var(--n-ink); font-weight: bold; font-size: 14px; cursor: pointer; width: 26px; height: 26px; display: grid; place-items: center; box-shadow: 2px 2px 0 var(--n-ink);">×</button>
      </div>
      
      <div id="chat-messages" style="flex: 1; overflow-y: auto; padding: 16px; background: var(--n-btn); border-bottom: 3px solid var(--n-ink); max-height: 180px;">
        <div style="padding: 10px 12px; background: var(--n-surface); border: 2px solid var(--n-ink); box-shadow: 3px 3px 0 var(--n-ink); margin-bottom: 8px; line-height: 1.5;">
          <strong>Robot:</strong> Halo! Saya siap membantu. Pilih topik di bawah untuk bertanya tentang <strong>algoritma, pseudocode, urutan</strong>, atau <strong>game</strong>!
        </div>
      </div>
      
      <div style="padding: 12px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; background: var(--n-surface);">
        <button class="chat-btn" data-topic="algoritma" style="padding: 10px; background: var(--n-accent); color: #fff; border: 2px solid var(--n-ink); font-weight: 700; cursor: pointer; font-size: 11px; box-shadow: 3px 3px 0 var(--n-ink); font-family: var(--n-body); text-transform: uppercase;">Algoritma</button>
        <button class="chat-btn" data-topic="pseudocode" style="padding: 10px; background: var(--n-btn); color: var(--n-ink); border: 2px solid var(--n-ink); font-weight: 700; cursor: pointer; font-size: 11px; box-shadow: 3px 3px 0 var(--n-ink); font-family: var(--n-body); text-transform: uppercase;">Pseudocode</button>
        <button class="chat-btn" data-topic="urutan" style="padding: 10px; background: var(--n-btn); color: var(--n-ink); border: 2px solid var(--n-ink); font-weight: 700; cursor: pointer; font-size: 11px; box-shadow: 3px 3px 0 var(--n-ink); font-family: var(--n-body); text-transform: uppercase;">Urutan</button>
        <button class="chat-btn" data-topic="game" style="padding: 10px; background: var(--n-accent); color: #fff; border: 2px solid var(--n-ink); font-weight: 700; cursor: pointer; font-size: 11px; box-shadow: 3px 3px 0 var(--n-ink); font-family: var(--n-body); text-transform: uppercase;">Game</button>
      </div>
    `;

    document.body.appendChild(chatBox);
    this.chatBox = chatBox;

    chatBox.querySelectorAll('.chat-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const topic = e.target.dataset.topic;
        this.sendMessage(topic);
      });
    });

    chatBox.querySelector('#close-chat').addEventListener('click', () => {
      this.toggleChat();
    });
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    this.chatBox.style.display = this.isOpen ? 'flex' : 'none';
  }

  sendMessage(topic) {
    const messagesDiv = this.chatBox.querySelector('#chat-messages');
    
    const userMsg = document.createElement('div');
    userMsg.style.cssText = `
      padding: 8px 10px;
      background: var(--n-surface);
      border: 2px solid var(--n-ink);
      box-shadow: 2px 2px 0 var(--n-ink);
      margin-bottom: 8px;
      text-align: right;
      color: var(--n-accent);
      font-weight: 700;
    `;
    
    const topicLabel = {
      algoritma: 'Algoritma itu apa?',
      pseudocode: 'Apa itu pseudocode?',
      urutan: 'Kenapa urutan penting?',
      game: 'Tentang game ini?'
    };
    
    userMsg.textContent = topicLabel[topic] || 'Tanya?';
    messagesDiv.appendChild(userMsg);

    setTimeout(() => {
      const robotResponses = this.responses[topic] || this.responses.default;
      const randomResponse = robotResponses[Math.floor(Math.random() * robotResponses.length)];
      
      const robotMsg = document.createElement('div');
      robotMsg.style.cssText = `
        padding: 8px 10px;
        background: var(--n-surface);
        border: 2px solid var(--n-ink);
        box-shadow: 2px 2px 0 var(--n-ink);
        margin-bottom: 8px;
        line-height: 1.5;
      `;
      robotMsg.innerHTML = `<strong>Robot:</strong> ${randomResponse}`;
      messagesDiv.appendChild(robotMsg);
      
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 300);

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }

  addEventListeners() {
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  updatePupils() {
    const svg = document.getElementById('robot-figure');
    if (!svg) return;
    
    const rect = svg.getBoundingClientRect();
    const scaleX = rect.width / 70;
    const scaleY = rect.height / 80;

    const leftEyeX = rect.left + 25 * scaleX;
    const leftEyeY = rect.top + 27 * scaleY;
    const rightEyeX = rect.left + 45 * scaleX;
    const rightEyeY = rect.top + 27 * scaleY;

    const maxOffset = 2;

    const dxL = this.mouseX - leftEyeX;
    const dyL = this.mouseY - leftEyeY;
    const angleL = Math.atan2(dyL, dxL);
    const distL = Math.min(Math.sqrt(dxL * dxL + dyL * dyL) / 30, 1);

    const leftPupil = document.getElementById('left-pupil');
    if (leftPupil) {
      leftPupil.setAttribute('x', 23 + Math.cos(angleL) * maxOffset * distL);
      leftPupil.setAttribute('y', 25 + Math.sin(angleL) * maxOffset * distL);
    }

    const dxR = this.mouseX - rightEyeX;
    const dyR = this.mouseY - rightEyeY;
    const angleR = Math.atan2(dyR, dxR);
    const distR = Math.min(Math.sqrt(dxR * dxR + dyR * dyR) / 30, 1);

    const rightPupil = document.getElementById('right-pupil');
    if (rightPupil) {
      rightPupil.setAttribute('x', 43 + Math.cos(angleR) * maxOffset * distR);
      rightPupil.setAttribute('y', 25 + Math.sin(angleR) * maxOffset * distR);
    }
  }

  animate() {
    this.updatePupils();
    requestAnimationFrame(() => this.animate());
  }
}