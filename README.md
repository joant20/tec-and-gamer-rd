# 🎮 NEXUS GAMING — Portal de Noticias de Videojuegos

Portal moderno de noticias de videojuegos construido con **React + Vite**, diseñado con estética **Gamer Moderno** (modo oscuro, acentos neón, estilo IGN / 3DJuegos) y preparado con una arquitectura modular lista para escalar y desplegar en producción.

## 🚀 Cómo iniciar el proyecto en tu computadora

1. Abre una terminal en esta carpeta (`portal-noticias-gaming`).
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Para generar la versión optimizada de producción:
   ```bash
   npm run build
   ```

## 🧱 Estructura del Proyecto

- `src/data/articles.js` — Datos iniciales de noticias, plataformas (`PC`, `PS5`, `Xbox`, `Switch`), titulares de última hora y calendario de lanzamientos.
- `src/services/newsService.js` — Capa de servicio centralizada (actualmente usa `localStorage` para persistir noticias nuevas, marcadores y comentarios, lista para reemplazar por **Supabase**, **Firebase** o tu propia API REST).
- `src/components/Navbar.jsx` — Barra de navegación con buscador en tiempo real, filtro de plataformas, contador de noticias guardadas y botón para publicar.
- `src/components/HeroSection.jsx` — Portada principal con noticia destacada y artículos secundarios.
- `src/components/NewsCard.jsx` — Tarjetas de noticias con etiquetas de plataforma por color.
- `src/components/TrendingSidebar.jsx` — Barra lateral con "Lo Más Leído", "Próximos Lanzamientos" y suscripción a Newsletter.
- `src/components/ArticleModal.jsx` — Lector de artículo completo con sistema de comentarios interactivo y etiquetas.
- `src/components/CreateArticleModal.jsx` — Formulario integrado para publicar nuevas noticias desde la interfaz.

## 🌐 Cómo subir a Producción (Gratis)

Puedes subir este proyecto a **Vercel** o **Netlify** en minutos:
1. Sube esta carpeta a un repositorio en **GitHub**.
2. Entra en Vercel o Netlify e importa tu repositorio.
3. Configura:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. ¡Listo! Cada cambio que subas a GitHub actualizará tu portal automáticamente.
