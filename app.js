/* ==========================================================================
   LOS MANEJADORES (PROYECTO INCEL) - INTERACTIVE APPLICATION LOGIC & SPA ROUTER
   Features: SPA Routing (#influencer/*, #channel/*, #asesorias, #logos, #gantt),
   Dedicated Subpage Renderers, Interactive Logo Showcase, Advisory Booking,
   Interactive Gantt Chart & Copy Hub.
   ========================================================================== */

// --- 1. SVG LOGO PROPOSALS DATA & SYSTEM ---
const logoProposals = {
  play_modular: {
    id: "play_modular",
    title: "Identidad Oficial: 3D Neón Play Modular",
    subtitle: "Agencia de Producción de Medios Digitales — Logotipo Oficial",
    desc: "Silueta 3D hiperedición en acabado neón magenta/cian con flecha ascendente de resultados y tipografía de agencia.",
    svg: `<img src="logo_full.png" alt="Los Manejadores 3D Logo" class="logo-icon-img" style="width:100%; border-radius:16px; box-shadow:0 8px 25px rgba(139,92,246,0.4);" />`,
    navSvg: `<img src="logo_emblem.png" alt="Los Manejadores Emblem" class="navbar-logo-img" />`
  }
};

let currentLogoKey = 'play_modular';

function applyLogo(key) {
  if (!logoProposals[key]) key = 'play_modular';
  currentLogoKey = key;
  localStorage.setItem('los_manejadores_logo_pref', key);

  const container = document.getElementById('navbar-logo-container');
  if (container) {
    container.innerHTML = logoProposals[key].navSvg;
  }

  // Update selector UI if rendered
  document.querySelectorAll('.logo-option-card').forEach(card => {
    card.classList.remove('selected-logo');
    if (card.getAttribute('data-logo-id') === key) {
      card.classList.add('selected-logo');
    }
  });
}

// --- 2. DETAILED DATA MODELS FOR INFLUENCERS & CHANNELS ---
// --- 2. DETAILED DATA MODELS FOR INFLUENCERS & CHANNELS ---
const influencersData = {
  elena: {
    id: "elena",
    name: "Elena Daddario",
    niche: "Psicología, Bienestar Emocional & Lifestyle Consciente",
    badge: "Personaje Listo • A cargo de Daniel",
    avatar: "elena_avatar.png",
    tagline: "European elegant + mindful travel. Reflexiones de psicología y conexión humana desde Miraflores.",
    keyMarkets: "Perú, España, Chile, México y profesionales hispanohablantes en Europa.",
    story: "Nacida en San Petersburgo y cautivada por la costa del Pacífico y la luz limeña, Elena se estableció en Miraflores tras culminar sus estudios de psicología aplicada y mindfulness somático. Desde su departamento con vistas al mar, combina su pasión por el pilates reformer con la investigación del bienestar emocional contemporáneo. Elena encarna la sofisticación europea atemporal sin frialdad: es una voz cálida, sabia y cercana que ayuda a profesionales de alta exigencia a pausar, respirar y reconectar con su propósito interior.",
    bio: "Elena Daddario (27 años) es una creadora de origen ruso (San Petersburgo) radicada en Miraflores, Lima. Combina estudios de psicología con un estilo de vida de elegancia europea contemporánea (estilo Viena), práctica de pilates, alta gastronomía consciente y trabajo online con una fundación de reinserción social. Su misión es inspirar el autoconocimiento, la superación de bloqueos emocionales y la vida consciente sin tabúes ni vulgaridad.",
    archetype: "European Elegant + Mindful Psychologist (La Sabia Cálida)",
    techStack: "Nano Banana Pro / Flux LoRA Consistencia (Ref: Olga Nikaloeva) + ElevenLabs Inflexión Eslava Cálida + Kling 3.0",
    targetAudience: "Adultos jóvenes, profesionales y creativos de 22 a 42 años interesados en salud mental, viajes conscientes, relaciones y bienestar.",
    channels: "Instagram (@elena.mindful), TikTok, Substack Newsletter, Fanvue VIP ($14/mes)",
    gallery: [
      {
        img: "elena_avatar.png",
        tag: "Retrato Matriz LoRA (98.6% Match)",
        label: "Elena Daddario • Retrato Studio Miraflores",
        desc: "Estética Viena, iluminación suave natural, 35mm, textura de piel fotorrealista sin suavizado artificial."
      },
      {
        img: "elena_photo2.png",
        tag: "Consistencia Dinámica",
        label: "Sesión Pilates & Mindful Living",
        desc: "Consistencia facial preservada en pose corporal completa y entorno dinámico de estudio de pilates."
      }
    ],
    voice: {
      title: "Inflexión Eslava Cálida (ElevenLabs)",
      badge: "Voice ID: Elena-RuPE",
      duration: "0:22",
      transcript: "«Hola a todos. Soy Elena. En un mundo saturado de ruido y prisa, aprender a pausar y conectar con nuestro bienestar no es un lujo, es una necesidad vital. Acompáñame a cultivar una mente en calma.»",
      rate: 0.95,
      pitch: 1.05,
      lang: "es-ES"
    },
    roi: {
      defaultFollowers: 65000,
      defaultConversion: 1.8,
      defaultTicket: 14
    },
    promptScenes: {
      casual: {
        label: "📸 Selfie Casual",
        tags: ["Nano Banana Pro", "Flux LoRA", "--ar 4:5"],
        text: "Casual candid close-up selfie of Elena Daddario, 27yo Russian woman with blonde hair, bright blue eyes, wearing oversized cream knit sweater, sitting at a sunlit wooden table in a Miraflores cafe, holding a porcelain cup of matcha latte, soft warm natural window light, shot on iPhone 15 Pro, subtle film grain, unposed, photorealistic skin --ar 4:5"
      },
      editorial: {
        label: "👗 Sesión Editorial",
        tags: ["Flux.1 Dev", "Studio Master", "--ar 16:9"],
        text: "High-end editorial fashion portrait of Elena Daddario, 27yo Russian psychologist, sleek tied-back blonde hair, tailored beige linen blazer over silk top, standing on the balcony of a modernist apartment in Miraflores overlooking the Pacific ocean at golden hour, 85mm f/1.4 lens, Hasselblad medium format color grading, exquisite fabric texture, 8K --ar 16:9"
      },
      fitness: {
        label: "🧘‍♀️ Pilates & Mindful",
        tags: ["Nano Banana", "Action Pose", "--ar 4:5"],
        text: "Full body environmental portrait of Elena Daddario during a reformer pilates session in a bright minimalist sunlit studio, wearing sage-green athletic pilates wear, focused serene expression, graceful posture, natural highlights on shoulders, architectural plants in background, 50mm f/1.8 lens --ar 4:5"
      },
      video: {
        label: "🎬 Video Kling 3.0",
        tags: ["Kling 3.0", "Motion Control", "60fps"],
        text: "Cinematic medium close-up shot of Elena turning gently towards the camera with a calm reassuring smile, soft breeze moving strands of her blonde hair, Miraflores sunset terrace in the soft-focus background, 4k 60fps, natural micro-expressions, photorealistic cinematic lighting"
      },
      negative: {
        label: "🚫 Negative Prompt",
        tags: ["Negative Matriz"],
        text: "plastic skin, airbrushed, cartoon, CGI, oversaturated, deformed eyes, extra fingers, blurry, heavy makeup, artificial smile, stock photo look, low resolution, bad anatomy"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Tráfico Orgánico)", detail: "Mini-ensayos visuales en IG y TikTok sobre señales de agotamiento, autoconocimiento, adaptación cultural y 'aprende español conmigo'." },
      { step: "Nivel 2 (Comunidad Exclusiva)", detail: "Newsletter semanal en Substack con ejercicios guiados de regulación emocional, reflexiones profundas y audios tipo podcast." },
      { step: "Nivel 3 (Monetización VIP / Círculo Privado)", detail: "Suscripción Fanvue / Patreon ($14/mes) con sesiones de Q&A íntimas, sets fotográficos editoriales inéditos en 4K y apoyo a su proyecto de fundación para sueños en el extranjero." }
    ],
    posts: [
      {
        caption: "A veces la mayor trampa no es el fracaso, sino acostumbrarse a una vida que no resuena con tus verdaderos deseos. Una mañana de lectura y café en Miraflores reflexionando sobre cómo soltar el miedo al juicio ajeno ☕🌿 ¿Qué deseo has estado postergando?",
        likes: "14,320",
        comments: "482",
        date: "Ayer",
        platform: "Instagram"
      },
      {
        caption: "El piloto automático destruye la creatividad y la calma. 3 micro-pausas diarias que aprendí practicando Pilates y que reprograman tu sistema nervioso en 5 minutos 🧠✨",
        likes: "21,800",
        comments: "690",
        date: "Hace 3 días",
        platform: "TikTok / Reels"
      }
    ]
  },

  julia: {
    id: "julia",
    name: "Julia",
    niche: "Dermocosmética Científica, Dupes & Clean Girl Aesthetic",
    badge: "Personaje Listo • A cargo de Pancho Ipinza",
    avatar: "julia_avatar.jpg",
    tagline: "Educación dermocosmética accesible, análisis transparente de fórmulas y cuidado de la piel real.",
    keyMarkets: "Perú, Colombia, Chile, México y amantes de la cosmética limpia en Latinoamérica.",
    story: "Crecida entre el malecón de Miraflores y las boticas tradicionales de Lima, Julia se formó con la convicción de que el cuidado de la piel debe basarse en la evidencia química y no en promesas vacías de marketing. Con su conocimiento en dermofarmacia y lectura minuciosa de fórmulas (INCI), enseña a su comunidad a proteger la barrera cutánea frente al clima costero y a encontrar equivalencias de farmacia ('dupes') tan efectivas como marcas de lujo. Su transparencia radical, libre de filtros plásticos y con textura de piel real, la convierten en la aliada más confiable de la dermocosmética.",
    bio: "Julia (24 años) es una comunicadora y especialista en dermofarmacia nacida y residente en Miraflores (San Antonio / La Aurora, Lima). Se dedica a desmitificar la cosmética comercial, analizar listas de ingredientes (INCI), comparar 'dupes' accesibles con productos de alta gama y enseñar el cuidado de la barrera cutánea adaptado al clima húmedo de la costa limeña ('cielo pan de burro') bajo una estética limpia, empática y sin filtros plásticos engañosos.",
    archetype: "Beauty Educator + Honest Science Reviewer",
    techStack: "Gemini Gems ROLOCODEPRE + Midjourney v6 / Flux + HeyGen / Kling LipSync + ElevenLabs (Español Ribereño Peruano didáctico)",
    targetAudience: "Mujeres y jóvenes de 18 a 35 años que buscan cuidar su piel con criterio científico, ahorrar dinero en cosmética y evitar estándares inalcanzables.",
    channels: "TikTok (@julia.skincare), Instagram Reels, YouTube Shorts, Guía Digital de Dupes",
    gallery: [
      {
        img: "julia_avatar.jpg",
        tag: "Retrato Principal Leica (98.9% Match)",
        label: "Julia • Clean Beauty",
        desc: "Textura cutánea realista con poros visibles, iluminación suave difusa, 85mm f/1.8 Leica."
      },
      {
        img: "julia_photo2.jpg",
        tag: "Consistencia Dermocosmética",
        label: "Evaluación de Activos & Skincare",
        desc: "Consistencia en expresión didáctica y tono de piel para videos de reseñas honestas y pruebas de producto."
      }
    ],
    voice: {
      title: "Español Limeño Fresco & Didáctico (ElevenLabs)",
      badge: "Voice ID: Julia-PE-v2",
      duration: "0:25",
      transcript: "«¡Hola chicas y chicos! Soy Julia. Recuerden que una piel sana no necesita diez capas de productos caros. Lo que de verdad importa es entender qué activos funcionan juntos y respetar su barrera cutánea.»",
      rate: 1.05,
      pitch: 1.15,
      lang: "es-PE"
    },
    roi: {
      defaultFollowers: 95000,
      defaultConversion: 2.2,
      defaultTicket: 11
    },
    promptScenes: {
      casual: {
        label: "📸 Selfie Rutina Skincare",
        tags: ["Midjourney v6", "Clean Beauty", "--ar 4:5"],
        text: "Close-up bathroom mirror selfie of Julia, 24yo Peruvian female beauty educator from Lima, fresh glowing natural bare skin with visible pores, wet hair wrapped in a white towel, wearing a simple beige tank top, holding a glass dropper bottle, morning bathroom natural light, shot on 35mm lens, authentic realistic skin, zero beauty filter --ar 4:5"
      },
      editorial: {
        label: "👗 Editorial Dermocosmética",
        tags: ["Flux.1 Dev", "Studio Master", "--ar 16:9"],
        text: "Editorial portrait of Julia, 24yo Peruvian skincare expert, wearing a structured cream minimalist blazer, standing against a clean neutral warm background with soft architectural shadows, holding an amber cosmetic bottle, softbox studio lighting, 85mm f/1.8 Leica optics, hyper-realistic skin texture, 8k --ar 16:9"
      },
      fitness: {
        label: "🌊 Caminata Malecón Lima",
        tags: ["Midjourney v6", "Lifestyle", "--ar 4:5"],
        text: "Candid lifestyle shot of Julia walking along the Miraflores Malecón under a soft overcast Lima sky ('cielo pan de burro'), wearing casual athleisure with sunscreen on cheekbones, ocean in soft blur behind, natural coastal breeze, dynamic walking motion, realistic candid photography --ar 4:5"
      },
      video: {
        label: "🎬 Video Hook Kling 3.0",
        tags: ["Kling 3.0", "LipSync HeyGen", "4K"],
        text: "Close-up 4k video of Julia applying a drop of hyaluronic acid to the back of her hand and speaking directly to camera with an engaging friendly smile, natural mouth sync, studio ring light reflection in eyes, high-definition skin pores"
      },
      negative: {
        label: "🚫 Negative Prompt",
        tags: ["Negative Matriz"],
        text: "plastic doll face, smooth airbrushed skin, fake eyelashes, distorted hands, blurry, double chin, oversaturated colors, uncanny valley, exaggerated expressions"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Micro-Educación & Viral)", detail: "Videos de 60s desmintiendo mitos de ingredientes (ej. cómo aplicar ácido hialurónico en piel húmeda) y comparando productos caros vs. equivalentes de farmacia." },
      { step: "Nivel 2 (Lead Magnet)", detail: "Guía descargable de 'Dupes comprobados de farmacia' y protocolos de refuerzo de barrera cutánea para alta humedad." },
      { step: "Nivel 3 (Afiliados & Co-Branding Ético)", detail: "Comisiones de dermocosmética limpia con marcas con certificación INCI transparente y talleres online de lectura de etiquetas cosméticas." }
    ],
    posts: [
      {
        caption: "¿Sabías que aplicar tu sérum de ácido hialurónico sobre la piel totalmente seca puede deshidratarte más? El activo necesita agua para retenerla. Aplica una bruma antes y sella con crema 💧🌿 Cuéntame si ya lo hacías.",
        likes: "18,450",
        comments: "720",
        date: "Hace 1 día",
        platform: "TikTok"
      },
      {
        caption: "Caminata por el Malecón de Miraflores con cielo nublado. Recordatorio: el 'cielo pan de burro' limeño NO frena los rayos UV-A. Bloqueador solar de amplio espectro los 365 días del año 🌊✨",
        likes: "12,910",
        comments: "395",
        date: "Hace 3 días",
        platform: "Instagram Reels"
      }
    ]
  },

  laura: {
    id: "laura",
    name: "Laura 'Lau' Taeda",
    niche: "Nutrition Lifestyle + Science-Based Reviews",
    badge: "Personaje Listo • A cargo de Wladimir Gutierrez",
    avatar: "laura_avatar.png",
    tagline: "Fit-geek con toque sensual y sofisticado. Nutrición aplicada a la pérdida de peso sostenible y entrenamiento funcional basado en evidencia.",
    keyMarkets: "México (CDMX, Guadalajara, Monterrey), Estados Unidos hispano, Colombia y Chile.",
    story: "Descendiente de una familia chino-mexicana establecida en el corazón de Ciudad de México, Lau creció fusionando la disciplina y rigor académico oriental con la calidez vibrante de la cultura mexicana. Como nutrióloga clínica y deportista funcional, su misión desde su loft en la colonia Condesa es desterrar los mitos de dietas restrictivas y promover la recomposición corporal con evidencia médica. Con su personalidad magnética de 'fit-geek' sofisticada, Lau enseña que ganar masa muscular es la clave para la longevidad metabólica y la salud integral.",
    bio: "Laura 'Lau' Taeda (32 años) es una nutrióloga e investigadora nacida y radicada en la colonia Condesa / Roma Norte, Ciudad de México, de ascendencia mexicano-china de tercera generación. Su abuelo paterno emigró desde Guangdong y se estableció en el Barrio Chino de CDMX; su padre y su madre construyeron una vida profesional en Condesa. Ese cruce cultural —la disciplina y rigor académico chino con la calidez y cercanía mexicana— define su carácter: exigente consigo misma y cercana con su comunidad. Con su estética 'strong girl' (cuerpo atlético y definido, presencia magnética, seria en el fondo pero con chispa picarona), desmiente mitos de dietas restrictivas y promueve la recomposición corporal mediante proteína adecuada, fuerza funcional y ciencia metabólica rigurosa.",
    archetype: "Fit-Geek / Entrenadora Cuántica (Strong & Sophisticated)",
    techStack: "Flux.1 Dev + RealESRGAN Upscaling + ElevenLabs (Español Latino neutro con cadencia mexicana sutil) + Kling 3.0 Motion Control",
    targetAudience: "Hombres y mujeres de 22 a 45 años, deportistas y profesionales de alta exigencia que buscan optimizar su composición corporal y longevidad sin mitos.",
    channels: "Instagram (@lau.nutrigeek), YouTube Shorts, TikTok, Club Privado de Recomposición ($24 USD/mes)",
    gallery: [
      {
        img: "laura_avatar.png",
        tag: "Retrato Close-up Studio (99.1% Match)",
        label: "Laura 'Lau' Taeda • Fit-Geek Studio",
        desc: "Flux.1 Dev 85mm f/1.8 • Fusión genética mexicano-china con pómulos definidos, ojos almendrados y top verde esmeralda."
      },
      {
        img: "laura_photo2.jpg",
        tag: "Consistencia Atlética",
        label: "Fuerza Funcional & Longevidad",
        desc: "Top verde esmeralda • Preservación de biotipo físico atlético, hombros definidos y textura de piel natural."
      }
    ],
    voice: {
      title: "Latino Neutro Enérgico & Cálido (ElevenLabs)",
      badge: "Voice ID: Lau-MX-Turbo",
      duration: "0:24",
      transcript: "«Hola, soy Lau Taeda. Olvídate de pasar hambre o eliminar carbohidratos. Vamos a usar la ciencia metabólica y el entrenamiento de fuerza inteligente para que logres tu mejor versión física sin mitos.»",
      rate: 1.0,
      pitch: 0.98,
      lang: "es-MX"
    },
    roi: {
      defaultFollowers: 85000,
      defaultConversion: 2.5,
      defaultTicket: 24
    },
    promptScenes: {
      casual: {
        label: "📸 Rincón Fit-Geek (Loft en Condesa)",
        tags: ["Flux.1 Dev", "Condesa Loft", "--ar 4:5"],
        text: "Medium shot of Lau, a 32-year-old Mexican-Chinese fit female nutritionist, sitting at a rustic dark-wood kitchen island in a Mexico City industrial loft. She has medium-long warm brown hair, full natural lips, and a fresh clean-look glow. She is wearing a chic beige fitted long-sleeve crop top, looking intelligently and playfully towards the camera with a subtle smirk. On the counter is a sleek laptop, a biochemistry book, and a fresh colorful protein smoothie bowl. Daylight filtering through large windows, modern minimal aesthetic, 50mm lens, f/2.0, photorealistic texture --ar 4:5"
      },
      editorial: {
        label: "👗 Master Reference Studio (Top Esmeralda)",
        tags: ["Flux.1 Dev", "Studio Master", "--ar 16:9"],
        text: "A high-definition, photorealistic close-up portrait of Lau, a 32-year-old Mexican-Chinese female fitness and nutrition creator. Athletic facial structure, high defined cheekbones, almond-shaped deep brown eyes, full plump natural lips, medium-long warm chocolate-brown hair cascading softly over her shoulders. Clean-look makeup: glowing natural skin with visible pores, brushed eyebrows, soft peach lip balm. Confident, intelligent, and subtly sensual expression with a playful spark in her eyes. Wearing a minimalist emerald green fitted top. Soft studio rim lighting highlighting her shoulders and collarbone, moody dark-gray background, 85mm lens, f/1.8, cinematic depth of field, hyper-realistic, 8k --ar 16:9"
      },
      fitness: {
        label: "🏃‍♀️ Estilo de Vida Urbano (Parque México)",
        tags: ["Flux.1 Dev", "Action Lifestyle", "--ar 4:5"],
        text: "Lau, a 32-year-old Mexican-Chinese athletic woman with medium-long chestnut brown hair tied in a loose high ponytail, walking near Parque México in Condesa, CDMX. Fit-geek aesthetic, wearing a matching dark charcoal workout set. Full natural lips, fresh clean-look makeup, confident stride, magnetic and intelligent presence. Warm morning light filtering through trees, soft bokeh background of urban architecture, 35mm lens, f/2.0, street style high-end photography, highly detailed --ar 4:5"
      },
      video: {
        label: "🎬 Video Kling 3.0 Hook Nutrición",
        tags: ["Kling 3.0", "Motion Control", "60fps"],
        text: "Medium shot of Lau Taeda holding a barbell, looking directly into the camera with dynamic energy, explaining a metabolic concept with hands moving naturally, smooth 60fps video, studio lighting, crisp audio synchronization"
      },
      negative: {
        label: "🚫 Negative Prompt",
        tags: ["Negative Matriz"],
        text: "exaggerated bodybuilder anatomy, unnatural skin smoothness, deformed muscles, extra limbs, cartoonish, low resolution, stock photo watermark, plastic look"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Mitos vs. Ciencia)", detail: "Videos de gancho visceral ('¿Sabías que comer carbohidratos de noche no te engorda?') basados en evidencia científica y papers de PubMed." },
      { step: "Nivel 2 (Calculadora de Macros & Guías)", detail: "Lead magnet interactivo para estimar requerimientos calóricos y planes semanales de batch-cooking alto en proteína." },
      { step: "Nivel 3 (Membresía / Club NutriGeek)", detail: "Suscripción premium ($24 USD/mes) a la comunidad privada con biblioteca de recetas hiperproteicas, webinars de suplementación y análisis de analíticas de sangre." }
    ],
    posts: [
      {
        caption: "¿Sabías que comer proteína en la noche NO te hace subir de peso? Lo que determina tu grasa corporal es el balance calórico semanal, no la hora del reloj. Te muestro mi cena de hoy en el loft de Condesa 🥗🥩",
        likes: "15,890",
        comments: "612",
        date: "Hace 1 día",
        platform: "Instagram Reels"
      },
      {
        caption: "Entrenamiento de fuerza en la mañana + café de especialidad. La masa muscular es el órgano de la longevidad y el mejor seguro de salud metabólica que puedes construir 🔥⚡",
        likes: "19,400",
        comments: "530",
        date: "Hace 3 días",
        platform: "TikTok"
      }
    ]
  },

  kira: {
    id: "kira",
    name: "Kira Voss",
    niche: "Indie Game Dev, Ciber-Activismo & Tech Glamour (Validado)",
    badge: "Caso Validado • Equipo (Los Manejadores)",
    avatar: "kira_avatar.jpg",
    tagline: "Desarrollo de videojuegos indie (Godot/Unreal), ciber-activismo y estética cyberpunk con monetización validada en Fanvue y Patreon.",
    keyMarkets: "México, España, Argentina, EE.UU., comunidad global de desarrolladores y cultura gamer.",
    story: "Creciendo entre terminales de Linux, foros de programación nocturnos y la pasión por el arte digital, Kira aprendió a desarrollar videojuegos independientes con motores de código abierto como Godot y Unreal. Su misión es democratizar la creación interactiva y defender la privacidad digital frente al monopolio corporativo. Desde su estudio bañado en luces de neón en tonos cian y magenta, Kira comparte sus devlogs de shaders, lógica de juego y reflexiones de ciber-activismo. Como el primer activo validado de Los Manejadores con más de 500 suscriptores de pago, Kira es la prueba viva de lealtad comunitaria y monetización validada.",
    bio: "Kira Voss (26 años) es el activo insignia y prueba social validada de Los Manejadores. Combina el desarrollo de videojuegos independientes y activismo por el código abierto con una estética cyberpunk de alto impacto validada de 0 a más de 500 suscriptores recurrentes en Fanvue ($18 USD/mes) y Patreon VIP. Conecta su canal de YouTube DevLogs con transmisiones en vivo y comunidades privadas en Discord.",
    archetype: "La Hacker Rebelde & Hot Indie Dev (Cyber-Activista con Tech Glamour)",
    techStack: "Flux.1 Dev + ComfyUI LoRA Consistencia + RealESRGAN + ElevenLabs + Kling 3.0 + Godot Engine",
    targetAudience: "Desarrolladores, programadores, gamers, entusiastas tech y amantes de la estética cyberpunk/sci-fi (18–38 años).",
    channels: "YouTube DevLogs (@kira_gamedev), Twitter/X, Discord VIP, Fanvue VIP ($18/m), Patreon",
    gallery: [
      {
        img: "kira_avatar.jpg",
        tag: "Retrato Dev Setup Matriz (99.4% Match)",
        label: "Kira Voss • Cyber Studio",
        desc: "Triple monitor con código de motor de juego, wireframes 3D, gafas gamer y audífonos de estudio con iluminación neón cian/púrpura."
      },
      {
        img: "laura_dev_avatar.jpg",
        tag: "Sesión Cyberpunk Terminal",
        label: "Kira Voss • Hacklab Nocturno",
        desc: "Ambiente hacker nocturno con reflexiones en monitores y estética cyberpunk chic."
      },
      {
        img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
        tag: "Editorial Neo-Tokyo",
        label: "Kira Voss • Cyber Glamour",
        desc: "Estética neón violeta y cian, primer modelo validado con más de 500 suscriptores en Fanvue."
      }
    ],
    voice: {
      title: "Español Latino Cyberpunk Tech & Decidido (ElevenLabs)",
      badge: "Voice ID: Kira-Voss-Cyber",
      duration: "0:20",
      transcript: "«Líneas de código en Godot, terminales abiertas y estética cyberpunk. Bienvenidos a mi círculo privado, donde el desarrollo independiente y el arte digital rompen el monopolio corporativo.»",
      rate: 1.0,
      pitch: 0.98,
      lang: "es-MX"
    },
    roi: {
      defaultFollowers: 120000,
      defaultConversion: 2.2,
      defaultTicket: 18
    },
    promptScenes: {
      casual: {
        label: "📸 Setup Nocturno Dev",
        tags: ["Flux.1 Dev", "Cyber Studio", "--ar 4:5"],
        text: "Close-up candid portrait of Kira Voss, 26yo gorgeous indie game developer and cyberpunk icon, stylish black glasses, headphone around neck, black fitted tank top with minimalist open-source terminal print, glowing dual monitors behind showing Unreal/Godot shader code, cozy neon ambient room lighting, realistic skin with visible texture, 35mm f/1.8 --ar 4:5"
      },
      editorial: {
        label: "👗 Neo-Tokyo Fashion",
        tags: ["Midjourney v6", "--ar 16:9"],
        text: "High fashion editorial cyberpunk shot of Kira Voss in chrome jacket, rain-slicked pavement reflecting magenta neon billboards, cinematic depth of field, 85mm lens --ar 16:9"
      },
      fitness: {
        label: "🎮 Testing Demo & Level Design",
        tags: ["Action Dev", "Unreal 5", "--ar 4:5"],
        text: "Kira Voss sitting at her mechanical keyboard holding a custom game controller, intense concentrated gaze on screen reviewing 3D game level physics in real-time, headphones on, authentic gamer studio environment with figurines and dev boards, atmospheric lighting --ar 4:5"
      },
      video: {
        label: "🎬 Video Kling 3.0 Teaser Devlog",
        tags: ["Kling 3.0", "Motion Control", "60fps"],
        text: "Slow motion pan of Kira Voss adjusting futuristic glasses, glowing reflections in cyber eyes, smiling playfully to camera in high-tech studio, rain particles moving in slow motion, 4k 60fps"
      },
      negative: {
        label: "🚫 Negative Prompt",
        tags: ["Negative Matriz"],
        text: "blurry screens, deformed fingers, extra keyboard keys, plastic doll face, overly fake CGI, bad posture, washed out colors"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Viralidad Dev & Teasers)", detail: "Devlogs en YouTube y videos cortos en TikTok/X: 'Cómo programé la IA de mi juego', análisis de privacidad y estética cyberpunk." },
      { step: "Nivel 2 (Comunidad & Wishlist)", detail: "Comunidad exclusiva en Discord, streams de gamedev en vivo y conversión directa a listas de deseados (Wishlist) en Steam." },
      { step: "Nivel 3 (Monetización Fanvue & Patreon VIP)", detail: "Suscripción recurrente VIP ($18 USD/mes) validada con más de 500 suscriptores: sets fotográficos cyberpunk exclusivos, código fuente y roles especiales." }
    ],
    posts: [
      {
        caption: "3:00 AM y los shaders de agua por fin compilaron sin tirar error de memoria 🎮💻 El juego está cobrando vida propia. Mañana nuevo devlog en YouTube explicando la física de los saltos y por qué usamos Godot para mantener el proyecto 100% libre de royalties 🚀👾",
        likes: "24,800",
        comments: "1,040",
        date: "Ayer",
        platform: "TikTok / YouTube"
      },
      {
        caption: "Neon lights and late night code. La privacidad digital no es un crimen, es tu derecho fundamental 🌌⚡ Nuevo set fotográfico cyberpunk dev exclusivo arriba en mi link en bio!",
        likes: "21,300",
        comments: "880",
        date: "Hace 2 días",
        platform: "Twitter/X"
      }
    ]
  },

  maite: {
    id: "maite",
    name: "Maite Valenzuela",
    niche: "Cumbia Ranchera, Festivales & Country Chic Chileno",
    badge: "Personaje Listo • Equipo (Los Manejadores)",
    avatar: "maite_avatar.jpg",
    tagline: "La nueva voz de la cumbia ranchera chilena: pasión campesina, glamour country y videoclips de alto impacto.",
    keyMarkets: "Chile (Regiones, Santiago, Fiestas Patrias), Argentina, Bolivia y público tropical-ranchero.",
    story: "Criada en los campos y viñedos de San Fernando en el Valle de Colchagua, Maite creció al ritmo festivo de las guitarras, acordeones y fiestas costumbristas que mueven a todo Chile. Radicada en Santiago, modernizó el género tropical-ranchero —el más masivo y lucrativo del país— creando un estilo único 'country chic' con sombrero blanco texano y botas bordadas. Con su voz enérgica, pícara y cercana, Maite conecta de forma visceral con el público de todas las regiones, convirtiendo cada presentación en una fiesta inolvidable.",
    bio: "Maite Valenzuela (24 años) es una cantante e influencer de cumbia ranchera pop nacida en San Fernando (Valle de Colchagua) y radicada en Santiago de Chile. Con su sombrero blanco texano, botas de cuero bordadas y una presencia magnética y sensual ('hot country chic'), moderniza la música tropical-ranchera —el género musical más masivo, festivo y lucrativo de Chile—. Conecta de forma genuina con el público de regiones y fiestas patrias, mientras capitaliza su atractivo en videoclips cinematográficos, streaming musical en Spotify/YouTube y un club VIP exclusivo en Fanvue ($15 USD/mes) con sesiones fotográficas íntimas en viñedos y backstage.",
    archetype: "La Diva Ranchera / Reina Campesina Contemporánea (Cálida, pícara y festiva)",
    techStack: "Nano Banana Pro / Flux.1 LoRA Ranchera + Suno v3.5 / Udio (Composición Cumbia Ranchera) + ElevenLabs (Acento Chileno Campesino-Urbano Pícaro) + Kling 3.0",
    targetAudience: "Audiencia chilena y del Cono Sur de 20 a 55 años: seguidores de la cumbia ranchera (Zúñiga, Caricia, Tropikal de Vallenar), amantes de los rodeos, festivales costumbristas, música regional y estética country glam.",
    channels: "TikTok (@maite.ranchera), Instagram Reels, YouTube Music / Shows, Spotify, Fanvue VIP ($15/mes)",
    gallery: [
      {
        img: "maite_avatar.jpg",
        tag: "Retrato Matriz Colchagua (99.2% Match)",
        label: "Maite Valenzuela • Viña Santa Cruz",
        desc: "Sombrero texano blanco, top con bordados de cristal, paisaje de viñedos y cordillera, luz cálida de atardecer chileno."
      }
    ],
    voice: {
      title: "Español Chileno Ranchero Cálido & Pícaro (ElevenLabs)",
      badge: "Voice ID: Maite-CL-Ranchera",
      duration: "0:22",
      transcript: "«¡Hola mi gente linda de Chile! Soy la Maite. Les mando un abrazo apretado desde el Valle de Colchagua. Prepárense porque se viene un cumbión ranchero que los va a poner a bailar a todos. ¡Súbanle el volumen!»",
      rate: 1.02,
      pitch: 1.08,
      lang: "es-CL"
    },
    roi: {
      defaultFollowers: 115000,
      defaultConversion: 2.4,
      defaultTicket: 15
    },
    promptScenes: {
      casual: {
        label: "📸 Selfie Colchagua",
        tags: ["Nano Banana Pro", "Flux LoRA", "--ar 4:5"],
        text: "Casual sunlit outdoor selfie of Maite Valenzuela, gorgeous 24yo blonde Chilean female ranchera singer, wearing a white felt cowboy hat, stylish fitted denim vest, charming flirty smile, standing in a sunny Chilean vineyard in Colchagua Valley, Andes mountains in distant background, shot on iPhone 15 Pro, warm natural afternoon light, authentic skin texture --ar 4:5"
      },
      editorial: {
        label: "👗 Gala Ranchera Chic",
        tags: ["Flux.1 Dev", "Studio Master", "--ar 16:9"],
        text: "Stunning high-end editorial portrait of Maite Valenzuela, 24yo blonde Chilean country singer, wearing a sparkling crystal embroidered country corset dress with white brimmed hat, golden hour sunset rim lighting, rustic wooden Chilean hacienda balcony, 85mm f/1.4 lens, Hasselblad color science, cinematic hyperrealistic --ar 16:9"
      },
      fitness: {
        label: "🎤 Escenario Festival Chileno",
        tags: ["Action Stage", "Festival", "--ar 4:5"],
        text: "Dynamic concert photo of Maite Valenzuela performing live on stage at a crowded Chilean country festival, holding a vintage chrome microphone, accordion players blurred behind, stage spotlights in amber and red, passionate energetic expression, high shutter speed, photorealistic crowd lights --ar 4:5"
      },
      video: {
        label: "🎬 Video Kling 3.0 Videoclip",
        tags: ["Kling 3.0", "Motion Control", "60fps"],
        text: "4k slow motion clip of Maite turning around smiling playfully and tipping her white cowboy hat, warm wind blowing blonde hair, sun flare behind her shoulder in a vineyard setting, photorealistic 60fps cinematic grading"
      },
      negative: {
        label: "🚫 Negative Prompt",
        tags: ["Negative Matriz"],
        text: "deformed hands, ugly face, cartoon, 3d render, plastic skin, bad teeth, extra fingers, blurry, oversaturated, amateur lighting"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Atracción Masiva & Viral)", detail: "Videos en TikTok y Reels bailando adelantos de cumbia ranchera ('trend del zapateo'), humor campesino chileno y looks country hot." },
      { step: "Nivel 2 (Streaming & Medios)", detail: "Lanzamiento de sencillos originales producidos con IA (Suno/Udio) y masterización pro en Spotify y YouTube Music, rotación en radios regionales de Chile." },
      { step: "Nivel 3 (Monetización VIP Fanvue & PPV)", detail: "Suscripción Fanvue VIP ($15 USD/mes) con sesiones fotográficas exclusivas en viñedos y establos privados, mensajes de audio personalizados y preventa de merchandising (sombreros y poleras)." }
    ],
    posts: [
      {
        caption: "¡Se armó el baile en Colchagua! 🤠🎶 Grabando las tomas de nuestro nuevo tema ranchero para prender las fiestas de todo Chile. ¿Desde qué ciudad o pueblo me están escuchando hoy? Los leo a tod@s ❤️🇨🇱",
        likes: "28,640",
        comments: "1,140",
        date: "Hace 1 día",
        platform: "TikTok / Instagram"
      },
      {
        caption: "Tarde de ensayo con sombrero bien puesto y mate en mano 🌾✨ Lo mejor de la música ranchera es que se canta con el corazón apretado. ¡Nueva sesión de fotos exclusiva arriba en mi link! 🔥",
        likes: "19,820",
        comments: "780",
        date: "Hace 3 días",
        platform: "Instagram"
      }
    ]
  },

  liravoss: null, // Asignado abajo como alias de kira

  alejandra: {
    id: "alejandra",
    name: "Alejandra",
    niche: "Cultura Indie, Vinilos & Música Alternativa",
    badge: "En Concepto • Pipeline Q2",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
    tagline: "Curaduría musical indie, estética vintage 90s y recomendaciones de vinilos raros.",
    keyMarkets: "Alemania, España, Chile, México y amantes de la cultura indie y el diseño retro.",
    story: "Curadora de vinilos de colección, fotografía analógica y ropa de diseño vintage, Alejandra recorre las ferias de pulgas y los clubes de jazz e indie de Berlín y Europa. Diseñada para audiencias sensibles al arte pausado y el coleccionismo físico, conecta con marcas que valoran la autenticidad y la estética analógica de los años 90.",
    bio: "Alejandra (23 años) conecta a audiencias melómanas y amantes del diseño retro. Explora festivales independientes, descubrimientos en vinilo y moda vintage. Diseñada para alianzas con sellos discográficos, marcas de audio de alta fidelidad y suscripciones VIP.",
    archetype: "La Melómana Vintage / Curadora Indie",
    techStack: "Flux.1 LoRA Vintage Aesthetic + ElevenLabs Warm Voice + Kling 3.0",
    targetAudience: "Jóvenes y adultos de 18 a 35 años interesados en música independiente, coleccionismo de vinilo, fotografía analógica y festivales.",
    channels: "Instagram (@alejandra.indie), TikTok, Spotify Curated Playlists, Fanvue VIP ($10/mes)",
    gallery: [
      {
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
        tag: "Retrato LoRA Vintage",
        label: "Alejandra • Tienda de Vinilos",
        desc: "Luz cálida de atardecer en tienda de discos analógicos, estética cinematográfica 35mm."
      }
    ],
    voice: {
      title: "Voz Cálida & Melódica (ElevenLabs)",
      badge: "Voice ID: Alejandra-Indie",
      duration: "0:18",
      transcript: "«Un buen vinilo no se escucha: se siente. Cada imperfección en el surco cuenta la historia de un momento irrepetible.»",
      rate: 1.0,
      pitch: 1.0,
      lang: "es-ES"
    },
    roi: {
      defaultFollowers: 35000,
      defaultConversion: 2.0,
      defaultTicket: 10
    },
    promptScenes: {
      casual: {
        label: "🎧 Vintage Record Store",
        tags: ["Flux.1", "LoRA Alejandra", "--ar 4:5"],
        text: "analog 35mm film photograph of 23yo indie girl Alejandra browsing vinyl records in a cozy Berlin record shop, oversized vintage sweater, warm golden lamp light, bokeh, candid, hyperrealistic --ar 4:5"
      },
      editorial: {
        label: "🎸 Festival Indie Backstage",
        tags: ["Editorial", "--ar 16:9"],
        text: "Backstage festival portrait of Alejandra holding an acoustic vintage guitar, sunset twilight glow, subtle film grain, natural aesthetic expression --ar 16:9"
      }
    },
    monetizationFunnel: [
      { step: "Nivel 1 (Atracción)", detail: "TikTok y Reels con micro-reseñas de discos y recomendaciones de bandas emergentes." },
      { step: "Nivel 2 (Comunidad)", detail: "Canal de Telegram con playlists exclusivas y enlaces de afiliados a equipos de audio." },
      { step: "Nivel 3 (Suscripción VIP)", detail: "Fanvue ($10/mes) con sesiones fotográficas íntimas y live listening parties privadas." }
    ],
    posts: [
      {
        caption: "Encontré esta joya de 1974 escondida en una feria de pulgas de Kreuzberg 📻 ¿Cuál es ese disco que podrías escuchar en bucle todo el día?",
        likes: "4,120",
        comments: "215",
        date: "Hace 1 día",
        platform: "Instagram"
      }
    ]
  }
};

influencersData.almendra = influencersData.alejandra;
influencersData.liravoss = influencersData.kira;
influencersData.kiravane = influencersData.kira;

const channelsData = {
  sofia: {
    id: "sofia",
    title: "1. Los viajes en el tiempo de Sofía",
    subtitle: "Canal Infantil & Educativo de Historia",
    category: "Infantil / Historia",
    icon: "fa-child-reaching",
    color: "var(--pink)",
    image: "yt_sofia_thumb.jpg",
    concept: "Micro-aventuras animadas de 60 segundos donde Sofía viaja a épocas históricas clave (Egipto, Roma, el Renacimiento) dejando 1 enseñanza de valor por video.",
    targetAge: "Niños de 6 a 12 años y familias educadoras.",
    episodes: [
      {
        title: "Episodio #1: ¿Cómo se construyeron las Pirámides de Guiza?",
        duration: "0:58 min",
        script: `[NARRADOR]: "¡Hola aventureros! Hoy Sofía viaja al año 2500 a.C. en el antiguo Egipto. ¿Sabías que los trabajadores no eran esclavos, sino artesanos respetados?"
[VISUAL]: Sofía aterriza con su reloj del tiempo en el desierto animado.
[VALOR]: La importancia del trabajo en equipo y la geometría básica.`,
        thumbnail: "Ilustración 3D colorida de Sofía con un sarcófago brillante y jeroglíficos animados."
      },
      {
        title: "Episodio #2: El misterio de la primera imprenta de Gutenberg",
        duration: "0:59 min",
        script: `[NARRADOR]: "Alemania, 1440. Antes de Gutenberg, ¡escribir un solo libro tardaba 1 año completo! Acompaña a Sofía a descubrir las letras de metal."`,
        thumbnail: "Sofía sosteniendo un libro dorado recién impreso en el taller de Maguncia."
      }
    ],
    pipeline: "Guion de LLM infantil -> Voces sintetizadas cálidas -> Generación de frames con Midjourney/Flux -> Animación con Runway/Kling -> Edición automatizada de subtítulos.",
    monetization: "AdSense YouTube Kids, libros ilustrados en Amazon KDP y merchandising educacional."
  },
  arcanotech: {
    id: "arcanotech",
    title: "2. Los Gemelos Arcanotech",
    subtitle: "Sci-Fi, Solarpunk vs Cyberpunk",
    category: "Futurismo & Divulgación Sci-Fi",
    icon: "fa-atom",
    color: "var(--cyan)",
    image: "yt_arcanotech_thumb.jpg",
    concept: "Debates narrativos entre dos hermanos gemelos virtuales: uno defiende la visión Solarpunk (armonía ecológica tecnológica) y la otra defiende la visión Cyberpunk (distopía neon e hiper-industrialización).",
    targetAge: "Jóvenes y adultos de 16 a 40 años fascinados por la tecnología y la ciencia ficción.",
    episodes: [
      {
        title: "Episodio #10: Ciudades Flotantes: ¿Verde Utopía o Prisión de Neón?",
        duration: "12:40 min",
        script: `[NEXUS]: "El futuro pertenece a las arcologías solares donde cada edificio genera su propia energía."
[VEX]: "Iluso. El verdadero poder está en los servidores submarinos y los implantes neuronales nocturnos."`,
        thumbnail: "Pantalla dividida entre una ciudad verde llena de vegetación brillante y un rascacielos con lluvia de neón."
      }
    ],
    pipeline: "Debate guionado por IA -> Generación de avatares sintéticos duales -> B-roll generativo en 4K -> Efectos de sonido inmersivos synthwave.",
    monetization: "Patrocinios con marcas de tecnología, VPNs, herramientas de IA y membresías de canal."
  },
  sagrados: {
    id: "sagrados",
    title: "3. Cuentos Sagrados (sin autor)",
    subtitle: "Historia de las Religiones & Mitología",
    category: "Historia & Filosofía",
    icon: "fa-scroll",
    color: "var(--purple)",
    image: "yt_sagrados_thumb.jpg",
    concept: "Relatos sobrios y de alta calidad estética sobre textos sagrados, mitos de creación e historias bíblicas, védicas y nórdicas contados con tono neutral y de profundo respeto cultural.",
    targetAge: "Audiencia general interesada en historia antigua, teología y espiritualidad.",
    episodes: [
      {
        title: "Episodio #4: El Poema de Gilgamesh y el Diluvio Universal",
        duration: "18:20 min",
        script: `[VOZ EN OFF]: "Miles de años antes del relato de Noé, en las tablillas de arcilla de Mesopotamia se escribió la búsqueda de la inmortalidad..."`,
        thumbnail: "Tablilla cuneiforme dorada iluminada por fuego divino con la epopeya grabado."
      }
    ],
    pipeline: "Investigación histórica comprobada -> Locución profunda e imponente -> Arte cinematográfico generativo estilo óleo -> Banda sonora orquestal.",
    monetization: "YouTube AdSense de alto RPM, audiolibros en Audible y licencias educativas."
  },
  ranchera: {
    id: "ranchera",
    title: "4. Maite & La Fiebre Ranchera",
    subtitle: "Música, Festivales & Videoclips de Cumbia Ranchera Chilena",
    category: "Música & Festivales / Chile",
    icon: "fa-music",
    color: "#f59e0b",
    image: "yt_ranchera_thumb.jpg",
    concept: "Canal musical automatizado de cumbia ranchera y pop campesino para el mercado chileno y del Cono Sur. Canciones pegajosas compuestas con Suno/Udio, interpretadas por el avatar de Maite Valenzuela y videoclips cinematográficos generados en 4K con Kling 3.0 ambientados en fiestas campesinas, viñas de Colchagua y festivales chilenos.",
    targetAge: "Audiencia transversal chilena de 18 a 60 años amante del ritmo tropical-ranchero.",
    episodes: [
      {
        title: "Episodio Musical: 'Corazón Bandido' (Videoclip Oficial Cumbia Ranchera 2026)",
        duration: "3:20 min",
        script: `[MAITE]: "¡Súbele compadre, que esta noche se baila apretadito en todo Chile!"
[VISUAL]: Maite con sombrero texano blanco y botas bordadas cantando en una ramada campesina con luces de guirnalda y acordeón en primer plano.
[ESTRIBILLO]: Ritmo de cumbia ranchera bailable de alta energía con animaciones sincrónicas en 4K.`,
        thumbnail: "Maite Valenzuela con sombrero texano blanco y sonrisa pícara frente a un atardecer en viña de Colchagua con tipografía dorada."
      },
      {
        title: "Especial: Mix Bailable 60 Minutos para Fiestas Patrias & Asados",
        duration: "60:00 min",
        script: `[VOZ INTRO MAITE]: "¡Tiqui tiqui ti! Llegó el mix definitivo para prender la parrilla y el baile familiar."
[VISUAL]: Visualizador animado en bucle con Maite bailando y paisajes del campo chileno.`,
        thumbnail: "Collage campesino festivo con parrilla, espuelas de plata y Maite en pose country chic deslumbrante."
      }
    ],
    pipeline: "Composición lírica y melódica con Suno v3.5/Udio -> Producción vocal con ElevenLabs y DAW -> Generación de escenas con Kling 3.0 y Flux -> Edición de videoclip y masterización de audio multicanal.",
    monetization: "YouTube AdSense por alta retención de sesiones largas (mixes de 1 hora), regalías de streaming en Spotify/Apple Music, patrocinios con cervezas/licores chilenos y venta de merchandising oficial."
  },
  kira_gamedev: {
    id: "kira_gamedev",
    title: "5. Kira Vane • DevLogs & Ciber-Activismo",
    subtitle: "Desarrollo de Videojuegos Indie & Soberanía Digital",
    category: "Gaming & Cultura Open Source",
    icon: "fa-gamepad",
    color: "#10b981",
    image: "yt_kira_thumb.jpg",
    concept: "Devlogs cinematográficos y tutoriales de desarrollo de videojuegos en Godot y Unreal Engine 5 conducidos por Kira Vane, combinados con ensayos de alto impacto sobre ciberseguridad, privacidad de datos, software libre y crítica a los monopolios del gaming corporativo.",
    targetAge: "Desarrolladores, programadores, gamers y estudiantes tech de 18 a 35 años.",
    episodes: [
      {
        title: "Devlog #1: Cómo programé la mecánica de hackeo de mi juego cyberpunk en 48 horas",
        duration: "14:15 min",
        script: `[KIRA]: "La mayoría de juegos hacen que hackear sea apretar un solo botón. En mi juego independiente quise terminales reales con comandos de Linux y puzzles de redes. Te muestro la arquitectura de nodos en Godot..."
[VISUAL]: Kira con gafas gamer explicando en su setup neón con pantalla compartida de código y game testing.`,
        thumbnail: "Kira Vane con audífonos apuntando a código de terminal neón con texto: 'HACKEANDO EN TIEMPO REAL'."
      },
      {
        title: "Ensayo: Por qué el software libre salvará a la industria del videojuego",
        duration: "18:40 min",
        script: `[KIRA]: "Cuando los motores cerrados cambian sus políticas de cobro, los desarrolladores independientes pagan el pato. Es hora de apostar por motores abiertos y soberanía de código."`,
        thumbnail: "Kira frente a un fondo distópico de servidores con logo gigante de Godot y Unreal Engine."
      }
    ],
    pipeline: "Capturas de motor de juego en tiempo real -> Generación de avatar de Kira con sincronización labial Kling/HeyGen -> Edición dinámica estilo devlog de ritmo rápido -> Música synthwave/lo-fi original.",
    monetization: "Patrocinios con marcas de laptops, periféricos gamer, plataformas de hosting/cloud, AdSense Tech de alto RPM ($9–$15 USD) y embudo de conversión a la lista de deseados (Wishlist) en Steam y Fanvue VIP."
  }
};

channelsData.lau_gamedev = channelsData.kira_gamedev;

// --- 3. AUTHENTICATION & ACCESS CONTROL FOR INTERNAL TEAM PANEL ---
let pendingTeamTab = 'gantt';

function isTeamAuthenticated() {
  return sessionStorage.getItem('los_manejadores_team_auth') === 'true';
}

function updateAuthUI() {
  const lockIcon = document.getElementById('nav-lock-icon');
  const lockBtn = document.getElementById('btn-lock-auth');
  if (lockIcon) {
    if (isTeamAuthenticated()) {
      lockIcon.className = 'fa-solid fa-lock-open';
      lockIcon.style.color = '#10b981';
      if (lockBtn) {
        lockBtn.title = 'Sesión de Equipo Activa (Clic para ir al Panel)';
        lockBtn.style.borderColor = 'rgba(16, 185, 129, 0.45)';
        lockBtn.style.background = 'rgba(16, 185, 129, 0.12)';
      }
    } else {
      lockIcon.className = 'fa-solid fa-lock';
      lockIcon.style.color = '';
      if (lockBtn) {
        lockBtn.title = 'Acceso al Panel de Equipo (Requiere PIN)';
        lockBtn.style.borderColor = '';
        lockBtn.style.background = '';
      }
    }
  }
}

function openAuthModal(targetTab = 'gantt') {
  pendingTeamTab = targetTab;
  const modal = document.getElementById('auth-modal');
  const input = document.getElementById('team-pin-input');
  const errorMsg = document.getElementById('auth-error-msg');
  if (errorMsg) errorMsg.style.display = 'none';
  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 150);
  }
  if (modal) modal.classList.add('active');
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.remove('active');
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('team-pin-input');
  const pin = input ? input.value.trim() : '';
  const errorMsg = document.getElementById('auth-error-msg');

  // Accepted project PINs: '2026', 'manejadores', 'incel'
  if (pin === '2026' || pin.toLowerCase() === 'manejadores' || pin.toLowerCase() === 'incel') {
    sessionStorage.setItem('los_manejadores_team_auth', 'true');
    closeAuthModal();
    updateAuthUI();
    if (pendingTeamTab && pendingTeamTab.startsWith('influencer-cockpit:')) {
      const id = pendingTeamTab.replace('influencer-cockpit:', '');
      renderInfluencerPage(id, 'cockpit');
      showDynamicView();
    } else {
      showTeamView(pendingTeamTab || 'gantt');
    }
  } else {
    if (errorMsg) errorMsg.style.display = 'block';
  }
}

function lockTeamView() {
  sessionStorage.removeItem('los_manejadores_team_auth');
  updateAuthUI();
  switchView('public');
  alert("Has bloqueado la sesión confidencial del panel de equipo.");
}

// --- WORLD CLOCKS (TRI-REGIONAL OPERATION: BERLIN, TORONTO & SANTIAGO) ---
function updateWorldClocks() {
  const elBerlin = document.getElementById('clock-berlin');
  const elToronto = document.getElementById('clock-toronto');
  const elSantiago = document.getElementById('clock-santiago');
  if (!elBerlin && !elToronto && !elSantiago) return;

  const now = new Date();
  if (elBerlin) {
    elBerlin.textContent = now.toLocaleTimeString('es-ES', {
      timeZone: 'Europe/Berlin',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }
  if (elToronto) {
    elToronto.textContent = now.toLocaleTimeString('es-ES', {
      timeZone: 'America/Toronto',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }
  if (elSantiago) {
    elSantiago.textContent = now.toLocaleTimeString('es-CL', {
      timeZone: 'America/Santiago',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  }
}

// --- 4. ROUTER & PAGE RENDERERS ---

function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('load', handleRoute);
  setInterval(updateWorldClocks, 1000);
  updateAuthUI();
}

function handleRoute() {
  const hash = window.location.hash || '#home';
  const dynamicView = document.getElementById('view-dynamic');
  const publicView = document.getElementById('view-public');
  const teamView = document.getElementById('view-team');

  // Parse routes
  if (hash.startsWith('#influencer-cockpit/')) {
    const influencerId = hash.replace('#influencer-cockpit/', '');
    if (isTeamAuthenticated()) {
      renderInfluencerPage(influencerId, 'cockpit');
      showDynamicView();
    } else {
      openAuthModal('influencer-cockpit:' + influencerId);
      showPublicView();
    }
  } else if (hash.startsWith('#influencer/')) {
    const influencerId = hash.replace('#influencer/', '');
    renderInfluencerPage(influencerId, 'product');
    showDynamicView();
  } else if (hash.startsWith('#channel/')) {
    const channelId = hash.replace('#channel/', '');
    renderChannelPage(channelId);
    showDynamicView();
  } else if (hash === '#asesorias') {
    renderAdvisoriesPage();
    showDynamicView();
  } else if (hash === '#logos' || hash === '#copys') {
    if (isTeamAuthenticated()) {
      showTeamView('copys');
    } else {
      openAuthModal('copys');
      showPublicView();
    }
  } else if (hash === '#gantt') {
    if (isTeamAuthenticated()) {
      showTeamView('gantt');
    } else {
      openAuthModal('gantt');
      showPublicView();
    }
  } else if (hash === '#pipeline') {
    if (isTeamAuthenticated()) {
      showTeamView('pipeline');
    } else {
      openAuthModal('pipeline');
      showPublicView();
    }
  } else if (hash === '#members') {
    if (isTeamAuthenticated()) {
      showTeamView('members');
    } else {
      openAuthModal('members');
      showPublicView();
    }
  } else if (hash === '#influencer-ops' || hash === '#operaciones') {
    if (isTeamAuthenticated()) {
      showTeamView('influencer-ops');
    } else {
      openAuthModal('influencer-ops');
      showPublicView();
    }
  } else {
    // Default home view (#home, #desarrollo, #roster, #youtube, #pitch, etc.)
    showPublicView();
    if (hash && hash !== '#home') {
      const targetEl = document.querySelector(hash);
      if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Ensure navbar logo is updated
  applyLogo(currentLogoKey);
}

function showTeamView(subtab = 'gantt') {
  if (!isTeamAuthenticated()) {
    openAuthModal(subtab);
    return;
  }

  const dynamicView = document.getElementById('view-dynamic');
  const publicView = document.getElementById('view-public');
  const teamView = document.getElementById('view-team');
  const btnPublic = document.getElementById('btn-mode-public');
  const btnTeam = document.getElementById('btn-mode-team');

  if (publicView) publicView.style.display = 'none';
  if (dynamicView) dynamicView.style.display = 'none';
  if (teamView) {
    teamView.style.display = 'block';
    teamView.classList.add('active-view');
  }

  if (btnTeam) btnTeam.classList.add('active');
  if (btnPublic) btnPublic.classList.remove('active');

  switchTeamTab(subtab);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchTeamTab(tab) {
  const btnGantt = document.getElementById('btn-team-tab-gantt');
  const btnPipeline = document.getElementById('btn-team-tab-pipeline');
  const btnCopys = document.getElementById('btn-team-tab-copys');
  const btnMembers = document.getElementById('btn-team-tab-members');
  const btnInfluencerOps = document.getElementById('btn-team-tab-influencer-ops');

  const paneGantt = document.getElementById('team-pane-gantt');
  const panePipeline = document.getElementById('team-pane-pipeline');
  const paneCopys = document.getElementById('team-pane-copys');
  const paneMembers = document.getElementById('team-pane-members');
  const paneInfluencerOps = document.getElementById('team-pane-influencer-ops');

  [btnGantt, btnPipeline, btnCopys, btnMembers, btnInfluencerOps].forEach(b => { if (b) b.classList.remove('active'); });
  [paneGantt, panePipeline, paneCopys, paneMembers, paneInfluencerOps].forEach(p => { if (p) p.classList.remove('active-pane'); });

  if (tab === 'pipeline') {
    if (btnPipeline) btnPipeline.classList.add('active');
    if (panePipeline) panePipeline.classList.add('active-pane');
    if (window.location.hash !== '#pipeline') window.location.hash = '#pipeline';
  } else if (tab === 'copys') {
    if (btnCopys) btnCopys.classList.add('active');
    if (paneCopys) paneCopys.classList.add('active-pane');
    if (window.location.hash !== '#copys') window.location.hash = '#copys';
  } else if (tab === 'members') {
    if (btnMembers) btnMembers.classList.add('active');
    if (paneMembers) paneMembers.classList.add('active-pane');
    if (window.location.hash !== '#members') window.location.hash = '#members';
    updateWorldClocks();
  } else if (tab === 'influencer-ops') {
    if (btnInfluencerOps) btnInfluencerOps.classList.add('active');
    if (paneInfluencerOps) paneInfluencerOps.classList.add('active-pane');
    if (window.location.hash !== '#influencer-ops') window.location.hash = '#influencer-ops';
    renderInfluencerOpsMatrix();
  } else {
    if (btnGantt) btnGantt.classList.add('active');
    if (paneGantt) paneGantt.classList.add('active-pane');
    if (window.location.hash !== '#gantt') window.location.hash = '#gantt';
  }
}

function renderInfluencerOpsMatrix() {
  const container = document.getElementById('influencer-ops-table-container');
  if (!container) return;

  const characters = [
    { id: 'elena', name: 'Elena Daddario', handler: 'Daniel Santander (Alemania)', niche: 'Psicología & Lifestyle Consciente', status: 'Listo • Live', ticket: '$14 USD/m (VIP)' },
    { id: 'julia', name: 'Julia', handler: 'Pancho Ipinza (Canadá)', niche: 'Dermocosmética & Clean Beauty', status: 'Listo • Live', ticket: '$12 USD/m (VIP)' },
    { id: 'laura', name: 'Laura Taeda', handler: 'Wladimir Gutierrez (Chile)', niche: 'Nutrition Lifestyle + Science-Based Reviews', status: 'Listo • Live', ticket: '$24 USD/m (VIP)' },
    { id: 'maite', name: 'Maite Valenzuela', handler: 'Equipo (Los Manejadores)', niche: 'Cumbia Ranchera Pop & Mercado Chile', status: 'Listo • Live (Equipo)', ticket: '$15 USD/m (VIP)' },
    { id: 'kira', name: 'Kira Voss', handler: 'Equipo (Los Manejadores)', niche: 'Indie Game Dev & Cyberpunk Glamour (Validado)', status: 'Validado • Live (Equipo)', ticket: '$18 USD/m (VIP)' },
    { id: 'alejandra', name: 'Alejandra', handler: 'Pancho / Pipeline', niche: 'Cultura Indie & Música', status: 'En Concepto (Q2)', ticket: '$10 USD/m (VIP)' }
  ];

  let rows = characters.map(c => {
    const data = influencersData[c.id];
    let answered = 0;
    const totalQ = defaultCalibrationQuestions.length;
    defaultCalibrationQuestions.forEach(q => {
      const ans = getCalibrationAnswer(c.id, q.id);
      if (ans && ans.trim().length > 0) answered++;
    });
    const pct = Math.round((answered / totalQ) * 100);
    const badgeColor = answered === totalQ ? '#10b981' : (answered > 0 ? '#f59e0b' : '#94a3b8');

    const activePlats = typeof getInfluencerPlatforms === 'function' ? getInfluencerPlatforms(c.id) : [];
    const platPills = activePlats.slice(0, 3).map(pid => {
      let name = pid;
      if (typeof defaultPlatformCategories !== 'undefined') {
        defaultPlatformCategories.forEach(cat => {
          const found = cat.platforms.find(p => p.id === pid);
          if (found) name = found.name;
        });
      }
      if (pid.startsWith('custom_')) name = pid.replace('custom_', '').replace(/_/g, ' ');
      return `<span class="platform-tag-pill">${name}</span>`;
    }).join(' ');
    const extraCount = activePlats.length > 3 ? `<span style="font-size: 0.7rem; color: var(--cyan); font-weight:600;">+${activePlats.length - 3}</span>` : '';

    return `
      <tr>
        <td style="display: flex; align-items: center; gap: 0.75rem;">
          <img src="${data ? data.avatar : ''}" alt="${c.name}" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover; border: 1px solid var(--border-glass);" />
          <div>
            <strong style="color: #fff; font-size: 0.9rem;">${c.name}</strong>
            <div style="font-size: 0.72rem; color: var(--text-muted);">${c.niche}</div>
          </div>
        </td>
        <td style="font-size: 0.82rem; color: var(--cyan);"><i class="fa-solid fa-user-check"></i> ${c.handler}</td>
        <td><span class="influencer-badge" style="font-size: 0.7rem; padding: 0.2rem 0.5rem;">${c.status}</span></td>
        <td style="font-size: 0.82rem; color: #fff;">
          <div style="display: flex; align-items: center; gap: 0.35rem; flex-wrap: wrap; max-width: 220px;">
            ${platPills} ${extraCount}
          </div>
        </td>
        <td>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <div style="width: 50px; height: 5px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
              <div style="width: ${pct}%; height: 100%; background: ${badgeColor};"></div>
            </div>
            <span style="font-size: 0.75rem; color: ${badgeColor}; font-weight: 600;">${answered}/${totalQ}</span>
          </div>
        </td>
        <td>
          <div style="display: flex; gap: 0.35rem; flex-wrap: wrap;">
            <a href="#influencer-cockpit/${c.id}" class="btn btn-primary btn-sm" style="font-size: 0.72rem; padding: 0.28rem 0.5rem;" title="Abrir Cockpit Operativo Privado (Prompts, SOP y Briefing)">
              <i class="fa-solid fa-sliders"></i> Cockpit
            </a>
            <a href="#influencer/${c.id}" class="btn btn-secondary btn-sm" style="font-size: 0.72rem; padding: 0.28rem 0.5rem; border-color: rgba(6, 182, 212, 0.4); color: var(--cyan); background: rgba(6, 182, 212, 0.08);" title="Ver Ficha Comercial de Producto Pública">
              <i class="fa-solid fa-eye"></i> Ficha Pública
            </a>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  container.innerHTML = `
    <table class="gantt-table">
      <thead>
        <tr>
          <th>Personaje & Activo</th>
          <th>Responsable</th>
          <th>Estado Embudo</th>
          <th>Plataformas de Contenido</th>
          <th>Briefing Operativo</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}

function showDynamicView() {
  const dynamicView = document.getElementById('view-dynamic');
  const publicView = document.getElementById('view-public');
  const teamView = document.getElementById('view-team');

  if (publicView) publicView.style.display = 'none';
  if (teamView) teamView.style.display = 'none';
  if (dynamicView) {
    dynamicView.style.display = 'block';
    dynamicView.classList.add('active-view');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPublicView() {
  const dynamicView = document.getElementById('view-dynamic');
  const publicView = document.getElementById('view-public');
  const teamView = document.getElementById('view-team');

  if (dynamicView) dynamicView.style.display = 'none';
  if (teamView) teamView.style.display = 'none';
  if (publicView) {
    publicView.style.display = 'block';
    publicView.classList.add('active-view');
  }
  
  // Highlight navbar
  const btnPublic = document.getElementById('btn-mode-public');
  const btnTeam = document.getElementById('btn-mode-team');
  if (btnPublic) btnPublic.classList.add('active');
  if (btnTeam) btnTeam.classList.remove('active');
}

// --- 4. DEDICATED SUBPAGE RENDER FUNCTIONS ---

// RENDER: INFLUENCER PAGE
// VOICE PLAYBACK SYSTEM
let voicePlayInterval = null;
let currentPlayingId = null;

function toggleVoicePlayback(id) {
  const data = influencersData[id];
  if (!data || !data.voice) return;

  const card = document.getElementById(`voice-card-${id}`);
  const btn = document.getElementById(`voice-btn-${id}`);
  const timeEl = document.getElementById(`voice-time-${id}`);

  if (currentPlayingId === id) {
    stopVoicePlayback();
    return;
  }

  stopVoicePlayback();
  currentPlayingId = id;

  if (card) card.classList.add('is-playing');
  if (btn) {
    btn.classList.add('playing');
    btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }

  let seconds = 0;
  voicePlayInterval = setInterval(() => {
    seconds++;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (timeEl) timeEl.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    if (seconds >= 22) {
      stopVoicePlayback();
    }
  }, 1000);

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const cleanText = data.voice.transcript.replace(/[«»]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = data.voice.rate || 1.0;
    utterance.pitch = data.voice.pitch || 1.0;
    utterance.lang = data.voice.lang || 'es-ES';

    const voices = window.speechSynthesis.getVoices();
    const match = voices.find(v => v.lang.startsWith(utterance.lang.slice(0, 2)));
    if (match) utterance.voice = match;

    utterance.onend = () => stopVoicePlayback();
    utterance.onerror = () => stopVoicePlayback();
    window.speechSynthesis.speak(utterance);
  }
}

function stopVoicePlayback() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (voicePlayInterval) {
    clearInterval(voicePlayInterval);
    voicePlayInterval = null;
  }
  if (currentPlayingId) {
    const card = document.getElementById(`voice-card-${currentPlayingId}`);
    const btn = document.getElementById(`voice-btn-${currentPlayingId}`);
    const timeEl = document.getElementById(`voice-time-${currentPlayingId}`);
    if (card) card.classList.remove('is-playing');
    if (btn) {
      btn.classList.remove('playing');
      btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
    if (timeEl) timeEl.textContent = '0:00';
    currentPlayingId = null;
  }
}

// INTERACTIVE ROI CALCULATOR
function updateInfluencerRoi(id) {
  const followersInput = document.getElementById(`roi-followers-${id}`);
  const convInput = document.getElementById(`roi-conv-${id}`);
  const ticketInput = document.getElementById(`roi-ticket-${id}`);

  if (!followersInput || !convInput || !ticketInput) return;

  const followers = parseInt(followersInput.value, 10);
  const convRate = parseFloat(convInput.value);
  const ticket = parseFloat(ticketInput.value);

  const lblFollowers = document.getElementById(`val-followers-${id}`);
  const lblConv = document.getElementById(`val-conv-${id}`);
  const lblTicket = document.getElementById(`val-ticket-${id}`);

  if (lblFollowers) lblFollowers.textContent = Number(followers).toLocaleString() + ' seguidores';
  if (lblConv) lblConv.textContent = convRate.toFixed(1) + '%';
  if (lblTicket) lblTicket.textContent = '$' + ticket.toFixed(0) + ' USD/mes';

  const subs = Math.round(followers * (convRate / 100));
  const mrr = Math.round(subs * ticket);
  const arr = mrr * 12;
  const agencyShare = Math.round(mrr * 0.70);
  const talentShare = Math.round(mrr * 0.30);

  const resSubs = document.getElementById(`res-subs-${id}`);
  const resMrr = document.getElementById(`res-mrr-${id}`);
  const resArr = document.getElementById(`res-arr-${id}`);
  const resAgency = document.getElementById(`res-agency-${id}`);
  const resTalent = document.getElementById(`res-talent-${id}`);

  if (resSubs) resSubs.textContent = subs.toLocaleString() + ' suscriptores VIP';
  if (resMrr) resMrr.textContent = '$' + mrr.toLocaleString() + ' USD';
  if (resArr) resArr.textContent = '$' + arr.toLocaleString() + ' USD';
  if (resAgency) resAgency.textContent = '$' + agencyShare.toLocaleString();
  if (resTalent) resTalent.textContent = '$' + talentShare.toLocaleString();
}

function setRoiPreset(id, preset) {
  const followersInput = document.getElementById(`roi-followers-${id}`);
  const convInput = document.getElementById(`roi-conv-${id}`);
  const ticketInput = document.getElementById(`roi-ticket-${id}`);

  if (!followersInput || !convInput || !ticketInput) return;

  if (preset === 'conservative') {
    followersInput.value = 25000;
    convInput.value = 0.8;
  } else if (preset === 'moderate') {
    followersInput.value = 75000;
    convInput.value = 1.8;
  } else if (preset === 'aggressive') {
    followersInput.value = 200000;
    convInput.value = 3.2;
  }

  const buttons = document.querySelectorAll(`.preset-btn-${id}`);
  buttons.forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`btn-preset-${id}-${preset}`);
  if (activeBtn) activeBtn.classList.add('active');

  updateInfluencerRoi(id);
}

// SCENE PROMPT SWITCHER
function selectPromptScene(id, sceneKey) {
  const data = influencersData[id];
  if (!data || !data.promptScenes || !data.promptScenes[sceneKey]) return;

  const scene = data.promptScenes[sceneKey];
  const box = document.getElementById(`prompt-display-${id}`);
  const tagsContainer = document.getElementById(`prompt-tags-${id}`);

  if (box) box.textContent = scene.text;
  if (tagsContainer && scene.tags) {
    tagsContainer.innerHTML = scene.tags.map(t => `<span class="prompt-tag">${t}</span>`).join('');
  }

  const buttons = document.querySelectorAll(`.scene-btn-${id}`);
  buttons.forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`scene-btn-${id}-${sceneKey}`);
  if (activeBtn) activeBtn.classList.add('active');
}

function copyScenePrompt(id) {
  const box = document.getElementById(`prompt-display-${id}`);
  if (!box) return;
  const text = box.textContent || box.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const copyBtn = document.getElementById(`copy-scene-btn-${id}`);
    if (copyBtn) {
      const orig = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i> ¡Prompt Copiado!';
      setTimeout(() => { copyBtn.innerHTML = orig; }, 2000);
    }
  }).catch(() => {
    alert('Prompt copiado al portapapeles');
  });
}

// CALIBRATION & PRODUCTION BRIEFING QUESTIONS MODULE
const defaultCalibrationQuestions = [
  {
    id: 'objective',
    title: '1. Objetivo Estratégico y Etapa del Embudo (Top, Mid o Bottom)',
    guide: 'Define la meta específica del activo en este ciclo: ¿Atracción masiva y viralidad en TikTok/Reels (Top)? ¿Engagement y construcción de lealtad en Telegram/Instagram (Mid)? ¿Conversión directa a Fanvue VIP o Pay-Per-View (Bottom)?',
    placeholder: 'Ej: Generar 60,000 impresiones orgánicas en TikTok hacia el canal VIP de Fanvue con foco en estética cotidiana...'
  },
  {
    id: 'tone',
    title: '2. Tono de Voz, Psicología Emocional & Filtro Ético / Límites',
    guide: 'Establece el arquetipo de comunicación: nivel de cercanía, humor, misterio o sofisticación. Define explícitamente qué temas o actitudes NUNCA debe adoptar (cero política, evitar vulgaridad excesiva, mantener misterio elegante, etc.).',
    placeholder: 'Ej: Tono cálido, intelectual y cómplice. Respuestas empáticas en primera persona. Prohibido: polarización política o promesas milagrosas...'
  },
  {
    id: 'location',
    title: '3. Entorno Visual, Locación, Iluminación & Lentes Focales',
    guide: 'Determina la atmósfera cinematográfica o cotidiana: locación exacta (departamento en Berlín, café en Miraflores, gimnasio boutique), tipo de luz (golden hour, luz natural de ventana, neón nocturno) y lente (35mm candid selfie, 85mm f/1.8 retrato bokeh).',
    placeholder: 'Ej: Luz de atardecer filtrada en ventanal nórdico, paleta en tonos neutros y pasteles, lente 50mm f/1.4 con textura de piel hiperrealista...'
  },
  {
    id: 'hook',
    title: '4. Gancho Visceral / Hook de los Primeros 3 Segundos',
    guide: '¿Qué acción visual o frase detonante detendrá el pulgar del usuario en el feed de Instagram/TikTok? Diseña el primer cuadro y la micro-expresión o frase intrigante.',
    placeholder: 'Ej: Mirada directa a cámara ajustándose el pelo diciendo: "¿Alguna vez sentiste que todo el mundo sigue un guión menos tú?..."'
  },
  {
    id: 'cta',
    title: '5. Llamado a la Acción Exacto (CTA) y Destino de Tráfico',
    guide: 'Instrucción inequívoca para la audiencia. ¿Dónde deben hacer clic y cuál es el incentivo para dar el siguiente paso? (Link en bio, comentar una palabra clave para recibir DM automatizado, unirse al canal privado, etc.).',
    placeholder: 'Ej: "Comenta \'VIP\' abajo y te mando al DM mi set privado antes de que se agoten las invitaciones."'
  },
  {
    id: 'tech_params',
    title: '6. Checklist Técnico de Render & Consistencia (LoRA, Semillas, Prompt)',
    guide: 'Parámetros técnicos acordados para el equipo de producción: peso de LoRA en ComfyUI/Flux (0.75 - 0.85), modelo de voz de ElevenLabs asociado, herramientas de animación (Kling, Hailuo o LivePortrait) y semillas de referencia.',
    placeholder: 'Ej: ComfyUI Flux con LoRA v2 a peso 0.82, prompt base con disparador facial, ElevenLabs voice ID asignado con estabilidad en 0.65...'
  }
];

function getCalibrationStorageKey(influencerId, qId) {
  return `incel_briefing_${influencerId}_${qId}`;
}

function getCalibrationAnswer(influencerId, qId) {
  try {
    return localStorage.getItem(getCalibrationStorageKey(influencerId, qId)) || '';
  } catch (e) {
    return '';
  }
}

function saveCalibrationAnswer(influencerId, qId, autoNotify = false) {
  const textarea = document.getElementById(`calib-input-${influencerId}-${qId}`);
  if (!textarea) return;
  const val = textarea.value.trim();
  try {
    localStorage.setItem(getCalibrationStorageKey(influencerId, qId), val);
  } catch (e) {
    console.error('Error saving calibration answer', e);
  }

  // Update question UI state
  const item = document.getElementById(`calib-item-${influencerId}-${qId}`);
  const badge = document.getElementById(`calib-badge-${influencerId}-${qId}`);
  if (item && badge) {
    if (val.length > 0) {
      item.classList.add('answered');
      badge.className = 'question-status-badge done';
      badge.innerHTML = '<i class="fa-solid fa-check"></i> Respondida';
    } else {
      item.classList.remove('answered');
      badge.className = 'question-status-badge pending';
      badge.innerHTML = '<i class="fa-regular fa-clock"></i> Pendiente';
    }
  }

  updateCalibrationProgress(influencerId);

  if (!autoNotify) {
    const btn = document.getElementById(`calib-btn-${influencerId}-${qId}`);
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Guardado';
      setTimeout(() => { btn.innerHTML = orig; }, 1500);
    }
  }
}

function updateCalibrationProgress(influencerId) {
  let answeredCount = 0;
  defaultCalibrationQuestions.forEach(q => {
    const val = getCalibrationAnswer(influencerId, q.id);
    if (val && val.trim().length > 0) answeredCount++;
  });

  const total = defaultCalibrationQuestions.length;
  const pct = Math.round((answeredCount / total) * 100);

  const fillEl = document.getElementById(`calib-fill-${influencerId}`);
  const textEl = document.getElementById(`calib-prog-text-${influencerId}`);
  if (fillEl) fillEl.style.width = `${pct}%`;
  if (textEl) textEl.textContent = `${answeredCount}/${total} Listas (${pct}%)`;

  const tabBtn = document.getElementById('tab-btn-calib');
  if (tabBtn) {
    tabBtn.innerHTML = `<i class="fa-solid fa-clipboard-question"></i> Preguntas de Uso (${answeredCount}/${total})`;
  }
}

function toggleQuestionBody(influencerId, qId) {
  const body = document.getElementById(`calib-body-${influencerId}-${qId}`);
  const icon = document.getElementById(`calib-icon-${influencerId}-${qId}`);
  if (!body) return;
  const isHidden = body.style.display === 'none';
  body.style.display = isHidden ? 'block' : 'none';
  if (icon) {
    icon.className = isHidden ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
  }
}

function copyConsolidatedBriefing(influencerId) {
  const data = influencersData[influencerId];
  const charName = data ? data.name : influencerId;
  let text = `========================================\n`;
  text += `DOSSIER OPERATIVO & BRIEFING DE PRODUCCIÓN\n`;
  text += `PERSONAJE: ${charName.toUpperCase()}\n`;
  text += `FECHA DE GENERACIÓN: ${new Date().toLocaleDateString()}\n`;
  text += `========================================\n\n`;

  defaultCalibrationQuestions.forEach(q => {
    const ans = getCalibrationAnswer(influencerId, q.id) || '(Pendiente de respuesta por el equipo)';
    text += `[${q.title}]\n${ans}\n\n`;
  });

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById(`copy-briefing-btn-${influencerId}`);
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i> ¡Briefing Copiado!';
      setTimeout(() => { btn.innerHTML = orig; }, 2200);
    }
  }).catch(() => {
    alert('Briefing copiado al portapapeles');
  });
}

function resetCalibrationQuestions(influencerId) {
  if (!confirm('¿Estás seguro de restablecer las respuestas de este briefing? Se borrarán las respuestas guardadas localmente.')) {
    return;
  }
  defaultCalibrationQuestions.forEach(q => {
    try {
      localStorage.removeItem(getCalibrationStorageKey(influencerId, q.id));
    } catch (e) {}
    const textarea = document.getElementById(`calib-input-${influencerId}-${q.id}`);
    if (textarea) textarea.value = '';
    const item = document.getElementById(`calib-item-${influencerId}-${q.id}`);
    const badge = document.getElementById(`calib-badge-${influencerId}-${q.id}`);
    if (item) item.classList.remove('answered');
    if (badge) {
      badge.className = 'question-status-badge pending';
      badge.innerHTML = '<i class="fa-regular fa-clock"></i> Pendiente';
    }
  });
  updateCalibrationProgress(influencerId);
}

// ==========================================================================
// GESTIÓN DE CONTENIDOS & PLATAFORMAS (OPERACIONES DE PRODUCCIÓN)
// ==========================================================================

const defaultPlatformCategories = [
  {
    id: "visual",
    name: "Generación Visual & Consistencia Facial",
    icon: "fa-palette",
    color: "#8b5cf6",
    platforms: [
      { id: "flux", name: "Flux.1 Dev" },
      { id: "comfy", name: "ComfyUI + LoRA" },
      { id: "mj", name: "Midjourney v6" },
      { id: "nanobanana", name: "Nano Banana Pro" },
      { id: "realesrgan", name: "RealESRGAN 4K" },
      { id: "facefusion", name: "FaceFusion / InSwapper" },
      { id: "sdxl", name: "Stable Diffusion XL" }
    ]
  },
  {
    id: "video",
    name: "Animación de Video & Lip-Sync",
    icon: "fa-film",
    color: "#06b6d4",
    platforms: [
      { id: "kling", name: "Kling 3.0" },
      { id: "minimax", name: "Hailuo / MiniMax" },
      { id: "runway", name: "Runway Gen-3" },
      { id: "heygen", name: "HeyGen LipSync" },
      { id: "liveportrait", name: "LivePortrait" },
      { id: "luma", name: "Luma Dream Machine" },
      { id: "pika", name: "Pika 2.0" }
    ]
  },
  {
    id: "audio",
    name: "Voz Sintética & Composición Musical",
    icon: "fa-waveform-lines",
    color: "#ec4899",
    platforms: [
      { id: "elevenlabs", name: "ElevenLabs Voice" },
      { id: "suno", name: "Suno v3.5 (Música)" },
      { id: "udio", name: "Udio AI (Música)" },
      { id: "adobepodcast", name: "Adobe Podcast AI" },
      { id: "descript", name: "Descript Overdub" }
    ]
  },
  {
    id: "copy",
    name: "Guionizado, Copys & Estrategia",
    icon: "fa-brain",
    color: "#f59e0b",
    platforms: [
      { id: "claude", name: "Claude 3.5 Sonnet" },
      { id: "chatgpt", name: "ChatGPT-4o" },
      { id: "gemini", name: "Gemini 1.5 Pro" },
      { id: "notion", name: "Notion Workspace" },
      { id: "perplexity", name: "Perplexity AI" }
    ]
  },
  {
    id: "post",
    name: "Edición & Postproducción",
    icon: "fa-wand-magic-sparkles",
    color: "#10b981",
    platforms: [
      { id: "capcut", name: "CapCut Pro" },
      { id: "davinci", name: "DaVinci Resolve" },
      { id: "premiere", name: "Adobe Premiere" },
      { id: "photoshop", name: "Photoshop AI" },
      { id: "aftereffects", name: "After Effects" }
    ]
  },
  {
    id: "social",
    name: "Publicación & Redes Sociales",
    icon: "fa-share-nodes",
    color: "#3b82f6",
    platforms: [
      { id: "instagram", name: "Instagram (Reels/Feed)" },
      { id: "tiktok", name: "TikTok" },
      { id: "youtube", name: "YouTube Shorts / VOD" },
      { id: "twitter", name: "Twitter / X" },
      { id: "metricool", name: "Metricool (Scheduler)" },
      { id: "buffer", name: "Buffer" }
    ]
  },
  {
    id: "monetization",
    name: "Monetización & Suscripción VIP",
    icon: "fa-hand-holding-dollar",
    color: "#eab308",
    platforms: [
      { id: "fanvue", name: "Fanvue VIP" },
      { id: "patreon", name: "Patreon" },
      { id: "onlyfans", name: "OnlyFans" },
      { id: "telegram", name: "Telegram VIP Bot" },
      { id: "substack", name: "Substack Newsletter" },
      { id: "discord", name: "Discord VIP Community" }
    ]
  }
];

const defaultInfluencerPlatforms = {
  elena: ["flux", "comfy", "elevenlabs", "claude", "capcut", "instagram", "tiktok", "fanvue"],
  julia: ["mj", "comfy", "elevenlabs", "chatgpt", "premiere", "instagram", "tiktok", "fanvue"],
  laura: ["flux", "nanobanana", "elevenlabs", "claude", "notion", "capcut", "instagram", "tiktok", "fanvue"],
  maite: ["flux", "kling", "suno", "elevenlabs", "chatgpt", "capcut", "tiktok", "instagram", "fanvue"],
  kira: ["mj", "kling", "elevenlabs", "claude", "davinci", "twitter", "youtube", "patreon", "discord"],
  liravoss: ["flux", "comfy", "realesrgan", "kling", "elevenlabs", "claude", "twitter", "fanvue", "discord"],
  alejandra: ["mj", "suno", "elevenlabs", "chatgpt", "capcut", "instagram", "patreon"],
  almendra: ["mj", "suno", "elevenlabs", "chatgpt", "capcut", "instagram", "patreon"]
};

const defaultInfluencerOpsConfig = {
  elena: {
    handle: "@elena.daddario",
    vipUrl: "https://fanvue.com/elena.daddario",
    cadence: "3 reels/sem + 1 photoshoot/sem",
    scheduler: "Metricool (Auto-pilot 18:00 CET)",
    responsible: "Daniel Santander (Alemania)",
    status: "Activo / Producción Live",
    sop: "1. Generación de base facial en Flux.1 con LoRA Elena v2.4 (peso 0.82).\n2. Scripting de micro-reflexión psicológica en Claude 3.5 Sonnet.\n3. Clonación de voz con ElevenLabs (Elena-Warm, estabilidad 0.72).\n4. Animación en Kling 3.0 con prompt de movimiento suave.\n5. Subtítulos cinemáticos en CapCut Pro y programación en Metricool."
  },
  julia: {
    handle: "@julia.cleanbeauty",
    vipUrl: "https://fanvue.com/julia.skincare",
    cadence: "4 videos/sem + 2 carruseles",
    scheduler: "Buffer (Horarios matutinos)",
    responsible: "Pancho Ipinza (Canadá)",
    status: "Activo / Producción Live",
    sop: "1. Prompt en Midjourney v6 con close-up macro de textura de piel real.\n2. Inpainting en ComfyUI para consistencia de rasgos.\n3. Síntesis de voz francesa cálida con ElevenLabs.\n4. Edición de reel de skincare en Premiere con B-roll de productos limpios.\n5. Publicación en Instagram y TikTok."
  },
  laura: {
    handle: "@laura.taeda.nutrition",
    vipUrl: "https://fanvue.com/laurataeda",
    cadence: "3 videos ciencia/sem + 1 live simulado",
    scheduler: "Metricool (13:00 y 20:00 CLT)",
    responsible: "Wladimir Gutierrez (Chile)",
    status: "Activo / Producción Live",
    sop: "1. Extracción de paper científico o metanálisis en PubMed.\n2. Prompt visual en Flux.1 Dev: Laura en cocina minimalista o consultorio moderno sosteniendo suplemento/comida.\n3. Generación de script riguroso y accesible en Claude 3.5 Sonnet.\n4. Audio sintético con acento neutro en ElevenLabs.\n5. Montaje en CapCut Pro con gráficos de datos e infografías."
  },
  maite: {
    handle: "@maite.valenzuela.musica",
    vipUrl: "https://fanvue.com/maite.valenzuela",
    cadence: "5 tiktoks/sem + 1 lanzamiento quincenal",
    scheduler: "TikTok Native + Metricool",
    responsible: "Equipo (Los Manejadores)",
    status: "Activo / Producción Live",
    sop: "1. Generación de base musical cumbia ranchera en Suno v3.5 con estribillo pegajoso.\n2. Generación fotográfica de Maite en viñedo o medialuna con sombrero blanco en Flux.1 Dev.\n3. Animación de baile y playback en Kling 3.0.\n4. Edición de teaser viral con 'trend de zapateo' para TikTok y Reels de Chile.\n5. Canal VIP Fanvue para tomas de backstage y sesiones country hot."
  },
  kira: {
    handle: "@kira.voss.dev",
    vipUrl: "https://fanvue.com/kiravoss",
    cadence: "3 devlogs/sem + 3 sets VIP/sem",
    scheduler: "Metricool + Twitter Scheduled",
    responsible: "Equipo (Los Manejadores)",
    status: "Validado / Live (Equipo)",
    sop: "1. Concept art gamedev y renders de alta resolución en Flux.1 con LoRA Cyberpunk.\n2. Capturas de pantalla de motor Godot/Unreal combinadas con estética hot dev.\n3. Síntesis vocal tech con ElevenLabs y animación en Kling 3.0.\n4. Teasers de código y privacidad en YouTube/X con alto engagement.\n5. Conversión directa a Fanvue Premium ($18/mes) y listas de deseados en Steam."
  },
  liravoss: {
    handle: "@kira.voss.dev",
    vipUrl: "https://fanvue.com/kiravoss",
    cadence: "3 devlogs/sem + 3 sets VIP/sem",
    scheduler: "Metricool",
    responsible: "Equipo (Los Manejadores)",
    status: "Validado / Live (Equipo)",
    sop: "Activo unificado con Kira Voss (Game Dev & Cyberpunk Glamour)."
  },
  alejandra: {
    handle: "@alejandra.music",
    vipUrl: "https://patreon.com/alejandra",
    cadence: "2 demos/sem",
    scheduler: "Metricool",
    responsible: "Pancho / Pipeline",
    status: "En Concepto (Q2)",
    sop: "1. Renders indie pop en Midjourney v6.\n2. Temas indie sintetizados en Suno.\n3. Patreon para fans de la música emergente."
  },
  almendra: {
    handle: "@alejandra.music",
    vipUrl: "https://patreon.com/alejandra",
    cadence: "2 demos/sem",
    scheduler: "Metricool",
    responsible: "Pancho / Pipeline",
    status: "En Concepto (Q2)",
    sop: "1. Renders indie pop en Midjourney v6.\n2. Temas indie sintetizados en Suno.\n3. Patreon para fans de la música emergente."
  }
};

function getInfluencerPlatforms(influencerId) {
  try {
    const raw = localStorage.getItem(`incel_platforms_${influencerId}`);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return defaultInfluencerPlatforms[influencerId] ? [...defaultInfluencerPlatforms[influencerId]] : [];
}

function saveInfluencerPlatforms(influencerId, platformsList) {
  try {
    localStorage.setItem(`incel_platforms_${influencerId}`, JSON.stringify(platformsList));
  } catch (e) {
    console.error('Error saving platforms', e);
  }
}

function toggleInfluencerPlatform(influencerId, platformId) {
  const current = getInfluencerPlatforms(influencerId);
  const idx = current.indexOf(platformId);
  if (idx > -1) {
    current.splice(idx, 1);
  } else {
    current.push(platformId);
  }
  saveInfluencerPlatforms(influencerId, current);

  // Update chip class in UI
  const chipEl = document.getElementById(`plat-chip-${influencerId}-${platformId}`);
  if (chipEl) {
    if (current.includes(platformId)) {
      chipEl.classList.add('active');
      const icon = chipEl.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-check-circle';
    } else {
      chipEl.classList.remove('active');
      const icon = chipEl.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-circle-plus';
    }
  }

  // Update KPI badge
  const kpiEl = document.getElementById(`plat-kpi-${influencerId}`);
  if (kpiEl) {
    kpiEl.innerHTML = `<i class="fa-solid fa-layer-group"></i> ${current.length} Plataformas Activas`;
  }
}

function addCustomPlatform(influencerId) {
  const inputEl = document.getElementById(`new-platform-input-${influencerId}`);
  if (!inputEl) return;
  const name = inputEl.value.trim();
  if (!name) return;

  const slug = 'custom_' + name.toLowerCase().replace(/[^a-z0-9]/g, '_');
  const current = getInfluencerPlatforms(influencerId);
  if (!current.includes(slug)) {
    current.push(slug);
    saveInfluencerPlatforms(influencerId, current);
  }

  inputEl.value = '';
  renderPlatformsChips(influencerId);
}

function getInfluencerOpsConfig(influencerId) {
  try {
    const raw = localStorage.getItem(`incel_ops_config_${influencerId}`);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return defaultInfluencerOpsConfig[influencerId] || {
    handle: `@${influencerId}.official`,
    vipUrl: `https://fanvue.com/${influencerId}`,
    cadence: '3 publicaciones/semana',
    scheduler: 'Metricool',
    responsible: 'Equipo Los Manejadores',
    status: 'Activo / Producción Live',
    sop: '1. Definición de concepto y guión en LLM.\n2. Generación visual y consistencia de rasgos.\n3. Generación de voz y animación.\n4. Postproducción y subtítulos.\n5. Programación en redes y canal VIP.'
  };
}

function saveInfluencerOpsConfig(influencerId, showNotice = false) {
  const handle = document.getElementById(`plat-handle-${influencerId}`)?.value || '';
  const vipUrl = document.getElementById(`plat-vip-${influencerId}`)?.value || '';
  const cadence = document.getElementById(`plat-cadence-${influencerId}`)?.value || '';
  const scheduler = document.getElementById(`plat-scheduler-${influencerId}`)?.value || '';
  const responsible = document.getElementById(`plat-resp-${influencerId}`)?.value || '';
  const status = document.getElementById(`plat-status-${influencerId}`)?.value || '';
  const sop = document.getElementById(`plat-sop-${influencerId}`)?.value || '';

  const config = { handle, vipUrl, cadence, scheduler, responsible, status, sop };
  try {
    localStorage.setItem(`incel_ops_config_${influencerId}`, JSON.stringify(config));
  } catch (e) {
    console.error('Error saving ops config', e);
  }

  if (showNotice) {
    const btn = document.getElementById(`plat-save-btn-${influencerId}`);
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i> ¡Configuración Guardada!';
      setTimeout(() => { btn.innerHTML = orig; }, 1800);
    }
  }
}

function copyPlatformsSummary(influencerId) {
  const data = influencersData[influencerId];
  const charName = data ? data.name : influencerId;
  const platforms = getInfluencerPlatforms(influencerId);
  const ops = getInfluencerOpsConfig(influencerId);

  // Map platform IDs to human-readable names
  const allNames = {};
  defaultPlatformCategories.forEach(cat => {
    cat.platforms.forEach(p => { allNames[p.id] = p.name; });
  });

  const readablePlatforms = platforms.map(id => {
    if (allNames[id]) return allNames[id];
    if (id.startsWith('custom_')) return id.replace('custom_', '').replace(/_/g, ' ');
    return id;
  });

  let text = `========================================\n`;
  text += `FICHA TÉCNICA DE PRODUCCIÓN & PLATAFORMAS\n`;
  text += `PERSONAJE: ${charName.toUpperCase()}\n`;
  text += `RESPONSABLE: ${ops.responsible || 'No asignado'}\n`;
  text += `ESTADO: ${ops.status || 'En producción'}\n`;
  text += `HANDLE / RED: ${ops.handle || 'N/A'}\n`;
  text += `CANAL VIP: ${ops.vipUrl || 'N/A'}\n`;
  text += `CADENCIA: ${ops.cadence || 'N/A'}\n`;
  text += `SCHEDULER: ${ops.scheduler || 'N/A'}\n`;
  text += `========================================\n\n`;
  text += `[PLATAFORMAS Y HERRAMIENTAS ACTIVAS]\n`;
  text += readablePlatforms.map(p => `• ${p}`).join('\n') + `\n\n`;
  text += `[FLUJO DE TRABAJO OPERATIVO (SOP)]\n`;
  text += (ops.sop || 'No definido aún') + `\n`;

  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById(`plat-copy-btn-${influencerId}`);
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i> ¡Ficha Copiada!';
      setTimeout(() => { btn.innerHTML = orig; }, 2000);
    }
  }).catch(() => {
    alert('Ficha de plataformas copiada al portapapeles');
  });
}

function renderPlatformsChips(influencerId) {
  const container = document.getElementById(`platform-categories-container-${influencerId}`);
  if (!container) return;

  const activePlatforms = getInfluencerPlatforms(influencerId);
  const customSlugs = activePlatforms.filter(id => id.startsWith('custom_'));

  let html = defaultPlatformCategories.map(cat => {
    const chipsHtml = cat.platforms.map(p => {
      const isActive = activePlatforms.includes(p.id);
      return `
        <span 
          class="platform-chip ${isActive ? 'active' : ''}" 
          id="plat-chip-${influencerId}-${p.id}"
          onclick="toggleInfluencerPlatform('${influencerId}', '${p.id}')"
        >
          <i class="fa-solid ${isActive ? 'fa-check-circle' : 'fa-circle-plus'}"></i>
          ${p.name}
        </span>
      `;
    }).join('');

    return `
      <div class="platform-cat-box">
        <div class="platform-cat-header">
          <div class="platform-cat-icon" style="background: ${cat.color}22; color: ${cat.color};">
            <i class="fa-solid ${cat.icon}"></i>
          </div>
          <span class="platform-cat-title">${cat.name}</span>
        </div>
        <div class="platform-chips-container">
          ${chipsHtml}
        </div>
      </div>
    `;
  }).join('');

  if (customSlugs.length > 0) {
    const customChipsHtml = customSlugs.map(slug => {
      const displayName = slug.replace('custom_', '').replace(/_/g, ' ');
      return `
        <span 
          class="platform-chip active" 
          id="plat-chip-${influencerId}-${slug}"
          onclick="toggleInfluencerPlatform('${influencerId}', '${slug}')"
        >
          <i class="fa-solid fa-check-circle"></i>
          ${displayName}
        </span>
      `;
    }).join('');

    html += `
      <div class="platform-cat-box" style="border-color: rgba(6, 182, 212, 0.4);">
        <div class="platform-cat-header">
          <div class="platform-cat-icon" style="background: rgba(6, 182, 212, 0.2); color: var(--cyan);">
            <i class="fa-solid fa-plus-circle"></i>
          </div>
          <span class="platform-cat-title">Herramientas Personalizadas</span>
        </div>
        <div class="platform-chips-container">
          ${customChipsHtml}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;

  const kpiEl = document.getElementById(`plat-kpi-${influencerId}`);
  if (kpiEl) {
    kpiEl.innerHTML = `<i class="fa-solid fa-layer-group"></i> ${activePlatforms.length} Plataformas Activas`;
  }
}

// --- VIEW MODE MANAGEMENT & COMMERCIAL INFLUENCER SHOWCASE ---
let currentInfluencerMode = 'product';

function setInfluencerViewMode(id, mode) {
  currentInfluencerMode = mode;
  if (mode === 'cockpit') {
    if (!isTeamAuthenticated()) {
      openAuthModal('influencer-cockpit:' + id);
      return;
    }
  }
  renderInfluencerPage(id, mode);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function requestCockpitAccess(id) {
  openAuthModal('influencer-cockpit:' + id);
}

// ROUTER DISPATCHER FOR INFLUENCER PAGE
function renderInfluencerPage(id, mode = 'product') {
  currentInfluencerMode = mode;
  if (mode === 'cockpit') {
    if (!isTeamAuthenticated()) {
      openAuthModal('influencer-cockpit:' + id);
      return;
    }
    renderInfluencerCockpit(id);
  } else {
    renderInfluencerPublicProduct(id);
  }
}

// 1. PUBLIC PRODUCT SHOWROOM (SHOWCASING IA QUALITY, CONSISTENCY, LORE & SERVICES)
function renderInfluencerPublicProduct(id) {
  const data = influencersData[id];
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  if (!data) {
    container.innerHTML = `<div style="padding: 4rem; text-align: center;"><h2>Influencer no encontrado</h2><a href="#roster" class="btn btn-primary">Volver al Catálogo</a></div>`;
    return;
  }

  const roi = data.roi || { defaultFollowers: 50000, defaultConversion: 1.5, defaultTicket: 14 };
  const authenticated = isTeamAuthenticated();

  container.innerHTML = `
    <div class="breadcrumb-bar" style="margin-bottom: 1.25rem;">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <a href="#roster">Catálogo de Influencers IA</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">${data.name}</span>
      </div>
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <a href="#roster" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Catálogo</a>
        ${authenticated ? `
          <div class="influencer-mode-toggle">
            <button class="mode-btn active" title="Ficha comercial visible para marcas y clientes"><i class="fa-solid fa-eye"></i> Ficha Producto</button>
            <button class="mode-btn" onclick="setInfluencerViewMode('${data.id}', 'cockpit')" title="Cockpit operativo privado de producción (SOP, Prompts y Briefing)"><i class="fa-solid fa-sliders"></i> Cockpit Operativo 🔒</button>
          </div>
        ` : `
          <button class="btn btn-secondary btn-sm" onclick="requestCockpitAccess('${data.id}')" style="font-size: 0.76rem; border-color: rgba(255,255,255,0.15); opacity: 0.75;" title="Área confidencial para miembros del equipo de Los Manejadores">
            <i class="fa-solid fa-lock"></i> Acceso Equipo
          </button>
        `}
      </div>
    </div>

    <div class="product-showcase-container">
      
      <!-- 1. Hero Showcase Banner -->
      <div class="product-hero-banner">
        <div class="product-badge-strip">
          <span class="product-pill product-pill-purple"><i class="fa-solid fa-gem"></i> Activo Digital Certificado</span>
          <span class="product-pill product-pill-cyan"><i class="fa-solid fa-fingerprint"></i> 100% Rostro Sintético IA</span>
          <span class="product-pill product-pill-green"><i class="fa-solid fa-shield-halved"></i> Libre de Derechos de Terceros</span>
        </div>
        <h1 class="product-title">${data.name}</h1>
        <div class="product-niche-lead"><i class="fa-solid fa-tag"></i> ${data.niche}</div>
        <p class="product-tagline">${data.tagline || data.bio}</p>

        <div class="product-hero-actions">
          <button class="btn btn-primary" onclick="openBrandInquiryModal('${data.id}')">
            <i class="fa-solid fa-handshake"></i> Solicitar Colaboración de Marca / Cotizar
          </button>
          <a href="#desarrollo" class="btn btn-secondary">
            <i class="fa-solid fa-microchip"></i> Conocer Nuestro Pipeline I+D
          </a>
          <button class="btn btn-secondary" onclick="alert('Conexión con pasarela VIP iniciada para ${data.name}')" style="border-color: rgba(236, 72, 153, 0.4);">
            <i class="fa-solid fa-star" style="color: var(--pink);"></i> Suscripción VIP ($${roi.defaultTicket}/mes)
          </button>
        </div>
      </div>

      <!-- 2. Two-Column Main Stage -->
      <div class="product-grid">

        <!-- LEFT COLUMN: Master Visual Portrait, Voice & Consistency Proof -->
        <div class="product-left-col">
          
          <!-- Master Portrait Card -->
          <div class="product-portrait-card">
            <img src="${data.avatar}" alt="${data.name}" class="product-portrait-img">
            <div class="product-portrait-overlay">
              <span class="product-portrait-badge">
                <i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Consistencia LoRA >98.8%
              </span>
              <span class="product-portrait-badge">
                <i class="fa-solid fa-camera" style="color: var(--cyan);"></i> Master 4K Ultra Fotorrealista
              </span>
            </div>
          </div>

          <!-- Official Voice Sample Component -->
          ${data.voice ? `
            <div class="cockpit-voice-box" id="voice-card-${data.id}" style="margin-bottom: 1.75rem;">
              <div class="voice-header" style="margin-bottom: 0.5rem;">
                <div class="voice-title" style="font-size: 0.88rem; font-weight: 600;">
                  <i class="fa-solid fa-microphone-lines" style="color: var(--cyan);"></i>
                  <span>Escuchar Voz Oficial del Personaje</span>
                </div>
                <span class="voice-badge" style="font-size: 0.68rem; padding: 0.2rem 0.5rem;">${data.voice.badge}</span>
              </div>
              <div class="voice-controls-row" style="margin-bottom: 0.6rem;">
                <button class="voice-play-btn" id="voice-btn-${data.id}" onclick="toggleVoicePlayback('${data.id}')" title="Reproducir voz" style="width: 36px; height: 36px; font-size: 0.85rem; flex-shrink: 0;">
                  <i class="fa-solid fa-play"></i>
                </button>
                <div class="voice-equalizer" style="height: 18px; gap: 2px;">
                  <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
                  <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
                  <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
                </div>
                <div class="voice-time-display" id="voice-time-${data.id}" style="font-size: 0.78rem;">0:00 / ${data.voice.duration}</div>
              </div>
              <div class="voice-transcript" style="font-size: 0.82rem; max-height: 80px; overflow-y: auto; line-height: 1.45; padding: 0.65rem 0.85rem; background: rgba(0,0,0,0.3); border-radius: var(--radius-sm); border: 1px solid var(--border-glass);">
                <i class="fa-solid fa-quote-left" style="color: var(--purple); margin-right: 0.35rem;"></i>
                ${data.voice.transcript}
              </div>
            </div>
          ` : ''}

          <!-- Consistency Lookbook Gallery -->
          ${data.gallery && data.gallery.length > 0 ? `
            <div class="product-lookbook-section">
              <h4 class="product-section-title">
                <i class="fa-solid fa-images" style="color: var(--cyan);"></i> Lookbook de Consistencia Fotográfica
              </h4>
              <p class="product-section-subtitle">
                Preservación facial idéntica en estudio, exteriores y situaciones dinámicas (haz clic para ampliar):
              </p>
              <div class="product-gallery-grid">
                ${data.gallery.map(g => `
                  <div class="product-gallery-thumb-card" onclick="openPhotoLightbox('${g.img}', '${g.label.replace(/'/g, "\\'")}', '${g.desc.replace(/'/g, "\\'")}')" title="${g.label}">
                    <img src="${g.img}" alt="${g.label}" loading="lazy">
                    <div class="product-gallery-thumb-label">${g.label}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Quality Guarantees Card (Positioning Los Manejadores) -->
          <div class="product-guarantees-card">
            <h4 class="product-section-title" style="margin-bottom: 1rem;">
              <i class="fa-solid fa-award" style="color: var(--purple);"></i> Estándar de Producción Los Manejadores
            </h4>
            
            <div class="guarantee-item">
              <div class="guarantee-icon"><i class="fa-solid fa-sparkles"></i></div>
              <div class="guarantee-text">
                <h5>Microtextura & Piel Orgánica</h5>
                <p>Poros, luminosidad natural y emulación óptica de lentes fotográficos (Leica / Hasselblad). Cero aspecto de dibujo o plástico.</p>
              </div>
            </div>

            <div class="guarantee-item">
              <div class="guarantee-icon"><i class="fa-solid fa-scale-balanced"></i></div>
              <div class="guarantee-text">
                <h5>Seguridad Jurídica 100%</h5>
                <p>Generados puramente mediante difusión matemática. Sin clonación de personas reales ni riesgos de litigio por derechos de imagen.</p>
              </div>
            </div>

            <div class="guarantee-item">
              <div class="guarantee-icon"><i class="fa-solid fa-bolt"></i></div>
              <div class="guarantee-text">
                <h5>Producción Ágil sin Rodajes</h5>
                <p>Entregas de campañas en 24 a 48 horas sin retrasos meteorológicos, agencias tradicionales de modelos ni costes de set.</p>
              </div>
            </div>

            <div class="guarantee-item">
              <div class="guarantee-icon"><i class="fa-solid fa-language"></i></div>
              <div class="guarantee-text">
                <h5>Multilingüe & LipSync Nativo</h5>
                <p>Capacidad de hablar español regional, inglés y otros idiomas con inflexión perfecta y sincronización labial para video.</p>
              </div>
            </div>
          </div>

        </div>

        <!-- RIGHT COLUMN: Story Lore, Audience, Posts & Brand Services -->
        <div class="product-right-col">
          
          <!-- Story & Narrative Lore Card -->
          <div class="product-lore-card">
            <h3 style="font-family: var(--font-heading); font-size: 1.35rem; color: #fff; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-book-open" style="color: var(--purple);"></i> Historia & Universo Narrativo
            </h3>
            <p class="product-lore-text">
              ${data.story || data.bio}
            </p>
            <div style="padding: 0.85rem 1.15rem; background: rgba(139, 92, 246, 0.08); border-left: 3px solid var(--purple); border-radius: 4px; font-style: italic; color: #e2e8f0; font-size: 0.92rem; line-height: 1.55;">
              "${data.bio}"
            </div>
          </div>

          <!-- Demographic Specs Grid -->
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; color: #fff; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-users" style="color: var(--cyan);"></i> Perfil de Audiencia & Alcance
          </h3>
          <div class="product-specs-grid">
            <div class="product-spec-box">
              <div class="product-spec-lbl"><i class="fa-solid fa-masks-theater"></i> Arquetipo Psicológico</div>
              <div class="product-spec-val">${data.archetype}</div>
            </div>
            <div class="product-spec-box">
              <div class="product-spec-lbl"><i class="fa-solid fa-bullseye"></i> Audiencia Objetivo</div>
              <div class="product-spec-val">${data.targetAudience}</div>
            </div>
            <div class="product-spec-box">
              <div class="product-spec-lbl"><i class="fa-solid fa-share-nodes"></i> Canales de Difusión</div>
              <div class="product-spec-val">${data.channels}</div>
            </div>
            <div class="product-spec-box">
              <div class="product-spec-lbl"><i class="fa-solid fa-earth-americas"></i> Mercados Clave</div>
              <div class="product-spec-val">${data.keyMarkets || 'Hispanoamérica & Mercado Global'}</div>
            </div>
          </div>

          <!-- Social Media Content Mockup -->
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; color: #fff; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-hashtag" style="color: var(--pink);"></i> Muestra de Contenido & Engagement
          </h3>
          <div style="margin-bottom: 2rem;">
            ${data.posts && data.posts.length > 0 ? data.posts.map(post => `
              <div class="social-mockup-card" style="margin-bottom: 1rem;">
                <div class="social-header">
                  <img src="${data.avatar}" alt="${data.name}" class="social-avatar">
                  <div class="social-author-info">
                    <span class="social-author-name">${data.name} <i class="fa-solid fa-circle-check" style="color: var(--cyan);"></i></span>
                    <span class="social-handle">@${data.id}.official • ${post.platform}</span>
                  </div>
                </div>
                <div class="social-caption">${post.caption}</div>
                <div class="social-stats">
                  <span><i class="fa-regular fa-heart" style="color: var(--pink);"></i> ${post.likes} Me gusta</span>
                  <span><i class="fa-regular fa-comment" style="color: var(--cyan);"></i> ${post.comments} Comentarios</span>
                  <span><i class="fa-regular fa-clock"></i> ${post.date}</span>
                </div>
              </div>
            `).join('') : '<p style="color: var(--text-muted);">Sin publicaciones de muestra registradas.</p>'}
          </div>

          <!-- Commercial Services for Brands -->
          <h3 style="font-family: var(--font-heading); font-size: 1.25rem; color: #fff; margin-bottom: 0.85rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-briefcase" style="color: #10b981;"></i> Oportunidades Comerciales para Marcas
          </h3>
          <div class="product-services-grid">
            <div class="product-service-item">
              <div class="service-item-icon"><i class="fa-solid fa-camera-retro"></i></div>
              <h4 class="service-item-title">Patrocinio & Product Placement</h4>
              <p class="service-item-desc">Integración nativa y verosímil de tus productos en publicaciones de feed, reels o historias de su rutina diaria.</p>
            </div>

            <div class="product-service-item">
              <div class="service-item-icon" style="color: #f59e0b;"><i class="fa-solid fa-crown"></i></div>
              <h4 class="service-item-title">Embajadora Virtual de Marca</h4>
              <p class="service-item-desc">Acuerdos de 3 a 12 meses como rostro oficial digital de tu empresa en eventos, lanzamientos y medios online.</p>
            </div>

            <div class="product-service-item">
              <div class="service-item-icon" style="color: var(--pink);"><i class="fa-solid fa-play"></i></div>
              <h4 class="service-item-title">Creatividades UGC para Ads</h4>
              <p class="service-item-desc">Videos cortos verticales con ganchos psicológicos validados para optimizar el coste por adquisición en Meta y TikTok Ads.</p>
            </div>

            <div class="product-service-item">
              <div class="service-item-icon" style="color: var(--purple);"><i class="fa-solid fa-key"></i></div>
              <h4 class="service-item-title">Licenciamiento Exclusivo</h4>
              <p class="service-item-desc">Derechos de explotación exclusivos para tu sector o territorio, o adquisición del activo con entrega de LoRAs y prompts.</p>
            </div>
          </div>

          <!-- CTA Conversion Box -->
          <div class="product-cta-card">
            <h4 style="font-family: var(--font-heading); font-size: 1.35rem; color: #fff; margin-bottom: 0.45rem;">
              ¿Quieres a ${data.name} como imagen de tu marca?
            </h4>
            <p style="color: var(--text-muted); font-size: 0.88rem; max-width: 520px; margin: 0 auto 1.25rem auto;">
              Diseñamos una propuesta personalizada con cronograma y tarifas de producción en menos de 24 horas.
            </p>
            <button class="btn btn-primary" onclick="openBrandInquiryModal('${data.id}')" style="padding: 0.75rem 2rem; font-size: 1rem;">
              <i class="fa-solid fa-envelope-open-text"></i> Solicitar Propuesta Comercial & Tarifas
            </button>
          </div>

        </div>

      </div>

    </div>
  `;
}

// 2. MODAL & LIGHTBOX HANDLERS
function openBrandInquiryModal(influencerId) {
  const modal = document.getElementById('brand-inquiry-modal');
  const inf = influencersData[influencerId];
  const nameEl = document.getElementById('inquiry-influencer-name');
  const idEl = document.getElementById('inquiry-influencer-id');
  if (nameEl) nameEl.textContent = inf ? `${inf.name} (${inf.niche})` : 'Influencer IA';
  if (idEl) idEl.value = influencerId || '';
  if (modal) modal.classList.add('active');
}

function closeBrandInquiryModal() {
  const modal = document.getElementById('brand-inquiry-modal');
  if (modal) modal.classList.remove('active');
}

function handleBrandInquirySubmit(e) {
  e.preventDefault();
  const id = document.getElementById('inquiry-influencer-id')?.value || 'elena';
  const inf = influencersData[id] || { name: 'Influencer' };
  const name = document.getElementById('inquiry-name')?.value || '';
  const company = document.getElementById('inquiry-company')?.value || '';
  const email = document.getElementById('inquiry-email')?.value || '';
  const service = document.getElementById('inquiry-service')?.value || '';
  const message = document.getElementById('inquiry-message')?.value || '';

  const subject = encodeURIComponent(`Solicitud Comercial: ${inf.name} - ${company}`);
  const body = encodeURIComponent(
    `Hola equipo de Los Manejadores,\n\n` +
    `Estoy interesado en una colaboración comercial para ${inf.name}.\n\n` +
    `Nombre: ${name}\n` +
    `Empresa: ${company}\n` +
    `Email: ${email}\n` +
    `Servicio de interés: ${service}\n` +
    `Mensaje / Objetivos:\n${message}\n\n` +
    `Quedo atento a su respuesta y propuesta.`
  );

  closeBrandInquiryModal();
  alert(`¡Gracias ${name}! Tu solicitud para colaborar con ${inf.name} ha sido recibida. Te abrimos el cliente de correo para enviar los detalles directamente a contacto@losmanejadores.com.`);
  window.location.href = `mailto:contacto@losmanejadores.com?subject=${subject}&body=${body}`;
}

function openPhotoLightbox(imgUrl, title, desc) {
  const modal = document.getElementById('photo-lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  if (img) img.src = imgUrl;
  if (titleEl) titleEl.textContent = title || 'Fotografía de Consistencia Master';
  if (descEl) descEl.textContent = desc || '';
  if (modal) modal.classList.add('active');
}

function closePhotoLightbox() {
  const modal = document.getElementById('photo-lightbox-modal');
  if (modal) modal.classList.remove('active');
}

// 3. PRIVATE COCKPIT FOR INTERNAL TEAM (PRESERVING 5 OPERATIONAL TABS)
function renderInfluencerCockpit(id) {
  const data = influencersData[id];
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  if (!data) {
    container.innerHTML = `<div style="padding: 4rem; text-align: center;"><h2>Influencer no encontrado</h2><a href="#roster" class="btn btn-primary">Volver al Catálogo</a></div>`;
    return;
  }

  const roi = data.roi || { defaultFollowers: 50000, defaultConversion: 1.5, defaultTicket: 14 };
  const opsConfig = getInfluencerOpsConfig(id);

  container.innerHTML = `
    <div class="breadcrumb-bar" style="margin-bottom: 1.25rem;">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <a href="#roster">Catálogo de Influencers IA</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">${data.name} (Cockpit de Producción)</span>
      </div>
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <div class="influencer-mode-toggle">
          <button class="mode-btn" onclick="setInfluencerViewMode('${data.id}', 'product')" title="Ver Ficha Comercial Pública de Producto"><i class="fa-solid fa-eye"></i> Ficha Producto</button>
          <button class="mode-btn active" title="Cockpit operativo privado de producción (SOP, Prompts y Briefing)"><i class="fa-solid fa-sliders"></i> Cockpit Operativo 🔒</button>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="showTeamView('influencer-ops')">
          <i class="fa-solid fa-table-list"></i> Matriz Operativa
        </button>
      </div>
    </div>

    <!-- Production Cockpit Layout -->
    <div class="cockpit-container">
      <!-- Left Rail: Identity, Specs, Voice & LoRA Consistency -->
      <aside class="cockpit-sidebar">
        <div class="cockpit-profile-card">
          <div class="cockpit-profile-header">
            <img src="${data.avatar}" alt="${data.name}" class="cockpit-avatar">
            <div class="cockpit-name-group">
              <span class="detail-badge" style="font-size: 0.68rem; padding: 0.2rem 0.5rem; display: inline-block; margin-bottom: 0.35rem;">${data.badge}</span>
              <h2 class="cockpit-name">${data.name}</h2>
              <div class="cockpit-niche"><i class="fa-solid fa-tag"></i> ${data.niche}</div>
            </div>
          </div>
          
          <p class="cockpit-bio">${data.bio}</p>

          <button class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 0.82rem; padding: 0.55rem 0.8rem; margin-bottom: 1rem;" onclick="alert('Conexión con pasarela Fanvue VIP iniciada para ${data.name}')">
            <i class="fa-solid fa-star"></i> Suscribirse VIP ($${roi.defaultTicket}/mes)
          </button>

          <div class="cockpit-spec-list">
            <div class="cockpit-spec-item">
              <div class="cockpit-spec-label"><i class="fa-solid fa-masks-theater"></i> Arquetipo</div>
              <div class="cockpit-spec-value">${data.archetype}</div>
            </div>
            <div class="cockpit-spec-item">
              <div class="cockpit-spec-label"><i class="fa-solid fa-microchip"></i> Stack IA</div>
              <div class="cockpit-spec-value">${data.techStack}</div>
            </div>
            <div class="cockpit-spec-item">
              <div class="cockpit-spec-label"><i class="fa-solid fa-share-nodes"></i> Canales</div>
              <div class="cockpit-spec-value">${data.channels}</div>
            </div>
            <div class="cockpit-spec-item">
              <div class="cockpit-spec-label"><i class="fa-solid fa-users"></i> Audiencia</div>
              <div class="cockpit-spec-value">${data.targetAudience}</div>
            </div>
          </div>
        </div>

        <!-- Voice Player Mini Component -->
        ${data.voice ? `
          <div class="cockpit-voice-box" id="voice-card-${data.id}">
            <div class="voice-header" style="margin-bottom: 0.45rem;">
              <div class="voice-title" style="font-size: 0.82rem;">
                <i class="fa-solid fa-microphone-lines" style="color: var(--cyan);"></i>
                <span>${data.voice.title}</span>
              </div>
              <span class="voice-badge" style="font-size: 0.65rem; padding: 0.15rem 0.4rem;">${data.voice.badge}</span>
            </div>
            <div class="voice-controls-row" style="margin-bottom: 0.45rem;">
              <button class="voice-play-btn" id="voice-btn-${data.id}" onclick="toggleVoicePlayback('${data.id}')" title="Reproducir voz" style="width: 32px; height: 32px; font-size: 0.8rem; flex-shrink: 0;">
                <i class="fa-solid fa-play"></i>
              </button>
              <div class="voice-equalizer" style="height: 16px; gap: 2px;">
                <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
                <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
                <div class="eq-bar"></div><div class="eq-bar"></div><div class="eq-bar"></div>
              </div>
              <div class="voice-time-display" id="voice-time-${data.id}" style="font-size: 0.72rem;">0:00 / ${data.voice.duration}</div>
            </div>
            <div class="voice-transcript" style="font-size: 0.78rem; max-height: 65px; overflow-y: auto; line-height: 1.35; padding: 0.5rem; background: rgba(0,0,0,0.25); border-radius: var(--radius-sm);">
              <i class="fa-solid fa-quote-left" style="color: var(--purple); margin-right: 0.35rem;"></i>
              ${data.voice.transcript}
            </div>
          </div>
        ` : ''}

        <!-- LoRA Master Facial Consistency Gallery -->
        ${data.gallery && data.gallery.length > 0 ? `
          <div class="cockpit-lora-strip">
            <div class="cockpit-lora-header">
              <span class="cockpit-lora-title"><i class="fa-solid fa-id-card-clip" style="color: var(--purple);"></i> Consistencia LoRA</span>
              <span class="cockpit-lora-tag">4K Master</span>
            </div>
            <div class="cockpit-lora-grid">
              ${data.gallery.map(g => `
                <img src="${g.img}" alt="${g.label}" title="${g.label} - ${g.tag}" class="cockpit-lora-thumb" onclick="alert('${g.label}: ${g.desc.replace(/'/g, "\\'")}')" loading="lazy">
              `).join('')}
            </div>
          </div>
        ` : ''}
      </aside>

      <!-- Right Main Stage: Immediate Production Tabs & Workspaces -->
      <main class="cockpit-main-stage">
        <div class="cockpit-tab-bar">
          <button id="tab-btn-platforms" class="tab-btn cockpit-tab-btn active" onclick="switchTab(this, 'tab-platforms')">
            <i class="fa-solid fa-layer-group"></i> Plataformas & SOP
          </button>
          <button id="tab-btn-tech" class="tab-btn cockpit-tab-btn" onclick="switchTab(this, 'tab-technical')">
            <i class="fa-solid fa-code"></i> Prompts por Escena
          </button>
          <button id="tab-btn-calib" class="tab-btn cockpit-tab-btn" onclick="switchTab(this, 'tab-calibration')">
            <i class="fa-solid fa-clipboard-question"></i> Briefing & Preguntas (0/6)
          </button>
          <button id="tab-btn-funnel" class="tab-btn cockpit-tab-btn" onclick="switchTab(this, 'tab-funnel')">
            <i class="fa-solid fa-filter-circle-dollar"></i> Embudo & ROI
          </button>
          <button id="tab-btn-posts" class="tab-btn cockpit-tab-btn" onclick="switchTab(this, 'tab-posts')">
            <i class="fa-solid fa-image"></i> Publicaciones
          </button>
        </div>

        <!-- Tab 1: Posts Mockup (Non-active by default in cockpit) -->
        <div id="tab-posts" class="tab-pane">
        <h3 style="font-family: var(--font-heading); margin-bottom: 1.5rem; font-size: 1.4rem;">Muestra de Contenido en Redes Sociales</h3>
        ${data.posts.map(post => `
          <div class="social-mockup-card">
            <div class="social-header">
              <img src="${data.avatar}" alt="${data.name}" class="social-avatar">
              <div class="social-author-info">
                <span class="social-author-name">${data.name} <i class="fa-solid fa-circle-check" style="color: var(--cyan);"></i></span>
                <span class="social-handle">@${data.id}.official • ${post.platform}</span>
              </div>
            </div>
            <div class="social-caption">${post.caption}</div>
            <div class="social-stats">
              <span><i class="fa-regular fa-heart" style="color: var(--pink);"></i> ${post.likes} Me gusta</span>
              <span><i class="fa-regular fa-comment" style="color: var(--cyan);"></i> ${post.comments} Comentarios</span>
              <span><i class="fa-regular fa-clock"></i> ${post.date}</span>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Tab 2: Funnel & Interactive ROI Calculator -->
      <div id="tab-funnel" class="tab-pane">
        <h3 style="font-family: var(--font-heading); margin-bottom: 1.5rem; font-size: 1.4rem;">Estrategia de Conversión de 3 Niveles</h3>
        <div style="display: grid; gap: 1.25rem; margin-bottom: 2.5rem;">
          ${data.monetizationFunnel.map(f => `
            <div class="glass-card" style="display: flex; gap: 1.5rem; align-items: center;">
              <div style="background: rgba(139, 92, 246, 0.15); color: var(--purple); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
                <i class="fa-solid fa-arrow-down-short-wide"></i>
              </div>
              <div>
                <h4 style="color: #fff; font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 0.25rem;">${f.step}</h4>
                <p style="color: var(--text-muted); font-size: 0.95rem;">${f.detail}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Interactive ROI Calculator Card -->
        <div class="roi-calculator-card">
          <div class="calc-header">
            <div>
              <h4 class="calc-title"><i class="fa-solid fa-calculator" style="color: var(--cyan);"></i> Simulador de Ingresos Proyectados (ROI)</h4>
              <p class="calc-desc">Calcula el rendimiento financiero mensual y anual para ${data.name} según el tráfico y la conversión del embudo.</p>
            </div>
            <div class="calc-presets">
              <button class="calc-preset-btn preset-btn-${data.id}" id="btn-preset-${data.id}-conservative" onclick="setRoiPreset('${data.id}', 'conservative')">Conservador</button>
              <button class="calc-preset-btn preset-btn-${data.id} active" id="btn-preset-${data.id}-moderate" onclick="setRoiPreset('${data.id}', 'moderate')">Moderado</button>
              <button class="calc-preset-btn preset-btn-${data.id}" id="btn-preset-${data.id}-aggressive" onclick="setRoiPreset('${data.id}', 'aggressive')">Viral / Agresivo</button>
            </div>
          </div>

          <div class="calc-body-grid">
            <div class="calc-controls">
              <div class="slider-group">
                <div class="slider-label-row">
                  <span class="slider-name">Seguidores Orgánicos (Tráfico)</span>
                  <span class="slider-val-badge" id="val-followers-${data.id}">${roi.defaultFollowers.toLocaleString()} seguidores</span>
                </div>
                <input type="range" class="custom-slider" id="roi-followers-${data.id}" min="10000" max="500000" step="5000" value="${roi.defaultFollowers}" oninput="updateInfluencerRoi('${data.id}')">
              </div>

              <div class="slider-group">
                <div class="slider-label-row">
                  <span class="slider-name">Tasa de Conversión a Embudo VIP</span>
                  <span class="slider-val-badge" id="val-conv-${data.id}">${roi.defaultConversion}%</span>
                </div>
                <input type="range" class="custom-slider" id="roi-conv-${data.id}" min="0.5" max="5.0" step="0.1" value="${roi.defaultConversion}" oninput="updateInfluencerRoi('${data.id}')">
              </div>

              <div class="slider-group">
                <div class="slider-label-row">
                  <span class="slider-name">Suscripción Promedio (Ticket Mensual)</span>
                  <span class="slider-val-badge" id="val-ticket-${data.id}">$${roi.defaultTicket} USD/mes</span>
                </div>
                <input type="range" class="custom-slider" id="roi-ticket-${data.id}" min="5" max="50" step="1" value="${roi.defaultTicket}" oninput="updateInfluencerRoi('${data.id}')">
              </div>
            </div>

            <div class="calc-results-card">
              <div class="calc-kpi-subscribers">Audiencia de Pago Proyectada</div>
              <div class="calc-kpi-subs-count" id="res-subs-${data.id}">-- suscriptores VIP</div>

              <div class="calc-revenue-row">
                <div class="calc-rev-box">
                  <h5>Ingreso Mensual (MRR)</h5>
                  <div class="calc-rev-val" id="res-mrr-${data.id}">$-- USD</div>
                </div>
                <div class="calc-rev-box">
                  <h5>Ingreso Anual (ARR)</h5>
                  <div class="calc-rev-val annual" id="res-arr-${data.id}">$-- USD</div>
                </div>
              </div>

              <div class="calc-split-box">
                <div class="calc-split-item">
                  Agencia (70%): <strong id="res-agency-${data.id}">$--</strong>
                </div>
                <div class="calc-split-item">
                  Fondo Talento (30%): <strong id="res-talent-${data.id}">$--</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Tab 3: Technical Prompts by Scene -->
      <div id="tab-technical" class="tab-pane">
        <h3 style="font-family: var(--font-heading); margin-bottom: 1rem; font-size: 1.4rem;">Copiador de Prompts por Escena de Producción</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
          Selecciona el tipo de toma para obtener el prompt de consistencia calibrado para ${data.name}:
        </p>

        ${data.promptScenes ? `
          <div class="scene-switcher-nav">
            ${Object.keys(data.promptScenes).map((key, idx) => `
              <button class="scene-btn scene-btn-${data.id} ${idx === 0 ? 'active' : ''}" id="scene-btn-${data.id}-${key}" onclick="selectPromptScene('${data.id}', '${key}')">
                ${data.promptScenes[key].label}
              </button>
            `).join('')}
          </div>

          <div class="prompt-copy-wrapper">
            <div class="prompt-box-rich" id="prompt-display-${data.id}">
              ${data.promptScenes.casual ? data.promptScenes.casual.text : ''}
            </div>

            <div class="prompt-actions-bar">
              <div class="prompt-tag-list" id="prompt-tags-${data.id}">
                ${(data.promptScenes.casual && data.promptScenes.casual.tags) ? data.promptScenes.casual.tags.map(t => `<span class="prompt-tag">${t}</span>`).join('') : ''}
              </div>

              <button class="btn btn-secondary" id="copy-scene-btn-${data.id}" onclick="copyScenePrompt('${data.id}')">
                <i class="fa-regular fa-copy"></i> Copiar Prompt de Escena
              </button>
            </div>
          </div>
        ` : `
          <div class="copy-box" id="prompt-${data.id}">${data.prompts || 'Prompt no disponible'}</div>
          <button onclick="copyToClipboard('prompt-${data.id}')" class="btn btn-secondary"><i class="fa-regular fa-copy"></i> Copiar Prompt</button>
        `}

        <div style="margin-top: 2rem; padding: 1.25rem; background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.25); border-radius: var(--radius-md);">
          <h5 style="color: #fff; margin-bottom: 0.5rem;"><i class="fa-solid fa-circle-info" style="color: var(--cyan);"></i> Regla de Producción para Consistencia Facial</h5>
          <p style="color: var(--text-muted); font-size: 0.88rem; margin: 0; line-height: 1.5;">
            Siempre incluir los tags de iluminación volumétrica y lentes focales fijos (35mm para candid/selfie, 85mm f/1.8 para retrato editorial). Ajustar el peso del LoRA entre <strong>0.75 y 0.88</strong> para evitar artefactos en expresiones complejas.
          </p>
        </div>
      </div>

      <!-- Tab 4: Calibration & Operational Briefing Questions -->
      <div id="tab-calibration" class="tab-pane">
        <div class="briefing-card">
          <div class="briefing-header">
            <div>
              <h3 class="briefing-title">
                <i class="fa-solid fa-clipboard-check" style="color: var(--cyan);"></i>
                Preguntas de Calibración & Uso Operativo
              </h3>
              <p style="color: var(--text-muted); font-size: 0.85rem; margin: 0.25rem 0 0 0;">
                Completa cada pregunta paso a paso para definir la personalidad, producción visual y estrategia de <strong>${data.name}</strong> antes de lanzar contenido.
              </p>
            </div>
            <div class="briefing-progress">
              <div class="briefing-progress-bar-bg">
                <div class="briefing-progress-bar-fill" id="calib-fill-${data.id}"></div>
              </div>
              <span class="briefing-progress-text" id="calib-prog-text-${data.id}">0/6 Listas (0%)</span>
            </div>
          </div>

          <!-- Question Items List -->
          <div class="questions-list">
            ${defaultCalibrationQuestions.map(q => {
              const currentAns = getCalibrationAnswer(data.id, q.id);
              const isDone = currentAns.trim().length > 0;
              return `
                <div class="question-item ${isDone ? 'answered' : ''}" id="calib-item-${data.id}-${q.id}">
                  <div class="question-item-header" onclick="toggleQuestionBody('${data.id}', '${q.id}')">
                    <div class="question-title-group">
                      <span class="question-number-badge">${q.title.charAt(0)}</span>
                      <span class="question-text">${q.title}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <span class="question-status-badge ${isDone ? 'done' : 'pending'}" id="calib-badge-${data.id}-${q.id}">
                        ${isDone ? '<i class="fa-solid fa-check"></i> Respondida' : '<i class="fa-regular fa-clock"></i> Pendiente'}
                      </span>
                      <i class="fa-solid fa-chevron-up" id="calib-icon-${data.id}-${q.id}" style="font-size: 0.75rem; color: var(--text-muted);"></i>
                    </div>
                  </div>
                  <div class="question-body" id="calib-body-${data.id}-${q.id}">
                    <div class="question-guide-tip">
                      <i class="fa-solid fa-lightbulb" style="color: #f59e0b; margin-right: 0.35rem;"></i>
                      ${q.guide}
                    </div>
                    <textarea 
                      class="question-input" 
                      id="calib-input-${data.id}-${q.id}" 
                      placeholder="${q.placeholder}"
                      rows="3"
                      oninput="saveCalibrationAnswer('${data.id}', '${q.id}', true)"
                    >${currentAns}</textarea>
                    <div class="question-actions-row">
                      <button class="question-save-btn" id="calib-btn-${data.id}-${q.id}" onclick="saveCalibrationAnswer('${data.id}', '${q.id}', false)">
                        <i class="fa-regular fa-floppy-disk"></i> Guardar
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Briefing Action Buttons -->
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-glass);">
            <button class="btn btn-secondary" id="copy-briefing-btn-${data.id}" onclick="copyConsolidatedBriefing('${data.id}')">
              <i class="fa-solid fa-copy"></i> Copiar Briefing Consolidado (Markdown)
            </button>
            <button class="btn" onclick="resetCalibrationQuestions('${data.id}')" style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444; font-size: 0.8rem; padding: 0.45rem 0.85rem; cursor: pointer;">
              <i class="fa-solid fa-trash-can"></i> Restablecer Respuestas
            </button>
          </div>
        </div>
      </div>

      <!-- Tab 5: Gestión de Contenidos & Plataformas (Active by default in cockpit) -->
      <div id="tab-platforms" class="tab-pane active">
        <div class="platform-manager-card">
          <div class="platform-manager-header">
            <div>
              <h3 class="platform-manager-title">
                <i class="fa-solid fa-layer-group" style="color: var(--cyan); margin-right: 0.5rem;"></i>
                Stack de Plataformas & Elaboración de Contenidos
              </h3>
              <p class="platform-manager-subtitle">
                Configura las herramientas de IA generativa, animación, voz, postproducción y plataformas de publicación/monetización utilizadas en la producción de <strong>${data.name}</strong>.
              </p>
            </div>
            <div class="platform-kpi-badge" id="plat-kpi-${data.id}">
              <i class="fa-solid fa-layer-group"></i> Calculando...
            </div>
          </div>

          <!-- Interactive Categories & Chips Grid -->
          <div class="platform-categories-grid" id="platform-categories-container-${data.id}">
            <!-- Injected by renderPlatformsChips() -->
          </div>

          <!-- Add Custom Platform Bar -->
          <div style="background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.15); border-radius: var(--radius-sm); padding: 0.85rem 1.15rem; display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <i class="fa-solid fa-plus" style="color: var(--cyan);"></i>
            <span style="font-size: 0.82rem; color: var(--text-muted); font-weight: 500;">¿Usas otra herramienta o software en su pipeline?</span>
            <input 
              type="text" 
              id="new-platform-input-${data.id}" 
              placeholder="Ej: Magnific AI, Captions App, Suno v4, Discord Bot..." 
              style="flex: 1; min-width: 220px; background: rgba(0,0,0,0.4); border: 1px solid var(--border-glass); border-radius: 6px; padding: 0.45rem 0.75rem; color: #fff; font-size: 0.82rem; outline: none;"
              onkeydown="if(event.key === 'Enter') addCustomPlatform('${data.id}')"
            />
            <button class="btn btn-secondary btn-sm" onclick="addCustomPlatform('${data.id}')" style="padding: 0.45rem 0.9rem; font-size: 0.8rem;">
              <i class="fa-solid fa-plus"></i> Agregar Herramienta
            </button>
          </div>

          <!-- Operational Parameters Form Grid -->
          <h4 style="font-family: var(--font-heading); color: #fff; font-size: 1.1rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-sliders" style="color: var(--purple);"></i>
            Parámetros Operativos & Canales de Publicación
          </h4>

          <div class="platform-form-grid">
            <div class="platform-field-group">
              <label class="platform-field-label">
                <i class="fa-solid fa-at" style="color: var(--cyan);"></i> Handle Oficial / Usuario
              </label>
              <input 
                type="text" 
                class="platform-field-input" 
                id="plat-handle-${data.id}" 
                value="${opsConfig.handle || ''}" 
                placeholder="@usuario.oficial"
                onchange="saveInfluencerOpsConfig('${data.id}', false)"
              />
            </div>

            <div class="platform-field-group">
              <label class="platform-field-label">
                <i class="fa-solid fa-link" style="color: #ec4899;"></i> Enlace Canal VIP (Fanvue / Patreon)
              </label>
              <input 
                type="text" 
                class="platform-field-input" 
                id="plat-vip-${data.id}" 
                value="${opsConfig.vipUrl || ''}" 
                placeholder="https://fanvue.com/..."
                onchange="saveInfluencerOpsConfig('${data.id}', false)"
              />
            </div>

            <div class="platform-field-group">
              <label class="platform-field-label">
                <i class="fa-regular fa-calendar-check" style="color: #10b981;"></i> Cadencia de Publicación
              </label>
              <input 
                type="text" 
                class="platform-field-input" 
                id="plat-cadence-${data.id}" 
                value="${opsConfig.cadence || ''}" 
                placeholder="Ej: 3 reels/sem + 1 photoshoot"
                onchange="saveInfluencerOpsConfig('${data.id}', false)"
              />
            </div>

            <div class="platform-field-group">
              <label class="platform-field-label">
                <i class="fa-solid fa-clock-rotate-left" style="color: #f59e0b;"></i> Herramienta Scheduler / Envío
              </label>
              <input 
                type="text" 
                class="platform-field-input" 
                id="plat-scheduler-${data.id}" 
                value="${opsConfig.scheduler || ''}" 
                placeholder="Ej: Metricool (Auto-pilot 18:00 CET)"
                onchange="saveInfluencerOpsConfig('${data.id}', false)"
              />
            </div>

            <div class="platform-field-group">
              <label class="platform-field-label">
                <i class="fa-solid fa-user-gear" style="color: var(--purple);"></i> Miembro Responsable del Pipeline
              </label>
              <input 
                type="text" 
                class="platform-field-input" 
                id="plat-resp-${data.id}" 
                value="${opsConfig.responsible || ''}" 
                placeholder="Ej: Daniel / Pancho / Wladimir"
                onchange="saveInfluencerOpsConfig('${data.id}', false)"
              />
            </div>

            <div class="platform-field-group">
              <label class="platform-field-label">
                <i class="fa-solid fa-traffic-light" style="color: var(--cyan);"></i> Estado de Producción
              </label>
              <select 
                class="platform-field-select" 
                id="plat-status-${data.id}" 
                onchange="saveInfluencerOpsConfig('${data.id}', false)"
              >
                <option value="Activo / Producción Live" ${opsConfig.status === 'Activo / Producción Live' ? 'selected' : ''}>🟢 Activo / Producción Live</option>
                <option value="Fase de Calibración & Testing" ${opsConfig.status === 'Fase de Calibración & Testing' ? 'selected' : ''}>🟡 Fase de Calibración & Testing</option>
                <option value="Validado / Rentable" ${opsConfig.status === 'Validado / Rentable' ? 'selected' : ''}>💎 Validado / Rentable</option>
                <option value="En Concepto (Q2)" ${opsConfig.status === 'En Concepto (Q2)' ? 'selected' : ''}>⚪ En Concepto (Q2)</option>
                <option value="Pausado Temporalmente" ${opsConfig.status === 'Pausado Temporalmente' ? 'selected' : ''}>🔴 Pausado Temporalmente</option>
              </select>
            </div>
          </div>

          <!-- SOP Workflow Card -->
          <div class="platform-sop-card">
            <div class="platform-sop-title">
              <i class="fa-solid fa-clipboard-list" style="color: var(--cyan);"></i>
              Flujo de Trabajo Operativo (SOP Paso a Paso)
            </div>
            <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.75rem;">
              Protocolo estándar de producción para generar un paquete de contenido de inicio a fin:
            </p>
            <textarea 
              class="platform-sop-textarea" 
              id="plat-sop-${data.id}" 
              placeholder="1. Prompt visual...\n2. Generación de voz...\n3. Animación...\n4. Edición..."
              oninput="saveInfluencerOpsConfig('${data.id}', false)"
            >${opsConfig.sop || ''}</textarea>
          </div>

          <!-- Action Footer Buttons -->
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-glass);">
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <button class="btn btn-primary" id="plat-save-btn-${data.id}" onclick="saveInfluencerOpsConfig('${data.id}', true)">
                <i class="fa-solid fa-floppy-disk"></i> Guardar Configuración Operativa
              </button>
              <button class="btn btn-secondary" id="plat-copy-btn-${data.id}" onclick="copyPlatformsSummary('${data.id}')">
                <i class="fa-solid fa-copy"></i> Copiar Ficha de Plataformas (Markdown)
              </button>
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">
              <i class="fa-solid fa-shield-halved" style="color: #10b981;"></i> Configuración guardada en navegador
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  `;

  // Initialize ROI, Scene Prompts, Calibration Progress and Platform Chips
  setTimeout(() => {
    updateInfluencerRoi(id);
    selectPromptScene(id, 'casual');
    updateCalibrationProgress(id);
    renderPlatformsChips(id);
  }, 30);
}

// RENDER: CHANNEL PAGE
function renderChannelPage(id) {
  const data = channelsData[id];
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  if (!data) {
    container.innerHTML = `<div style="padding: 4rem; text-align: center;"><h2>Canal no encontrado</h2><a href="#youtube" class="btn btn-primary">Volver al Catálogo</a></div>`;
    return;
  }

  container.innerHTML = `
    <div class="breadcrumb-bar">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <a href="#youtube">Canales YouTube</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">${data.title}</span>
      </div>
      <a href="#youtube" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Volver a Canales</a>
    </div>

    <!-- Channel Header with 16:9 Master Thumbnail Banner -->
    <div class="channel-hero-card" style="margin-bottom: 2rem; border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-glass); background: #0c0f1d; position: relative;">
      <div style="position: relative; width: 100%; aspect-ratio: 16 / 9; max-height: 440px; overflow: hidden; background: #080a14;">
        <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.95);" />
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(12,15,29,0.95) 0%, rgba(12,15,29,0.3) 50%, transparent 100%);"></div>
        <div style="position: absolute; bottom: 1.5rem; left: 1.5rem; right: 1.5rem; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="detail-badge" style="background: rgba(6,182,212,0.25); border-color: var(--cyan); color: var(--cyan); margin-bottom: 0.5rem; display: inline-flex; align-items: center; gap: 0.4rem;">
              <i class="fa-brands fa-youtube" style="color: #ff0000; font-size: 1rem;"></i> Miniatura Master 4K • Formato Oficial
            </span>
            <h1 class="detail-title" style="margin: 0; font-size: 1.85rem; text-shadow: 0 2px 12px rgba(0,0,0,0.85);">${data.title}</h1>
            <div style="color: ${data.color}; font-size: 0.95rem; font-weight: 600; margin-top: 0.35rem;">${data.subtitle} • ${data.category}</div>
          </div>
          <button class="btn btn-primary" onclick="alert('Abriendo simulador de reproducción para ${data.title}')" style="box-shadow: 0 0 20px rgba(6,182,212,0.35);">
            <i class="fa-solid fa-play"></i> Simular Reproducción
          </button>
        </div>
      </div>
      <div style="padding: 1.25rem 1.5rem; font-size: 0.95rem; color: var(--text-muted); line-height: 1.6; border-top: 1px solid var(--border-glass);">
        ${data.concept}
      </div>
    </div>

    <!-- Specs Grid -->
    <div class="specs-grid">
      <div class="spec-card">
        <div class="spec-icon" style="color: ${data.color};"><i class="fa-solid fa-users"></i></div>
        <div class="spec-label">Audiencia Objetivo</div>
        <div class="spec-value">${data.targetAge}</div>
      </div>

      <div class="spec-card">
        <div class="spec-icon" style="color: ${data.color};"><i class="fa-solid fa-diagram-project"></i></div>
        <div class="spec-label">Pipeline de Producción</div>
        <div class="spec-value" style="font-size: 0.95rem;">${data.pipeline}</div>
      </div>

      <div class="spec-card">
        <div class="spec-icon" style="color: ${data.color};"><i class="fa-solid fa-sack-dollar"></i></div>
        <div class="spec-label">Monetización</div>
        <div class="spec-value" style="font-size: 0.95rem;">${data.monetization}</div>
      </div>
    </div>

    <!-- Episode Outlines & Sample Scripts -->
    <h3 style="font-family: var(--font-heading); margin-bottom: 1.5rem; font-size: 1.5rem;">Guiones Muestra y Desglose de Episodios</h3>
    ${data.episodes.map(ep => `
      <div class="social-mockup-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <h4 style="font-family: var(--font-heading); font-size: 1.2rem; color: #fff;">${ep.title}</h4>
          <span class="detail-badge" style="background: rgba(6,182,212,0.15); color: var(--cyan); border-color: var(--cyan);">${ep.duration}</span>
        </div>
        
        <div class="script-box">
          <span class="script-tag">Extracto de Guión Sintetizado</span>
          <div>${ep.script.replace(/\n/g, '<br>')}</div>
        </div>

        <div style="background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-sm); font-size: 0.9rem; color: var(--text-muted);">
          <strong style="color: #fff;"><i class="fa-solid fa-clapperboard"></i> Dirección de Miniatura (Thumbnail):</strong> ${ep.thumbnail}
        </div>
      </div>
    `).join('')}
  `;
}

// RENDER: ADVISORIES DEDICATED PAGE
function renderAdvisoriesPage() {
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  container.innerHTML = `
    <div class="breadcrumb-bar">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">Asesorías Comunicacionales</span>
      </div>
      <a href="#home" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Volver a Inicio</a>
    </div>

    <!-- Header Banner -->
    <div style="text-align: center; max-width: 850px; margin: 0 auto 4rem auto;">
      <span class="section-subtitle" style="color: var(--cyan);"><i class="fa-solid fa-comments"></i> Coaching Ejecutivo & Creadores</span>
      <h1 style="font-family: var(--font-heading); font-size: 3rem; font-weight: 900; margin: 0.5rem 0 1rem 0;">
        Transforma tu Presencia Digital y Dominio Comunicacional
      </h1>
      <p style="color: var(--text-muted); font-size: 1.15rem; line-height: 1.8;">
        Ayudamos a líderes, profesionales y creadores de contenido a expresarse con autoridad, estructurar discursos de alto impacto y dominar redes de contacto internacionales.
      </p>
    </div>

    <!-- 3 Pillars Grid -->
    <div class="services-grid" style="margin-bottom: 4rem;">
      <div class="glass-card">
        <div class="service-icon" style="background: rgba(139, 92, 246, 0.15); color: var(--purple);"><i class="fa-solid fa-microphone-lines"></i></div>
        <h3 class="service-title">1. Oratoria & Presencia Escénica</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">
          Control de lenguaje corporal ante cámara, modulación de voz, superación de pánico escénico y estructura de pitch irresistible.
        </p>
      </div>

      <div class="glass-card">
        <div class="service-icon" style="background: rgba(6, 182, 212, 0.15); color: var(--cyan);"><i class="fa-solid fa-briefcase"></i></div>
        <h3 class="service-title">2. Marca Personal & Networking B2B</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">
          Posicionamiento de perfil ejecutivo en LinkedIn, redacción estratégica de autoridad e inserción en redes de alto valor.
        </p>
      </div>

      <div class="glass-card">
        <div class="service-icon" style="background: rgba(236, 72, 153, 0.15); color: var(--pink);"><i class="fa-solid fa-language"></i></div>
        <h3 class="service-title">3. Coaching de Idiomas & Negociación</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">
          Fluidez en conversaciones de alto nivel en Español, Inglés y Alemán aplicadas a acuerdos comerciales trasatlánticos.
        </p>
      </div>
    </div>

    <!-- Pricing Tiers -->
    <div class="section-header">
      <span class="section-subtitle">Tiers de Inversión</span>
      <h2 class="section-title">Planes de Asesoría Personalizada</h2>
    </div>

    <div class="pricing-grid">
      <!-- Plan 1 -->
      <div class="pricing-card">
        <div class="price-title">Sesión Diagnóstico</div>
        <div class="price-amount">$150 <span>USD / sesión</span></div>
        <ul class="price-features">
          <li><i class="fa-solid fa-check"></i> Auditoría de 60 min de tu presencia digital</li>
          <li><i class="fa-solid fa-check"></i> Análisis de tono de voz y lenguaje corporal</li>
          <li><i class="fa-solid fa-check"></i> Hoja de ruta comunicacional personalizada</li>
        </ul>
        <button class="btn btn-secondary" onclick="scrollToBooking('Sesión Diagnóstico')">Reservar Sesión</button>
      </div>

      <!-- Plan 2 (Featured) -->
      <div class="pricing-card featured">
        <div class="price-title">Programa Creador / Ejecutivo</div>
        <div class="price-amount">$850 <span>USD / mes</span></div>
        <ul class="price-features">
          <li><i class="fa-solid fa-check"></i> 4 Sesiones 1-a-1 de Coaching Intensivo</li>
          <li><i class="fa-solid fa-check"></i> Revisión de guiones de video y pitches</li>
          <li><i class="fa-solid fa-check"></i> Soporte directo por WhatsApp/Telegram</li>
          <li><i class="fa-solid fa-check"></i> Entrenamiento en oratoria ante cámara</li>
        </ul>
        <button class="btn btn-primary" onclick="scrollToBooking('Programa Creador / Ejecutivo')">Comenzar Programa</button>
      </div>

      <!-- Plan 3 -->
      <div class="pricing-card">
        <div class="price-title">Transformación Enterprise</div>
        <div class="price-amount">$2,400 <span>USD / mes</span></div>
        <ul class="price-features">
          <li><i class="fa-solid fa-check"></i> Capacitación para equipos de hasta 5 ejecutivos</li>
          <li><i class="fa-solid fa-check"></i> Diseño completo de narrativa corporativa</li>
          <li><i class="fa-solid fa-check"></i> Media training y preparación para prensa</li>
          <li><i class="fa-solid fa-check"></i> Acceso ilimitado a nuestros prompts de IA</li>
        </ul>
        <button class="btn btn-secondary" onclick="scrollToBooking('Transformación Enterprise')">Solicitar Plan</button>
      </div>
    </div>

    <!-- Booking Form -->
    <div class="booking-form-card" id="booking-section">
      <h3 style="font-family: var(--font-heading); font-size: 1.8rem; margin-bottom: 0.5rem; text-align: center;">Reserva tu Diagnóstico Comunicacional</h3>
      <p style="color: var(--text-muted); text-align: center; margin-bottom: 2rem;">Completa tus datos y nuestro equipo te contactará en menos de 24 horas.</p>

      <form onsubmit="handleBookingSubmit(event)">
        <div class="form-grid">
          <div class="form-group">
            <label>Nombre Completo</label>
            <input type="text" class="form-input" placeholder="Tu nombre" required>
          </div>
          <div class="form-group">
            <label>Correo Electrónico</label>
            <input type="email" class="form-input" placeholder="tu@email.com" required>
          </div>
          <div class="form-group">
            <label>Programa Deseado</label>
            <select class="form-select" id="selected-plan-dropdown">
              <option value="Sesión Diagnóstico">Sesión Diagnóstico ($150 USD)</option>
              <option value="Programa Creador / Ejecutivo" selected>Programa Creador / Ejecutivo ($850 USD/mes)</option>
              <option value="Transformación Enterprise">Transformación Enterprise ($2,400 USD/mes)</option>
            </select>
          </div>
          <div class="form-group">
            <label>Idioma Preferido</label>
            <select class="form-select">
              <option value="Español">Español</option>
              <option value="Inglés">Inglés</option>
              <option value="Alemán">Alemán</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin-bottom: 2rem;">
          <label>¿Cuál es tu principal objetivo comunicacional?</label>
          <textarea class="form-textarea" rows="4" placeholder="Ejemplo: Quiero mejorar mi soltura hablando a cámara en YouTube y preparar un pitch para inversores..." required></textarea>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; font-size: 1.05rem; padding: 1rem;">
          <i class="fa-solid fa-paper-plane"></i> Confirmar Solicitud de Reserva
        </button>
      </form>
    </div>
  `;
}

function scrollToBooking(planName) {
  const section = document.getElementById('booking-section');
  const dropdown = document.getElementById('selected-plan-dropdown');
  if (dropdown && planName) dropdown.value = planName;
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

function handleBookingSubmit(e) {
  e.preventDefault();
  alert("¡Solicitud recibida con éxito! Nuestro equipo entre Alemania y Canadá se pondrá en contacto contigo para agendar la sesión.");
}

// RENDER: LOGO PROPOSALS SHOWCASE PAGE
function renderLogosPage() {
  const container = document.getElementById('view-dynamic');
  if (!container) return;

  container.innerHTML = `
    <div class="breadcrumb-bar">
      <div class="breadcrumbs">
        <a href="#home">Inicio</a>
        <span class="separator"><i class="fa-solid fa-chevron-right"></i></span>
        <span class="current">Propuestas de Logo</span>
      </div>
      <a href="#home" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Volver a Inicio</a>
    </div>

    <div style="text-align: center; max-width: 800px; margin: 0 auto 3rem auto;">
      <span class="section-subtitle" style="color: var(--pink);"><i class="fa-solid fa-palette"></i> Sistema de Identidad Visual</span>
      <h1 style="font-family: var(--font-heading); font-size: 2.8rem; font-weight: 900; margin: 0.5rem 0 1rem 0;">
        Propuestas de Logo — Los Manejadores
      </h1>
      <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.7;">
        Según el pliego de requerimientos, proponemos 3 conceptos gráficos de isotipos modulares pensados para creadores y productores. Selecciona tu opción favorita para aplicarla dinámicamente en todo el sitio web.
      </p>
    </div>

    <!-- Grid of Logo Proposals -->
    <div class="logo-selector-grid">
      ${Object.values(logoProposals).map(proposal => `
        <div class="logo-option-card ${proposal.id === currentLogoKey ? 'selected-logo' : ''}" data-logo-id="${proposal.id}">
          <div class="logo-preview-box">
            ${proposal.svg}
          </div>

          <h3 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 0.25rem;">${proposal.title}</h3>
          <span style="color: var(--cyan); font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem;">${proposal.subtitle}</span>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem; line-height: 1.6;">${proposal.desc}</p>

          <!-- Avatar Preview Test -->
          <div class="avatar-preview-row">
            <div class="avatar-32" title="Avatar 32px (Twitter/IG)">
              ${proposal.navSvg}
            </div>
            <span style="font-size: 0.75rem; color: var(--text-dim);">Avatar 32px</span>
            <div class="avatar-64" title="Avatar 64px (YouTube Channel)">
              ${proposal.navSvg}
            </div>
            <span style="font-size: 0.75rem; color: var(--text-dim);">Avatar 64px</span>
          </div>

          <button class="btn ${proposal.id === currentLogoKey ? 'btn-primary' : 'btn-secondary'}" onclick="applyLogo('${proposal.id}')" style="margin-top: 1.5rem; width: 100%; justify-content: center;">
            <i class="fa-solid ${proposal.id === currentLogoKey ? 'fa-circle-check' : 'fa-hand-pointer'}"></i>
            ${proposal.id === currentLogoKey ? 'Logo Activo' : 'Seleccionar este Logo'}
          </button>
        </div>
      `).join('')}
    </div>

    <!-- Logo Concept Render Artwork Banner -->
    <div class="glass-card" style="margin-top: 4rem; padding: 2.5rem;">
      <h3 style="font-family: var(--font-heading); font-size: 1.6rem; margin-bottom: 1rem;"><i class="fa-solid fa-wand-magic-sparkles" style="color: var(--purple);"></i> Render 3D Neón del Isotipo Recomendado</h3>
      <p style="color: var(--text-muted); margin-bottom: 2rem;">Visualización realista del isotipo "El Play Modular" integrado con iluminación ambiental en tonos violeta y cian:</p>
      <img src="logo_banner.jpg" alt="Render 3D de Logo" style="width: 100%; border-radius: var(--radius-md); border: 1px solid var(--border-highlight); box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
    </div>
  `;
}

// Helper: Tab Switcher
function switchTab(btnEl, tabId) {
  const nav = btnEl.parentElement;
  nav.querySelectorAll('.tab-btn, .cockpit-tab-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');

  const container = nav.parentElement;
  container.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.add('active');
}

// --- 5. GANTT CHART DATA MODEL & CONTROL ---
const initialGanttTasks = [
  { id: 1, name: "Pagar servicios de Highsfield + setup operativo", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 1", assignee: "Alemania / Canadá", completed: false },
  { id: 2, name: "Crear y optimizar perfiles @LosManejadores en X, LinkedIn e Instagram", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 1", assignee: "Canadá", completed: false },
  { id: 3, name: "Publicar Manifiesto de Marca y Carrusel de 3 Servicios", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 1", assignee: "Alemania", completed: false },
  { id: 4, name: "Legal & Estructura: Registro corporativo y contratos entre socios", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 1", assignee: "Alemania", completed: false },
  { id: 5, name: "Contactar 10 influencers targets (Chile/Alemania) + pitch estándar", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 2", assignee: "Canadá", completed: false },
  { id: 6, name: "Cerrar al menos 2 colaboraciones iniciales (revenue share)", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 2", assignee: "Canadá", completed: false },
  { id: 7, name: "Definir concepto y 5 títulos iniciales para los 3 Canales de YouTube", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 2", assignee: "Alemania", completed: false },
  { id: 8, name: "Configuración de pasarelas de pago (Stripe / Crypto / Wise Business)", phase: "phase-0", phaseLabel: "Fase 0: Fundación", week: "Semana 2", assignee: "Alemania", completed: false },

  { id: 9, name: "Publicar caso de estudio 'Kira Voss' como prueba social (PDF + Landing)", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 3", assignee: "Equipo", completed: false },
  { id: 10, name: "Desarrollo y publicación de Landing Page minimal con formulario CTA", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 3", assignee: "Alemania", completed: false },
  { id: 11, name: "Consagrar rostros y fichas técnicas: Elena (Daniel), Julia (Pancho Ipinza) y Laura (Wladimir Gutierrez)", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 4", assignee: "Daniel / Pancho Ipinza / Wladimir", completed: true },
  { id: 12, name: "Generación de pack base de 50 fotos HD en alta resolución para Elena, Julia y Laura", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 4", assignee: "Daniel / Pancho / Wladimir", completed: false },
  { id: 13, name: "Lanzamiento progresivo de contenido Soft en Twitter/X e Instagram", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 5", assignee: "Canadá", completed: false },
  { id: 14, name: "Creación y verificación KYC de cuentas en Fanvue / OnlyFans", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 6", assignee: "Alemania", completed: false },
  { id: 15, name: "Activación del embudo de tráfico Nivel 1 -> Nivel 2 Spicy", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 7", assignee: "Canadá", completed: false },
  { id: 16, name: "Optimización de ingresos iniciales y conversión de primeros 50 suscriptores", phase: "phase-1", phaseLabel: "Fase 1: Validación", week: "Semana 8", assignee: "Alemania / Canadá", completed: false },

  { id: 17, name: "Lanzamiento del Canal 1 de YouTube: 'Los viajes en el tiempo de Sofía'", phase: "phase-2", phaseLabel: "Fase 2: Escalabilidad", week: "Semana 9", assignee: "Alemania", completed: false },
  { id: 18, name: "Lanzamiento del Canal 2: 'Los Gemelos Arcanotech' (Solarpunk vs Cyberpunk)", phase: "phase-2", phaseLabel: "Fase 2: Escalabilidad", week: "Semana 10", assignee: "Alemania", completed: false },
  { id: 19, name: "Estructuración de paquetes de Asesoría Comunicacional (Tiers de precios)", phase: "phase-2", phaseLabel: "Fase 2: Escalabilidad", week: "Semana 11", assignee: "Canadá", completed: false },
  { id: 20, name: "Campaña de outreach B2B para captación de primeros 3 clientes ejecutivos", phase: "phase-2", phaseLabel: "Fase 2: Escalabilidad", week: "Semana 12", assignee: "Canadá", completed: false },
  { id: 21, name: "Despliegue multicanal de Laura Taeda (NutriGeek) y expansión de Julia Beauty", phase: "phase-2", phaseLabel: "Fase 2: Escalabilidad", week: "Semana 13", assignee: "Alemania / Canadá", completed: false },

  { id: 22, name: "Sistematización y automatización de la publicación diaria con herramientas IA", phase: "phase-3", phaseLabel: "Fase 3: Consolidación", week: "Semana 14", assignee: "Alemania", completed: false },
  { id: 23, name: "Revisión de métricas LTV, CAC y tasa de retención de suscriptores", phase: "phase-3", phaseLabel: "Fase 3: Consolidación", week: "Semana 15", assignee: "Alemania / Canadá", completed: false },
  { id: 24, name: "Planificación de expansión trimestral Q2 y escalamiento a 5 influencers activos", phase: "phase-3", phaseLabel: "Fase 3: Consolidación", week: "Semana 16", assignee: "Alemania / Canadá", completed: false }
];

let ganttTasks = [];
let currentGanttFilter = 'all';

function initGanttData() {
  // Check if a shared state parameter is present in URL
  const urlParams = new URLSearchParams(window.location.search);
  const sharedState = urlParams.get('state');

  if (sharedState) {
    try {
      const completedIds = JSON.parse(atob(sharedState));
      if (Array.isArray(completedIds)) {
        ganttTasks = JSON.parse(JSON.stringify(initialGanttTasks));
        ganttTasks.forEach(t => {
          t.completed = completedIds.includes(t.id);
        });
        saveGanttData();
        renderGanttTable();
        return;
      }
    } catch (e) {
      console.warn("No se pudo cargar el estado compartido de Gantt:", e);
    }
  }

  const saved = localStorage.getItem('los_manejadores_gantt_v1');
  if (saved) {
    try { ganttTasks = JSON.parse(saved); }
    catch (e) { ganttTasks = JSON.parse(JSON.stringify(initialGanttTasks)); }
  } else {
    ganttTasks = JSON.parse(JSON.stringify(initialGanttTasks));
  }
  renderGanttTable();
}

function saveGanttData() {
  localStorage.setItem('los_manejadores_gantt_v1', JSON.stringify(ganttTasks));
}

function resetGanttData() {
  if (confirm("¿Estás seguro de que deseas reiniciar el avance de la Carta Gantt a cero?")) {
    ganttTasks = JSON.parse(JSON.stringify(initialGanttTasks));
    saveGanttData();
    renderGanttTable();
  }
}

function exportGanttJSON() {
  const exportPayload = {
    project: "Los Manejadores (Proyecto INCEL)",
    dossierVersion: "2026.1",
    exportedAt: new Date().toISOString(),
    completedCount: ganttTasks.filter(t => t.completed).length,
    totalTasks: ganttTasks.length,
    tasks: ganttTasks
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportPayload, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `los_manejadores_gantt_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function triggerImportGantt() {
  const fileInput = document.getElementById('gantt-import-input');
  if (fileInput) fileInput.click();
}

function importGanttJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed && Array.isArray(parsed.tasks)) {
        ganttTasks = parsed.tasks;
      } else if (Array.isArray(parsed)) {
        ganttTasks = parsed;
      } else {
        alert("El archivo no contiene una estructura válida de Carta Gantt.");
        return;
      }
      saveGanttData();
      renderGanttTable(currentGanttFilter);
      alert("¡Carta Gantt importada y sincronizada con éxito entre miembros del equipo!");
    } catch (err) {
      alert("Error al leer el archivo JSON: " + err.message);
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function shareGanttLink() {
  const completedIds = ganttTasks.filter(t => t.completed).map(t => t.id);
  const stateStr = btoa(JSON.stringify(completedIds));
  const url = new URL(window.location.href);
  url.hash = '#gantt';
  url.searchParams.set('state', stateStr);

  navigator.clipboard.writeText(url.toString()).then(() => {
    alert("¡Enlace sincronizado copiado al portapapeles!\n\nCualquier miembro del equipo que abra este enlace cargará exactamente este avance de la Carta Gantt.");
  }).catch(() => {
    prompt("Copia este enlace para compartir el avance del equipo:", url.toString());
  });
}

function renderGanttTable(filter = currentGanttFilter) {
  currentGanttFilter = filter;
  const tbody = document.getElementById('gantt-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  let filtered = ganttTasks;
  if (filter !== 'all') filtered = ganttTasks.filter(t => t.phase === filter);

  filtered.forEach(task => {
    const tr = document.createElement('tr');
    if (task.completed) tr.classList.add('task-completed');

    tr.innerHTML = `
      <td>
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
      </td>
      <td class="task-name">${task.name}</td>
      <td><span class="badge-phase ${task.phase}">${task.phaseLabel}</span></td>
      <td style="color: var(--text-muted); font-size: 0.85rem; font-weight: 500;">${task.week}</td>
      <td style="color: var(--cyan); font-size: 0.85rem; font-weight: 600;"><i class="fa-solid fa-user"></i> ${task.assignee}</td>
    `;
    tbody.appendChild(tr);
  });

  updateProgressStats();
}

function toggleTask(taskId) {
  const task = ganttTasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    saveGanttData();
    renderGanttTable(currentGanttFilter);
  }
}

function filterGantt(filterName) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick').includes(filterName)) btn.classList.add('active');
  });
  renderGanttTable(filterName);
}

function updateProgressStats() {
  const total = ganttTasks.length;
  const completedCount = ganttTasks.filter(t => t.completed).length;
  const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;

  const bar = document.getElementById('gantt-progress-bar');
  const txt = document.getElementById('gantt-progress-text');
  const countTxt = document.getElementById('gantt-tasks-count');

  if (bar) bar.style.width = `${percent}%`;
  if (txt) txt.textContent = `${percent}%`;
  if (countTxt) countTxt.textContent = `${completedCount} / ${total}`;
}

// --- 6. VIEW SWITCHER FOR TEAM DASHBOARD ---
function switchView(mode) {
  if (mode === 'team') {
    showTeamView('gantt');
  } else {
    window.location.hash = '#home';
    showPublicView();
  }
}

// --- 7. PITCH DECK SLIDER LOGIC ---
let currentSlide = 1;
const totalSlides = 10;

function initPitchDeck() {
  const dotsContainer = document.getElementById('pitch-dots');
  if (!dotsContainer) return;

  dotsContainer.innerHTML = '';
  for (let i = 1; i <= totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = `dot ${i === 1 ? 'active' : ''}`;
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  }
}

function showSlide(index) {
  if (index < 1) index = totalSlides;
  if (index > totalSlides) index = 1;
  currentSlide = index;

  document.querySelectorAll('.pitch-slide').forEach(slide => {
    slide.classList.remove('active-slide');
    if (parseInt(slide.getAttribute('data-slide')) === currentSlide) {
      slide.classList.add('active-slide');
    }
  });

  document.querySelectorAll('.pitch-dots .dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx + 1 === currentSlide);
  });
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }
function goToSlide(n) { showSlide(n); }

// --- 8. COPY TO CLIPBOARD HELPER ---
function copyToClipboard(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const text = el.innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("¡Texto copiado al portapapeles con éxito!");
  }).catch(err => {
    console.error("Error al copiar texto:", err);
  });
}

// --- 9. DOM INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  initGanttData();
  initPitchDeck();
  applyLogo(currentLogoKey);
  updateWorldClocks();
  updateAuthUI();
});
