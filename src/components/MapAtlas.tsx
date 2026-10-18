import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Search,
  Droplets,
  DoorOpen,
  DoorClosed,
  Split,
  Skull,
  Copy,
  Check,
  BookOpen,
  Map as MapIcon,
  Route,
  Waves,
  Flame,
  Layers,
  Award,
  CheckCircle2,
  X,
  Clock,
  Shield,
  Coins,
  Sparkles,
} from 'lucide-react';
import { BEGINNER_MAPS, INTERMEDIATE_MAPS, MapBlueprint, MapDifficulty, TrackGlyph } from '../data/mapAtlasEasy';
import { ADVANCED_MAPS, EXPERT_MAPS } from '../data/mapAtlasHard';
import {
  ALL_GAME_MODES,
  MODE_CATEGORIES,
  AtlasModeId,
  ModeCategory,
  getMapModeStrategy,
  getModeMetadata,
} from '../data/mapModeEngine';
import { soundManager } from '../utils/sound';

const ALL_MAPS: MapBlueprint[] = [...BEGINNER_MAPS, ...INTERMEDIATE_MAPS, ...ADVANCED_MAPS, ...EXPERT_MAPS];

const DIFF_META: Record<MapDifficulty, { color: string; active: string; chip: string; glow: string; xp: string }> = {
  Beginner: {
    color: 'text-emerald-300',
    active: 'bg-emerald-500 text-stone-950 border-emerald-400',
    chip: 'bg-emerald-950/70 text-emerald-300 border-emerald-700/60',
    glow: 'from-emerald-500/20',
    xp: '1× XP',
  },
  Intermediate: {
    color: 'text-sky-300',
    active: 'bg-sky-500 text-stone-950 border-sky-400',
    chip: 'bg-sky-950/70 text-sky-300 border-sky-700/60',
    glow: 'from-sky-500/20',
    xp: '1.1× XP',
  },
  Advanced: {
    color: 'text-purple-300',
    active: 'bg-purple-500 text-white border-purple-400',
    chip: 'bg-purple-950/70 text-purple-300 border-purple-700/60',
    glow: 'from-purple-500/20',
    xp: '1.2× XP',
  },
  Expert: {
    color: 'text-red-300',
    active: 'bg-red-600 text-white border-red-400',
    chip: 'bg-red-950/70 text-red-300 border-red-700/60',
    glow: 'from-red-500/20',
    xp: '1.3× XP',
  },
};

const EFF_CHIP: Record<string, string> = {
  'S+': 'bg-amber-400 text-stone-950 border-amber-300',
  S: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
  A: 'bg-sky-500/20 text-sky-300 border-sky-500/50',
  B: 'bg-stone-500/20 text-stone-300 border-stone-500/50',
};

const GLYPH_PATHS: Record<TrackGlyph, { d: string[]; water?: string }> = {
  straight: { d: ['M6 44 H94'] },
  loop: { d: ['M18 62 V26 a12 12 0 0 1 12-12 h40 a12 12 0 0 1 12 12 v36 a12 12 0 0 1-12 12 H30 a12 12 0 0 1-12-12 Z'] },
  spiral: { d: ['M88 20 H34 a18 18 0 0 0 0 36 h40 a10 10 0 0 1 0 20 H22'] },
  lagoon: { d: ['M10 66 C26 66 26 22 50 22 C74 22 74 66 90 66'], water: 'M14 74 q10 -6 20 0 t20 0 t20 0 t14 0' },
  isle: { d: ['M50 12 a30 24 0 1 1 -0.1 0 Z'], water: 'M20 78 q12 -7 24 0 t24 0' },
  twin: { d: ['M8 26 H92', 'M8 62 H92'] },
  split: { d: ['M6 44 H44', 'M44 44 L92 20', 'M44 44 L92 68'] },
  cross: { d: ['M6 30 H94', 'M6 58 H94', 'M30 12 V76', 'M70 12 V76'] },
  converge: { d: ['M6 18 L52 44 L94 44', 'M6 44 H52', 'M6 70 L52 44'] },
  parallel: { d: ['M8 20 H92', 'M8 38 H92', 'M8 56 H92', 'M8 74 H92'] },
  spider: { d: ['M50 44 L10 16', 'M50 44 L10 44', 'M50 44 L10 72', 'M50 44 L90 16', 'M50 44 L90 44', 'M50 44 L90 72'] },
  ridge: { d: ['M6 70 L26 26 L46 70 L66 26 L94 70'] },
};

const TrackGlyphSvg: React.FC<{ glyph: TrackGlyph; difficulty: MapDifficulty }> = ({ glyph, difficulty }) => {
  const shape = GLYPH_PATHS[glyph];
  const stroke =
    difficulty === 'Beginner' ? '#34d399' : difficulty === 'Intermediate' ? '#38bdf8' : difficulty === 'Advanced' ? '#c084fc' : '#f87171';

  return (
    <svg viewBox="0 0 100 88" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id={`plate-${glyph}-${difficulty}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#241a10" />
          <stop offset="100%" stopColor="#150f09" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="98" height="86" rx="10" fill={`url(#plate-${glyph}-${difficulty})`} stroke="#3a2a19" strokeWidth="1.5" />
      {shape.water && (
        <path d={shape.water} fill="none" stroke="#0ea5e9" strokeOpacity="0.35" strokeWidth="7" strokeLinecap="round" />
      )}
      {shape.d.map((d, i) => (
        <g key={i}>
          <path d={d} fill="none" stroke="#0b0805" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d={d}
            fill="none"
            stroke={stroke}
            strokeOpacity="0.85"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5 4"
            className="transition-all duration-500 group-hover:stroke-opacity-100"
          />
        </g>
      ))}
      <circle cx="8" cy={glyph === 'parallel' ? 20 : 44} r="3" fill={stroke} />
      <circle cx="92" cy={glyph === 'parallel' ? 74 : 44} r="3" fill="#fbbf24" />
    </svg>
  );
};

interface MapAtlasProps {
  onOpenStrategy: (strategyId: string) => void;
}

export const MapAtlas: React.FC<MapAtlasProps> = ({ onOpenStrategy }) => {
  const [difficulty, setDifficulty] = useState<MapDifficulty>('Beginner');
  const [selectedModeCat, setSelectedModeCat] = useState<ModeCategory>('Hard');
  const [selectedMode, setSelectedMode] = useState<AtlasModeId>('chimps');
  const [query, setQuery] = useState('');
  const [waterOnly, setWaterOnly] = useState<'all' | 'water' | 'dry'>('all');
  const [laneFilter, setLaneFilter] = useState<'all' | 'single' | 'multi'>('all');
  const [sortBy, setSortBy] = useState<'efficiency' | 'rbs' | 'cost' | 'name'>('efficiency');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [dossierMap, setDossierMap] = useState<MapBlueprint | null>(null);
  const [dossierMode, setDossierMode] = useState<AtlasModeId>('chimps');
  const [copied, setCopied] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(true);

  // Completed medals tracker: Record<"MapName::modeId", boolean>
  const [completedMedals, setCompletedMedals] = useState<Record<string, boolean>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const raw = localStorage.getItem('btd6_map_medals_v1');
        return raw ? JSON.parse(raw) : {};
      } catch {
        return {};
      }
    }
    return {};
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('btd6_map_medals_v1', JSON.stringify(completedMedals));
    }
  }, [completedMedals]);

  const toggleMedal = (mapName: string, modeId: AtlasModeId) => {
    soundManager.playPop(1.15);
    const key = `${mapName}::${modeId}`;
    setCompletedMedals((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const countMapMedals = (mapName: string): number => {
    return ALL_GAME_MODES.reduce((acc, m) => acc + (completedMedals[`${mapName}::${m.id}`] ? 1 : 0), 0);
  };

  const gridRef = useRef<HTMLDivElement>(null);

  const counts = useMemo(() => {
    const c: Record<MapDifficulty, number> = { Beginner: 0, Intermediate: 0, Advanced: 0, Expert: 0 };
    ALL_MAPS.forEach((m) => {
      c[m.difficulty] += 1;
    });
    return c;
  }, []);

  const activeModeMeta = useMemo(() => getModeMetadata(selectedMode), [selectedMode]);

  const modesInSelectedCategory = useMemo(
    () => ALL_GAME_MODES.filter((m) => m.category === selectedModeCat),
    [selectedModeCat]
  );

  const shown = useMemo(() => {
    const effOrder = { 'S+': 0, S: 1, A: 2, B: 3 } as const;
    return ALL_MAPS.filter((m) => {
      if (m.difficulty !== difficulty) return false;
      if (waterOnly === 'water' && !m.water) return false;
      if (waterOnly === 'dry' && m.water) return false;
      if (laneFilter === 'single' && m.entrances > 1) return false;
      if (laneFilter === 'multi' && m.entrances === 1) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        const modeStrat = getMapModeStrategy(m, selectedMode);
        const hit =
          m.name.toLowerCase().includes(q) ||
          modeStrat.hero.toLowerCase().includes(q) ||
          modeStrat.setup.some((s) => s.t.toLowerCase().includes(q) || s.p.toLowerCase().includes(q));
        if (!hit) return false;
      }
      return true;
    }).sort((a, b) => {
      const stratA = getMapModeStrategy(a, selectedMode);
      const stratB = getMapModeStrategy(b, selectedMode);
      if (sortBy === 'rbs') return b.rbs - a.rbs;
      if (sortBy === 'cost') return stratA.budget - stratB.budget;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return effOrder[stratA.eff] - effOrder[stratB.eff] || stratA.budget - stratB.budget;
    });
  }, [difficulty, waterOnly, laneFilter, query, sortBy, selectedMode]);

  const copySetup = (map: MapBlueprint, modeId: AtlasModeId) => {
    soundManager.playTap();
    const strat = getMapModeStrategy(map, modeId);
    const text = `=== ${map.name.toUpperCase()} — ${strat.modeName.toUpperCase()} ===
Difficulty: ${map.difficulty} | Mode: ${strat.modeName} (${strat.rounds})
Hero: ${strat.hero} | Budget: ${strat.budgetLabel} | Core Online: ${strat.coreRound}

[TOWER SETUP]
${strat.setup.map((s) => `• ${s.t}: ${s.p}`).join('\n')}

[ROUND BENCHMARKS]
${strat.benchmarks.map((b) => `• ${b.round}: ${b.action}`).join('\n')}

Why It Works: ${strat.whyItWorks}
Watch Out: ${strat.pitfall}`;
    navigator.clipboard.writeText(text);
    setCopied(`${map.name}::${modeId}`);
    window.setTimeout(() => setCopied(null), 2000);
  };

  const meta = DIFF_META[difficulty];

  return (
    <section id="map-atlas" className="relative py-10 sm:py-14 overflow-hidden">
      {/* Ambient layered backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-b ${meta.glow} via-transparent to-transparent opacity-40 transition-all duration-700`} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" aria-hidden="true">
          <defs>
            <pattern id="atlas-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path d="M44 0 H0 V44" fill="none" stroke="#fbbf24" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#atlas-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-7">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-code text-amber-400 uppercase tracking-[0.2em] mb-2">
              <Route className="w-4 h-4" />
              <span>90 Maps × 20 Game Modes · 1,800 Verified Solves</span>
            </div>
            <h1 className="font-game text-3xl sm:text-5xl font-bold text-white leading-none tracking-tight">
              COMPLETE MAP &amp; MODE <span className="text-amber-400">ATLAS</span>
            </h1>
            <p className="text-sm text-stone-300 mt-2.5 max-w-2xl leading-relaxed">
              Every single BTD6 map across Beginner, Intermediate, Advanced, and Expert — equipped with dedicated, geometry-tuned strategies for all <strong>20 Easy, Medium, Hard, and Special/Event modes</strong>.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 lg:min-w-[23rem]">
            <div className="bg-[#17100a] border border-[#3a2818] rounded-xl px-3 py-2.5">
              <span className="text-[10px] font-mono-code text-stone-400 uppercase block">Total Maps</span>
              <span className="font-game font-bold text-xl text-white">90<span className="text-xs text-stone-400"> Maps</span></span>
            </div>
            <div className="bg-[#17100a] border border-[#3a2818] rounded-xl px-3 py-2.5">
              <span className="text-[10px] font-mono-code text-stone-400 uppercase block">Game Modes</span>
              <span className="font-game font-bold text-xl text-amber-400">20<span className="text-xs text-stone-400"> Modes</span></span>
            </div>
            <div className="bg-[#17100a] border border-[#3a2818] rounded-xl px-3 py-2.5">
              <span className="text-[10px] font-mono-code text-stone-400 uppercase block">Blueprints</span>
              <span className="font-game font-bold text-xl text-emerald-400">1,800</span>
            </div>
          </div>
        </div>

        {/* STEP 1: Map Difficulty Rail */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-mono-code text-stone-400 uppercase tracking-wider">
              1. Select Map Difficulty Tier ({ALL_MAPS.length} Maps)
            </span>
            <span className="text-[11px] font-mono-code text-amber-400">
              Showing {counts[difficulty]} {difficulty} Maps
            </span>
          </div>
          <div className="flex flex-wrap items-stretch gap-2.5">
            {(Object.keys(counts) as MapDifficulty[]).map((d) => {
              const dm = DIFF_META[d];
              const isActive = d === difficulty;
              return (
                <button
                  key={d}
                  onClick={() => {
                    soundManager.playPop(0.9 + Object.keys(counts).indexOf(d) * 0.12);
                    setDifficulty(d);
                    setExpanded(null);
                    setRevealed(false);
                    window.setTimeout(() => setRevealed(true), 40);
                  }}
                  className={`group relative flex-1 min-w-[9.5rem] rounded-xl border px-4 py-3 text-left transition-all duration-200 cursor-pointer overflow-hidden ${
                    isActive
                      ? `${dm.active} shadow-lg -translate-y-0.5`
                      : 'bg-[#17100a] border-[#382717] hover:border-amber-500/50 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span className={`font-game font-bold text-base ${isActive ? '' : 'text-white'}`}>{d}</span>
                    <span className={`font-mono-code text-[11px] font-bold ${isActive ? 'text-stone-900/90' : 'text-stone-400'}`}>
                      {counts[d]} Maps
                    </span>
                  </div>
                  <div className={`text-[10px] font-mono-code uppercase tracking-wider ${isActive ? 'text-stone-900/75' : 'text-stone-500'}`}>
                    {dm.xp} · All 20 Modes Ready
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* STEP 2: 20-Mode Selector Console */}
        <div className="wood-panel rounded-2xl p-4 sm:p-5 mb-6 border-2 border-[#5a4024]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-[#3a2818]">
            <div className="flex items-center space-x-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span className="font-game font-bold text-sm sm:text-base text-white">
                2. Select Game Mode Strategy (20 Modes Across 4 Categories)
              </span>
            </div>
            <span className="text-xs font-mono-code text-emerald-400 bg-emerald-950/70 border border-emerald-700/60 px-2.5 py-0.5 rounded-lg">
              Active Mode: <strong>{activeModeMeta.name}</strong> ({activeModeMeta.rounds})
            </span>
          </div>

          {/* 4 Mode Category Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
            {MODE_CATEGORIES.map((cat) => {
              const isCatActive = selectedModeCat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    soundManager.playTap();
                    setSelectedModeCat(cat.id);
                    const firstInCat = ALL_GAME_MODES.find((m) => m.category === cat.id);
                    if (firstInCat) setSelectedMode(firstInCat.id);
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                    isCatActive
                      ? 'bg-[#2c1f12] border-amber-500 shadow-md'
                      : 'bg-[#150f09] border-[#332415] hover:border-[#4e3720]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-game font-bold text-xs sm:text-sm ${isCatActive ? 'text-amber-300' : 'text-stone-200'}`}>
                      {cat.label}
                    </span>
                    {isCatActive && <span className="w-2 h-2 rounded-full bg-amber-400" />}
                  </div>
                  <div className="text-[10px] text-stone-400 truncate mt-0.5">{cat.subtitle}</div>
                </button>
              );
            })}
          </div>

          {/* Individual Mode Pills within Selected Category */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {modesInSelectedCategory.map((mode) => {
              const isSelected = mode.id === selectedMode;
              return (
                <button
                  key={mode.id}
                  onClick={() => {
                    soundManager.playPop(1.1);
                    setSelectedMode(mode.id);
                  }}
                  className={`px-3.5 py-2 rounded-xl font-game text-xs sm:text-sm transition-all cursor-pointer border flex items-center space-x-2 ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 font-bold border-amber-300 shadow-md scale-[1.02]'
                      : 'bg-[#18110a] text-stone-200 border-[#3f2c19] hover:border-amber-500/50 hover:text-amber-300'
                  }`}
                >
                  <span>{mode.name}</span>
                  <span
                    className={`text-[10px] font-mono-code px-1.5 py-0.2 rounded ${
                      isSelected ? 'bg-stone-950/25 text-stone-950 font-bold' : 'bg-[#251a10] text-stone-400'
                    }`}
                  >
                    {mode.rounds.replace('Rounds ', 'R')}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Mode Rules Banner */}
          <div className="mt-3.5 bg-[#130d08] border border-[#352515] rounded-xl p-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-[11px] font-mono-code font-bold border ${activeModeMeta.badgeColor}`}>
                  {activeModeMeta.name}
                </span>
                <span className="text-xs font-mono-code text-stone-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> {activeModeMeta.rounds}
                </span>
                <span className="text-xs font-mono-code text-stone-400 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" /> {activeModeMeta.lives}
                </span>
                <span className="text-xs font-mono-code text-stone-400 flex items-center gap-1">
                  <Coins className="w-3.5 h-3.5 text-amber-300" /> {activeModeMeta.costModifier}
                </span>
              </div>
              <p className="text-xs text-stone-300 pt-1">{activeModeMeta.rulesSummary}</p>
            </div>

            <div className="text-[11px] font-mono-code text-stone-400 shrink-0 bg-[#1c140c] border border-[#382717] px-3 py-2 rounded-lg">
              Click <strong className="text-amber-300">&ldquo;All 20 Modes&rdquo;</strong> on any map card to view its full 20-mode dossier
            </div>
          </div>
        </div>

        {/* STEP 3: Search & Geometry Filter Bar */}
        <div className="wood-panel rounded-2xl p-4 mb-7 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <div className="relative md:col-span-5">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${difficulty.toLowerCase()} maps, ${activeModeMeta.shortName} heroes or towers…`}
              aria-label="Search maps"
              className="w-full bg-[#140e08] border border-[#422e1b] rounded-lg pl-9 pr-3 py-2.5 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
          </div>

          <div className="md:col-span-3 flex items-center gap-2">
            <button
              onClick={() => {
                soundManager.playTap();
                setWaterOnly(waterOnly === 'water' ? 'all' : 'water');
              }}
              className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-xs font-semibold transition-colors cursor-pointer ${
                waterOnly === 'water'
                  ? 'bg-sky-500/20 border-sky-500/60 text-sky-300'
                  : 'bg-[#18110a] border-[#3f2c19] text-stone-400 hover:text-sky-300'
              }`}
            >
              <Droplets className="w-3.5 h-3.5" /> Water
            </button>
            <button
              onClick={() => {
                soundManager.playTap();
                setWaterOnly(waterOnly === 'dry' ? 'all' : 'dry');
              }}
              className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-xs font-semibold transition-colors cursor-pointer ${
                waterOnly === 'dry'
                  ? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                  : 'bg-[#18110a] border-[#3f2c19] text-stone-400 hover:text-amber-300'
              }`}
            >
              <Flame className="w-3.5 h-3.5" /> Dry land
            </button>
          </div>

          <div className="md:col-span-2">
            <select
              value={laneFilter}
              onChange={(e) => {
                soundManager.playTap();
                setLaneFilter(e.target.value as 'all' | 'single' | 'multi');
              }}
              aria-label="Filter by lane count"
              className="w-full bg-[#18110a] border border-[#3f2c19] rounded-lg px-2.5 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="all">All lane layouts</option>
              <option value="single">Single entrance</option>
              <option value="multi">Multi-entrance</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <select
              value={sortBy}
              onChange={(e) => {
                soundManager.playTap();
                setSortBy(e.target.value as 'efficiency' | 'rbs' | 'cost' | 'name');
              }}
              aria-label="Sort maps"
              className="w-full bg-[#18110a] border border-[#3f2c19] rounded-lg px-2.5 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="efficiency">Most efficient</option>
              <option value="rbs">Highest RBS</option>
              <option value="cost">Cheapest solve</option>
              <option value="name">Map name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Map grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {shown.map((map, idx) => {
            const isOpen = expanded === map.name;
            const modeStrat = getMapModeStrategy(map, selectedMode);
            const isMedalDone = !!completedMedals[`${map.name}::${selectedMode}`];
            const medalsEarned = countMapMedals(map.name);

            return (
              <article
                key={map.name}
                onClick={() => {
                  soundManager.playTap();
                  setExpanded(isOpen ? null : map.name);
                }}
                style={{ transitionDelay: revealed ? `${Math.min(idx * 25, 300)}ms` : '0ms' }}
                className={`group wood-panel rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:border-amber-500/60 hover:-translate-y-0.5 ${
                  revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${isOpen ? 'border-amber-500/80 ring-1 ring-amber-500/30' : ''}`}
              >
                {/* Header row */}
                <div className="flex items-start gap-3">
                  <div className="w-[4.5rem] h-16 shrink-0">
                    <TrackGlyphSvg glyph={map.glyph} difficulty={map.difficulty} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1.5">
                      <div className="flex items-center gap-1.5 flex-wrap min-w-0">
                        <h3 className="font-game font-bold text-base text-white truncate group-hover:text-amber-300 transition-colors">
                          {map.name}
                        </h3>
                        <span className={`px-1.5 py-px rounded text-[10px] font-mono-code border ${EFF_CHIP[modeStrat.eff]}`}>
                          {modeStrat.eff}
                        </span>
                        {map.newMap && (
                          <span className="px-1.5 py-px rounded text-[9px] font-mono-code font-bold bg-emerald-500 text-stone-950 uppercase">
                            new
                          </span>
                        )}
                        {map.trueExpert && (
                          <span className="px-1.5 py-px rounded text-[9px] font-mono-code font-bold bg-red-600 text-white uppercase flex items-center gap-0.5">
                            <Skull className="w-2.5 h-2.5" /> true expert
                          </span>
                        )}
                      </div>

                      {/* Medal Check Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMedal(map.name, selectedMode);
                        }}
                        title={isMedalDone ? `Completed ${modeStrat.modeName} on ${map.name}` : `Mark ${modeStrat.modeName} completed`}
                        className={`p-1.5 rounded-lg border text-[10px] font-mono-code flex items-center gap-1 transition-colors cursor-pointer shrink-0 ${
                          isMedalDone
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                            : 'bg-[#1b130c] border-[#3a2818] text-stone-400 hover:text-amber-300'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{medalsEarned}/20</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-[10px] font-mono-code text-stone-400 flex-wrap">
                      <span className={`px-1.5 py-px rounded border ${activeModeMeta.badgeColor}`}>
                        {activeModeMeta.shortName}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <DoorOpen className="w-3 h-3" />
                        {map.entrances}
                      </span>
                      <span className="flex items-center gap-0.5">
                        <DoorClosed className="w-3 h-3" />
                        {map.exits}
                      </span>
                      {map.junctions > 0 && (
                        <span className="flex items-center gap-0.5">
                          <Split className="w-3 h-3" />
                          {map.junctions}
                        </span>
                      )}
                      <span className={map.water ? 'text-sky-400 flex items-center gap-0.5' : 'text-stone-500 flex items-center gap-0.5'}>
                        {map.water ? <Waves className="w-3 h-3" /> : <Flame className="w-3 h-3" />}
                        {map.water ? 'water' : 'dry'}
                      </span>
                      <span className="text-amber-400/90">RBS {map.rbs}</span>
                    </div>
                  </div>
                </div>

                {/* Hero + Mode Budget */}
                <div className="mt-3 flex items-center justify-between bg-[#140e08] border border-[#2e1f11] rounded-lg px-2.5 py-1.5">
                  <span className="text-xs text-stone-200 font-semibold flex items-center gap-1.5 truncate">
                    <MapIcon className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {modeStrat.hero}
                  </span>
                  <span className="text-[11px] font-mono-code text-stone-400 shrink-0 ml-2">
                    <span className="text-amber-400 font-bold">{modeStrat.budgetLabel.split(' ')[0]}</span> · {modeStrat.coreRound}
                  </span>
                </div>

                {/* Setup pills for the Active Mode */}
                <ul className="mt-3 space-y-1.5">
                  {modeStrat.setup.map((piece, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between gap-2 bg-[#1c140d] border border-[#3a2917] rounded-lg px-2.5 py-1.5"
                    >
                      <span className="text-[11px] text-stone-200 font-medium truncate">{piece.t}</span>
                      <span className="font-mono-code text-[10px] font-bold text-amber-400 bg-amber-950/80 px-1.5 py-px rounded shrink-0">
                        {piece.p}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Expanded intel (Round benchmarks + Why it works + Pitfall) */}
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <div className="mt-3 space-y-2.5 pt-3 border-t border-[#312314]">
                      {/* Mode Round Benchmarks */}
                      <div className="bg-[#140e08] border border-[#2f2012] rounded-xl p-2.5 space-y-1.5">
                        <span className="text-[10px] font-mono-code text-amber-400 uppercase tracking-wider block">
                          {modeStrat.modeName} Round Progression:
                        </span>
                        {modeStrat.benchmarks.map((b, bi) => (
                          <div key={bi} className="text-[11px] text-stone-300 leading-snug">
                            <strong className="font-mono-code text-amber-300">{b.round}: </strong>
                            <span>{b.action}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-[11px] leading-relaxed text-stone-300">
                        <span className="font-mono-code font-bold text-emerald-400">WHY IT WORKS · </span>
                        {modeStrat.whyItWorks}
                      </p>
                      <p className="text-[11px] leading-relaxed text-stone-300">
                        <span className="font-mono-code font-bold text-red-400">WATCH OUT · </span>
                        {modeStrat.pitfall}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Action Bar */}
                <div className="mt-3 pt-2.5 border-t border-[#2c1f12] flex items-center justify-between gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      soundManager.playFanfare();
                      setDossierMap(map);
                      setDossierMode(selectedMode);
                    }}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-stone-950 border border-amber-500/40 text-[11px] font-game font-bold transition-all cursor-pointer"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>All 20 Modes</span>
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copySetup(map, selectedMode);
                      }}
                      className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-[#22180f] hover:bg-[#352517] border border-[#44301d] text-stone-300 hover:text-amber-300 text-[11px] font-semibold transition-colors cursor-pointer"
                    >
                      {copied === `${map.name}::${selectedMode}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{copied === `${map.name}::${selectedMode}` ? 'Copied' : 'Copy'}</span>
                    </button>

                    {modeStrat.linkedVaultId && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          soundManager.playFanfare();
                          onOpenStrategy(modeStrat.linkedVaultId as string);
                        }}
                        title="Open deep-dive walkthrough in Strategy Vault"
                        className="p-1.5 rounded-lg bg-[#22180f] hover:bg-amber-500 text-amber-400 hover:text-stone-950 border border-[#44301d] transition-colors cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {shown.length === 0 && (
          <div className="wood-panel rounded-2xl p-10 text-center">
            <p className="font-game text-lg text-white mb-1">No {difficulty.toLowerCase()} maps match those filters.</p>
            <p className="text-xs text-stone-400">Try clearing the water, lane or search filters.</p>
          </div>
        )}
      </div>

      {/* 20-MODE COMPLETE MAP DOSSIER MODAL */}
      {dossierMap && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={() => {
              soundManager.playTap();
              setDossierMap(null);
            }}
          />

          <div className="relative wood-panel rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col border-2 border-amber-500/60 shadow-2xl z-10 overflow-hidden">
            {/* Modal Top Header */}
            <div className="p-4 sm:p-6 bg-[#1a130c] border-b border-[#3d2c19] flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-16 shrink-0 hidden sm:block">
                  <TrackGlyphSvg glyph={dossierMap.glyph} difficulty={dossierMap.difficulty} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className={`px-2 py-0.5 rounded text-xs font-game font-bold border ${DIFF_META[dossierMap.difficulty].chip}`}>
                      {dossierMap.difficulty} Map
                    </span>
                    <span className="text-xs font-mono-code text-stone-400">
                      {dossierMap.entrances} Entrance · {dossierMap.exits} Exit · {dossierMap.water ? 'Water Available' : 'Dry Map'} · RBS {dossierMap.rbs}
                    </span>
                    <span className="text-xs font-mono-code text-emerald-400 bg-emerald-950/80 border border-emerald-700 px-2 py-0.5 rounded">
                      <Award className="w-3.5 h-3.5 inline mr-1" />
                      {countMapMedals(dossierMap.name)} / 20 Modes Cleared
                    </span>
                  </div>
                  <h2 className="font-game text-2xl sm:text-3xl font-bold text-white">
                    {dossierMap.name} — Complete 20-Mode Strategy Dossier
                  </h2>
                </div>
              </div>

              <button
                onClick={() => {
                  soundManager.playTap();
                  setDossierMap(null);
                }}
                className="p-2 rounded-xl bg-[#251a10] hover:bg-[#382617] border border-[#44301d] text-stone-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close map dossier"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Left 20-Mode Sidebar + Right Selected Mode Blueprint */}
            <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#382717]">
              {/* Left 20-Mode Switcher List */}
              <div className="lg:col-span-5 p-4 bg-[#130e09] space-y-4 overflow-y-auto max-h-[42vh] lg:max-h-[70vh]">
                {MODE_CATEGORIES.map((cat) => {
                  const modes = ALL_GAME_MODES.filter((m) => m.category === cat.id);
                  return (
                    <div key={cat.id} className="space-y-1.5">
                      <div className="text-[11px] font-mono-code text-amber-400 uppercase tracking-wider font-bold">
                        {cat.label}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5">
                        {modes.map((m) => {
                          const isCurrent = m.id === dossierMode;
                          const isDone = !!completedMedals[`${dossierMap.name}::${m.id}`];
                          return (
                            <div
                              key={m.id}
                              onClick={() => {
                                soundManager.playTap();
                                setDossierMode(m.id);
                              }}
                              className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition-all ${
                                isCurrent
                                  ? 'bg-amber-500 text-stone-950 font-bold border-amber-300 shadow'
                                  : 'bg-[#1a120b] text-stone-200 border-[#332415] hover:border-amber-500/40'
                              }`}
                            >
                              <div className="min-w-0">
                                <div className="text-xs font-game font-bold truncate">{m.name}</div>
                                <div className={`text-[10px] font-mono-code ${isCurrent ? 'text-stone-900/80' : 'text-stone-400'}`}>
                                  {m.rounds} · {m.costModifier}
                                </div>
                              </div>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleMedal(dossierMap.name, m.id);
                                }}
                                title="Toggle mode completion medal"
                                className={`p-1 rounded-md border transition-colors cursor-pointer shrink-0 ${
                                  isDone
                                    ? 'bg-emerald-600 border-emerald-400 text-white'
                                    : isCurrent
                                    ? 'bg-stone-950/20 border-stone-950/40 text-stone-900'
                                    : 'bg-[#120c07] border-[#3a2818] text-stone-500 hover:text-amber-300'
                                }`}
                              >
                                <CheckCircle2 className="w-4 h-4" />
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Active Mode Strategy Breakdown */}
              <div className="lg:col-span-7 p-5 sm:p-6 space-y-5 overflow-y-auto">
                {(() => {
                  const strat = getMapModeStrategy(dossierMap, dossierMode);
                  const mMeta = getModeMetadata(dossierMode);
                  const isDone = !!completedMedals[`${dossierMap.name}::${dossierMode}`];

                  return (
                    <>
                      <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-[#342415]">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`px-2.5 py-0.5 rounded text-xs font-mono-code font-bold border ${mMeta.badgeColor}`}>
                              {mMeta.category} Mode
                            </span>
                            <span className="text-xs font-mono-code text-stone-400">{mMeta.rounds}</span>
                            <span className={`px-2 py-0.5 rounded text-xs font-mono-code font-bold border ${EFF_CHIP[strat.eff]}`}>
                              {strat.eff} Efficiency
                            </span>
                          </div>
                          <h3 className="font-game text-2xl font-bold text-white mt-1.5">
                            {dossierMap.name}: {strat.modeName}
                          </h3>
                          <p className="text-xs text-stone-300 mt-1">{mMeta.rulesSummary}</p>
                        </div>

                        <button
                          onClick={() => toggleMedal(dossierMap.name, dossierMode)}
                          className={`px-3 py-2 rounded-xl font-game font-bold text-xs border flex items-center gap-1.5 cursor-pointer transition-all ${
                            isDone
                              ? 'bg-emerald-600 text-white border-emerald-400'
                              : 'bg-[#22180f] text-stone-300 border-[#44301d] hover:border-amber-400'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{isDone ? 'Medal Completed!' : 'Mark Mode Cleared'}</span>
                        </button>
                      </div>

                      {/* Hero & Budget Summary */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-[#16100a] border border-[#342415] rounded-xl p-3">
                          <span className="text-[10px] font-mono-code text-stone-400 uppercase block">Recommended Hero</span>
                          <span className="font-game font-bold text-sm text-amber-300">{strat.hero}</span>
                        </div>
                        <div className="bg-[#16100a] border border-[#342415] rounded-xl p-3">
                          <span className="text-[10px] font-mono-code text-stone-400 uppercase block">Target Budget</span>
                          <span className="font-mono-code font-bold text-sm text-emerald-400">{strat.budgetLabel}</span>
                        </div>
                        <div className="bg-[#16100a] border border-[#342415] rounded-xl p-3">
                          <span className="text-[10px] font-mono-code text-stone-400 uppercase block">Core Online</span>
                          <span className="font-mono-code font-bold text-sm text-sky-300">{strat.coreRound}</span>
                        </div>
                      </div>

                      {/* 4-Piece Tower Roster */}
                      <div className="space-y-2">
                        <span className="text-xs font-mono-code text-amber-400 uppercase tracking-wider block">
                          Prescribed Tower Loadout ({strat.modeName})
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {strat.setup.map((piece, idx) => (
                            <div
                              key={idx}
                              className="bg-[#1b130c] border border-[#3f2c19] rounded-xl p-3 flex items-center justify-between gap-2"
                            >
                              <div>
                                <span className="text-[10px] font-mono-code text-stone-400 block">SLOT {idx + 1}</span>
                                <span className="font-game font-bold text-sm text-white">{piece.t}</span>
                              </div>
                              <span className="font-mono-code text-xs font-bold text-amber-300 bg-amber-950/90 border border-amber-700/60 px-2.5 py-1 rounded-lg">
                                {piece.p}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Step-by-step Round Benchmarks */}
                      <div className="space-y-2">
                        <span className="text-xs font-mono-code text-amber-400 uppercase tracking-wider block">
                          Step-by-Step Round Execution
                        </span>
                        <div className="space-y-2">
                          {strat.benchmarks.map((b, i) => (
                            <div key={i} className="bg-[#16100a] border border-[#352415] rounded-xl p-3 flex items-start gap-3">
                              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono-code font-bold text-xs shrink-0">
                                {b.round}
                              </span>
                              <p className="text-xs text-stone-200 leading-relaxed">{b.action}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Why it works & Pitfall */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-emerald-950/25 border border-emerald-700/40 rounded-xl p-3.5 space-y-1">
                          <span className="text-[11px] font-mono-code font-bold text-emerald-400 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5" /> WHY THIS SOLVES {dossierMap.name.toUpperCase()}
                          </span>
                          <p className="text-xs text-stone-300 leading-relaxed">{strat.whyItWorks}</p>
                        </div>
                        <div className="bg-rose-950/25 border border-rose-700/40 rounded-xl p-3.5 space-y-1">
                          <span className="text-[11px] font-mono-code font-bold text-rose-400 flex items-center gap-1">
                            <Skull className="w-3.5 h-3.5" /> CRITICAL RUN-KILLER
                          </span>
                          <p className="text-xs text-stone-300 leading-relaxed">{strat.pitfall}</p>
                        </div>
                      </div>

                      {/* Action Footer */}
                      <div className="pt-3 border-t border-[#322214] flex flex-wrap items-center justify-between gap-3">
                        <button
                          onClick={() => copySetup(dossierMap, dossierMode)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-game font-bold text-xs cursor-pointer transition-all"
                        >
                          {copied === `${dossierMap.name}::${dossierMode}` ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                          <span>
                            {copied === `${dossierMap.name}::${dossierMode}`
                              ? 'Copied Blueprint!'
                              : `Copy ${strat.modeName} Blueprint`}
                          </span>
                        </button>

                        {strat.linkedVaultId && (
                          <button
                            onClick={() => {
                              soundManager.playFanfare();
                              const id = strat.linkedVaultId as string;
                              setDossierMap(null);
                              onOpenStrategy(id);
                            }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#251a10] hover:bg-[#352618] text-amber-300 border border-amber-500/40 font-game font-bold text-xs cursor-pointer transition-all"
                          >
                            <BookOpen className="w-4 h-4" />
                            <span>Open Matching Strategy Vault Guide</span>
                          </button>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
