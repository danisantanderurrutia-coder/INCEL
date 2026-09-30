import React, { useState, useMemo } from 'react';
import { ArchiveTome, UniverseType, AudioTrack } from '../../types/archive';

export interface ArchiveShowcaseProps {
  initialTomes?: ArchiveTome[];
  onOpenAdmin?: () => void;
}

// Preset data con los 3 Tomos oficiales de lanzamiento
export const DEFAULT_LAUNCH_TOMES: ArchiveTome[] = [
  {
    id: 'tome-001',
    slug: 'whispers-of-the-moonlit-sanctuary',
    tomeNumber: 1,
    romanNumeral: 'Tome I',
    title: 'Whispers of the Moonlit Sanctuary',
    subtitle: 'Elven Archives of Solitude & Calm Reading',
    universe: 'elven_sanctuary',
    targetMindset: 'Calm Reading',
    narrativeDescription:
      'En los claustros de cristal de Sylveria, los eruditos élficos preservan cantos milenarios antes de que las estrellas se apaguen. Aquí, los ecos del agua lunar y el follaje bioluminiscente disuelven la prisa mortal, abriendo el umbral de la contemplación pura.',
    totalDurationSeconds: 5400, // 1h 30m
    youtubeVideoId: 'dQw4w9WgXcQ', // Placeholder para iframe embed
    youtubeUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
    coverImageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#22D3EE', // Cian bioluminiscente / Luz Élfica
    status: 'ready_published',
    createdAt: '2026-09-01T12:00:00Z',
    publishedAt: '2026-09-15T18:00:00Z',
    audioTracks: [
      {
        id: 'track-1a',
        tomeId: 'tome-001',
        trackIndex: 1,
        code: 'TRACK-01A',
        name: 'Sylverian Starlight Harp & Dew',
        bpm: 60,
        keyScale: 'D Dorian',
        durationSeconds: 1800,
        prompt:
          'Ethereal ambient elven music, floating acoustic Celtic harp arpeggios, gentle bamboo bansuri flute melodies, warm legato string quartet, deep sub-bass drone, soft night forest rain and gentle river water stream soundscape, 60 BPM, D minor dorian, spacious reverb, crystal clear mix, no percussion, no drums, master quality --ar 16:9',
        soundElements: ['Arpa Céltica', 'Flauta Bansuri', 'Lluvia Nocturna', 'Cuerdas Legato']
      },
      {
        id: 'track-1b',
        tomeId: 'tome-001',
        trackIndex: 2,
        code: 'TRACK-01B',
        name: 'Breeze Through the High Scriptorium',
        bpm: 58,
        keyScale: 'A Minor Pentatonic',
        durationSeconds: 1800,
        prompt:
          'Nocturnal ambient soundscape, soft felt piano chords, bowed glass harmonics, distant night wind blowing through crystalline vaulted ceilings, subtle bioluminescent bell chimes, binaural theta wave hum (6Hz), meditative study atmosphere, cinematic fantasy score, 58 BPM, peaceful and nostalgic, unhurried pacing',
        soundElements: ['Felt Piano', 'Armónicos de Cristal', 'Viento Nocturno', 'Binaural 6Hz']
      },
      {
        id: 'track-1c',
        tomeId: 'tome-001',
        trackIndex: 3,
        code: 'TRACK-01C',
        name: 'The Starlight Maiden’s Incantation',
        bpm: 62,
        keyScale: 'E Minor Aeolian',
        durationSeconds: 1800,
        prompt:
          'Angelic female soprano wordless vocalise, distant choir pads, soft raindrops splashing on stained glass rose windows, warm analog synth warmth under fantasy orchestral cello, 62 BPM, ethereal fantasy chillwave, sparkling high frequencies, gentle meditation, deep sleep and profound reading focus',
        soundElements: ['Voz Femenina Especular', 'Cello Cálido', 'Gotas en Vitral', 'Synth Pad Suave']
      }
    ],
    visualAssets: [
      {
        id: 'vis-1a',
        tomeId: 'tome-001',
        title: 'Elvish Scholar at the Glass Balcony',
        type: 'cinemagraph_loop',
        prompt:
          'Cinematic fantasy wide shot, an ethereal elven scholar in flowing indigo and silver robes seated at a translucent crystalline balcony reading an ancient glowing scroll, soft neonwave cyan and gold rim lighting, bioluminescent leaves drifting gently through the night air, giant full moon in the dark starry sky, ultra-detailed architectural fantasy, 8k resolution, photorealistic Unreal Engine 5 render style, perfectly seamless cinemagraph loop --ar 16:9 --style raw',
        aspectRatio: '16:9',
        resolution: '3840x2160',
        engine: 'Midjourney v6.1 + Runway Gen-3 Alpha',
        assetUrl: '#',
        previewThumbnailUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
        loopDurationSeconds: 12
      }
    ],
    seoMetadata: {
      youtubeTitle: 'Ancient Elven Library (Ambient Fantasy Music & Rain) 1.5 HOURS | Deep Reading & Tranquil Study',
      hookDescription:
        'Has cruzado el umbral hacia el Sanctum Lunar de Sylveria, catalogado en el Gran Arcano...',
      tags: [
        'elven study music',
        'fantasy ambient reading',
        'moonlit library ambience',
        'calm harp fantasy focus'
      ],
      category: 'Music',
      licenseNotice: 'All audio & visual crafted with bespoke prompts for The Infinite Archive.',
      defaultHashtags: ['#TheInfiniteArchive', '#ElvenMusic', '#FantasyStudy', '#DeepCalm']
    }
  },
  {
    id: 'tome-002',
    slug: 'the-deep-forge-of-the-runesmiths',
    tomeNumber: 2,
    romanNumeral: 'Codex II',
    title: 'The Deep Forge of the Runesmiths',
    subtitle: 'Dwarven Bastion of Stone, Fire & Flow State Coding',
    universe: 'dwarven_forge',
    targetMindset: 'Coding Flow',
    narrativeDescription:
      'Bajo las raíces de la cordillera de Kar-Thuldum, los forjadores rúnicos fusionan aleaciones estelares con martillazos acompasados. El pulso hipnótico del yunque y los drones de piedra activan el estado de hiperconcentración ideal para arquitectos de código y artesanos intelectuales.',
    totalDurationSeconds: 7200, // 2h 00m
    youtubeVideoId: 'dQw4w9WgXcQ',
    youtubeUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
    coverImageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#D4AF37', // Oro Alquímico / Runa Enana
    status: 'ready_published',
    createdAt: '2026-09-05T12:00:00Z',
    publishedAt: '2026-09-20T18:00:00Z',
    audioTracks: [
      {
        id: 'track-2a',
        tomeId: 'tome-002',
        trackIndex: 1,
        code: 'TRACK-02A',
        name: 'The Rhythmic Strike of the Anvil',
        bpm: 65,
        keyScale: 'C Minor Dorian',
        durationSeconds: 2400,
        prompt:
          'Deep steady atmospheric coding music, distant muffled metallic hammer strikes acting as steady 65 BPM metronome, resonant bronze singing bowls, low C-string drone of double bass and contrabass, warm industrial fantasy textures, dark stone echo, subtle ember crackle, hypnotic productivity flow state soundtrack, no abrasive highs, non-fatiguing mixdown',
        soundElements: ['Martillo Lejano (65 BPM)', 'Bajo Contrabajo', 'Cuencos de Bronce', 'Ecos de Cueva']
      },
      {
        id: 'track-2b',
        tomeId: 'tome-002',
        trackIndex: 2,
        code: 'TRACK-02B',
        name: 'Chants of the Subterranean Guilds',
        bpm: 65,
        keyScale: 'G Deep Minor',
        durationSeconds: 2400,
        prompt:
          'Ultra-low guttural male throat singing drone, solemn Nordic and dwarven harmonic chanting, echoing through a massive basalt cavern, resonant forge air blowers breathing in slow rhythm, gentle fire furnace hum, warm sub frequencies (50Hz), deep work and programming endurance soundtrack',
        soundElements: ['Canto Gutural Profundo', 'Horno de Forja', 'Sub-bajo 50Hz', 'Cuerdas Graves']
      },
      {
        id: 'track-2c',
        tomeId: 'tome-002',
        trackIndex: 3,
        code: 'TRACK-02C',
        name: 'Gears in the Magma Chamber',
        bpm: 66,
        keyScale: 'D Minor',
        durationSeconds: 2400,
        prompt:
          'Low warm acoustic frame drums and muffled taiko rolling pattern, heavy rhythmic pulse without sudden peaks, rhythmic ticking of brass clockwork gears, deep tectonic earth rumble, steady focus music for software engineering and technical writing, rich analog warmth, zero vocal distraction',
        soundElements: ['Tambor Taiko Sordo', 'Engranajes de Bronce', 'Pulso Tectónico', 'Bajo Analógico']
      }
    ],
    visualAssets: [
      {
        id: 'vis-2a',
        tomeId: 'tome-002',
        title: 'Runesmith Inspecting Blueprints at the Hearth',
        type: 'cinemagraph_loop',
        prompt:
          'Cinematic medium-wide view inside a colossal underground dwarven foundry, a wise bearded dwarven runesmith studying glowing gold-inscribed architectural blueprints upon a stone table, massive forge fire in the background breathing softly with glowing ember sparks rising slowly, volumetric golden and molten amber lighting, steam venting in smooth rhythm, 8k Unreal Engine 5 cinematic, seamless looping video cinemagraph --ar 16:9',
        aspectRatio: '16:9',
        resolution: '3840x2160',
        engine: 'Midjourney v6.1 + Runway Gen-3 Alpha',
        assetUrl: '#',
        previewThumbnailUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
        loopDurationSeconds: 15
      }
    ],
    seoMetadata: {
      youtubeTitle: 'Dwarven Forge Deep Work Ambience (65 BPM Hammer & Drone) 2 HOURS | Flow State & Coding',
      hookDescription:
        'Has descendido a las fraguas abisales de Kar-Thuldum, registradas en el Códice II del Gran Arcano...',
      tags: [
        'dwarven forge ambience',
        'deep work music coding',
        'programmer focus beats',
        'rhythmic hammer study music'
      ],
      category: 'Music',
      licenseNotice: 'All audio & visual crafted with bespoke prompts for The Infinite Archive.',
      defaultHashtags: ['#DwarvenForge', '#FlowState', '#DeepCoding', '#TheInfiniteArchive']
    }
  },
  {
    id: 'tome-003',
    slug: 'the-obsidian-bastion-at-winterfall',
    tomeNumber: 3,
    romanNumeral: 'Archive III',
    title: 'The Obsidian Bastion at Winterfall',
    subtitle: 'Northern Keeps, Melancholic Strings & Winter Blizzard',
    universe: 'northern_bastion',
    targetMindset: 'Creative Writing',
    narrativeDescription:
      'En el confín helado de las Tierras Sombrías, una torre de obsidiana resiste la ventisca eterna. En su interior, un fuego de roble crepita mientras un violonchelo solitario teje la banda sonora de la memoria, el aislamiento creativo y el análisis minucioso.',
    totalDurationSeconds: 7200, // 2h 00m
    youtubeVideoId: 'dQw4w9WgXcQ',
    youtubeUrl: 'https://youtube.com/watch?v=dQw4w9WgXcQ',
    coverImageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#A855F7', // Púrpura de Vacío / Magenta Astral
    status: 'ready_published',
    createdAt: '2026-09-10T12:00:00Z',
    publishedAt: '2026-09-25T18:00:00Z',
    audioTracks: [
      {
        id: 'track-3a',
        tomeId: 'tome-003',
        trackIndex: 1,
        code: 'TRACK-03A',
        name: 'The Solitary Cellist of the Bastion',
        bpm: 56,
        keyScale: 'B Minor Aeolian',
        durationSeconds: 2400,
        prompt:
          'Solo melancholic acoustic cello melody, expressive bow scraping textures, warm wood crackling fireplace sounds, distant arctic winter blizzard howling gently outside thick stone walls, 56 BPM, slow emotional phrasing, Renaissance modal harmonies, dark academia focus music, profound introspection and nocturnal writing',
        soundElements: ['Cello Solista Acústico', 'Fuego Crepitante', 'Ventisca Lejana', 'Textura de Madera']
      },
      {
        id: 'track-3b',
        tomeId: 'tome-003',
        trackIndex: 2,
        code: 'TRACK-03B',
        name: 'Old Parchment and Bitter Cold',
        bpm: 58,
        keyScale: 'F# Minor',
        durationSeconds: 2400,
        prompt:
          'Medieval lute and viola da gamba counterpoint in minor key, warm close-mic recording, slow delicate plucked strings, soft breath of cold wind against glass, creaking ancient floorboards, historical dark medieval ambient for researching, essay writing and worldbuilding',
        soundElements: ['Laúd Renacentista', 'Viola da Gamba', 'Viento Ártico', 'Madera de Roble']
      },
      {
        id: 'track-3c',
        tomeId: 'tome-003',
        trackIndex: 3,
        code: 'TRACK-03C',
        name: 'Bell of the Frozen Keep',
        bpm: 50,
        keyScale: 'C# Ambient Drone',
        durationSeconds: 2400,
        prompt:
          'Cold ambient winter drone, crystalline overtone singing bowls, distant deep brass fortress bell chiming once every two minutes, soft falling snow white noise texture, dark atmosphere, peaceful solitude, deep reflection, winter fantasy study ambience',
        soundElements: ['Campana Lejana', 'Cuencos Tibetanos', 'Viento Nevado', 'Drone de Hielo']
      }
    ],
    visualAssets: [
      {
        id: 'vis-3a',
        tomeId: 'tome-003',
        title: 'Hooded Archivist Writing by the Blizzard Window',
        type: 'cinemagraph_loop',
        prompt:
          'Atmospheric interior shot of a medieval dark stone tower study room, a hooded archivist sitting at a heavy dark oak desk writing with an antique feather quill on yellowed parchment, giant leaded glass window showing an intense swirling arctic snowstorm at twilight, a warm stone fireplace glowing softly on the side casting flickering dancing shadows, candle flames wavering gently, cinematic depth of field, 8k dark fantasy aesthetic, seamless loop cinemagraph --ar 16:9',
        aspectRatio: '16:9',
        resolution: '3840x2160',
        engine: 'Midjourney v6.1 + Runway Gen-3 Alpha',
        assetUrl: '#',
        previewThumbnailUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80',
        loopDurationSeconds: 14
      }
    ],
    seoMetadata: {
      youtubeTitle: 'Medieval Winter Keep (Sad Cello & Blizzard Fireplace) 2 HOURS | Writing & Deep Solitude',
      hookDescription:
        'Afuera aúlla la ventisca del fin del mundo; dentro del Bastión de Obsidiana, el fuego resguarda tus palabras...',
      tags: [
        'winter keep fireplace ambience',
        'sad cello study music',
        'medieval blizzard writing music',
        'dark academia focus'
      ],
      category: 'Music',
      licenseNotice: 'All audio & visual crafted with bespoke prompts for The Infinite Archive.',
      defaultHashtags: ['#ObsidianBastion', '#WinterAmbience', '#WritingMusic', '#DarkAcademia']
    }
  }
];

export const ArchiveShowcase: React.FC<ArchiveShowcaseProps> = ({
  initialTomes = DEFAULT_LAUNCH_TOMES,
  onOpenAdmin
}) => {
  const [selectedUniverse, setSelectedUniverse] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTome, setActiveTome] = useState<ArchiveTome>(initialTomes[0]);
  const [activeTrack, setActiveTrack] = useState<AudioTrack | null>(initialTomes[0]?.audioTracks[0] || null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoreModalOpen, setIsLoreModalOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'card' | 'expanded'>('card');

  // Filtrado de tomos
  const filteredTomes = useMemo(() => {
    return initialTomes.filter((tome) => {
      const matchesUniverse = selectedUniverse === 'all' || tome.universe === selectedUniverse;
      const matchesSearch =
        tome.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tome.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tome.targetMindset.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesUniverse && matchesSearch;
    });
  }, [initialTomes, selectedUniverse, searchQuery]);

  const handleSelectTome = (tome: ArchiveTome) => {
    setActiveTome(tome);
    setActiveTrack(tome.audioTracks[0] || null);
    setIsPlaying(false);
  };

  const togglePlayAudio = (track: AudioTrack) => {
    if (activeTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setActiveTrack(track);
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#06080D] text-[#E2E8F0] font-sans selection:bg-[#22D3EE] selection:text-[#06080D] relative overflow-hidden">
      {/* Luces de Fondo (Neonwave & Arcane Glow) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#00F0FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[650px] h-[650px] bg-[#A855F7]/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Cabecera / Hero de Marca */}
      <header className="relative border-b border-[#1E293B]/80 bg-[#0A0E17]/80 backdrop-blur-xl z-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase bg-[#121824] border border-[#22D3EE]/30 text-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
              The Grand Arcanum Multiverse Vault
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white flex items-center gap-3">
              The Infinite Archive
            </h1>
            <p className="text-sm md:text-base text-[#94A3B8] max-w-2xl font-light">
              Acústicas ancestrales, ciudadelas olvidadas y frecuencias inmersivas para lectura, programación y escritura profunda.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#E5C158] hover:bg-[#D4AF37]/20 transition-all shadow-[0_0_20px_rgba(212,175,55,0.15)] flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Gestión de Pipeline
              </button>
            )}

            <a
              href="https://youtube.com/@TheInfiniteArchive"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white hover:opacity-90 transition-all flex items-center gap-2 shadow-lg shadow-red-500/20"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Canal YouTube
            </a>
          </div>
        </div>

        {/* Barra de Filtros y Búsqueda */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#1E293B]/40">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Todos los Reinos' },
              { id: 'elven_sanctuary', label: '🌿 Reinos Élficos' },
              { id: 'dwarven_forge', label: '⚒️ Forjas Enanas' },
              { id: 'northern_bastion', label: '❄️ Bastión Norteño' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedUniverse(filter.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  selectedUniverse === filter.id
                    ? 'bg-[#1E293B] text-white border border-[#22D3EE]/50 shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-[#121824]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Buscar códice, track o estado..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121824] border border-[#1E293B] rounded-lg px-3 py-1.5 text-xs text-white placeholder-[#64748B] focus:outline-none focus:border-[#22D3EE]/60 transition-all"
            />
            <svg
              className="w-4 h-4 text-[#64748B] absolute right-3 top-2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-12 relative z-10">
        {/* Tomo Activo / Hero Cinema Player */}
        {activeTome && (
          <section className="rounded-2xl border border-[#1E293B] bg-[#0E131F]/90 backdrop-blur-md overflow-hidden shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Arte Visual Cinemático / Loop Preview */}
              <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[460px] bg-black flex items-center justify-center overflow-hidden group">
                <img
                  src={activeTome.coverImageUrl}
                  alt={activeTome.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/40 to-transparent" />

                {/* Badge de Mindset & Universe */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider backdrop-blur-md border"
                    style={{
                      borderColor: `${activeTome.accentColor}66`,
                      backgroundColor: `${activeTome.accentColor}15`,
                      color: activeTome.accentColor
                    }}
                  >
                    {activeTome.romanNumeral} • {activeTome.targetMindset}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-black/60 backdrop-blur-md text-[#94A3B8] border border-white/10">
                    {Math.round(activeTome.totalDurationSeconds / 60)} MIN
                  </span>
                </div>

                {/* Centro: Play Directo o Summon YouTube */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href={activeTome.youtubeUrl || `https://youtube.com/watch?v=${activeTome.youtubeVideoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-full bg-black/70 border border-white/20 text-white hover:scale-110 hover:border-[#22D3EE] transition-all shadow-2xl flex items-center justify-center group/btn"
                    title="Reproducir experiencia completa en YouTube"
                  >
                    <svg className="w-8 h-8 fill-current text-[#22D3EE] group-hover/btn:translate-x-0.5 transition-transform" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </a>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#94A3B8]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Visual Loop Cinemagraph: 8K 60fps Ambient
                  </span>
                  <button
                    onClick={() => setIsLoreModalOpen(true)}
                    className="hover:text-white underline underline-offset-4 decoration-[#22D3EE]"
                  >
                    Leer Manuscrito del Lore →
                  </button>
                </div>
              </div>

              {/* Panel de Pistas de Audio y Control */}
              <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1E293B]">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                      Compendio Acústico
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
                      {activeTome.title}
                    </h2>
                    <p className="text-xs text-[#94A3B8] font-light">
                      {activeTome.subtitle}
                    </p>
                  </div>

                  {/* Lista de Pistas del Tomo */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono uppercase text-[#64748B] block">
                      Selecciona una pista para previsualizar:
                    </span>
                    {activeTome.audioTracks.map((track) => {
                      const isCurrent = activeTrack?.id === track.id;
                      return (
                        <div
                          key={track.id}
                          onClick={() => togglePlayAudio(track)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                            isCurrent
                              ? 'bg-[#161F30] border-[#22D3EE]/50 shadow-[0_0_15px_rgba(34,211,238,0.15)]'
                              : 'bg-[#121824]/60 border-[#1E293B] hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <button
                              className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                                isCurrent && isPlaying
                                  ? 'bg-[#22D3EE] text-[#06080D]'
                                  : 'bg-[#1E293B] text-white hover:bg-[#334155]'
                              }`}
                            >
                              {isCurrent && isPlaying ? '⏸' : '▶'}
                            </button>
                            <div>
                              <div className="text-xs font-semibold text-white flex items-center gap-2">
                                {track.name}
                                <span className="text-[10px] font-mono text-[#D4AF37] px-1.5 py-0.5 rounded bg-[#D4AF37]/10">
                                  {track.bpm} BPM
                                </span>
                              </div>
                              <div className="text-[11px] text-[#64748B]">
                                {track.keyScale} • {track.soundElements.join(', ')}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs font-mono text-[#94A3B8]">
                            {Math.round(track.durationSeconds / 60)}m
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Reproductor Activo & Waveform Mock */}
                {activeTrack && (
                  <div className="mt-6 pt-4 border-t border-[#1E293B] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#22D3EE] font-mono font-medium flex items-center gap-1.5">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse" />
                        {activeTrack.code} ({isPlaying ? 'Reproduciendo Audio Preview' : 'Pausado'})
                      </span>
                      <span className="text-[#64748B] font-mono">Master: -14 LUFS (Estudio)</span>
                    </div>

                    {/* Waveform simulada animada */}
                    <div className="h-8 flex items-end gap-1 px-1 bg-[#06080D] rounded-lg p-1.5 overflow-hidden">
                      {Array.from({ length: 36 }).map((_, i) => {
                        const randomHeight = isPlaying
                          ? 20 + Math.sin(i * 0.5) * 15 + ((i % 5) * 6)
                          : 20 + (i % 4) * 8;
                        return (
                          <div
                            key={i}
                            className={`w-full rounded-sm transition-all duration-300 ${
                              isPlaying ? 'bg-[#22D3EE]' : 'bg-[#334155]'
                            }`}
                            style={{ height: `${Math.min(100, Math.max(15, randomHeight))}%` }}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Cuadrícula de Todos los Tomos Disponibles */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-serif font-bold text-white">
                Catálogo de Códices y Registros
              </h3>
              <p className="text-xs text-[#94A3B8]">
                Explora cada bóveda acústica por reino y propósito cognitivo
              </p>
            </div>
            <span className="text-xs font-mono text-[#64748B]">
              {filteredTomes.length} {filteredTomes.length === 1 ? 'Tomo' : 'Tomos'} Registrados
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTomes.map((tome) => {
              const isSelected = activeTome?.id === tome.id;
              return (
                <article
                  key={tome.id}
                  onClick={() => handleSelectTome(tome)}
                  className={`group rounded-xl border p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#121824] border-[#22D3EE]/50 shadow-[0_0_20px_rgba(34,211,238,0.15)] ring-1 ring-[#22D3EE]/30'
                      : 'bg-[#0A0E17]/80 border-[#1E293B] hover:border-white/20 hover:bg-[#121824]/60'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="relative aspect-video rounded-lg overflow-hidden bg-black/40">
                      <img
                        src={tome.coverImageUrl}
                        alt={tome.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-black/70 text-white backdrop-blur-sm border border-white/10">
                        {tome.romanNumeral}
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-[#22D3EE] backdrop-blur-sm border border-[#22D3EE]/30">
                        {Math.round(tome.totalDurationSeconds / 60)} min
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                        {tome.targetMindset}
                      </div>
                      <h4 className="text-base font-serif font-bold text-white group-hover:text-[#22D3EE] transition-colors line-clamp-1">
                        {tome.title}
                      </h4>
                      <p className="text-xs text-[#94A3B8] font-light line-clamp-2">
                        {tome.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#1E293B]/70 flex items-center justify-between text-xs">
                    <span className="text-[#64748B] font-mono">
                      {tome.audioTracks.length} Pistas IA
                    </span>
                    <span className="text-[#22D3EE] font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Abrir Códice →
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      {/* Modal Inmersivo de Lore y Registro de Tomo */}
      {isLoreModalOpen && activeTome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="max-w-2xl w-full bg-[#0E131F] border border-[#1E293B] rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsLoreModalOpen(false)}
              className="absolute top-5 right-5 text-[#94A3B8] hover:text-white text-lg"
            >
              ✕
            </button>

            <div className="space-y-2 border-b border-[#1E293B] pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                Manuscrito del Gran Arcano • {activeTome.romanNumeral}
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                {activeTome.title}
              </h3>
              <p className="text-xs text-[#22D3EE] font-mono">
                Universo: {activeTome.universe.toUpperCase()}
              </p>
            </div>

            <div className="space-y-4 text-sm text-[#CBD5E1] leading-relaxed font-light">
              <blockquote className="border-l-2 border-[#D4AF37] pl-4 italic text-[#E5C158] bg-[#D4AF37]/5 py-2 rounded-r-md">
                "{activeTome.narrativeDescription}"
              </blockquote>

              <h4 className="text-xs font-mono uppercase tracking-wider text-white pt-2">
                Arquitectura de Frecuencias (Tracklist Master):
              </h4>
              <div className="space-y-3">
                {activeTome.audioTracks.map((tr) => (
                  <div key={tr.id} className="bg-[#121824] p-3 rounded-lg border border-[#1E293B] text-xs space-y-1">
                    <div className="flex items-center justify-between font-semibold text-white">
                      <span>{tr.code}: {tr.name}</span>
                      <span className="text-[#D4AF37] font-mono">{tr.bpm} BPM</span>
                    </div>
                    <p className="text-[11px] text-[#94A3B8]">
                      <strong className="text-white/80">Prompt IA:</strong> {tr.prompt}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#1E293B]">
              <button
                onClick={() => setIsLoreModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors"
              >
                Cerrar Manuscrito
              </button>
              <a
                href={activeTome.youtubeUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg bg-[#22D3EE] text-[#06080D] hover:bg-[#38BDF8] transition-all"
              >
                Ver en YouTube Studio
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArchiveShowcase;
