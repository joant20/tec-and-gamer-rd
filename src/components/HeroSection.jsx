import React from 'react';

export default function HeroSection({
  mainArticle,
  secondaryArticles,
  onSelectArticle,
  bookmarks,
  onToggleBookmark,
}) {
  if (!mainArticle) return null;

  const isMainBookmarked = bookmarks.includes(mainArticle.id);

  return (
    <section className="hero-section container" aria-label="Noticias destacadas">
      <div className="section-header-bar">
        <div className="section-title-group">
          <span className="neon-bar" />
          <h2 className="section-heading">DESTACADOS DE HOY</h2>
        </div>
        <span className="section-live-tag">PORTADA</span>
      </div>

      <div className="hero-grid">
        {/* Artículo Principal */}
        <article
          className="hero-main-card"
          onClick={() => onSelectArticle(mainArticle)}
        >
          <div className="hero-img-wrapper">
            <img
              src={mainArticle.image}
              alt={mainArticle.title}
              className="hero-img"
              loading="eager"
            />
            <div className="hero-gradient-overlay" />
          </div>

          <button
            type="button"
            className={`card-bookmark-btn ${isMainBookmarked ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(mainArticle.id);
            }}
            aria-label="Guardar noticia"
            title={isMainBookmarked ? 'Quitar de guardadas' : 'Guardar para leer después'}
          >
            {isMainBookmarked ? '★' : '☆'}
          </button>

          <div className="hero-content">
            <div className="card-badges">
              <span className={`badge-platform badge-${mainArticle.platform.toLowerCase()}`}>
                {mainArticle.platform}
              </span>
              <span className="badge-category">{mainArticle.category}</span>
              <span className="badge-hot">🔥 DESTACADO</span>
            </div>

            <h1 className="hero-title">{mainArticle.title}</h1>
            <p className="hero-excerpt">{mainArticle.excerpt}</p>

            <div className="hero-meta">
              <span className="meta-author">Por {mainArticle.author}</span>
              <span className="meta-sep">•</span>
              <span>{mainArticle.publishedAt}</span>
              <span className="meta-sep">•</span>
              <span>{mainArticle.readTime}</span>
              <span className="meta-sep">•</span>
              <span className="meta-views">👁 {mainArticle.views}</span>
            </div>
          </div>
        </article>

        {/* Artículos Secundarios */}
        <div className="hero-side-column">
          {secondaryArticles.map((art) => {
            const isBookmarked = bookmarks.includes(art.id);
            return (
              <article
                key={art.id}
                className="hero-secondary-card"
                onClick={() => onSelectArticle(art)}
              >
                <div className="hero-img-wrapper">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="hero-img"
                    loading="lazy"
                  />
                  <div className="hero-gradient-overlay" />
                </div>

                <button
                  type="button"
                  className={`card-bookmark-btn ${isBookmarked ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleBookmark(art.id);
                  }}
                  aria-label="Guardar noticia"
                >
                  {isBookmarked ? '★' : '☆'}
                </button>

                <div className="hero-secondary-content">
                  <div className="card-badges">
                    <span className={`badge-platform badge-${art.platform.toLowerCase()}`}>
                      {art.platform}
                    </span>
                    <span className="badge-category">{art.category}</span>
                  </div>
                  <h3 className="hero-secondary-title">{art.title}</h3>
                  <div className="hero-meta">
                    <span>{art.publishedAt}</span>
                    <span className="meta-sep">•</span>
                    <span>{art.readTime}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
