import React from 'react';
import { PLATFORMS } from '../data/articles';

export default function Navbar({
  selectedPlatform,
  onSelectPlatform,
  searchQuery,
  onSearchChange,
  showBookmarksOnly,
  onToggleBookmarksOnly,
  bookmarksCount,
  isAdmin,
  onOpenAdminDashboard,
  onOpenCreateModal,
  onOpenSeoModal,
  onLogoutAdmin,
}) {
  return (
    <header className="site-header">
      <div className="container header-main">
        <a
          href="#top"
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            onSelectPlatform('ALL');
            onSearchChange('');
            if (showBookmarksOnly) onToggleBookmarksOnly();
          }}
        >
          <div className="logo-icon">T&amp;G</div>
          <div className="logo-text-group">
            <span className="logo-title">
              Tec<span className="text-cyan">&amp;gamer</span>
            </span>
            <span className="logo-subtitle">🇩🇴 IA • PROGRAMACIÓN • VIDEOJUEGOS RD</span>
          </div>
        </a>

        <div className="search-wrapper">
          <svg
            className="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar GTA VI, Zelda, IA, MenaRD, ITLA, INTEC, requisitos..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear"
              onClick={() => onSearchChange('')}
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>

        <div className="header-actions">
          <button
            type="button"
            className={`action-btn bookmark-filter-btn ${showBookmarksOnly ? 'active' : ''}`}
            onClick={onToggleBookmarksOnly}
            title="Ver noticias guardadas"
          >
            <span>★ Guardadas</span>
            {bookmarksCount > 0 && <span className="badge-count">{bookmarksCount}</span>}
          </button>

          {/* Estos controles SOLO aparecen cuando has iniciado sesión como Administrador */}
          {isAdmin && (
            <>
              <button
                type="button"
                className="action-btn seo-preview-btn"
                onClick={onOpenAdminDashboard}
                title="Abrir Panel de Visualizaciones y Control Total"
              >
                <span>📊 Panel Admin</span>
              </button>

              <button type="button" className="btn-publish" onClick={onOpenCreateModal}>
                <span>+ Subir Noticia</span>
              </button>

              <button
                type="button"
                className="action-btn admin-logout-btn"
                onClick={onLogoutAdmin}
                title="Salir del modo Administrador y ver como cliente"
              >
                <span>🔓 Salir</span>
              </button>
            </>
          )}
        </div>
      </div>

      <nav className="platform-nav" aria-label="Filtro por sección de Tec&gamer">
        <div className="container platform-nav-inner">
          <div className="platform-pills">
            {PLATFORMS.map((platform) => {
              const isActive = selectedPlatform === platform.id;
              return (
                <button
                  key={platform.id}
                  type="button"
                  className={`platform-pill platform-${platform.id.toLowerCase()} ${
                    isActive ? 'active' : ''
                  }`}
                  onClick={() => onSelectPlatform(platform.id)}
                >
                  <span
                    className="platform-dot"
                    style={{ backgroundColor: platform.color }}
                  />
                  <span>{platform.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
