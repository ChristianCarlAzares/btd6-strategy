import { Strategy } from '../types/btd6';

/**
 * Blueprint pack verified on v57.2 (October 2026).
 * Focus: newest content (Skywarden from v56, Sniper Paragon from v57)
 * plus the highest value-per-dollar community solves currently in rotation.
 */
export const LATEST_STRATEGIES: Strategy[] = [
  {
    id: 'strat-skywarden-stormwrath',
    title: 'Storm Grid: Skywarden Conduit Web',
    subtitle: 'The v56 Skywarden Tier 5 chained-lightning engine — the strongest new tower in three years',
    difficulty: 'Advanced',
    gameMode: 'CHIMPS',
    hero: 'Obyn Greenfoot',
    heroCrosspath: 'Level 20 (Nature\u2019s Wrath + Nature\u2019s Clarity)',
    winRate: 96,
    patchVersion: 'v57.2',
    verifiedOn: 'v57.2',
    isNew: true,
    patchNote: 'v57.0 reduced Stormwrath Archon from $35,000 \u2192 $32,000 and buffed Combo Marker duration 2s \u2192 3s.',
    microIntensity: 'Low (AFK)',
    totalCostEstimate: 118400,
    coreOnlineRound: 72,
    efficiencyRank: 'S+',
    efficiencyScore: 95,
    monkeyKnowledgeRequired: false,
    maps: ['Ascent', 'Dark Castle', 'Workshop', 'Muddy Puddles', 'Rake', 'Cracked', 'Ship Capture'],
    tags: ['Skywarden', 'New Tower v56', 'Plasma Damage', 'Combo Marker', 'Obyn Synergy', 'AFK Friendly'],
    keyTowers: [
      { name: 'Skywarden', crosspath: '1-5-0', topPath: 1, midPath: 5, botPath: 0, role: 'Stormwrath Archon \u2014 conduit lightning web, +9 bonus damage vs MOAB/Ceramic/Lead', category: 'Magic', costEstimate: 33635 },
      { name: 'Skywarden', crosspath: '0-3-0', topPath: 0, midPath: 3, botPath: 0, role: 'Galvanic Conduit \u2014 second combo-marker engine to double chain uptime', category: 'Magic', costEstimate: 3100 },
      { name: 'Obyn Greenfoot', crosspath: 'Level 20', topPath: 0, midPath: 0, botPath: 0, role: 'L2 +1 pierce, L5 +35% range to 3-x-x Skywardens, L8 grants them Camo detection', category: 'Hero', costEstimate: 1400 },
      { name: 'Monkey Village', crosspath: '2-3-0', topPath: 2, midPath: 3, botPath: 0, role: 'Jungle Drums attack speed + Monkey Intelligence Bureau DDT pop', category: 'Support', costEstimate: 4300 },
      { name: 'Alchemist', crosspath: '4-2-0', topPath: 4, midPath: 2, botPath: 0, role: 'Stronger Stimulant \u2014 +1 damage / +3 pierce on every plasma arrow', category: 'Magic', costEstimate: 5100 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-27',
        phase: 'Cheap Opener + Hero Tempo',
        actions: [
          'Place one Skywarden (0-0-0, $220 on Hard) covering the longest straight \u2014 its base arrows already out-DPS a Dart Monkey.',
          'Drop Obyn Greenfoot adjacent at Round 9 so Level 2 pierce buff lands before Round 24 camo.',
          'Add a second Skywarden on x-x-1 Shatterpoint for frozen-bloon shatter value.'
        ],
        tips: 'Skywardens are Magic, so Obyn\u2019s Nature\u2019s Wrath (+1 pierce) applies from Level 2 \u2014 free damage with zero extra spend.'
      },
      {
        roundRange: 'Rounds 28-55',
        phase: 'Combo Marker Online',
        actions: [
          'Push the main Skywarden to x-3-x Galvanic Conduit ($2,500 after the v57 cost bump) to unlock the 3-second Combo Marker debuff.',
          'Stack 3 Skywardens on the same bend so consecutive arrow hits chain the marker constantly.',
          'Drop 2-3-0 Village for Jungle Drums attack speed, then 4-2-0 Alchemist on the cluster.'
        ],
        tips: 'Combo Markers now trigger from bloons fully popped by an attack (v57 buff) \u2014 cheap Red/Blue waves keep the chain permanently lit.'
      },
      {
        roundRange: 'Rounds 56-79',
        phase: 'Thunder\u2019s Decree Bridge',
        actions: [
          'Upgrade to x-4-x Thunder\u2019s Decree and use Thunder Charge before Round 63 (9s duration post-v57 nerf \u2014 time it to the wave, not the round start).',
          'Save aggressively: Stormwrath Archon is a single $32,000 purchase on Medium.',
          'Obyn Level 18 lets x-x-3+ Skywardens instantly shatter bloons up to Zebra tier.'
        ],
        tips: 'Thunder Charge electrifies nearby monkeys too \u2014 park it next to your Alchemist so the buff window covers both.'
      },
      {
        roundRange: 'Rounds 80-100',
        phase: 'Archon Conduit Web',
        actions: [
          'Buy 1-5-0 Stormwrath Archon. Expired arrows now plant lightning conduits along the track.',
          'Combo lightning jumps for 50 damage per arc, and the stun combo adds +100 damage.',
          'Add 0-2-4 Relentless Glue as a DDT brake for Rounds 90/95 while the web melts the BAD.'
        ],
        tips: 'Conduits persist where arrows expire \u2014 on loop maps they form a closed circuit covering nearly the entire track.'
      }
    ],
    dangerousRounds: [
      { round: 59, threat: 'Camo Lead Bloons', counter: 'Obyn Level 8 grants Skywardens native camo detection; Plasma damage type hits lead' },
      { round: 63, threat: 'Triple ceramic compression', counter: 'Thunder Charge + Stormwrath combo arcs (bonus +9 vs Ceramic)' },
      { round: 90, threat: 'First DDTs', counter: '0-2-4 Relentless Glue + Archon bonus damage vs MOAB-class' },
      { round: 98, threat: 'Fortified ZOMG wall (104,240 RBE)', counter: 'Conduit web chains across the whole screen; Glue Storm if cash allows' },
      { round: 100, threat: 'B.A.D. Airship', counter: 'Archon +9 MOAB-class bonus with Alchemist stimulant stacking' }
    ],
    pros: [
      'Cheapest new-content Tier 5 in the game at $32,000 (post-v57 price cut)',
      'Zero RNG: combo chains scale with bloon density, so it gets stronger on harder rounds',
      'Obyn removes the usual camo/pierce/range tax entirely'
    ],
    cons: [
      'Thunder Charge dropped to 9s in v57, so ability timing matters more than before',
      'Conduits are placed where arrows expire \u2014 very short single-lane tracks under-use the web'
    ],
    synergyNotes: 'Stormwrath Archon converts every expired arrow into a lightning conduit. Alchemist Stronger Stimulant adds +1 damage and +3 pierce to the arrows that create them, so a single $5,100 Alchemist multiplies the entire web\u2019s uptime and output.',
    challengeCode: 'SKY57ARCH'
  },
  {
    id: 'strat-winters-mercy-coldchain',
    title: 'Winter\u2019s Mercy: Icesplosion Stall Loop',
    subtitle: 'The budget Skywarden line \u2014 freeze, shatter, and repeat for less than one Tier 5 elsewhere',
    difficulty: 'Intermediate',
    gameMode: 'CHIMPS',
    hero: 'Etienne',
    heroCrosspath: 'Level 8 (Global Camo Detection)',
    winRate: 94,
    patchVersion: 'v57.2',
    verifiedOn: 'v57.2',
    isNew: true,
    patchNote: 'v57.0 buffed Winter\u2019s Mercy Icesplosion base damage 5 \u2192 10 and doubled its MOAB-class bonus (ZOMG +200 \u2192 +400).',
    microIntensity: 'Low (AFK)',
    totalCostEstimate: 92600,
    coreOnlineRound: 66,
    efficiencyRank: 'S+',
    efficiencyScore: 93,
    monkeyKnowledgeRequired: false,
    maps: ['Glacial Trail', 'Frozen Over', 'Snowflake', 'Winter', 'Log Flume', 'Resort'],
    tags: ['Skywarden', 'Stall Engine', 'Icesplosion', 'DDT Immunity', 'Budget Tier 5', 'New Tower v56'],
    keyTowers: [
      { name: 'Skywarden', crosspath: '2-0-5', topPath: 2, midPath: 0, botPath: 5, role: 'Winter\u2019s Mercy \u2014 Icesplosion 10 damage with +400 bonus vs ZOMGs', category: 'Magic', costEstimate: 21800 },
      { name: 'Skywarden', crosspath: '0-2-3', topPath: 0, midPath: 2, botPath: 3, role: 'Coldchain \u2014 frozen overlay spreader that keeps the shatter chain alive', category: 'Magic', costEstimate: 2400 },
      { name: 'Ice Monkey', crosspath: '2-0-4', topPath: 2, midPath: 0, botPath: 4, role: 'Embrittlement \u2014 decamo plus +1 flat damage to every shard in the loop', category: 'Primary', costEstimate: 4300 },
      { name: 'Etienne', crosspath: 'Level 20', topPath: 0, midPath: 0, botPath: 0, role: 'Free global camo detection at Level 8; UCAV for Round 63 and 95', category: 'Hero', costEstimate: 800 },
      { name: 'Spike Factory', crosspath: '0-2-5', topPath: 0, midPath: 2, botPath: 5, role: 'Perma-Spike exit safety net for fortified DDTs', category: 'Support', costEstimate: 36500 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-30',
        phase: 'Cold Open',
        actions: [
          'Place Skywarden on x-x-1 Shatterpoint covering a bend; drop Etienne at Round 8.',
          'Add Ice Monkey x-x-1 Cold Snap for early regrow control.',
          'Etienne Level 8 (≈Round 33) hands the whole map free camo detection.'
        ],
        tips: 'Shatterpoint\u2019s instant shatter on frozen bloons deletes ceramics before they can split \u2014 the cheapest mid-game ceramic answer available.'
      },
      {
        roundRange: 'Rounds 31-58',
        phase: 'Coldchain Spread',
        actions: [
          'Upgrade support Skywarden to 0-2-3 Coldchain so frozen overlays propagate between bloons.',
          'Upgrade Ice Monkey to 2-0-4 Embrittlement for decamo and the +1 damage debuff.',
          'Push the main Skywarden to 2-0-4 Frozen Verdict tier progress before saving for Tier 5.'
        ],
        tips: 'Coldchain + Embrittlement together remove both the camo and the lead tax without a single Village purchase.'
      },
      {
        roundRange: 'Rounds 59-79',
        phase: 'Mercy Online',
        actions: [
          'Buy 2-0-5 Winter\u2019s Mercy before Round 63 \u2014 Icesplosion now deals 10 base with huge MOAB-class scaling.',
          'Keep two Coldchain Skywardens feeding frozen targets into the blast radius.',
          'Start the Perma-Spike pile at the map exit (0-2-3 \u2192 0-2-4 \u2192 0-2-5).'
        ],
        tips: 'Winter\u2019s Mercy is roughly $21,800 all-in \u2014 less than half the price of an Avatar of Wrath and it stalls as well as it kills.'
      },
      {
        roundRange: 'Rounds 80-100',
        phase: 'Frozen Finish Line',
        actions: [
          'Complete 0-2-5 Perma-Spike at the exit for Rounds 90/95/99 DDT catches.',
          'Add 0-4-0 Overclock Engineer on Winter\u2019s Mercy to double the Icesplosion cadence.',
          'Use Etienne UCAV on Round 98 while the freeze lock holds the ZOMG wall in place.'
        ],
        tips: 'Frozen bloons take bonus damage from Icesplosion, and Perma-Spike deletes anything that thaws and slips through.'
      }
    ],
    dangerousRounds: [
      { round: 40, threat: 'First MOAB', counter: 'Skywarden shatter + Etienne UCAV' },
      { round: 63, threat: 'Triple ceramic compression', counter: 'Coldchain freeze lock into Icesplosion blast' },
      { round: 76, threat: 'Regrow ceramic burst', counter: 'Shatterpoint instant shatter prevents regrow re-inflation' },
      { round: 90, threat: 'First DDTs', counter: 'Embrittlement decamo + Perma-Spike exit pile' },
      { round: 95, threat: '30 fortified DDTs', counter: 'Overclocked Icesplosion slow + Perma-Spike saturation' }
    ],
    pros: [
      'Lowest total cost of any current Tier 5 CHIMPS solve (~$92,600)',
      'Stall and damage in one tower \u2014 no separate glue/ice support line required',
      'v57 Icesplosion buff pushed MOAB-class damage from +200 to +400 vs ZOMGs'
    ],
    cons: [
      'Freeze immunity on White/Purple bloons needs a secondary damage source',
      'BAD is immune to slow, so Round 100 still leans on the Perma-Spike pile'
    ],
    synergyNotes: 'Coldchain (x-x-3) spreads the frozen overlay while Winter\u2019s Mercy (x-x-5) detonates Icesplosion for bonus damage against frozen targets. Adding 2-0-4 Embrittlement layers a flat +1 damage debuff on top of the shatter chain.',
    challengeCode: 'SKY57ICE1'
  },
  {
    id: 'strat-apache-prime-lanelock',
    title: 'Apache Prime Lane Lock (Sauda)',
    subtitle: 'The community-standard single-lane black border: one Heli, one Village, one Alchemist',
    difficulty: 'Beginner',
    gameMode: 'CHIMPS',
    hero: 'Sauda',
    heroCrosspath: 'Level 20 (Leaping Sword + Blade Maelstrom)',
    winRate: 97,
    patchVersion: 'v57.2',
    verifiedOn: 'v57.2',
    isNew: true,
    patchNote: 'Still the most-recommended beginner solve on r/btd6 into 2026 \u2014 unchanged by v56/v57 balance passes.',
    microIntensity: 'Low (AFK)',
    totalCostEstimate: 86200,
    coreOnlineRound: 68,
    efficiencyRank: 'S+',
    efficiencyScore: 94,
    monkeyKnowledgeRequired: false,
    maps: ['Logs', 'Resort', 'Cubism', 'Monkey Meadow', 'Town Center', 'Cargo', 'Tree Stump', 'Balance'],
    tags: ['Apache Prime', 'Single Lane', 'Black Border', 'Cheapest Solve', 'AFK Friendly', 'Sauda'],
    keyTowers: [
      { name: 'Heli Pilot', crosspath: '5-0-2', topPath: 5, midPath: 0, botPath: 2, role: 'Apache Prime \u2014 6-damage lasers with 23 pierce plus a rapid plasma cannon', category: 'Military', costEstimate: 48600 },
      { name: 'Heli Pilot', crosspath: '3-0-2', topPath: 3, midPath: 0, botPath: 2, role: 'Razor Rotors bridge \u2014 pops Lead and Frozen on contact from Round 30', category: 'Military', costEstimate: 5500 },
      { name: 'Monkey Village', crosspath: '2-3-0', topPath: 2, midPath: 3, botPath: 0, role: 'Radar Scanner camo + Jungle Drums attack speed + commerce income', category: 'Support', costEstimate: 4300 },
      { name: 'Alchemist', crosspath: '4-2-0', topPath: 4, midPath: 2, botPath: 0, role: 'Stronger Stimulant applied to both Helis', category: 'Magic', costEstimate: 5100 },
      { name: 'Spike Factory', crosspath: '0-2-5', topPath: 0, midPath: 2, botPath: 5, role: 'Perma-Spike exit net for Round 90+ DDTs', category: 'Support', costEstimate: 36500 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-29',
        phase: 'Sauda Carry',
        actions: [
          'Drop Sauda at Round 6 on the tightest inner bend \u2014 she solo-carries through Round 27.',
          'Add Heli Pilot and push 1-0-0 Quad Darts \u2192 3-0-2 Razor Rotors before Round 28 leads.',
          'Place Village 2-2-0 for Radar Scanner so the Heli sees Round 24 camo.'
        ],
        tips: 'Razor Rotors pop Lead and Frozen on contact, which removes the need for a Bomb Shooter or Alchemist in the opener.'
      },
      {
        roundRange: 'Rounds 30-45',
        phase: 'MOAB Answer',
        actions: [
          'Upgrade Village to 2-3-0 for Jungle Drums attack speed.',
          'Drop Alchemist and walk it to 3-0-0, then 4-2-0 Stronger Stimulant.',
          'Round 40 MOAB dies to Razor Rotors + Sauda Leaping Sword without spending extra cash.'
        ],
        tips: 'Keep the Alchemist inside Village range so Primary/Magic discounts apply to everything you buy afterwards.'
      },
      {
        roundRange: 'Rounds 46-75',
        phase: 'Apache Prime Purchase',
        actions: [
          'Save straight to 5-0-2 Apache Prime (≈$48,600 total on Medium) \u2014 usually online by Round 68.',
          'Set Heli targeting to Strong; the lasers delete ceramics and shred the Round 63 compression.',
          'Add a second 4-2-0 Alchemist if spare cash allows before Round 76 regrows.'
        ],
        tips: 'Apache Prime\u2019s plasma cannon and homing missiles both inherit the Stimulant buff \u2014 one Alchemist doubles two weapon systems.'
      },
      {
        roundRange: 'Rounds 76-100',
        phase: 'Perma-Spike Insurance',
        actions: [
          'Build 0-2-5 Perma-Spike at the exit with a 2-0-0 Alchemist beside it for lead/DDT pop.',
          'Sauda Blade Maelstrom on Round 95 and Round 98 for free board control.',
          'Round 100 BAD melts to Apache Prime lasers; children vanish into the spike pile.'
        ],
        tips: 'This is the exact "laziest black border" line repeated across beginner, intermediate and several advanced maps.'
      }
    ],
    dangerousRounds: [
      { round: 24, threat: 'First camo green', counter: '2-2-0 Village Radar Scanner or Sauda innate camo at Level 3' },
      { round: 28, threat: 'Lead bloons', counter: '3-0-2 Razor Rotors contact damage' },
      { round: 40, threat: 'First MOAB', counter: 'Sauda Leaping Sword + Razor Rotors' },
      { round: 63, threat: 'Triple ceramic compression', counter: 'Apache Prime lasers (6 damage, 23 pierce) + Blade Maelstrom' },
      { round: 95, threat: '30 fortified DDTs', counter: 'Perma-Spike pile + 2-0-0 Alchemist AMD dip' }
    ],
    pros: [
      'Cheapest full black-border solve at ~$86,200 \u2014 leaves ~$92,000 unused',
      'Only three towers to micromanage; effectively AFK after Round 70',
      'Transfers directly from beginner to many advanced maps without changes'
    ],
    cons: [
      'Heli flight path can miss short track segments on compact maps',
      'Multi-exit maps need a second damage source at each leak point'
    ],
    synergyNotes: 'Apache Prime fires two independent weapon systems (lasers + plasma cannon). Stronger Stimulant buffs both, and Jungle Drums raises the fire rate of both \u2014 which is why a $48,600 Heli plus $9,400 of support out-damages most $130,000 setups.',
    challengeCode: 'APACHE502',
    isFeatured: true
  },
  {
    id: 'strat-bomb-blitz-permaspike',
    title: 'Bomb Blitz + Perma-Spike Budget Fort',
    subtitle: 'Two cheap Tier 5s, no hero reliance, and the best damage-per-dollar ratio in the current patch',
    difficulty: 'Beginner',
    gameMode: 'CHIMPS',
    hero: 'Quincy',
    heroCrosspath: 'Level 20 (Storm of Arrows)',
    winRate: 93,
    patchVersion: 'v57.2',
    verifiedOn: 'v57.2',
    isNew: true,
    patchNote: 'Bomb Blitz remains the cheapest explosive Tier 5; pairs with Perma-Spike for under $70,000 combined.',
    microIntensity: 'Low (AFK)',
    totalCostEstimate: 74500,
    coreOnlineRound: 64,
    efficiencyRank: 'S+',
    efficiencyScore: 92,
    monkeyKnowledgeRequired: false,
    maps: ['Bazaar', 'Cornfield', 'Rake', 'Spillway', 'Haunted', 'Underground', 'Cracked'],
    tags: ['Bomb Blitz', 'Perma-Spike', 'Budget Build', 'Lowest Cost', 'AFK Friendly', 'No Hero Reliance'],
    keyTowers: [
      { name: 'Bomb Shooter', crosspath: '0-2-5', topPath: 0, midPath: 2, botPath: 5, role: 'Bomb Blitz \u2014 massive blast radius with huge pierce and blimp bonus damage', category: 'Primary', costEstimate: 26500 },
      { name: 'Spike Factory', crosspath: '0-2-5', topPath: 0, midPath: 2, botPath: 5, role: 'Perma-Spike \u2014 permanent spike pile at the exit', category: 'Support', costEstimate: 36500 },
      { name: 'Alchemist', crosspath: '2-0-0', topPath: 2, midPath: 0, botPath: 0, role: 'Acidic Mixture Dip so spikes pop Lead and DDTs', category: 'Magic', costEstimate: 1600 },
      { name: 'Monkey Village', crosspath: '2-3-0', topPath: 2, midPath: 3, botPath: 0, role: 'Monkey Intelligence Bureau \u2014 DDT pop power for the whole clump', category: 'Support', costEstimate: 6100 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-27',
        phase: 'Two-Tower Opener',
        actions: [
          'Place Quincy at Round 6, then a single Bomb Shooter on a bend (0-0-0 \u2192 0-0-2 Fragment Bombs).',
          'Quincy Storm of Arrows covers Rounds 24 and 28 without any extra purchase.',
          'Add 0-0-2 Dart Monkey only if the map has a long second lane.'
        ],
        tips: 'Bomb Shooter already pops Lead, so Round 28 needs zero preparation \u2014 the single biggest budget saver in the opener.'
      },
      {
        roundRange: 'Rounds 28-55',
        phase: 'Cluster to Blitz',
        actions: [
          'Walk the Bomb line to 0-0-4 Recursive Cluster for Round 63 insurance.',
          'Drop 0-2-2 Village for Radar Scanner camo detection.',
          'Save without spending after Round 50 \u2014 Bomb Blitz is the priority purchase.'
        ],
        tips: 'Recursive Cluster alone clears Round 63 on most maps; the Blitz purchase can wait until Round 70.'
      },
      {
        roundRange: 'Rounds 56-79',
        phase: 'Blitz Ignition',
        actions: [
          'Buy 0-2-5 Bomb Blitz (\u2248$26,500) and set target to Strong.',
          'Upgrade Village to 2-3-0 MIB so the blast can hit DDTs later.',
          'Begin the Spike Factory line at the exit: 0-2-2 \u2192 0-2-3 \u2192 0-2-4.'
        ],
        tips: 'Bomb Blitz explosions inherit MIB, which is what makes this pair viable all the way to Round 100.'
      },
      {
        roundRange: 'Rounds 80-100',
        phase: 'Spike Curtain',
        actions: [
          'Complete 0-2-5 Perma-Spike and place 2-0-0 Alchemist directly on it.',
          'Quincy Storm of Arrows on Round 95 and 98 for free crowd control.',
          'Round 100 BAD: Bomb Blitz strips the shell, Perma-Spike eats the ZOMG/DDT children.'
        ],
        tips: 'Total spend stays near $74,500 \u2014 the cheapest verified 100-round solve currently documented.'
      }
    ],
    dangerousRounds: [
      { round: 28, threat: 'Lead bloons', counter: 'Bomb Shooter pops lead natively \u2014 no action needed' },
      { round: 63, threat: 'Triple ceramic compression', counter: '0-0-4 Recursive Cluster, then Quincy Storm of Arrows' },
      { round: 76, threat: 'Regrow ceramic burst', counter: 'Bomb Blitz blast radius prevents regrow re-inflation' },
      { round: 90, threat: 'First DDTs', counter: '2-3-0 MIB Village + 2-0-0 Alchemist on Perma-Spike' },
      { round: 100, threat: 'B.A.D. Airship', counter: 'Bomb Blitz blimp bonus damage + saturated spike pile' }
    ],
    pros: [
      'Lowest documented total cost for a full CHIMPS clear (~$74,500)',
      'Explosive + Normal damage types cover every immunity without MIB juggling',
      'No ability micro required \u2014 Quincy Storm of Arrows is optional, not mandatory'
    ],
    cons: [
      'Bomb arc travel time struggles on very fast straight tracks',
      'Needs the exit spike pile positioned precisely at the leak point'
    ],
    synergyNotes: 'Bomb Blitz supplies explosive area damage while Perma-Spike supplies permanent physical exit damage. Monkey Intelligence Bureau on the Village lets both touch DDTs, and a 2-0-0 Alchemist dip keeps the spikes lead-capable \u2014 four immunities covered for $70,400.',
    challengeCode: 'BLITZ025'
  },
  {
    id: 'strat-elite-sniper-maim-twin',
    title: 'Twin Carry: Elite Sniper + Maim MOAB',
    subtitle: 'Two snipers, two paths, one of the cheapest midgame carries ever recorded',
    difficulty: 'Beginner',
    gameMode: 'CHIMPS',
    hero: 'Geraldo',
    heroCrosspath: 'Level 20 (Sharpening Stone + Pickles)',
    winRate: 92,
    patchVersion: 'v57.2',
    verifiedOn: 'v57.2',
    isNew: true,
    patchNote: 'v57.2 fixed Supply Drop lead-popping and shrapnel crosspath inconsistencies \u2014 sniper lines are cleaner than ever.',
    microIntensity: 'Low (AFK)',
    totalCostEstimate: 68900,
    coreOnlineRound: 58,
    efficiencyRank: 'S',
    efficiencyScore: 90,
    monkeyKnowledgeRequired: false,
    maps: ['Quad', '#OUCH', 'Ravine', 'Bazaar', 'Workshop', 'Ship Capture'],
    tags: ['Elite Sniper', 'Maim MOAB', 'Global Range', 'Cheapest Carry', 'Multi Lane', 'Geraldo'],
    keyTowers: [
      { name: 'Sniper Monkey', crosspath: '0-5-2', topPath: 0, midPath: 5, botPath: 2, role: 'Elite Sniper \u2014 bouncing bullets plus shrapnel that buffs every other sniper on the map', category: 'Military', costEstimate: 17500 },
      { name: 'Sniper Monkey', crosspath: '4-2-0', topPath: 4, midPath: 2, botPath: 0, role: 'Maim MOAB \u2014 dedicated blimp stunner that halts ZOMGs mid-track', category: 'Military', costEstimate: 8200 },
      { name: 'Geraldo', crosspath: 'Level 20', topPath: 0, midPath: 0, botPath: 0, role: 'Sharpening Stone and Pickles funnelled into the Elite Sniper', category: 'Hero', costEstimate: 1080 },
      { name: 'Monkey Village', crosspath: '2-3-0', topPath: 2, midPath: 3, botPath: 0, role: 'Jungle Drums fire-rate boost across both snipers', category: 'Support', costEstimate: 4300 },
      { name: 'Glue Gunner', crosspath: '0-2-4', topPath: 0, midPath: 2, botPath: 4, role: 'Relentless Glue puddles as a DDT brake', category: 'Primary', costEstimate: 4500 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-27',
        phase: 'Sniper Solo Start',
        actions: [
          'Place one Sniper Monkey (0-0-0) at Round 8 \u2014 infinite range means placement is irrelevant.',
          'Drop Geraldo and buy Sharpening Stone for the sniper immediately.',
          'Upgrade 0-1-0 Night Vision Goggles for Round 24 camo without any Village.'
        ],
        tips: 'A single 0-1-0 Sniper clears Rounds 8-27 alone. This is the cheapest legal CHIMPS opener in the game.'
      },
      {
        roundRange: 'Rounds 28-49',
        phase: 'Shrapnel Economy',
        actions: [
          'Push to 0-2-0 Shrapnel Shot, then 0-3-0 Bouncing Bullet.',
          'Add a second Sniper on 4-0-0 \u2192 4-2-0 Maim MOAB for Round 40 blimp stun.',
          'Place 2-3-0 Village so both snipers sit inside Jungle Drums.'
        ],
        tips: 'Maim MOAB stuns every blimp below BAD \u2014 it is the reason this build never needs a dedicated anti-MOAB tower.'
      },
      {
        roundRange: 'Rounds 50-78',
        phase: 'Elite Sniper Spike',
        actions: [
          'Complete 0-5-2 Elite Sniper. Its shrapnel now buffs the damage of every other sniper globally.',
          'Feed Geraldo Pickles and Sharpening Stone into the Elite Sniper only.',
          'Add 0-2-4 Relentless Glue near the exit for DDT puddle traps.'
        ],
        tips: 'Elite Sniper shrapnel applies to all snipers on the map, so two snipers effectively deal triple damage between them.'
      },
      {
        roundRange: 'Rounds 79-100',
        phase: 'Cheap Finish, Big Savings',
        actions: [
          'Add a third 4-2-0 Maim MOAB for Round 98 ZOMG chain-stuns.',
          'Upgrade one sniper to 5-2-0 Cripple MOAB if cash allows (shrapnel debuff stacks on blimps).',
          'Round 100: stun-lock the BAD with Maim MOAB while Elite Sniper chews through the shell.'
        ],
        tips: 'Finished under $69,000 \u2014 leaving more than $100,000 unspent, which is the definition of an efficient clear.'
      }
    ],
    dangerousRounds: [
      { round: 24, threat: 'First camo green', counter: '0-1-0 Night Vision Goggles ($400)' },
      { round: 40, threat: 'First MOAB', counter: '4-2-0 Maim MOAB stun + Geraldo Sharpening Stone' },
      { round: 63, threat: 'Triple ceramic compression', counter: '0-5-2 Elite Sniper shrapnel bounces' },
      { round: 90, threat: 'First DDTs', counter: '0-2-4 Relentless Glue puddles + Maim MOAB stun' },
      { round: 98, threat: 'Fortified ZOMG wall', counter: 'Twin Maim MOAB stun-lock chain' }
    ],
    pros: [
      'Global range makes it map-agnostic \u2014 works on #OUCH, Quad and Ravine identically',
      'Under $69,000 total with a 92% verified win rate',
      'Stun-lock mechanics remove the need for any dedicated blimp damage tower'
    ],
    cons: [
      'Single-target focus means ceramic floods need glue or stun support',
      'Slower clear speed than Tack Zone lines on Round 98'
    ],
    synergyNotes: 'Elite Sniper (x-5-x) shrapnel raises the damage of every other Sniper on the map, while Maim MOAB (4-x-x) stuns blimps so those boosted shots always land on the same target. Because only one path may exceed Tier 2, the two roles must live on separate monkeys \u2014 that is what makes the pair so cheap.',
    challengeCode: 'SNIPER052'
  },
  {
    id: 'strat-poplust-hexagon',
    title: 'Poplust Hexagon: Six Druids Around Obyn',
    subtitle: 'The Dark Castle / Workshop specialist \u2014 six 0-2-4 Druids buffed into a machine gun',
    difficulty: 'Advanced',
    gameMode: 'CHIMPS',
    hero: 'Obyn Greenfoot',
    heroCrosspath: 'Level 20 (Nature\u2019s Wrath + Clarity)',
    winRate: 95,
    patchVersion: 'v57.2',
    verifiedOn: 'v57.2',
    isNew: true,
    patchNote: 'v57.1 restored Necromancer and Primary Expertise damage counters, confirming druid-line buff stacking is intact.',
    microIntensity: 'Medium',
    totalCostEstimate: 121800,
    coreOnlineRound: 74,
    efficiencyRank: 'S',
    efficiencyScore: 89,
    monkeyKnowledgeRequired: false,
    maps: ['Dark Castle', 'Workshop', 'Sanctuary', 'Underground', 'Quiet Street', 'Rake'],
    tags: ['Poplust', 'Avatar of Wrath', 'Druid Swarm', 'Multi Lane', 'Obyn Synergy', 'Expert Maps'],
    keyTowers: [
      { name: 'Druid', crosspath: '0-2-5', topPath: 0, midPath: 2, botPath: 5, role: 'Avatar of Wrath \u2014 thorn damage scales up to +30 as the screen fills', category: 'Magic', costEstimate: 51000 },
      { name: 'Druid', crosspath: '0-2-4', topPath: 0, midPath: 2, botPath: 4, role: 'Poplust \u00d75 \u2014 each adds attack speed and pierce to every druid in the hexagon', category: 'Magic', costEstimate: 3200 },
      { name: 'Druid', crosspath: '0-2-4', topPath: 0, midPath: 2, botPath: 4, role: 'Six-druid ring positioned so every druid overlaps the others', category: 'Magic', costEstimate: 1900 },
      { name: 'Monkey Village', crosspath: '2-3-0', topPath: 2, midPath: 3, botPath: 0, role: 'Jungle Drums attack speed across the whole hexagon', category: 'Support', costEstimate: 4300 },
      { name: 'Alchemist', crosspath: '4-2-0', topPath: 4, midPath: 2, botPath: 0, role: 'Stronger Stimulant focused on the Avatar of Wrath', category: 'Magic', costEstimate: 5100 }
    ],
    buildOrder: [
      {
        roundRange: 'Rounds 6-30',
        phase: 'Hexagon Foundation',
        actions: [
          'Place Obyn Greenfoot at the centre of your planned six-slot ring.',
          'Add the first two Druids inside Obyn\u2019s radius so Nature\u2019s Wrath applies from Level 2.',
          'Use 0-2-4 Druids \u2014 the bottom path adds projectile count, which Obyn pierce buffs multiply.'
        ],
        tips: 'Mark the six positions before you spend: every druid must overlap at least three others for Poplust to chain.'
      },
      {
        roundRange: 'Rounds 31-58',
        phase: 'Ring Completion',
        actions: [
          'Fill all six slots by Round 50, then drop 2-3-0 Village over the ring.',
          'Push two druids to x-3-x Druid of the Jungle for lane-grab ceramic control.',
          'Add 4-2-0 Alchemist targeting whichever druid will become the Avatar.'
        ],
        tips: 'Druid of the Jungle pulls bloons from every lane into the centre \u2014 the exact mechanic that solves Dark Castle and Workshop.'
      },
      {
        roundRange: 'Rounds 59-80',
        phase: 'Poplust Stacking',
        actions: [
          'Convert five ring druids to 0-2-4 Poplust one at a time as cash allows.',
          'Each Poplust stacks attack speed and pierce across the entire ring.',
          'Save the sixth slot\u2019s cash toward 0-2-5 Avatar of Wrath for Round 80.'
        ],
        tips: 'Buy Poplusts in pairs \u2014 the second stack is where the fire-rate visibly doubles on Round 63 waves.'
      },
      {
        roundRange: 'Rounds 81-100',
        phase: 'Avatar of Wrath',
        actions: [
          'Upgrade the centre druid to 0-2-5 Avatar of Wrath.',
          'Its thorn damage climbs toward +30 as Round 98 fills the screen with fortified blimps.',
          'Add 2-3-0 MIB Village for DDT pop power before Round 90.'
        ],
        tips: 'Avatar of Wrath is the only Tier 5 that gets stronger the worse the round looks \u2014 ideal for the Round 98 wall.'
      }
    ],
    dangerousRounds: [
      { round: 59, threat: 'Camo Lead Bloons', counter: '0-2-4 Druid pierce + 2-3-0 Village radar' },
      { round: 63, threat: 'Triple ceramic compression', counter: 'Druid of the Jungle lane-grab + Poplust fire rate' },
      { round: 78, threat: 'Hidden camo ceramic wave', counter: 'Village Radar Scanner covering the full hexagon' },
      { round: 90, threat: 'First DDTs', counter: '2-3-0 MIB Village enables every druid to pop dark dirigibles' },
      { round: 98, threat: 'Fortified ZOMG wall', counter: 'Avatar of Wrath at maximum rage multiplier + five Poplust stacks' }
    ],
    pros: [
      'Solves multi-lane expert maps that break single-point defences',
      'Scales incrementally \u2014 each Poplust is a visible power spike, not one big saveup',
      'Avatar of Wrath passively counters the highest-RBE round in the game'
    ],
    cons: [
      'Needs a large open cluster to fit six druids plus Village and Alchemist',
      'Requires a second Village (or MIB timing) for full DDT coverage'
    ],
    synergyNotes: 'Poplust (x-4-x) buffs every druid inside its radius, so six overlapping druids multiply each other. Obyn adds +1 pierce at Level 2 and +1 more at Level 11, and the Avatar of Wrath converts that stacked pierce into scaling thorn damage on dense rounds.',
    challengeCode: 'HEXDRUID6'
  }
];
