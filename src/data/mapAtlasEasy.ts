export type MapDifficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export type TrackGlyph =
  | 'straight'
  | 'loop'
  | 'spiral'
  | 'lagoon'
  | 'isle'
  | 'twin'
  | 'split'
  | 'cross'
  | 'converge'
  | 'parallel'
  | 'spider'
  | 'ridge';

export interface MapSetupPiece {
  /** Tower name */
  t: string;
  /** Crosspath + upgrade name */
  p: string;
}

export interface MapBlueprint {
  name: string;
  difficulty: MapDifficulty;
  /** Version the map was introduced in */
  since: string;
  entrances: number;
  exits: number;
  junctions: number;
  water: boolean;
  /** Average RBS on Hard difficulty */
  rbs: number;
  glyph: TrackGlyph;
  hero: string;
  setup: MapSetupPiece[];
  /** Approximate total spend to finish CHIMPS on Medium pricing */
  cost: number;
  /** Round the core damage engine is online */
  core: number;
  eff: 'S+' | 'S' | 'A' | 'B';
  why: string;
  pitfall: string;
  /** Optional link into the Strategy Vault */
  link?: string;
  trueExpert?: boolean;
  newMap?: boolean;
}

export const BEGINNER_MAPS: MapBlueprint[] = [
  {
    name: 'Monkey Meadow', since: 'v1.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: false, rbs: 29.2, glyph: 'loop',
    hero: 'Sauda',
    setup: [
      { t: 'Heli Pilot', p: '5-0-2 Apache Prime' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
      { t: 'Spike Factory', p: '0-2-5 Perma-Spike' },
    ],
    cost: 86200, core: 68, eff: 'S+',
    why: 'One tight meadow loop sits entirely inside a single Apache Prime patrol circle.',
    pitfall: 'Placing the Heli runway off-centre — half the loop then falls outside its flight path.',
    link: 'strat-apache-prime-lanelock',
  },
  {
    name: 'Tree Stump', since: 'v1.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: false, rbs: 38.9, glyph: 'spiral',
    hero: 'Obyn Greenfoot',
    setup: [
      { t: 'Druid', p: '1-5-0 Spirit of the Forest' },
      { t: 'Druid', p: '0-2-4 Poplust ×3' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 94500, core: 70, eff: 'S',
    why: 'The stump spiral keeps bloons inside the vine radius for the entire lap.',
    pitfall: 'Building vines before the Poplust ring — attack speed is what makes the spiral lethal.',
    link: 'strat-spirit-forest-druids',
  },
  {
    name: 'Town Center', since: 'v1.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 30.5, glyph: 'straight',
    hero: 'Psi',
    setup: [
      { t: 'Spike Factory', p: '0-2-5 Perma-Spike' },
      { t: 'Alchemist', p: '2-0-0 AMD dip' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Glue Gunner', p: '0-2-4 Relentless Glue' },
    ],
    cost: 61000, core: 66, eff: 'S+',
    why: 'Buildings block line of sight everywhere — Psi ignores terrain completely.',
    pitfall: 'Buying sight-based towers that cannot see past the rooftops.',
    link: 'strat-perma-spike-stall',
  },
  {
    name: 'In The Loop', since: 'v1.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 39.1, glyph: 'loop',
    hero: 'Gwendolin',
    setup: [
      { t: 'Tack Shooter', p: '2-0-5 The Tack Zone' },
      { t: 'Ice Monkey', p: '5-0-2 Super Brittle' },
      { t: 'Monkey Village', p: '2-5-0 Primary Mentoring' },
      { t: 'Engineer', p: '0-4-0 Overclock' },
    ],
    cost: 108000, core: 74, eff: 'S+',
    why: 'A perfect inner loop: one Tack Zone covers 100% of the track with zero dead space.',
    pitfall: 'Buying Super Brittle before the Tack Zone — the +4 debuff is worthless without a rapid-fire carrier.',
    link: 'strat-tack-zone-super-brittle',
  },
  {
    name: 'Cubism', since: 'v1.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 43.3, glyph: 'loop',
    hero: 'Gwendolin',
    setup: [
      { t: 'Tack Shooter', p: '2-0-5 The Tack Zone' },
      { t: 'Ice Monkey', p: '5-0-2 Super Brittle' },
      { t: 'Glue Gunner', p: '2-5-0 Glue Storm' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 118000, core: 76, eff: 'S+',
    why: 'High RBS for a beginner map — the debuff stack (+4 brittle, +2 glue, +1 stim) multiplies every tack.',
    pitfall: 'Ignoring Round 63; Cubism sends ceramics earlier than most beginner tracks.',
    link: 'strat-tack-zone-super-brittle',
  },
  {
    name: 'Four Circles', since: 'v1.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 36.4, glyph: 'loop',
    hero: 'Gwendolin',
    setup: [
      { t: 'Tack Shooter', p: '2-0-5 The Tack Zone' },
      { t: 'Glue Gunner', p: '2-5-0 Glue Storm' },
      { t: 'Ice Monkey', p: '5-0-2 Super Brittle' },
      { t: 'Monkey Village', p: '2-5-0 Primary Mentoring' },
    ],
    cost: 112000, core: 75, eff: 'S+',
    why: 'The centre Tack Zone overlaps all four circles — one tower, four laps of coverage.',
    pitfall: 'Placing the Tack Zone inside one circle instead of the shared middle.',
    link: 'strat-tack-zone-super-brittle',
  },
  {
    name: 'Hedge', since: 'v1.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: false, rbs: 38.5, glyph: 'ridge',
    hero: 'Psi',
    setup: [
      { t: 'Spike Factory', p: '0-2-5 Perma-Spike' },
      { t: 'Alchemist', p: '2-0-0 AMD dip' },
      { t: 'Sniper Monkey', p: '0-5-2 Elite Sniper' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 72000, core: 68, eff: 'S',
    why: 'Hedges block sight lines everywhere; Psi and global-range Snipers ignore them entirely.',
    pitfall: 'Wasting cash on short-range towers that only see one hedge corridor.',
  },
  {
    name: 'End Of The Road', since: 'v1.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 26.5, glyph: 'straight',
    hero: 'Sauda',
    setup: [
      { t: 'Heli Pilot', p: '5-0-2 Apache Prime' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
      { t: 'Spike Factory', p: '0-2-5 Perma-Spike' },
    ],
    cost: 86200, core: 66, eff: 'S+',
    why: 'Lowest RBS on the beginner list and one long lane — the cheapest black border in the game.',
    pitfall: 'Over-spending early; this map never pressures your economy.',
    link: 'strat-apache-prime-lanelock',
  },
  {
    name: 'Logs', since: 'v1.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 53.1, glyph: 'ridge',
    hero: 'Sauda',
    setup: [
      { t: 'Heli Pilot', p: '5-0-2 Apache Prime' },
      { t: 'Alchemist', p: '4-2-0' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Spike Factory', p: '0-2-5 Perma-Spike' },
    ],
    cost: 88000, core: 70, eff: 'S+',
    why: 'Highest beginner RBS (53.1) but a single serpentine lane the Heli patrols end to end.',
    pitfall: 'Underestimating Round 63 — Logs packs more ceramics than any other beginner map.',
    link: 'strat-apache-prime-lanelock',
  },
  {
    name: 'Frozen Over', since: 'v5.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 35.5, glyph: 'loop',
    hero: 'Etienne',
    setup: [
      { t: 'Skywarden', p: '2-0-5 Winter\u2019s Mercy' },
      { t: 'Skywarden', p: '0-2-3 Coldchain' },
      { t: 'Ice Monkey', p: '2-0-4 Embrittlement' },
      { t: 'Spike Factory', p: '0-2-5 Perma-Spike' },
    ],
    cost: 79000, core: 64, eff: 'S+', newMap: false,
    why: 'An ice map feeding an ice tower: frozen bloons take bonus Icesplosion damage for free.',
    pitfall: 'Relying on freeze alone — White bloons are immune, so keep the spike pile as backup.',
    link: 'strat-winters-mercy-coldchain',
  },
  {
    name: 'Alpine Run', since: 'v7.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: false, rbs: 32.2, glyph: 'ridge',
    hero: 'Sauda',
    setup: [
      { t: 'Heli Pilot', p: '5-0-2 Apache Prime' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
      { t: 'Glue Gunner', p: '0-2-4 Relentless Glue' },
    ],
    cost: 84000, core: 68, eff: 'S+',
    why: 'No water, but long switchbacks suit an airborne tower that flies over every ridge.',
    pitfall: 'Water-based setups are impossible here — do not draft Buccaneer or Sub lines.',
    link: 'strat-apache-prime-lanelock',
  },
  {
    name: 'Park Path', since: 'v11.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 35.4, glyph: 'loop',
    hero: 'Gwendolin',
    setup: [
      { t: 'Tack Shooter', p: '2-0-5 The Tack Zone' },
      { t: 'Ice Monkey', p: '5-0-2 Super Brittle' },
      { t: 'Monkey Village', p: '2-5-0 Primary Mentoring' },
      { t: 'Engineer', p: '0-4-0 Overclock' },
    ],
    cost: 106000, core: 74, eff: 'S+',
    why: 'Concentric park loops put the whole track inside one Tack Zone radius.',
    pitfall: 'Skipping Primary Mentoring — the free tier-1 upgrades are what fund the Overclock.',
    link: 'strat-tack-zone-super-brittle',
  },
  {
    name: 'Carved', since: 'v13.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 39.3, glyph: 'spiral',
    hero: 'Obyn Greenfoot',
    setup: [
      { t: 'Druid', p: '1-5-0 Spirit of the Forest' },
      { t: 'Druid', p: '0-2-4 Poplust ×4' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 99000, core: 72, eff: 'S',
    why: 'The carved spiral wraps the track through the vine field four separate times.',
    pitfall: 'Placing the Spirit outside the spiral centre and losing three of the four passes.',
    link: 'strat-spirit-forest-druids',
  },
  {
    name: 'Winter Park', since: 'v14.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 36.1, glyph: 'loop',
    hero: 'Gwendolin',
    setup: [
      { t: 'Tack Shooter', p: '2-0-5 The Tack Zone' },
      { t: 'Ice Monkey', p: '5-0-2 Super Brittle' },
      { t: 'Glue Gunner', p: '2-5-0 Glue Storm' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 116000, core: 75, eff: 'S+',
    why: 'Widely rated the easiest beginner map: many loops, huge placement space, perfect for Tack.',
    pitfall: 'None serious — this is the recommended first CHIMPS black border.',
    link: 'strat-tack-zone-super-brittle',
  },
  {
    name: 'Candy Falls', since: 'v17.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 42.4, glyph: 'lagoon',
    hero: 'Admiral Brickell',
    setup: [
      { t: 'Monkey Sub', p: '2-0-5 Sub Commander' },
      { t: 'Monkey Sub', p: '2-0-4 Armor Piercing Darts ×4' },
      { t: 'Monkey Sub', p: '2-5-0 Pre-Emptive Strike' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 104000, core: 74, eff: 'S',
    why: 'The waterfall lagoon hosts a Sub Commander whose aura doubles every AP Dart sub.',
    pitfall: 'Spreading subs outside the Commander radius — the +4 pierce/double damage buff is local.',
    link: 'strat-sub-commander-armada',
  },
  {
    name: 'Lotus Island', since: 'v19.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 32.3, glyph: 'isle',
    hero: 'Admiral Brickell',
    setup: [
      { t: 'Monkey Sub', p: '2-0-5 Sub Commander' },
      { t: 'Monkey Sub', p: '2-0-4 Armor Piercing Darts ×5' },
      { t: 'Monkey Village', p: '2-0-3' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 98000, core: 72, eff: 'S',
    why: 'Ring-shaped water lets six subs share one Commander aura around the island.',
    pitfall: 'The centre island blocks sight — put the Village on the water edge, not inland.',
    link: 'strat-sub-commander-armada',
  },
  {
    name: 'Skates', since: 'v22.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 37.9, glyph: 'loop',
    hero: 'Gwendolin',
    setup: [
      { t: 'Tack Shooter', p: '2-0-5 The Tack Zone' },
      { t: 'Ice Monkey', p: '5-0-2 Super Brittle' },
      { t: 'Monkey Village', p: '2-5-0 Primary Mentoring' },
      { t: 'Engineer', p: '0-4-0 Overclock' },
    ],
    cost: 108000, core: 74, eff: 'S+',
    why: 'The rink is one continuous loop with a fat centre island for the whole Tack cluster.',
    pitfall: 'Placing the cluster on the outer rim where it only covers half the lap.',
    link: 'strat-tack-zone-super-brittle',
  },
  {
    name: 'Resort', since: 'v25.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 47.8, glyph: 'lagoon',
    hero: 'Sauda',
    setup: [
      { t: 'Heli Pilot', p: '5-0-2 Apache Prime' },
      { t: 'Alchemist', p: '4-2-0' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Spike Factory', p: '0-2-5 Perma-Spike' },
    ],
    cost: 89000, core: 70, eff: 'S+',
    why: 'Very high beginner RBS (47.8) but one big resort loop — the Heli never leaves the track.',
    pitfall: 'Ceramic density at Round 63 is beginner-map worst; keep Blade Maelstrom in reserve.',
    link: 'strat-apache-prime-lanelock',
  },
  {
    name: 'The Cabin', since: 'v28.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 30.8, glyph: 'lagoon',
    hero: 'Geraldo',
    setup: [
      { t: 'Wizard Monkey', p: '0-2-5 Prince of Darkness' },
      { t: 'Wizard Monkey', p: '0-2-4 Necromancer' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 92000, core: 70, eff: 'S',
    why: 'The cabin chokepoint funnels every bloon past one graveyard — undead bodies do the work.',
    pitfall: 'Letting the graveyard empty: PoD needs a steady trickle of pops to field zombie BFBs.',
    link: 'strat-prince-inferno-ring',
  },
  {
    name: 'Scrapyard', since: 'v31.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: false, rbs: 53.4, glyph: 'straight',
    hero: 'Geraldo',
    setup: [
      { t: 'Sniper Monkey', p: '0-5-2 Elite Sniper' },
      { t: 'Sniper Monkey', p: '4-2-0 Maim MOAB' },
      { t: 'Bomb Shooter', p: '0-2-5 Bomb Blitz' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 76000, core: 62, eff: 'S+',
    why: 'Highest beginner RBS but a single straight — snipers have infinite range and junk piles block nothing.',
    pitfall: 'No water on this map: skip every Buccaneer, Sub and Mermonkey plan.',
    link: 'strat-elite-sniper-maim-twin',
  },
  {
    name: 'Middle of the Road', since: 'v35.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 40.2, glyph: 'straight',
    hero: 'Quincy',
    setup: [
      { t: 'Sniper Monkey', p: '0-5-2 Elite Sniper' },
      { t: 'Sniper Monkey', p: '4-2-0 Maim MOAB' },
      { t: 'Spike Factory', p: '0-2-5 Perma-Spike' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 71000, core: 60, eff: 'S+',
    why: 'One road straight down the middle — global-range snipers cover 100% of it from any tile.',
    pitfall: 'Buying local-range towers on the far edges where the road never passes.',
    link: 'strat-elite-sniper-maim-twin',
  },
  {
    name: 'One Two Tree', since: 'v34.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 38.8, glyph: 'spiral',
    hero: 'Obyn Greenfoot',
    setup: [
      { t: 'Druid', p: '0-2-5 Avatar of Wrath' },
      { t: 'Druid', p: '0-2-4 Poplust ×3' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 96000, core: 72, eff: 'S',
    why: 'The tree spiral keeps bloons dense, and Avatar of Wrath scales with bloon count on screen.',
    pitfall: 'Spending on a Tier 5 before the three Poplusts are stacked.',
    link: 'strat-poplust-hexagon',
  },
  {
    name: 'Tinkerton', since: 'v43.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 39.0, glyph: 'loop',
    hero: 'Gwendolin',
    setup: [
      { t: 'Tack Shooter', p: '2-0-5 The Tack Zone' },
      { t: 'Ice Monkey', p: '5-0-2 Super Brittle' },
      { t: 'Glue Gunner', p: '2-5-0 Glue Storm' },
      { t: 'Engineer', p: '0-4-0 Overclock' },
    ],
    cost: 114000, core: 75, eff: 'S+',
    why: 'Huge open factory floor fits the entire debuff triangle around one central loop.',
    pitfall: 'Overclocking the wrong tower — it belongs on the Tack Zone, not the Ice Monkey.',
    link: 'strat-tack-zone-super-brittle',
  },
  {
    name: 'Spa Pits', since: 'v48.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 48.7, glyph: 'lagoon',
    hero: 'Admiral Brickell',
    setup: [
      { t: 'Mermonkey', p: '0-5-2 Popseidon' },
      { t: 'Mermonkey', p: '0-0-2 Echosense Network ×4' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 102000, core: 73, eff: 'S+',
    why: 'The spa pits are all water: one Ice Jet ability freezes every bloon in all of them at once.',
    pitfall: 'Echosense Network stacks range only on other Echosense merms — keep them clustered.',
    link: 'strat-popseidon-merspam',
  },
  {
    name: 'Three Mines \u2019Round', since: 'v51.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 1, water: true, rbs: 41.7, glyph: 'split',
    hero: 'Sauda',
    setup: [
      { t: 'Heli Pilot', p: '5-0-2 Apache Prime' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
      { t: 'Spike Factory', p: '0-2-5 Perma-Spike' },
    ],
    cost: 87000, core: 69, eff: 'S',
    why: 'The single junction splits the path, but an airborne Heli covers both branches at once.',
    pitfall: 'Ground towers placed on one branch leave the other completely undefended.',
    link: 'strat-apache-prime-lanelock',
  },
  {
    name: 'Skull Tweak', since: 'v55.0', difficulty: 'Beginner', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 34.9, glyph: 'loop', newMap: true,
    hero: 'Obyn Greenfoot',
    setup: [
      { t: 'Skywarden', p: '1-5-0 Stormwrath Archon' },
      { t: 'Skywarden', p: '0-3-0 Galvanic Conduit' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 96000, core: 70, eff: 'S+',
    why: 'A looping beginner map is the ideal debut for conduit lightning — arrows expire all over the track.',
    pitfall: 'Thunder Charge is only 9 seconds post-v57; save it for the ceramic wave, not the round start.',
    link: 'strat-skywarden-stormwrath',
  },
];

export const INTERMEDIATE_MAPS: MapBlueprint[] = [
  {
    name: 'Downstream', since: 'v4.0', difficulty: 'Intermediate', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 26.4, glyph: 'lagoon',
    hero: 'Admiral Brickell',
    setup: [
      { t: 'Mermonkey', p: '0-5-2 Popseidon' },
      { t: 'Mermonkey', p: '0-0-2 Echosense Network ×3' },
      { t: 'Monkey Buccaneer', p: '5-0-2 Carrier Flagship' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 118000, core: 76, eff: 'S',
    why: 'The whole river is water: Popseidon\u2019s rogue wave hits the entire track in one ability.',
    pitfall: 'Carrier Flagship needs deck space — place it where the river widens, not in the narrows.',
    link: 'strat-popseidon-merspam',
  },
  {
    name: 'Firing Range', since: 'v2.0', difficulty: 'Intermediate', entrances: 2, exits: 2, junctions: 0, water: true, rbs: 29.8, glyph: 'twin',
    hero: 'Etienne',
    setup: [
      { t: 'Monkey Ace', p: '5-0-2 Sky Shredder' },
      { t: 'Monkey Ace', p: '2-0-5 Flying Fortress' },
      { t: 'Alchemist', p: '4-2-0' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 142000, core: 80, eff: 'A',
    why: 'Rated the tightest intermediate for placement — aircraft ignore the lack of buildable land.',
    pitfall: 'Two lanes, two exits: a single ground tower cannot cover both, so fly the coverage.',
    link: 'strat-sky-shredder-flagship',
  },
  {
    name: 'Haunted', since: 'v5.0', difficulty: 'Intermediate', entrances: 2, exits: 2, junctions: 0, water: true, rbs: 19.7, glyph: 'twin',
    hero: 'Geraldo',
    setup: [
      { t: 'Wizard Monkey', p: '0-2-5 Prince of Darkness' },
      { t: 'Tack Shooter', p: '5-0-2 Inferno Ring' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 121000, core: 78, eff: 'S',
    why: 'Low RBS but two lanes; PoD undead roam both while the Inferno Ring meteor is global-range.',
    pitfall: 'The mansion blocks sight — meteors fly over it, ground towers cannot shoot through it.',
    link: 'strat-prince-inferno-ring',
  },
  {
    name: 'Moon Landing', since: 'v6.0', difficulty: 'Intermediate', entrances: 1, exits: 1, junctions: 0, water: false, rbs: 35.5, glyph: 'spiral',
    hero: 'Psi',
    setup: [
      { t: 'Spike Factory', p: '0-2-5 Perma-Spike' },
      { t: 'Bomb Shooter', p: '0-2-5 Bomb Blitz' },
      { t: 'Alchemist', p: '2-0-0 AMD dip' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 88000, core: 70, eff: 'S',
    why: 'No water and craters block placement — Psi\u2019s terrain-ignoring attacks solve the map alone.',
    pitfall: 'Do not draft a water setup; craters are decorative, not buildable.',
    link: 'strat-perma-spike-stall',
  },
  {
    name: 'KartsNDarts', since: 'v8.0', difficulty: 'Intermediate', entrances: 1, exits: 1, junctions: 0, water: false, rbs: 32.7, glyph: 'loop',
    hero: 'Gwendolin',
    setup: [
      { t: 'Tack Shooter', p: '2-0-5 The Tack Zone' },
      { t: 'Ice Monkey', p: '5-0-2 Super Brittle' },
      { t: 'Monkey Village', p: '2-5-0 Primary Mentoring' },
      { t: 'Engineer', p: '0-4-0 Overclock' },
    ],
    cost: 108000, core: 74, eff: 'S+',
    why: 'The kart circuit is one long loop with a wide infield — textbook Tack Zone geometry.',
    pitfall: 'No water on this map: Sub and Buccaneer lines are dead picks.',
    link: 'strat-tack-zone-super-brittle',
  },
  {
    name: 'Spring Spring', since: 'v10.0', difficulty: 'Intermediate', entrances: 2, exits: 2, junctions: 0, water: true, rbs: 24.8, glyph: 'twin',
    hero: 'Admiral Brickell',
    setup: [
      { t: 'Mermonkey', p: '0-5-2 Popseidon' },
      { t: 'Monkey Sub', p: '2-0-5 Sub Commander' },
      { t: 'Monkey Sub', p: '2-0-4 Armor Piercing Darts ×4' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 124000, core: 78, eff: 'S',
    why: 'Both springs are deep water — the freeze ability and the Sub aura cover both lanes at once.',
    pitfall: 'Subs placed in one spring do not buff subs in the other; Commander radius is local.',
    link: 'strat-popseidon-merspam',
  },
  {
    name: 'Adora\u2019s Temple', since: 'v14.0', difficulty: 'Intermediate', entrances: 4, exits: 4, junctions: 0, water: true, rbs: 29.0, glyph: 'parallel',
    hero: 'Adora',
    setup: [
      { t: 'Super Monkey', p: '4-2-0 Sun Temple' },
      { t: 'Wizard Monkey', p: '0-2-5 Prince of Darkness' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 156000, core: 82, eff: 'A',
    why: 'Four lanes converge on the temple — Adora\u2019s Ball of Light and a Sun Temple cover all four.',
    pitfall: 'Sun Temple sacrifices need planning in CHIMPS: no selling, so sacrifice cheap tiers only.',
  },
  {
    name: 'Bazaar', since: 'v18.0', difficulty: 'Intermediate', entrances: 2, exits: 2, junctions: 0, water: true, rbs: 20.4, glyph: 'twin',
    hero: 'Psi',
    setup: [
      { t: 'Spike Factory', p: '0-2-5 Perma-Spike' },
      { t: 'Tack Shooter', p: '5-0-2 Inferno Ring' },
      { t: 'Alchemist', p: '2-0-0 AMD dip' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 104000, core: 74, eff: 'S',
    why: 'Market stalls block sight on both lanes; Psi plus a global-range meteor ignore every obstacle.',
    pitfall: 'Two exits mean one spike pile is not enough — mirror it or use Carpet of Spikes.',
    link: 'strat-perma-spike-stall',
  },
  {
    name: 'Cracked', since: 'v1.0', difficulty: 'Intermediate', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 33.2, glyph: 'loop',
    hero: 'Gwendolin',
    setup: [
      { t: 'Tack Shooter', p: '2-0-5 The Tack Zone' },
      { t: 'Ice Monkey', p: '5-0-2 Super Brittle' },
      { t: 'Glue Gunner', p: '2-5-0 Glue Storm' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 118000, core: 75, eff: 'S+',
    why: 'Community favourite: many sharp turns make it one of the easiest intermediates to black border.',
    pitfall: 'The cracked ground has few big buildable plates — reserve the centre for the Tack cluster.',
    link: 'strat-tack-zone-super-brittle',
  },
  {
    name: 'Streambed', since: 'v1.0', difficulty: 'Intermediate', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 27.1, glyph: 'ridge',
    hero: 'Admiral Brickell',
    setup: [
      { t: 'Monkey Sub', p: '2-0-5 Sub Commander' },
      { t: 'Monkey Sub', p: '2-0-4 Armor Piercing Darts ×5' },
      { t: 'Monkey Sub', p: '2-5-0 Pre-Emptive Strike' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 116000, core: 76, eff: 'S+',
    why: 'The stream is one continuous water lane — six subs share a single Commander aura.',
    pitfall: 'Pre-Emptive Strike fires on spawn: keep it in the same cluster so DDTs die before turning.',
    link: 'strat-sub-commander-armada',
  },
  {
    name: 'Chutes', since: 'v1.0', difficulty: 'Intermediate', entrances: 2, exits: 2, junctions: 0, water: true, rbs: 16.2, glyph: 'twin',
    hero: 'Admiral Brickell',
    setup: [
      { t: 'Mermonkey', p: '0-5-2 Popseidon' },
      { t: 'Mermonkey', p: '0-0-2 Echosense Network ×4' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 108000, core: 74, eff: 'S',
    why: 'Very low RBS (16.2) and both chutes are water — the cheapest Popseidon map in the game.',
    pitfall: 'Waterfalls push bloons fast; place merms upstream so Ice Jet lands before the exit.',
    link: 'strat-popseidon-merspam',
  },
  {
    name: 'Rake', since: 'v1.0', difficulty: 'Intermediate', entrances: 2, exits: 2, junctions: 0, water: true, rbs: 16.0, glyph: 'parallel',
    hero: 'Gwendolin',
    setup: [
      { t: 'Tack Shooter', p: '2-0-5 The Tack Zone' },
      { t: 'Ice Monkey', p: '5-0-2 Super Brittle' },
      { t: 'Glue Gunner', p: '0-2-4 Relentless Glue' },
      { t: 'Monkey Village', p: '2-5-0 Primary Mentoring' },
    ],
    cost: 112000, core: 75, eff: 'S',
    why: 'Lowest intermediate RBS with tidy parallel rows that a central Tack Zone rakes across.',
    pitfall: 'Two exits: put Relentless Glue on the lane the Tack Zone cannot reach.',
    link: 'strat-tack-zone-super-brittle',
  },
  {
    name: 'Spice Islands', since: 'v1.0', difficulty: 'Intermediate', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 23.8, glyph: 'isle',
    hero: 'Admiral Brickell',
    setup: [
      { t: 'Monkey Sub', p: '2-0-5 Sub Commander' },
      { t: 'Monkey Sub', p: '2-0-4 Armor Piercing Darts ×5' },
      { t: 'Mermonkey', p: '5-0-2 Lord of the Abyss' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 122000, core: 77, eff: 'S',
    why: 'Open ocean around the islands: Sub Commander aura plus a land-anchor for extra water towers.',
    pitfall: 'Islands block sub placement — use Lord of the Abyss to put water towers on the shore.',
    link: 'strat-sub-commander-armada',
  },
  {
    name: 'Encrypted', since: 'v21.0', difficulty: 'Intermediate', entrances: 1, exits: 2, junctions: 1, water: true, rbs: 28.8, glyph: 'split',
    hero: 'Psi',
    setup: [
      { t: 'Spike Factory', p: '2-5-0 Carpet of Spikes' },
      { t: 'Glue Gunner', p: '0-2-4 Relentless Glue' },
      { t: 'Alchemist', p: '2-0-0 AMD dip' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 99000, core: 72, eff: 'S',
    why: 'One entrance splitting to two exits: Carpet of Spikes blankets both branches automatically.',
    pitfall: 'A single Perma-Spike pile only guards one exit — the split will beat you.',
    link: 'strat-corvus-soul-harvest',
  },
  {
    name: 'Balance', since: 'v24.0', difficulty: 'Intermediate', entrances: 2, exits: 2, junctions: 8, water: true, rbs: 24.5, glyph: 'cross',
    hero: 'Obyn Greenfoot',
    setup: [
      { t: 'Druid', p: '0-2-5 Avatar of Wrath' },
      { t: 'Druid', p: '0-2-4 Poplust ×5' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 128000, core: 78, eff: 'S+',
    why: 'Eight junctions mean bloons pass the same centre repeatedly — Avatar of Wrath stacks to maximum.',
    pitfall: 'Junctions randomise routing; do not rely on a single-lane choke for your damage.',
    link: 'strat-poplust-hexagon',
  },
  {
    name: 'Bloonarius Prime', since: 'v27.0', difficulty: 'Intermediate', entrances: 1, exits: 2, junctions: 2, water: true, rbs: 19.4, glyph: 'split',
    hero: 'Admiral Brickell',
    setup: [
      { t: 'Monkey Sub', p: '2-5-0 Pre-Emptive Strike' },
      { t: 'Monkey Sub', p: '2-0-5 Sub Commander' },
      { t: 'Monkey Sub', p: '2-0-4 Armor Piercing Darts ×4' },
      { t: 'Monkey Village', p: '2-0-3' },
    ],
    cost: 118000, core: 76, eff: 'S',
    why: 'Two junctions and two exits — Pre-Emptive Strike kills MOABs at spawn before they can split.',
    pitfall: 'If a blimp passes the junction it doubles your problem; prioritise spawn-side damage.',
    link: 'strat-sub-commander-armada',
  },
  {
    name: 'Quiet Street', since: 'v29.0', difficulty: 'Intermediate', entrances: 3, exits: 3, junctions: 0, water: true, rbs: 24.8, glyph: 'parallel',
    hero: 'Etienne',
    setup: [
      { t: 'Monkey Ace', p: '5-0-2 Sky Shredder' },
      { t: 'Skywarden', p: '1-5-0 Stormwrath Archon' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 138000, core: 79, eff: 'S',
    why: 'Three parallel streets — aircraft plus a conduit web are the only cheap way to cover all three.',
    pitfall: 'Ground clusters on one street leave two lanes wide open at Round 63.',
    link: 'strat-sky-shredder-flagship',
  },
  {
    name: 'Quarry', since: 'v32.0', difficulty: 'Intermediate', entrances: 2, exits: 1, junctions: 1, water: true, rbs: 34.4, glyph: 'converge',
    hero: 'Psi',
    setup: [
      { t: 'Spike Factory', p: '0-2-5 Perma-Spike' },
      { t: 'Bomb Shooter', p: '0-2-5 Bomb Blitz' },
      { t: 'Alchemist', p: '2-0-0 AMD dip' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 92000, core: 70, eff: 'S+',
    why: 'Two entrances merging into one exit — the entire map funnels into a single spike pile.',
    pitfall: 'High RBS (34.4) for an intermediate: do not delay Perma-Spike past Round 78.',
    link: 'strat-bomb-blitz-permaspike',
  },
  {
    name: 'Covered Garden', since: 'v33.0', difficulty: 'Intermediate', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 19.8, glyph: 'spiral',
    hero: 'Obyn Greenfoot',
    setup: [
      { t: 'Druid', p: '1-5-0 Spirit of the Forest' },
      { t: 'Druid', p: '0-2-4 Poplust ×4' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 101000, core: 73, eff: 'S+',
    why: 'The greenhouse spiral keeps bloons inside the vine field for four passes — extremely low RBS.',
    pitfall: 'The glass roof blocks some placement tiles; map the buildable area before Round 40.',
    link: 'strat-spirit-forest-druids',
  },
  {
    name: 'Polyphemus', since: 'v36.0', difficulty: 'Intermediate', entrances: 2, exits: 2, junctions: 0, water: true, rbs: 26.9, glyph: 'twin',
    hero: 'Sauda',
    setup: [
      { t: 'Heli Pilot', p: '5-0-2 Apache Prime' },
      { t: 'Spike Factory', p: '0-2-5 Perma-Spike' },
      { t: 'Alchemist', p: '4-2-0' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 124000, core: 78, eff: 'S',
    why: 'The giant eye is one big loop — a single Apache Prime patrol covers both entrance lanes.',
    pitfall: 'Two exits: keep the Perma-Spike pile on whichever lane the Heli is not patrolling.',
    link: 'strat-apache-prime-lanelock',
  },
  {
    name: 'Water Park', since: 'v38.0', difficulty: 'Intermediate', entrances: 2, exits: 2, junctions: 0, water: true, rbs: 21.3, glyph: 'lagoon',
    hero: 'Admiral Brickell',
    setup: [
      { t: 'Mermonkey', p: '0-5-2 Popseidon' },
      { t: 'Mermonkey', p: '5-0-2 Lord of the Abyss' },
      { t: 'Mermonkey', p: '0-0-2 Echosense Network ×4' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 126000, core: 78, eff: 'S+',
    why: 'Slides are entirely water — Lord of the Abyss lets you anchor merms on the dry decks too.',
    pitfall: 'Bloons travel the slides very fast; put Popseidon mid-slide, not at the pool.',
    link: 'strat-popseidon-merspam',
  },
  {
    name: 'Sulfur Springs', since: 'v41.0', difficulty: 'Intermediate', entrances: 1, exits: 1, junctions: 0, water: true, rbs: 32.2, glyph: 'lagoon',
    hero: 'Obyn Greenfoot',
    setup: [
      { t: 'Skywarden', p: '1-5-0 Stormwrath Archon' },
      { t: 'Skywarden', p: '0-3-0 Galvanic Conduit' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 106000, core: 74, eff: 'S+',
    why: 'Geysers bunch bloons into tight groups — perfect fuel for chained combo lightning.',
    pitfall: 'Sulfur plumes block sight for ground towers; Skywardens fire over them.',
    link: 'strat-skywarden-stormwrath',
  },
  {
    name: 'Protect The Yacht', since: 'v42.3', difficulty: 'Intermediate', entrances: 2, exits: 2, junctions: 0, water: true, rbs: 18.7, glyph: 'isle',
    hero: 'Admiral Brickell',
    setup: [
      { t: 'Mermonkey', p: '0-5-2 Popseidon' },
      { t: 'Monkey Buccaneer', p: '5-0-2 Carrier Flagship' },
      { t: 'Mermonkey', p: '0-0-2 Echosense Network ×3' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 122000, core: 77, eff: 'S',
    why: 'The yacht deck is buildable water-adjacent space; Carrier Flagship buffs every water monkey.',
    pitfall: 'Two lanes round the hull — keep one freeze ability for the lane you cannot see.',
    link: 'strat-popseidon-merspam',
  },
  {
    name: 'Luminous Cove', since: 'v44.0', difficulty: 'Intermediate', entrances: 2, exits: 2, junctions: 0, water: true, rbs: 27.8, glyph: 'lagoon',
    hero: 'Admiral Brickell',
    setup: [
      { t: 'Mermonkey', p: '0-5-2 Popseidon' },
      { t: 'Mermonkey', p: '0-0-2 Echosense Network ×5' },
      { t: 'Monkey Village', p: '2-3-0' },
      { t: 'Alchemist', p: '4-2-0' },
    ],
    cost: 118000, core: 76, eff: 'S+',
    why: 'The glowing cove is one connected body of water — a single Ice Jet freezes both lanes.',
    pitfall: 'Echosense range stacks cap at 10; do not over-buy cheap merms past that.',
    link: 'strat-popseidon-merspam',
  },
  {
    name: 'Ancient Portal', since: 'v45.0', difficulty: 'Intermediate', entrances: 1, exits: 2, junctions: 1, water: true, rbs: 17.8, glyph: 'split',
    hero: 'Psi',
    setup: [
      { t: 'Spike Factory', p: '2-5-0 Carpet of Spikes' },
      { t: 'Glue Gunner', p: '0-2-4 Relentless Glue' },
      { t: 'Alchemist', p: '2-0-0 AMD dip' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 94000, core: 71, eff: 'S',
    why: 'Portal splits the lane early; Carpet of Spikes blankets the whole track every 15 seconds.',
    pitfall: 'Very low RBS means cash is tight — resist buying a second Tier 5.',
    link: 'strat-corvus-soul-harvest',
  },
  {
    name: 'Lost Crevasse', since: 'v50.0', difficulty: 'Intermediate', entrances: 2, exits: 2, junctions: 2, water: true, rbs: 19.7, glyph: 'cross',
    hero: 'Admiral Brickell',
    setup: [
      { t: 'Mermonkey', p: '0-5-2 Popseidon' },
      { t: 'Mermonkey', p: '5-0-2 Lord of the Abyss' },
      { t: 'Monkey Sub', p: '2-5-0 Pre-Emptive Strike' },
      { t: 'Monkey Village', p: '2-3-0' },
    ],
    cost: 128000, core: 78, eff: 'S',
    why: 'Two junctions route bloons unpredictably; a board-wide freeze removes the routing problem.',
    pitfall: 'Crevasse walls block water flow visually but not bloons — trust the junction, not the art.',
    link: 'strat-popseidon-merspam',
  },
];
