import React, { useState } from 'react';
import { UPCOMING_RELEASES } from '../data/articles';
import { newsService } from '../services/newsService';

export default function TrendingSidebar({ articles, onSelectArticle, onSelectPlatform }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const topArticles = articles.slice(0, 5);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    await newsService.subscribeNewsletter(email);
    setSubscribed(true);
    setEmail('');
  };

  return (
    <aside className="sidebar">
      {/* Widget: Lo Más Leído */}
      <div className="sidebar-widget">
        <div className="widget-header">
          <span className="neon-bar-purple" />
          <h3 className="widget-title">🔥 LO MÁS LEÍDO</h3>
        </div>
        <div className="trending-list">
          {topArticles.map((art, idx) => (
            <div
              key={art.id}
              className="trending-item"
              onClick={() => onSelectArticle(art)}
            >
              <span className="trending-rank">0{idx + 1}</span>
              <div className="trending-info">
                <div className="trending-meta">
                  <span className={`mini-plat plat-${art.platform.toLowerCase()}`}>
                    {art.platform}
                  </span>
                  <span className="trending-views">👁 {art.views}</span>
                </div>
                <h4 className="trending-item-title">{art.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Widget: Próximos Lanzamientos */}
      <div className="sidebar-widget">
        <div className="widget-header">
          <span className="neon-bar" />
          <h3 className="widget-title">📅 PRÓXIMOS LANZAMIENTOS</h3>
        </div>
        <div className="releases-list">
          {UPCOMING_RELEASES.map((item) => (
            <div key={item.id} className="release-card">
              <div className="release-date-box">
                <span className="release-day">{item.date.split(' ')[0]}</span>
                <span className="release-month">{item.date.split(' ')[1]}</span>
              </div>
              <div className="release-details">
                <h4 className="release-title">{item.title}</h4>
                <span className="release-genre">{item.genre}</span>
                <div className="release-platforms">
                  {item.platforms.map((p) => (
                    <button
                      key={p}
                      type="button"
                      className="release-plat-chip"
                      onClick={() => onSelectPlatform(p)}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Widget: Newsletter Gamer */}
      <div className="sidebar-widget newsletter-widget">
        <div className="newsletter-glow" />
        <h3 className="newsletter-title">⚡ RADAR SEMANAL</h3>
        <p className="newsletter-desc">
          Recibe cada viernes un resumen con los lanzamientos, ofertas y noticias clave de la industria.
        </p>
        {subscribed ? (
          <div className="newsletter-success">
            ✅ ¡Suscripción activada! Revisa tu bandeja de entrada este viernes.
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              required
              placeholder="tu@correo.com"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="newsletter-btn">
              Suscribirme Gratis
            </button>
          </form>
        )}
      </div>
    </aside>
  );
}
