// Placeholder untuk Firebase auth (Fase 4)
// Sekarang cukup mode tamu

export class AuthManager {
  constructor() {
    this.currentUser = null;
    this.mode = 'guest'; // 'guest' atau 'user'
  }

  isLoggedIn() {
    return this.mode === 'user' && this.currentUser;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
    this.mode = 'guest';
  }

  setGuestMode(nickname) {
    this.mode = 'guest';
    this.currentUser = { nickname };
  }
}

export const auth = new AuthManager();