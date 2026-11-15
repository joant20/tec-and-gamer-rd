import React, { useState, useEffect, useMemo } from 'react';
import {
  newsService,
  parseViewsCount,
  formatViewsCount,
} from '../services/newsService';
import { extractYouTubeId } from '../data/articles';

export default function AdminDashboardModal({
  isOpen,
  onClose,
  articles,
  siteConfig,
  onSaveSiteConfig,
  onOpenCreateArticle,
  onEditArticle,
  onDeleteArticle,
  onSetMainHero,
  onOpenSeoModal,
}) {
  const [activeTab, setActiveTab] = useState('views');
  const [activity, setActivity] = useState({ comments: [], subscribers: [] });
  const [loadingActivity, setLoadingActivity] = useState(false);

  // Estado para subir nuevo video/tráiler
  const [vidTitle, setVidTitle] = useState('');
  const [vidGame, setVidGame] = useState('');
  const [vidPlatform, setVidPlatform] = useState('PS5 • Xbox Series X|S • PC');
  const [vidBadge, setVidBadge] = useState('🔥 NUEVO TRÁILER');
  const [vidUrl, setVidUrl] = useState('');
  const [vidDuration, setVidDuration] = useState('2:15');
  const [vidError, setVidError] = useState('');
  const [savingConfig, setSavingConfig] = useState(false);

  // Estado para barra "EN DIRECTO"
  const [newHeadline, setNewHeadline] = useState('');

  useEffect(() => {
    if (isOpen) {
      setLoadingActivity(true);
      newsService.fetchAdminActivity().then((res) => {
        setActivity(res);
        setLoadingActivity(false);
      });
    }
  }, [isOpen]);

  const sortedByViews = useMemo(() => {
    return [...(articles || [])].sort(
      (a, b) => parseViewsCount(b.views) - parseViewsCount(a.views)
    );
  }, [articles]);

  const maxArticleViews = useMemo(() => {
    if (!sortedByViews.length) return 1;
    return Math.max(...sortedByViews.map((a) => parseViewsCount(a.views)), 1);
  }, [sortedByViews]);

  const totalPortalViews = useMemo(() => {
    return (articles || []).reduce((acc, a) => acc + parseViewsCount(a.views), 0);
  }, [articles]);

  if (!isOpen) return null;

  const handleAddVideo = async (e) => {
    e.preventDefault();
    const ytId = extractYouTubeId(vidUrl);
    if (!ytId) {
      setVidError('⚠️ Pega un enlace válido de YouTube (ej. https://www.youtube.com/watch?v=...)');
      return;
    }
    setVidError('');
    setSavingConfig(true);
    const createdVideo = {
      id: `vid-${Date.now()}`,
      title: vidTitle.trim(),
      game: vidGame.trim() || 'Videojuego',
      platform: vidPlatform.trim() || 'Multiplataforma',
      duration: vidDuration.trim() || '2:00',
      youtubeId: ytId,
      badge: vidBadge.trim() || '🎬 TRÁILER',
    };
    const nextVideos = [createdVideo, ...(siteConfig?.featuredVideos || [])];
    await onSaveSiteConfig({
      ...siteConfig,
      featuredVideos: nextVideos,
    });
    setSavingConfig(false);
    setVidTitle('');
    setVidGame('');
    setVidUrl('');
  };

  const handleRemoveVideo = async (vidId) => {
    setSavingConfig(true);
    const nextVideos = (siteConfig?.featuredVideos || []).filter((v) => v.id !== vidId);
    await onSaveSiteConfig({
      ...siteConfig,
      featuredVideos: nextVideos,
    });
    setSavingConfig(false);
  };

  const handleMoveVideoTop = async (vidId) => {
    const current = siteConfig?.featuredVideos || [];
    const target = current.find((v) => v.id === vidId);
    if (!target) return;
    setSavingConfig(true);
    const nextVideos = [target, ...current.filter((v) => v.id !== vidId)];
    await onSaveSiteConfig({
      ...siteConfig,
      featuredVideos: nextVideos,
    });
    setSavingConfig(false);
  };

  const handleAddHeadline = async (e) => {
    e.preventDefault();
    if (!newHeadline.trim()) return;
    setSavingConfig(true);
    const nextHeadlines = [
      newHeadline.trim(),
      ...(siteConfig?.breakingHeadlines || []),
    ];
    await onSaveSiteConfig({
      ...siteConfig,
      breakingHeadlines: nextHeadlines,
    });
    setNewHeadline('');
    setSavingConfig(false);
  };

  const handleDeleteHeadline = async (idx) => {
    setSavingConfig(true);
    const nextHeadlines = (siteConfig?.breakingHeadlines || []).filter(
      (_, i) => i !== idx
    );
    await onSaveSiteConfig({
      ...siteConfig,
      breakingHeadlines: nextHeadlines,
    });
    setSavingConfig(false);
  };

  const handleDeleteComment = async (commentId) => {
    await newsService.deleteCommentById(commentId);
    const refreshed = await newsService.fetchAdminActivity();
    setActivity(refreshed);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container admin-dashboard-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar panel de administrador"
        >
          ✕
        </button>

        <div className="modal-body">
          <div className="admin-dash-header">
            <div>
              <div className="section-title-group">
                <span className="neon-bar" />
                <h2 className="section-heading">
                  📊 CENTRO DE CONTROL ADMINISTRADOR — TEC&amp;GAMER RD
                </h2>
              </div>
              <p className="create-modal-subtitle" style={{ marginBottom: 0 }}>
                Monitorea las visualizaciones en tiempo real, sube noticias o tráilers y edita cualquier sección de tu web.
              </p>
            </div>

            <div className="admin-quick-btns">
              <button
                type="button"
                className="btn-publish"
                onClick={() => {
                  onClose();
                  onOpenCreateArticle();
                }}
              >
                + Subir Nueva Noticia
              </button>
              <button
                type="button"
                className="action-btn"
                onClick={() => {
                  onClose();
                  onOpenSeoModal();
                }}
              >
                🔍 Vista SEO Google
              </button>
            </div>
          </div>

          {/* Tarjetas de Estadísticas Globales */}
          <div className="admin-kpi-grid">
            <div className="admin-kpi-card">
              <span className="kpi-label">👁️ Visualizaciones Totales</span>
              <span className="kpi-value text-cyan">
                {formatViewsCount(totalPortalViews)}
              </span>
              <span className="kpi-sub">Suma de lecturas en todas las noticias</span>
            </div>

            <div className="admin-kpi-card">
              <span className="kpi-label">📰 Noticias Publicadas</span>
              <span className="kpi-value">{articles?.length || 0}</span>
              <span className="kpi-sub">Sincronizadas en Supabase Cloud</span>
            </div>

            <div className="admin-kpi-card">
              <span className="kpi-label">🎬 Tráilers Activos</span>
              <span className="kpi-value">
                {siteConfig?.featuredVideos?.length || 0}
              </span>
              <span className="kpi-sub">Videos en la sala de cine</span>
            </div>

            <div className="admin-kpi-card">
              <span className="kpi-label">📧 Suscriptores &amp; Comentarios</span>
              <span className="kpi-value">
                {(activity.subscribers?.length || 0) + (activity.comments?.length || 0)}
              </span>
              <span className="kpi-sub">
                {activity.subscribers?.length || 0} correos • {activity.comments?.length || 0} comentarios
              </span>
            </div>
          </div>

          {/* Pestañas del Panel Admin */}
          <div className="admin-tabs-bar">
            <button
              type="button"
              className={`admin-tab-btn ${activeTab === 'views' ? 'active' : ''}`}
              onClick={() => setActiveTab('views')}
            >
              📊 Visualizaciones y Noticias ({articles?.length || 0})
            </button>
            <button
              type="button"
              className={`admin-tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
              onClick={() => setActiveTab('videos')}
            >
              🎬 Subir / Editar Tráilers ({siteConfig?.featuredVideos?.length || 0})
            </button>
            <button
              type="button"
              className={`admin-tab-btn ${activeTab === 'ticker' ? 'active' : ''}`}
              onClick={() => setActiveTab('ticker')}
            >
              ⚡ Barra "En Directo" ({siteConfig?.breakingHeadlines?.length || 0})
            </button>
            <button
              type="button"
              className={`admin-tab-btn ${activeTab === 'community' ? 'active' : ''}`}
              onClick={() => setActiveTab('community')}
            >
              💬 Suscriptores &amp; Comentarios
            </button>
          </div>

          {/* TAB 1: VISUALIZACIONES Y GESTIÓN DE NOTICIAS */}
          {activeTab === 'views' && (
            <div className="admin-tab-content">
              <div className="admin-list-header">
                <span>Ranking de Noticias por Visualizaciones y Acciones Rápidas</span>
              </div>

              <div className="admin-articles-table">
                {sortedByViews.map((art, index) => {
                  const viewsNum = parseViewsCount(art.views);
                  const pct = Math.min(
                    100,
                    Math.max(8, Math.round((viewsNum / maxArticleViews) * 100))
                  );
                  const isMain = art.featured === 'main';

                  return (
                    <div key={art.id} className="admin-article-row">
                      <div className="admin-art-rank">#{index + 1}</div>

                      <img
                        src={art.image}
                        alt={art.title}
                        className="admin-art-thumb"
                      />

                      <div className="admin-art-main">
                        <div className="admin-art-badges">
                          <span className={`badge-platform badge-${art.platform.toLowerCase()}`}>
                            {art.platform}
                          </span>
                          <span className="badge-category">{art.category}</span>
                          {isMain && (
                            <span className="badge-hot">⭐ PORTADA PRINCIPAL</span>
                          )}
                        </div>
                        <h4 className="admin-art-title">{art.title}</h4>
                        <div className="admin-views-bar-wrap">
                          <div
                            className="admin-views-bar-fill"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>

                      <div className="admin-art-views-box">
                        <span className="views-number">👁️ {art.views}</span>
                        <span className="views-label">visualizaciones</span>
                      </div>

                      <div className="admin-art-actions">
                        {!isMain && (
                          <button
                            type="button"
                            className="admin-mini-btn"
                            title="Poner como noticia principal en la portada"
                            onClick={() => onSetMainHero(art.id)}
                          >
                            ⭐ Hacer Portada
                          </button>
                        )}
                        <button
                          type="button"
                          className="admin-mini-btn edit"
                          onClick={() => {
                            onClose();
                            onEditArticle(art);
                          }}
                        >
                          ✏️ Editar
                        </button>
                        <button
                          type="button"
                          className="admin-mini-btn delete"
                          onClick={() => {
                            if (
                              window.confirm(
                                `¿Seguro que quieres borrar "${art.title}"?`
                              )
                            ) {
                              onDeleteArticle(art.id);
                            }
                          }}
                        >
                          🗑️ Borrar
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: SUBIR Y GESTIONAR TRÁILERS / VIDEOS */}
          {activeTab === 'videos' && (
            <div className="admin-tab-content">
              <form className="admin-box-form" onSubmit={handleAddVideo}>
                <h4>➕ Subir Nuevo Tráiler o Video a la Portada</h4>
                <div className="form-row-2">
                  <div className="form-group">
                    <label>Título del Video *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. GTA VI — Segundo Tráiler Oficial"
                      value={vidTitle}
                      onChange={(e) => setVidTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Link de YouTube *</label>
                    <input
                      type="text"
                      required
                      placeholder="https://www.youtube.com/watch?v=..."
                      value={vidUrl}
                      onChange={(e) => {
                        setVidUrl(e.target.value);
                        setVidError('');
                      }}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Juego / Tema</label>
                    <input
                      type="text"
                      placeholder="Ej. Grand Theft Auto VI"
                      value={vidGame}
                      onChange={(e) => setVidGame(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Plataformas / Etiqueta</label>
                    <input
                      type="text"
                      placeholder="PS5 • Xbox Series X|S • PC"
                      value={vidPlatform}
                      onChange={(e) => setVidPlatform(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Insignia Destacada</label>
                    <input
                      type="text"
                      placeholder="🔥 #1 EN TENDENCIA"
                      value={vidBadge}
                      onChange={(e) => setVidBadge(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Duración (ej. 2:30)</label>
                    <input
                      type="text"
                      placeholder="2:30"
                      value={vidDuration}
                      onChange={(e) => setVidDuration(e.target.value)}
                    />
                  </div>
                </div>

                {vidError && <div className="delete-error-msg">{vidError}</div>}

                <button
                  type="submit"
                  className="btn-publish"
                  disabled={savingConfig}
                  style={{ alignSelf: 'flex-start' }}
                >
                  {savingConfig ? 'Guardando...' : '🎬 Publicar Video en la Sala de Cine'}
                </button>
              </form>

              <div className="admin-list-header" style={{ marginTop: '1.5rem' }}>
                <span>Videos actualmente en la Sala de Cine</span>
              </div>

              <div className="admin-articles-table">
                {(siteConfig?.featuredVideos || []).map((vid, idx) => (
                  <div key={vid.id} className="admin-article-row">
                    <div className="admin-art-rank">#{idx + 1}</div>
                    <img
                      src={`https://i.ytimg.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                      alt={vid.title}
                      className="admin-art-thumb"
                    />
                    <div className="admin-art-main">
                      <span className="badge-category">{vid.game}</span>
                      <h4 className="admin-art-title">{vid.title}</h4>
                    </div>
                    <div className="admin-art-actions">
                      {idx > 0 && (
                        <button
                          type="button"
                          className="admin-mini-btn"
                          onClick={() => handleMoveVideoTop(vid.id)}
                        >
                          ⬆️ Poner #1
                        </button>
                      )}
                      <button
                        type="button"
                        className="admin-mini-btn delete"
                        onClick={() => handleRemoveVideo(vid.id)}
                      >
                        🗑️ Quitar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: BARRA SUPERIOR "EN DIRECTO" */}
          {activeTab === 'ticker' && (
            <div className="admin-tab-content">
              <form className="admin-box-form" onSubmit={handleAddHeadline}>
                <h4>⚡ Agregar Nuevo Aviso a la Barra "EN DIRECTO"</h4>
                <div className="form-group">
                  <label>Texto del titular en directo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. 🔥 ÚLTIMA HORA: Nuevo torneo nacional de Valorant confirmado en Santo Domingo..."
                    value={newHeadline}
                    onChange={(e) => setNewHeadline(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-publish"
                  disabled={savingConfig}
                  style={{ alignSelf: 'flex-start' }}
                >
                  {savingConfig ? 'Guardando...' : '+ Agregar Titular en Directo'}
                </button>
              </form>

              <div className="admin-list-header" style={{ marginTop: '1.5rem' }}>
                <span>Titulares activos en la barra superior</span>
              </div>

              <div className="admin-articles-table">
                {(siteConfig?.breakingHeadlines || []).map((hl, idx) => (
                  <div key={idx} className="admin-article-row">
                    <div className="admin-art-rank">#{idx + 1}</div>
                    <div className="admin-art-main">
                      <h4 className="admin-art-title">{hl}</h4>
                    </div>
                    <div className="admin-art-actions">
                      <button
                        type="button"
                        className="admin-mini-btn delete"
                        onClick={() => handleDeleteHeadline(idx)}
                      >
                        🗑️ Borrar aviso
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: SUSCRIPTORES Y COMENTARIOS */}
          {activeTab === 'community' && (
            <div className="admin-tab-content">
              {loadingActivity ? (
                <p>Cargando datos desde Supabase...</p>
              ) : (
                <div className="form-row-2">
                  <div>
                    <div className="admin-list-header">
                      <span>📧 Suscriptores al Radar Semanal ({activity.subscribers.length})</span>
                    </div>
                    {activity.subscribers.length === 0 ? (
                      <p className="create-modal-subtitle">
                        Aún no hay correos registrados en el boletín.
                      </p>
                    ) : (
                      <div className="admin-articles-table">
                        {activity.subscribers.map((sub) => (
                          <div key={sub.id} className="admin-article-row">
                            <div className="admin-art-main">
                              <h4 className="admin-art-title">{sub.text}</h4>
                              <span style={{ fontSize: '0.75rem', color: '#9ba6be' }}>
                                Registrado: {sub.time}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="admin-list-header">
                      <span>💬 Comentarios Recientes ({activity.comments.length})</span>
                    </div>
                    {activity.comments.length === 0 ? (
                      <p className="create-modal-subtitle">
                        Aún no hay comentarios nuevos en la nube.
                      </p>
                    ) : (
                      <div className="admin-articles-table">
                        {activity.comments.map((com) => (
                          <div key={com.id} className="admin-article-row">
                            <div className="admin-art-main">
                              <span style={{ fontSize: '0.78rem', color: '#00f0ff', fontWeight: 700 }}>
                                {com.author} ({com.time})
                              </span>
                              <p style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{com.text}</p>
                            </div>
                            <button
                              type="button"
                              className="admin-mini-btn delete"
                              onClick={() => handleDeleteComment(com.id)}
                            >
                              🗑️
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
