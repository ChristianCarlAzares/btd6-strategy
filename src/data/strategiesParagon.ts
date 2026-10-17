import { Strategy } from '../types/btd6';

/**
 * Second v57.2 blueprint pack: water-map solves, military pairings,
 * and the three Paragon routes that dominate Boss Events after the
 * v57 Paragon Power rework.
 */
export const PARAGON_STRATEGIES: Strategy[] = [
  {
    id: 'strat-popseidon-merspam',
    title: 'Popseidon Flood + Mermonkey Spam',
    subtitle: 'The current top-ranked water-map solve: one ability freezes the entire board',
    difficulty: 'Intermediate',
    gameMode: 'CHIMPS',
    hero: 'Admiral Brickell',
    heroCrosspath: 'Level 20 (Naval Tactics + Mega Mine)',
    winRate: 95,
    patchVersion: 'v57.2',
    verifiedOn: 'v57.2',
    isNew: true,
    patchNote: 'Mermonkey trident damage type moved Plasma \u2192 Frigid in recent balance passes; Ice Jet projectiles now carry over one round.',
    microIntensity: 'Medium',
    totalCostEstimate: 104700,
    coreOnlineRound: 70,
    efficiencyRank: 'S+',
    efficiencyScore: 93,
    monkeyKnowledgeRequired: false,
    maps: ['Flooded Valley', 'Spice Islands', 'Peninsula', 'Off The Coast', 'Spring Spring', 'Sunken Columns'],
    tags: ['Popseidon', 'Mermonkey', 'Water Map Meta', 'Board Freeze', 'Brickell', 'Lord of the Abyss'],
    keyTowers: [
      { name: 'Mermonkey', crosspath: '0-5-2', topPath: 0, midPath: 5, botPath: 2, role: 'Popseidon \u2014 Ice Jet floods the map, freezing everything and dealing 70 damage', category: 'Military', costEstimate: 56160 },
      { name: 'Mermonkey', crosspath: '0-0-2', topPath: 0, midPath: 0, botPath: 2, role: 'Echosense Network spam \u2014 cheap camo/purple detection and trident pierce', category: 'Military', costEstimate: 620 },
      { name: 'Mermonkey', crosspath: '5-0-2', topPath: 5, midPath: 0, botPath: 2, role: 'Lord of the Abyss \u2014 lets water towers be placed on land inside its 32-unit radius', category: 'Military', costEstimate: 24840 },
      { name: 'Admiral Brickell', crosspath: 'Level 20', topPath: 0, midPath: 0, botPath: 0, role: 'Naval Tactics doubles water attack speed; Mega Mines stockpile burst damage', category: 'Hero', costEstimate: 1200 },
      { name: 'Monkey Village', crosspath: '2-3-0', topPath: 2, midPath: 3, botPath: 0, role: 'Monkey Intelligence Bureau so tridents hit DDTs', category: 'Support', costEstimate: 6100 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-30',
        phase: 'Mermonkey Opener',
        actions: [
          'Place two Mermonkeys on 0-0-1 Echosense Precision \u2014 the cheapest camo-capable opener on water maps.',
          'Drop Admiral Brickell in the central water body at Round 8.',
          'Push both Mermers to 0-0-2 Echosense Network before Round 24.'
        ],
        tips: 'Mermonkeys cost under $700 each with camo detection built in \u2014 no Village radar spend required at all.'
      },
      {
        roundRange: 'Rounds 31-58',
        phase: 'Abyss Anchor',
        actions: [
          'Buy 5-0-2 Lord of the Abyss \u2014 it lets you place water towers on nearby land.',
          'Use that land anchor to reposition your defence onto the tightest bend.',
          'Drop Brickell Mega Mines ahead of Round 40 and 50 blimp waves.'
        ],
        tips: 'Lord of the Abyss is the single most underrated utility Tier 5: it converts any land map into a half-water map.'
      },
      {
        roundRange: 'Rounds 59-79',
        phase: 'Popseidon Purchase',
        actions: [
          'Walk one Mermonkey up the mid path: x-3-x Riptide Champion \u2192 x-4-x Arctic Knight \u2192 0-5-2 Popseidon.',
          'Trigger Ice Jet on Round 63 and Round 76 \u2014 the rogue wave freezes the whole board for 70 damage.',
          'Add 2-3-0 MIB Village so the frozen DDTs at Round 90 remain poppable.'
        ],
        tips: 'Ice Jet projectiles now carry over one round after the recent patch, so an ability used late in Round 62 still lands in 63.'
      },
      {
        roundRange: 'Rounds 80-100',
        phase: 'Naval Supremacy',
        actions: [
          'Add four more 0-0-2 Mermonkeys inside the Lord of the Abyss land radius.',
          'Brickell Naval Tactics on Rounds 95, 98 and 100 for the doubled attack-speed window.',
          'Popseidon Ice Jet plus Mega Mines deletes the Round 100 BAD before it reaches the exit.'
        ],
        tips: 'Naval Tactics buffs every water monkey \u2014 six cheap Mermonkeys suddenly out-DPS a Tier 5 line elsewhere.'
      }
    ],
    dangerousRounds: [
      { round: 24, threat: 'First camo green', counter: '0-0-2 Echosense Network innate detection' },
      { round: 59, threat: 'Camo Lead Bloons', counter: '2-3-0 MIB Village + Frigid damage tridents' },
      { round: 63, threat: 'Triple ceramic compression', counter: 'Popseidon Ice Jet board freeze' },
      { round: 95, threat: '30 fortified DDTs', counter: 'Naval Tactics + Ice Jet slow window + MIB' },
      { round: 100, threat: 'B.A.D. Airship', counter: 'Brickell Mega Mines + Ice Jet (BAD resists freeze but takes the 70 damage hit)' }
    ],
    pros: [
      'One ability freezes every bloon on screen \u2014 unmatched panic button',
      'Lord of the Abyss removes the usual water-map placement restriction',
      'Cheap 0-0-2 Mermonkey spam scales with Brickell\u2019s Naval Tactics aura'
    ],
    cons: [
      'BAD and Boss bloons resist the freeze, so Round 100 needs mine support',
      'Popseidon is a $56,160 single saveup with no partial power spike'
    ],
    synergyNotes: 'Popseidon\u2019s Ice Jet freezes and damages the entire board, then Brickell\u2019s Naval Tactics doubles the attack speed of every Mermonkey while they sit frozen \u2014 a full-screen stun window converted directly into damage.',
    challengeCode: 'MERPOP502'
  },
  {
    id: 'strat-bloon-solver-fortress',
    title: 'Avengers Assemble: Bloon Solver + Flying Fortress',
    subtitle: 'The two-Tier-5 answer that clears most advanced maps with zero ability micro',
    difficulty: 'Advanced',
    gameMode: 'CHIMPS',
    hero: 'Etienne',
    heroCrosspath: 'Level 20 (UCAV + Global Camo)',
    winRate: 94,
    patchVersion: 'v57.2',
    verifiedOn: 'v57.2',
    isNew: true,
    patchNote: 'Community shorthand "520 glue + 502 ace" remains the most cited advanced-map solve into 2026.',
    microIntensity: 'Low (AFK)',
    totalCostEstimate: 148300,
    coreOnlineRound: 78,
    efficiencyRank: 'S',
    efficiencyScore: 88,
    monkeyKnowledgeRequired: false,
    maps: ['Dark Castle', 'Workshop', 'Infernal', 'Geared', 'High Finance', 'Muddy Puddles'],
    tags: ['Bloon Solver', 'Flying Fortress', 'Glue Debuff', 'No Micro', 'Advanced Maps', 'Etienne'],
    keyTowers: [
      { name: 'Glue Gunner', crosspath: '5-2-0', topPath: 5, midPath: 2, botPath: 0, role: 'The Bloon Solver \u2014 dissolves ceramics and applies corrosive damage-over-time to blimps', category: 'Primary', costEstimate: 39000 },
      { name: 'Monkey Ace', crosspath: '2-0-5', topPath: 2, midPath: 0, botPath: 5, role: 'Flying Fortress \u2014 triple Spectre barrage with +14 MOAB-class damage per dart', category: 'Military', costEstimate: 90000 },
      { name: 'Alchemist', crosspath: '4-2-0', topPath: 4, midPath: 2, botPath: 0, role: 'Stronger Stimulant on the Fortress flight path', category: 'Magic', costEstimate: 5100 },
      { name: 'Etienne', crosspath: 'Level 20', topPath: 0, midPath: 0, botPath: 0, role: 'Global camo at Level 8, UCAV for Round 63/95 emergencies', category: 'Hero', costEstimate: 800 },
      { name: 'Monkey Village', crosspath: '2-3-0', topPath: 2, midPath: 3, botPath: 0, role: 'Jungle Drums covering the glue and any support turrets', category: 'Support', costEstimate: 4300 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-35',
        phase: 'Glue-First Opener',
        actions: [
          'Place Etienne and a Glue Gunner on x-x-1 Stickier Glue covering the longest straight.',
          'Add a 0-0-2 Dart Monkey or Sniper only if the map has an unreachable lane.',
          'Walk glue to x-x-3 MOAB Glue before Round 40 for blimp slowing.'
        ],
        tips: 'Glue is the cheapest crowd control in the game \u2014 it buys you ten extra rounds of saving time.'
      },
      {
        roundRange: 'Rounds 36-62',
        phase: 'Corrosive Bridge',
        actions: [
          'Push glue up the top path: 3-2-0 Bloon Dissolver \u2192 4-2-0 Bloon Liquefier.',
          'Bloon Liquefier alone handles Round 63 with Etienne UCAV as backup.',
          'Start the Ace line: 2-0-2 \u2192 2-0-3 Neva-Miss Targeting.'
        ],
        tips: 'Do not buy the Ace before the Liquefier \u2014 glue carries the midgame for a fraction of the price.'
      },
      {
        roundRange: 'Rounds 63-84',
        phase: 'Bloon Solver Online',
        actions: [
          'Complete 5-2-0 The Bloon Solver around Round 70.',
          'Its corrosive damage-over-time keeps ticking on blimps between attacks.',
          'Add 4-2-0 Alchemist positioned over the Ace flight path.'
        ],
        tips: 'Bloon Solver damage-over-time stacks on fortified blimps, which is why Round 95 DDTs simply dissolve.'
      },
      {
        roundRange: 'Rounds 85-100',
        phase: 'Fortress Overhead',
        actions: [
          'Buy 2-0-5 Flying Fortress and set the flight pattern to Infinity over the track centre.',
          'Upgrade Village to 2-3-0 MIB before Round 90.',
          'Round 100: Fortress barrage strips the BAD shell while Solver DOT finishes the children.'
        ],
        tips: 'Flying Fortress attacks always gain the Normal damage type, so it hits every immunity without support.'
      }
    ],
    dangerousRounds: [
      { round: 40, threat: 'First MOAB', counter: 'x-x-3 MOAB Glue slow + Etienne UCAV' },
      { round: 63, threat: 'Triple ceramic compression', counter: '4-2-0 Bloon Liquefier corrosion' },
      { round: 78, threat: 'Hidden camo ceramic wave', counter: 'Etienne Level 8 global camo detection' },
      { round: 90, threat: 'First DDTs', counter: '5-2-0 Bloon Solver DOT + 2-3-0 MIB Village' },
      { round: 100, threat: 'B.A.D. Airship', counter: '2-0-5 Flying Fortress triple barrage (Normal damage type)' }
    ],
    pros: [
      'Two Tier 5s cover blimp damage, ceramic floods and every immunity',
      'Effectively zero ability micro after Round 80',
      'Flying Fortress Normal damage type removes the usual DDT problem entirely'
    ],
    cons: [
      'Flying Fortress is a steep $90,000 purchase with no intermediate spike',
      'Flight path placement takes one or two attempts to optimise'
    ],
    synergyNotes: 'The Bloon Solver applies a persistent corrosion DOT that keeps damaging blimps after the glue attack ends. Flying Fortress then flies through that pre-damaged field dealing +14 MOAB-class damage per dart with Normal damage type \u2014 the DOT softens, the Fortress executes.',
    challengeCode: 'GLUE520ACE'
  },
  {
    id: 'strat-comanche-shove-wall',
    title: 'Comanche Wall: Knockback + Perma-Spike',
    subtitle: 'Push bloons backwards forever while spikes stack at the exit \u2014 the ultimate stall engine',
    difficulty: 'Intermediate',
    gameMode: 'CHIMPS',
    hero: 'Psi',
    heroCrosspath: 'Level 20 (Psionic Scream)',
    winRate: 93,
    patchVersion: 'v57.2',
    verifiedOn: 'v57.2',
    isNew: true,
    patchNote: 'v57.2 resolved the mini-Comanche targeting bug that could block other towers \u2014 the wall is stable again.',
    microIntensity: 'Medium',
    totalCostEstimate: 96400,
    coreOnlineRound: 72,
    efficiencyRank: 'S',
    efficiencyScore: 87,
    monkeyKnowledgeRequired: false,
    maps: ['Infernal', 'Workshop', 'Peninsula', 'Cornfield', 'Rake', 'Log Flume'],
    tags: ['Comanche Commander', 'MOAB Shove', 'Knockback', 'Perma-Spike', 'Stall Engine', 'Psi'],
    keyTowers: [
      { name: 'Heli Pilot', crosspath: '0-2-5', topPath: 0, midPath: 2, botPath: 5, role: 'Comanche Commander \u2014 auto-calls mini Comanches and amplifies MOAB knockback', category: 'Military', costEstimate: 38400 },
      { name: 'Heli Pilot', crosspath: '0-3-2', topPath: 0, midPath: 3, botPath: 2, role: 'Downdraft \u2014 blows every non-MOAB bloon back toward the entrance', category: 'Military', costEstimate: 4200 },
      { name: 'Spike Factory', crosspath: '0-2-5', topPath: 0, midPath: 2, botPath: 5, role: 'Perma-Spike pile that grows while bloons are being shoved backwards', category: 'Support', costEstimate: 36500 },
      { name: 'Psi', crosspath: 'Level 20', topPath: 0, midPath: 0, botPath: 0, role: 'Ignores terrain completely; Level 10 scream clears Round 98 blimps', category: 'Hero', costEstimate: 900 },
      { name: 'Glue Gunner', crosspath: '0-2-4', topPath: 0, midPath: 2, botPath: 4, role: 'Relentless Glue puddles at the shove point to stack the pushback', category: 'Primary', costEstimate: 4500 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-32',
        phase: 'Downdraft Opener',
        actions: [
          'Place Psi at Round 10, then a Heli Pilot pushed to 0-3-2 Downdraft.',
          'Downdraft alone keeps Rounds 20-40 bloons bouncing backwards indefinitely.',
          'Add 0-2-4 Relentless Glue at the same bend to compound the slow.'
        ],
        tips: 'Downdraft is the cheapest "buy time" upgrade in the game \u2014 it converts round duration into spike production.'
      },
      {
        roundRange: 'Rounds 33-60',
        phase: 'Spike Accumulation',
        actions: [
          'Place Spike Factory at the exit and start 0-2-2 \u2192 0-2-3.',
          'Longer rounds from Downdraft mean far more spikes generated per wave.',
          'Psi Level 10 Psionic Scream handles the Round 40 and 50 blimps for free.'
        ],
        tips: 'Every second a bloon spends being shoved backward is a second the factory is producing \u2014 the two mechanics multiply each other.'
      },
      {
        roundRange: 'Rounds 61-84',
        phase: 'Comanche Commander',
        actions: [
          'Buy 0-2-5 Comanche Commander \u2014 mini Comanches deploy automatically under pressure.',
          'MOAB Shove knockback now affects ZOMGs, buying huge windows on Round 98.',
          'Complete 0-2-5 Perma-Spike with a 2-0-0 Alchemist beside it.'
        ],
        tips: 'IFR (x-2-x) grants the Heli camo detection, so the Comanche line needs no Village radar at all.'
      },
      {
        roundRange: 'Rounds 85-100',
        phase: 'Perpetual Pushback',
        actions: [
          'Glue puddles + Downdraft + MOAB Shove keep the Round 98 wall off the exit entirely.',
          'Psi scream on Round 98 to strip fortified blimps while they are stuck in place.',
          'Round 100: BAD resists shove, so let the Perma-Spike pile plus Psi finish it.'
        ],
        tips: 'BAD is immune to knockback \u2014 plan for it with the spike pile rather than the shove wall.'
      }
    ],
    dangerousRounds: [
      { round: 59, threat: 'Camo Lead Bloons', counter: 'IFR camo detection on Heli + Psi innate pierce' },
      { round: 63, threat: 'Triple ceramic compression', counter: 'Downdraft pushback + glue puddle stacking' },
      { round: 90, threat: 'First DDTs', counter: 'Perma-Spike with 2-0-0 Alchemist dip' },
      { round: 98, threat: 'Fortified ZOMG wall', counter: 'Comanche Commander amplified MOAB knockback on ZOMGs' },
      { round: 100, threat: 'B.A.D. Airship', counter: 'Psi Psionic Scream + saturated Perma-Spike pile' }
    ],
    pros: [
      'Turns round duration into free spike production \u2014 the two systems feed each other',
      'Mini Comanches deploy automatically, so no ability management is needed',
      'Under $97,000 with a full stall-and-kill package'
    ],
    cons: [
      'BAD is immune to knockback, so Round 100 needs the spike pile',
      'Downdraft placement must face the correct track direction or it pushes bloons forward'
    ],
    synergyNotes: 'Downdraft and MOAB Shove extend how long bloons stay alive on the track, and Perma-Spike generates spikes per second. Extending round duration therefore directly multiplies the size of the exit spike pile \u2014 stalling is not passive here, it is the damage source.',
    challengeCode: 'COMANCHE025'
  },
  {
    id: 'strat-ascended-shadow-paragon',
    title: 'Ascended Shadow: Ninja Paragon Rush',
    subtitle: 'All three Ninja Tier 5s converted into a permanent camo-detecting shadow swarm',
    difficulty: 'Expert',
    gameMode: 'Boss Event',
    hero: 'Geraldo',
    heroCrosspath: 'Level 20 (Shopkeeper Economy)',
    winRate: 90,
    patchVersion: 'v57.2',
    verifiedOn: 'v57.2',
    isNew: true,
    patchNote: 'Paragon Power rework in v57 removed upgrade-tier contributions and raised the pops/income cap to 125,000 Power.',
    microIntensity: 'High (Micro)',
    totalCostEstimate: 486000,
    coreOnlineRound: 88,
    efficiencyRank: 'A',
    efficiencyScore: 80,
    monkeyKnowledgeRequired: true,
    maps: ['Scrapyard', 'Cubism', 'In The Loop', 'Carved', 'Polyphemus'],
    tags: ['Paragon', 'Ascended Shadow', 'Boss Event', 'Ninja Meta', 'High Micro', 'Cash Intensive'],
    keyTowers: [
      { name: 'Ninja Monkey', crosspath: '5-0-2', topPath: 5, midPath: 0, botPath: 2, role: 'Grandmaster Ninja \u2014 Paragon requirement #1 (top path Tier 5)', category: 'Magic', costEstimate: 42000 },
      { name: 'Ninja Monkey', crosspath: '0-5-2', topPath: 0, midPath: 5, botPath: 2, role: 'Grand Saboteur \u2014 Paragon requirement #2 (mid path Tier 5, halves blimp speed)', category: 'Magic', costEstimate: 28000 },
      { name: 'Ninja Monkey', crosspath: '2-0-5', topPath: 2, midPath: 0, botPath: 5, role: 'Master Bomber \u2014 Paragon requirement #3 (bottom path Tier 5, 10,000 damage charge)', category: 'Magic', costEstimate: 31000 },
      { name: 'Ascended Shadow', crosspath: 'Paragon', topPath: 5, midPath: 5, botPath: 5, role: 'Absorbs all three Ninjas into a permanent shadow-swarm Paragon', category: 'Magic', costEstimate: 240000 },
      { name: 'Banana Central', crosspath: '5-2-0', topPath: 5, midPath: 2, botPath: 0, role: 'Funds the Paragon purchase and boosts every other farm by 25%', category: 'Support', costEstimate: 96000 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-39',
        phase: 'Farm-Heavy Opener',
        actions: [
          'Geraldo at Round 8, then six 2-0-0 Banana Farms before Round 20.',
          'Defend with a single 4-0-1 Bloonjitsu Ninja plus 4-2-0 Alchemist.',
          'Convert farms to 4-2-0 Banana Research Facilities by Round 35.'
        ],
        tips: 'Boss Events allow farming \u2014 front-load income hard because the Paragon absorbs three Tier 5s at once.'
      },
      {
        roundRange: 'Rounds 40-62',
        phase: 'Tier 1-2 Boss Control',
        actions: [
          'Tier 1 (Round 40) and Tier 2 (Round 60) die to Bloonjitsu plus Alchemist brew.',
          'Build 5-2-0 Banana Central and Overclock it with 0-4-0 Engineer.',
          'Begin purchasing the three Ninja Tier 5 paths on separate monkeys.'
        ],
        tips: 'Never buy two Tier 5s on the same Ninja \u2014 the Paragon requires one monkey per path.'
      },
      {
        roundRange: 'Rounds 63-87',
        phase: 'Three Tier 5 Assembly',
        actions: [
          'Complete 5-0-2 Grandmaster Ninja, 0-5-2 Grand Saboteur and 2-0-5 Master Bomber.',
          'Keep them grouped tightly \u2014 the Paragon absorbs every Ninja inside its radius.',
          'Tier 3 (Round 80) falls to Grand Saboteur blimp-speed halving.'
        ],
        tips: 'Grand Saboteur halves blimp movement speed permanently, which is what makes the Tier 3 and 4 skull phases survivable.'
      },
      {
        roundRange: 'Rounds 88-120',
        phase: 'Ascended Shadow Conversion',
        actions: [
          'Purchase the Paragon \u2014 all three Ninjas merge into Ascended Shadow.',
          'Feed cash through the purchase slider to raise Paragon degree (v57 cap: 4\u00d7 base price).',
          'Tier 5 Elite at Round 120 dies to the permanent shadow swarm plus Grand Saboteur legacy slow.'
        ],
        tips: 'Under the v57 rework, sacrificed upgrade tiers grant zero Power \u2014 invest cash and pops instead of junk towers.'
      }
    ],
    dangerousRounds: [
      { round: 40, threat: 'Tier 1 Boss skull phase', counter: '4-0-1 Bloonjitsu + 4-2-0 Alchemist brew' },
      { round: 60, threat: 'Tier 2 Boss BFB vomit', counter: '2-0-5 Master Bomber 10,000-damage charge' },
      { round: 80, threat: 'Tier 3 Boss ZOMG vomit', counter: '0-5-2 Grand Saboteur permanent blimp slow' },
      { round: 100, threat: 'Tier 4 Boss (1.5M HP)', counter: 'Ascended Shadow conversion complete' },
      { round: 120, threat: 'Elite Tier 5 Boss', counter: 'High-degree Paragon + Banana Central economy' }
    ],
    pros: [
      'Ascended Shadow has permanent camo detection and no ability cooldown management',
      'Grand Saboteur\u2019s blimp slow persists through the merge, softening every skull phase',
      'Scales with Paragon degree, so deeper investment yields a visibly stronger boss killer'
    ],
    cons: [
      'Requires three separate Tier 5 purchases plus the Paragon fee \u2014 ~$486,000 total',
      'Impossible in CHIMPS because the economy line is banned'
    ],
    synergyNotes: 'The Paragon absorbs one Tier 5 from each upgrade path. Because BTD6 forbids two paths exceeding Tier 2 on a single tower, the three requirements must be three separate Ninjas \u2014 which is why Banana Central income is mandatory rather than optional.',
    challengeCode: 'NINJAPARA'
  },
  {
    id: 'strat-navarch-seas-paragon',
    title: 'Navarch of the Seas: Buccaneer Paragon',
    subtitle: 'The definitive water-map boss killer \u2014 pirate economy, carrier decks and naval bombardment',
    difficulty: 'Boss',
    gameMode: 'Boss Event',
    hero: 'Admiral Brickell',
    heroCrosspath: 'Level 20 (Naval Tactics)',
    winRate: 91,
    patchVersion: 'v57.2',
    verifiedOn: 'v57.2',
    isNew: true,
    patchNote: 'v56 slightly nerfed Cannon Ship explosion pierce (28 \u2192 20) and Grape Shot attack speed (-3.7%); Navarch output unaffected.',
    microIntensity: 'Medium',
    totalCostEstimate: 624000,
    coreOnlineRound: 92,
    efficiencyRank: 'A',
    efficiencyScore: 79,
    monkeyKnowledgeRequired: true,
    maps: ['Off The Coast', 'Spice Islands', 'Flooded Valley', 'Sunken Columns', 'Peninsula', 'Ship Capture'],
    tags: ['Paragon', 'Navarch of the Seas', 'Boss Event', 'Water Maps', 'Brickell', 'Trade Empire Economy'],
    keyTowers: [
      { name: 'Monkey Buccaneer', crosspath: '0-5-2', topPath: 0, midPath: 5, botPath: 2, role: 'Pirate Lord \u2014 Paragon requirement #1 (mid path Tier 5)', category: 'Military', costEstimate: 41000 },
      { name: 'Monkey Buccaneer', crosspath: '5-0-2', topPath: 5, midPath: 0, botPath: 2, role: 'Carrier Flagship \u2014 Paragon requirement #2 plus a hidden aircraft attack-speed aura', category: 'Military', costEstimate: 33000 },
      { name: 'Monkey Buccaneer', crosspath: '2-0-5', topPath: 2, midPath: 0, botPath: 5, role: 'Trade Empire \u2014 Paragon requirement #3 and the primary income engine', category: 'Support', costEstimate: 38000 },
      { name: 'Navarch of the Seas', crosspath: 'Paragon', topPath: 5, midPath: 5, botPath: 5, role: 'Merges all three Buccaneers into a bombardment fleet with naval cannon abilities', category: 'Military', costEstimate: 320000 },
      { name: 'Admiral Brickell', crosspath: 'Level 20', topPath: 0, midPath: 0, botPath: 0, role: 'Naval Tactics doubles the fleet\u2019s attack speed during skull phases', category: 'Hero', costEstimate: 1200 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-39',
        phase: 'Trade Foundation',
        actions: [
          'Brickell at Round 8 with two 0-0-1 Buccaneers for early grape shot damage.',
          'Push one Buccaneer to x-x-3 Merchantman for passive income (allowed in Boss Events).',
          'Hold Tier 1 Boss (Round 40) with Merchantman cannons plus Brickell Mega Mines.'
        ],
        tips: 'Trade Empire (x-x-5) generates income from pops, so early pop-heavy rounds accelerate the whole run.'
      },
      {
        roundRange: 'Rounds 40-65',
        phase: 'Carrier Deck',
        actions: [
          'Complete 5-0-2 Carrier Flagship \u2014 it grants an attack-speed aura to nearby aircraft and water towers.',
          'Add 0-5-2 Pirate Lord for the grappling-hook blimp control.',
          'Tier 2 Boss (Round 60) is stun-locked by Pirate Lord hooks.'
        ],
        tips: 'Carrier Flagship and Pirate Lord must live on separate Buccaneers \u2014 path exclusivity applies as always.'
      },
      {
        roundRange: 'Rounds 66-91',
        phase: 'Trade Empire Economy',
        actions: [
          'Complete 2-0-5 Trade Empire on the third Buccaneer.',
          'Stockpile cash toward the $320,000 Paragon fee while Brickell mines handle Tier 3.',
          'Add 4-2-0 Alchemist over the water cluster for the stimulant buff.'
        ],
        tips: 'Trade Empire is the reason this route funds itself \u2014 it converts every pop into Boss-kill capital.'
      },
      {
        roundRange: 'Rounds 92-120',
        phase: 'Navarch Bombardment',
        actions: [
          'Purchase Navarch of the Seas, absorbing all three Buccaneers.',
          'Use naval cannon abilities on every skull phase, layered with Brickell Naval Tactics.',
          'Elite Tier 5 at Round 120 is deleted inside two ability rotations.'
        ],
        tips: 'Navarch abilities scale with Paragon degree \u2014 invest the cash slider before Round 100 for the biggest return.'
      }
    ],
    dangerousRounds: [
      { round: 40, threat: 'Tier 1 Boss ceramic spit', counter: 'Merchantman cannons + Brickell Mega Mines' },
      { round: 60, threat: 'Tier 2 Boss BFB vomit', counter: '0-5-2 Pirate Lord grappling stun-lock' },
      { round: 80, threat: 'Tier 3 Boss ZOMG vomit', counter: '5-0-2 Carrier Flagship aircraft swarm' },
      { round: 100, threat: 'Tier 4 Boss (1.5M HP)', counter: '2-0-5 Trade Empire funded Paragon purchase' },
      { round: 120, threat: 'Elite Tier 5 Boss', counter: 'Navarch naval bombardment + Naval Tactics' }
    ],
    pros: [
      'Trade Empire funds the Paragon from pop income rather than farms',
      'Navarch abilities hit every lane, ideal for the new Ship Capture map',
      'Brickell Naval Tactics multiplies the fleet during each skull phase'
    ],
    cons: [
      'Requires a large water body \u2014 unusable on dry maps without Lord of the Abyss',
      'Highest total cost of any blueprint in this vault (~$624,000)'
    ],
    synergyNotes: 'Navarch of the Seas demands Pirate Lord (x-5-x), Carrier Flagship (5-x-x) and Trade Empire (x-x-5) \u2014 one Tier 5 per path. Trade Empire supplies the income, Carrier Flagship supplies the aura, and Pirate Lord supplies the crowd control, so the Paragon inherits all three roles at once.',
    challengeCode: 'NAVARCH55'
  },
  {
    id: 'strat-spider-paragon-degree',
    title: 'S.P.I.D.E.R. Degree Rush (v57 Paragon)',
    subtitle: 'The brand-new Sniper Paragon with post-rework Degree 100 maths, cash caps and Power sources',
    difficulty: 'Boss',
    gameMode: 'Boss Event',
    hero: 'Geraldo',
    heroCrosspath: 'Level 20 (Paragon Power Totems)',
    winRate: 92,
    patchVersion: 'v57.2',
    verifiedOn: 'v57.2',
    isNew: true,
    patchNote: 'v57.0 introduced S.P.I.D.E.R. Monkey (750,000 Sniper XP) and reworked Paragon Power: tiers removed, pops cap 125,000, cash cap 80,000.',
    microIntensity: 'High (Micro)',
    totalCostEstimate: 958505,
    coreOnlineRound: 96,
    efficiencyRank: 'A',
    efficiencyScore: 78,
    monkeyKnowledgeRequired: true,
    maps: ['Scrapyard', 'Cubism', 'Carved', 'In The Loop', 'Polyphemus', 'Sanctuary'],
    tags: ['Paragon', 'S.P.I.D.E.R. Monkey', 'New v57', 'Degree 100', 'Boss Rush', 'Sniper Meta'],
    keyTowers: [
      { name: 'Sniper Monkey', crosspath: '5-0-2', topPath: 5, midPath: 0, botPath: 2, role: 'Cripple MOAB \u2014 Paragon requirement #1, +5 damage shrapnel debuff on blimps', category: 'Military', costEstimate: 26000 },
      { name: 'Sniper Monkey', crosspath: '0-5-2', topPath: 0, midPath: 5, botPath: 2, role: 'Elite Sniper \u2014 Paragon requirement #2, bouncing bullets and global shrapnel', category: 'Military', costEstimate: 17500 },
      { name: 'Sniper Monkey', crosspath: '2-0-5', topPath: 2, midPath: 0, botPath: 5, role: 'Elite Defender \u2014 Paragon requirement #3, accelerating machine-gun cleanup', category: 'Military', costEstimate: 19000 },
      { name: 'S.P.I.D.E.R. Monkey', crosspath: 'Paragon', topPath: 5, midPath: 5, botPath: 5, role: 'Map-wide heavy shots, automatic cash drops and two targeted abilities', category: 'Military', costEstimate: 864000 },
      { name: 'Geraldo', crosspath: 'Level 20', topPath: 0, midPath: 0, botPath: 0, role: 'Paragon Power Totems are the only route past solo Degree caps', category: 'Hero', costEstimate: 1080 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-39',
        phase: 'Sniper Economy Start',
        actions: [
          'Geraldo at Round 8, then a single 0-1-0 Sniper for infinite-range early defence.',
          'Stack Banana Farms \u2014 S.P.I.D.E.R. needs roughly $864,000 on Hard.',
          'Elite Defender (2-0-5) carries Rounds 20-40 almost alone.'
        ],
        tips: 'Snipers have global range, so your defence line and your farm block can occupy completely different map areas.'
      },
      {
        roundRange: 'Rounds 40-70',
        phase: 'Three Tier 5 Paths',
        actions: [
          'Buy 5-0-2 Cripple MOAB, 0-5-2 Elite Sniper and 2-0-5 Elite Defender on three separate monkeys.',
          'Crosspaths are allowed but cannot replace a missing Tier 5 \u2014 all three paths are mandatory.',
          'Convert farms to 5-2-0 Banana Central and Overclock the income line.'
        ],
        tips: 'Cripple MOAB shrapnel applies a +5 damage debuff to blimps, which the Paragon inherits after the merge.'
      },
      {
        roundRange: 'Rounds 71-95',
        phase: 'Power Accumulation',
        actions: [
          'Push eligible pop damage toward the 125,000 Power cap (every 180 damage = 1 Power).',
          'Bank qualifying income toward the 80,000 Power cash cap (every $45 generated = 1 Power).',
          'Sacrifice eligible lower-tier towers worth up to 4\u00d7 the Paragon base price.'
        ],
        tips: 'Since v57, buying extra upgrade tiers on junk towers contributes zero Power \u2014 stop padding the map with 0-4-2s.'
      },
      {
        roundRange: 'Rounds 96-120',
        phase: 'S.P.I.D.E.R. Deployment',
        actions: [
          'Select one of the three Tier 5 Snipers and purchase the Paragon \u2014 the others are absorbed.',
          'Aim for Degree 100: 200,000 Power is now reachable solo without totems (205,000 max).',
          'Keep a backup cleanup line alive \u2014 the merge removes all three snipers instantly.'
        ],
        tips: 'S.P.I.D.E.R. deploys automatic cash drops, so purchasing it earlier than Round 100 partially refunds the investment.'
      }
    ],
    dangerousRounds: [
      { round: 40, threat: 'Tier 1 Boss skull phase', counter: '2-0-5 Elite Defender accelerating fire rate' },
      { round: 60, threat: 'Tier 2 Boss BFB vomit', counter: '5-0-2 Cripple MOAB shrapnel debuff' },
      { round: 80, threat: 'Tier 3 Boss ZOMG vomit', counter: '0-5-2 Elite Sniper shrapnel bounce chains' },
      { round: 96, threat: 'Merge vulnerability window', counter: 'Backup Perma-Spike or Alchemist cleanup line' },
      { round: 120, threat: 'Elite Tier 5 Boss', counter: 'Degree 100 S.P.I.D.E.R. dual abilities + auto cash drops' }
    ],
    pros: [
      'Map-wide heavy shots plus automatic cash generation in a single Paragon',
      'Degree 100 is now achievable solo thanks to the v57 Power rework',
      'Inherits Cripple MOAB debuff and Elite Sniper shrapnel mechanics after the merge'
    ],
    cons: [
      'Most expensive blueprint in the vault at $958,505 on Hard',
      'Losing all three snipers at merge time creates a dangerous vulnerability window'
    ],
    synergyNotes: 'S.P.I.D.E.R. Monkey requires one Tier 5 from each Sniper path. After v57, Paragon degree comes only from pops/income (125,000 Power cap), invested cash (80,000 Power cap, 4\u00d7 base price) and extra Tier 5s (6,000 Power each, capped at 50,000) \u2014 upgrade tiers on sacrificed towers no longer count at all.',
    challengeCode: 'SPIDER57'
  }
];
