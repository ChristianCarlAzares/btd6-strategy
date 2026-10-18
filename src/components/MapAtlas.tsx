import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, Droplets, DoorOpen, DoorClosed, Split, Skull, Copy, Check, BookOpen, Map as MapIcon, Route, Waves, Flame } from 'lucide-react';
import { BEGINNER_MAPS, INTERMEDIATE_MAPS, MapBlueprint, MapDifficulty, TrackGlyph } from '../data/mapAtlasEasy';
import { ADVANCED_MAPS, EXPERT_MAPS } from '../data/mapAtlasHard';
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

/** Stylised track previews — one shape language per map geometry. */
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
  const [query, setQuery] = useState('');
  const [waterOnly, setWaterOnly] = useState<'all' | 'water' | 'dry'>('all');
  const [laneFilter, setLaneFilter] = useState<'all' | 'single' | 'multi'>('all');
  const [sortBy, setSortBy] = useState<'efficiency' | 'rbs' | 'cost' | 'name'>('efficiency');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.06 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const counts = useMemo(() => {
    const c: Record<MapDifficulty, number> = { Beginner: 0, Intermediate: 0, Advanced: 0, Expert: 0 };
    ALL_MAPS.forEach((m) => {
      c[m.difficulty] += 1;
    });
    return c;
  }, []);

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
        const hit =
          m.name.toLowerCase().includes(q) ||
          m.hero.toLowerCase().includes(q) ||
          m.setup.some((s) => s.t.toLowerCase().includes(q) || s.p.toLowerCase().includes(q));
        if (!hit) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rbs') return b.rbs - a.rbs;
      if (sortBy === 'cost') return a.cost - b.cost;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return effOrder[a.eff] - effOrder[b.eff] || a.cost - b.cost;
    });
  }, [difficulty, waterOnly, laneFilter, query, sortBy]);

  const copySetup = (map: MapBlueprint) => {
    soundManager.playTap();
    const text = `${map.name} (${map.difficulty}) — ${map.hero}\n${map.setup
      .map((s) => `• ${s.t} ${s.p}`)
      .join('\n')}\nBudget ≈ $${map.cost.toLocaleString()} · core online R${map.core}\nWhy: ${map.why}\nWatch out: ${map.pitfall}`;
    navigator.clipboard.writeText(text);
    setCopied(map.name);
    window.setTimeout(() => setCopied(null), 2000);
  };

  const meta = DIFF_META[difficulty];

  return (
    <section id="map-atlas" className="relative py-16 sm:py-20 overflow-hidden">
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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-code text-amber-400 uppercase tracking-[0.2em] mb-2">
              <Route className="w-4 h-4" />
              <span>Every map · every difficulty · one solve each</span>
            </div>
            <h2 className="font-game text-4xl sm:text-5xl font-bold text-white leading-none tracking-tight">
              MAP <span className="text-amber-400">ATLAS</span>
            </h2>
            <p className="text-sm text-stone-400 mt-3 max-w-2xl leading-relaxed">
              {ALL_MAPS.length} maps from Beginner to Expert, each paired with the most efficient verified solve — hero pick, crosspaths,
              budget, and the one mistake that loses the run.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:min-w-[19rem]">
            <div className="bg-[#17100a] border border-[#3a2818] rounded-xl px-3.5 py-2.5">
              <span className="text-[10px] font-mono-code text-stone-500 uppercase block">Maps covered</span>
              <span className="font-game font-bold text-xl text-white">{ALL_MAPS.length}<span className="text-sm text-stone-400">/90</span></span>
            </div>
            <div className="bg-[#17100a] border border-[#3a2818] rounded-xl px-3.5 py-2.5">
              <span className="text-[10px] font-mono-code text-stone-500 uppercase block">Difficulty tiers</span>
              <span className="font-game font-bold text-xl text-white">4<span className="text-sm text-stone-400"> + True Expert</span></span>
            </div>
            <div className="bg-[#17100a] border border-[#3a2818] rounded-xl px-3.5 py-2.5 col-span-2">
              <span className="text-[10px] font-mono-code text-stone-500 uppercase block">Cheapest solve in this tier</span>
              <span className="font-game font-bold text-lg text-emerald-400">
                ${Math.min(...shown.map((m) => m.cost)).toLocaleString()}
                <span className="text-xs text-stone-400 font-sans font-normal ml-2">
                  {shown.find((m) => m.cost === Math.min(...shown.map((x) => x.cost)))?.name}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Difficulty rail */}
        <div className="flex flex-wrap items-stretch gap-2.5 mb-6">
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
                  window.setTimeout(() => setRevealed(true), 60);
                }}
                className={`group relative flex-1 min-w-[9.5rem] rounded-xl border px-4 py-3 text-left transition-all duration-200 cursor-pointer overflow-hidden ${
                  isActive
                    ? `${dm.active} shadow-lg -translate-y-0.5`
                    : 'bg-[#17100a] border-[#382717] hover:border-amber-500/50 hover:-translate-y-0.5'
                }`}
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className={`font-game font-bold text-base ${isActive ? '' : 'text-white'}`}>{d}</span>
                  <span className={`font-mono-code text-[11px] ${isActive ? 'text-stone-900/80' : 'text-stone-400'}`}>
                    {counts[d]}
                  </span>
                </div>
                <div className={`text-[10px] font-mono-code uppercase tracking-wider ${isActive ? 'text-stone-900/70' : 'text-stone-500'}`}>
                  {dm.xp} · CHIMPS ready
                </div>
                <div className={`mt-2 h-1 rounded-full overflow-hidden ${isActive ? 'bg-stone-900/25' : 'bg-[#241a10]'}`}>
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${isActive ? 'bg-stone-900' : `bg-gradient-to-r ${dm.glow} to-transparent`}`}
                    style={{ width: `${(counts[d] / 26) * 100}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Filter bar */}
        <div className="wood-panel rounded-2xl p-4 mb-7 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          <div className="relative md:col-span-5">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${difficulty.toLowerCase()} maps, heroes or towers…`}
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
            return (
              <article
                key={map.name}
                onClick={() => {
                  soundManager.playTap();
                  setExpanded(isOpen ? null : map.name);
                }}
                style={{ transitionDelay: revealed ? `${Math.min(idx * 45, 480)}ms` : '0ms' }}
                className={`group wood-panel rounded-2xl p-4 cursor-pointer transition-all duration-500 hover:border-amber-500/60 hover:-translate-y-1 ${
                  revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${isOpen ? 'border-amber-500/70 md:col-span-2 xl:col-span-1' : ''}`}
              >
                {/* Header row */}
                <div className="flex items-start gap-3">
                  <div className="w-[4.5rem] h-16 shrink-0">
                    <TrackGlyphSvg glyph={map.glyph} difficulty={map.difficulty} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="font-game font-bold text-base text-white truncate group-hover:text-amber-300 transition-colors">
                        {map.name}
                      </h3>
                      <span className={`px-1.5 py-px rounded text-[10px] font-mono-code border ${EFF_CHIP[map.eff]}`}>{map.eff}</span>
                      {map.newMap && (
                        <span className="px-1.5 py-px rounded text-[9px] font-mono-code font-bold bg-emerald-500 text-stone-950 uppercase">new</span>
                      )}
                      {map.trueExpert && (
                        <span className="px-1.5 py-px rounded text-[9px] font-mono-code font-bold bg-red-600 text-white uppercase flex items-center gap-0.5">
                          <Skull className="w-2.5 h-2.5" /> true expert
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-[10px] font-mono-code text-stone-400 flex-wrap">
                      <span className={`px-1.5 py-px rounded border ${meta.chip}`}>{map.since}</span>
                      <span className="flex items-center gap-0.5"><DoorOpen className="w-3 h-3" />{map.entrances}</span>
                      <span className="flex items-center gap-0.5"><DoorClosed className="w-3 h-3" />{map.exits}</span>
                      {map.junctions > 0 && <span className="flex items-center gap-0.5"><Split className="w-3 h-3" />{map.junctions}</span>}
                      <span className={map.water ? 'text-sky-400 flex items-center gap-0.5' : 'text-stone-500 flex items-center gap-0.5'}>
                        {map.water ? <Waves className="w-3 h-3" /> : <Flame className="w-3 h-3" />}
                        {map.water ? 'water' : 'dry'}
                      </span>
                      <span className="text-amber-400/90">RBS {map.rbs}</span>
                    </div>
                  </div>
                </div>

                {/* Hero + budget */}
                <div className="mt-3 flex items-center justify-between bg-[#140e08] border border-[#2e1f11] rounded-lg px-2.5 py-1.5">
                  <span className="text-xs text-stone-300 font-semibold flex items-center gap-1.5">
                    <MapIcon className="w-3.5 h-3.5 text-amber-500" /> {map.hero}
                  </span>
                  <span className="text-[11px] font-mono-code text-stone-400">
                    <span className="text-amber-400 font-bold">${(map.cost / 1000).toFixed(0)}k</span> · core R{map.core}
                  </span>
                </div>

                {/* Setup pills */}
                <ul className="mt-3 space-y-1.5">
                  {map.setup.map((piece, i) => (
                    <li key={i} className="flex items-center justify-between gap-2 bg-[#1c140d] border border-[#3a2917] rounded-lg px-2.5 py-1.5">
                      <span className="text-[11px] text-stone-200 font-medium truncate">{piece.t}</span>
                      <span className="font-mono-code text-[10px] font-bold text-amber-400 bg-amber-950/80 px-1.5 py-px rounded shrink-0">
                        {piece.p}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Expanded intel */}
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <div className="mt-3 space-y-2 pt-3 border-t border-[#312314]">
                      <p className="text-[11px] leading-relaxed text-stone-300">
                        <span className="font-mono-code font-bold text-emerald-400">WHY IT WORKS · </span>
                        {map.why}
                      </p>
                      <p className="text-[11px] leading-relaxed text-stone-300">
                        <span className="font-mono-code font-bold text-red-400">RUN-KILLER · </span>
                        {map.pitfall}
                      </p>
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copySetup(map);
                          }}
                          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#22180f] hover:bg-[#352517] border border-[#44301d] text-stone-300 hover:text-amber-300 text-[11px] font-semibold transition-colors cursor-pointer"
                        >
                          {copied === map.name ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          {copied === map.name ? 'Copied' : 'Copy setup'}
                        </button>
                        {map.link && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              soundManager.playFanfare();
                              onOpenStrategy(map.link as string);
                            }}
                            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500 text-amber-400 hover:text-stone-950 border border-amber-500/40 text-[11px] font-game font-bold transition-all cursor-pointer"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            Full build order
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2.5 text-[10px] font-mono-code text-stone-500 text-center uppercase tracking-wider">
                  {isOpen ? 'tap to collapse' : 'tap for why it works'}
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
    </section>
  );
};
