export class StorageManager {
  constructor() {
    this.storageKey = 'langkahPintar_guest';
  }

  getGuestData() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : { nickname: '', progress: {} };
  }

  saveGuestData(nickname, progress) {
    const data = { nickname, progress };
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  getNickname() {
    const data = this.getGuestData();
    return data.nickname || 'Teman';
  }

  setNickname(nickname) {
    const data = this.getGuestData();
    data.nickname = nickname;
    this.saveGuestData(data.nickname, data.progress);
  }

  getProgress() {
    const data = this.getGuestData();
    return data.progress || {};
  }

  setLevelProgress(levelId, stars) {
    const data = this.getGuestData();
    if (!data.progress) data.progress = {};
    data.progress[levelId] = stars;
    this.saveGuestData(data.nickname, data.progress);
  }

  getLevelProgress(levelId) {
    const progress = this.getProgress();
    return progress[levelId] || 0;
  }

  isLevelCompleted(levelId) {
    return this.getLevelProgress(levelId) > 0;
  }

  clearAllData() {
    localStorage.removeItem(this.storageKey);
  }
}

export const storage = new StorageManager();