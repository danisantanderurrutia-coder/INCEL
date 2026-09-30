import React, { useState } from 'react';
import {
  ArchiveTome,
  TomeStatus,
  PipelineColumn,
  AudioTrack,
  VisualAsset,
  UniverseType
} from '../../types/archive';
import { DEFAULT_LAUNCH_TOMES } from '../public/ArchiveShowcase';

export interface ArchivePipelineManagerProps {
  onBackToPublic?: () => void;
}

const PIPELINE_COLUMNS: PipelineColumn[] = [
  {
    id: 'idea_lore',
    label: '1. Idea / Lore Prompt',
    description: 'Conceptualización mística, worldbuilding y diseño de prompts base.',
    icon: '📜',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-500/10'
  },
  {
    id: 'audio_generation',
    label: '2. Pistas IA (Audio)',
    description: 'Generación en Udio/Suno, revisión de BPM y armónicos.',
    icon: '🎵',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
  },
  {
    id: 'visual_generation',
    label: '3. Loops Visuales IA',
    description: 'Cinemagraphs 8K/4K con Midjourney + Runway/Flux.',
    icon: '🔮',
    badgeColor: 'border-purple-500/40 text-purple-400 bg-purple-500/10'
  },
  {
    id: 'mastering_assembly',
    label: '4. Montaje & Master',
    description: 'Mastering a -14 LUFS, ensamble Premiere/DaVinci de 1-2h.',
    icon: '⚡',
    badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-500/10'
  },
  {
    id: 'ready_published',
    label: '5. Listo / Publicado',
    description: 'SEO renderizado, tags y publicación en YouTube Studio.',
    icon: '🚀',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
  }
];

export const ArchivePipelineManager: React.FC<ArchivePipelineManagerProps> = ({
  onBackToPublic
}) => {
  const [tomes, setTomes] = useState<ArchiveTome[]>(DEFAULT_LAUNCH_TOMES);
  const [activeTome, setActiveTome] = useState<ArchiveTome | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [isYouTubeModalOpen, setIsYouTubeModalOpen] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  // Mover tomo a otra columna
  const moveTomeStatus = (tomeId: string, nextStatus: TomeStatus) => {
    setTomes((prev) =>
      prev.map((tome) => (tome.id === tomeId ? { ...tome, status: nextStatus } : tome))
    );
    showNotification(`Tomo actualizado a la etapa: ${nextStatus.toUpperCase()}`);
  };

  const showNotification = (msg: string) => {
    setCopiedNotification(msg);
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  // Generador de plantilla YouTube lista para copiar
  const generateYouTubeFullText = (tome: ArchiveTome): string => {
    const formattedDuration = `${Math.round(tome.totalDurationSeconds / 3600)} HOUR(S)`;

    // Timestamps calculados
    let currentTime = 0;
    const trackTimestamps = tome.audioTracks.map((tr) => {
      const minutes = Math.floor(currentTime / 60);
      const seconds = currentTime % 60;
      const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      currentTime += tr.durationSeconds;
      return `${formattedTime} - ${tr.name} (${tr.bpm} BPM | ${tr.keyScale})`;
    });

    return `=========================================
TÍTULO SUGERIDO:
${tome.seoMetadata.youtubeTitle}
=========================================

DESCRIPCIÓN COMPLETA:
"Has cruzado el umbral del Gran Arcano. Frente a ti se abre ${tome.title}, un registro sonoro y visual rescatado del vacío."

🌌 LORE DEL REGISTRO:
${tome.narrativeDescription}

Este compendio ha sido forjado acústicamente para facilitar estados de concentración sostenida (${tome.targetMindset}), sin saltos de volumen abruptos ni fatiga auditiva.

⏱️ MARCADORES DE TIEMPO (TIMESTAMPS & TRACKLIST):
${trackTimestamps.join('\n')}

🍅 TÉCNICA DE ESTUDIO RECOMENDADA (DEEP FOCUS 50/10):
00:00 - Bloque de Enfoque Profundo I (50 min)
50:00 - Transición / Pausa de respiración e hidratación (10 min)
60:00 - Bloque de Enfoque Profundo II (50 min)
1:50:00 - Cierre del Tomo y retorno a la realidad

🎧 ESPECIFICACIONES TÉCNICAS DE AUDIO:
• Formato: Sonido Espacial 432Hz Master / -14 LUFS Integrated
• Rango de Frecuencias: Graves templados a 50Hz, corte sutil de estridencias > 14kHz.
• Apto para auriculares abiertos, monitores de estudio y parlantes de escritorio.

📜 DESCARGO ÉTICO, LEGAL Y CREATIVE COMMONS:
Todas las piezas musicales y cinemáticas visuales de "The Infinite Archive" han sido conceptualizadas mediante ingeniería de prompts propietaria, generadas con modelos de IA de última generación (Udio, Suno, Midjourney, Runway) y masterizadas profesionalmente en estudio analógico/digital.
• LIBRE DE CONTENT ID: Puedes utilizar este video como fondo para tus sesiones de estudio en vivo (streaming en Twitch, YouTube o kick) sin riesgo de strikes de copyright.

🔗 CONEXIÓN CON LA BÓVEDA DEL GRAN ARCANO:
• Plataforma Web Interactiva: https://infinitearchive.vault/codex/${tome.slug}
• GitHub Repository: https://github.com/the-infinite-archive
• Comunidad Discord & Grimorio: https://discord.gg/infinite-archive

${tome.seoMetadata.defaultHashtags.join(' ')}

=========================================
BLOQUE DE 25 TAGS (COPIAR DIRECTO EN YOUTUBE STUDIO):
=========================================
${tome.seoMetadata.tags.join(', ')}
`;
  };

  const handleCopyYouTubePackage = (tome: ArchiveTome) => {
    const text = generateYouTubeFullText(tome);
    navigator.clipboard.writeText(text);
    showNotification('¡Metadatos y descripción de YouTube copiados al portapapeles!');
  };

  return (
    <div className="min-h-screen bg-[#06080D] text-[#E2E8F0] font-sans selection:bg-[#D4AF37] selection:text-[#06080D] p-6 lg:p-10 relative">
      {/* Notificación Toast */}
      {copiedNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#121824] border border-[#22D3EE] text-[#22D3EE] px-5 py-3 rounded-xl shadow-2xl text-xs font-mono flex items-center gap-2 animate-bounce">
          <span>✨</span>
          {copiedNotification}
        </div>
      )}

      {/* Barra Superior */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#1E293B]">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-1">
            Production Pipeline • Master Control Room
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white flex items-center gap-3">
            The Infinite Archive Manager
          </h1>
          <p className="text-xs text-[#94A3B8]">
            Supervisa el flujo de creación: desde la idea mística hasta el despliegue en YouTube Studio.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {onBackToPublic && (
            <button
              onClick={onBackToPublic}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#121824] border border-[#1E293B] text-white hover:bg-[#1E293B] transition-all"
            >
              ← Ir al Catálogo Público
            </button>
          )}

          <button
            onClick={() => {
              setActiveTome(tomes[0]);
              setIsEditorOpen(true);
            }}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-[#D4AF37] text-[#06080D] hover:bg-[#E5C158] transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)] flex items-center gap-2"
          >
            <span>+</span> Nuevo Tomo / Códice
          </button>
        </div>
      </div>

      {/* Tablero Kanban (5 Fases) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-6">
        {PIPELINE_COLUMNS.map((col) => {
          const colTomes = tomes.filter((t) => t.status === col.id);

          return (
            <div
              key={col.id}
              className="bg-[#0A0E17] border border-[#1E293B] rounded-xl flex flex-col min-h-[500px]"
            >
              {/* Header Columna */}
              <div className="p-3.5 border-b border-[#1E293B] flex items-center justify-between bg-[#0E131F] rounded-t-xl">
                <div className="flex items-center gap-2">
                  <span className="text-base">{col.icon}</span>
                  <div>
                    <h3 className="text-xs font-semibold text-white tracking-wide">
                      {col.label}
                    </h3>
                    <p className="text-[10px] text-[#64748B] line-clamp-1">{col.description}</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#121824] text-[#94A3B8] border border-[#1E293B]">
                  {colTomes.length}
                </span>
              </div>

              {/* Lista de Tarjetas */}
              <div className="p-3 space-y-3 flex-1 overflow-y-auto">
                {colTomes.map((tome) => (
                  <div
                    key={tome.id}
                    className="p-3.5 rounded-lg border border-[#1E293B] bg-[#121824]/80 hover:border-white/30 transition-all space-y-3 group relative"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-[#D4AF37] font-semibold">{tome.romanNumeral}</span>
                      <span className="text-[#64748B]">
                        {Math.round(tome.totalDurationSeconds / 60)}m
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-[#22D3EE] transition-colors line-clamp-1">
                        {tome.title}
                      </h4>
                      <p className="text-[11px] text-[#94A3B8] line-clamp-2 mt-0.5">
                        {tome.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/50 text-[#38BDF8] border border-sky-500/20">
                        {tome.targetMindset}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/50 text-[#94A3B8] border border-white/10">
                        {tome.audioTracks.length} Audio AI
                      </span>
                    </div>

                    {/* Acciones Rápidas */}
                    <div className="pt-2 border-t border-[#1E293B] flex items-center justify-between gap-1">
                      <button
                        onClick={() => {
                          setActiveTome(tome);
                          setIsYouTubeModalOpen(true);
                        }}
                        className="text-[10px] font-mono text-[#D4AF37] hover:underline flex items-center gap-1"
                        title="Ver y copiar paquete SEO de YouTube"
                      >
                        ⚡ SEO Pack
                      </button>

                      <div className="flex items-center gap-1">
                        {/* Selector de cambio de fase */}
                        <select
                          value={tome.status}
                          onChange={(e) => moveTomeStatus(tome.id, e.target.value as TomeStatus)}
                          className="bg-[#0A0E17] border border-[#1E293B] rounded text-[10px] text-white py-0.5 px-1 focus:outline-none"
                        >
                          {PIPELINE_COLUMNS.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.label.split('.')[0]}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}

                {colTomes.length === 0 && (
                  <div className="h-32 flex items-center justify-center border border-dashed border-[#1E293B] rounded-lg text-center p-3">
                    <p className="text-[11px] text-[#64748B]">No hay proyectos en esta etapa.</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Visor y Copiador SEO de YouTube */}
      {isYouTubeModalOpen && activeTome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="max-w-3xl w-full bg-[#0E131F] border border-[#1E293B] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between border-b border-[#1E293B] pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                  YouTube Ready-to-Publish Kit • {activeTome.romanNumeral}
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  {activeTome.title}
                </h3>
              </div>
              <button
                onClick={() => setIsYouTubeModalOpen(false)}
                className="text-[#94A3B8] hover:text-white text-lg"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-1">
              <div>
                <label className="text-xs font-mono text-[#94A3B8] block mb-1">
                  Título Sugerido para YouTube:
                </label>
                <div className="p-3 bg-[#06080D] border border-[#1E293B] rounded-lg text-xs font-mono text-white flex items-center justify-between">
                  <span>{activeTome.seoMetadata.youtubeTitle}</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(activeTome.seoMetadata.youtubeTitle);
                      showNotification('Título copiado');
                    }}
                    className="ml-2 text-xs text-[#22D3EE] hover:underline"
                  >
                    Copiar
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-[#94A3B8] block mb-1">
                  Vista Previa del Texto Completo (Descripción + Timestamps + Lore + Tags):
                </label>
                <pre className="p-4 bg-[#06080D] border border-[#1E293B] rounded-lg text-xs font-mono text-[#CBD5E1] whitespace-pre-wrap max-h-72 overflow-y-auto selection:bg-[#22D3EE] selection:text-black">
                  {generateYouTubeFullText(activeTome)}
                </pre>
              </div>

              <div>
                <label className="text-xs font-mono text-[#94A3B8] block mb-1">
                  25 Tags Estratégicas:
                </label>
                <div className="p-3 bg-[#06080D] border border-[#1E293B] rounded-lg text-xs font-mono text-[#38BDF8]">
                  {activeTome.seoMetadata.tags.join(', ')}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-[#1E293B] pt-4">
              <span className="text-xs text-[#64748B]">
                Optimizado para YouTube Studio (Categoría Música / 14 LUFS)
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsYouTubeModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#94A3B8] hover:text-white"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => handleCopyYouTubePackage(activeTome)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg bg-[#22D3EE] text-[#06080D] hover:bg-[#38BDF8] transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copiar Todo (1-Click YouTube Studio)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchivePipelineManager;
