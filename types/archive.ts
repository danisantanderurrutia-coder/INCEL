/**
 * THE INFINITE ARCHIVE — DOMAIN DATA SCHEMAS & TYPES
 * From the Grand Arcanum Multiverse Audio-Visual Platform
 */

export type UniverseType = 
  | 'elven_sanctuary'       // Reinos Élficos / Bosques Arcanos Ancestrales
  | 'dwarven_forge'         // Montañas Enanas / Ciudadelas de Piedra y Metal
  | 'northern_bastion'      // Fortalezas del Norte / Criptas de Escarcha y Fuego
  | 'celestial_observatory' // Torres Astrológicas / Cosmología Arcana
  | 'abyssal_catacombs'     // Necrópolis Sumergidas / Ecos del Vacío
  | 'cyber_monastery';      // Enclaves Tecnológicos Ciber-monásticos

export type TomeStatus = 
  | 'idea_lore'             // 1. Fase de conceptualización y lore
  | 'audio_generation'      // 2. Generación y curación de pistas en IA
  | 'visual_generation'     // 3. Renderizado y bucles de video cinemático
  | 'mastering_assembly'    // 4. Edición multicapa, audio mastering (-14 LUFS) y ensamble
  | 'ready_published';      // 5. Metadatos listos / Publicado en YouTube

export type VisualAssetType = 
  | 'cinemagraph_loop'      // Bucle de video sutil (lluvia, fuego, partículas)
  | 'static_thumbnail'      // Portada en miniatura optimizada para YouTube (1280x720)
  | 'animated_backdrop'     // Fondo dinámico extendido (1080p / 4K)
  | 'avatar_sigil'          // Emblema rúnico cuadrado (1:1)
  | 'panoramic_banner';     // Banner monumental para cabecera de canal (2560x1440)

export type AspectRatio = '16:9' | '9:16' | '1:1' | '21:9';

export interface AudioTrack {
  id: string;
  tomeId: string;
  trackIndex: number;            // 1A, 1B, 1C -> 1, 2, 3
  code: string;                  // Ej: "TRACK-01A"
  name: string;
  bpm: number;
  keyScale: string;              // Ej: "D Minor Doric", "F# Aeolian"
  prompt: string;                // Prompt exacto enviado a Udio / Suno / MusicGen
  negativePrompt?: string;
  durationSeconds: number;       // En segundos (ej: 1800 para 30 min)
  audioUrl?: string;             // Enlace a archivo WAV masterizado o MP3 320kbps
  waveformData?: number[];       // Puntos normalizados (0-1) para visualizador SVG
  lufsIntegrated?: number;       // Ej: -14.2 LUFS
  soundElements: string[];       // Ej: ["Flauta bansuri", "Lluvia de fondo", "Arpa céltica"]
}

export interface VisualAsset {
  id: string;
  tomeId: string;
  title: string;
  type: VisualAssetType;
  prompt: string;                // Prompt exacto para Midjourney / Flux / Runway Gen-3
  negativePrompt?: string;
  aspectRatio: AspectRatio;
  resolution: string;            // Ej: "3840x2160 (4K UHD)", "1920x1080"
  engine: string;                // Ej: "Midjourney v6.1 + Runway Gen-3 Alpha"
  assetUrl: string;              // URL de descarga del video en bucle o imagen
  previewThumbnailUrl: string;   // URL de preview liviano para web
  loopDurationSeconds?: number;  // Duración del ciclo perfecto (ej: 8s, 15s)
}

export interface SEOMetadata {
  youtubeTitle: string;
  hookDescription: string;
  tags: string[];                // 25 etiquetas de alta retención
  category: string;              // "Music" (ID 10 en YouTube API)
  licenseNotice: string;
  pomodoroStructure?: string;
  defaultHashtags: string[];
}

export interface ArchiveTome {
  id: string;
  slug: string;
  tomeNumber: number;
  romanNumeral: string;          // "Tome I", "Codex II", "Archive III"
  title: string;
  subtitle: string;
  universe: UniverseType;
  targetMindset: 'Deep Focus' | 'Coding Flow' | 'Calm Reading' | 'Night Study' | 'Creative Writing';
  narrativeDescription: string;  // Historia/Lore del tomo en el Gran Arcano
  totalDurationSeconds: number;  // Duración de la compilación (ej: 3600s a 7200s)
  youtubeVideoId?: string;       // ID de 11 caracteres para iframe embed
  youtubeUrl?: string;
  coverImageUrl: string;
  accentColor: string;           // HEX o CSS token de glow (ej: #00F0FF o #D4AF37)
  status: TomeStatus;
  audioTracks: AudioTrack[];
  visualAssets: VisualAsset[];
  seoMetadata: SEOMetadata;
  createdAt: string;
  publishedAt?: string;
}

export interface PipelineColumn {
  id: TomeStatus;
  label: string;
  description: string;
  icon: string;
  badgeColor: string;
}
