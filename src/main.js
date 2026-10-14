import { HomePage } from './components/HomePage.js';
import { LevelSelectPage } from './components/LevelSelectPage.js';
import { GamePage } from './components/GamePage.js';
import { storage } from './storage.js';

class App {
  constructor() {
    this.currentPage = 'home';
    this.currentLevelId = null;
    this.gamePage = new GamePage(this.navigate.bind(this));
  }

  navigate(page, param = null) {
    this.currentPage = page;
    
    if (page === 'home') {
      const homePage = new HomePage(this.navigate.bind(this));
      homePage.render();
    } else if (page === 'askName') {
      this.showNameDialog();
    } else if (page === 'levels') {
      const levelSelectPage = new LevelSelectPage(this.navigate.bind(this));
      levelSelectPage.render();
    } else if (page === 'game' && param) {
      this.currentLevelId = param;
      this.gamePage.render(param);
    }
  }

  showNameDialog() {
    const nickname = storage.getNickname();
    const input = prompt('Siapa nama mu?', nickname || '');
    
    if (input && input.trim()) {
      storage.setNickname(input.trim());
      this.navigate('levels');
    } else if (input === '') {
      // User click OK tapi kosong
      alert('Nama tidak boleh kosong!');
      this.showNameDialog();
    } else {
      // User click Cancel
      this.navigate('home');
    }
  }

  checkAnswer() {
    this.gamePage.checkAnswer();
  }

  showRobotView() {
    this.gamePage.showRobotView();
  }

  nextLevel() {
    this.gamePage.nextLevel();
  }
}

// Initialize app
const app = new App();
window.APP = app;

// Start at home
app.navigate('home');