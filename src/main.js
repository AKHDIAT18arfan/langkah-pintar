import { HomePage } from './components/HomePage.js';
import { LevelSelectPage } from './components/LevelSelectPage.js';
import { GamePage } from './components/GamePage.js';
import { FeedbackPage } from './components/FeedbackPage.js';
import { MateriPage } from './components/MateriPage.js';
import { NamePromptPage } from './components/NamePromptPage.js'; // <-- Impor komponen form nama
import { storage } from './storage.js';
import { RobotCompanion } from './components/RobotCompanion.js';

class App {
  constructor() {
    this.currentPage = 'home';
    this.currentLevelId = null;
    
    // Initialize pages
    this.homePage = new HomePage(this);
    this.levelSelectPage = new LevelSelectPage(this);
    this.gamePage = new GamePage(this);
    this.feedbackPage = new FeedbackPage(this);
    this.materiPage = new MateriPage(this);
    this.namePromptPage = new NamePromptPage(this); // <-- Inisialisasi halaman form nama
    
    // Cek apakah ada halaman tersimpan di sessionStorage saat refresh
    const savedPage = sessionStorage.getItem('lp_current_page');
    const savedParam = sessionStorage.getItem('lp_current_param');
    
    if (savedPage && savedPage !== 'home') {
      let parsedParam = null;
      try {
        parsedParam = savedParam ? JSON.parse(savedParam) : null;
      } catch (e) {
        parsedParam = savedParam;
      }
      this.navigate(savedPage, parsedParam);
    } else {
      this.navigate('home');
    }
  }

  navigate(page, param = null) {
    const app = document.getElementById('app');
    
    // Simpan state halaman saat ini ke sessionStorage agar aman saat refresh
    sessionStorage.setItem('lp_current_page', page);
    if (param !== null) {
      sessionStorage.setItem('lp_current_param', JSON.stringify(param));
    } else {
      sessionStorage.removeItem('lp_current_param');
    }
    
    switch(page) {
      case 'home':
        app.innerHTML = this.homePage.render();
        this.homePage.addStyles();
        this.currentPage = 'home';
        break;
      
      case 'askName':
        app.innerHTML = this.namePromptPage.render(); // <-- Render form nama
        this.namePromptPage.addStyles();
        this.currentPage = 'askName';
        break;
      
      case 'levels':
        app.innerHTML = this.levelSelectPage.render();
        this.levelSelectPage.addStyles();
        this.currentPage = 'levels';
        break;
      
      case 'game':
        if(param) {
          this.currentLevelId = param;
          app.innerHTML = this.gamePage.render(param);
          this.gamePage.addStyles();
          this.currentPage = 'game';
        }
        break;
      
      case 'feedback':
        if(param) {
          app.innerHTML = this.feedbackPage.render(param);
          this.feedbackPage.addStyles();
          this.currentPage = 'feedback';
        }
        break;
      
      case 'materi':
        app.innerHTML = this.materiPage.render();
        this.materiPage.addStyles();
        this.currentPage = 'materi';
        break;
      
      default:
        this.navigate('home');
    }
  }

  // Fungsi penanganan saat form nama disubmit
  handleNameSubmit(event) {
    event.preventDefault();
    const inputElement = document.getElementById('nickname-input');
    const name = inputElement ? inputElement.value.trim() : '';
    
    if (name) {
      storage.setNickname(name);
    } else {
      storage.setNickname('Anak Pintar');
    }
    this.navigate('levels');
  }

  checkAnswer() {
    if(this.gamePage) {
      this.gamePage.checkAnswer();
    }
  }

  showRobotView() {
    if(this.gamePage) {
      this.gamePage.showRobotView();
    }
  }

  nextLevel() {
    if(this.gamePage) {
      this.gamePage.nextLevel();
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.APP = new App();

  // Inisialisasi asisten robot interaktif
  const robot = new RobotCompanion();
  robot.init();
});