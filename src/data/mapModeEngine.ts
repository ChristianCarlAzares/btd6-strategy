import { MapBlueprint, MapSetupPiece } from './mapAtlasEasy';

export type ModeCategory = 'Easy' | 'Medium' | 'Hard' | 'Special';

export type AtlasModeId =
  | 'easy-standard'
  | 'primary-only'
  | 'deflation'
  | 'medium-standard'
  | 'apopalypse'
  | 'military-only'
  | 'reverse'
  | 'hard-standard'
  | 'magic-only'
  | 'double-hp-moabs'
  | 'half-cash'
  | 'abr'
  | 'impoppable'
  | 'chimps'
  | 'sandbox'
  | 'coop'
  | 'boss-event'
  | 'odyssey'
  | 'race'
  | 'daily-challenge';

export interface ModeMetadata {
  id: AtlasModeId;
  name: string;
  shortName: string;
  category: ModeCategory;
  rounds: string;
  lives: string;
  costModifier: string;
  rulesSummary: string;
  badgeColor: string;
  accentColor: string;
}

export interface ModeRoundBenchmark {
  round: string;
  action: string;
}

export interface MapModeStrategy {
  modeId: AtlasModeId;
  modeName: string;
  category: ModeCategory;
  rounds: string;
  hero: string;
  setup: MapSetupPiece[];
  budget: number;
  budgetLabel: string;
  coreRound: string;
  eff: 'S+' | 'S' | 'A' | 'B';
  benchmarks: ModeRoundBenchmark[];
  whyItWorks: string;
  pitfall: string;
  linkedVaultId?: string;
}

export const ALL_GAME_MODES: ModeMetadata[] = [
  // ── EASY DIFFICULTY MODES ────────────────────────────────────────────────
  {
    id: 'easy-standard',
    name: 'Standard (Easy)',
    shortName: 'Easy Std',
    category: 'Easy',
    rounds: 'Rounds 1–40',
    lives: '200 Lives',
    costModifier: '-15% Tower Cost',
    rulesSummary: 'Runs for 40 rounds, starts with 200 lives, and all towers and upgrades cost 15% less.',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
    accentColor: 'text-emerald-400',
  },
  {
    id: 'primary-only',
    name: 'Primary Only',
    shortName: 'Primary Only',
    category: 'Easy',
    rounds: 'Rounds 1–40',
    lives: '200 Lives',
    costModifier: '-15% Tower Cost',
    rulesSummary: 'Restricts tower selection strictly to Primary monkeys (Dart, Boomerang, Bomb, Tack, Ice, Glue) and Heroes for 40 rounds.',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/50',
    accentColor: 'text-sky-400',
  },
  {
    id: 'deflation',
    name: 'Deflation',
    shortName: 'Deflation',
    category: 'Easy',
    rounds: 'Rounds 31–60',
    lives: '200 Lives',
    costModifier: '$20,000 Lump Sum (0 Income)',
    rulesSummary: 'Starts at Round 31 with a fixed $20,000 cash pool, zero natural income from pops or rounds, running AFK to Round 60.',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/50',
    accentColor: 'text-teal-400',
  },

  // ── MEDIUM DIFFICULTY MODES ──────────────────────────────────────────────
  {
    id: 'medium-standard',
    name: 'Standard (Medium)',
    shortName: 'Medium Std',
    category: 'Medium',
    rounds: 'Rounds 1–60',
    lives: '150 Lives',
    costModifier: '1.0× Baseline Cost',
    rulesSummary: 'The baseline BTD6 experience running for 60 rounds with 150 lives and standard 100% upgrade pricing.',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/50',
    accentColor: 'text-blue-400',
  },
  {
    id: 'apopalypse',
    name: 'Apopalypse',
    shortName: 'Apopalypse',
    category: 'Medium',
    rounds: 'Rounds 1–60 (Continuous)',
    lives: '150 Lives',
    costModifier: 'No End-of-Round Cash',
    rulesSummary: 'Continuous, relentless Bloon waves with randomized compositions up to Round 60 without inter-round breaks or end-of-round cash.',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50',
    accentColor: 'text-indigo-400',
  },
  {
    id: 'military-only',
    name: 'Military Only',
    shortName: 'Military Only',
    category: 'Medium',
    rounds: 'Rounds 1–60',
    lives: '150 Lives',
    costModifier: '1.0× Baseline Cost',
    rulesSummary: 'Restricts tower selection strictly to Military monkeys (Sniper, Sub, Buccaneer, Ace, Heli, Mortar, Dartling) and Heroes.',
    badgeColor: 'bg-lime-500/20 text-lime-300 border-lime-500/50',
    accentColor: 'text-lime-400',
  },
  {
    id: 'reverse',
    name: 'Reverse',
    shortName: 'Reverse',
    category: 'Medium',
    rounds: 'Rounds 1–60',
    lives: '150 Lives',
    costModifier: 'Flipped Track Direction',
    rulesSummary: 'Bloons travel along the track in the opposite direction (exits become entrances) and send waves in reverse order.',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50',
    accentColor: 'text-cyan-400',
  },

  // ── HARD DIFFICULTY MODES ────────────────────────────────────────────────
  {
    id: 'hard-standard',
    name: 'Standard (Hard)',
    shortName: 'Hard Std',
    category: 'Hard',
    rounds: 'Rounds 3–80',
    lives: '100 Lives',
    costModifier: '+8% Tower Cost',
    rulesSummary: 'Runs from Round 3 to Round 80 (ZOMG boss) with 100 lives and an 8% cost increase on all towers and upgrades.',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/50',
    accentColor: 'text-amber-400',
  },
  {
    id: 'magic-only',
    name: 'Magic Monkeys Only',
    shortName: 'Magic Only',
    category: 'Hard',
    rounds: 'Rounds 3–80',
    lives: '100 Lives',
    costModifier: '+8% Tower Cost',
    rulesSummary: 'Allows only Magic monkeys (Wizard, Super, Ninja, Alchemist, Druid, Mermonkey, Skywarden) and Heroes through Round 80.',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/50',
    accentColor: 'text-purple-400',
  },
  {
    id: 'double-hp-moabs',
    name: 'Double HP MOABs',
    shortName: '2× HP MOABs',
    category: 'Hard',
    rounds: 'Rounds 3–80',
    lives: '100 Lives',
    costModifier: '200% Blimp Hull HP',
    rulesSummary: 'All MOAB-class blimps (MOAB, BFB, ZOMG, DDT) spawn with double their standard health pools.',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/50',
    accentColor: 'text-orange-400',
  },
  {
    id: 'half-cash',
    name: 'Half Cash',
    shortName: 'Half Cash',
    category: 'Hard',
    rounds: 'Rounds 3–80',
    lives: '100 Lives',
    costModifier: '-50% All Cash Income',
    rulesSummary: 'All cash income (popping Bloons, round bonuses, banana farms, and cash drops) is cut in half.',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/50',
    accentColor: 'text-rose-400',
  },
  {
    id: 'abr',
    name: 'Alternate Bloons Rounds (ABR)',
    shortName: 'ABR',
    category: 'Hard',
    rounds: 'Rounds 3–80',
    lives: '100 Lives',
    costModifier: 'Early Camo/Lead/Fortified',
    rulesSummary: 'Remixed, trickier wave compositions: Stealth Camo at R5, Lead at R10, Camo-Lead at R24, Fortified MOAB at R40, and 2 ZOMGs by R80.',
    badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/50',
    accentColor: 'text-fuchsia-400',
  },
  {
    id: 'impoppable',
    name: 'Impoppable',
    shortName: 'Impoppable',
    category: 'Hard',
    rounds: 'Rounds 6–100',
    lives: '1 Life',
    costModifier: '+20% Tower Cost',
    rulesSummary: 'Starts at Round 6 with 1 life, +20% tower prices, no life generation, and runs all the way to the Round 100 BAD.',
    badgeColor: 'bg-red-500/20 text-red-300 border-red-500/50',
    accentColor: 'text-red-400',
  },
  {
    id: 'chimps',
    name: 'C.H.I.M.P.S.',
    shortName: 'CHIMPS',
    category: 'Hard',
    rounds: 'Rounds 6–100',
    lives: '1 Life (Black Border)',
    costModifier: '$178,909 Fixed Pool',
    rulesSummary: 'No Continues, Hearts lost, Income, Monkey Knowledge, Powers, or Selling. Runs to Round 100 for the Black Border medal.',
    badgeColor: 'bg-red-600 text-white border-red-400',
    accentColor: 'text-red-400',
  },

  // ── SPECIAL, SANDBOX & EVENT MODES ───────────────────────────────────────
  {
    id: 'sandbox',
    name: 'Sandbox Mode',
    shortName: 'Sandbox',
    category: 'Special',
    rounds: 'Freeplay / Custom Test',
    lives: '9,999,999 Lives',
    costModifier: '9,999,999 Cash Lab',
    rulesSummary: 'Freeplay testing lab with unlimited cash & lives where you can spawn ghost R98/R100 waves to benchmark DPS.',
    badgeColor: 'bg-amber-400/20 text-amber-300 border-amber-400/50',
    accentColor: 'text-amber-300',
  },
  {
    id: 'coop',
    name: 'Co-Op Mode',
    shortName: 'Co-Op (2–4P)',
    category: 'Special',
    rounds: 'Rounds 1–100 (Multiplayer)',
    lives: 'Shared Lives',
    costModifier: 'Split Cash & Hero XP',
    rulesSummary: 'Multiplayer variant (2 to 4 players) where screen quadrants, starting cash, pop income, and hero XP are divided.',
    badgeColor: 'bg-emerald-400/20 text-emerald-300 border-emerald-400/50',
    accentColor: 'text-emerald-300',
  },
  {
    id: 'boss-event',
    name: 'Boss Events',
    shortName: 'Boss Event',
    category: 'Special',
    rounds: 'Rounds 1–120 (5 Tiers)',
    lives: 'Boss Skull Rules',
    costModifier: 'Paragon & Farm Meta',
    rulesSummary: 'Weekly challenges featuring Bloonarius, Vortex, Dreadbloon, Phayze, Lych, and Blastapopoulos with 5 skull tiers (R40–120).',
    badgeColor: 'bg-orange-600/30 text-orange-200 border-orange-500/60',
    accentColor: 'text-orange-400',
  },
  {
    id: 'odyssey',
    name: 'Odyssey',
    shortName: 'Odyssey',
    category: 'Special',
    rounds: '3–5 Map Campaign',
    lives: 'Shared Crew Pool',
    costModifier: 'Restricted Crew Slots',
    rulesSummary: 'Multi-map mini-campaign where a single locked crew of towers must clear 3 to 5 consecutive islands.',
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/50',
    accentColor: 'text-violet-400',
  },
  {
    id: 'race',
    name: 'Race Mode',
    shortName: 'Race Clock',
    category: 'Special',
    rounds: 'Full-Send Speedrun',
    lives: 'Timed Leaderboard',
    costModifier: 'Instant Wave Send Button',
    rulesSummary: 'Timed competitive mode where players send out dozens of rounds simultaneously to post sub-2-minute clear times.',
    badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
    accentColor: 'text-yellow-400',
  },
  {
    id: 'daily-challenge',
    name: 'Daily / Advanced Challenges',
    shortName: 'AC / DC Puzzle',
    category: 'Special',
    rounds: '1–5 Puzzle Rounds',
    lives: 'Modified Ruleset',
    costModifier: 'Max Bloch / Micro Puzzle',
    rulesSummary: 'Curated puzzle rulesets testing hidden mechanics: camo-trap stripping, micro sell-rebuy, and exact pierce thresholds.',
    badgeColor: 'bg-pink-500/20 text-pink-300 border-pink-500/50',
    accentColor: 'text-pink-400',
  },
];

export const MODE_CATEGORIES: { id: ModeCategory; label: string; subtitle: string }[] = [
  { id: 'Easy', label: 'Easy Modes (3)', subtitle: 'Standard · Primary Only · Deflation' },
  { id: 'Medium', label: 'Medium Modes (4)', subtitle: 'Standard · Apopalypse · Military Only · Reverse' },
  { id: 'Hard', label: 'Hard Modes (7)', subtitle: 'Hard · Magic Only · 2× MOAB · Half Cash · ABR · Impoppable · CHIMPS' },
  { id: 'Special', label: 'Special & Events (6)', subtitle: 'Sandbox · Co-Op · Bosses · Odyssey · Race · Challenges' },
];

export function getModeMetadata(modeId: AtlasModeId): ModeMetadata {
  return ALL_GAME_MODES.find((m) => m.id === modeId) ?? ALL_GAME_MODES[13];
}

/**
 * Generates a map-geometry-aware, rule-verified strategy for any of the 90 maps
 * on any of the 20 game modes.
 */
export function getMapModeStrategy(map: MapBlueprint, modeId: AtlasModeId): MapModeStrategy {
  const meta = getModeMetadata(modeId);
  const isMultiLane = map.entrances > 1 || map.exits > 1;
  const isTightLoop = map.glyph === 'loop' || map.glyph === 'spiral';
  const hasWater = map.water;
  const isShortTrack = map.rbs < 16;

  switch (modeId) {
    // ── 1. STANDARD (EASY) ───────────────────────────────────────────────────
    case 'easy-standard': {
      if (hasWater && !isTightLoop) {
        return {
          modeId,
          modeName: meta.name,
          category: meta.category,
          rounds: meta.rounds,
          hero: 'Sauda / Admiral Brickell',
          setup: [
            { t: 'Monkey Buccaneer', p: '3-2-0 Destroyer' },
            { t: 'Monkey Sub', p: '2-0-4 Armor Piercing Darts' },
            { t: 'Alchemist', p: '3-2-0 Berserker Brew' },
            { t: 'Monkey Village', p: '2-2-0 Radar + Drums' },
          ],
          budget: 14200,
          budgetLabel: '$14.2k (−15% Easy prices)',
          coreRound: 'R31',
          eff: 'S+',
          benchmarks: [
            { round: 'R1–15', action: `Drop Hero + 0-1-0 Buccaneer in ${map.name}'s water basin.` },
            { round: 'R16–28', action: 'Upgrade 0-2-0 Hot Shot for R28 leads, then 3-2-0 Destroyer.' },
            { round: 'R29–40', action: 'Add 2-0-4 Sub + 3-2-0 Alch; Round 40 MOAB evaporates in 2 seconds.' },
          ],
          whyItWorks: `With 15% cheaper upgrades and ${map.name}'s water coverage (RBS ${map.rbs}), a 3-2-0 Destroyer + 2-0-4 Sub costs under $11k and deletes everything through Round 40.`,
          pitfall: map.pitfall,
          linkedVaultId: 'strat-sub-commander-armada',
        };
      }
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: isMultiLane ? 'Etienne / Psi' : 'Sauda',
        setup: isMultiLane
          ? [
              { t: 'Sniper Monkey', p: '0-3-2 Bouncing Bullet' },
              { t: 'Sniper Monkey', p: '2-0-4 Full Auto Rifle' },
              { t: 'Alchemist', p: '3-2-0 Berserker Brew' },
              { t: 'Bomb Shooter', p: '2-0-4 Recursive Cluster' },
            ]
          : [
              { t: 'Ninja Monkey', p: '4-0-1 Bloonjitsu' },
              { t: 'Alchemist', p: '4-2-0 Stronger Stimulant' },
              { t: 'Tack Shooter', p: '2-0-4 Overdrive' },
              { t: 'Monkey Village', p: '2-0-2 Drums + Discount' },
            ],
        budget: 13800,
        budgetLabel: '$13.8k (−15% Easy prices)',
        coreRound: 'R29',
        eff: 'S+',
        benchmarks: [
          { round: 'R1–14', action: `Drop ${isMultiLane ? '0-0-0 Sniper + Hero' : 'Sauda + 2-0-1 Ninja'} on ${map.name}'s main choke.` },
          { round: 'R15–28', action: 'Purchase 3-0-0 Alchemist before Round 28 so lead bloons melt immediately.' },
          { round: 'R29–40', action: isMultiLane ? 'Complete 2-0-4 Full Auto Sniper to snipe the R40 MOAB across all lanes.' : 'Complete 4-0-1 Bloonjitsu + 2-0-4 Overdrive to shred the R40 MOAB.' },
        ],
        whyItWorks: `Easy mode's 15% price cut lets you hit Tier 4 power spikes 6 rounds early on ${map.name}, turning Round 40 into a 1-second pop.`,
        pitfall: map.pitfall,
        linkedVaultId: 'strat-ninja-alch-sauda',
      };
    }

    // ── 2. PRIMARY ONLY ──────────────────────────────────────────────────────
    case 'primary-only': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: isMultiLane ? 'Etienne (Global Camo at L8)' : 'Sauda / Quincy',
        setup: isTightLoop
          ? [
              { t: 'Tack Shooter', p: '2-0-4 Overdrive' },
              { t: 'Ice Monkey', p: '4-2-0 Embrittlement (Decamo + +1 Dmg)' },
              { t: 'Bomb Shooter', p: '2-0-4 Recursive Cluster' },
              { t: 'Glue Gunner', p: '0-2-3 MOAB Glue' },
            ]
          : [
              { t: 'Dart Monkey', p: '0-2-4 Sharp Shooter (Camo + Crits)' },
              { t: 'Boomerang', p: '4-0-2 M.O.A.R. Glaives' },
              { t: 'Bomb Shooter', p: '0-3-2 MOAB Mauler' },
              { t: 'Ice Monkey', p: '4-2-0 Embrittlement (Decamo)' },
            ],
        budget: 15100,
        budgetLabel: '$15.1k (Primary Towers Only)',
        coreRound: 'R32',
        eff: 'S+',
        benchmarks: [
          { round: 'R1–23', action: `Open with Hero + ${isTightLoop ? '2-0-3 Tack Sprayer' : '0-2-3 Crossbow Dart'} covering ${map.name}'s primary turn.` },
          { round: 'R24–28', action: 'Crossbow handles R24 Camo; drop 0-0-0 Bomb or 4-2-0 Ice before R28 Leads.' },
          { round: 'R29–40', action: 'Upgrade 4-2-0 Embrittlement + Overdrive/MOAB Mauler to erase the R40 MOAB without Village.' },
        ],
        whyItWorks: `Since Villages and Alchemists are banned in Primary Only, 4-2-0 Embrittlement Ice acts as both your Camo stripper and a +1 damage buff for ${isTightLoop ? '2-0-4 Overdrive tacks' : '0-2-4 Sharp Shooter crits'} on ${map.name}.`,
        pitfall: `Remember: no Monkey Village in Primary Only! Never rely on non-camo towers without 4-2-0 Ice or 0-2-4 Dart.`,
        linkedVaultId: 'strat-tack-zone-super-brittle',
      };
    }

    // ── 3. DEFLATION ─────────────────────────────────────────────────────────
    case 'deflation': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: isMultiLane ? 'Churchill / Gwen' : 'Sauda / Gwen',
        setup: isMultiLane
          ? [
              { t: 'Monkey Ace', p: '2-0-3 Neva-Miss Targeting ×2' },
              { t: 'Alchemist', p: '4-2-0 Stronger Stimulant' },
              { t: 'Monkey Village', p: '2-2-0 Radar + Jungle Drums' },
              { t: 'Monkey Village', p: '0-0-2 Discount (Sell after buying)' },
            ]
          : [
              { t: 'MonkeyVillage', p: '0-0-2 ×2 Double Discount Opener' },
              { t: 'Monkey Ace', p: '0-2-4 Spectre (via Discount)' },
              { t: 'Alchemist', p: '3-0-0 Berserker Brew' },
              { t: 'Hero', p: 'Sauda / Gwen at choke' },
            ],
        budget: 19950,
        budgetLabel: '$19,950 / $20,000 Exact',
        coreRound: 'R31 (Pre-placed)',
        eff: 'S+',
        benchmarks: [
          { round: 'Pre-R31 Step 1', action: 'Place two 0-0-2 Discount Villages first to slash all Tier 1–3 upgrade costs by 15%.' },
          { round: 'Pre-R31 Step 2', action: isMultiLane ? 'Buy two 2-0-3 Neva-Miss Aces + 4-2-0 Alch + 2-2-0 Radar Village.' : 'Place Ace inside double discount → 0-2-3 → sell one Village → buy 0-2-4 Spectre!' },
          { round: 'R31–60 (AFK)', action: 'Turn on Auto-Start and walk away: seeking darts + bombs clear R40 MOAB and R60 BFB 100% AFK.' },
        ],
        whyItWorks: `Deflation gives exactly $20,000 and 0 income. On ${map.name} (${map.entrances} entrance${map.entrances > 1 ? 's' : ''}), ${isMultiLane ? 'twin Alch-buffed 2-0-3 Neva-Miss Aces' : 'a double-discounted 0-2-4 Spectre'} homes in on every lane globally with zero micro.`,
        pitfall: 'Forgetting Camo Lead on Round 59! Ensure either 2-2-0 Radar Village + Alch or 0-2-4 Spectre (Spy Plane crosspath) is active.',
      };
    }

    // ── 4. STANDARD (MEDIUM) ─────────────────────────────────────────────────
    case 'medium-standard': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: map.hero,
        setup: hasWater
          ? [
              { t: 'Monkey Buccaneer', p: '4-2-0 Aircraft Carrier' },
              { t: 'Monkey Sub', p: '2-0-4 Armor Piercing Darts' },
              { t: 'Alchemist', p: '4-2-0 Stronger Stimulant' },
              { t: 'Monkey Village', p: '2-2-0 Radar + Drums' },
            ]
          : [
              { t: 'Sniper Monkey', p: '0-5-2 Elite Sniper' },
              { t: 'Sniper Monkey', p: '4-2-0 Maim MOAB' },
              { t: 'Alchemist', p: '4-2-0 Stronger Stimulant' },
              { t: 'Bomb Shooter', p: '2-0-4 Recursive Cluster' },
            ],
        budget: 34500,
        budgetLabel: '$34.5k (60 Rounds)',
        coreRound: 'R49',
        eff: 'S+',
        benchmarks: [
          { round: 'R1–28', action: `Deploy ${map.hero} + early lead/camo coverage on ${map.name}.` },
          { round: 'R29–45', action: hasWater ? 'Upgrade 3-2-0 Destroyer + 4-2-0 Alch for R40 MOAB.' : 'Upgrade 0-3-2 Bouncing Bullet + 4-2-0 Alch for R40 MOAB.' },
          { round: 'R46–60', action: hasWater ? 'Finish 4-2-0 Aircraft Carrier; strafing planes shred the R60 BFB.' : 'Finish 0-5-2 Elite Sniper (Supply Drops pay for itself!) to melt R60 BFB.' },
        ],
        whyItWorks: `Medium ends at the Round 60 BFB. ${hasWater ? 'Aircraft Carrier strafing planes' : '0-5-2 Elite Sniper + 4-2-0 Maim MOAB'} covers all ${map.entrances} lane(s) on ${map.name} while generating surplus cash.`,
        pitfall: map.pitfall,
        linkedVaultId: hasWater ? 'strat-sky-shredder-flagship' : 'strat-elite-sniper-maim-twin',
      };
    }

    // ── 5. APOPALYPSE ────────────────────────────────────────────────────────
    case 'apopalypse': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: 'Sauda / Obyn Greenfoot',
        setup: [
          { t: 'Druid', p: '1-4-0 Jungle\u2019s Bounty (Life + Cash Engine)' },
          { t: 'Wizard Monkey', p: '0-3-2 Dragon\u2019s Breath + Wall of Fire' },
          { t: 'Alchemist', p: '4-2-0 Stronger Stimulant' },
          { t: 'Spike Factory', p: '3-2-0 Spiked Balls (Backline)' },
        ],
        budget: 31200,
        budgetLabel: '$31.2k (No End-of-Round Cash)',
        coreRound: 'R42',
        eff: 'S+',
        benchmarks: [
          { round: 'R1–20', action: 'Immediate Hero + 0-2-2 Wall of Fire Wizard to absorb continuous non-stop waves.' },
          { round: 'R21–40', action: 'Build 1-3-0 Druid of the Jungle + 3-2-0 Alch; vines grab ceramics while waves overlap.' },
          { round: 'R41–60', action: 'Upgrade 1-4-0 Jungle\u2019s Bounty (active ability gives cash even without round breaks!) + 3-2-0 Spiked Balls.' },
        ],
        whyItWorks: `Apopalypse sends overlapping waves with zero end-of-round cash. Persistent track hazards (Wall of Fire, Druid vines, and Spiked Balls) never get overwhelmed by stacked waves on ${map.name}.`,
        pitfall: 'In Apopalypse, fortified leads and MOABs can spawn 3 rounds earlier than normal — get 0-3-2 Dragon\u2019s Breath before R26!',
        linkedVaultId: 'strat-spirit-forest-druids',
      };
    }

    // ── 6. MILITARY ONLY ─────────────────────────────────────────────────────
    case 'military-only': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: hasWater ? 'Admiral Brickell' : 'Etienne / Quincy',
        setup: hasWater
          ? [
              { t: 'Monkey Sub', p: '3-0-0 Submerge and Support (Decamo)' },
              { t: 'Monkey Sub', p: '2-0-4 Armor Piercing Darts ×3' },
              { t: 'Monkey Buccaneer', p: '4-2-0 Aircraft Carrier' },
              { t: 'Sniper Monkey', p: '4-2-0 Maim MOAB' },
            ]
          : [
              { t: 'Sniper Monkey', p: '0-5-2 Elite Sniper' },
              { t: 'Sniper Monkey', p: '4-2-0 Maim MOAB' },
              { t: 'Heli Pilot', p: '3-2-0 Razor Rotors (Camo + Lead)' },
              { t: 'Monkey Ace', p: '2-0-3 Neva-Miss Targeting' },
            ],
        budget: 33800,
        budgetLabel: '$33.8k (Military Towers Only)',
        coreRound: 'R46',
        eff: 'S+',
        benchmarks: [
          { round: 'R1–24', action: hasWater ? '0-0-0 Sub + Brickell opener; add 3-0-0 Submerge Sub by R24 for decamo.' : '0-1-0 Sniper + Hero opener; upgrade 1-2-0 Sniper for Camo/Lead.' },
          { round: 'R25–40', action: hasWater ? 'Build 2-0-4 AP Darts Sub + 3-2-0 Destroyer for R40 MOAB.' : 'Build 0-3-2 Bouncing Bullet + 3-2-0 Razor Rotors Heli for R40 MOAB.' },
          { round: 'R41–60', action: hasWater ? 'Stack three 2-0-4 Subs + 4-2-0 Maim MOAB to lock down R60 BFB.' : 'Complete 0-5-2 Elite Sniper + 4-2-0 Maim MOAB to stun-lock R60 BFB.' },
        ],
        whyItWorks: `${hasWater ? `${map.name} has water, so 3-0-0 Submerge Sub provides permanent decamo while 2-0-4 AP Darts Subs use Advanced Intel across the whole map.` : `${map.name} is a dry map (${map.entrances} lane${map.entrances > 1 ? 's' : ''}), so global Snipers + 3-2-0 Heli bypass all terrain obstacles without needing water.`}`,
        pitfall: hasWater ? 'Place the 3-0-0 Sub near the entrance so Camo Leads on R59 are stripped immediately.' : 'No water on this map — do not bring Brickell!',
        linkedVaultId: hasWater ? 'strat-sub-commander-armada' : 'strat-elite-sniper-maim-twin',
      };
    }

    // ── 7. REVERSE ───────────────────────────────────────────────────────────
    case 'reverse': {
      const Asymmetric = map.entrances !== map.exits;
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: map.hero,
        setup: [
          { t: 'Spike Factory', p: '3-2-0 Spiked Balls (At Former Entrance!)' },
          { t: 'Druid', p: '1-3-0 Druid of the Jungle ×2' },
          { t: 'Monkey Ace', p: '2-0-3 Neva-Miss Targeting' },
          { t: 'Alchemist', p: '4-2-0 Stronger Stimulant' },
        ],
        budget: 32900,
        budgetLabel: '$32.9k (Reversed Pathing)',
        coreRound: 'R45',
        eff: 'S+',
        benchmarks: [
          { round: 'R1–20', action: `Place ${map.hero} near the OLD exit (now the entrance) and Spiked Balls at the OLD entrance.` },
          { round: 'R21–40', action: 'Build two 1-3-0 Druids + 4-2-0 Alch; global vines ignore reversed corner angles.' },
          { round: 'R41–60', action: 'Add 2-0-3 Neva-Miss Ace + 2-2-0 Village; seeking darts don\u2019t care which way bloons travel.' },
        ],
        whyItWorks: Asymmetric
          ? `CRITICAL GEOMETRY FLIP: ${map.name} normally has ${map.entrances} entrance(s) and ${map.exits} exit(s). In Reverse, that flips to ${map.exits} entrance(s) → ${map.entrances} exit(s)! Global-range Druids and seeking Neva-Miss Aces neutralize the flipped split.`
          : `On ${map.name}, Reverse flips the track direction and curve angles. Placing your Spike Factory at the former entrance and relying on seeking Ace/Druid projectiles makes path direction irrelevant.`,
        pitfall: Asymmetric
          ? `Because ${map.name} flips to ${map.entrances} exit(s) in Reverse, make sure your backline Spiked Balls guard the new exit(s)!`
          : 'Do not place directional towers (like Downdraft or Spike Factory) in their standard spots — exits and entrances are swapped!',
      };
    }

    // ── 8. STANDARD (HARD) ───────────────────────────────────────────────────
    case 'hard-standard': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: map.hero,
        setup: map.setup.slice(0, 4),
        budget: Math.round(map.cost * 0.62),
        budgetLabel: `$${Math.round((map.cost * 0.62) / 1000)}k (+8% Hard prices, R80)`,
        coreRound: `R${Math.max(58, map.core - 10)}`,
        eff: map.eff,
        benchmarks: [
          { round: 'R3–28', action: `Open with ${map.hero} and cheap lead/camo bridge on ${map.name}.` },
          { round: 'R29–63', action: `Build ${map.setup[0]?.t} (${map.setup[0]?.p}) core + 4-2-0 Alch before the R63 ceramic waves.` },
          { round: 'R64–80', action: `Complete ${map.setup[1]?.t} (${map.setup[1]?.p}) to melt the Round 80 ZOMG.` },
        ],
        whyItWorks: `${map.why} Stopping at Round 80 means you only need ~62% of the full CHIMPS budget.`,
        pitfall: map.pitfall,
        linkedVaultId: map.link,
      };
    }

    // ── 9. MAGIC MONKEYS ONLY ────────────────────────────────────────────────
    case 'magic-only': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: 'Obyn Greenfoot (Buffs Druids & Skywardens)',
        setup: [
          { t: 'Skywarden', p: '1-5-0 Stormwrath Archon' },
          { t: 'Wizard Monkey', p: '0-2-5 Prince of Darkness' },
          { t: 'Ninja Monkey', p: '4-0-1 Bloonjitsu' },
          { t: 'Alchemist', p: '4-2-0 Stronger Stimulant' },
        ],
        budget: 71500,
        budgetLabel: '$71.5k (Magic Monkeys Only)',
        coreRound: 'R62',
        eff: 'S+',
        benchmarks: [
          { round: 'R3–27', action: 'Place Obyn + 3-0-1 Ninja (native camo); add 3-0-0 Alch before R28 leads.' },
          { round: 'R28–59', action: 'Build 0-2-4 Necromancer (Shimmer strips camo for the whole team!) + 1-3-0 Skywarden.' },
          { round: 'R60–80', action: 'Complete 0-2-5 Prince of Darkness + 1-5-0 Stormwrath Archon; zombie BFBs + lightning conduits crush R80.' },
        ],
        whyItWorks: `In Magic Only, Obyn Greenfoot buffs BOTH Druids and the new v56 Skywarden (+1 pierce at L2, +35% range at L5, free Camo at L8), while 0-2-5 Prince of Darkness provides decamo Shimmer and undead cleanup on ${map.name}.`,
        pitfall: 'Purple Bloons (R25, R32, R45, R62, R78) are immune to energy/fire/plasma! Keep 4-0-1 Ninja or Obyn Brambles in front to pop Purple shells first.',
        linkedVaultId: 'strat-skywarden-stormwrath',
      };
    }

    // ── 10. DOUBLE HP MOABS ──────────────────────────────────────────────────
    case 'double-hp-moabs': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: isMultiLane ? 'Psi / Corvus' : 'Sauda / Ezili',
        setup: [
          { t: 'Sniper Monkey', p: '4-2-0 Maim MOAB (Stun-Lock)' },
          { t: 'Ninja Monkey', p: '1-0-4 Sticky Bomb (High Burst)' },
          { t: 'Boomerang', p: '0-2-4 MOAB Press ×2' },
          { t: 'Alchemist', p: '0-3-1 Unstable Concoction (% HP Explosion)' },
        ],
        budget: 58400,
        budgetLabel: '$58.4k (Anti-Blimp Focus)',
        coreRound: 'R55',
        eff: 'S+',
        benchmarks: [
          { round: 'R3–39', action: `Standard opener into 1-0-4 Sticky Bomb Ninja before Round 40's 400-HP MOAB.` },
          { round: 'R40–62', action: 'Add 4-2-0 Maim MOAB Sniper + 0-2-4 MOAB Press to pin doubled-HP BFBs in place.' },
          { round: 'R63–80', action: 'Drop 0-3-1 Unstable Concoction; its explosion scales with blimp max HP, turning 2× HP into 2× blast damage on R80!' },
        ],
        whyItWorks: `Double HP MOABs doubles every blimp's health pool on ${map.name}. 0-3-1 Unstable Concoction deals percentage-based explosion damage when a blimp pops, while 4-2-0 Maim MOAB + 0-2-4 MOAB Press lock the R80 8,000-HP ZOMG in place.`,
        pitfall: 'Round 40 MOAB has 400 HP instead of 200 HP — do not rely on a basic 3-0-1 Ninja alone for Round 40!',
        linkedVaultId: 'strat-elite-sniper-maim-twin',
      };
    }

    // ── 11. HALF CASH ────────────────────────────────────────────────────────
    case 'half-cash': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: 'Sauda / Quincy (Cheap Drop)',
        setup: [
          { t: 'Bomb Shooter', p: '2-0-4 Recursive Cluster ×2' },
          { t: 'Alchemist', p: '4-2-0 Stronger Stimulant' },
          { t: 'Monkey Village', p: '3-2-0 Primary Training + Radar' },
          { t: 'Sniper Monkey', p: '0-2-4 Full Auto Rifle' },
        ],
        budget: 38200,
        budgetLabel: '$38.2k (50% Income Cap)',
        coreRound: 'R58',
        eff: 'S+',
        benchmarks: [
          { round: 'R3–27', action: 'Free Dart Monkey (MK) + Hero + 0-0-0 Bomb Shooter; spend zero cash on farms.' },
          { round: 'R28–49', action: 'Upgrade 2-0-4 Recursive Cluster + 3-2-0 Alch + 2-2-0 Radar Village before R40.' },
          { round: 'R50–80', action: 'Add second 2-0-4 Recursive Cluster for R63 + 0-2-4 Sniper (or 4-0-2 Maim) for the R80 ZOMG.' },
        ],
        whyItWorks: `Half Cash cuts your total 80-round budget to ~$44k. On ${map.name}, twin Alch-buffed 2-0-4 Recursive Clusters inside a 3-2-0 Village deliver Tier-5-level ceramic and blimp damage for under $18k combined.`,
        pitfall: 'Never buy Banana Farms in Half Cash — they take twice as long to pay off and starve your Round 40 & 63 defense!',
        linkedVaultId: 'strat-half-cash-recursive',
      };
    }

    // ── 12. ALTERNATE BLOONS ROUNDS (ABR) ────────────────────────────────────
    case 'abr': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: 'Sauda / Ezili (Innate Camo)',
        setup: [
          { t: 'Ninja Monkey', p: '4-0-1 Bloonjitsu' },
          { t: 'Alchemist', p: '4-2-0 Stronger Stimulant (By R24!)' },
          { t: 'Wizard Monkey', p: '0-2-5 Prince of Darkness' },
          { t: 'Sniper Monkey', p: '4-2-0 Maim MOAB (For Fortified Blimps)' },
        ],
        budget: 64800,
        budgetLabel: '$64.8k (ABR Early Immunities)',
        coreRound: 'R59',
        eff: 'S+',
        benchmarks: [
          { round: 'R3–10', action: 'R5 sends Stealth Camo! R10 sends Lead! Drop Ninja + 2-0-0 Alchemist immediately.' },
          { round: 'R11–24', action: 'R24 sends a Camo-Lead! Keep 2-0-0 Alch Acidic Mixture Dip active on your Ninja.' },
          { round: 'R25–40', action: 'R40 is a FORTIFIED MOAB (400 HP)! Have 4-0-1 Bloonjitsu + 4-2-0 Alch + Hero ability ready.' },
          { round: 'R41–80', action: 'Build 0-2-5 Prince of Darkness + 4-2-0 Maim MOAB to beat early Fortified BFBs and twin R80 ZOMGs.' },
        ],
        whyItWorks: `ABR ambushes players with R5 Camo, R10 Lead, R24 Camo-Lead, and R40 Fortified MOAB. Opening Ninja + Alchemist on ${map.name} answers every single early immunity check automatically.`,
        pitfall: 'Round 40 sends a Fortified MOAB and Round 54 sends early Regrow Camo Ceramics — never greed past Round 38!',
        linkedVaultId: 'strat-ninja-alch-sauda',
      };
    }

    // ── 13. IMPOPPABLE ───────────────────────────────────────────────────────
    case 'impoppable': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: 'Benjamin / Geraldo',
        setup: [
          { t: 'Banana Farm', p: '2-0-3 Marketplace ×3 (Sell at R80)' },
          ...map.setup.slice(0, 3),
        ],
        budget: Math.round(map.cost * 1.15),
        budgetLabel: `$${Math.round((map.cost * 1.15) / 1000)}k (+20% Impoppable prices)`,
        coreRound: `R${map.core}`,
        eff: 'S+',
        benchmarks: [
          { round: 'R6–35', action: 'Open with core defense + Benjamin, then squeeze in two or three 2-0-3 Marketplaces.' },
          { round: 'R36–79', action: `Use farm income to offset Impoppable's +20% price penalty and build ${map.setup[0]?.t} (${map.setup[0]?.p}).` },
          { round: 'R80–100', action: `Complete ${map.setup[1]?.t} (${map.setup[1]?.p}) + 0-2-4 Relentless Glue to lock down R90/95/99 DDTs with 1 life.` },
        ],
        whyItWorks: `Unlike CHIMPS, Impoppable allows Banana Farms and Selling! Dropping three 2-0-3 Marketplaces on ${map.name} completely erases the +20% tower cost penalty and funds your Tier 5s 10 rounds early.`,
        pitfall: `You have only 1 life (Mana Shield MK gives +25 buffer if enabled) — ${map.pitfall}`,
        linkedVaultId: map.link,
      };
    }

    // ── 14. C.H.I.M.P.S. (Default flagship solve per map) ───────────────────
    case 'chimps': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: map.hero,
        setup: map.setup,
        budget: map.cost,
        budgetLabel: `$${(map.cost / 1000).toFixed(1)}k / $178.9k Pool`,
        coreRound: `R${map.core}`,
        eff: map.eff === 'B' ? 'A' : map.eff,
        benchmarks: [
          { round: 'R6–40', action: `Pixel-clean opener into ${map.hero} + Tier 3/4 bridge to clear R24 Camo, R28 Lead, and R40 MOAB.` },
          { round: `R41–${map.core}`, action: `Discipline saveup into ${map.setup[0]?.t} (${map.setup[0]?.p}) online by Round ${map.core}.` },
          { round: `R${map.core + 1}–100`, action: `Layer ${map.setup[1]?.t} (${map.setup[1]?.p}) + ${map.setup[2]?.t} (${map.setup[2]?.p}) for R95 DDTs, R98 ZOMGs & R100 BAD.` },
        ],
        whyItWorks: map.why,
        pitfall: map.pitfall,
        linkedVaultId: map.link,
      };
    }

    // ── 15. SANDBOX MODE ─────────────────────────────────────────────────────
    case 'sandbox': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: map.hero,
        setup: [
          map.setup[0] ?? { t: 'Skywarden', p: '1-5-0 Stormwrath Archon' },
          map.setup[1] ?? { t: 'Alchemist', p: '5-2-0 Permanent Brew' },
          { t: 'Ice Monkey', p: '5-0-2 Super Brittle (+4 Debuff Test)' },
          { t: 'Glue Gunner', p: '2-5-0 Glue Storm (+2 Debuff Test)' },
        ],
        budget: 9999999,
        budgetLabel: 'Unlimited Cash Lab',
        coreRound: 'Lab Benchmark',
        eff: 'S+',
        benchmarks: [
          { round: 'Test 1 (R63)', action: `Set Round to 63 on ${map.name} and verify your midgame setup clears all 3 ceramic waves with 0 leaks.` },
          { round: 'Test 2 (R95 & R98)', action: 'Spawn Round 95 (30 DDTs) then Round 98 (104,240 RBE) to benchmark your choke-point placement.' },
          { round: 'Test 3 (R100 BAD)', action: 'Send a single Round 100 BAD to confirm your single-target DPS pops the shell before the last turn.' },
        ],
        whyItWorks: `Before risking a Black Border CHIMPS run on ${map.name}, use Sandbox Mode to rehearse exact pixel placements and ability timings on Rounds 63, 95, 98, and 100.`,
        pitfall: `Remember to toggle Monkey Knowledge OFF in Sandbox when testing CHIMPS placements for ${map.name}!`,
        linkedVaultId: map.link,
      };
    }

    // ── 16. CO-OP MODE ───────────────────────────────────────────────────────
    case 'coop': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: 'Benjamin (P1) + Etienne (P2)',
        setup: [
          { t: 'Player 1 (Economy)', p: 'Benjamin + 2-0-3 Marketplace ×4' },
          { t: 'Player 2 (Global Camo)', p: 'Etienne + 0-5-2 Elite Sniper' },
          { t: 'Player 3 (Main Carry)', p: `${map.setup[0]?.t} (${map.setup[0]?.p})` },
          { t: 'Player 4 (Debuff/Stall)', p: '4-2-0 Alch + 0-2-4 Relentless Glue' },
        ],
        budget: 95000,
        budgetLabel: '$95k Pooled Team Cash',
        coreRound: 'R65',
        eff: 'S+',
        benchmarks: [
          { round: 'R1–25', action: 'Funnel early cash to Player 1 for Benjamin; Player 2 drops Etienne so all 4 quadrants get free global Camo.' },
          { round: 'R26–60', action: `Whoever owns ${map.name}'s best choke quadrant builds ${map.setup[0]?.t} (${map.setup[0]?.p}) while teammates donate cash.` },
          { round: 'R61–100', action: 'Avoid placing 4 Heroes (splits XP 4 ways!); 1–2 Heroes + pooled Tier 5s crushes R98 and R100.' },
        ],
        whyItWorks: `In Co-Op on ${map.name}, terrain is split into quadrants and Hero XP is divided by the number of placed heroes. Having one player run Etienne + Elite Sniper gives global coverage regardless of quadrant borders.`,
        pitfall: 'Do not have all 4 players place Heroes on Round 1 — Hero XP splits 4 ways and nobody reaches Level 20 by Round 100!',
        linkedVaultId: map.link,
      };
    }

    // ── 17. BOSS EVENTS ──────────────────────────────────────────────────────
    case 'boss-event': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: 'Benjamin / Geraldo (Paragon Totems)',
        setup: [
          { t: 'Banana Farm', p: '5-2-0 Banana Central + 4-2-0 BRF Spam' },
          { t: 'Tier 1–2 Boss', p: '2-0-5 Tack Zone + 5-0-2 Super Brittle (or 1-5-0 M.A.D)' },
          { t: 'Tier 3 Boss (R80)', p: 'Degree 40+ Dart or Ninja Paragon' },
          { t: 'Tier 4–5 Boss (R120)', p: hasWater ? 'Navarch of the Seas + S.P.I.D.E.R. Paragon' : 'S.P.I.D.E.R. Sniper Paragon + Goliath Doomship' },
        ],
        budget: 890000,
        budgetLabel: '$890k+ Farmed Empire',
        coreRound: 'R40 / 60 / 80 / 100 / 120',
        eff: 'S+',
        benchmarks: [
          { round: 'R1–39 (Tier 1 Prep)', action: `Snowball six 2-0-3 Marketplaces on ${map.name}, then buy 2-0-5 Tack Zone + 4-2-0 Alch for the R40 Tier 1 Boss.` },
          { round: 'R41–79 (Tier 2–3)', action: 'Sell Tier 1 defense → build 0-0-5 Monkeyopolis + 5-2-0 Banana Central → 1-5-0 M.A.D for R60 → Degree 40 Paragon for R80.' },
          { round: 'R81–120 (Elite T5)', action: 'Under v57 Paragon rules, max the 4× cash slider + 22.5M pop cap for a solo Degree 100 S.P.I.D.E.R. or Doomship!' },
        ],
        whyItWorks: `On ${map.name} (RBS ${map.rbs}), aggressive early farming into a Degree 60–100 Paragon deletes all 5 Boss Tiers (Bloonarius, Vortex, Dreadbloon, Phayze, Lych, Blastapopoulos).`,
        pitfall: 'If the weekly boss is Lych, NEVER use temporary buffs (Alchemist Brew, Overclock, Homeland) — Lych steals them and heals millions of HP!',
        linkedVaultId: 'strat-spider-paragon-degree',
      };
    }

    // ── 18. ODYSSEY ──────────────────────────────────────────────────────────
    case 'odyssey': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: 'Etienne / Sauda (All-Rounder Crew)',
        setup: [
          { t: 'Sniper Monkey', p: '0-5-2 Elite Sniper + 4-2-0 Maim MOAB' },
          { t: 'Heli Pilot', p: '5-0-2 Apache Prime (Works on any island)' },
          { t: 'Skywarden', p: '1-5-0 Stormwrath Archon' },
          { t: 'Alchemist', p: '4-2-0 Stronger Stimulant ×2' },
        ],
        budget: 52000,
        budgetLabel: '$52k Multi-Island Crew',
        coreRound: 'R55',
        eff: 'S+',
        benchmarks: [
          { round: 'Crew Selection', action: 'Always pack 2 Snipers, 1 Heli, 2 Skywardens, and 2 Alchemists so your crew works on both dry and water islands.' },
          { round: 'Early Islands', action: `On ${map.name}, open with Hero + 0-3-2 Sniper to conserve crew lives across the campaign.` },
          { round: 'Final Island', action: 'Deploy 0-5-2 Elite Sniper + 1-5-0 Stormwrath Archon to clear up to Round 80+ without needing Villages.' },
        ],
        whyItWorks: `Odyssey locks your crew across 3–5 maps. Bringing global-range towers (Elite Sniper, Apache Prime, Skywarden) guarantees ${map.name} is solved even when water or villages are restricted.`,
        pitfall: 'In Extreme Odysseys, towers placed on Island 1 are consumed for good — use only 3–4 crew slots per map!',
        linkedVaultId: 'strat-elite-sniper-maim-twin',
      };
    }

    // ── 19. RACE MODE ────────────────────────────────────────────────────────
    case 'race': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: 'Gwendolin (Cocktail Pierce) / Sauda',
        setup: [
          { t: 'Tack Shooter', p: '0-4-0 Blade Maelstrom (Spam + Sell)' },
          { t: 'Wizard Monkey', p: '0-2-2 Wall of Fire (Infinite Pierce)' },
          { t: 'Mortar Monkey', p: '3-2-0 Shell Shock + 0-2-3 Signal Flare' },
          { t: 'Ice Monkey', p: '3-2-0 Ice Shards (Chain Detonation)' },
        ],
        budget: 24000,
        budgetLabel: 'Sub-2:15 Speedrun Route',
        coreRound: 'Full-Send R1–60+',
        eff: 'S+',
        benchmarks: [
          { round: '0:00 (Send R1–25)', action: `Drop 0-2-2 Wall of Fire + 3-2-0 Ice Shards on ${map.name}'s tightest bend and immediately mash Send Round.` },
          { round: '0:35 (Send R26–49)', action: 'Add 0-2-3 Signal Flare Mortar for decamo + buy/activate/sell 0-4-0 Blade Maelstrom to clear 20 stacked waves at once.' },
          { round: '1:15 (Clean Up)', action: 'Focus single-target on the last MOAB/BFB with 4-0-2 Boomerang or 2-0-4 Bomb to stop the clock early.' },
        ],
        whyItWorks: `Race Mode is all about high-pierce chain reactions when 30 rounds are on screen simultaneously. On ${map.name}, 3-2-0 Ice Shards + 0-4-0 Blade Maelstrom scales exponentially with bloon density.`,
        pitfall: `Wait for the last slow MOAB before full-sending R60+, or ${isShortTrack ? `${map.name}'s short ${map.rbs} RBS track will leak ceramics instantly!` : 'ceramic children will slip past during ability cooldowns.'}`,
      };
    }

    // ── 20. DAILY / ADVANCED CHALLENGES ──────────────────────────────────────
    case 'daily-challenge': {
      return {
        modeId,
        modeName: meta.name,
        category: meta.category,
        rounds: meta.rounds,
        hero: 'Corvus / Geraldo (Micro Toolkit)',
        setup: [
          { t: 'Glue Gunner', p: '5-2-0 The Bloon Solver (R63/76/78 Puzzles)' },
          { t: 'Monkey Sub', p: '0-4-0 First Strike (R100 BAD 1-Shot)' },
          { t: 'Alchemist', p: '0-3-1 Unstable Concoction (Clump Puzzles)' },
          { t: 'Sniper Monkey', p: '0-5-2 / 4-2-0 (Line-of-Sight Puzzles)' },
        ],
        budget: 25000,
        budgetLabel: 'Puzzle Micro Checklist',
        coreRound: 'Single-Round Solve',
        eff: 'S+',
        benchmarks: [
          { round: 'Check 1: Modifiers', action: 'Inspect Ceramic HP, MOAB Speed, and Regrow Rate sliders before placing a single tower.' },
          { round: 'Check 2: Terrain', action: `On ${map.name}, check if obstacles (${hasWater ? 'water/los' : 'dry LOS blockers'}) force indirect fire (Mortar, Wizard Guided Magic, Psi, Sniper).` },
          { round: 'Check 3: Sell-Rebuy', action: 'If Selling is enabled on a 1-round challenge, use ability micro (0-4-0 First Strike, 0-4-0 Maelstrom, 2-4-0 Spike Storm).' },
        ],
        whyItWorks: `Advanced Challenges on ${map.name} usually exploit its signature quirk: ${map.why}`,
        pitfall: map.pitfall,
      };
    }
  }
}
