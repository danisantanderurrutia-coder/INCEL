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
  const [adminTab, setAdminTab] = useState<'kanban' | 'sop' | 'audio_prompts' | 'visual_prompts' | 'brand_tokens'>('kanban');

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
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#1E293B]">
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

      {/* Barra de Sub-Navegación del Master Blueprint */}
      <div className="max-w-7xl mx-auto flex gap-2 flex-wrap mb-6 border-b border-[#1E293B] pb-4">
        {[
          { id: 'kanban', label: '📊 Tablero Kanban (5 Fases)', icon: 'fa-table-columns' },
          { id: 'sop', label: '📋 SOP de Producción (Paso a Paso)', icon: 'fa-list-check' },
          { id: 'audio_prompts', label: '🎵 Prompts de Audio IA', icon: 'fa-music' },
          { id: 'visual_prompts', label: '🔮 Prompts Visuales & Loops', icon: 'fa-film' },
          { id: 'brand_tokens', label: '🎨 Tokens de Marca (HEX)', icon: 'fa-palette' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setAdminTab(tab.id as any)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
              adminTab === tab.id
                ? 'bg-[#22D3EE]/15 text-[#22D3EE] border border-[#22D3EE]/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]'
                : 'bg-[#121824] text-[#94A3B8] border border-[#1E293B] hover:text-white hover:border-white/20'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* VISTA 1: TABLERO KANBAN */}
      {adminTab === 'kanban' && (
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
      )}

      {/* VISTA 2: SOP DE PRODUCCIÓN (PASO A PASO) */}
      {adminTab === 'sop' && (
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-6 lg:p-8">
            <h3 className="text-lg font-serif font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-[#F59E0B]">📋</span> Procedimiento Operativo Estándar (SOP de 5 Fases)
            </h3>
            <p className="text-xs text-[#94A3B8] mb-6">
              Sigue esta secuencia para fabricar cada entrega audiovisual de 1.5h a 2h con cero reclamos de copyright y máxima retención auditiva.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#121824] border border-[#F59E0B]/30 rounded-xl p-4 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-[#F59E0B]">
                  <span>FASE 1</span>
                  <span>Paso 1</span>
                </div>
                <h4 className="text-sm font-bold text-white">Lore del Tomo & Mindset</h4>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Elige universo: Élfico (60 BPM), Enano (65 BPM) o Norteño (56 BPM). Redacta la historia y define la afinación base a 432 Hz.
                </p>
              </div>

              <div className="bg-[#121824] border border-[#22D3EE]/30 rounded-xl p-4 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-[#22D3EE]">
                  <span>FASE 2</span>
                  <span>Paso 2</span>
                </div>
                <h4 className="text-sm font-bold text-white">Generación de Audio (Udio/Suno)</h4>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Formula: Instrumento líder + textura ambiental + tempo exacto BPM + modo menor. Comando negativo: no drums, no sudden peaks, non-fatiguing mixdown.
                </p>
              </div>

              <div className="bg-[#121824] border border-[#A855F7]/30 rounded-xl p-4 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-[#A855F7]">
                  <span>FASE 3</span>
                  <span>Paso 3</span>
                </div>
                <h4 className="text-sm font-bold text-white">Visuales en Bucle 8K (Midjourney + Runway)</h4>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Genera el frame base en Midjourney v6.1 en ratio 16:9 con polvo lila y glow neonwave. Anima en Runway con cámara estática en ciclo de 10-15s.
                </p>
              </div>

              <div className="bg-[#121824] border border-[#38BDF8]/30 rounded-xl p-4 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-[#38BDF8]">
                  <span>FASE 4</span>
                  <span>Paso 4</span>
                </div>
                <h4 className="text-sm font-bold text-white">Timeline NLE & Masterizado (DaVinci/Premiere)</h4>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Extiende a 1.5h o 2h encadenando 3 pistas con crossfades continuos de 10-12s. Normaliza a -14 LUFS Integrated.
                </p>
              </div>

              <div className="bg-[#121824] border border-[#10B981]/30 rounded-xl p-4 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-[#10B981]">
                  <span>FASE 5</span>
                  <span>Paso 5</span>
                </div>
                <h4 className="text-sm font-bold text-white">Publicación en YouTube Studio</h4>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  Aplica título con fórmula de alto CTR, descripción con timestamps y técnica Pomodoro 50/10, y el bloque de 25 tags estratégicas.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VISTA 3: PROMPTS DE AUDIO IA */}
      {adminTab === 'audio_prompts' && (
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-6 lg:p-8 space-y-6">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <span className="text-[#22D3EE]">🎵</span> Prompts Maestros de Audio IA (Udio / Suno / MusicGen)
            </h3>
            
            {tomes.map((tome) => (
              <div key={tome.id} className="space-y-3 pt-3 border-t border-[#1E293B]">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-[#E5C158]">{tome.romanNumeral}: {tome.title} ({tome.universe})</h4>
                  <span className="text-xs font-mono text-[#94A3B8]">{tome.targetMindset}</span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {tome.audioTracks.map((tr) => (
                    <div key={tr.id} className="bg-[#121824] border border-[#1E293B] rounded-xl p-3.5 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-white">{tr.code}: {tr.name} ({tr.bpm} BPM | {tr.keyScale})</span>
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(tr.prompt);
                            showNotification(`Prompt de ${tr.code} copiado`);
                          }}
                          className="text-[11px] font-mono text-[#22D3EE] hover:underline"
                        >
                          Copiar Prompt
                        </button>
                      </div>
                      <p className="text-xs font-mono text-[#CBD5E1] bg-[#06080D] p-2.5 rounded-lg border border-white/5">
                        {tr.prompt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VISTA 4: PROMPTS VISUALES & LOOPS */}
      {adminTab === 'visual_prompts' && (
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-6 lg:p-8 space-y-6">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <span className="text-[#A855F7]">🔮</span> Prompts Visuales Midjourney v6.1 & Runway Gen-3 Loops
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: '1. Aurelius en la Ventana de la Aguja (Tower Window)',
                  prompt: 'Cinematic shot of an ancient wise arch-mage with long white hair and a flowing long white beard, wearing dark weathered celestial robes, with an intricate brass astrolabe pendant hanging around his neck. He stands looking out a giant stone arched gothic window from a very high castle tower, gazing down at the eerie remnants of a ruined ancient city below. Outside, the dark sky blends seamlessly into deep space with glowing stars, cosmic nebula, and glittering lilac and violet dust motes. Chillwave neonwave atmospheric lighting, cyan and purple rim glow, melancholy and tranquil mood, highly detailed 8k cinematic fantasy concept art --ar 16:9 --v 6.1 --style raw',
                  videoNote: 'Runway Gen-3: Static camera. Subtle floating lilac dust particles, gentle wind blowing through white hair, seamless 10s loop.'
                },
                {
                  title: '2. Aurelius en la Biblioteca con Códice Dorado (Library Study)',
                  prompt: 'Cinematic atmospheric view of the same elderly arch-mage with long white hair and flowing white beard, wearing an ornate brass astrolabe necklace over dark celestial robes. He is sitting in a cozy medieval castle chamber library at night, reading a massive ancient leather-bound chronicle book under the warm golden glow of a flickering candlestick. Around him are stone walls with floating lilac and neon cyan dust particles, scrolls, glass hourglasses, and subtle cosmic twilight glowing through a high arched stone window. Chillwave synthwave atmosphere, highly detailed, photorealistic 8k fantasy art --ar 16:9 --v 6.1 --style raw',
                  videoNote: 'Runway Gen-3: Static camera. Candle flame dancing smoothly, floating glittering lilac particles, warm shadows oscillating gently.'
                },
                {
                  title: '3. El Dragón Negro Umbraxion en el Gran Salón (Obsidian Dragon Hall)',
                  prompt: 'Cinematic epic shot of the same elderly arch-mage with long white hair, flowing white beard and a brass astrolabe pendant around his neck, gently placing his hand affectionately on the massive snout of a colossal, magnificent friendly black dragon that is peacefully resting curled up in the center of a gigantic gothic castle hall. Colossal vaulted ceilings and gothic columns, with floating lilac, purple, and neon cyan sparkling dust motes and soft ambient chillwave fog. Soft golden light on the mage and the dragon scales, deep celestial starry night visible through huge high windows. Emotional, awe-inspiring, hyper-detailed 8k concept art --ar 16:9 --v 6.1 --style raw',
                  videoNote: 'Runway Gen-3: Static shot. Dragon chest breathing slowly in deep rhythm, soft smoke exhaling from nostrils, glowing dust particles drifting.'
                }
              ].map((vis, idx) => (
                <div key={idx} className="bg-[#121824] border border-[#1E293B] rounded-xl p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <strong className="text-xs text-white">{vis.title}</strong>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(vis.prompt);
                        showNotification('Prompt visual copiado');
                      }}
                      className="text-xs font-mono text-[#A855F7] hover:underline"
                    >
                      Copiar Prompt
                    </button>
                  </div>
                  <p className="text-xs font-mono text-[#CBD5E1] bg-[#06080D] p-3 rounded-lg border border-white/5">
                    {vis.prompt}
                  </p>
                  <span className="text-[11px] font-mono text-[#94A3B8] block">{vis.videoNote}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* VISTA 5: TOKENS DE MARCA & DISEÑO */}
      {adminTab === 'brand_tokens' && (
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-6 lg:p-8 space-y-6">
            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
              <span className="text-[#EC4899]">🎨</span> Tokens Semánticos de Marca (Click para Copiar HEX)
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { name: 'Dark Void', hex: '#06080D', role: 'Fondo Primario' },
                { name: 'Arcane Slate', hex: '#0E131F', role: 'Superficies' },
                { name: 'Parchment Dark', hex: '#161F30', role: 'Contenedores' },
                { name: 'Aura de Runa', hex: '#D4AF37', role: 'Oro Alquímico' },
                { name: 'Luz Élfica', hex: '#22D3EE', role: 'Cian Neonwave' },
                { name: 'Magenta Astral', hex: '#A855F7', role: 'Polvo Lila' }
              ].map((tok) => (
                <div
                  key={tok.hex}
                  onClick={() => {
                    navigator.clipboard.writeText(tok.hex);
                    showNotification(`Color ${tok.name} (${tok.hex}) copiado`);
                  }}
                  className="p-3.5 rounded-xl border border-white/10 cursor-pointer hover:scale-105 transition-all space-y-2"
                  style={{ backgroundColor: tok.hex }}
                >
                  <span className="text-xs font-bold text-white block drop-shadow-md">{tok.name}</span>
                  <span className="text-[10px] font-mono text-white/80 block drop-shadow-md">{tok.hex}</span>
                  <span className="text-[9px] text-white/60 block drop-shadow-md">{tok.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
