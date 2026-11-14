import { INITIAL_ARTICLES } from '../data/articles';

const STORAGE_KEYS = {
  ARTICLES: 'tecgamer_rd_articles_v2',
  BOOKMARKS: 'tecgamer_rd_bookmarks_v2',
  COMMENTS: 'tecgamer_rd_comments_v2',
  SUPABASE_CONFIG: 'tecgamer_rd_supabase_config_v1',
};

// Configuración oficial en la nube (Supabase - Tec&gamer RD)
const DEFAULT_SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://eyfuuuowtkxozpfjvdki.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_b4iHjDeqd2RplWFuVW2eYg_f1ofq69w';

function mapRowToArticle(row) {
  return {
    id: row.id,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    platform: row.platform,
    secondaryPlatforms: row.secondary_platforms || [],
    author: row.author,
    authorRole: row.author_role || 'Colaborador Tec&gamer 🇩🇴',
    publishedAt: row.published_at || 'Reciente',
    readTime: row.read_time || '4 min lectura',
    views: row.views || '1.5K',
    featured: row.featured,
    image: row.image,
    tags: row.tags || [],
    content: Array.isArray(row.content) ? row.content : [row.content],
  };
}

function mapArticleToRow(art) {
  return {
    id: art.id,
    title: art.title,
    excerpt: art.excerpt,
    category: art.category,
    platform: art.platform,
    secondary_platforms: art.secondaryPlatforms || [],
    author: art.author,
    author_role: art.authorRole || 'Colaborador Tec&gamer 🇩🇴',
    published_at: art.publishedAt || 'Reciente',
    read_time: art.readTime || '4 min lectura',
    views: art.views || '1.5K',
    featured: art.featured || null,
    image: art.image,
    tags: art.tags || [],
    content: art.content || [],
  };
}

export const newsService = {
  getSupabaseCredentials() {
    if (DEFAULT_SUPABASE_URL && DEFAULT_SUPABASE_ANON_KEY) {
      return {
        url: DEFAULT_SUPABASE_URL.replace(/\/$/, ''),
        key: DEFAULT_SUPABASE_ANON_KEY,
        source: 'cloud',
      };
    }
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SUPABASE_CONFIG);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.url && parsed.key) {
          return { url: parsed.url.replace(/\/$/, ''), key: parsed.key, source: 'local' };
        }
      }
    } catch {
      // ignore
    }
    return null;
  },

  isCloudConfigured() {
    return Boolean(this.getSupabaseCredentials());
  },

  getHeaders(creds, prefer = 'return=representation') {
    return {
      apikey: creds.key,
      Authorization: `Bearer ${creds.key}`,
      'Content-Type': 'application/json',
      Prefer: prefer,
    };
  },

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

  async fetchCloudArticles() {
    const creds = this.getSupabaseCredentials();
    if (!creds) return { articles: this.getArticles(), isCloud: false };

    try {
      const res = await fetch(
        `${creds.url}/rest/v1/articles?select=*&order=created_at.desc`,
        {
          headers: this.getHeaders(creds),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const rows = await res.json();

      // Si la tabla en Supabase está recién creada y vacía, subimos automáticamente las 8 noticias iniciales
      if (Array.isArray(rows) && rows.length === 0) {
        const seedPayload = INITIAL_ARTICLES.map(mapArticleToRow);
        const seedRes = await fetch(`${creds.url}/rest/v1/articles`, {
          method: 'POST',
          headers: this.getHeaders(creds),
          body: JSON.stringify(seedPayload),
        });
        if (seedRes.ok) {
          const seededRows = await seedRes.json();
          const mapped = seededRows.map(mapRowToArticle);
          localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(mapped));
          return { articles: mapped, isCloud: true };
        }
      }

      const mapped = rows.map(mapRowToArticle);
      localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(mapped));
      return { articles: mapped, isCloud: true };
    } catch (err) {
      console.warn('Usando respaldo local:', err);
      return { articles: this.getArticles(), isCloud: false, error: err.message };
    }
  },

  async createArticle(newArticleData) {
    const current = this.getArticles();
    const created = {
      id: `art-${Date.now()}`,
      title: newArticleData.title.trim(),
      excerpt: newArticleData.excerpt.trim(),
      category: newArticleData.category || 'Videojuegos',
      platform: newArticleData.platform || 'GAMING',
      secondaryPlatforms: newArticleData.secondaryPlatforms || [],
      author: newArticleData.author?.trim() || 'Joan Torres',
      authorRole: 'Editor Jefe Tec&gamer 🇩🇴',
      publishedAt: new Date().toLocaleDateString('es-DO', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
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

    const creds = this.getSupabaseCredentials();
    if (creds) {
      try {
        if (created.featured === 'main') {
          await fetch(`${creds.url}/rest/v1/articles?featured=eq.main`, {
            method: 'PATCH',
            headers: this.getHeaders(creds),
            body: JSON.stringify({ featured: 'secondary' }),
          });
        }
        await fetch(`${creds.url}/rest/v1/articles`, {
          method: 'POST',
          headers: this.getHeaders(creds),
          body: JSON.stringify(mapArticleToRow(created)),
        });
        const refreshed = await this.fetchCloudArticles();
        return refreshed.articles;
      } catch (e) {
        console.error('Error guardando noticia en Supabase:', e);
      }
    }

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

  async deleteArticle(articleId) {
    const creds = this.getSupabaseCredentials();
    if (creds) {
      try {
        await fetch(
          `${creds.url}/rest/v1/articles?id=eq.${encodeURIComponent(articleId)}`,
          {
            method: 'DELETE',
            headers: this.getHeaders(creds),
          }
        );
        const refreshed = await this.fetchCloudArticles();
        return refreshed.articles;
      } catch (e) {
        console.error('Error eliminando noticia en Supabase:', e);
      }
    }
    const updated = this.getArticles().filter((a) => a.id !== articleId);
    localStorage.setItem(STORAGE_KEYS.ARTICLES, JSON.stringify(updated));
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

  async fetchComments(articleId) {
    const creds = this.getSupabaseCredentials();
    if (creds) {
      try {
        const res = await fetch(
          `${creds.url}/rest/v1/comments?article_id=eq.${encodeURIComponent(
            articleId
          )}&select=*&order=created_at.desc`,
          { headers: this.getHeaders(creds) }
        );
        if (res.ok) {
          const rows = await res.json();
          if (rows.length > 0) return rows;
        }
      } catch {
        // fallback local
      }
    }
    return this.getComments(articleId);
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

  async addComment(articleId, author, text) {
    const newComment = {
      id: `c-${Date.now()}`,
      article_id: articleId,
      author: author.trim() || 'Gamer Dominicano 🇩🇴',
      time: new Date().toLocaleDateString('es-DO', {
        day: '2-digit',
        month: 'short',
      }),
      text: text.trim(),
    };

    const creds = this.getSupabaseCredentials();
    if (creds) {
      try {
        await fetch(`${creds.url}/rest/v1/comments`, {
          method: 'POST',
          headers: this.getHeaders(creds),
          body: JSON.stringify(newComment),
        });
        return await this.fetchComments(articleId);
      } catch (e) {
        console.error('Error guardando comentario en Supabase:', e);
      }
    }

    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMMENTS);
      const all = saved ? JSON.parse(saved) : {};
      const currentList = this.getComments(articleId);
      const updatedList = [newComment, ...currentList];
      all[articleId] = updatedList;
      localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(all));
      return updatedList;
    } catch {
      return [];
    }
  },
};
