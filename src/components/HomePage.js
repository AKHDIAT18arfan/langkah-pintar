export class HomePage {
  constructor(appInstance) {
    this.app = appInstance;
  }

  render() {
    return `
      <div class="home-page">
        <div class="home-content">
          <div class="home-header">
            <div class="home-logo">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="logo-svg"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="7" r="4"/><line x1="12" y1="3" x2="12" y2="3"/></svg>
              <span class="logo-text">LANGKAH PINTAR</span>
            </div>
            <h1>Belajar Algoritma untuk Anak SD</h1>
            <p class="home-subtitle">
              Pelajari cara kerja robot dengan menyusun langkah-langkah yang benar!
            </p>
          </div>

          <div class="home-features">
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              </div>
              <h3>Drag & Drop</h3>
              <p>Susun langkah-langkah dengan mudah</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <h3>Dapatkan Bintang</h3>
              <p>Raih 3 bintang di setiap level</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3-2 3-2"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 2-3 2-3"/></svg>
              </div>
              <h3>Tingkatkan Skill</h3>
              <p>Belajar tentang algoritma dan logika</p>
            </div>
          </div>

          <div class="home-cta">
            <button class="btn-start" onclick="window.APP.navigate('askName')">
              Mulai Bermain
            </button>
            <button class="btn-learn" onclick="window.APP.navigate('materi')">
              Pelajari Materi
            </button>
          </div>

          <div class="home-levels-preview">
            <h2>6 Level Seru Menunggu</h2>
            <div class="levels-preview-grid">
              <div class="preview-item">Mencuci Tangan</div>
              <div class="preview-item">Menyikat Gigi</div>
              <div class="preview-item">Membuat Teh</div>
              <div class="preview-item">Berangkat Sekolah</div>
              <div class="preview-item">Menanam Biji</div>
              <div class="preview-item">Menyeberang Jalan</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  addStyles() {
    if (!document.getElementById('home-page-styles')) {
      const style = document.createElement('style');
      style.id = 'home-page-styles';
      style.textContent = `
        .home-page { display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 2rem; min-height: 100vh; }
        .home-content { max-width: 1000px; width: 100%; text-align: center; }
        .home-header { margin-bottom: 2.5rem; }
        .home-logo { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 1rem; color: var(--n-accent); }
        .home-header h1 { font-size: 2.8rem; margin-bottom: 1rem; }
        .home-subtitle { font-size: 1.1rem; max-width: 600px; margin: 0 auto; color: var(--n-muted); }
        .home-features { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem; }
        .feature-card { background: var(--n-surface); border: 2px solid var(--n-ink); box-shadow: 4px 4px 0 var(--n-ink); padding: 1.5rem; text-align: center; }
        .feature-icon { margin-bottom: 1rem; color: var(--n-accent); display: inline-flex; }
        .home-cta { display: flex; gap: 1.5rem; justify-content: center; margin-bottom: 2.5rem; flex-wrap: wrap; }
        .home-levels-preview { background: var(--n-surface); border: 2px solid var(--n-ink); box-shadow: 4px 4px 0 var(--n-ink); padding: 1.5rem; }
        .levels-preview-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 1rem; margin-top: 1rem; }
        .preview-item { background: var(--n-btn); border: 2px solid var(--n-ink); padding: 0.75rem; font-weight: 600; font-size: 0.85rem; }
      `;
      document.head.appendChild(style);
    }
  }
}