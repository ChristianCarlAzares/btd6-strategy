import { Strategy } from '../types/btd6';

export const STRATEGIES_DATA: Strategy[] = [
  {
    id: 'strat-ninja-alch-sauda',
    title: 'The Classic: Ninja + Alch + Sauda Core',
    subtitle: 'The gold standard safe path for Beginner & Intermediate black borders',
    difficulty: 'Beginner',
    gameMode: 'CHIMPS',
    hero: 'Sauda',
    heroCrosspath: 'Level 20 (Direct)',
    winRate: 98,
    patchVersion: 'v47.2',
    microIntensity: 'Low (AFK)',
    totalCostEstimate: 128500,
    monkeyKnowledgeRequired: false,
    maps: ['Resort', 'Logs', 'Cubism', 'Monkey Meadow', 'Town Center', 'Skates'],
    tags: ['Camo Detection', 'Lead Popping', 'AFK Friendly', 'Single Lane', 'Black Border'],
    keyTowers: [
      { name: 'Ninja Monkey', crosspath: '4-0-1', topPath: 4, midPath: 0, botPath: 1, role: 'Early-Mid carry & Camo/Lead shred', category: 'Magic', costEstimate: 4700 },
      { name: 'Alchemist', crosspath: '4-2-0', topPath: 4, midPath: 2, botPath: 0, role: 'Stronger Stimulant (+1 dmg, pierce buff)', category: 'Magic', costEstimate: 5100 },
      { name: 'Grandmaster Ninja', crosspath: '5-0-1', topPath: 5, midPath: 0, botPath: 1, role: 'Endgame DPS bullet-hell', category: 'Magic', costEstimate: 42000 },
      { name: 'Monkey Village', crosspath: '2-2-0', topPath: 2, midPath: 2, botPath: 0, role: 'Jungle Drums + Primary Training', category: 'Support', costEstimate: 4100 },
      { name: 'Perma-Spike', crosspath: '0-2-5', topPath: 0, midPath: 2, botPath: 5, role: 'Ultimate round 90-100 safety net', category: 'Support', costEstimate: 36500 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-27',
        phase: 'Early Setup & Hero Drop',
        actions: [
          'Drop Sauda at the most looped bend/intersection on Round 6.',
          'Place Ninja Monkey nearby (within future Village range). Upgrade to 1-0-0 -> 3-0-1.',
          'Sauda easily handles Round 24 (camo) and Ninja handles lead with upcoming Alch.'
        ],
        tips: 'Do not panic activate Sauda level 3 ability until Bloons breach the first curve.'
      },
      {
        roundRange: 'Rounds 28-40',
        phase: 'Alchemist Synergy & First MOAB',
        actions: [
          'Drop Alchemist next to Ninja: Upgrade to 3-2-0 (Berserker Brew).',
          'Upgrade Ninja to 4-0-1 Bloonjitsu before Round 39.',
          'Round 40 MOAB melts instantly under Sauda + 4-0-1 Ninja + 3-2-0 Alchemist.'
        ],
        tips: 'Keep Alchemist close to Ninja so the brew is never wasted on other utility towers.'
      },
      {
        roundRange: 'Rounds 41-63',
        phase: 'Midgame Fortification',
        actions: [
          'Upgrade Alchemist to 4-2-0 Stronger Stimulant.',
          'Drop Monkey Village covering Ninja and Sauda; upgrade to 2-2-0 (Drums + Camo Radar).',
          'Drop 0-2-4 Spike Factory at the map exit; set to Smart/Close target.',
          'Round 63 triple ceramic wave: Sauda Leaping Sword or Ninja shurikens wipe it clean.'
        ],
        tips: 'Round 63 has 3 separate waves of dense ceramics. If needed, trigger Sauda Sword Charge.'
      },
      {
        roundRange: 'Rounds 64-100',
        phase: 'Tier 5 Culmination & Round 100 BAD',
        actions: [
          'Upgrade Spike Factory to 0-2-5 Perma-Spike with a 2-0-0 Alchemist placed next to it.',
          'Upgrade Ninja to 5-0-1 Grandmaster Ninja, or drop Shinobi Tactics (0-3-0) for buffs.',
          'Add a 0-2-4 Relentless Glue or 0-4-0 Saboteur Ninja for DDT safety on Rounds 95 and 99.',
          'Round 100 BAD gets shredded by Grandmaster; any leaks vanish into the Perma-Spike pile.'
        ],
        tips: 'Ensure 0-2-5 Perma-Spike is buffed with a dedicated 2-0-0 Alch for lead popping!'
      }
    ],
    dangerousRounds: [
      { round: 40, threat: 'First MOAB blimp', counter: '4-0-1 Ninja + 3-2-0 Alch + Sauda Leaping Sword' },
      { round: 63, threat: '3 hyper-dense ceramic waves', counter: 'Sauda Level 10 Sword Charge or Bloonjitsu pierce' },
      { round: 90, threat: 'First fast Lead-Camo DDTs', counter: 'Village 2-2-0 radar + Perma-Spike AMD buff' },
      { round: 95, threat: '30 fast fortified DDTs', counter: 'Sabotage Supply Lines (0-4-0 Ninja) slow ability' },
      { round: 100, threat: 'Massive B.A.D. Airship', counter: 'Grandmaster Ninja focus-fire + Sauda abilities' }
    ],
    pros: [
      'Incredible consistency with almost zero ability micro required',
      'Affordable building blocks with smooth power spikes',
      'Frees up $30,000+ spare cash on beginner maps for whatever tier 5 you enjoy'
    ],
    cons: [
      'Struggles on multi-lane maps where towers cannot cover all paths',
      'Perma-Spike takes time to stack between rounds'
    ],
    synergyNotes: 'Alchemist 4-2-0 Stronger Stimulant gives +1 damage and +3 pierce to every single shuriken thrown by Bloonjitsu (5 shurikens per throw = massive multiplier).',
    challengeCode: 'ZMKXPT1',
    isFeatured: true
  },
  {
    id: 'strat-tack-zone-super-brittle',
    title: 'The Shredder: Tack Zone + Super Brittle + Glue Storm',
    subtitle: 'Debuff stacking meta that obliterates high-health MOABs and bosses in seconds',
    difficulty: 'Intermediate',
    gameMode: 'CHIMPS',
    hero: 'Gwendolin',
    heroCrosspath: 'Level 20 (Heat it up buffs)',
    winRate: 95,
    patchVersion: 'v47.2',
    microIntensity: 'Low (AFK)',
    totalCostEstimate: 142000,
    monkeyKnowledgeRequired: false,
    maps: ['Balance', 'Resort', 'KartsNDarts', 'Underground', 'Cornfield', 'Streambed'],
    tags: ['Debuff Stacking', 'Tack Shooter', 'Loop Maps', 'Insane DPS', 'Boss Killer'],
    keyTowers: [
      { name: 'The Tack Zone', crosspath: '2-0-5', topPath: 2, midPath: 0, botPath: 5, role: 'Primary 32-tack circular bullet storm', category: 'Primary', costEstimate: 26000 },
      { name: 'Super Brittle', crosspath: '5-0-2', topPath: 5, midPath: 0, botPath: 2, role: '+4 flat damage debuff to all intersecting Bloons', category: 'Primary', costEstimate: 33000 },
      { name: 'Glue Storm', crosspath: '2-5-0', topPath: 2, midPath: 5, botPath: 0, role: 'Global +2 damage debuff & slows', category: 'Primary', costEstimate: 19500 },
      { name: 'Primary Mentoring', crosspath: '4-2-0', topPath: 4, midPath: 2, botPath: 0, role: 'Free tier 1 abilities, range, & cooldowns', category: 'Support', costEstimate: 8500 },
      { name: 'Embrittlement', crosspath: '4-0-2', topPath: 4, midPath: 0, botPath: 2, role: 'Midgame bridge debuff (+1 damage)', category: 'Primary', costEstimate: 4200 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-35',
        phase: 'Loop Dominance',
        actions: [
          'Place Tack Shooter inside the inner tight loop (0-0-0 -> 2-0-2 -> 2-0-3 Overdrive).',
          'Deploy Gwendolin adjacent to Tack for Heat It Up pierce and fire damage.',
          'Add a 3-2-0 Alchemist targeting the Tack.'
        ],
        tips: 'Position Tack directly on the inner corner closest to the track track geometry.'
      },
      {
        roundRange: 'Rounds 36-59',
        phase: 'Embrittlement & Overdrive Upgrade',
        actions: [
          'Upgrade Tack to 2-0-4 Overdrive.',
          'Place Ice Monkey in the same loop; upgrade to 4-0-2 Embrittlement for camo stripping & +1 damage.',
          'Add 2-2-0 Village covering both Primary towers.'
        ],
        tips: 'Embrittlement decamos bloons and allows Tack to shred leads even without Alch brew active.'
      },
      {
        roundRange: 'Rounds 60-80',
        phase: 'Tack Zone Activation',
        actions: [
          'Save up and purchase 2-0-5 The Tack Zone by Round 63.',
          'Upgrade Village to 4-2-0 Primary Mentoring for cooldown and range reduction.',
          'Start saving for Super Brittle (Tier 5 Ice).'
        ],
        tips: 'Once 2-0-5 is up, Round 63 and 76 disappear in less than half a second.'
      },
      {
        roundRange: 'Rounds 81-100',
        phase: 'Debuff Overkill',
        actions: [
          'Buy 5-0-2 Super Brittle (Ice). Now every single tack deals +4 damage!',
          'Buy 2-5-0 Glue Storm. Tap ability when Round 98 and 100 appear.',
          'Add a 0-4-0 Engineer Monkey (Overclock) on The Tack Zone for double attack speed.'
        ],
        tips: 'Round 100 BAD will pop in approximately 4 seconds once it enters the Super Brittle aura.'
      }
    ],
    dangerousRounds: [
      { round: 59, threat: 'Camo Lead Bloons', counter: '4-0-2 Embrittlement decamos or Gwen Cocktail' },
      { round: 90, threat: 'Speedy Lead DDTs', counter: 'Primary Mentoring + Super Brittle allows Tack to strike DDTs' },
      { round: 95, threat: 'Fortified DDT rush', counter: 'Glue Storm ability + Gwen Firestorm' },
      { round: 100, threat: 'B.A.D. with 28,000 HP', counter: 'Super Brittle + Tack Zone + Overclock = instant melt' }
    ],
    pros: [
      'Highest DPS per dollar ratio in all of BTD6',
      'Extremely satisfying to watch Bosses and BADs evaporate',
      'All towers benefit from Primary Expertise village discounts'
    ],
    cons: [
      'Requires track layouts with tight loops or intersections',
      'Short range means exact placement is essential'
    ],
    synergyNotes: 'The Tack Zone fires 32 tacks at ultra high speed. Super Brittle gives +4 per tack, and Glue Storm gives +2 per tack = +6 flat damage multiplied by 32 projectiles!',
    challengeCode: 'ZMR7BRT',
    isFeatured: true
  },
  {
    id: 'strat-sub-commander-armada',
    title: 'The Sub Armada: Sub Commander + AP Darts Flooding',
    subtitle: 'Dominate every water map with global homing darts and Brickell mega-mines',
    difficulty: 'Intermediate',
    gameMode: 'CHIMPS',
    hero: 'Admiral Brickell',
    heroCrosspath: 'Level 20 (Naval Tactics)',
    winRate: 94,
    patchVersion: 'v47.2',
    microIntensity: 'Medium',
    totalCostEstimate: 135000,
    monkeyKnowledgeRequired: false,
    maps: ['Flooded Valley', 'Spice Islands', 'Peninsula', 'Off The Coast', 'Spring Spring'],
    tags: ['Water Map Meta', 'Global Range', 'Brickell Buffs', 'Armor Piercing', 'Easy Cleanups'],
    keyTowers: [
      { name: 'Sub Commander', crosspath: '2-0-5', topPath: 2, midPath: 0, botPath: 5, role: 'Doubles damage and pierce of all Subs globally', category: 'Military', costEstimate: 28000 },
      { name: 'Armor Piercing Darts', crosspath: '2-0-4', topPath: 2, midPath: 0, botPath: 4, role: 'Spam 5-6 AP Darts around Sub Commander', category: 'Military', costEstimate: 4200 },
      { name: 'Pre-Emptive Strike', crosspath: '2-5-0', topPath: 2, midPath: 5, botPath: 0, role: 'Insta-pops incoming DDTs globally upon spawn', category: 'Military', costEstimate: 38000 },
      { name: 'Submerge & Support', crosspath: '3-0-0', topPath: 3, midPath: 0, botPath: 0, role: 'Global map decamo aura for subs', category: 'Military', costEstimate: 1800 },
      { name: 'Carrier Flagship', crosspath: '5-2-0', topPath: 5, midPath: 2, botPath: 0, role: '+15% attack speed aura to all water towers', category: 'Military', costEstimate: 34000 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-25',
        phase: 'Water Drop & Advanced Intel',
        actions: [
          'Place two Dart Monkeys (or 0-0-0 Sub) to survive rounds 6-9.',
          'Deploy Admiral Brickell in central water body.',
          'Drop Sub 1: Upgrade to 2-0-0 Advanced Intel so it shoots across entire map!'
        ],
        tips: 'With 2-0-0 Intel, Subs can shoot anywhere on the map as long as any tower has vision.'
      },
      {
        roundRange: 'Rounds 26-50',
        phase: 'Sub Cluster & Naval Tactics',
        actions: [
          'Upgrade Sub 1 to 2-0-3 Triple Guns, then 2-0-4 Armor Piercing Darts.',
          'Place a second Sub set to 3-0-0 (Submerge) for permanent decamo coverage.',
          'Activate Brickell Naval Tactics whenever MOAB blimps appear (Rounds 40 & 50).'
        ],
        tips: 'Brickell Mega Mine can be placed ahead of time to stockpile burst damage for Round 60 BFB.'
      },
      {
        roundRange: 'Rounds 51-78',
        phase: 'Sub Commander Power Spike',
        actions: [
          'Save $28,000 to purchase 2-0-5 Sub Commander.',
          'Surround Sub Commander with four 2-0-4 Armor Piercing Dart subs.',
          'Place a 4-2-0 Alchemist on nearby land or pontoon to buff the main clump.'
        ],
        tips: 'Sub Commander aura gives +1 damage and double pierce to every sub in its radius.'
      },
      {
        roundRange: 'Rounds 79-100',
        phase: 'Pre-Emptive Strike DDT Counter',
        actions: [
          'Upgrade one Sub to 2-5-0 Pre-Emptive Strike before Round 90.',
          'Watch Pre-Emptive Strike automatically shoot a missile that vaporizes every DDT upon entrance!',
          'On Round 100, use Brickell Naval Tactics + First Strike capability for an instant win.'
        ],
        tips: 'Pre-Emptive Strike passive missile completely trivializes Round 90, 93, and 95 DDTs.'
      }
    ],
    dangerousRounds: [
      { round: 59, threat: 'Camo Lead Bloons', counter: '3-0-0 Sub decamo + Brickell sea mines' },
      { round: 63, threat: 'Ceramic clumps', counter: 'Brickell Naval Tactics + AP Darts rapid fire' },
      { round: 90, threat: 'First DDTs', counter: '2-5-0 Pre-Emptive Strike passive missile destroys DDT on spawn' },
      { round: 95, threat: 'Fortified DDT wave', counter: 'Brickell Mega Mines + Naval Tactics' },
      { round: 100, threat: 'Bad Layer HP', counter: 'First Strike Capability (ability instant kill when damaged)' }
    ],
    pros: [
      'Unmatched map-wide range through Advanced Intel',
      'Pre-Emptive Strike completely eliminates DDT anxiety',
      'First Strike ability skips round 100 BAD children entirely'
    ],
    cons: [
      'Requires water-heavy maps (or costly portable lakes/ice platforms)',
      'Sub Commander must fit with multiple subs inside its aura'
    ],
    synergyNotes: 'Brickell Naval Tactics ability doubles attack speed and gives +1 pierce and normal damage to all water monkeys, stacking multiplicatively with Sub Commander!',
    challengeCode: 'ZMSUB77',
    isFeatured: false
  },
  {
    id: 'strat-spirit-forest-druids',
    title: 'Forest Wrath: Spirit of the Forest + Poplust Swarm',
    subtitle: 'Endless vines, global track coverage, and exponential Druid attack speed buffs',
    difficulty: 'Intermediate',
    gameMode: 'CHIMPS',
    hero: 'Obyn Greenfoot',
    heroCrosspath: 'Level 20 (Nature buffs)',
    winRate: 93,
    patchVersion: 'v47.2',
    microIntensity: 'Low (AFK)',
    totalCostEstimate: 139000,
    monkeyKnowledgeRequired: false,
    maps: ['Sanctuary', 'Spillway', 'Quiet Street', 'Underground', 'Rake', 'Cracked'],
    tags: ['Druid Meta', 'Track Coverage', 'Passive Ceramic Annihilator', 'Nature Buffs'],
    keyTowers: [
      { name: 'Spirit of the Forest', crosspath: '1-5-0', topPath: 1, midPath: 5, botPath: 0, role: 'Lays bramble vines across entire map + deals continuous DPS', category: 'Magic', costEstimate: 45000 },
      { name: 'Avatar of Wrath', crosspath: '0-1-5', topPath: 0, midPath: 1, botPath: 5, role: 'Deals up to +30 bonus damage as more bloons flood the screen', category: 'Magic', costEstimate: 51000 },
      { name: 'Poplust Druids (x5)', crosspath: '0-1-4', topPath: 0, midPath: 1, botPath: 4, role: 'Stacks +75% attack speed and +75% pierce across all Druids', category: 'Magic', costEstimate: 16000 },
      { name: 'Monkey Village', crosspath: '2-3-0', topPath: 2, midPath: 3, botPath: 0, role: 'MIB (allows Druids to pop Lead & DDTs without pause)', category: 'Support', costEstimate: 11000 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-30',
        phase: 'Obyn & Early Druids',
        actions: [
          'Drop Dart Monkey, then place Obyn Greenfoot as early as Round 9.',
          'Place first Druid within Obyn aura (0-1-0 -> 1-1-0 Heart of Thunder).',
          'Add a 0-2-2 Village to start discounts.'
        ],
        tips: 'Obyn grants +1 pierce and range to all Magic monkeys passively at Level 2 and Level 11.'
      },
      {
        roundRange: 'Rounds 31-50',
        phase: 'Bramble Expansion',
        actions: [
          'Upgrade main midpath Druid to 1-3-0 Druid of the Jungle (instakills leads & ceramics).',
          'Upgrade to 1-4-0 Jungle Bounty.',
          'Place five additional Druids in a tight circle around Obyn.'
        ],
        tips: 'Druid of the Jungle grabs ceramic Bloons from any lane and crushes them inside.'
      },
      {
        roundRange: 'Rounds 51-75',
        phase: 'Spirit of the Forest Rush',
        actions: [
          'Save directly for 1-5-0 Spirit of the Forest (achievable around Round 65).',
          'Vines now cover every inch of track, dealing damage tick every 0.1s.',
          'Ceramics on Round 63 and 76 get pulverized into dust before passing first turn.'
        ],
        tips: 'Spirit of the Forest vines do increased crushing damage the closer Bloons get to the tower.'
      },
      {
        roundRange: 'Rounds 76-100',
        phase: 'Avatar of Wrath + Poplust Synergy',
        actions: [
          'Upgrade all 5 surrounding Druids to 0-1-4 Poplust (stacks x5 buff icon!).',
          'Upgrade center Druid to 0-1-5 Avatar of Wrath.',
          'Upgrade Village to 2-3-0 Monkey Intelligence Bureau (MIB) for DDT pop power.',
          'Watch Round 98 and 100 melt in seconds as Avatar fires lightning-fast thorn barrages.'
        ],
        tips: 'Avatar of Wrath grows stronger the more RBE is on screen — perfect for round 98.'
      }
    ],
    dangerousRounds: [
      { round: 59, threat: 'Camo Lead', counter: 'Obyn Brambles or 1-4-0 Druid grab with Village radar' },
      { round: 63, threat: 'Dense Ceramics', counter: 'Spirit of the Forest completely trivializes this' },
      { round: 90, threat: 'DDTs', counter: '2-3-0 MIB Village enables Avatar to shred dark titanium armor' },
      { round: 98, threat: 'Hyper-dense ZOMG & Fortified BFB clump', counter: 'Avatar of Wrath reaches maximum fury multiplier' },
      { round: 100, threat: 'Bad Layer', counter: 'Obyn Wall of Trees absorbs children; Avatar destroys main shell' }
    ],
    pros: [
      'Virtually immune to ceramic leaks thanks to global Brambles',
      'Extremely forgiving on complex multi-lane maps',
      'Poplust swarm is one of the most reliable CHIMPS engines in the game'
    ],
    cons: [
      'Requires large cluster space to fit 6 Druids, Obyn, and Village',
      'Need MIB Village for full DDT immunity'
    ],
    synergyNotes: '5 Poplusts give a compounding 75% attack speed and 75% pierce buff to Avatar of Wrath, turning it into a machine gun that fires 30 thorns per second.',
    challengeCode: 'ZMDRU44',
    isFeatured: false
  },
  {
    id: 'strat-corvus-soul-harvest',
    title: 'The Necromancer: Corvus Soul Harvest True CHIMPS',
    subtitle: 'The highest skill ceiling strategy in BTD6: Complete #OUCH, Ravine, and Quad with 0 leaks',
    difficulty: 'Expert',
    gameMode: 'CHIMPS',
    hero: 'Corvus',
    heroCrosspath: 'Level 20 (Spellbook Master)',
    winRate: 89,
    patchVersion: 'v47.2',
    microIntensity: 'High (Micro)',
    totalCostEstimate: 155000,
    monkeyKnowledgeRequired: false,
    maps: ['#OUCH', 'Ravine', 'Quad', 'Bloody Puddles', 'Muddy Puddles', 'Glacial Trail'],
    tags: ['Expert Meta', 'Spell Micro', 'Zero RNG', 'True CHIMPS', 'Competitive'],
    keyTowers: [
      { name: 'Corvus & Ghost', crosspath: 'Active Spells', topPath: 0, midPath: 0, botPath: 0, role: 'Generates Soul Mana; casts Trample, Ancestral Might, Nourish', category: 'Hero', costEstimate: 1080 },
      { name: 'Carpet of Spikes', crosspath: '2-5-0', topPath: 2, midPath: 5, botPath: 0, role: 'Global spike carpet storm every 15s', category: 'Support', costEstimate: 47000 },
      { name: 'Glue Storm', crosspath: '2-5-0', topPath: 2, midPath: 5, botPath: 0, role: 'Global slow & +2 damage multiplier', category: 'Primary', costEstimate: 19500 },
      { name: 'Snowstorm / Absolute Zero', crosspath: '0-5-2', topPath: 0, midPath: 5, botPath: 2, role: 'Full-screen freeze stall for cooldown recovery', category: 'Primary', costEstimate: 26000 },
      { name: 'Moab Press Boomerang', crosspath: '0-2-4', topPath: 0, midPath: 2, botPath: 4, role: 'Pushes back ZOMGs and BFBs indefinitely', category: 'Primary', costEstimate: 4800 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-20',
        phase: 'Micro Start & Soul Stockpile',
        actions: [
          'Drop Dart Sub / Ninja placement tailored to expert map pixel precision.',
          'Drop Corvus at Round 8. Set Haunt to accumulate Souls from early bloon waves.',
          'Use "Spear" spell for emergency leads or high HP pinks.'
        ],
        tips: 'Always toggle Nourish when soul capacity is over 80% to accelerate Corvus leveling.'
      },
      {
        roundRange: 'Rounds 21-45',
        phase: 'Spell Weaving & Early Moabs',
        actions: [
          'Round 28 Leads: Cast Spear or Repel.',
          'Round 40 MOAB: Cast "Echo" followed by "Ancestral Might" or "Lightning". MOAB pops in 2 seconds.',
          'Drop 0-2-4 Boomerang targeting Strong to control blimps.'
        ],
        tips: 'Ancestral Might turns Corvus spirit into a True Sun God avatar for 10 seconds.'
      },
      {
        roundRange: 'Rounds 46-75',
        phase: 'Midgame Spell Rotation',
        actions: [
          'Drop 0-3-2 Ice Monkey and 0-2-4 Glue to clump bloons for maximum Soul harvest.',
          'Cast "Trample" across tracks for ceramic clusters like Round 63 and 76.',
          'Save for Tier 5 Carpet of Spikes.'
        ],
        tips: 'Trample leaves burning spectral footprints that deal 100+ pierce damage to ceramic rushes.'
      },
      {
        roundRange: 'Rounds 76-100',
        phase: 'Ancestral Might & Carpet of Spikes Lock',
        actions: [
          'Purchase 2-5-0 Carpet of Spikes. Spikes now replenish on all multi-lanes automatically.',
          'Buy 2-5-0 Glue Storm and 0-5-2 Absolute Zero for emergency board-freeze.',
          'Round 95 & 99: Trigger Corvus Repel + Frostbite + Glue Storm.',
          'Round 100 BAD: Cast Ancestral Might + Spike Storm; BAD layer cracks before lane intersection.'
        ],
        tips: 'Repel spell pushes DDTs backward while Carpet spikes eat their health.'
      }
    ],
    dangerousRounds: [
      { round: 40, threat: 'Fast MOAB on multi-lanes', counter: 'Ancestral Might spell + Spear micro' },
      { round: 63, threat: 'Dense Ceramics', counter: 'Cast Trample or Fire breath spell' },
      { round: 90, threat: 'First DDTs', counter: 'Repel spell sends DDTs back through spike piles' },
      { round: 95, threat: 'Massive DDT horde', counter: 'Absolute Zero freeze + Glue Storm + Ancestral Might' },
      { round: 98, threat: 'Dense ZOMGs & Fortified BFBs', counter: 'Moab Press knockback + Carpet of Spikes passive' },
      { round: 100, threat: 'B.A.D. Airship', counter: 'Carpet of Spikes active ability + Ancestral Might' }
    ],
    pros: [
      'Capable of beating the hardest maps in the game without RNG reliance',
      'Provides emergency answers for any bloon type via 16 distinct spells',
      'Independent of map geometry'
    ],
    cons: [
      'Requires active attention and understanding of Corvus spell cooldowns',
      'High APM (actions per minute) compared to passive towers'
    ],
    synergyNotes: 'Carpet of Spikes solves Corvus multi-lane weakness on #OUCH and Quad, while Corvus Ancestral Might provides the raw burst damage to crack the BAD shell.',
    challengeCode: 'ZMCORV8',
    isFeatured: true
  },
  {
    id: 'strat-prince-inferno-ring',
    title: 'The Dark Forge: Prince of Darkness + Inferno Ring',
    subtitle: 'Reanimate undead MOAB blimps while raining 700-damage meteor fireballs',
    difficulty: 'Advanced',
    gameMode: 'CHIMPS',
    hero: 'Geraldo',
    heroCrosspath: 'Level 20 (Shoppy Spells)',
    winRate: 92,
    patchVersion: 'v47.2',
    microIntensity: 'Medium',
    totalCostEstimate: 147000,
    monkeyKnowledgeRequired: false,
    maps: ['Muddy Puddles', 'Geared', 'Dark Castle', 'High Finance', 'Sunken Columns'],
    tags: ['Undead Swarm', 'Inferno Ring', 'Meteor DPS', 'Geraldo Shop', 'High Pierce'],
    keyTowers: [
      { name: 'Prince of Darkness', crosspath: '0-2-5', topPath: 0, midPath: 2, botPath: 5, role: 'Spawns zombie BFBs and ZOMGs that charge backwards', category: 'Magic', costEstimate: 29000 },
      { name: 'Inferno Ring', crosspath: '5-0-2', topPath: 5, midPath: 0, botPath: 2, role: 'Launches 700-damage meteor fireball and massive radial burn', category: 'Primary', costEstimate: 52000 },
      { name: 'Ring of Fire', crosspath: '4-0-2', topPath: 4, midPath: 0, botPath: 2, role: 'Midgame ceramic annihilator', category: 'Primary', costEstimate: 5100 },
      { name: 'Embrittlement', crosspath: '4-2-0', topPath: 4, midPath: 2, botPath: 0, role: 'Decamos and adds +1 flat damage to all flame ticks', category: 'Primary', costEstimate: 4300 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-30',
        phase: 'Geraldo Early Shop & Ring of Fire',
        actions: [
          'Drop Dart Monkey + Geraldo.',
          'Deploy Geraldo Shooty Turrets to cover separate exits on multi-lane maps.',
          'Drop Tack Shooter in central choke; upgrade to 3-0-2 Ring of Fire.'
        ],
        tips: 'Buy Geraldo Pickles or Sharpening Stone to give early towers huge value.'
      },
      {
        roundRange: 'Rounds 31-60',
        phase: 'Necromancy Engine',
        actions: [
          'Place Wizard Monkey near center; upgrade to 0-2-4 Necromancer.',
          'The graveyard stacks fill quickly; undead bloons now shield your defense from leaks.',
          'Upgrade Wizard to 0-2-5 Prince of Darkness before Round 60.'
        ],
        tips: 'Prince of Darkness reanimates undead BFBs that deal thousands of free damage.'
      },
      {
        roundRange: 'Rounds 61-80',
        phase: 'Saving for Inferno Ring',
        actions: [
          'Prince of Darkness easily solos Rounds 60-79 with zombie BFB armies.',
          'Save every dollar directly toward the $45,000 Inferno Ring upgrade.',
          'Upgrade Tack to 5-0-2 Inferno Ring around Round 81.'
        ],
        tips: 'Inferno Ring meteor has infinite range and targets Strongest bloons with 700 direct impact!'
      },
      {
        roundRange: 'Rounds 81-100',
        phase: 'Meteor Firestorm Cleansing',
        actions: [
          'Place 4-2-0 Village for Primary Mentoring.',
          'Drop Geraldo Bunny / Genies on Round 98 and Round 100 for insurance.',
          'Watch Inferno Ring meteors blast BAD down while PoD undead army clears all remaining bloons.'
        ],
        tips: 'Geraldo Glue bottle or Nail items at the exit prevent single sneaky DDT slips.'
      }
    ],
    dangerousRounds: [
      { round: 59, threat: 'Camo Lead', counter: 'Prince of Darkness shimmer + fire breath' },
      { round: 63, threat: 'Triple Ceramic', counter: 'Necromancer zombie swarm obliterates wave' },
      { round: 90, threat: 'DDT Rush', counter: 'Undead BFBs crash directly into DDTs and detonate' },
      { round: 98, threat: 'Fortified ZOMGs', counter: 'Inferno Ring meteor + PoD graveyard overflow' },
      { round: 100, threat: 'B.A.D.', counter: 'Inferno Ring 700 dmg meteor + Geraldo Genie Bottle' }
    ],
    pros: [
      'Incredible crowd-control with automatic zombie blockers',
      'Inferno Ring meteor snipes fortified blimps across the whole screen',
      'Very forgiving defense on multi-lane chokepoints'
    ],
    cons: [
      'Prince of Darkness needs a steady trickle of graveyard souls to maintain army',
      'Inferno Ring is a steep $45k single saveup'
    ],
    synergyNotes: 'Prince of Darkness handles the thousands of ceramic and normal bloon children released when Inferno Ring cracks huge blimps open, creating a closed loop.',
    challengeCode: 'ZMPOD55',
    isFeatured: false
  },
  {
    id: 'strat-bloonarius-paragon-rush',
    title: 'Titan Breaker: Bloonarius Elite Paragon & Farm Empire',
    subtitle: 'Elite Boss event guide: How to reach Round 120 and pop 40,000,000 HP Bloonarius',
    difficulty: 'Boss',
    gameMode: 'Boss Event',
    hero: 'Benjamin',
    heroCrosspath: 'Level 20 (Income Hack)',
    winRate: 91,
    patchVersion: 'v47.2',
    microIntensity: 'High (Micro)',
    metaRanking: 1,
    totalCostEstimate: 850000,
    monkeyKnowledgeRequired: true,
    maps: ['Scrapyard', 'Cubism', 'Polyphemus', 'Carved', 'In The Loop'],
    tags: ['Boss Event', 'Elite Bloonarius', 'Paragon Rush', 'Banana Farming', 'Ranked Meta'],
    keyTowers: [
      { name: 'Apex Plasma Master (Paragon)', crosspath: 'Degree 40+', topPath: 5, midPath: 5, botPath: 5, role: 'Huge bouncing plasma balls that melt Boss tiers 3-5', category: 'Primary', costEstimate: 375000 },
      { name: 'Goliath Doomship / Ace Paragon', crosspath: 'Degree 30+', topPath: 5, midPath: 5, botPath: 5, role: 'Global nuke carpet bombing with Carpet Bomb ability', category: 'Military', costEstimate: 800000 },
      { name: 'Banana Central & BRFs', crosspath: '5-2-0 / 4-2-0', topPath: 5, midPath: 2, botPath: 0, role: 'Generates $30,000+ cash per round', category: 'Support', costEstimate: 120000 },
      { name: 'Overclock Engineer', crosspath: '0-4-0', topPath: 0, midPath: 4, botPath: 0, role: 'Permanently boost Banana Central farm output', category: 'Support', costEstimate: 14000 },
      { name: 'Tack Zone + Super Brittle', crosspath: '2-0-5 / 5-0-2', topPath: 2, midPath: 0, botPath: 5, role: 'Tier 1 & Tier 2 Bloonarius boss shredder', category: 'Primary', costEstimate: 62000 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 1-39',
        phase: 'Greedy Banana Farm Engine',
        actions: [
          'Drop Benjamin immediately on Round 10.',
          'Build six 2-0-0 Banana Farms, upgrading to 2-0-2 / 2-0-3 Marketplace spam.',
          'Defend with minimal defense (e.g. 0-2-4 Recursive Cluster Bomb).',
          'At Round 39, sell farms if needed to afford 2-0-5 Tack Zone + 4-2-0 Alch for Tier 1 Boss.'
        ],
        tips: 'Tier 1 Bloonarius spawns at Round 40 and spits dozens of ceramics when hit. Tack Zone shreds it in 20 seconds.'
      },
      {
        roundRange: 'Rounds 41-59',
        phase: 'Tier 2 Boss & Banana Central Prep',
        actions: [
          'Immediately rebuy 4-2-0 Banana Research Facilities (BRFs).',
          'Build 0-0-5 Monkeyopolis to absorb farms into one massive income generator.',
          'At Round 59, prepare a 1-5-0 MAD (Moab Assured Destroyer) or 2-0-5 Tack + 5-0-2 Super Brittle for Tier 2.'
        ],
        tips: 'Tier 2 Bloonarius spawns at Round 60 with 75,000 HP and vomits BFBs.'
      },
      {
        roundRange: 'Rounds 61-99',
        phase: 'Banana Central & Dart Paragon Assembly',
        actions: [
          'Purchase 5-2-0 Banana Central + Overclock it permanently with 0-4-0 Engineer.',
          'Place Ultra-Juggernaut, Plasma Monkey Fan Club, and Crossbow Master.',
          'Accumulate 250,000+ pops across dart monkeys.',
          'At Round 79, purchase Apex Plasma Master Dart Paragon for Tier 3!'
        ],
        tips: 'Paragons do 400% bonus damage to Boss bloons, trivializing Tiers 3 & 4.'
      },
      {
        roundRange: 'Rounds 100-120',
        phase: 'Elite Tier 5 Annihilation',
        actions: [
          'Prepare Goliath Doomship (Ace Paragon) or Navarch of the Seas.',
          'Drop 5-0-2 Super Brittle, 5-2-0 Cripple MOAB (Sniper), and 2-5-0 Glue Storm for +12 debuff stacking.',
          'Round 120 Tier 5 Bloonarius spawns with 40,000,000 HP.',
          'Fire Goliath Doomship carpet nuke ability: Boss HP drops by millions per strike!'
        ],
        tips: 'Debuffs like Cripple MOAB and Super Brittle amplify Paragon damage significantly.'
      }
    ],
    dangerousRounds: [
      { round: 40, threat: 'Tier 1 Boss (20k HP + ceramic spit)', counter: '2-0-5 Tack Zone or 0-4-2 Boomerang + Sticky Bomb' },
      { round: 60, threat: 'Tier 2 Boss (75k HP + BFB vomit)', counter: 'MAD (0-5-0 Dartling) or Tack Zone + Super Brittle' },
      { round: 80, threat: 'Tier 3 Boss (350k HP + ZOMG vomit)', counter: 'Degree 30+ Dart Paragon (Apex Plasma Master)' },
      { round: 100, threat: 'Tier 4 Boss (1.5M HP)', counter: 'Two Paragons + Debuff monkeys' },
      { round: 120, threat: 'Elite Tier 5 Boss (40M HP + BAD vomit)', counter: 'Goliath Doomship + Navarch + Cripple Moab' }
    ],
    pros: [
      'Standard template used by top 1% ranked leaderboard players',
      'Massive cash output allows summoning multiple Paragons',
      'Clear, predictable benchmarks every 20 rounds'
    ],
    cons: [
      'Requires heavy farming micro and discipline',
      'Cannot be used in CHIMPS (farming is disabled)'
    ],
    synergyNotes: 'Banana Central increases the cash yield of all other 4-2-0 BRF farms on screen by 25%, while Overclock ensures maximum production uptime.',
    challengeCode: 'ZBLON99',
    isFeatured: true
  },
  {
    id: 'strat-sky-shredder-flagship',
    title: 'Air Superiority: Sky Shredder + Carrier Flagship',
    subtitle: 'The military aerial fleet that carpet bombs multi-lane expert CHIMPS maps',
    difficulty: 'Advanced',
    gameMode: 'CHIMPS',
    hero: 'Etienne',
    heroCrosspath: 'Level 20 (UCAV & Global Camo)',
    winRate: 91,
    patchVersion: 'v47.2',
    microIntensity: 'Medium',
    totalCostEstimate: 138000,
    monkeyKnowledgeRequired: false,
    maps: ['Dark Castle', 'Workshop', 'Peninsula', 'Muddy Puddles', 'High Finance'],
    tags: ['Military Synergy', 'Global Camo', 'Infinite Range', 'Aerial Fleet', 'Ace Micro'],
    keyTowers: [
      { name: 'Sky Shredder', crosspath: '5-0-2', topPath: 5, midPath: 0, botPath: 2, role: 'Fires 32 supersonic high-pierce darts in all directions + seeking missiles', category: 'Military', costEstimate: 45000 },
      { name: 'Carrier Flagship', crosspath: '5-2-0', topPath: 5, midPath: 2, botPath: 0, role: '+15% attack speed to all water towers & planes; spawns mini aircraft', category: 'Military', costEstimate: 33000 },
      { name: 'Overdrive / Tack Zone', crosspath: '2-0-4', topPath: 2, midPath: 0, botPath: 4, role: 'Can be placed ON TOP of Carrier Flagship runways!', category: 'Primary', costEstimate: 3800 },
      { name: 'Stronger Stimulant', crosspath: '4-2-0', topPath: 4, midPath: 2, botPath: 0, role: 'Buffs Sky Shredder darts with extra pierce & damage', category: 'Magic', costEstimate: 5200 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-28',
        phase: 'Etienne Early Drop',
        actions: [
          'Place Dart Monkeys and drop Etienne at Round 10.',
          'At Level 8 (around round 33), Etienne grants ALL towers permanent Camo detection globally!',
          'Drop Buccaneer in water; upgrade to 3-2-0 Destroyer.'
        ],
        tips: 'Etienne frees you from ever needing to purchase Camo Villages (2-2-0), saving thousands of dollars.'
      },
      {
        roundRange: 'Rounds 29-55',
        phase: 'Aircraft Carrier Expansion',
        actions: [
          'Upgrade Buccaneer to 4-2-0 Aircraft Carrier.',
          'Drop Monkey Ace (0-0-0 -> 3-0-2 -> 4-0-2 Operation: Dart Storm).',
          'Set Ace flight pattern to "Figure Eight" or "Infinite" depending on track layout.'
        ],
        tips: 'Etienne Level 10 UCAV ability wipes out rounds 40, 50, and 63 effortlessly.'
      },
      {
        roundRange: 'Rounds 56-80',
        phase: 'Carrier Flagship Runway Platform',
        actions: [
          'Upgrade Buccaneer to 5-2-0 Carrier Flagship.',
          'Note: Carrier Flagship provides 2 deck landing pads where land monkeys can be placed above water!',
          'Carrier Flagship gives +15% attack speed buff to Monkey Ace.',
          'Save and purchase 5-0-2 Sky Shredder.'
        ],
        tips: 'Sky Shredder darts never stop firing; combined with the 15% Flagship boost, the screen turns into a bullet storm.'
      },
      {
        roundRange: 'Rounds 81-100',
        phase: 'UCAV & Shredder Endgame',
        actions: [
          'Add a 0-2-4 Relentless Glue and 0-4-0 Saboteur Ninja to slow down DDTs.',
          'Trigger Etienne Level 10 UCAV on Round 95 and Round 98.',
          'Round 100 BAD gets pierced by thousands of seeking anti-MOAB missiles from Sky Shredder.'
        ],
        tips: 'Etienne Level 20 turns UCAV permanent for devastating endgame DPS.'
      }
    ],
    dangerousRounds: [
      { round: 59, threat: 'Camo Lead', counter: 'Etienne global camo + Destroyer grape shot' },
      { round: 63, threat: 'Triple Ceramic', counter: 'Etienne UCAV drone strike' },
      { round: 90, threat: 'DDT Rush', counter: 'Sky Shredder missile targeting + Flagship cannons' },
      { round: 95, threat: 'Fortified DDTs', counter: 'UCAV ability + Ninja Sabotage slow' },
      { round: 100, threat: 'B.A.D.', counter: 'Continuous Sky Shredder anti-MOAB darts' }
    ],
    pros: [
      'Etienne gives 100% free Camo detection to every tower on the map',
      'Planes fly anywhere on the screen regardless of track length or obstacles',
      'Extremely high single-target and multi-target hybrid DPS'
    ],
    cons: [
      'Ace flight paths take practice to optimize targeting',
      'Needs a body of water for Carrier Flagship'
    ],
    synergyNotes: 'Carrier Flagship has an exclusive hidden aura that boosts all Monkey Aces and aircraft by +15% attack speed, making Sky Shredder fire 36.8 darts per wave instead of 32!',
    challengeCode: 'ZMSKY22',
    isFeatured: false
  },
  {
    id: 'strat-half-cash-recursive',
    title: 'Half Cash Survivalist: Recursive Cluster Boom',
    subtitle: 'Solve the most hated game mode in BTD6 on half budget without using continues',
    difficulty: 'Intermediate',
    gameMode: 'Half Cash',
    hero: 'Quincy / Sauda',
    heroCrosspath: 'Level 14',
    winRate: 93,
    patchVersion: 'v47.2',
    microIntensity: 'Low (AFK)',
    totalCostEstimate: 42000,
    monkeyKnowledgeRequired: true,
    maps: ['Cornfield', 'Rake', 'Bazaar', 'Spillway', 'Haunted'],
    tags: ['Half Cash', 'Budget Build', 'No Insta-Monkeys', 'Bomb Shooter', 'Cost Efficiency'],
    keyTowers: [
      { name: 'Recursive Cluster', crosspath: '2-0-4', topPath: 2, midPath: 0, botPath: 4, role: 'Secondary cluster explosions eradicate all clustered bloons', category: 'Primary', costEstimate: 4100 },
      { name: 'Alchemist', crosspath: '4-2-0', topPath: 4, midPath: 2, botPath: 0, role: 'Berserker Brew buff for lead & ceramic pops', category: 'Magic', costEstimate: 5100 },
      { name: 'Primary Training', crosspath: '3-2-0', topPath: 3, midPath: 2, botPath: 0, role: 'Reduced prices and increased range/pierce for bombs', category: 'Support', costEstimate: 3600 },
      { name: 'Elite Defender', crosspath: '0-2-5', topPath: 0, midPath: 2, botPath: 5, role: 'High-speed clean up sniper for stray leaks', category: 'Military', costEstimate: 17500 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 1-25',
        phase: 'Micro Budget Defense',
        actions: [
          'Drop Free Dart Monkey (from Monkey Knowledge), then place Quincy / Sauda.',
          'Drop 0-0-0 Bomb Shooter on a bend.',
          'Upgrade Bomb to 1-0-2 -> 2-0-3 Cluster Bombs.'
        ],
        tips: 'Do not waste any money on farms in Half Cash until your core defense is stabilized.'
      },
      {
        roundRange: 'Rounds 26-45',
        phase: 'The Recursive Transformation',
        actions: [
          'Place 3-2-0 Alchemist next to Bomb Shooter.',
          'Upgrade Bomb to 2-0-4 Recursive Cluster before Round 40.',
          'Place 3-2-0 Village covering the bomb.'
        ],
        tips: 'Recursive Cluster fires extra mini-bombs that explode in a massive radius every other shot.'
      },
      {
        roundRange: 'Rounds 46-65',
        phase: 'Sniper & Second Cluster',
        actions: [
          'Add a second 2-0-4 Recursive Cluster bomb inside the village radius.',
          'Round 63 triple ceramics disappear in 2 seconds from the double recursive explosions.',
          'Drop 0-2-4 Sniper Monkey set to First for global clean-up.'
        ],
        tips: 'In Half Cash, games only go to Round 80 (not Round 100), so you do not need Tier 5 megatowers!'
      },
      {
        roundRange: 'Rounds 66-80',
        phase: 'Round 80 ZOMG Finisher',
        actions: [
          'Upgrade Sniper to 0-2-5 Elite Defender.',
          'Add a 0-2-4 MOAB Press Boomerang to stall Round 80 ZOMG.',
          'Claim your victory and half cash medal!'
        ],
        tips: 'Elite Defender machine gun cleans up any stray ceramic shard that slips through bombs.'
      }
    ],
    dangerousRounds: [
      { round: 40, threat: 'MOAB Blimp', counter: 'Quincy Level 3 rapid shot + 2-0-4 Recursive cluster' },
      { round: 59, threat: 'Camo Lead', counter: 'Village 2-2-0 radar + Alchemist buff' },
      { round: 63, threat: '3 massive ceramic rushes', counter: 'Two 2-0-4 Recursive Bombs eliminate them instantly' },
      { round: 76, threat: 'Regrow ceramic rush', counter: 'Recursive Cluster radius explodes regrow' },
      { round: 80, threat: 'ZOMG Blimp', counter: 'Elite Defender focus + Quincy Level 10 Storm of Arrows' }
    ],
    pros: [
      'Requires less than $40,000 total cash to complete',
      'No need to use valuable Insta-Monkeys or continues',
      'Extremely safe against ceramic death-rushes'
    ],
    cons: [
      'Only designed for games ending at Round 80 (Half Cash rules)',
      'Needs decamo support for DDTs if extended to Round 90+'
    ],
    synergyNotes: '2-0-4 Recursive Cluster + 4-2-0 Alchemist is widely recognized as the single most cost-efficient midgame crowd control combo in BTD6 history.',
    challengeCode: 'ZMHC888',
    isFeatured: false
  },
  {
    id: 'strat-perma-spike-stall',
    title: 'The Steel Fortress: Perma-Spike Stall Engine',
    subtitle: 'Psi + 0-2-5 Perma-Spike stall setup built to conquer the most awkward single-exit maps',
    difficulty: 'Advanced',
    gameMode: 'CHIMPS',
    hero: 'Psi',
    heroCrosspath: 'Level 20 (Mind Blast)',
    winRate: 94,
    patchVersion: 'v47.2',
    microIntensity: 'Low (AFK)',
    totalCostEstimate: 132000,
    monkeyKnowledgeRequired: false,
    maps: ['Workshop', 'Infernal', 'Peninsula', 'Cornfield', 'Rake'],
    tags: ['Spike Factory', 'Stall Strategy', 'Infinite Pierce', 'Zero Leak', 'Psi Meta'],
    keyTowers: [
      { name: 'Perma-Spike', crosspath: '0-2-5', topPath: 0, midPath: 2, botPath: 5, role: 'Spike pile persists for 300s or 50 rounds, accumulating 50+ spikes', category: 'Support', costEstimate: 36000 },
      { name: 'Alchemist (AMD & Berserker)', crosspath: '2-0-0', topPath: 2, midPath: 0, botPath: 0, role: 'Ensures spikes pop Lead and DDT Bloons with +1 damage', category: 'Magic', costEstimate: 1600 },
      { name: 'MOAB Glue', crosspath: '0-2-4', topPath: 0, midPath: 2, botPath: 4, role: 'Slows MOABs down by 37.5%, allowing Factory to stack more spikes', category: 'Primary', costEstimate: 4500 },
      { name: 'Snowstorm', crosspath: '0-3-2', topPath: 0, midPath: 3, botPath: 2, role: 'Stalls ceramics at the end of each round to prolong build time', category: 'Primary', costEstimate: 4200 },
      { name: 'Monkey Village', crosspath: '2-0-2', topPath: 2, midPath: 0, botPath: 2, role: 'Jungle Drums 18% attack speed + Village discounts', category: 'Support', costEstimate: 3900 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-30',
        phase: 'Psi Deployment & Early Defense',
        actions: [
          'Drop Dart or Sub; drop Psi at Round 10.',
          'Psi attacks bloons globally through obstacles with psychic vibrations.',
          'Drop 0-2-3 Sniper set to Strong for MOAB preparation.'
        ],
        tips: 'Psi ignores line of sight and map terrain completely, perfect for maps with walls.'
      },
      {
        roundRange: 'Rounds 31-55',
        phase: 'Midgame Stall Setup',
        actions: [
          'Place 0-2-4 MOAB Glue on the main track.',
          'Place 0-3-2 Ice Monkey near the middle.',
          'Together, these slow bloons down and make each round last 30% longer.'
        ],
        tips: 'Longer rounds = more time for Spike Factory to pile up spikes!'
      },
      {
        roundRange: 'Rounds 56-80',
        phase: 'Perma-Spike Construction',
        actions: [
          'Place Spike Factory right at the exit of the map (set target to Smart or Close).',
          'Upgrade to 0-2-4 Deadly Spikes, then purchase 0-2-5 Perma-Spike around Round 78.',
          'Immediately place 2-0-0 Alchemist next to Perma-Spike.'
        ],
        tips: 'Always build 0-2-5 (faster production) with a 2-0-0 Alch, rather than 2-0-5!'
      },
      {
        roundRange: 'Rounds 81-100',
        phase: 'Fortress Completion',
        actions: [
          'Add a 2-0-0 Village next to Spike Factory for 18% attack speed.',
          'Add 0-4-0 Overclock Engineer on the Factory to double spike rate.',
          'At Round 95 & 99, DDTs rush into the pile and instantly disintegrate.',
          'At Round 100, BAD takes heavy damage from Psi and the remaining MOABs vanish into spikes.'
        ],
        tips: 'Psi Level 10 ability obliterates all non-BAD blimps on Round 98 in one button press.'
      }
    ],
    dangerousRounds: [
      { round: 59, threat: 'Camo Lead', counter: 'Psi psychic pulse pops camo lead directly' },
      { round: 90, threat: 'DDTs', counter: 'Perma-Spike with 2-0-0 Alch Acidic Mixture Dip' },
      { round: 95, threat: 'Fortified DDT rush', counter: 'The accumulated 40-spike pile absorbs all 30 DDTs' },
      { round: 98, threat: 'Fortified ZOMGs', counter: 'Psi Level 10 Psionic Scream banishes them into ether' },
      { round: 100, threat: 'B.A.D.', counter: 'Overclocked Perma-Spike eats BAD children completely' }
    ],
    pros: [
      'Eliminates all fear of sudden fast leaks or DDT slips',
      'Psi scales to level 20 naturally to delete Round 98',
      'Requires very minimal attention during gameplay'
    ],
    cons: [
      'Weak on maps with multiple exits that cannot share a single spike pile',
      'Must ensure 2-0-0 Alchemist does not run out of Acidic Mixture Dip'
    ],
    synergyNotes: 'Stalling towers (MOAB Glue and Snowstorm) artificially lengthen the duration of rounds, allowing Perma-Spike to generate up to 50 spikes per round instead of 25!',
    challengeCode: 'ZMPSPK1',
    isFeatured: false
  }
];
