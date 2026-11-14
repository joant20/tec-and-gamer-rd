import React from 'react';

export default function NewsCard({ article, onSelect, isBookmarked, onToggleBookmark }) {
  return (
    <article className="news-card" onClick={() => onSelect(article)}>
      <div className="news-card-media">
        <img
          src={article.image}
          alt={article.title}
          className="news-card-img"
          loading="lazy"
        />
        <div className="news-card-top-badges">
          <span className={`badge-platform badge-${article.platform.toLowerCase()}`}>
            {article.platform}
          </span>
          {article.secondaryPlatforms?.map((sp) => (
            <span key={sp} className="badge-platform-mini">
              {sp}
            </span>
          ))}
        </div>

        <button
          type="button"
          className={`card-bookmark-btn ${isBookmarked ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleBookmark(article.id);
          }}
          title={isBookmarked ? 'Quitar de guardadas' : 'Guardar noticia'}
          aria-label="Guardar noticia"
        >
          {isBookmarked ? '★' : '☆'}
        </button>
      </div>

      <div className="news-card-body">
        <div className="news-card-submeta">
          <span className="news-card-category">{article.category}</span>
          <span className="news-card-time">{article.publishedAt}</span>
        </div>

        <h3 className="news-card-title">{article.title}</h3>
        <p className="news-card-excerpt">{article.excerpt}</p>

        <div className="news-card-footer">
          <div className="author-chip">
            <span className="author-avatar">{article.author.charAt(0)}</span>
            <span className="author-name">{article.author}</span>
          </div>
          <div className="card-stats">
            <span>{article.readTime}</span>
            <span className="read-more-arrow">Leer →</span>
          </div>
        </div>
      </div>
    </article>
  );
}
