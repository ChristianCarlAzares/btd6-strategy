import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, ArrowRight, ShieldCheck, Zap, Crosshair, ChevronRight, ChevronLeft, Target } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Strategy } from '../types/btd6';
import { PageId } from '../types/navigation';
import { soundManager } from '../utils/sound';

interface HeroSectionProps {
  featuredStrategies: Strategy[];
  totalStrategies: number;
  onSelectStrategy: (strat: Strategy) => void;
  onPopBloon: () => void;
  onNavigate: (page: PageId) => void;
}

interface FloatingBloon {
  id: number;
  type: 'red' | 'blue' | 'camo' | 'lead' | 'moab' | 'bad';
  x: number; // percentage 5 - 90
  y: number; // percentage 10 - 80
  speed: number;
  label: string;
  size: number;
  points: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  featuredStrategies,
  totalStrategies,
  onSelectStrategy,
  onPopBloon,
  onNavigate,
}) => {
  const newThisPatch = featuredStrategies.filter((s) => s.isNew).length;
  const [currentSpotlightIndex, setCurrentSpotlightIndex] = useState(0);
  const [floatingBloons, setFloatingBloons] = useState<FloatingBloon[]>([
    { id: 1, type: 'red', x: 12, y: 35, speed: 1.2, label: 'Red Bloon', size: 36, points: 1 },
    { id: 2, type: 'blue', x: 82, y: 25, speed: 1.5, label: 'Blue Bloon', size: 40, points: 2 },
    { id: 3, type: 'camo', x: 25, y: 70, speed: 0.9, label: 'Camo Green', size: 42, points: 3 },
    { id: 4, type: 'lead', x: 70, y: 65, speed: 1.1, label: 'Heavy Lead', size: 44, points: 5 },
    { id: 5, type: 'moab', x: 88, y: 75, speed: 0.7, label: 'M.O.A.B.', size: 54, points: 10 },
  ]);

  const activeStrat = featuredStrategies[currentSpotlightIndex] || featuredStrategies[0];

  // Periodic slow floating movement
  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingBloons((prev) =>
        prev.map((b) => {
          let newY = b.y - (b.speed * 0.4);
          if (newY < 5) newY = 85;
          return { ...b, y: newY };
        })
      );
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handlePopBloon = (bloon: FloatingBloon, e: React.MouseEvent) => {
    e.stopPropagation();
    if (bloon.type === 'moab' || bloon.type === 'bad') {
      soundManager.playMoabPop();
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
        colors: ['#3b82f6', '#1d4ed8', '#fbbf24']
      });
    } else {
      soundManager.playPop();
    }
    onPopBloon();

    // Respawn bloon at bottom with random x
    setFloatingBloons((prev) =>
      prev.map((b) => (b.id === bloon.id ? { ...b, y: 88, x: Math.floor(Math.random() * 80) + 10 } : b))
    );
  };

  const nextSpotlight = () => {
    soundManager.playTap();
    setCurrentSpotlightIndex((prev) => (prev + 1) % featuredStrategies.length);
  };

  const prevSpotlight = () => {
    soundManager.playTap();
    setCurrentSpotlightIndex((prev) => (prev - 1 + featuredStrategies.length) % featuredStrategies.length);
  };

  const bloonColorClasses: Record<string, { bg: string; border: string; glow: string; text: string }> = {
    red: { bg: 'bg-red-500', border: 'border-red-300', glow: 'shadow-red-500/50', text: 'Red' },
    blue: { bg: 'bg-blue-500', border: 'border-blue-300', glow: 'shadow-blue-500/50', text: 'Blue' },
    camo: { bg: 'bg-emerald-600', border: 'border-emerald-300', glow: 'shadow-emerald-500/50', text: 'Camo' },
    lead: { bg: 'bg-stone-500', border: 'border-stone-300', glow: 'shadow-stone-400/50', text: 'Lead' },
    moab: { bg: 'bg-blue-600', border: 'border-yellow-300', glow: 'shadow-blue-600/60', text: 'MOAB' },
    bad: { bg: 'bg-purple-700', border: 'border-pink-300', glow: 'shadow-purple-700/60', text: 'BAD' },
  };

  return (
    <section id="hero" className="relative min-h-[640px] lg:min-h-[720px] overflow-hidden border-b border-[#3d2e1b]">
      {/* Background Banner with Art and Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-btd6-banner.jpg"
          alt="Bloons TD 6 Strategy Battlefield"
          className="w-full h-full object-cover object-center opacity-30 transform scale-105 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a07] via-[#0d0a07]/80 to-[#0d0a07]/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0d0a07]/60 to-[#0d0a07]" />
      </div>

      {/* Floating Interactive Bloons (Clickable Minigame Easter Egg!) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {floatingBloons.map((bloon) => {
          const styleConfig = bloonColorClasses[bloon.type] || bloonColorClasses.red;
          return (
            <button
              key={bloon.id}
              onClick={(e) => handlePopBloon(bloon, e)}
              style={{
                left: `${bloon.x}%`,
                top: `${bloon.y}%`,
                width: `${bloon.size}px`,
                height: `${bloon.size * 1.25}px`,
              }}
              className={`absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 cursor-crosshair rounded-[50%_50%_50%_50%/60%_60%_40%_40%] ${styleConfig.bg} border-2 ${styleConfig.border} shadow-lg ${styleConfig.glow} flex items-center justify-center transition-transform hover:scale-125 active:scale-75 group select-none`}
              title={`Click to pop ${bloon.label}! (+${bloon.points} Pops)`}
            >
              {/* Bloon Shine */}
              <div className="absolute top-2 left-2 w-2 h-3.5 rounded-full bg-white/60 transform -rotate-45" />
              {/* Bloon Knot */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-1.5 bg-inherit rounded-sm" />

              {bloon.type === 'moab' && (
                <span className="text-[10px] font-game text-yellow-300 font-bold uppercase tracking-tighter">MOAB</span>
              )}
              {bloon.type === 'camo' && (
                <span className="text-[9px] font-mono-code text-white font-bold">CAMO</span>
              )}
              {bloon.type === 'lead' && (
                <span className="text-[9px] font-mono-code text-stone-200 font-bold">LEAD</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-20">

        {/* Top Badges & Meta Notice */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>GLOBAL META OVERVIEW</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono-code font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>PATCH v57.2 VERIFIED</span>
          </div>

          <div className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5 text-purple-400" />
            <span>BLACK BORDER PROVEN</span>
          </div>
        </div>

        {/* Hero Title & Subheading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-game text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              DOMINATE <span className="text-amber-400 underline decoration-amber-500/60 decoration-wavy decoration-2">CHIMPS</span> &amp; ELITE BOSSES.
            </h1>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              The high-performance interactive strategy wiki for Bloons Tower Defense 6. Explore precise round-by-round build orders, debuff stacking multipliers, DDT counters, and verified Tier 5 combinations.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  soundManager.playTap();
                  onNavigate('vault');
                }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-game font-bold text-base px-5 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Crosshair className="w-5 h-5 text-stone-950" />
                <span>Open Strategy Vault</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  soundManager.playTap();
                  onNavigate('atlas');
                }}
                className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-game font-bold text-base px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Target className="w-4 h-4 text-stone-950" />
                <span>Map Atlas (90×20 Modes)</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playTap();
                  onNavigate('dangers');
                }}
                className="inline-flex items-center space-x-2 bg-[#231a11] hover:bg-[#322518] text-amber-300 border border-[#523d24] hover:border-amber-400/50 font-game text-sm px-4 py-3.5 rounded-xl transition-all cursor-pointer"
              >
                <Target className="w-4 h-4 text-amber-400" />
                <span>Danger Rounds</span>
              </button>

              <button
                onClick={() => {
                  soundManager.playTap();
                  onNavigate('planner');
                }}
                className="inline-flex items-center space-x-2 bg-[#171f16] hover:bg-[#202c1f] text-emerald-300 border border-emerald-700/50 font-mono-code text-sm px-4 py-3.5 rounded-xl transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>CHIMPS Cash Tool</span>
              </button>
            </div>

            {/* Interactive Easter Egg Prompt */}
            <div className="flex items-center space-x-2 text-xs text-stone-400 pt-2 font-mono-code">
              <span className="text-amber-400">⚡ HINT:</span>
              <span>Click the floating balloons on screen to pop them with audio SFX!</span>
            </div>
          </div>

          {/* Interactive Meta Spotlight Showcase Card */}
          <div className="lg:col-span-5">
            <div className="wood-panel rounded-2xl p-5 sm:p-6 relative overflow-hidden transition-all duration-300 hover:border-amber-500/70 shadow-2xl">

              {/* Background Accent Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Spotlight Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#3d2e1b] mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono-code text-amber-400 font-bold uppercase tracking-wider block">
                      FEATURED SPOTLIGHT ({currentSpotlightIndex + 1}/{featuredStrategies.length})
                    </span>
                    <span className="text-xs text-stone-400 font-medium">Ranked Meta Tier 1</span>
                  </div>
                </div>

                {/* Switcher Arrows */}
                <div className="flex items-center space-x-1.5">
                  <button
                    onClick={prevSpotlight}
                    aria-label="Previous strategy spotlight"
                    className="p-1.5 rounded-lg bg-[#2a2014] hover:bg-[#3c2f1f] text-stone-300 hover:text-amber-400 border border-[#4a3721] transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSpotlight}
                    aria-label="Next strategy spotlight"
                    className="p-1.5 rounded-lg bg-[#2a2014] hover:bg-[#3c2f1f] text-stone-300 hover:text-amber-400 border border-[#4a3721] transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Strategy Spotlight Body */}
              {activeStrat && (
                <div className="space-y-4">
                  {/* Badges row */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded text-xs font-bold font-game ${
                      activeStrat.difficulty === 'Beginner' ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' :
                      activeStrat.difficulty === 'Intermediate' ? 'bg-blue-950 text-blue-300 border border-blue-700' :
                      activeStrat.difficulty === 'Advanced' ? 'bg-purple-950 text-purple-300 border border-purple-700' :
                      activeStrat.difficulty === 'Expert' ? 'bg-red-950 text-red-300 border border-red-700' :
                      'bg-amber-950 text-amber-300 border border-amber-700'
                    }`}>
                      {activeStrat.difficulty}
                    </span>

                    <span className="px-2 py-0.5 rounded text-xs font-mono-code bg-[#2c1f13] text-amber-300 border border-[#5a4225]">
                      {activeStrat.gameMode}
                    </span>

                    <span className="px-2 py-0.5 rounded text-xs font-mono-code bg-stone-900 text-stone-300 border border-stone-700">
                      Hero: {activeStrat.hero}
                    </span>

                    <div className="ml-auto flex items-center space-x-1 text-emerald-400 text-xs font-bold font-mono-code">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{activeStrat.winRate}% Winrate</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-game font-bold text-white text-balance leading-snug">
                      {activeStrat.title}
                    </h3>
                    <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                      {activeStrat.subtitle}
                    </p>
                  </div>

                  {/* Core Towers Pill Matrix */}
                  <div className="bg-[#17110a] rounded-xl p-3 border border-[#302213] space-y-2">
                    <span className="text-[11px] font-mono-code text-stone-400 uppercase tracking-wider block">
                      KEY TOWER MATRIX:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeStrat.keyTowers.slice(0, 3).map((tower, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-1.5 bg-[#251b11] border border-[#4d3620] px-2 py-1 rounded text-xs"
                        >
                          <span className="text-stone-200 font-semibold">{tower.name}</span>
                          <span className="font-mono-code font-bold text-amber-400 bg-amber-950/80 px-1 py-0.2 rounded text-[11px]">
                            {tower.crosspath}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Synergy Snapshot */}
                  <div className="text-xs text-stone-400 bg-amber-950/20 border border-amber-500/20 p-2.5 rounded-lg">
                    <span className="text-amber-400 font-bold">SYNERGY: </span>
                    <span className="text-stone-300">{activeStrat.synergyNotes.slice(0, 110)}...</span>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => {
                      soundManager.playFanfare();
                      onSelectStrategy(activeStrat);
                    }}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-game font-bold text-sm py-2.5 rounded-xl shadow-md transition-all active:scale-98 cursor-pointer"
                  >
                    <span>View Full Build Order &amp; Placement</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Carousel Indicators */}
              <div className="flex items-center justify-center space-x-2 pt-4">
                {featuredStrategies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      soundManager.playTap();
                      setCurrentSpotlightIndex(idx);
                    }}
                    aria-label={`Go to spotlight slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSpotlightIndex === idx ? 'w-6 bg-amber-400' : 'w-2 bg-stone-700 hover:bg-stone-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Global Stats Counter Ribbon */}
        <div className="mt-12 pt-8 border-t border-[#2d2114] grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-[#18130c]/90 rounded-xl p-3.5 sm:p-4 border border-[#3b2a18]">
            <span className="text-[11px] font-mono-code text-stone-400 block uppercase">CHIMPS Cash Pool</span>
            <div className="text-xl sm:text-2xl font-game font-bold text-amber-400 mt-0.5">$178,909</div>
            <span className="text-[11px] text-stone-400">Exact round 6-100 total</span>
          </div>

          <div className="bg-[#18130c]/90 rounded-xl p-3.5 sm:p-4 border border-[#3b2a18]">
            <span className="text-[11px] font-mono-code text-stone-400 block uppercase">Deadliest Round</span>
            <div className="text-xl sm:text-2xl font-game font-bold text-red-400 mt-0.5">Round 98</div>
            <span className="text-[11px] text-stone-400">104,240 RBE ceramic burst</span>
          </div>

          <div className="bg-[#18130c]/90 rounded-xl p-3.5 sm:p-4 border border-[#3b2a18]">
            <span className="text-[11px] font-mono-code text-stone-400 block uppercase">S+ Tier Heroes</span>
            <div className="text-xl sm:text-2xl font-game font-bold text-emerald-400 mt-0.5">Corvus / Sauda</div>
            <span className="text-[11px] text-stone-400">Top black border pick</span>
          </div>

          <div className="bg-[#18130c]/90 rounded-xl p-3.5 sm:p-4 border border-[#3b2a18]">
            <span className="text-[11px] font-mono-code text-stone-400 block uppercase">Verified Strats</span>
            <div className="text-xl sm:text-2xl font-game font-bold text-purple-400 mt-0.5">
              {totalStrategies} Blueprints
            </div>
            <span className="text-[11px] text-stone-400">
              {newThisPatch} new for the v57 cycle
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
