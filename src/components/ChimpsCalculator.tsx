import React, { useState } from 'react';
import { Calculator, DollarSign, CheckCircle2, AlertOctagon, HelpCircle } from 'lucide-react';
import { CHIMPS_INCOME_MILESTONES, POPULAR_TIER5_COSTS } from '../data/chimpsIncome';
import { soundManager } from '../utils/sound';

export const ChimpsCalculator: React.FC = () => {
  const [selectedRound, setSelectedRound] = useState<number>(63);
  const [selectedTower, setSelectedTower] = useState<string>(POPULAR_TIER5_COSTS[0].name);

  // Exact or interpolated cumulative cash calculation
  const getCashAtRound = (rnd: number): number => {
    // Find surrounding milestones
    const milestones = CHIMPS_INCOME_MILESTONES;
    if (rnd <= milestones[0].round) return milestones[0].cumulativeCash;
    if (rnd >= milestones[milestones.length - 1].round) return milestones[milestones.length - 1].cumulativeCash;

    for (let i = 0; i < milestones.length - 1; i++) {
      const curr = milestones[i];
      const next = milestones[i + 1];
      if (rnd >= curr.round && rnd <= next.round) {
        const ratio = (rnd - curr.round) / (next.round - curr.round);
        return Math.round(curr.cumulativeCash + ratio * (next.cumulativeCash - curr.cumulativeCash));
      }
    }
    return 178909;
  };

  const currentCash = getCashAtRound(selectedRound);
  const chosenTowerObj = POPULAR_TIER5_COSTS.find((t) => t.name === selectedTower) || POPULAR_TIER5_COSTS[0];
  const canAfford = currentCash >= chosenTowerObj.cost;
  const remainingCash = currentCash - chosenTowerObj.cost;

  const chimpsRules = [
    { letter: 'C', name: 'No Continues', desc: 'Game over is permanent if a single bloon leaks.' },
    { letter: 'H', name: 'No Hearts Lost', desc: 'You begin with 1 life and cannot regenerate hearts.' },
    { letter: 'I', name: 'No Income', desc: 'Farms, Ben cash, Merchantmen, and Lead to Gold yield $0.' },
    { letter: 'M', name: 'No Monkey Knowledge', desc: 'All MK passive bonuses are completely turned off.' },
    { letter: 'P', name: 'No Powers', desc: 'No Cash Drops, Super Monkeys, or Pontoon platforms.' },
    { letter: 'S', name: 'No Selling', desc: 'Every tower placed is permanent. 0% resale value.' }
  ];

  return (
    <section id="chimps-calc" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono-code text-amber-400 uppercase tracking-widest mb-1.5">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>DETERMINISTIC INCOME SIMULATOR</span>
          </div>
          <h2 className="font-game text-3xl sm:text-4xl font-bold text-white tracking-tight">
            CHIMPS CASH &amp; TIER 5 <span className="text-amber-400">PLANNER</span>
          </h2>
          <p className="text-sm text-stone-400 mt-1 max-w-2xl">
            Because CHIMPS mode completely disables all income towers, cash flow is 100% predictable. Test whether your planned Tier 5 fits into your midgame budget!
          </p>
        </div>

        <div className="bg-[#1a120b] border border-[#3f2a17] rounded-xl px-4 py-2.5 text-xs text-stone-300">
          <span className="text-stone-400 block font-mono-code">TOTAL CHIMPS CASH POOL</span>
          <span className="font-game font-bold text-lg text-emerald-400">$178,909 Cash</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Interactive Calculator Tool */}
        <div className="lg:col-span-7 wood-panel rounded-2xl p-6 sm:p-7 space-y-6">
          
          {/* Round Slider Control */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="round-slider" className="font-game font-bold text-base text-white">
                Select Round Milestone:
              </label>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-lg bg-amber-950 text-amber-300 font-game font-bold text-base border border-amber-600">
                  Round {selectedRound}
                </span>
              </div>
            </div>

            <input
              id="round-slider"
              type="range"
              min="6"
              max="100"
              value={selectedRound}
              onChange={(e) => {
                soundManager.playTap();
                setSelectedRound(Number(e.target.value));
              }}
              className="w-full accent-amber-500 h-2.5 bg-stone-800 rounded-lg cursor-pointer"
            />

            <div className="flex justify-between text-[11px] font-mono-code text-stone-500">
              <span>R6 (Start)</span>
              <span>R40 (MOAB)</span>
              <span>R63 (Ceramics)</span>
              <span>R80 (ZOMG)</span>
              <span>R95 (DDT)</span>
              <span>R100 (BAD)</span>
            </div>
          </div>

          {/* Real-time Cash Display */}
          <div className="bg-[#140e08] rounded-xl p-4 border border-[#332314] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-[11px] font-mono-code text-stone-400 block uppercase">
                  Accumulated CHIMPS Cash
                </span>
                <span className="font-game font-bold text-2xl text-emerald-400">
                  ${currentCash.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="text-right text-xs font-mono-code text-stone-400">
              <span>{Math.round((currentCash / 178909) * 100)}% of game cash</span>
            </div>
          </div>

          {/* Tier 5 Affordability Checker */}
          <div className="space-y-3 pt-2">
            <label className="font-game font-bold text-sm text-stone-200 block">
              Test Tier 5 Affordability Target:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <select
                  value={selectedTower}
                  onChange={(e) => {
                    soundManager.playTap();
                    setSelectedTower(e.target.value);
                  }}
                  className="w-full bg-[#17100a] border border-[#44301d] rounded-xl px-3 py-2.5 text-sm text-stone-200 focus:outline-none focus:border-amber-500 cursor-pointer"
                >
                  {POPULAR_TIER5_COSTS.map((t) => (
                    <option key={t.name} value={t.name}>
                      {t.name} (${t.cost.toLocaleString()})
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Outcome Card */}
              <div className={`rounded-xl p-3 border flex items-center space-x-3 ${
                canAfford 
                  ? 'bg-emerald-950/40 border-emerald-600/60 text-emerald-300' 
                  : 'bg-rose-950/40 border-rose-600/60 text-rose-300'
              }`}>
                {canAfford ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <AlertOctagon className="w-5 h-5 text-rose-400 shrink-0" />
                )}
                <div>
                  <div className="font-game font-bold text-sm">
                    {canAfford ? 'Affordable by this Round!' : 'Insufficient Cash'}
                  </div>
                  <div className="text-[11px] font-mono-code">
                    {canAfford 
                      ? `$${remainingCash.toLocaleString()} spare cash remaining` 
                      : `Deficit: -$${Math.abs(remainingCash).toLocaleString()}`}
                  </div>
                </div>
              </div>
            </div>

            {/* Tactical Advice */}
            <p className="text-xs text-stone-400 bg-[#160f09] p-3 rounded-xl border border-[#302113]">
              {canAfford ? (
                <span>
                  💡 <strong>Safe to purchase!</strong> You have enough leftover cash to maintain Village radar scanners and Alchemist buffs.
                </span>
              ) : (
                <span>
                  ⚠️ <strong>Greed warning:</strong> You cannot afford {chosenTowerObj.name} yet. Rely on strong midgame bridges (like 2-0-4 Recursive Bomb or 4-0-1 Bloonjitsu) until cash accumulates!
                </span>
              )}
            </p>
          </div>

        </div>

        {/* Right Rules Breakdown & Milestone Table */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* CHIMPS Rules Reference */}
          <div className="wood-panel rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 className="font-game font-bold text-lg text-white flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span>The Strict C.H.I.M.P.S. Rules</span>
            </h3>

            <div className="grid grid-cols-2 gap-2.5">
              {chimpsRules.map((rule) => (
                <div key={rule.letter} className="bg-[#150f09] border border-[#312213] rounded-xl p-2.5 space-y-0.5">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-5 h-5 rounded-md bg-amber-500 text-stone-950 font-game font-bold text-xs flex items-center justify-center">
                      {rule.letter}
                    </span>
                    <span className="text-xs font-semibold text-stone-200">{rule.name}</span>
                  </div>
                  <p className="text-[11px] text-stone-400 pl-6 leading-tight">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Benchmark Milestones */}
          <div className="bg-[#140e08] rounded-2xl p-5 border border-[#382617] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono-code text-amber-400 uppercase tracking-wider">
                KEY CASH BENCHMARKS
              </span>
              <HelpCircle className="w-3.5 h-3.5 text-stone-500" />
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-[#24170d]">
                <span className="text-stone-300">Round 40 (First MOAB):</span>
                <span className="font-mono-code font-bold text-amber-300">$14,142</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#24170d]">
                <span className="text-stone-300">Round 63 (Ceramic Swarm):</span>
                <span className="font-mono-code font-bold text-amber-300">$41,208</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#24170d]">
                <span className="text-stone-300">Round 80 (Half Cash End):</span>
                <span className="font-mono-code font-bold text-amber-300">$94,842</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-stone-300">Round 98 (Fortified Horde):</span>
                <span className="font-mono-code font-bold text-amber-300">$169,200</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
