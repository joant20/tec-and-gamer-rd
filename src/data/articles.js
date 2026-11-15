export const PLATFORMS = [
  { id: 'ALL', label: 'Todo Tec&gamer', short: 'Todo', color: '#00f0ff' },
  { id: 'IA', label: '🤖 Inteligencia Artificial', short: 'IA', color: '#a855f7' },
  { id: 'PRO_RD', label: '🇩🇴 Jugadores Pro RD', short: 'Pro RD', color: '#ef4444' },
  { id: 'ACADEMIA_RD', label: '🎓 Instituciones & Devs RD', short: 'Academia RD', color: '#22c55e' },
  { id: 'GAMING', label: '🎮 Videojuegos & Consolas', short: 'Gaming', color: '#3b82f6' },
  { id: 'HARDWARE', label: '💻 Hardware & PC', short: 'Hardware', color: '#f59e0b' },
];

export const CATEGORIES = [
  'Todas',
  'Inteligencia Artificial',
  'eSports RD',
  'Educación Tech RD',
  'Videojuegos',
  'Programación',
  'Hardware',
];

export const BREAKING_HEADLINES = [
  '🔥 VIRAL EN RD: GTA VI desata fiebre en República Dominicana con memes de Vice City, reacciones de streamers locales y preventas récord',
  '🎮 REQUISITOS GTA VI: Confirmado exclusivamente para PS5, PS5 Pro y Xbox Series X|S con más de 150 GB en SSD NVMe',
  '🗡️ THE LEGEND OF ZELDA: Últimas actualizaciones traen mejoras en 4K, 60 FPS estables y novedades sobre el universo de Hyrule',
  '🎓 EDUCACIÓN TECH RD: ITLA e INTEC amplían sus programas de Inteligencia Artificial, Desarrollo de Software y Simulación Interactiva',
];

export const DOMINICAN_PRO_PLAYERS = [
  {
    id: 'player-menard',
    gamertag: 'MenaRD',
    realName: 'Saúl Leonardo Mena II',
    game: 'Street Fighter 6 / FGC',
    role: 'Bicampeón Mundial Capcom Cup',
    achievement: '2x Campeón de Capcom Cup & Campeón EVO',
    badge: '🐐 Leyenda Mundial',
    avatar: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=80',
    tag: 'MenaRD',
    bio: 'El jugador de deportes electrónicos más laureado en la historia de República Dominicana y referente mundial de Street Fighter, impulsor de la escena competitiva caribeña.',
  },
  {
    id: 'player-caba',
    gamertag: 'Caba',
    realName: 'Cristhoper Rodríguez',
    game: 'Street Fighter 6',
    role: 'Pro Player Internacional (Bandits)',
    achievement: 'Top 8 Mundial & Múltiple Finalista Premier',
    badge: '🔥 Élite FGC',
    avatar: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80',
    tag: 'eSports RD',
    bio: 'Reconocido mundialmente por su dominio absoluto con Guile y su consistencia en los torneos más exigentes de Estados Unidos, Europa y Asia.',
  },
  {
    id: 'player-crossover',
    gamertag: 'Crossover',
    realName: 'Bryan Mora',
    game: 'Street Fighter 6 / Tekken 8',
    role: 'Competidor Internacional RD',
    achievement: 'Campeón Regional del Caribe & Representante Capcom Cup',
    badge: '⚡ Talento RD',
    avatar: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80',
    tag: 'eSports RD',
    bio: 'Uno de los pilares de la nueva generación competitiva dominicana, destacando en circuitos internacionales y torneos mayores de la FGC.',
  },
  {
    id: 'player-jochy',
    gamertag: 'Jochy / DR Ray',
    realName: 'Pioneros FGC & eSports RD',
    game: 'Fighting Games / Multigaming',
    role: 'Veteranos y Mentores de la Comunidad',
    achievement: 'Impulsores del ecosistema competitivo en Santo Domingo',
    badge: '🇩🇴 Pioneros',
    avatar: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=600&q=80',
    tag: 'Blink Respawn',
    bio: 'Figuras clave que abrieron las puertas para que República Dominicana sea hoy considerada una potencia mundial en juegos de pelea y organización de eventos.',
  },
];

export const DOMINICAN_TECH_INSTITUTIONS = [
  {
    id: 'inst-itla',
    acronym: 'ITLA',
    name: 'Instituto Tecnológico de las Américas',
    city: 'La Caleta, Boca Chica / Santo Domingo',
    programs: [
      'Simulación Interactiva y Videojuegos',
      'Desarrollo de Software',
      'Inteligencia Artificial',
      'Ciberseguridad',
    ],
    highlight: 'Pionero en RD con carrera dedicada a creación de Videojuegos e IA.',
    tag: 'ITLA',
  },
  {
    id: 'inst-intec',
    acronym: 'INTEC',
    name: 'Instituto Tecnológico de Santo Domingo',
    city: 'Santo Domingo',
    programs: [
      'Ingeniería de Software',
      'Ciencia de Datos e IA',
      'Ingeniería en Sistemas y Computación',
      'Robótica',
    ],
    highlight: 'Líder en investigación tecnológica, maratones de programación ACM-ICPC y startups.',
    tag: 'INTEC',
  },
  {
    id: 'inst-pucmm',
    acronym: 'PUCMM',
    name: 'Pontificia Universidad Católica Madre y Maestra',
    city: 'Santiago & Santo Domingo',
    programs: [
      'Ingeniería en Ciencias de la Computación',
      'Ingeniería Telemática',
      'Postgrados en IA y Ciencia de Datos',
    ],
    highlight: 'Laboratorios avanzados de computación y alianzas internacionales para desarrolladores.',
    tag: 'Programación',
  },
  {
    id: 'inst-unapec',
    acronym: 'UNAPEC & Chavón',
    name: 'Universidad APEC / Escuela de Diseño Chavón',
    city: 'Santo Domingo & La Romana',
    programs: [
      'Ingeniería de Software (UNAPEC)',
      'Comunicación Digital & Arte para Videojuegos',
      'Animación 3D y Diseño Interactivo',
    ],
    highlight: 'Fusión de programación empresarial, diseño interactivo y arte digital para juegos.',
    tag: 'Videojuegos',
  },
];

export const UPCOMING_RELEASES = [
  {
    id: 'rel-1',
    title: 'Blink Respawn Santo Domingo',
    date: '29 Nov 2026',
    platforms: ['PRO_RD', 'GAMING'],
    genre: 'Festival Internacional eSports RD 🇩🇴',
  },
  {
    id: 'rel-2',
    title: 'Hackathon Nacional IA & GameDev ITLA',
    date: '06 Dic 2026',
    platforms: ['IA', 'ACADEMIA_RD'],
    genre: 'Torneo de Programación & Videojuegos',
  },
  {
    id: 'rel-3',
    title: 'Dominican Game Jam (ADOVA)',
    date: '18 Ene 2027',
    platforms: ['ACADEMIA_RD', 'GAMING'],
    genre: '48h Creando Videojuegos en RD',
  },
  {
    id: 'rel-4',
    title: 'GTA VI & Motores con IA Generativa',
    date: '14 Feb 2027',
    platforms: ['GAMING', 'IA'],
    genre: 'Lanzamiento & Tecnología Next-Gen',
  },
];

export const FEATURED_VIDEOS = [
  {
    id: 'vid-gta6',
    title: 'Grand Theft Auto VI (GTA 6) — Tráiler Oficial #1 (Rockstar Games)',
    game: 'GTA VI',
    platform: 'PS5 • Xbox Series X|S',
    duration: '1:31',
    youtubeId: 'QdBZY2fkU-0',
    articleId: 'art-rd-gta6',
    badge: '🔥 #1 TENDENCIA EN RD',
  },
  {
    id: 'vid-zelda-totk',
    title: 'The Legend of Zelda: Tears of the Kingdom — Tráiler Oficial (Nintendo)',
    game: 'The Legend of Zelda',
    platform: 'Nintendo Switch / Next-Gen 4K',
    duration: '3:54',
    youtubeId: 'uHGShqcAHlQ',
    articleId: 'art-rd-zelda-updates',
    badge: '🗡️ ÉPICO',
  },
  {
    id: 'vid-zelda-echoes',
    title: 'The Legend of Zelda: Echoes of Wisdom — Tráiler Oficial en Español',
    game: 'Zelda: Echoes of Wisdom',
    platform: 'Nintendo Switch',
    duration: '2:26',
    youtubeId: '94RTrH2erPE',
    articleId: 'art-rd-zelda-updates',
    badge: '✨ NUEVO',
  },
  {
    id: 'vid-sf6-esports',
    title: 'Street Fighter 6 — Tráiler Oficial de Lanzamiento & Escena Competitiva',
    game: 'Street Fighter 6 (eSports RD)',
    platform: 'PS5 • PC • Xbox Series',
    duration: '2:12',
    youtubeId: '1INU3FOJsTw',
    articleId: 'art-rd-1',
    badge: '🇩🇴 FGC DOMINICANA',
  },
];

export function extractYouTubeId(input) {
  if (!input || typeof input !== 'string') return null;
  const trimmed = input.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  const match = trimmed.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export function getArticleYouTubeId(article) {
  if (!article) return null;
  if (article.videoUrl) {
    const id = extractYouTubeId(article.videoUrl);
    if (id) return id;
  }
  const videoTag = article.tags?.find((t) => t.toLowerCase().startsWith('video:'));
  if (videoTag) {
    const raw = videoTag.slice(6).trim();
    const id = extractYouTubeId(raw);
    if (id) return id;
  }
  if (article.id?.includes('gta6')) return 'QdBZY2fkU-0';
  if (article.id?.includes('zelda')) return 'uHGShqcAHlQ';
  if (article.id === 'art-rd-1' || article.id === 'art-rd-7') return '1INU3FOJsTw';
  const titleLower = (article.title || '').toLowerCase();
  if (titleLower.includes('gta')) return 'QdBZY2fkU-0';
  if (titleLower.includes('zelda')) return 'uHGShqcAHlQ';
  if (titleLower.includes('menard') || titleLower.includes('street fighter')) return '1INU3FOJsTw';
  return null;
}

export const INITIAL_ARTICLES = [
  {
    id: 'art-rd-gta6',
    title: 'Fiebre por GTA VI en República Dominicana: Cómo el esperado juego de Rockstar se está viralizando en redes, memes y tiendas del país',
    excerpt: 'Desde comparaciones virales en TikTok entre Vice City y el Malecón de Santo Domingo hasta récords de reservas de consolas en tiendas locales: así vive la comunidad gamer dominicana el fenómeno de Grand Theft Auto VI.',
    category: 'Videojuegos',
    platform: 'GAMING',
    secondaryPlatforms: ['IA', 'HARDWARE'],
    author: 'Joan Torres',
    authorRole: 'Fundador & Editor Jefe Tec&gamer',
    publishedAt: 'Hace 5 minutos',
    readTime: '6 min lectura',
    views: '98.7K',
    featured: 'main',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80',
    tags: ['GTA VI', 'Viral RD', 'Requisitos GTA VI', 'PS5 Pro', 'República Dominicana'],
    content: [
      'Ningún otro videojuego en la última década ha generado tanto impacto cultural en República Dominicana como Grand Theft Auto VI (GTA 6). En las últimas semanas, las redes sociales dominicanas —especialmente TikTok, Instagram y X— se han inundado de clips, análisis cuadro por cuadro y parodias criollas que suman millones de reproducciones.',
      'La estética tropical y vibrante de Leonida y Vice City ha conectado de inmediato con el público caribeño. Creadores de contenido, streamers y páginas de humor de Santo Domingo, Santiago y La Vega han viralizado comparaciones entre las escenas de playa, motores y vida nocturna del tráiler con situaciones cotidianas de Boca Chica, el Malecón y las avenidas de la capital, acompañadas de dembow y merengue.',
      'Más allá de los memes, el impacto comercial en el país es real: tiendas especializadas de tecnología y videojuegos en República Dominicana reportan un aumento histórico en las consultas y preventas de PlayStation 5, PlayStation 5 Pro y Xbox Series X, ya que el juego NO saldrá en PS4 ni Xbox One y requiere hardware de nueva generación con almacenamiento SSD ultrarrápido.',
      'En el apartado técnico, Rockstar Games apuesta por una densidad de peatones gobernada por rutinas avanzadas de Inteligencia Artificial, clima tropical dinámico con huracanes y reflejos por trazado de rayos que exigen al máximo tanto las consolas actuales como las futuras tarjetas gráficas de PC.'
    ]
  },
  {
    id: 'art-rd-gta6-requisitos',
    title: 'Consolas y Requisitos para jugar GTA VI: Qué necesitas tener en PS5, Xbox Series X|S y PC para correrlo al máximo',
    excerpt: 'Guía definitiva de hardware: consolas compatibles de lanzamiento, espacio necesario en SSD, televisores recomendados y especificaciones técnicas para PC.',
    category: 'Hardware',
    platform: 'HARDWARE',
    secondaryPlatforms: ['GAMING'],
    author: 'Joan Torres',
    authorRole: 'Fundador & Editor Jefe Tec&gamer',
    publishedAt: 'Hace 12 minutos',
    readTime: '5 min lectura',
    views: '84.3K',
    featured: 'secondary',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&q=80',
    tags: ['GTA VI', 'Requisitos GTA VI', 'PS5', 'Xbox Series X', 'PC Gaming'],
    content: [
      'Con la llegada de GTA VI cada vez más cerca, miles de jugadores en República Dominicana se hacen la misma pregunta: ¿Qué consola o computadora necesito para jugarlo sin problemas? Aquí te detallamos todos los requisitos oficiales y técnicos.',
      '1. CONSOLAS COMPATIBLES (DÍA UNO): GTA VI se lanza exclusivamente para la actual generación: PlayStation 5 (estándar y Digital), PlayStation 5 Pro y Xbox Series X | S. Queda totalmente descartada su salida en PS4 o Xbox One debido a la carga de Inteligencia Artificial y el streaming continuo de texturas del mapa de Leonida.',
      '2. RENDIMIENTO POR CONSOLA Y ALMACENAMIENTO: En PS5 Pro el juego aprovechará el reescalado con IA (PSSR) para ofrecer 4K con Ray Tracing mejorado y modos de alta fluidez. En todas las consolas deberás reservar entre 150 GB y 180 GB de espacio libre en el disco SSD NVMe interno (no funciona desde discos duros externos USB tradicionales).',
      '3. REQUISITOS ESTIMADOS EN PC: Para quienes esperan la versión de PC, las especificaciones apuntan a un mínimo de procesador Intel Core i7-10700K o Ryzen 7 3700X, 16 GB de RAM, tarjeta gráfica NVIDIA RTX 3060 (12 GB) o AMD RX 6700 XT y SSD NVMe PCIe 4.0. Para jugarlo en 1440p o 4K Ultra con Ray Tracing, se recomienda un Ryzen 7 7800X3D o Core i7-14700K, 32 GB de RAM DDR5 y una GPU RTX 4070 Super / RTX 4080 o superior.'
    ]
  },
  {
    id: 'art-rd-zelda-updates',
    title: 'The Legend of Zelda: Últimas actualizaciones de Tears of the Kingdom, Echoes of Wisdom y mejoras 4K / 60 FPS en nueva generación',
    excerpt: 'Nintendo despliega nuevos parches de optimización para las aventuras de Link y la princesa Zelda, sumando tiempos de carga instantáneos, mejoras gráficas y novedades del universo Hyrule.',
    category: 'Videojuegos',
    platform: 'GAMING',
    secondaryPlatforms: ['HARDWARE'],
    author: 'Laura Almonte',
    authorRole: 'Editora Gaming & Comunidad RD',
    publishedAt: 'Hace 18 minutos',
    readTime: '5 min lectura',
    views: '72.9K',
    featured: 'secondary',
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Zelda', 'Nintendo', 'Tears of the Kingdom', 'Echoes of Wisdom', 'Actualización'],
    content: [
      'La saga The Legend of Zelda sigue recibiendo soporte clave por parte de Nintendo con actualizaciones que pulen la experiencia tanto en el catálogo actual como en el hardware de nueva generación.',
      'En su más reciente actualización técnica, The Legend of Zelda: Tears of the Kingdom y The Legend of Zelda: Echoes of Wisdom han recibido optimizaciones importantes en la gestión de memoria y estabilidad de fotogramas. En zonas de alta carga gráfica como el Bosque Kolog o al combinar decenas de artefactos Zonnan con la habilidad Ultramano, la tasa de refresco se mantiene ahora mucho más sólida.',
      'Además, gracias al parche de mejora para nueva generación de Nintendo, ambos títulos alcanzan los 60 FPS constantes y resolución escalada hasta 4K en modo televisor, reduciendo los tiempos de teletransporte entre las Islas Celestes, la Superficie y el Subsuelo a menos de dos segundos.',
      'Por último, el productor de la serie, Eiji Aonuma, adelantó que el equipo de desarrollo ya experimenta con nuevas mecánicas de mundo abierto más interactivas para la próxima entrega principal, mientras avanza en paralelo la producción de la esperada película live-action de The Legend of Zelda.'
    ]
  },
  {
    id: 'art-rd-gta6-ia',
    title: 'GTA VI y su revolución técnica: Así funcionan la Inteligencia Artificial de sus NPCs, las físicas del agua y el tráfico realista',
    excerpt: 'Analizamos las patentes y avances del motor RAGE 9 que permitirán que cada habitante de Vice City tenga rutinas diarias y reacciones únicas.',
    category: 'Videojuegos',
    platform: 'GAMING',
    secondaryPlatforms: ['IA'],
    author: 'Carlos Báez',
    authorRole: 'Analista de IA & Futuro Digital',
    publishedAt: 'Hace 40 minutos',
    readTime: '6 min lectura',
    views: '61.5K',
    featured: null,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    tags: ['GTA VI', 'Inteligencia Artificial', 'Rockstar Games', 'Motor RAGE'],
    content: [
      'Uno de los secretos mejor guardados detrás del impresionante realismo de GTA VI es la evolución de su motor propietario RAGE, que ahora integra sistemas de navegación y animación procedural asistidos por Inteligencia Artificial.',
      'A diferencia de entregas anteriores donde los peatones seguían rutas simples, cada NPC cuenta ahora con estados de ánimo, memoria de eventos cercanos y reacciones físicas dinámicas ante cambios en el clima o accidentes de tránsito.',
      'Además, la simulación de fluidos en tiempo real para las playas y canales de Vice City utiliza cálculos en GPU de última generación, logrando olas, espuma marina y reflejos de neón sobre el asfalto mojado nunca antes vistos en consolas.'
    ]
  },
  {
    id: 'art-rd-1',
    title: 'MenaRD y la élite dominicana de eSports: Cómo República Dominicana se convirtió en una potencia mundial de los videojuegos competitivos',
    excerpt: 'Desde torneos locales en Santo Domingo hasta levantar dos veces la Capcom Cup: repasamos el impacto de Saúl "MenaRD" Mena, Caba, Crossover y el festival Blink Respawn.',
    category: 'eSports RD',
    platform: 'PRO_RD',
    secondaryPlatforms: ['GAMING'],
    author: 'Joan Torres',
    authorRole: 'Fundador & Editor Jefe Tec&gamer',
    publishedAt: 'Hace 2 horas',
    readTime: '6 min lectura',
    views: '68.4K',
    featured: null,
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=1400&q=80',
    tags: ['MenaRD', 'eSports RD', 'Blink Respawn', 'Street Fighter 6', 'República Dominicana'],
    content: [
      'Hablar de videojuegos competitivos en América Latina y el mundo es imposible sin mencionar a la República Dominicana. Lo que comenzó como reuniones apasionadas de jugadores en Santo Domingo y Santiago hoy es una de las regiones más respetadas del planeta en la comunidad de juegos de pelea (FGC).',
      'El bicampeón mundial de la Capcom Cup y campeón de EVO, Saúl Leonardo Mena II (MenaRD), no solo hizo historia con Birdie, Luke y Blanka, sino que invirtió en el talento local apoyando a jugadores como Cristhoper "Caba" Rodríguez y Bryan "Crossover" Mora para competir al máximo nivel internacional.',
      'Además, eventos de talla mundial como Blink Respawn en Santo Domingo han colocado al país en el calendario oficial de circuitos profesionales, atrayendo a cientos de competidores extranjeros y demostrando que en RD hay talento de sobra para liderar los eSports.'
    ]
  },
  {
    id: 'art-rd-2',
    title: 'Las mejores instituciones en República Dominicana para estudiar Programación, Inteligencia Artificial y Desarrollo de Videojuegos',
    excerpt: 'Conoce la oferta académica del ITLA, INTEC, PUCMM, UNAPEC y centros especializados que están formando a la próxima generación de ingenieros de software y creadores de juegos en el país.',
    category: 'Educación Tech RD',
    platform: 'ACADEMIA_RD',
    secondaryPlatforms: ['IA', 'GAMING'],
    author: 'Redacción Tec&gamer',
    authorRole: 'Especialista Educación & Código',
    publishedAt: 'Hace 45 minutos',
    readTime: '7 min lectura',
    views: '49.2K',
    featured: 'secondary',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1100&q=80',
    tags: ['ITLA', 'INTEC', 'PUCMM', 'Programación', 'Videojuegos RD'],
    content: [
      'La demanda de programadores, especialistas en Inteligencia Artificial y desarrolladores de videojuegos en República Dominicana está en su punto más alto. Empresas internacionales de software y estudios independientes buscan talento local altamente capacitado.',
      'El Instituto Tecnológico de las Américas (ITLA) destaca como referente nacional gracias a su tecnólogo en Simulación Interactiva y Videojuegos, además de sus carreras en Desarrollo de Software e Inteligencia Artificial, donde los estudiantes crean proyectos reales con Unity y Unreal Engine.',
      'Por su parte, universidades como INTEC y PUCMM lideran en Ingeniería de Software, Ciencia de Datos y competencias internacionales de programación algorítmica, mientras que UNAPEC, Chavón y la Asociación Dominicana de Desarrolladores de Videojuegos (ADOVA) impulsan Game Jams y el arte digital en toda la isla.'
    ]
  },
  {
    id: 'art-rd-3',
    title: 'Revolución de la Inteligencia Artificial en los Videojuegos: NPCs con memoria propia y asistentes de código para desarrolladores',
    excerpt: 'Los nuevos modelos de IA generativa permiten a estudios indie en RD y el mundo programar mecánicas complejas, generar voces dinámicas y optimizar gráficos en tiempo real.',
    category: 'Inteligencia Artificial',
    platform: 'IA',
    secondaryPlatforms: ['GAMING', 'ACADEMIA_RD'],
    author: 'Carlos Báez',
    authorRole: 'Analista de IA & Futuro Digital',
    publishedAt: 'Hace 1 hora',
    readTime: '5 min lectura',
    views: '53.9K',
    featured: 'secondary',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1100&q=80',
    tags: ['Inteligencia Artificial', 'Programación', 'GameDev', 'Unreal Engine'],
    content: [
      'La Inteligencia Artificial ha dejado de ser solo una promesa futurista para convertirse en la herramienta principal de los programadores y estudios de videojuegos actuales.',
      'Por un lado, los asistentes de programación basados en modelos de lenguaje avanzados permiten a pequeños equipos en República Dominicana escribir código en C#, C++ y Python tres veces más rápido, detectando errores de memoria y optimizando shaders al instante.',
      'Por otro lado, dentro de los propios videojuegos, los motores neuronales permiten que los personajes no jugables (NPCs) reaccionen con diálogos únicos no guionizados según las decisiones del jugador, marcando una nueva era de inmersión.'
    ]
  },
  {
    id: 'art-rd-4',
    title: 'Estudios indie dominicanos muestran sus nuevos proyectos en Unreal Engine 5 y Unity rumbo a los festivales internacionales',
    excerpt: 'Creadores locales combinan folclore caribeño, acción frenética y gráficos de última generación para conquistar Steam y consolas.',
    category: 'Videojuegos',
    platform: 'GAMING',
    secondaryPlatforms: ['ACADEMIA_RD'],
    author: 'Laura Almonte',
    authorRole: 'Editora Gaming & Comunidad RD',
    publishedAt: 'Hace 3 horas',
    readTime: '4 min lectura',
    views: '27.5K',
    featured: null,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
    tags: ['Videojuegos RD', 'ADOVA', 'Indie Games', 'Steam'],
    content: [
      'El desarrollo de videojuegos hechos en República Dominicana vive un momento histórico. Egresados de instituciones locales y autodidactas están publicando sus propios títulos en plataformas globales como Steam, Epic Games Store y consolas.',
      'Gracias a comunidades activas como ADOVA y los eventos de Global Game Jam en el país, decenas de jóvenes programadores, artistas 3D y compositores musicales colaboran para transformar ideas locales en productos de exportación.',
      'En Tec&gamer daremos cobertura semanal a cada demo, lanzamiento y estudio dominicano para apoyar el crecimiento de nuestra industria.'
    ]
  },
  {
    id: 'art-rd-5',
    title: 'Guía 2026 para programadores en RD: Los 5 lenguajes y herramientas de IA más solicitados para trabajar remoto y local',
    excerpt: 'Python, TypeScript, C# para videojuegos y el dominio de APIs de Inteligencia Artificial encabezan las ofertas mejor pagadas del sector tecnológico.',
    category: 'Programación',
    platform: 'ACADEMIA_RD',
    secondaryPlatforms: ['IA'],
    author: 'Carlos Báez',
    authorRole: 'Analista de IA & Futuro Digital',
    publishedAt: 'Hace 4 horas',
    readTime: '6 min lectura',
    views: '39.1K',
    featured: null,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    tags: ['Programación', 'Empleo Tech RD', 'Python', 'Inteligencia Artificial'],
    content: [
      'Aprender a programar en República Dominicana abre puertas tanto en bancos, fintechs y empresas tecnológicas nacionales como en compañías internacionales de modalidad remota.',
      'Hoy en día, las empresas no solo buscan que domines React, Node.js, Python o C#, sino que sepas integrar modelos de Inteligencia Artificial (LLMs, agentes automatizados y análisis de datos) dentro de aplicaciones reales.',
      'Combinar una base sólida en estructuras de datos en instituciones como ITLA, INTEC o PUCMM con un portafolio práctico en GitHub sigue siendo la llave maestra para conseguir tu primer empleo en tecnología.'
    ]
  },
  {
    id: 'art-rd-6',
    title: 'NVIDIA y AMD lanzan nueva generación de GPUs con núcleos dedicados para Inteligencia Artificial local y Gaming en 4K',
    excerpt: 'Las nuevas tarjetas gráficas no solo duplican el rendimiento en Ray Tracing, sino que permiten ejecutar modelos de IA directamente en tu PC sin conexión.',
    category: 'Hardware',
    platform: 'HARDWARE',
    secondaryPlatforms: ['IA', 'GAMING'],
    author: 'Mateo Valdés',
    authorRole: 'Editor de Hardware & PC',
    publishedAt: 'Hace 6 horas',
    readTime: '5 min lectura',
    views: '31.8K',
    featured: null,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=80',
    tags: ['Hardware', 'Tarjetas Gráficas', 'PC Gaming', 'IA Local'],
    content: [
      'Para los entusiastas del PC Gaming y los estudiantes de programación de Inteligencia Artificial en el país, elegir una tarjeta gráfica adecuada es una inversión doble: entretenimiento y estación de trabajo.',
      'La nueva arquitectura incorpora tensores de última generación capaces de acelerar tanto el reescalado de fotogramas en videojuegos competitivos como el entrenamiento y ejecución de modelos de lenguaje e imagen en local.',
      'Analizamos qué configuraciones ofrecen la mejor relación calidad-precio para armar tu setup este año.'
    ]
  },
  {
    id: 'art-rd-7',
    title: 'Blink Respawn anuncia calendario de torneos para Street Fighter 6, Tekken 8, Valorant y Super Smash Bros en Santo Domingo',
    excerpt: 'El evento más grande del Caribe reunirá a las máximas figuras dominicanas frente a retadores de Estados Unidos, Japón, Europa y toda Latinoamérica.',
    category: 'eSports RD',
    platform: 'PRO_RD',
    secondaryPlatforms: ['GAMING'],
    author: 'Laura Almonte',
    authorRole: 'Editora Gaming & Comunidad RD',
    publishedAt: 'Hace 8 horas',
    readTime: '4 min lectura',
    views: '44.6K',
    featured: null,
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    tags: ['Blink Respawn', 'eSports RD', 'Torneos', 'Santo Domingo'],
    content: [
      'Santo Domingo volverá a vibrar con la energía de los deportes electrónicos en una nueva edición de Blink Respawn, consolidado como el festival competitivo más importante de la región del Caribe.',
      'Con escenarios dedicados, transmisión en múltiples idiomas y áreas abiertas para desarrolladores independientes y universidades tecnológicas, el evento promete romper todos los récords de asistencia.',
      'Los jugadores locales ya se preparan en clasificatorios semanales para defender la casa frente a las leyendas mundiales invitadas.'
    ]
  },
  {
    id: 'art-rd-8',
    title: 'Nuevos motores de IA convierten bocetos 2D en mundos 3D jugables en cuestión de segundos',
    excerpt: 'Una herramienta revolucionaria para estudiantes y estudios pequeños que desean crear prototipos de niveles sin necesitar cientos de artistas 3D.',
    category: 'Inteligencia Artificial',
    platform: 'IA',
    secondaryPlatforms: ['GAMING'],
    author: 'Carlos Báez',
    authorRole: 'Analista de IA & Futuro Digital',
    publishedAt: 'Hace 10 horas',
    readTime: '4 min lectura',
    views: '29.3K',
    featured: null,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80',
    tags: ['Inteligencia Artificial', 'Diseño 3D', 'Videojuegos', 'Innovación'],
    content: [
      'El diseño de niveles 3D solía tomar semanas de modelado manual, texturizado e iluminación. Ahora, los nuevos modelos espaciales de Inteligencia Artificial permiten transformar un simple dibujo o descripción en una escena tridimensional exportable a motores de juego.',
      'Esto nivela el terreno de juego para los creadores independientes en países emergentes como República Dominicana, permitiendo que un equipo de dos o tres personas logre acabados visuales que antes requerían presupuestos millonarios.'
    ]
  }
];
