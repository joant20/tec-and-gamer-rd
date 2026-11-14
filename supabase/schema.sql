-- ============================================================================
-- TEC&GAMER RD 🇩🇴 - ESQUEMA DE BASE DE DATOS (SUPABASE POSTGRESQL)
-- Copia y pega todo este código en el "SQL Editor" de tu proyecto en Supabase
-- y presiona el botón "Run" (Ejecutar).
-- ============================================================================

-- 1. Tabla de Noticias (articles)
CREATE TABLE IF NOT EXISTS public.articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Videojuegos',
  platform TEXT NOT NULL DEFAULT 'GAMING',
  secondary_platforms TEXT[] DEFAULT '{}',
  author TEXT NOT NULL DEFAULT 'Redacción Tec&gamer RD',
  author_role TEXT DEFAULT 'Colaborador Tec&gamer 🇩🇴',
  published_at TEXT DEFAULT 'Reciente',
  read_time TEXT DEFAULT '4 min lectura',
  views TEXT DEFAULT '1.5K',
  featured TEXT DEFAULT NULL,
  image TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  content TEXT[] NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabla de Comentarios de la Comunidad (comments)
CREATE TABLE IF NOT EXISTS public.comments (
  id TEXT PRIMARY KEY,
  article_id TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Gamer Dominicano 🇩🇴',
  time TEXT DEFAULT 'Reciente',
  text TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Permisos de Lectura y Escritura Pública (Row Level Security)
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Lectura publica de noticias" ON public.articles;
CREATE POLICY "Lectura publica de noticias"
  ON public.articles FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Publicacion de noticias" ON public.articles;
CREATE POLICY "Publicacion de noticias"
  ON public.articles FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Actualizacion de noticias" ON public.articles;
CREATE POLICY "Actualizacion de noticias"
  ON public.articles FOR UPDATE
  USING (true);

DROP POLICY IF EXISTS "Eliminacion de noticias" ON public.articles;
CREATE POLICY "Eliminacion de noticias"
  ON public.articles FOR DELETE
  USING (true);

DROP POLICY IF EXISTS "Lectura publica de comentarios" ON public.comments;
CREATE POLICY "Lectura publica de comentarios"
  ON public.comments FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Publicacion publica de comentarios" ON public.comments;
CREATE POLICY "Publicacion publica de comentarios"
  ON public.comments FOR INSERT
  WITH CHECK (true);
