import { useState, useEffect } from 'react';
import {
  Compass,
  Map,
  ShieldAlert,
  Calculator,
  Layers,
  Flame,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StrategyGrid } from './components/StrategyGrid';
import { RoundInspector } from './components/RoundInspector';
import { ChimpsCalculator } from './components/ChimpsCalculator';
import { TowerSynergyMatrix } from './components/TowerSynergyMatrix';
import { BossEventShowcase } from './components/BossEventShowcase';
import { Footer } from './components/Footer';
import { StrategyDetailModal } from './components/StrategyDetailModal';
import { EfficiencyBoard } from './components/EfficiencyBoard';
import { MapAtlas } from './components/MapAtlas';
import { STRATEGIES_DATA } from './data/strategies';
import { LATEST_STRATEGIES } from './data/strategiesLatest';
import { PARAGON_STRATEGIES } from './data/strategiesParagon';
import { Strategy } from './types/btd6';
import { PageId, PAGES_REGISTRY } from './types/navigation';
import { getEfficiency } from './utils/efficiency';
import { soundManager } from './utils/sound';

/** Newest blueprints first so the vault opens on the current patch meta. */
export const ALL_STRATEGIES: Strategy[] = [
  ...LATEST_STRATEGIES,
  ...PARAGON_STRATEGIES,
  ...STRATEGIES_DATA,
];

const VALID_PAGES: PageId[] = ['spotlight', 'vault', 'atlas', 'dangers', 'planner', 'synergies', 'bosses'];

function parseHashToPage(): PageId {
  if (typeof window === 'undefined') return 'spotlight';
  const raw = window.location.hash.replace('#', '').trim().toLowerCase();
  if (VALID_PAGES.includes(raw as PageId)) return raw as PageId;
  return 'spotlight';
}

export function App() {
  const [activePage, setActivePage] = useState<PageId>(() => parseHashToPage());

  const [popCount, setPopCount] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('btd6_pop_count');
      return saved ? parseInt(saved, 10) : 14;
    }
    return 14;
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('btd6_favorites');
        return saved ? JSON.parse(saved) : ['strat-ninja-alch-sauda', 'strat-tack-zone-super-brittle'];
      } catch {
        return ['strat-ninja-alch-sauda', 'strat-tack-zone-super-brittle'];
      }
    }
    return ['strat-ninja-alch-sauda', 'strat-tack-zone-super-brittle'];
  });

  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);

  // Sync URL hash with activePage
  useEffect(() => {
    const onHashChange = () => {
      setActivePage(parseHashToPage());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${page}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Persist pop count
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('btd6_pop_count', popCount.toString());
    }
  }, [popCount]);

  // Persist favorites
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('btd6_favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  const handlePopBloon = () => {
    setPopCount((prev) => prev + 1);
  };

  const handlePopBonus = () => {
    setPopCount((prev) => prev + 5);
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectStrategy = (strat: Strategy) => {
    setSelectedStrategy(strat);
  };

  /** Map Atlas cards deep-link into the Strategy Vault by id. */
  const handleOpenStrategyById = (strategyId: string) => {
    const match = ALL_STRATEGIES.find((s) => s.id === strategyId);
    if (match) setSelectedStrategy(match);
  };

  // Featured spotlight, ordered by efficiency score
  const featuredStrategies = ALL_STRATEGIES
    .filter((s) => s.isFeatured)
    .sort((a, b) => getEfficiency(b).score - getEfficiency(a).score);

  const currentPageIndex = PAGES_REGISTRY.findIndex((p) => p.id === activePage);
  const currentPageMeta = PAGES_REGISTRY[currentPageIndex] ?? PAGES_REGISTRY[0];
  const prevPage = PAGES_REGISTRY[(currentPageIndex - 1 + PAGES_REGISTRY.length) % PAGES_REGISTRY.length];
  const nextPage = PAGES_REGISTRY[(currentPageIndex + 1) % PAGES_REGISTRY.length];

  const portalCards: {
    id: PageId;
    title: string;
    badge: string;
    desc: string;
    icon: React.ComponentType<{ className?: string }>;
    accent: string;
  }[] = [
    {
      id: 'vault',
      title: 'Strategy Vault (Option A)',
      badge: '22 Blueprints',
      desc: 'Searchable tower setups categorized by difficulty tier, hero synergy, micro intensity, and efficiency rank.',
      icon: Compass,
      accent: 'text-amber-400 border-amber-500/40 bg-amber-950/30',
    },
    {
      id: 'atlas',
      title: 'Map & Mode Atlas',
      badge: '90 Maps × 20 Modes',
      desc: 'Every single BTD6 map across Beginner, Intermediate, Advanced & Expert with dedicated strategies for all 20 modes.',
      icon: Map,
      accent: 'text-emerald-400 border-emerald-500/40 bg-emerald-950/30',
    },
    {
      id: 'dangers',
      title: 'Round Danger Inspector',
      badge: 'R24 – R100',
      desc: 'Inspect lethal ambush rounds (R63 Ceramics, R90/95 DDTs, R98 ZOMGs), RBE health bars, and direct counters.',
      icon: ShieldAlert,
      accent: 'text-red-400 border-red-500/40 bg-red-950/30',
    },
    {
      id: 'planner',
      title: 'CHIMPS Cash Planner',
      badge: '$178,909 Pool',
      desc: 'Deterministic round-by-round income simulator and Tier 5 affordability calculator for strict CHIMPS runs.',
      icon: Calculator,
      accent: 'text-sky-400 border-sky-500/40 bg-sky-950/30',
    },
    {
      id: 'synergies',
      title: 'Tower Crosspath Synergies',
      badge: 'Math & Buffs',
      desc: 'Optimal crosspath reasoning, Alchemist Stronger Stimulant compatibility ratings, and Village discount priorities.',
      icon: Layers,
      accent: 'text-purple-400 border-purple-500/40 bg-purple-950/30',
    },
    {
      id: 'bosses',
      title: 'Elite Boss Event Mastery',
      badge: 'All 6 Bosses',
      desc: 'Tier 1–5 skull protocols for Bloonarius, Lych, Vortex, Dreadbloon, Phayze, and Blastapopoulos.',
      icon: Flame,
      accent: 'text-orange-400 border-orange-500/40 bg-orange-950/30',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0a07] text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Top Multi-Page Navigation Bar */}
      <Navbar
        popCount={popCount}
        onPopBonus={handlePopBonus}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Dedicated Page Indicator Subbar (on non-home pages) */}
      {activePage !== 'spotlight' && (
        <div className="bg-[#150f09] border-b border-[#342415] py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  soundManager.playTap();
                  handleNavigate('spotlight');
                }}
                className="text-stone-400 hover:text-amber-400 font-mono-code transition-colors cursor-pointer"
              >
                STRATEX 6 HOME
              </button>
              <span className="text-stone-600">/</span>
              <span className="font-game font-bold text-amber-400 uppercase tracking-wide">
                {currentPageMeta.name}
              </span>
              <span className="hidden md:inline text-stone-400">
                — {currentPageMeta.subtitle}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-[11px] font-mono-code text-stone-400">
                Page {currentPageIndex + 1} of {PAGES_REGISTRY.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content — Renders ONLY the Dedicated Active Page */}
      <main className="flex-1">
        {activePage === 'spotlight' && (
          <>
            <HeroSection
              featuredStrategies={featuredStrategies.length > 0 ? featuredStrategies : ALL_STRATEGIES.slice(0, 3)}
              totalStrategies={ALL_STRATEGIES.length}
              onSelectStrategy={handleSelectStrategy}
              onPopBloon={handlePopBloon}
              onNavigate={handleNavigate}
            />

            <EfficiencyBoard
              strategies={ALL_STRATEGIES}
              onSelectStrategy={handleSelectStrategy}
            />

            {/* Multi-Page Command Hub Directory */}
            <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-mono-code text-amber-400 uppercase tracking-widest mb-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>MULTI-PAGE COMMAND DIRECTORY</span>
                  </div>
                  <h2 className="font-game text-3xl sm:text-4xl font-bold text-white">
                    JUMP TO A DEDICATED <span className="text-amber-400">MODULE</span>
                  </h2>
                </div>
                <p className="text-xs font-mono-code text-stone-400">
                  Each module opens on its own dedicated page for zero-clutter focus
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {portalCards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => {
                      soundManager.playTap();
                      handleNavigate(card.id);
                    }}
                    className="wood-panel wood-panel-hover rounded-2xl p-5 text-left flex flex-col justify-between transition-all duration-200 group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className={`p-2.5 rounded-xl border ${card.accent}`}>
                          <card.icon className="w-5 h-5" />
                        </div>
                        <span className={`text-xs font-mono-code font-bold px-2.5 py-0.5 rounded-lg border ${card.accent}`}>
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="font-game text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs text-stone-300 mt-1.5 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#312314] flex items-center justify-between text-xs font-game font-bold text-amber-400 group-hover:text-amber-300">
                      <span>Open Dedicated Page</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </>
        )}

        {activePage === 'vault' && (
          <StrategyGrid
            strategies={ALL_STRATEGIES}
            onSelectStrategy={handleSelectStrategy}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {activePage === 'atlas' && (
          <MapAtlas onOpenStrategy={handleOpenStrategyById} />
        )}

        {activePage === 'dangers' && <RoundInspector />}

        {activePage === 'planner' && <ChimpsCalculator />}

        {activePage === 'synergies' && <TowerSynergyMatrix />}

        {activePage === 'bosses' && <BossEventShowcase />}

        {/* Bottom Page-to-Page Switcher Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-[#2d2013]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                soundManager.playTap();
                handleNavigate(prevPage.id);
              }}
              className="w-full sm:w-auto flex items-center space-x-3 bg-[#19120b] hover:bg-[#261b10] border border-[#3e2c1a] hover:border-amber-500/50 rounded-xl px-4 py-3 text-left transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400 group-hover:-translate-x-1 transition-transform shrink-0" />
              <div>
                <span className="text-[10px] font-mono-code text-stone-400 uppercase block">Previous Page</span>
                <span className="font-game font-bold text-sm text-white group-hover:text-amber-300">
                  {prevPage.name}
                </span>
              </div>
            </button>

            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              {PAGES_REGISTRY.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    soundManager.playTap();
                    handleNavigate(p.id);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono-code transition-all cursor-pointer ${
                    p.id === activePage
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'bg-[#17100a] text-stone-400 hover:text-amber-300 border border-[#322314]'
                  }`}
                >
                  {p.shortTitle}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                soundManager.playTap();
                handleNavigate(nextPage.id);
              }}
              className="w-full sm:w-auto flex items-center justify-end space-x-3 bg-[#19120b] hover:bg-[#261b10] border border-[#3e2c1a] hover:border-amber-500/50 rounded-xl px-4 py-3 text-right transition-all cursor-pointer group"
            >
              <div>
                <span className="text-[10px] font-mono-code text-stone-400 uppercase block">Next Page</span>
                <span className="font-game font-bold text-sm text-white group-hover:text-amber-300">
                  {nextPage.name}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer
        popCount={popCount}
        onPopBonus={handlePopBonus}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Strategy Detail Modal Walkthrough */}
      <StrategyDetailModal
        strategy={selectedStrategy}
        onClose={() => setSelectedStrategy(null)}
        isFavorite={selectedStrategy ? favorites.includes(selectedStrategy.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

export default App;
