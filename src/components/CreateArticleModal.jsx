import React, { useState } from 'react';
import { CATEGORIES } from '../data/articles';

const PRESET_IMAGES = [
  {
    label: 'eSports RD / Torneo',
    url: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Inteligencia Artificial',
    url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Programadores / Universidad RD',
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
  },
  {
    label: 'Videojuegos / Setup',
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function CreateArticleModal({ isOpen, onClose, onCreate }) {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [platform, setPlatform] = useState('IA');
  const [category, setCategory] = useState('Inteligencia Artificial');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(PRESET_IMAGES[0].url);
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [featured, setFeatured] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !excerpt.trim() || !content.trim()) return;
    onCreate({
      title,
      excerpt,
      platform,
      category,
      author,
      image,
      tags,
      content,
      featured,
    });
    setTitle('');
    setExcerpt('');
    setContent('');
    setTags('');
    setFeatured(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container create-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar formulario"
        >
          ✕
        </button>

        <div className="modal-body">
          <div className="section-title-group" style={{ marginBottom: '0.5rem' }}>
            <span className="neon-bar" />
            <h2 className="section-heading">PUBLICAR EN TEC&amp;GAMER RD 🇩🇴</h2>
          </div>
          <p className="create-modal-subtitle">
            Agrega una noticia sobre Inteligencia Artificial, instituciones de programación en RD, jugadores famosos o videojuegos.
          </p>

          <form onSubmit={handleSubmit} className="create-article-form">
            <div className="form-group">
              <label>Título de la noticia *</label>
              <input
                type="text"
                required
                placeholder="Ej. Estudiantes del ITLA ganan competencia latinoamericana de IA y Videojuegos..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Sección Principal *</label>
                <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
                  <option value="IA">🤖 Inteligencia Artificial</option>
                  <option value="PRO_RD">🇩🇴 Jugadores Pro RD</option>
                  <option value="ACADEMIA_RD">🎓 Instituciones &amp; Devs RD</option>
                  <option value="GAMING">🎮 Videojuegos &amp; Consolas</option>
                  <option value="HARDWARE">💻 Hardware &amp; PC</option>
                </select>
              </div>

              <div className="form-group">
                <label>Categoría *</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  {CATEGORIES.filter((c) => c !== 'Todas').map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Resumen corto (Subtítulo) *</label>
              <input
                type="text"
                required
                placeholder="Breve resumen de una o dos líneas que enganche al lector..."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>URL de Imagen de Portada (o elige una rápida)</label>
              <input
                type="url"
                placeholder="https://..."
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <div className="preset-images-bar">
                {PRESET_IMAGES.map((preset) => (
                  <button
                    key={preset.label}
                    type="button"
                    className={`preset-img-btn ${image === preset.url ? 'active' : ''}`}
                    onClick={() => setImage(preset.url)}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Contenido completo (separa párrafos con Enter) *</label>
              <textarea
                rows="5"
                required
                placeholder="Escribe aquí el cuerpo de la noticia..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label>Autor</label>
                <input
                  type="text"
                  placeholder="Ej. Joan Torres"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Etiquetas (separadas por coma)</label>
                <input
                  type="text"
                  placeholder="IA, ITLA, MenaRD, República Dominicana"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
            </div>

            <label className="checkbox-row">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
              />
              <span>🔥 Poner como Noticia Principal en Portada (Hero)</span>
            </label>

            <div className="form-actions">
              <button type="button" className="btn-cancel" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn-publish">
                Publicar en Tec&amp;gamer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
