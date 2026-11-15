import React, { useState, useMemo, useEffect } from 'react';
import { CATEGORIES, PLATFORMS } from './data/articles';
import { newsService } from './services/newsService';
import BreakingTicker from './components/BreakingTicker';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VideoGallery from './components/VideoGallery';
import NewsCard from './components/NewsCard';
import TrendingSidebar from './components/TrendingSidebar';
import DominicanHubs from './components/DominicanHubs';
import ArticleModal from './components/ArticleModal';
import CreateArticleModal from './components/CreateArticleModal';
import SeoPreviewModal from './components/SeoPreviewModal';
import AdminLoginModal from './components/AdminLoginModal';
import Footer from './components/Footer';

const ADMIN_SESSION_KEY = 'tecgamer_rd_admin_session_v1';

export default function App() {
  const [articles, setArticles] = useState(() => newsService.getArticles());
  const [bookmarks, setBookmarks] = useState(() => newsService.getBookmarks());
  const [selectedPlatform, setSelectedPlatform] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);
  const [editingArticle, setEditingArticle] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isSeoModalOpen, setIsSeoModalOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const handleLoginAdmin = () => {
    setIsAdmin(true);
    try {
      sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
    } catch {
      // ignore
    }
  };

  const handleLogoutAdmin = () => {
    setIsAdmin(false);
    setIsCreateModalOpen(false);
    setIsSeoModalOpen(false);
    setEditingArticle(null);
    try {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
    } catch {
      // ignore
    }
  };

  const handleOpenArticle = (article) => {
    setActiveArticle(article);
    if (article?.id) {
      const nextUrl = `${window.location.pathname}?noticia=${encodeURIComponent(article.id)}`;
      window.history.replaceState(null, '', nextUrl);
    }
  };

  const handleCloseArticle = () => {
    setActiveArticle(null);
    window.history.replaceState(null, '', window.location.pathname);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initialArticleId = params.get('noticia');
    if (params.has('admin')) {
      setIsAdminLoginOpen(true);
    }

    newsService.fetchCloudArticles().then((res) => {
      const loaded = res?.articles?.length > 0 ? res.articles : newsService.getArticles();
      setArticles(loaded);

      if (initialArticleId) {
        const found = loaded.find((a) => a.id === initialArticleId);
        if (found) setActiveArticle(found);
      }
    });
  }, []);

  const handleToggleBookmark = (articleId) => {
    const updated = newsService.toggleBookmark(articleId);
    setBookmarks(updated);
  };

  const handleCreateArticle = async (newArticleData) => {
    const updated = await newsService.createArticle(newArticleData);
    setArticles(updated);
  };

  const handleUpdateArticle = async (articleId, updatedData) => {
    const res = await newsService.updateArticle(articleId, updatedData);
    if (res?.articles) {
      setArticles(res.articles);
    }
    if (res?.updatedArticle) {
      setActiveArticle(res.updatedArticle);
    }
    setEditingArticle(null);
  };

  const handleDeleteArticle = async (articleId) => {
    const updated = await newsService.deleteArticle(articleId);
    setArticles(updated);
    handleCloseArticle();
  };

  const isDefaultHomeView =
    selectedPlatform === 'ALL' &&
    selectedCategory === 'Todas' &&
    !searchQuery.trim() &&
    !showBookmarksOnly;

  const mainHeroArticle = useMemo(
    () => articles.find((a) => a.featured === 'main') || articles[0],
    [articles]
  );

  const secondaryHeroArticles = useMemo(
    () =>
      articles
        .filter((a) => a.id !== mainHeroArticle?.id && a.featured === 'secondary')
        .slice(0, 2),
    [articles, mainHeroArticle]
  );

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      if (showBookmarksOnly && !bookmarks.includes(art.id)) {
        return false;
      }

      if (selectedPlatform !== 'ALL') {
        const matchesMain = art.platform === selectedPlatform;
        const matchesSecondary = art.secondaryPlatforms?.includes(selectedPlatform);
        if (!matchesMain && !matchesSecondary) return false;
      }

      if (selectedCategory !== 'Todas' && art.category !== selectedCategory) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = art.title.toLowerCase().includes(q);
        const inExcerpt = art.excerpt.toLowerCase().includes(q);
        const inTags = art.tags?.some((t) => t.toLowerCase().includes(q));
        const inPlatform = art.platform.toLowerCase().includes(q);
        const inCategory = art.category.toLowerCase().includes(q);
        if (!inTitle && !inExcerpt && !inTags && !inPlatform && !inCategory) return false;
      }

      return true;
    });
  }, [articles, bookmarks, showBookmarksOnly, selectedPlatform, selectedCategory, searchQuery]);

  const resetAllFilters = () => {
    setSelectedPlatform('ALL');
    setSelectedCategory('Todas');
    setSearchQuery('');
    setShowBookmarksOnly(false);
  };

  const currentPlatformLabel =
    PLATFORMS.find((p) => p.id === selectedPlatform)?.label || 'Todo Tec&gamer';

  return (
    <div id="top" className="app-shell">
      <BreakingTicker />

      <Navbar
        selectedPlatform={selectedPlatform}
        onSelectPlatform={setSelectedPlatform}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showBookmarksOnly={showBookmarksOnly}
        onToggleBookmarksOnly={() => setShowBookmarksOnly((prev) => !prev)}
        bookmarksCount={bookmarks.length}
        isAdmin={isAdmin}
        onOpenCreateModal={() => {
          setEditingArticle(null);
          setIsCreateModalOpen(true);
        }}
        onOpenSeoModal={() => setIsSeoModalOpen(true)}
        onLogoutAdmin={handleLogoutAdmin}
      />

      <main className="main-content">
        {isDefaultHomeView && (
          <>
            <HeroSection
              mainArticle={mainHeroArticle}
              secondaryArticles={secondaryHeroArticles}
              onSelectArticle={handleOpenArticle}
              bookmarks={bookmarks}
              onToggleBookmark={handleToggleBookmark}
            />

            <VideoGallery
              articles={articles}
              onSelectArticle={handleOpenArticle}
            />
          </>
        )}

        <section className="container content-layout">
          <div className="feed-column">
            <div className="feed-header">
              <div className="section-title-group">
                <span className="neon-bar" />
                <h2 className="section-heading">
                  {showBookmarksOnly
                    ? '★ TUS NOTICIAS GUARDADAS'
                    : selectedPlatform !== 'ALL'
                    ? `${currentPlatformLabel.toUpperCase()}`
                    : 'ÚLTIMAS NOTICIAS EN TEC&GAMER'}
                </h2>
              </div>

              <div className="category-tabs">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {!isDefaultHomeView && (
              <div className="active-filters-banner">
                <span>
                  Mostrando <strong>{filteredArticles.length}</strong>{' '}
                  {filteredArticles.length === 1 ? 'resultado' : 'resultados'}
                  {searchQuery && ` para "${searchQuery}"`}
                </span>
                <button
                  type="button"
                  className="reset-filters-btn"
                  onClick={resetAllFilters}
                >
                  Restablecer filtros ✕
                </button>
              </div>
            )}

            {filteredArticles.length === 0 ? (
              <div className="empty-state-box">
                <div className="empty-icon">🇩🇴</div>
                <h3>No encontramos noticias con esos filtros</h3>
                <p>
                  Prueba buscando otro término (ej. GTA VI, IA, ITLA, MenaRD, INTEC) o limpia los filtros activos.
                </p>
                <button type="button" className="btn-publish" onClick={resetAllFilters}>
                  Ver todas las noticias
                </button>
              </div>
            ) : (
              <div className="news-grid">
                {filteredArticles.map((article) => (
                  <NewsCard
                    key={article.id}
                    article={article}
                    onSelect={handleOpenArticle}
                    isBookmarked={bookmarks.includes(article.id)}
                    onToggleBookmark={handleToggleBookmark}
                  />
                ))}
              </div>
            )}
          </div>

          <TrendingSidebar
            articles={articles}
            onSelectArticle={handleOpenArticle}
            onSelectPlatform={setSelectedPlatform}
          />
        </section>

        {/* Secciones Especiales de República Dominicana: Jugadores Famosos e Instituciones Tech */}
        <DominicanHubs
          onFilterByTag={(tag) => {
            setSelectedPlatform('ALL');
            setSelectedCategory('Todas');
            setSearchQuery(tag);
          }}
          onSelectSection={(platId) => {
            setSearchQuery('');
            setSelectedCategory('Todas');
            setSelectedPlatform(platId);
            window.scrollTo({ top: 450, behavior: 'smooth' });
          }}
        />
      </main>

      <Footer
        onSelectPlatform={setSelectedPlatform}
        onFilterByTag={(tag) => {
          setSelectedPlatform('ALL');
          setSelectedCategory('Todas');
          setSearchQuery(tag);
        }}
        isAdmin={isAdmin}
        onOpenAdminLogin={() => setIsAdminLoginOpen(true)}
        onLogoutAdmin={handleLogoutAdmin}
      />

      <ArticleModal
        article={activeArticle}
        onClose={handleCloseArticle}
        isBookmarked={activeArticle ? bookmarks.includes(activeArticle.id) : false}
        onToggleBookmark={handleToggleBookmark}
        onSelectTag={(tag) => {
          setSearchQuery(tag);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isAdmin={isAdmin}
        onEditArticle={(art) => {
          setEditingArticle(art);
          setIsCreateModalOpen(true);
        }}
        onDeleteArticle={handleDeleteArticle}
      />

      {isAdmin && (
        <>
          <CreateArticleModal
            isOpen={isCreateModalOpen}
            onClose={() => {
              setIsCreateModalOpen(false);
              setEditingArticle(null);
            }}
            onCreate={handleCreateArticle}
            onUpdate={handleUpdateArticle}
            editingArticle={editingArticle}
          />

          <SeoPreviewModal
            isOpen={isSeoModalOpen}
            onClose={() => setIsSeoModalOpen(false)}
            articles={articles}
          />
        </>
      )}

      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={handleLoginAdmin}
      />
    </div>
  );
}
