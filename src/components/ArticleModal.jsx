import React, { useState, useEffect } from 'react';
import { newsService } from '../services/newsService';
import { getArticleYouTubeId } from '../data/articles';

export default function ArticleModal({
  article,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onSelectTag,
  isAdmin,
  onEditArticle,
  onDeleteArticle,
}) {
  const [comments, setComments] = useState([]);
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');
  const [copied, setCopied] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (article) {
      setShowDeleteConfirm(false);
      setComments(newsService.getComments(article.id));
      newsService.fetchComments(article.id).then((list) => {
        if (Array.isArray(list)) setComments(list);
      });
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [article]);

  if (!article) return null;

  const youtubeId = getArticleYouTubeId(article);
  const visibleTags = (article.tags || []).filter((t) => !t.toLowerCase().startsWith('video:'));

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const updated = await newsService.addComment(article.id, commentAuthor, commentText);
    setComments(updated);
    setCommentText('');
  };

  const handleCopyShare = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?noticia=${encodeURIComponent(
      article.id
    )}`;
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2800);
  };

  const handleConfirmDelete = async () => {
    setDeleting(true);
    await onDeleteArticle?.(article.id);
    setDeleting(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar artículo"
        >
          ✕
        </button>

        <div className="modal-hero">
          <img src={article.image} alt={article.title} className="modal-hero-img" />
          <div className="modal-hero-overlay" />
          <div className="modal-hero-badges">
            <span className={`badge-platform badge-${article.platform.toLowerCase()}`}>
              {article.platform}
            </span>
            {article.secondaryPlatforms?.map((sp) => (
              <span key={sp} className="badge-platform-mini">
                {sp}
              </span>
            ))}
            <span className="badge-category">{article.category}</span>
          </div>
        </div>

        <div className="modal-body">
          <h1 className="modal-title">{article.title}</h1>
          <p className="modal-lead">{article.excerpt}</p>

          <div className="modal-meta-bar">
            <div className="modal-author-box">
              <div className="author-avatar large">{article.author.charAt(0)}</div>
              <div>
                <div className="modal-author-name">{article.author}</div>
                <div className="modal-author-role">
                  {article.authorRole || 'Redacción Tec&gamer RD'} • {article.publishedAt} •{' '}
                  {article.readTime}
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className={`modal-action-btn ${isBookmarked ? 'active' : ''}`}
                onClick={() => onToggleBookmark(article.id)}
              >
                {isBookmarked ? '★ Guardada' : '☆ Guardar'}
              </button>
              <button type="button" className="modal-action-btn" onClick={handleCopyShare}>
                {copied ? '✓ Link directo copiado' : '🔗 Compartir Noticia'}
              </button>

              {/* Editar y Borrar SOLO son visibles para el Administrador */}
              {isAdmin && (
                <>
                  <button
                    type="button"
                    className="modal-action-btn"
                    onClick={() => onEditArticle?.(article)}
                  >
                    ✏️ Editar
                  </button>
                  <button
                    type="button"
                    className="modal-action-btn delete-btn"
                    onClick={() => setShowDeleteConfirm((prev) => !prev)}
                  >
                    🗑️ Borrar
                  </button>
                </>
              )}
            </div>
          </div>

          {isAdmin && showDeleteConfirm && (
            <div className="delete-confirm-box">
              <div className="delete-confirm-header">
                <strong>🗑️ ¿Seguro que deseas eliminar esta noticia permanentemente?</strong>
              </div>
              <div className="delete-confirm-controls">
                <button
                  type="button"
                  className="btn-confirm-delete"
                  disabled={deleting}
                  onClick={handleConfirmDelete}
                >
                  {deleting ? 'Eliminando...' : 'Sí, eliminar noticia'}
                </button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          <div className="modal-article-content">
            {article.content?.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {youtubeId && (
            <div className="modal-video-box">
              <div className="modal-video-header">
                <span>🎬 TRÁILER / VIDEO OFICIAL DEL JUEGO</span>
              </div>
              <div className="video-iframe-container">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
                  title={`Video de ${article.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="video-iframe"
                />
              </div>
            </div>
          )}

          {visibleTags.length > 0 && (
            <div className="modal-tags">
              <span className="tags-label">Temas:</span>
              {visibleTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="tag-pill"
                  onClick={() => {
                    onSelectTag(tag);
                    onClose();
                  }}
                >
                  #{tag}
                </button>
              ))}
            </div>
          )}

          {/* Sección de Comentarios */}
          <div className="modal-comments-section">
            <h3 className="comments-heading">
              💬 Comentarios de la Comunidad ({comments.length})
            </h3>

            <form className="comment-form" onSubmit={handleAddComment}>
              <div className="comment-form-row">
                <input
                  type="text"
                  placeholder="Tu Gamertag / Nombre (opcional)"
                  className="comment-input-name"
                  value={commentAuthor}
                  onChange={(e) => setCommentAuthor(e.target.value)}
                />
              </div>
              <textarea
                rows="3"
                required
                placeholder="¿Qué opinas de esta noticia? Comparte tu comentario..."
                className="comment-textarea"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button type="submit" className="comment-submit-btn">
                Publicar Comentario
              </button>
            </form>

            <div className="comments-list">
              {comments.map((c) => (
                <div key={c.id} className="comment-item">
                  <div className="comment-header">
                    <span className="comment-user">{c.author}</span>
                    <span className="comment-time">{c.time}</span>
                  </div>
                  <p className="comment-text">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
