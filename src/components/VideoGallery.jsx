import React, { useState } from 'react';
import { FEATURED_VIDEOS } from '../data/articles';

export default function VideoGallery({ articles, onSelectArticle }) {
  const [activeVideo, setActiveVideo] = useState(FEATURED_VIDEOS[0]);

  const handleOpenRelatedArticle = (articleId) => {
    const found = articles?.find((a) => a.id === articleId);
    if (found) {
      onSelectArticle(found);
    }
  };

  return (
    <section className="video-gallery-section container" id="trailers" aria-label="Tráilers y Videos de Videojuegos">
      <div className="section-header-bar">
        <div className="section-title-group">
          <span className="neon-bar-purple" />
          <h2 className="section-heading">🎬 TRÁILERS Y VIDEOS OFICIALES</h2>
        </div>
        <span className="section-live-tag">CINE GAMER HD</span>
      </div>

      <div className="video-theater-grid">
        {/* Reproductor Principal */}
        <div className="video-main-player-card">
          <div className="video-iframe-container">
            <iframe
              key={activeVideo.youtubeId}
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0`}
              title={activeVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="video-iframe"
            />
          </div>

          <div className="video-main-info">
            <div className="video-main-meta">
              <span className="badge-hot">{activeVideo.badge}</span>
              <span className="badge-category">{activeVideo.game}</span>
              <span className="video-platform-text">{activeVideo.platform}</span>
            </div>
            <h3 className="video-main-title">{activeVideo.title}</h3>
            {activeVideo.articleId && (
              <button
                type="button"
                className="video-related-article-btn"
                onClick={() => handleOpenRelatedArticle(activeVideo.articleId)}
              >
                📰 Leer noticia y requisitos de {activeVideo.game} →
              </button>
            )}
          </div>
        </div>

        {/* Lista de Reproducción de Tráilers */}
        <div className="video-playlist">
          <div className="playlist-header">
            <span>▶ Selecciona un tráiler para reproducir</span>
            <span className="playlist-count">{FEATURED_VIDEOS.length} videos</span>
          </div>

          <div className="playlist-items">
            {FEATURED_VIDEOS.map((vid) => {
              const isSelected = vid.id === activeVideo.id;
              return (
                <button
                  key={vid.id}
                  type="button"
                  className={`playlist-item-card ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveVideo(vid)}
                >
                  <div className="playlist-thumb-wrapper">
                    <img
                      src={`https://i.ytimg.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                      alt={vid.title}
                      className="playlist-thumb"
                      loading="lazy"
                    />
                    <span className="playlist-play-icon">{isSelected ? '🔊' : '▶'}</span>
                    <span className="playlist-duration">{vid.duration}</span>
                  </div>

                  <div className="playlist-item-info">
                    <span className="playlist-game-tag">{vid.game}</span>
                    <h4 className="playlist-item-title">{vid.title}</h4>
                    <span className="playlist-item-plat">{vid.platform}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
