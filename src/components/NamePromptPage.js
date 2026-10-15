import { storage } from '../storage.js';

export class NamePromptPage {
  constructor(appInstance) {
    this.app = appInstance;
  }

  render() {
    return `
      <div class="name-prompt-page">
        <div class="name-prompt-card">
          <div class="name-prompt-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h2>Siapa Nama Kamu?</h2>
          <p>Masukkan nama atau panggilanmu sebelum mulai berpetualang.</p>
          
          <form id="name-form" onsubmit="window.APP.handleNameSubmit(event)">
            <input 
              type="text" 
              id="nickname-input" 
              value="Anak Pintar" 
              required 
              autocomplete="off"
            />
            <div class="name-prompt-actions">
              <button type="submit" class="btn-submit">Mulai Bermain →</button>
              <button type="button" class="btn-cancel" onclick="window.APP.navigate('home')">← Kembali</button>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  addStyles() {
    if (!document.getElementById('name-prompt-styles')) {
      const style = document.createElement('style');
      style.id = 'name-prompt-styles';
      style.textContent = `
        .name-prompt-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 2rem;
        }
        .name-prompt-card {
          background: var(--n-surface);
          border: 3px solid var(--n-ink);
          box-shadow: 6px 6px 0 var(--n-ink);
          padding: 3rem 2.5rem;
          max-width: 480px;
          width: 100%;
          text-align: center;
        }
        .name-prompt-icon {
          color: var(--n-accent);
          margin-bottom: 1.25rem;
          display: inline-flex;
        }
        .name-prompt-card h2 {
          font-size: 1.8rem;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }
        .name-prompt-card p {
          color: var(--n-muted);
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }
        #nickname-input {
          width: 100%;
          padding: 1rem;
          font-family: var(--n-body);
          font-size: 1.1rem;
          background: var(--n-btn);
          border: 2px solid var(--n-ink);
          color: var(--n-ink);
          text-align: center;
          margin-bottom: 2rem;
          box-sizing: border-box;
          outline: none;
        }
        #nickname-input:focus {
          border-color: var(--n-accent);
          box-shadow: 3px 3px 0 var(--n-ink);
        }
        .name-prompt-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .btn-submit {
          background: var(--n-accent) !important;
          color: #fff !important;
          border: 2px solid var(--n-ink) !important;
          box-shadow: 4px 4px 0 var(--n-ink) !important;
          padding: 1rem !important;
          font-weight: 700 !important;
          font-size: 1rem !important;
          cursor: pointer;
          text-transform: uppercase;
        }
        .btn-submit:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 var(--n-ink) !important;
        }
        .btn-cancel {
          background: var(--n-btn) !important;
          color: var(--n-ink) !important;
          border: 2px solid var(--n-ink) !important;
          box-shadow: 3px 3px 0 var(--n-ink) !important;
          padding: 0.8rem !important;
          font-weight: 700 !important;
          font-size: 0.9rem !important;
          cursor: pointer;
          text-transform: uppercase;
        }
        .btn-cancel:hover {
          transform: translate(-2px, -2px);
          box-shadow: 5px 5px 0 var(--n-ink) !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
}