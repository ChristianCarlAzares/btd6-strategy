import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StrategyGrid } from './components/StrategyGrid';
import { RoundInspector } from './components/RoundInspector';
import { ChimpsCalculator } from './components/ChimpsCalculator';
import { TowerSynergyMatrix } from './components/TowerSynergyMatrix';
import { BossEventShowcase } from './components/BossEventShowcase';
import { Footer } from './components/Footer';
import { StrategyDetailModal } from './components/StrategyDetailModal';
import { STRATEGIES_DATA } from './data/strategies';
import { Strategy } from './types/btd6';

export function App() {
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
  const activeSection = 'hero';

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

  // Get featured strategies for the hero showcase
  const featuredStrategies = STRATEGIES_DATA.filter((s) => s.isFeatured);

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0a07] text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950">
      
      {/* Top Navigation */}
      <Navbar
        popCount={popCount}
        onPopBonus={handlePopBonus}
        activeSection={activeSection}
      />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Hero Section with Meta Spotlight & Pop Minigame */}
        <HeroSection
          featuredStrategies={featuredStrategies.length > 0 ? featuredStrategies : STRATEGIES_DATA.slice(0, 3)}
          onSelectStrategy={handleSelectStrategy}
          onPopBloon={handlePopBloon}
        />

        {/* Categorized Searchable Strategy Vault */}
        <StrategyGrid
          strategies={STRATEGIES_DATA}
          onSelectStrategy={handleSelectStrategy}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* Round Danger Inspector Tool */}
        <RoundInspector />

        {/* CHIMPS Income & Budget Planner */}
        <ChimpsCalculator />

        {/* Tower Crosspath & Synergies Encyclopedia */}
        <TowerSynergyMatrix />

        {/* Boss Event Encounters */}
        <BossEventShowcase />

      </main>

      {/* Footer */}
      <Footer
        popCount={popCount}
        onPopBonus={handlePopBonus}
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
