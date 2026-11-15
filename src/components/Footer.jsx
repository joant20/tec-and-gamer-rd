import React from 'react';
import { PLATFORMS } from '../data/articles';

export default function Footer({
  onSelectPlatform,
  onFilterByTag,
  isAdmin,
  onOpenAdminLogin,
  onLogoutAdmin,
}) {
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
          <h4>Talento &amp; Tendencias</h4>
          <ul>
            {['GTA VI', 'Zelda', 'MenaRD', 'Blink Respawn', 'Inteligencia Artificial'].map((item) => (
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
        <span>© {new Date().getFullYear()} Tec&amp;gamer RD 🇩🇴. Todos los derechos reservados.</span>
        {isAdmin ? (
          <button
            type="button"
            className="footer-admin-trigger active"
            onClick={onLogoutAdmin}
          >
            🔓 Modo Administrador Activo (Cerrar sesión)
          </button>
        ) : (
          <button
            type="button"
            className="footer-admin-trigger"
            onClick={onOpenAdminLogin}
            title="Acceso exclusivo para el Administrador"
          >
            🔒 Acceso Admin
          </button>
        )}
      </div>
    </footer>
  );
}
