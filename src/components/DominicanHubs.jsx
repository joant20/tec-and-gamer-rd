import React from 'react';
import { DOMINICAN_PRO_PLAYERS, DOMINICAN_TECH_INSTITUTIONS } from '../data/articles';

export default function DominicanHubs({ onFilterByTag, onSelectSection }) {
  return (
    <div className="container dominican-hubs-wrapper">
      {/* SECCIÓN 1: JUGADORES FAMOSOS DE REPÚBLICA DOMINICANA */}
      <section className="hub-section" aria-label="Jugadores Famosos de República Dominicana">
        <div className="section-header-bar">
          <div className="section-title-group">
            <span className="neon-bar-rd" />
            <h2 className="section-heading">🇩🇴 ORGULLO DOMINICANO: JUGADORES FAMOSOS & PRO PLAYERS</h2>
          </div>
          <button
            type="button"
            className="hub-more-btn"
            onClick={() => onSelectSection('PRO_RD')}
          >
            Ver noticias de eSports RD →
          </button>
        </div>

        <div className="players-grid">
          {DOMINICAN_PRO_PLAYERS.map((player) => (
            <article key={player.id} className="player-card">
              <div className="player-card-top">
                <img
                  src={player.avatar}
                  alt={player.gamertag}
                  className="player-avatar-img"
                  loading="lazy"
                />
                <span className="player-badge">{player.badge}</span>
                <div className="player-overlay-info">
                  <span className="player-game-tag">{player.game}</span>
                  <h3 className="player-gamertag">{player.gamertag}</h3>
                  <span className="player-realname">{player.realName}</span>
                </div>
              </div>

              <div className="player-card-body">
                <div className="player-achievement">🏆 {player.achievement}</div>
                <p className="player-bio">{player.bio}</p>
                <button
                  type="button"
                  className="player-filter-btn"
                  onClick={() => {
                    onFilterByTag(player.tag);
                    window.scrollTo({ top: 450, behavior: 'smooth' });
                  }}
                >
                  Ver noticias sobre {player.gamertag}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECCIÓN 2: MEJORES INSTITUCIONES DE PROGRAMADORES, IA Y VIDEOJUEGOS EN RD */}
      <section className="hub-section" aria-label="Instituciones de Programación y Videojuegos en RD">
        <div className="section-header-bar">
          <div className="section-title-group">
            <span className="neon-bar" />
            <h2 className="section-heading">
              🎓 TOP INSTITUCIONES DE PROGRAMADORES, IA Y VIDEOJUEGOS EN RD
            </h2>
          </div>
          <button
            type="button"
            className="hub-more-btn"
            onClick={() => onSelectSection('ACADEMIA_RD')}
          >
            Ver sección Academia Tech RD →
          </button>
        </div>

        <div className="institutions-grid">
          {DOMINICAN_TECH_INSTITUTIONS.map((inst) => (
            <article key={inst.id} className="institution-card">
              <div className="inst-header">
                <div className="inst-acronym-box">{inst.acronym}</div>
                <div>
                  <h3 className="inst-name">{inst.name}</h3>
                  <span className="inst-city">📍 {inst.city}</span>
                </div>
              </div>

              <p className="inst-highlight">{inst.highlight}</p>

              <div className="inst-programs">
                <span className="inst-programs-label">Carreras y Especialidades Clave:</span>
                <div className="inst-chips">
                  {inst.programs.map((prog) => (
                    <span key={prog} className="inst-chip">
                      {prog}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="inst-action-btn"
                onClick={() => {
                  onFilterByTag(inst.tag);
                  window.scrollTo({ top: 450, behavior: 'smooth' });
                }}
              >
                Explorar artículos de {inst.acronym} →
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
