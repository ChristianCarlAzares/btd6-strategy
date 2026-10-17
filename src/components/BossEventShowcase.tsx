import React, { useState } from 'react';
import { Award, AlertTriangle, Skull } from 'lucide-react';
import { soundManager } from '../utils/sound';

interface BossInfo {
  id: string;
  name: string;
  title: string;
  gimmick: string;
  dangerLevel: string;
  skullTriggers: string;
  recommendedSetup: string[];
  tabooStrategy: string;
  paragonPriority: string;
}

export const BossEventShowcase: React.FC = () => {
  const bosses: BossInfo[] = [
    {
      id: 'bloonarius',
      name: 'Bloonarius',
      title: 'The Inflator (HP Titan)',
      gimmick: 'Has gigantic raw health pools. Upon reaching each skull threshold (every 25% HP), vomits massive hordes of ceramics, BFBs, and ZOMGs right onto the track.',
      dangerLevel: 'Tier 5 HP: 40,000,000',
      skullTriggers: 'Spits dense ceramic clusters (T1-T2) and fortified ZOMGs (T4-T5)',
      recommendedSetup: [
        'T1 (R40): 2-0-5 Tack Zone + 4-2-0 Alchemist',
        'T2 (R60): 1-5-0 M.A.D. Dartling Gunner',
        'T3 (R80): Degree 30+ Apex Plasma Master (Dart Paragon)',
        'T4 (R100): Goliath Doomship + Navarch of the Seas',
        'T5 (R120): Triple Paragons + Super Brittle / Cripple Moab debuffs'
      ],
      tabooStrategy: 'Weak low-pierce single-target towers (they get overrun by ceramic vomit)',
      paragonPriority: 'Dart Paragon (Apex Plasma) -> Ace Paragon (Goliath)'
    },
    {
      id: 'lych',
      name: 'Lych',
      title: 'The Soul Dipsomaniac',
      gimmick: 'Passively detects and STEALS any temporary buffs applied to towers (Alchemist brew, Overclock, Homeland Defense, Call to Arms) and heals itself while draining your lives!',
      dangerLevel: 'Tier 5 HP: 24,000,000',
      skullTriggers: 'Revives an invulnerable ghost Lych-Soul that races straight toward the map exit',
      recommendedSetup: [
        'T1 (R40): 1-0-4 Sticky Bomb Ninja + 2-0-4 Overdrive (NO ALCHEMIST BREW!)',
        'T2 (R60): Master Bomber (1-0-5) + Spike Storm (0-4-0)',
        'T3-T5: Permanent buff towers only (e.g. Village 2-0-2 or Shinobi Tactics) + Paragons'
      ],
      tabooStrategy: 'NEVER use Alchemist Berserker Brew or Overclock near Lych! Lych will heal millions of HP.',
      paragonPriority: 'Ninja Paragon (Ascended Shadow - immune to buff steal)'
    },
    {
      id: 'vortex',
      name: 'Vortex',
      title: 'Deadly Quiet (Speed Demon)',
      gimmick: 'Travels twice as fast as standard blimps. Periodically deploys an electromagnetic shockwave that completely freezes/stuns nearby monkeys for 10-20 seconds.',
      dangerLevel: 'Tier 5 HP: 20,000,000',
      skullTriggers: 'Summons a lightning storm barrier that deflects non-energy projectiles',
      recommendedSetup: [
        'Long-range towers placed outside the stun blast radius (Snipers, Aces, Mortars)',
        'Apex Plasma Master placed far back with cross-map bouncing projectiles',
        'Flying Fortress (2-0-5 Ace) with global targeting'
      ],
      tabooStrategy: 'Clustering towers in close melee range around the track (gets permanently stunned)',
      paragonPriority: 'Ace Paragon (Goliath Doomship) + Boomerang Paragon'
    },
    {
      id: 'dreadbloon',
      name: 'Dreadbloon',
      title: 'Armored Behemoth',
      gimmick: 'Encases itself in rocky armor layers. In each phase, develops total immunity to one specific tower category (Primary Immune -> Military Immune -> Magic Immune -> Support Immune).',
      dangerLevel: 'Tier 5 HP: 32,000,000',
      skullTriggers: 'Spawns high-armor Rock Bloons that move along secondary pathways',
      recommendedSetup: [
        'Diversified loadout with multiple tower classes to alternate when immunities shift',
        'Cripple MOAB + Glue Storm for universal debuff penetration',
        'Paragons (Paragons deal damage through Dreadbloon immunities)'
      ],
      tabooStrategy: 'Monoculture defense (e.g. relying only on Magic towers)',
      paragonPriority: 'Engineer Paragon (Master Builder) + Dart Paragon'
    },
    {
      id: 'phayze',
      name: 'Phayze',
      title: 'The Chrono-Drifter',
      gimmick: 'Disrupts the time-space continuum. Periodically warps forward along the track, stripping camouflage detection from your towers and generating portal rifts.',
      dangerLevel: 'Tier 5 HP: 28,000,000',
      skullTriggers: 'Time jumps forward 15% of track and activates portal shields',
      recommendedSetup: [
        'Etienne Level 8 (global permanent camo bypass)',
        'Submerge Subs (3-0-0) placed in water',
        'Paragons with native Camo detection (Navarch, Ascended Shadow)'
      ],
      tabooStrategy: 'Relying on single localized Village radar scanners (Phayze disables them)',
      paragonPriority: 'Sub Paragon (Nautic Siege Core) + Ninja Paragon'
    }
  ];

  const [activeBossId, setActiveBossId] = useState<string>('bloonarius');
  const activeBoss = bosses.find((b) => b.id === activeBossId) || bosses[0];

  return (
    <section id="boss-events" className="py-16 sm:py-20 relative overflow-hidden border-b border-[#3b2a18]">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/chimps-boss-banner.jpg"
          alt="Boss Event Encounter"
          className="w-full h-full object-cover object-center opacity-15 filter blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0a07] via-[#0d0a07]/90 to-[#0d0a07]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono-code text-amber-400 uppercase tracking-widest mb-1.5">
              <Skull className="w-4 h-4 text-amber-400" />
              <span>ELITE RANKED BOSS PROTOCOLS</span>
            </div>
            <h2 className="font-game text-3xl sm:text-4xl font-bold text-white tracking-tight">
              BOSS EVENT <span className="text-amber-400">MASTERY</span>
            </h2>
            <p className="text-sm text-stone-400 mt-1 max-w-2xl">
              Ranked Boss Events require distinct farming formulas and strict rules (e.g. never giving Lych temporary buffs).
            </p>
          </div>

          <div className="inline-flex items-center space-x-1.5 bg-red-950/60 border border-red-700/60 px-3 py-1.5 rounded-xl text-xs font-mono-code text-red-300">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
            <span>GLOBAL BOSS LEADERBOARD ACTIVE</span>
          </div>
        </div>

        {/* Boss Switcher Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin">
          {bosses.map((boss) => {
            const isActive = boss.id === activeBoss.id;
            return (
              <button
                key={boss.id}
                onClick={() => {
                  soundManager.playTap();
                  setActiveBossId(boss.id);
                }}
                className={`px-4 py-2.5 rounded-xl font-game text-sm transition-all cursor-pointer border whitespace-nowrap flex items-center space-x-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold border-amber-400 shadow-lg scale-102'
                    : 'bg-[#1a120b] text-stone-300 border-[#382717] hover:bg-[#25190f] hover:text-amber-300'
                }`}
              >
                <span>💀 {boss.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Boss Card */}
        <div className="wood-panel rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[#3b2b1b]">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-game text-2xl sm:text-3xl font-bold text-white">
                  {activeBoss.name}
                </h3>
                <span className="text-xs font-mono-code text-amber-400 px-2.5 py-0.5 rounded bg-amber-950/80 border border-amber-600">
                  {activeBoss.title}
                </span>
              </div>
              <p className="text-sm text-stone-300 mt-2 max-w-3xl leading-relaxed">
                {activeBoss.gimmick}
              </p>
            </div>

            <div className="bg-[#170f09] border border-red-700/50 rounded-xl px-4 py-2.5 text-right">
              <span className="text-[10px] font-mono-code text-stone-400 uppercase block">Total Scaling</span>
              <span className="font-game font-bold text-red-400 text-base">{activeBoss.dangerLevel}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Recommended Tier-by-Tier Loadout */}
            <div className="space-y-3">
              <span className="text-xs font-mono-code text-amber-400 uppercase tracking-wider block">
                RECOMMENDED TIER-BY-TIER LOADOUT:
              </span>
              <div className="space-y-2">
                {activeBoss.recommendedSetup.map((setup, idx) => (
                  <div
                    key={idx}
                    className="bg-[#160f08] border border-[#352516] p-2.5 rounded-lg text-xs flex items-center space-x-2 text-stone-200"
                  >
                    <span className="w-5 h-5 rounded bg-amber-500/20 text-amber-400 font-mono-code font-bold text-[11px] flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-medium">{setup}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fatal Mistakes & Paragons */}
            <div className="space-y-4">
              
              {/* Taboo Warning */}
              <div className="bg-rose-950/30 border-l-4 border-rose-500 p-3.5 rounded-r-xl space-y-1">
                <div className="flex items-center space-x-1.5 text-rose-400 font-game font-bold text-sm">
                  <AlertTriangle className="w-4 h-4" />
                  <span>CRITICAL TABOO / INSTANT LOSS CONDITION:</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {activeBoss.tabooStrategy}
                </p>
              </div>

              {/* Skull Triggers */}
              <div className="bg-[#17100a] border border-[#3d2a19] p-3.5 rounded-xl space-y-1">
                <span className="text-[11px] font-mono-code text-amber-400 uppercase font-bold block">
                  SKULL THRESHOLD AMBUSH:
                </span>
                <p className="text-xs text-stone-300">
                  {activeBoss.skullTriggers}
                </p>
              </div>

              {/* Paragon Priority */}
              <div className="bg-[#17100a] border border-[#3d2a19] p-3.5 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono-code text-stone-400 uppercase block">Recommended Paragon Route</span>
                  <span className="font-game font-bold text-amber-300 text-sm">{activeBoss.paragonPriority}</span>
                </div>
                <Award className="w-5 h-5 text-amber-400" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
