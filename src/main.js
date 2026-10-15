import { HomePage } from './components/HomePage.js';
import { LevelSelectPage } from './components/LevelSelectPage.js';
import { GamePage } from './components/GamePage.js';
import { FeedbackPage } from './components/FeedbackPage.js';
import { MateriPage } from './components/MateriPage.js';
import { storage } from './storage.js';

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
    
    // Start app
    this.navigate('home');
  }

  navigate(page, param = null) {
    const app = document.getElementById('app');
    
    switch(page) {
      case 'home':
        app.innerHTML = this.homePage.render();
        this.homePage.addStyles();
        this.currentPage = 'home';
        break;
      
      case 'askName':
        this.showNamePrompt();
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

  showNamePrompt() {
    const name = prompt('Siapa nama kamu? 👤', 'Anak Pintar');
    
    if(name && name.trim()) {
      storage.setNickname(name.trim());
      this.navigate('levels');
    } else {
      storage.setNickname('Anak Pintar');
      this.navigate('levels');
    }
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
});