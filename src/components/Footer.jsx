import React from 'react';
import { PLATFORMS } from '../data/articles';

export default function Footer({ onSelectPlatform, onFilterByTag }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand-logo">
            <div className="logo-icon">T&amp;G</div>
            <div className="logo-text-group">
              <span className="logo-title">
                Tec<span className="text-cyan">&amp;gamer</span>
              </span>
              <span className="logo-subtitle">🇩🇴 REPÚBLICA DOMINICANA</span>
            </div>
          </div>
          <p className="footer-bio">
            El portal dominicano de noticias sobre Inteligencia Artificial, Videojuegos, las mejores instituciones de programación del país (ITLA, INTEC, PUCMM, UNAPEC) y nuestras leyendas de eSports.
          </p>
        </div>

        <div className="footer-col">
          <h4>Secciones</h4>
          <ul>
            {PLATFORMS.map((p) => (
              <li key={p.id}>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => {
                    onSelectPlatform(p.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Academia &amp; Devs RD</h4>
          <ul>
            {['ITLA', 'INTEC', 'PUCMM', 'ADOVA', 'Programación'].map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => {
                    onFilterByTag?.(item);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Talento &amp; eSports RD</h4>
          <ul>
            {['MenaRD', 'Blink Respawn', 'eSports RD', 'Inteligencia Artificial'].map((item) => (
              <li key={item}>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={() => {
                    onFilterByTag?.(item);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Tec&amp;gamer RD 🇩🇴. Hecho en República Dominicana.</span>
        <span className="footer-tech-badge">React + Vite • Listo para Producción</span>
      </div>
    </footer>
  );
}
