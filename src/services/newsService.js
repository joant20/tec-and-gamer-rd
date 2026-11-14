import { INITIAL_ARTICLES } from '../data/articles';

const STORAGE_KEYS = {
  ARTICLES: 'tecgamer_rd_articles_v2',
  BOOKMARKS: 'tecgamer_rd_bookmarks_v2',
  COMMENTS: 'tecgamer_rd_comments_v2',
};

/**
 * Capa de servicio de noticias de Tec&gamer RD
 * Lista para conectar con Supabase / Firebase / API REST en producción
 */
export const newsService = {
  getArticles() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ARTICLES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error cargando noticias locales:', e);
    }
    return INITIAL_ARTICLES;
  },

  createArticle(newArticleData) {
    const current = this.getArticles();
    const created = {
      id: `art-${Date.now()}`,
      title: newArticleData.title.trim(),
      excerpt: newArticleData.excerpt.trim(),
      category: newArticleData.category || 'Videojuegos',
      platform: newArticleData.platform || 'GAMING',
      secondaryPlatforms: newArticleData.secondaryPlatforms || [],
      author: newArticleData.author?.trim() || 'Redacción Tec&gamer RD',
      authorRole: 'Colaborador Tec&gamer 🇩🇴',
      publishedAt: 'Justo ahora',
      readTime: '4 min lectura',
      views: '1.5K',
      featured: newArticleData.featured ? 'main' : null,
      image:
        newArticleData.image?.trim() ||
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1200&q=80',
      tags: newArticleData.tags
        ? newArticleData.tags.split(',').map((t) => t.trim()).filter(Boolean)
        : ['Tec&gamer', 'República Dominicana'],
      content: newArticleData.content
        .split('\n')
        .map((p) => p.trim())
        .filter(Boolean),
    };

    let updated;
    if (created.featured === 'main') {
      updated = [
        created,
        ...current.map((a) => (a.featured === 'main' ? { ...a, featured: 'secondary' } : a)),
      ];
    } else {
      updated = [created, ...current];
    }

    try {
      localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(updated));
    } catch (e) {
      console.error('Error guardando noticia:', e);
    }
    return updated;
  },

  getBookmarks() {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  },

  toggleBookmark(articleId) {
    const current = this.getBookmarks();
    const exists = current.includes(articleId);
    const updated = exists ? current.filter((id) => id !== articleId) : [...current, articleId];
    try {
      localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
    } catch (e) {
      console.error('Error guardando marcador:', e);
    }
    return updated;
  },

  getComments(articleId) {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMMENTS);
      const all = saved ? JSON.parse(saved) : {};
      return (
        all[articleId] || [
          {
            id: 'c-default-1',
            author: 'KlK_GamerRD',
            time: 'Hace 12 min',
            text: '¡Excelente artículo! Qué orgullo ver cómo crece la comunidad de programación, IA y eSports aquí en República Dominicana 🇩🇴🔥.',
          },
        ]
      );
    } catch {
      return [];
    }
  },

  addComment(articleId, author, text) {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMMENTS);
      const all = saved ? JSON.parse(saved) : {};
      const currentList = this.getComments(articleId);
      const newComment = {
        id: `c-${Date.now()}`,
        author: author.trim() || 'Gamer Dominicano 🇩🇴',
        time: 'Justo ahora',
        text: text.trim(),
      };
      const updatedList = [newComment, ...currentList];
      all[articleId] = updatedList;
      localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(all));
      return updatedList;
    } catch {
      return [];
    }
  },
};
