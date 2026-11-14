import React, { useState } from 'react';

export default function SeoPreviewModal({ isOpen, onClose, articles }) {
  const [searchTerm, setSearchTerm] = useState(
    'tec&gamer noticias videojuegos e inteligencia artificial republica dominicana'
  );

  if (!isOpen) return null;

  const topArticle = articles?.[0];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container seo-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Cerrar vista previa de Google"
        >
          ✕
        </button>

        <div className="modal-body">
          <div className="section-title-group" style={{ marginBottom: '0.5rem' }}>
            <span className="neon-bar" />
            <h2 className="section-heading">🔍 CÓMO APARECE TEC&amp;GAMER EN GOOGLE Y REDES</h2>
          </div>
          <p className="create-modal-subtitle">
            Así es como los usuarios ven tu página en producción real cuando la buscan en Google o comparten el enlace en WhatsApp/Discord.
          </p>

          {/* Simulador de Búsqueda de Google */}
          <div className="google-sim-box">
            <div className="google-sim-header">
              <span className="google-logo-text">
                <span style={{ color: '#4285F4' }}>G</span>
                <span style={{ color: '#EA4335' }}>o</span>
                <span style={{ color: '#FBBC05' }}>o</span>
                <span style={{ color: '#4285F4' }}>g</span>
                <span style={{ color: '#34A853' }}>l</span>
                <span style={{ color: '#EA4335' }}>e</span>
              </span>
              <div className="google-search-bar">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Simulador de búsqueda en Google"
                />
                <span className="google-search-lens">🔍</span>
              </div>
            </div>

            {/* Resultado Principal en Google */}
            <div className="google-result-card">
              <div className="google-site-row">
                <div className="google-favicon">T&amp;G</div>
                <div>
                  <div className="google-site-name">Tec&amp;gamer RD 🇩🇴</div>
                  <div className="google-site-url">
                    https://joant20.github.io › tec-and-gamer-rd
                  </div>
                </div>
              </div>

              <a
                href="https://joant20.github.io/tec-and-gamer-rd/"
                target="_blank"
                rel="noreferrer"
                className="google-result-title"
              >
                Tec&amp;gamer 🇩🇴 | Noticias de IA, Videojuegos, Programación y eSports en República Dominicana
              </a>

              <p className="google-result-desc">
                <strong>Tec&amp;gamer RD</strong> es el portal líder en <strong>República Dominicana</strong> sobre <strong>Inteligencia Artificial</strong>, <strong>Videojuegos</strong>, las mejores instituciones de programación (<strong>ITLA, INTEC, PUCMM</strong>) y jugadores famosos de eSports como <strong>MenaRD</strong>.
              </p>

              {/* Sitelinks de Google (Sub-secciones indexadas) */}
              <div className="google-sitelinks">
                <div className="google-sitelink-item">
                  <span className="sitelink-title">🤖 Inteligencia Artificial</span>
                  <span className="sitelink-desc">
                    Avances de IA para programadores, motores 3D y estudios en RD.
                  </span>
                </div>
                <div className="google-sitelink-item">
                  <span className="sitelink-title">🇩🇴 Jugadores Famosos RD</span>
                  <span className="sitelink-desc">
                    MenaRD, Caba, Crossover y torneos de Blink Respawn Santo Domingo.
                  </span>
                </div>
                <div className="google-sitelink-item">
                  <span className="sitelink-title">🎓 Instituciones Tech RD</span>
                  <span className="sitelink-desc">
                    Dónde estudiar programación y videojuegos: ITLA, INTEC, PUCMM.
                  </span>
                </div>
                <div className="google-sitelink-item">
                  <span className="sitelink-title">🎮 Últimas Noticias</span>
                  <span className="sitelink-desc">
                    {topArticle?.title?.slice(0, 68)}...
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Vista Previa al compartir en WhatsApp / Discord / Redes */}
          <div className="social-preview-section">
            <h3 className="social-preview-heading">
              📲 Vista Previa al compartir tu link en WhatsApp / Discord / X
            </h3>
            <div className="social-card-preview">
              <img
                src="https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=900&q=80"
                alt="Vista previa Tec&gamer"
                className="social-card-img"
              />
              <div className="social-card-info">
                <span className="social-domain">JOANT20.GITHUB.IO</span>
                <h4>Tec&amp;gamer 🇩🇴 | Noticias de IA, Videojuegos y Programación en RD</h4>
                <p>
                  Descubre lo último en Inteligencia Artificial, lanzamientos de videojuegos, universidades de tecnología en RD (ITLA, INTEC, PUCMM) y nuestras leyendas de eSports.
                </p>
              </div>
            </div>
          </div>

          {/* Estado Técnico SEO */}
          <div className="seo-checklist-box">
            <h4>✅ Archivos de Producción Real ya activados en tu web:</h4>
            <ul>
              <li>
                <strong>Meta Tags SEO &amp; Open Graph:</strong> Configurados en <code>index.html</code> con localización <code>es_DO</code> (República Dominicana).
              </li>
              <li>
                <strong>Datos Estructurados Google News (JSON-LD):</strong> Registrado como <code>NewsMediaOrganization</code>.
              </li>
              <li>
                <strong>Mapa del Sitio (Sitemap XML):</strong> Activo en <code>/sitemap.xml</code> y <code>/robots.txt</code> para el robot de Google.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
