import React, { useState, useMemo } from 'react';
import { 
  Search, Heart, Copy, Check, ExternalLink, Sparkles, 
  AlertCircle, Shield, MapPin, Gauge, RotateCcw
} from 'lucide-react';
import { Strategy, DifficultyLevel } from '../types/btd6';
import { soundManager } from '../utils/sound';

interface StrategyGridProps {
  strategies: Strategy[];
  onSelectStrategy: (strat: Strategy) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const StrategyGrid: React.FC<StrategyGridProps> = ({
  strategies,
  onSelectStrategy,
  favorites,
  onToggleFavorite
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [selectedGameMode, setSelectedGameMode] = useState<string>('All');
  const [selectedHero, setSelectedHero] = useState<string>('All');
  const [selectedMicro, setSelectedMicro] = useState<string>('All');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [sortBy, setSortBy] = useState<'winRate' | 'cost' | 'difficulty' | 'name'>('winRate');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Distinct list of heroes for filtering
  const allHeroes = useMemo(() => {
    const heroes = new Set(strategies.map((s) => s.hero.split(' ')[0]));
    return ['All', ...Array.from(heroes).sort()];
  }, [strategies]);

  const difficultyOrder: Record<DifficultyLevel, number> = {
    Beginner: 1,
    Intermediate: 2,
    Advanced: 3,
    Expert: 4,
    Boss: 5
  };

  // Filtered & Sorted strategies
  const filteredStrategies = useMemo(() => {
    return strategies
      .filter((strat) => {
        // Search query check (title, subtitle, hero, tags, maps, tower names)
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchesTitle = strat.title.toLowerCase().includes(q);
          const matchesSubtitle = strat.subtitle.toLowerCase().includes(q);
          const matchesHero = strat.hero.toLowerCase().includes(q);
          const matchesTag = strat.tags.some((t) => t.toLowerCase().includes(q));
          const matchesMap = strat.maps.some((m) => m.toLowerCase().includes(q));
          const matchesTower = strat.keyTowers.some((t) => t.name.toLowerCase().includes(q));
          if (!matchesTitle && !matchesSubtitle && !matchesHero && !matchesTag && !matchesMap && !matchesTower) {
            return false;
          }
        }

        // Difficulty tab
        if (selectedDifficulty !== 'All' && strat.difficulty !== selectedDifficulty) {
          return false;
        }

        // Game mode
        if (selectedGameMode !== 'All' && strat.gameMode !== selectedGameMode) {
          return false;
        }

        // Hero
        if (selectedHero !== 'All' && !strat.hero.toLowerCase().includes(selectedHero.toLowerCase())) {
          return false;
        }

        // Micro
        if (selectedMicro !== 'All' && !strat.microIntensity.includes(selectedMicro)) {
          return false;
        }

        // Favorites
        if (onlyFavorites && !favorites.includes(strat.id)) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'winRate') return b.winRate - a.winRate;
        if (sortBy === 'cost') return a.totalCostEstimate - b.totalCostEstimate;
        if (sortBy === 'difficulty') return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        if (sortBy === 'name') return a.title.localeCompare(b.title);
        return 0;
      });
  }, [
    strategies,
    searchQuery,
    selectedDifficulty,
    selectedGameMode,
    selectedHero,
    selectedMicro,
    onlyFavorites,
    favorites,
    sortBy,
    difficultyOrder
  ]);

  const handleCopyCode = (strat: Strategy, e: React.MouseEvent) => {
    e.stopPropagation();
    soundManager.playTap();
    const textToCopy = `BTD6 STRATEGY: ${strat.title} (${strat.gameMode})
Hero: ${strat.hero}
Key Setup: ${strat.keyTowers.map((t) => `${t.name} (${t.crosspath})`).join(', ')}
Challenge Code: ${strat.challengeCode}`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedId(strat.id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  const handleResetFilters = () => {
    soundManager.playTap();
    setSearchQuery('');
    setSelectedDifficulty('All');
    setSelectedGameMode('All');
    setSelectedHero('All');
    setSelectedMicro('All');
    setOnlyFavorites(false);
  };

  const difficultyTabColors: Record<string, { active: string; border: string }> = {
    All: { active: 'bg-amber-500 text-stone-950 font-bold', border: 'border-amber-500' },
    Beginner: { active: 'bg-emerald-600 text-white font-bold', border: 'border-emerald-500' },
    Intermediate: { active: 'bg-blue-600 text-white font-bold', border: 'border-blue-500' },
    Advanced: { active: 'bg-purple-600 text-white font-bold', border: 'border-purple-500' },
    Expert: { active: 'bg-red-600 text-white font-bold', border: 'border-red-500' },
    Boss: { active: 'bg-amber-600 text-white font-bold', border: 'border-amber-500' },
  };

  const difficultyBadgeStyle: Record<DifficultyLevel, string> = {
    Beginner: 'bg-emerald-950/80 text-emerald-300 border-emerald-600/70',
    Intermediate: 'bg-blue-950/80 text-blue-300 border-blue-600/70',
    Advanced: 'bg-purple-950/80 text-purple-300 border-purple-600/70',
    Expert: 'bg-red-950/80 text-red-300 border-red-600/70',
    Boss: 'bg-amber-950/80 text-amber-300 border-amber-600/70',
  };

  return (
    <section id="strategies" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono-code text-amber-400 uppercase tracking-widest mb-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>CATEGORIZED TOWER SETUP ARCHIVE</span>
          </div>
          <h2 className="font-game text-3xl sm:text-4xl font-bold text-white tracking-tight">
            STRATEGY <span className="text-amber-400">VAULT</span>
          </h2>
          <p className="text-sm text-stone-400 mt-1 max-w-2xl">
            Filter through high-tier build orders categorized by difficulty level, hero synergy, and target game mode.
          </p>
        </div>

        {/* Quick Results Counter */}
        <div className="flex items-center space-x-3">
          <span className="text-xs font-mono-code text-stone-400">
            Showing <strong className="text-amber-400">{filteredStrategies.length}</strong> of {strategies.length} Strategies
          </span>
          {favorites.length > 0 && (
            <button
              onClick={() => {
                soundManager.playTap();
                setOnlyFavorites(!onlyFavorites);
              }}
              className={`flex items-center space-x-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                onlyFavorites
                  ? 'bg-rose-950/70 border-rose-600 text-rose-300'
                  : 'bg-[#211810] border-[#44311e] text-stone-300 hover:text-rose-400'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>Favorites ({favorites.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* Difficulty Tabs (Categorization requirement) */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
        {['All', 'Beginner', 'Intermediate', 'Advanced', 'Expert', 'Boss'].map((diff) => {
          const isActive = selectedDifficulty === diff;
          const count = diff === 'All' 
            ? strategies.length 
            : strategies.filter((s) => s.difficulty === diff).length;

          return (
            <button
              key={diff}
              onClick={() => {
                soundManager.playTap();
                setSelectedDifficulty(diff);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-game transition-all whitespace-nowrap flex items-center space-x-2 border cursor-pointer ${
                isActive
                  ? `${difficultyTabColors[diff].active} border-transparent shadow-md`
                  : 'bg-[#1b140d] text-stone-300 border-[#382816] hover:bg-[#281e13] hover:text-amber-300'
              }`}
            >
              <span>{diff === 'All' ? '🌟 All Tiers' : diff}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono-code ${
                isActive ? 'bg-black/30 text-white' : 'bg-[#291e13] text-stone-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search & Multi-Filter Bar */}
      <div className="wood-panel rounded-2xl p-4 sm:p-5 mb-8 space-y-4">
        
        {/* Top Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by tower (e.g. Tack Zone, Perma-Spike), hero (Corvus, Sauda), map (Logs, #OUCH), or tag..."
            className="w-full bg-[#140e08] border border-[#422e1b] rounded-xl pl-11 pr-10 py-3 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-200 text-xs bg-[#241a10] px-1.5 py-0.5 rounded cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Secondary Filter Controls Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-xs">
          
          {/* Game Mode Filter */}
          <div>
            <label className="block text-[11px] font-mono-code text-stone-400 uppercase tracking-wider mb-1">
              Game Mode
            </label>
            <select
              value={selectedGameMode}
              onChange={(e) => {
                soundManager.playTap();
                setSelectedGameMode(e.target.value);
              }}
              className="w-full bg-[#18110a] border border-[#3f2c19] rounded-lg px-2.5 py-2 text-stone-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="All">All Game Modes</option>
              <option value="CHIMPS">CHIMPS (Hardest)</option>
              <option value="Half Cash">Half Cash</option>
              <option value="Boss Event">Boss Events</option>
            </select>
          </div>

          {/* Hero Filter */}
          <div>
            <label className="block text-[11px] font-mono-code text-stone-400 uppercase tracking-wider mb-1">
              Primary Hero
            </label>
            <select
              value={selectedHero}
              onChange={(e) => {
                soundManager.playTap();
                setSelectedHero(e.target.value);
              }}
              className="w-full bg-[#18110a] border border-[#3f2c19] rounded-lg px-2.5 py-2 text-stone-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              {allHeroes.map((h) => (
                <option key={h} value={h}>{h === 'All' ? 'All Heroes' : h}</option>
              ))}
            </select>
          </div>

          {/* Micro Intensity */}
          <div>
            <label className="block text-[11px] font-mono-code text-stone-400 uppercase tracking-wider mb-1">
              Micro Level
            </label>
            <select
              value={selectedMicro}
              onChange={(e) => {
                soundManager.playTap();
                setSelectedMicro(e.target.value);
              }}
              className="w-full bg-[#18110a] border border-[#3f2c19] rounded-lg px-2.5 py-2 text-stone-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="All">All Intensities</option>
              <option value="Low">AFK / Low Micro</option>
              <option value="Medium">Medium Micro</option>
              <option value="High">Active Micro</option>
            </select>
          </div>

          {/* Sort Order */}
          <div>
            <label className="block text-[11px] font-mono-code text-stone-400 uppercase tracking-wider mb-1">
              Sort Blueprints
            </label>
            <select
              value={sortBy}
              onChange={(e) => {
                soundManager.playTap();
                setSortBy(e.target.value as 'winRate' | 'cost' | 'difficulty' | 'name');
              }}
              className="w-full bg-[#18110a] border border-[#3f2c19] rounded-lg px-2.5 py-2 text-stone-200 focus:outline-none focus:border-amber-500 cursor-pointer"
            >
              <option value="winRate">Highest Winrate</option>
              <option value="difficulty">Difficulty (Easy first)</option>
              <option value="cost">Lowest Total Cost</option>
              <option value="name">Strategy Name (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Filter Reset if filtered */}
        {(searchQuery || selectedDifficulty !== 'All' || selectedGameMode !== 'All' || selectedHero !== 'All' || selectedMicro !== 'All' || onlyFavorites) && (
          <div className="flex items-center justify-between pt-2 border-t border-[#312314] text-xs">
            <span className="text-stone-400">Filters applied</span>
            <button
              onClick={handleResetFilters}
              className="flex items-center space-x-1 text-amber-400 hover:text-amber-300 font-medium cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* Strategies Grid */}
      {filteredStrategies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStrategies.map((strat) => {
            const isFav = favorites.includes(strat.id);

            return (
              <div
                key={strat.id}
                onClick={() => {
                  soundManager.playFanfare();
                  onSelectStrategy(strat);
                }}
                className="wood-panel wood-panel-hover rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Top Card Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center space-x-2">
                      {/* Difficulty Badge */}
                      <span className={`px-2.5 py-0.5 rounded text-xs font-game font-bold border ${difficultyBadgeStyle[strat.difficulty]}`}>
                        {strat.difficulty}
                      </span>

                      {/* Game Mode */}
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-[#23180f] text-stone-300 border border-[#48341f]">
                        {strat.gameMode}
                      </span>
                    </div>

                    {/* Bookmark Favorite Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        soundManager.playTap();
                        onToggleFavorite(strat.id);
                      }}
                      className="p-1.5 rounded-lg bg-[#251b11] hover:bg-[#382817] text-stone-400 hover:text-rose-400 transition-colors cursor-pointer"
                      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-game font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
                    {strat.title}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 line-clamp-2">
                    {strat.subtitle}
                  </p>

                  {/* Hero & Micro Stats Bar */}
                  <div className="flex items-center justify-between mt-3 py-2 px-3 rounded-lg bg-[#140e08] border border-[#2e1f11] text-xs">
                    <div className="flex items-center space-x-1.5">
                      <Shield className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-stone-300 font-semibold">{strat.hero}</span>
                    </div>

                    <div className="flex items-center space-x-1 text-stone-400">
                      <Gauge className="w-3 h-3 text-stone-400" />
                      <span className="text-[11px] font-mono-code">{strat.microIntensity}</span>
                    </div>

                    <div className="font-mono-code text-emerald-400 font-bold text-[11px]">
                      {strat.winRate}% WIN
                    </div>
                  </div>

                  {/* Key Towers Setup Pills */}
                  <div className="mt-4 space-y-1.5">
                    <span className="text-[10px] font-mono-code text-stone-400 uppercase tracking-wider block">
                      CORE TOWER ROSTER:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {strat.keyTowers.slice(0, 3).map((tower, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-1 bg-[#1c140d] border border-[#3e2c1a] px-2 py-0.5 rounded text-[11px]"
                        >
                          <span className="text-stone-200 font-medium">{tower.name}</span>
                          <span className="font-mono-code font-bold text-amber-400 bg-amber-950 px-1 py-0.2 rounded text-[10px]">
                            {tower.crosspath}
                          </span>
                        </div>
                      ))}
                      {strat.keyTowers.length > 3 && (
                        <span className="text-[10px] text-stone-400 font-mono-code self-center">
                          +{strat.keyTowers.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Map Compatibility */}
                  <div className="mt-3 flex items-center space-x-1.5 text-xs text-stone-400">
                    <MapPin className="w-3.5 h-3.5 text-amber-500/80 shrink-0" />
                    <span className="truncate">
                      Maps: <strong className="text-stone-300 font-normal">{strat.maps.slice(0, 3).join(', ')}</strong>
                    </span>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="mt-5 pt-3 border-t border-[#312314] flex items-center justify-between gap-2">
                  {/* Total Cost Estimate */}
                  <div className="text-xs">
                    <span className="text-[10px] text-stone-400 font-mono-code block">COST ESTIMATE</span>
                    <span className="font-mono-code font-bold text-amber-400">
                      ${strat.totalCostEstimate.toLocaleString()}
                    </span>
                  </div>

                  {/* Quick Copy & Open Guide */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => handleCopyCode(strat, e)}
                      title="Copy setup summary to clipboard"
                      className="p-2 rounded-lg bg-[#22180f] hover:bg-[#352517] text-stone-300 hover:text-amber-400 border border-[#44301d] transition-colors cursor-pointer"
                    >
                      {copiedId === strat.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        soundManager.playFanfare();
                        onSelectStrategy(strat);
                      }}
                      className="inline-flex items-center space-x-1 bg-amber-500/15 hover:bg-amber-500 text-amber-400 hover:text-stone-950 border border-amber-500/40 font-game font-bold text-xs px-3 py-2 rounded-lg transition-all cursor-pointer"
                    >
                      <span>Build Order</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="wood-panel rounded-2xl p-12 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-amber-400" />
          </div>
          <h3 className="font-game text-xl font-bold text-white mb-2">No Matching Strategies Found</h3>
          <p className="text-sm text-stone-400 mb-6">
            No blueprints match your current combination of search terms, difficulty tiers, and hero filters.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-game font-bold text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset All Search Filters</span>
          </button>
        </div>
      )}

    </section>
  );
};
