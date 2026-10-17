export interface ChimpsMilestone {
  round: number;
  cumulativeCash: number;
  keyUnlocks: string[];
  threats: string[];
}

export const CHIMPS_INCOME_MILESTONES: ChimpsMilestone[] = [
  {
    round: 6,
    cumulativeCash: 650,
    keyUnlocks: ['Starting 3 Darts / Ninja / Hero drop'],
    threats: ['Basic red bloons']
  },
  {
    round: 24,
    cumulativeCash: 3840,
    keyUnlocks: ['Camo detection ready (Sauda / Ninja / 0-0-2 Dart)'],
    threats: ['First Camo Green']
  },
  {
    round: 28,
    cumulativeCash: 5410,
    keyUnlocks: ['Lead popping ready (Bomb / 1-0-0 Sniper / Alch)'],
    threats: ['Lead Bloons']
  },
  {
    round: 40,
    cumulativeCash: 14142,
    keyUnlocks: ['Tier 4 core tower (e.g. 4-0-1 Ninja + 3-2-0 Alch or Overdrive)'],
    threats: ['Round 40 M.O.A.B.']
  },
  {
    round: 50,
    cumulativeCash: 24440,
    keyUnlocks: ['Village 2-2-0 Drums + Radar, 2nd Tier 4 Tower'],
    threats: ['Twin MOABs']
  },
  {
    round: 63,
    cumulativeCash: 41208,
    keyUnlocks: ['Sufficient budget for 1st budget Tier 5 or heavy ceramic burst'],
    threats: ['3x Clustered Ceramic rushes']
  },
  {
    round: 75,
    cumulativeCash: 74120,
    keyUnlocks: ['Main endgame Tier 5 (Perma-Spike, Tack Zone, Sky Shredder)'],
    threats: ['BFBs and dense ceramics']
  },
  {
    round: 80,
    cumulativeCash: 94842,
    keyUnlocks: ['2nd Tier 5 or strong support (Moab Glue, Sabotage, MIB)'],
    threats: ['ZOMG Airship']
  },
  {
    round: 90,
    cumulativeCash: 128450,
    keyUnlocks: ['DDT countermeasures active (Pre-Emptive / Relentless Glue / MIB)'],
    threats: ['Dark Dirigible Titans']
  },
  {
    round: 95,
    cumulativeCash: 153600,
    keyUnlocks: ['Final defensive abilities & buff stacking complete'],
    threats: ['30 Fortified DDT swarm']
  },
  {
    round: 98,
    cumulativeCash: 169200,
    keyUnlocks: ['All Tier 5 synergies active (Glue Storm / Super Brittle / Overclock)'],
    threats: ['Massive Fortified BFB + ZOMG wall']
  },
  {
    round: 100,
    cumulativeCash: 178909,
    keyUnlocks: ['First Strike Capability or BAD burst DPS'],
    threats: ['B.A.D. Airship (28,000 HP)']
  }
];

/** Medium-difficulty purchase prices, verified against the v57.2 upgrade list. */
export const POPULAR_TIER5_COSTS: { name: string; cost: number; category: string }[] = [
  // ── New in the v56/v57 cycle ────────────────────────────────────────────
  { name: 'Glue Storm (2-5-0) — NEW', cost: 16000, category: 'Primary' },
  { name: "Winter's Mercy (2-0-5 Skywarden) — NEW", cost: 20000, category: 'Magic' },
  { name: 'Stormwrath Archon (1-5-0 Skywarden) — NEW', cost: 32000, category: 'Magic' },
  { name: 'Lord of the Abyss (5-0-2) — NEW', cost: 23000, category: 'Military' },
  { name: 'The Bloon Solver (5-2-0)', cost: 22500, category: 'Primary' },
  { name: 'Trade Empire (2-0-5)', cost: 23000, category: 'Support' },
  { name: 'Comanche Commander (0-2-5)', cost: 35000, category: 'Military' },
  { name: 'Apache Prime (5-0-2)', cost: 45000, category: 'Military' },
  { name: 'Popseidon (0-5-2)', cost: 52000, category: 'Military' },
  // ── Evergreen staples ───────────────────────────────────────────────────
  { name: 'The Tack Zone (2-0-5)', cost: 20000, category: 'Primary' },
  { name: 'Prince of Darkness (0-2-5)', cost: 26500, category: 'Magic' },
  { name: 'Super Brittle (5-0-2)', cost: 33000, category: 'Primary' },
  { name: 'Perma-Spike (0-2-5)', cost: 30000, category: 'Support' },
  { name: 'Sub Commander (2-0-5)', cost: 25000, category: 'Military' },
  { name: 'Pre-Emptive Strike (2-5-0)', cost: 29000, category: 'Military' },
  { name: 'Bomb Blitz (0-2-5)', cost: 30000, category: 'Primary' },
  { name: 'Grandmaster Ninja (5-0-1)', cost: 35000, category: 'Magic' },
  { name: 'Spirit of the Forest (1-5-0)', cost: 35000, category: 'Magic' },
  { name: 'Carpet of Spikes (2-5-0)', cost: 41000, category: 'Support' },
  { name: 'Sky Shredder (5-0-2)', cost: 42500, category: 'Military' },
  { name: 'Avatar of Wrath (0-1-5)', cost: 45000, category: 'Magic' },
  { name: 'Inferno Ring (5-0-2)', cost: 45500, category: 'Primary' },
  { name: 'Flying Fortress (2-0-5)', cost: 90000, category: 'Military' },
  { name: 'True Sun God (5-2-0)', cost: 500000, category: 'Magic' }
];
