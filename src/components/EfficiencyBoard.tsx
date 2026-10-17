import React, { useEffect, useMemo, useState } from 'react';
import { Gauge, TrendingUp, Wallet, Timer, Sparkles, ArrowUpRight, Crown, Flame } from 'lucide-react';
import { Strategy } from '../types/btd6';
import { getEfficiency, RANK_LABEL, EfficiencyRank } from '../utils/efficiency';
import { soundManager } from '../utils/sound';

interface EfficiencyBoardProps {
  strategies: Strategy[];
  onSelectStrategy: (strat: Strategy) => void;
}

const RANK_STYLE: Record<EfficiencyRank, { chip: string; bar: string; text: string }> = {
  'S+': {
    chip: 'bg-amber-400 text-stone-950 border-amber-300',
    bar: 'from-amber-300 via-amber-400 to-amber-600',
    text: 'text-amber-300',
  },
  S: {
    chip: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
    bar: 'from-emerald-300 via-emerald-400 to-emerald-600',
    text: 'text-emerald-300',
  },
  A: {
    chip: 'bg-sky-500/20 text-sky-300 border-sky-500/50',
    bar: 'from-sky-300 via-sky-400 to-sky-600',
    text: 'text-sky-300',
  },
  B: {
    chip: 'bg-stone-500/20 text-stone-300 border-stone-500/50',
    bar: 'from-stone-400 via-stone-500 to-stone-600',
    text: 'text-stone-300',
  },
};

export const EfficiencyBoard: React.FC<EfficiencyBoardProps> = ({ strategies, onSelectStrategy }) => {
  const [barsArmed, setBarsArmed] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setBarsArmed(true), 120);
    return () => window.clearTimeout(t);
  }, []);

  const ranked = useMemo(
    () =>
      strategies
        .map((s) => ({ strategy: s, eff: getEfficiency(s) }))
        .sort((a, b) => b.eff.score - a.eff.score)
        .slice(0, 6),
    [strategies]
  );

  const valuePicks = useMemo(() => {
    const withEff = strategies.map((s) => ({ strategy: s, eff: getEfficiency(s) }));
    const cheapest = [...withEff].sort((a, b) => a.strategy.totalCostEstimate - b.strategy.totalCostEstimate)[0];
    const fastest = [...withEff]
      .filter((x) => x.strategy.coreOnlineRound !== undefined)
      .sort((a, b) => (a.strategy.coreOnlineRound ?? 999) - (b.strategy.coreOnlineRound ?? 999))[0];
    const laziest = [...withEff]
      .filter((x) => x.strategy.microIntensity === 'Low (AFK)')
      .sort((a, b) => b.eff.score - a.eff.score)[0];
    const biggest = [...withEff].sort((a, b) => b.strategy.winRate - a.strategy.winRate)[0];
    return [
      { icon: Wallet, label: 'Cheapest clear', value: `$${(cheapest?.strategy.totalCostEstimate ?? 0).toLocaleString()}`, name: cheapest?.strategy.title ?? '', tone: 'text-emerald-300', pick: cheapest?.strategy },
      { icon: Timer, label: 'Fastest core online', value: fastest?.strategy.coreOnlineRound ? `Round ${fastest.strategy.coreOnlineRound}` : '—', name: fastest?.strategy.title ?? '', tone: 'text-sky-300', pick: fastest?.strategy },
      { icon: Gauge, label: 'Best AFK value', value: laziest ? `${laziest.eff.score}/100` : '—', name: laziest?.strategy.title ?? '', tone: 'text-amber-300', pick: laziest?.strategy },
      { icon: Crown, label: 'Highest win rate', value: biggest ? `${biggest.strategy.winRate}%` : '—', name: biggest?.strategy.title ?? '', tone: 'text-purple-300', pick: biggest?.strategy },
    ];
  }, [strategies]);

  return (
    <section id="efficiency" className="relative py-14 sm:py-16 border-b border-[#3a2918] overflow-hidden">
      {/* Ambient layered backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 top-10 w-80 h-80 rounded-full bg-amber-600/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-emerald-700/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Leaderboard */}
          <div className="lg:col-span-8">
            <div className="flex items-end justify-between gap-4 mb-5">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono-code text-emerald-400 uppercase tracking-[0.2em] mb-1.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>Value per dollar — v57.2</span>
                </div>
                <h2 className="font-game text-3xl sm:text-4xl font-bold text-white leading-none">
                  EFFICIENCY <span className="text-emerald-400">LEADERBOARD</span>
                </h2>
              </div>
              <p className="hidden sm:block text-[11px] font-mono-code text-stone-500 max-w-[15rem] text-right leading-relaxed">
                55% verified winrate + 30% budget efficiency + 15% attention cost
              </p>
            </div>

            <ol className="space-y-2.5">
              {ranked.map(({ strategy, eff }, idx) => {
                const style = RANK_STYLE[eff.rank];
                return (
                  <li key={strategy.id}>
                    <button
                      onClick={() => {
                        soundManager.playPop(1 + idx * 0.08);
                        onSelectStrategy(strategy);
                      }}
                      className="w-full text-left group relative bg-[#17100a] border border-[#3a2818] hover:border-amber-500/60 rounded-xl px-4 py-3.5 transition-all duration-200 hover:translate-x-1 cursor-pointer overflow-hidden"
                    >
                      <div className="flex items-center gap-4">
                        {/* Rank numeral */}
                        <span className="font-game font-bold text-3xl sm:text-4xl leading-none text-[#3d2c1a] group-hover:text-amber-500/70 transition-colors w-10 sm:w-12 shrink-0">
                          {String(idx + 1).padStart(2, '0')}
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <h3 className="font-game font-bold text-sm sm:text-base text-white truncate group-hover:text-amber-300 transition-colors">
                              {strategy.title}
                            </h3>
                            {strategy.isNew && (
                              <span className="px-1.5 py-px rounded text-[10px] font-mono-code font-bold bg-emerald-500 text-stone-950 uppercase">
                                new
                              </span>
                            )}
                            <span className={`px-1.5 py-px rounded text-[10px] font-mono-code border ${style.chip}`}>
                              {eff.rank}
                            </span>
                          </div>

                          {/* Efficiency bar */}
                          <div className="mt-2 h-2 rounded-full bg-[#241a10] overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${style.bar} transition-[width] duration-1000 ease-out`}
                              style={{ width: barsArmed ? `${eff.score}%` : '0%' }}
                            />
                          </div>

                          <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono-code text-stone-400">
                            <span className={style.text}>{eff.score}/100 — {RANK_LABEL[eff.rank]}</span>
                            <span>${eff.costPerRound.toLocaleString()} / round</span>
                            <span>{strategy.difficulty}</span>
                            <span className="hidden sm:inline">{strategy.hero}</span>
                            {strategy.coreOnlineRound && <span>core @ R{strategy.coreOnlineRound}</span>}
                          </div>
                        </div>

                        <ArrowUpRight className="w-5 h-5 text-stone-600 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Value picks rail */}
          <aside className="lg:col-span-4 space-y-3">
            <div className="wood-panel rounded-2xl p-4 sm:p-5">
              <div className="flex items-center space-x-2 pb-3 mb-3 border-b border-[#3b2b1b]">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h3 className="font-game font-bold text-base text-white">Value Picks</h3>
                <span className="ml-auto text-[10px] font-mono-code text-emerald-400 border border-emerald-700/60 bg-emerald-950/60 px-1.5 py-px rounded">
                  v57.2
                </span>
              </div>

              <div className="space-y-2.5">
                {valuePicks.map((pick) => (
                  <button
                    key={pick.label}
                    disabled={!pick.pick}
                    onClick={() => {
                      if (!pick.pick) return;
                      soundManager.playFanfare();
                      onSelectStrategy(pick.pick);
                    }}
                    className="w-full text-left bg-[#150f09] hover:bg-[#20160d] border border-[#332415] hover:border-amber-500/40 rounded-xl p-3 transition-all cursor-pointer disabled:opacity-50 group"
                  >
                    <div className="flex items-center space-x-2 text-[11px] font-mono-code text-stone-400 uppercase tracking-wider">
                      <pick.icon className={`w-3.5 h-3.5 ${pick.tone}`} />
                      <span>{pick.label}</span>
                    </div>
                    <div className={`font-game font-bold text-lg ${pick.tone} leading-tight mt-0.5`}>
                      {pick.value}
                    </div>
                    <div className="text-[11px] text-stone-400 truncate group-hover:text-stone-300 transition-colors">
                      {pick.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Patch headline card */}
            <div className="rounded-2xl border border-red-800/50 bg-gradient-to-br from-[#241009] to-[#170d08] p-4 sm:p-5">
              <div className="flex items-center space-x-2 mb-2">
                <Flame className="w-4 h-4 text-red-400" />
                <span className="font-game font-bold text-base text-white">What changed in v57</span>
              </div>
              <ul className="space-y-2 text-[11px] text-stone-300 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-amber-400 font-mono-code shrink-0">56.0</span>
                  <span>Skywarden added (Magic) — Combo Marker chains, Thunder Charge, Winter's Mercy icesplosions.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 font-mono-code shrink-0">57.0</span>
                  <span>S.P.I.D.E.R. Sniper Paragon lands; Paragon Power reworked — upgrade tiers no longer grant Power, solo Degree 100 is now possible.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 font-mono-code shrink-0">57.0</span>
                  <span>Stormwrath Archon cut $35,000 → $32,000; Combo Marker debuff extended 2s → 3s; Thunder Charge 15s → 9s.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-400 font-mono-code shrink-0">57.2</span>
                  <span>Mini-Comanche targeting bug fixed, sniper shrapnel crosspaths corrected, Corvus Ancestral Might cast reliability restored.</span>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
};
