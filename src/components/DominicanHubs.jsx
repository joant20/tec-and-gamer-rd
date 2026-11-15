import React, { useState } from 'react';
import { DOMINICAN_PRO_PLAYERS, DOMINICAN_TECH_INSTITUTIONS } from '../data/articles';

export default function DominicanHubs({ onFilterByTag, onSelectSection }) {
  const [activeVideoPlayer, setActiveVideoPlayer] = useState(null);

  return (
    <div className="container dominican-hubs-wrapper">
      {/* SECCIÓN 1: JUGADORES FAMOSOS DE REPÚBLICA DOMINICANA */}
      <section className="hub-section" aria-label="Jugadores Famosos de República Dominicana">
        <div className="section-header-bar">
          <div className="section-title-group">
            <span className="neon-bar-rd" />
            <div>
              <h2 className="section-heading">
                🇩🇴 ORGULLO DOMINICANO: JUGADORES PRO & GAMEPLAY EN TORNEOS
              </h2>
              <p className="section-subheading">
                Conoce los rostros reales de nuestras leyendas de eSports y mira sus partidas oficiales en torneos mundiales
              </p>
            </div>
          </div>
          <button
            type="button"
            className="hub-more-btn"
            onClick={() => onSelectSection('PRO_RD')}
          >
            Ver noticias de eSports RD →
          </button>
        </div>

        {/* REPRODUCTOR DESTACADO DE PARTIDAS PRO CUANDO SE SELECCIONA UN JUGADOR */}
        {activeVideoPlayer && (
          <div className="pro-gameplay-theater" id="pro-gameplay-theater">
            <div className="pro-gameplay-header">
              <div className="pro-gameplay-Identity">
                <img
                  src={activeVideoPlayer.avatar}
                  alt={activeVideoPlayer.gamertag}
                  className="pro-gameplay-mini-avatar"
                />
                <div>
                  <span className="pro-gameplay-live-pill">🔴 GAMEPLAY OFICIAL DE TORNEO</span>
                  <h3 className="pro-gameplay-title">
                    {activeVideoPlayer.gamertag} ({activeVideoPlayer.realName}) — {activeVideoPlayer.matchTitle}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                className="pro-gameplay-close"
                onClick={() => setActiveVideoPlayer(null)}
              >
                ✕ Cerrar video
              </button>
            </div>

            <div className="pro-gameplay-iframe-wrap">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoPlayer.youtubeId}?autoplay=1&rel=0`}
                title={activeVideoPlayer.matchTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="pro-gameplay-iframe"
              />
            </div>

            <div className="pro-gameplay-switcher">
              <span className="pro-switcher-label">Cambiar partida de jugador:</span>
              <div className="pro-switcher-buttons">
                {DOMINICAN_PRO_PLAYERS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`pro-switcher-btn ${
                      activeVideoPlayer.id === p.id ? 'active' : ''
                    }`}
                    onClick={() => setActiveVideoPlayer(p)}
                  >
                    <img src={p.avatar} alt={p.gamertag} className="pro-switcher-avatar" />
                    <span>▶ {p.gamertag}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="players-grid">
          {DOMINICAN_PRO_PLAYERS.map((player) => {
            const isPlayingThis = activeVideoPlayer?.id === player.id;
            return (
              <article
                key={player.id}
                className={`player-card ${isPlayingThis ? 'player-card-active-video' : ''}`}
              >
                <div
                  className="player-card-top"
                  onClick={() => {
                    setActiveVideoPlayer(player);
                    const el = document.getElementById('pro-gameplay-theater');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  role="button"
                  tabIndex={0}
                  title={`Ver video de ${player.gamertag} jugando`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveVideoPlayer(player);
                    }
                  }}
                >
                  <img
                    src={player.avatar}
                    alt={`${player.gamertag} (${player.realName})`}
                    className="player-avatar-img"
                    loading="lazy"
                  />
                  <span className="player-badge">{player.badge}</span>
                  <span className="player-watch-pill">
                    ▶ Ver Jugando
                  </span>
                  <div className="player-overlay-info">
                    <span className="player-game-tag">{player.game}</span>
                    <h3 className="player-gamertag">{player.gamertag}</h3>
                    <span className="player-realname">{player.realName}</span>
                  </div>
                </div>

                <div className="player-card-body">
                  <div className="player-achievement">🏆 {player.achievement}</div>
                  <p className="player-bio">{player.bio}</p>

                  {player.matchTitle && (
                    <div className="player-match-preview-box">
                      <span className="player-match-label">🎮 Partida destacada:</span>
                      <span className="player-match-name">{player.matchTitle}</span>
                    </div>
                  )}

                  <div className="player-card-actions">
                    <button
                      type="button"
                      className={`player-watch-btn ${isPlayingThis ? 'playing' : ''}`}
                      onClick={() => {
                        setActiveVideoPlayer(player);
                        setTimeout(() => {
                          const el = document.getElementById('pro-gameplay-theater');
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 80);
                      }}
                    >
                      {isPlayingThis ? '🔴 Reproduciendo Partida...' : `▶ Ver a ${player.gamertag} Jugando`}
                    </button>

                    <button
                      type="button"
                      className="player-filter-btn"
                      onClick={() => {
                        onFilterByTag(player.tag);
                        window.scrollTo({ top: 450, behavior: 'smooth' });
                      }}
                    >
                      📰 Noticias de {player.gamertag}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
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
