import React, { useState } from 'react';
import { ShieldAlert, AlertTriangle, Crosshair, Sparkles, CheckCircle2 } from 'lucide-react';
import { DANGEROUS_ROUNDS_DATA } from '../data/roundGuide';
import { RoundInfo } from '../types/btd6';
import { soundManager } from '../utils/sound';

export const RoundInspector: React.FC = () => {
  const [selectedRoundNumber, setSelectedRoundNumber] = useState<number>(63);

  const activeRound: RoundInfo = 
    DANGEROUS_ROUNDS_DATA.find((r) => r.round === selectedRoundNumber) || DANGEROUS_ROUNDS_DATA[4];

  const handleSelectRound = (rnd: number) => {
    soundManager.playTap();
    setSelectedRoundNumber(rnd);
  };

  const getDangerColor = (level: string) => {
    switch (level) {
      case 'EXTREME':
        return 'bg-red-950 text-red-300 border-red-600 animate-pulse';
      case 'High':
        return 'bg-orange-950 text-orange-300 border-orange-600';
      case 'Medium':
        return 'bg-amber-950 text-amber-300 border-amber-600';
      default:
        return 'bg-emerald-950 text-emerald-300 border-emerald-600';
    }
  };

  const getPropertyBadge = (prop: string) => {
    switch (prop) {
      case 'Camo':
        return 'bg-emerald-900/80 text-emerald-300 border-emerald-600';
      case 'Lead':
        return 'bg-stone-700/80 text-stone-200 border-stone-500';
      case 'DDT':
        return 'bg-slate-900 text-cyan-300 border-cyan-600';
      case 'BAD':
        return 'bg-purple-950 text-purple-300 border-purple-600';
      case 'Fortified':
        return 'bg-amber-950 text-amber-300 border-amber-600';
      case 'Regrow':
        return 'bg-rose-950 text-rose-300 border-rose-600';
      default:
        return 'bg-blue-950 text-blue-300 border-blue-600';
    }
  };

  return (
    <section id="round-guide" className="py-16 sm:py-20 bg-[#0e0a07] border-y border-[#3a2918]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 text-xs font-mono-code text-red-400 bg-red-950/40 border border-red-800/60 px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Lethal Wave Analysis</span>
          </div>
          <h2 className="font-game text-3xl sm:text-4xl font-bold text-white tracking-tight">
            ROUND DANGER <span className="text-red-400">INSPECTOR</span>
          </h2>
          <p className="text-sm text-stone-400 mt-2">
            BTD6 runs usually end on specific ambush waves. Pick a danger round below to preview its RBE, immunities, and counter-measures.
          </p>
        </div>

        {/* Round Selector Pill Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
          {DANGEROUS_ROUNDS_DATA.map((r) => {
            const isSelected = r.round === selectedRoundNumber;
            return (
              <button
                key={r.round}
                onClick={() => handleSelectRound(r.round)}
                className={`px-3.5 py-2 rounded-xl font-game text-xs sm:text-sm transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-amber-500 text-stone-950 font-bold border-amber-400 shadow-lg scale-105'
                    : 'bg-[#1b130c] text-stone-300 border-[#3d2a19] hover:bg-[#281b10] hover:text-amber-300'
                }`}
              >
                <span>Round {r.round}</span>
                {r.dangerLevel === 'EXTREME' && (
                  <span className="ml-1 text-[10px] text-red-400 font-mono-code">★</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Inspector Display Card */}
        <div className="wood-panel rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto border-2 border-[#5a3f24] shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Round Overview & Stats */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl sm:text-4xl font-game font-bold text-white">
                    Round {activeRound.round}
                  </span>
                </div>

                <span className={`px-2.5 py-1 rounded-lg text-xs font-game font-bold border ${getDangerColor(activeRound.dangerLevel)}`}>
                  {activeRound.dangerLevel} Threat
                </span>
              </div>

              {/* RBE Metric */}
              <div className="bg-[#140e08] rounded-xl p-3.5 border border-[#332314]">
                <div className="flex items-center justify-between text-xs font-mono-code mb-1">
                  <span className="text-stone-400">RED BLOON EQUIVALENT (RBE):</span>
                  <span className="text-amber-400 font-bold text-sm">
                    {activeRound.rbe.toLocaleString()} HP
                  </span>
                </div>
                {/* RBE Visual Progress bar */}
                <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" 
                    style={{ width: `${Math.min(100, (activeRound.rbe / 105000) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Bloon Immunities / Properties */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono-code text-stone-400 uppercase tracking-wider block">
                  ACTIVE BLOON IMMUNITIES &amp; TYPES:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeRound.specialProperties.map((prop, idx) => (
                    <span 
                      key={idx} 
                      className={`px-2 py-0.5 rounded text-xs font-bold font-mono-code border ${getPropertyBadge(prop)}`}
                    >
                      {prop}
                    </span>
                  ))}
                </div>
              </div>

              {/* Incoming Bloon Composition */}
              <div className="bg-[#19110a] rounded-xl p-3 border border-[#3b2716] space-y-1">
                <span className="text-[11px] font-mono-code text-stone-400 uppercase tracking-wider block">
                  NOTABLE AMBUSH BLOONS:
                </span>
                <ul className="text-xs text-stone-200 space-y-1">
                  {activeRound.notableBloons.map((bloon, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5">
                      <span className="text-amber-400">⚡</span>
                      <span>{bloon}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Breakdown & Recommended Counters */}
            <div className="md:col-span-7 space-y-4 md:border-l md:border-[#382617] md:pl-6">
              
              {/* Description */}
              <div className="space-y-1.5">
                <div className="flex items-center space-x-1.5 text-xs font-mono-code text-amber-400 font-bold uppercase">
                  <AlertTriangle className="w-4 h-4" />
                  <span>TACTICAL THREAT ASSESSMENT</span>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed bg-[#150f09] p-3.5 rounded-xl border border-[#332314]">
                  {activeRound.description}
                </p>
              </div>

              {/* Counter Towers Grid */}
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-mono-code text-emerald-400 font-bold uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>PRESCRIBED TOWER COUNTERS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeRound.recommendedCounters.map((counter, idx) => (
                    <div 
                      key={idx} 
                      className="bg-[#1a120b] border border-[#3e2b19] p-2.5 rounded-lg text-xs flex items-center space-x-2 text-stone-200"
                    >
                      <Crosshair className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="font-medium">{counter}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Strategy Advice */}
              <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-3 text-xs text-stone-400 flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Always check your camouflage decamo coverage and pierce capacity at least 3 rounds before Round {activeRound.round}!
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
