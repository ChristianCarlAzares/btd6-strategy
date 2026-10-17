import { RoundInfo } from '../types/btd6';

export const DANGEROUS_ROUNDS_DATA: RoundInfo[] = [
  {
    round: 24,
    rbe: 76,
    notableBloons: ['1 Camo Green Bloon'],
    specialProperties: ['Camo'],
    description: 'The first camo bloon in the game. If you lack camo detection, you will take an immediate leak of 3 lives.',
    recommendedCounters: ['Sauda Level 1', '0-0-2 Dart Monkey (Enhanced Eyesight)', 'Ninja Monkey (base innate camo)', 'Etienne'],
    dangerLevel: 'Low'
  },
  {
    round: 28,
    rbe: 92,
    notableBloons: ['6 Lead Bloons'],
    specialProperties: ['Lead'],
    description: 'First lead bloons. Sharp darts and energy projectiles bounce right off without dealing damage.',
    recommendedCounters: ['1-0-0 Sniper Monkey', '0-0-0 Bomb Shooter', '2-0-0 Alchemist', 'Gwen / Corvus / Obyn'],
    dangerLevel: 'Medium'
  },
  {
    round: 40,
    rbe: 616,
    notableBloons: ['1 M.O.A.B. Blimp'],
    specialProperties: ['MOAB'],
    description: 'First MOAB blimp with 200 HP. Once broken, it explodes into 4 fast Ceramic bloons.',
    recommendedCounters: ['4-0-1 Ninja + 3-2-0 Alchemist', '2-0-3 Tack Overdrive', '3-0-0 Fighter Plane', 'Sauda Sword Charge'],
    dangerLevel: 'High'
  },
  {
    round: 59,
    rbe: 3950,
    notableBloons: ['Camo Lead Bloons', 'Regrow Ceramics'],
    specialProperties: ['Camo', 'Lead', 'Regrow'],
    description: 'Camo Leads! If your lead popper cannot see camo, or your camo monkey cannot pierce lead, you will leak.',
    recommendedCounters: ['2-2-0 Village (Radar Scanner) over Bomb/Alch', '0-2-2 Wizard Monkey', '3-0-0 Submerge Sub', 'Psi'],
    dangerLevel: 'High'
  },
  {
    round: 63,
    rbe: 8614,
    notableBloons: ['3 Hyper-Dense Clumps of 75 Ceramics'],
    specialProperties: ['Fortified'],
    description: 'The most infamous midgame round in BTD6. Three rapid compressed waves of ceramics that instantly overwhelm single-target towers.',
    recommendedCounters: ['2-0-4 Recursive Cluster Bomb', '4-2-0 Ring of Fire Tack', 'Sauda Sword Charge', '0-2-4 Ice / Cryo Cannon', 'Spirit of the Forest'],
    dangerLevel: 'EXTREME'
  },
  {
    round: 76,
    rbe: 4210,
    notableBloons: ['Dense Clump of 60 Regrow Ceramics'],
    specialProperties: ['Regrow'],
    description: 'A single super-compressed burst of regrow ceramics. Low damage fast attackers can cause a catastrophic regrow farm.',
    recommendedCounters: ['0-3-2 Glue Hose (slow)', '2-0-4 Recursive Cluster', 'Gwen Firestorm', '0-2-4 Ice Monkey'],
    dangerLevel: 'High'
  },
  {
    round: 78,
    rbe: 8140,
    notableBloons: ['Wave 1: Dense Ceramics', 'Wave 2: Camo Dense Ceramics + BFB'],
    specialProperties: ['Camo', 'Regrow'],
    description: 'Two separate ceramic rushes with a BFB in between. The second ceramic wave is completely invisible without Camo detection!',
    recommendedCounters: ['Monkey Village 2-2-0', 'Prince of Darkness 0-2-4', 'Etienne global UAV', 'Absolute Zero Ice'],
    dangerLevel: 'High'
  },
  {
    round: 90,
    rbe: 9812,
    notableBloons: ['3 Fast D.D.T.s (Dark Dirigible Titans)'],
    specialProperties: ['DDT', 'Camo', 'Lead'],
    description: 'First encounter with DDTs! They have the speed of pink bloons, ceramic layer durability, and inherit both Lead AND Camo immunities.',
    recommendedCounters: ['2-3-0 MIB Village', '2-5-0 Pre-Emptive Strike', '0-2-5 Perma-Spike + 2-0-0 Alch', '0-2-4 Relentless Glue'],
    dangerLevel: 'EXTREME'
  },
  {
    round: 95,
    rbe: 32440,
    notableBloons: ['30 Fortified DDTs', 'Fortified MOABs & Regrow Ceramics'],
    specialProperties: ['DDT', 'Camo', 'Lead', 'Fortified'],
    description: 'The DDT swarm round. 30 ultra-fast DDTs spawn in succession alongside fortified blimps.',
    recommendedCounters: ['0-4-0 Ninja Sabotage (halves bloon speed)', '0-2-4 Relentless Glue', '5-0-2 Sky Shredder', 'Super Brittle + Tack Zone'],
    dangerLevel: 'EXTREME'
  },
  {
    round: 98,
    rbe: 104240,
    notableBloons: ['8 ZOMGs', '30 Fortified BFBs', 'Massive hyper-dense horde'],
    specialProperties: ['MOAB', 'Fortified'],
    description: 'The highest pure RBE round in CHIMPS mode (over 104,000 HP). Huge wall of massive fortified airships with immense pierce requirements.',
    recommendedCounters: ['0-2-4 MOAB Press Boomerangs (knockback)', 'Avatar of Wrath (max rage multiplier)', 'Psi Level 10 scream', 'Prince of Darkness', 'Glue Storm'],
    dangerLevel: 'EXTREME'
  },
  {
    round: 99,
    rbe: 28980,
    notableBloons: ['Fortified DDTs + Fortified MOABs'],
    specialProperties: ['DDT', 'Fortified', 'Camo', 'Lead'],
    description: 'Fortified DDTs with double HP. If your DDT slows expired on round 98, this round will catch you with abilities on cooldown.',
    recommendedCounters: ['Ninja Sabotage', 'Perma-Spike stockpile', 'Pre-Emptive Strike missile', 'Snowstorm stall'],
    dangerLevel: 'High'
  },
  {
    round: 100,
    rbe: 55760,
    notableBloons: ['1 B.A.D. (Big Airship of Doom)'],
    specialProperties: ['BAD', 'MOAB', 'Lead'],
    description: 'The final boss of standard CHIMPS. Immune to stuns, knockbacks, and slows. Inside are 2 ZOMGs and 3 DDTs ready to rush.',
    recommendedCounters: ['First Strike Capability (Sub 0-4-0 or 2-5-0)', '2-0-5 Tack Zone + Super Brittle', 'Overclocked Tier 5', 'Spike Storm ability'],
    dangerLevel: 'EXTREME'
  }
];
