import { TowerSynergyInfo } from '../types/btd6';

export const TOWER_SYNERGY_DATA: TowerSynergyInfo[] = [
  {
    id: 'tack-shooter',
    name: 'Tack Shooter',
    category: 'Primary',
    bestCrosspaths: [
      {
        path: '2-0-5 The Tack Zone',
        name: 'Faster Shooting + Pierce Path',
        bestFor: 'General CHIMPS & Bosses',
        why: 'Top path gives +1 flat pierce and fires faster. Combined with Super Brittle and Alchemist buffs, each extra projectile yields astronomical DPS.'
      },
      {
        path: '5-0-2 Inferno Ring',
        name: 'Meteor & Range Path',
        bestFor: 'Late game single & multi-lane cleanup',
        why: 'Bottom path gives range and tack lifespan so the 700-damage meteor reaches any blimp within half-map radius.'
      }
    ],
    topSynergies: ['Super Brittle (5-0-2)', 'Glue Storm (2-5-0)', 'Alchemist (4-2-0)', 'Overclock (0-4-0)', 'Primary Mentoring (4-2-0)'],
    alchBuffCompatibility: 5,
    villageDiscountPriority: 'High',
    tips: 'Place in tight inside curve corners. Super Brittle adds flat +4 damage to all 32 tacks!'
  },
  {
    id: 'ninja-monkey',
    name: 'Ninja Monkey',
    category: 'Magic',
    bestCrosspaths: [
      {
        path: '4-0-1 Bloonjitsu',
        name: 'Seeking Shuriken + Caltrops',
        bestFor: 'Early to midgame carry',
        why: 'Bottom path 4-0-1 makes shurikens seek bloons with 100% accuracy. Caltrops (4-0-2) are optional but can steal Alchemist buff brew.'
      },
      {
        path: '5-0-1 Grandmaster Ninja',
        name: 'Shinobi Swarm Core',
        bestFor: 'Late game bullet hell',
        why: 'Surround with 20 Shinobi Tactics (0-3-0) for up to +400% attack speed and +160% pierce boost.'
      },
      {
        path: '1-0-5 Master Bomber',
        name: 'Flash Bomb + Sticky Bomb',
        bestFor: 'Lych Boss & DDT stun',
        why: 'Attaches a 10,000 damage explosive charge every 3 seconds to the strongest MOAB blimp.'
      }
    ],
    topSynergies: ['Alchemist (4-2-0)', 'Shinobi Tactics (0-3-0)', 'Geraldo Pickles', 'Glue Storm (2-5-0)'],
    alchBuffCompatibility: 5,
    villageDiscountPriority: 'Medium',
    tips: 'Never upgrade to 4-0-2 Caltrops if you want your 4-2-0 Alchemist buff to stay 100% active on the shurikens.'
  },
  {
    id: 'spike-factory',
    name: 'Spike Factory',
    category: 'Support',
    bestCrosspaths: [
      {
        path: '0-2-5 Perma-Spike',
        name: 'Faster Production + Even Faster',
        bestFor: 'Black Border CHIMPS Safety Net',
        why: 'Bottom path + Middle path produces spikes 80% faster. Pair with a 2-0-0 Alchemist for Lead/DDT popping instead of wasting top path.'
      },
      {
        path: '2-5-0 Carpet of Spikes',
        name: 'White Hot Spikes + Spike Storm',
        bestFor: 'Multi-lane expert maps (#OUCH, Quad)',
        why: 'Top path allows Carpet Spikes to pop leads and frozen bloons with increased spike damage per hit.'
      }
    ],
    topSynergies: ['Alchemist (2-0-0 AMD)', 'Overclock (0-4-0)', 'Jungle Drums (2-0-0)', 'MOAB Glue (0-2-4 stall)'],
    alchBuffCompatibility: 4,
    villageDiscountPriority: 'High',
    tips: 'Always set target to "Smart" or "Close" so spikes don\'t disperse evenly across branching tracks.'
  },
  {
    id: 'glue-gunner',
    name: 'Glue Gunner',
    category: 'Primary',
    bestCrosspaths: [
      {
        path: '0-2-4 Relentless Glue',
        name: 'Splatter + Glue Puddles',
        bestFor: 'DDT, MOAB, and Ceramic stalling',
        why: 'Recent balance patches made Relentless Glue drop glue puddle traps on track that stun and slow DDTs.'
      },
      {
        path: '5-0-2 Bloon Solver',
        name: 'Corrosive Glue + Stickier Glue',
        bestFor: 'Total ceramic & super ceramic liquidation',
        why: 'Dissolves ceramics in 0.2 seconds and leaves corrosive pools on track.'
      },
      {
        path: '2-5-0 Glue Storm',
        name: 'Global Debuff Spell',
        bestFor: 'BAD & Boss damage amplifier',
        why: 'Applies +2 damage vulnerability to every bloon on screen for 15 seconds.'
      }
    ],
    topSynergies: ['Primary Mentoring (4-2-0)', 'The Tack Zone (2-0-5)', 'Sky Shredder (5-0-2)', 'Sniper Monkey'],
    alchBuffCompatibility: 2,
    villageDiscountPriority: 'High',
    tips: 'A single 0-2-4 Relentless Glue can singlehandedly shut down Round 95 DDT rush when paired with Camo Village.'
  },
  {
    id: 'monkey-ace',
    name: 'Monkey Ace',
    category: 'Military',
    bestCrosspaths: [
      {
        path: '5-0-2 Sky Shredder',
        name: 'Spy Plane + Centered Path',
        bestFor: 'High-density rounds 80-100',
        why: 'Bottom path grants Camo detection and tighter projectile flight. Fires 32 darts every 0.15s.'
      },
      {
        path: '2-0-5 Flying Fortress',
        name: 'Bigger Bombs + Doomship Base',
        bestFor: 'Late game raw power & boss farming',
        why: 'The Big Plane fires 3 streams of high-velocity explosive missiles and plasma darts simultaneously.'
      }
    ],
    topSynergies: ['Carrier Flagship (5-2-0 +15% aura)', 'Alchemist (4-2-0)', 'Etienne (UCAV)', 'Overclock (0-4-0)'],
    alchBuffCompatibility: 4,
    villageDiscountPriority: 'Medium',
    tips: 'Carrier Flagship has a hidden 15% attack speed boost to all Monkey Aces on the screen!'
  },
  {
    id: 'druid',
    name: 'Druid',
    category: 'Magic',
    bestCrosspaths: [
      {
        path: '0-1-5 Avatar of Wrath',
        name: 'Heart of Oak + Poplust Swarm',
        bestFor: 'Round 98 & 100 BAD annihilator',
        why: 'Gains up to +30 damage per thorn as the screen fills with bloons. Always stack with five 0-1-4 Poplusts.'
      },
      {
        path: '1-5-0 Spirit of the Forest',
        name: 'Hard Thorns + Global Brambles',
        bestFor: 'Multi-lane ceramic insulation',
        why: 'Vines deal crushing damage anywhere on the track. Hard Thorns allows vines to pop Lead.'
      }
    ],
    topSynergies: ['Obyn Greenfoot', 'Poplusts (0-1-4 x5)', 'Monkey Village (2-3-0 MIB)', 'Alchemist (4-2-0)'],
    alchBuffCompatibility: 4,
    villageDiscountPriority: 'High',
    tips: 'Druids placed within Obyn range gain +1 pierce and range at level 2, and +5 range and +2 pierce at level 11.'
  },
  {
    id: 'ice-monkey',
    name: 'Ice Monkey',
    category: 'Primary',
    bestCrosspaths: [
      {
        path: '5-0-2 Super Brittle',
        name: 'Deep Freeze + Permafrost',
        bestFor: 'Boss fights and fast-firing towers',
        why: 'Adds flat +4 damage debuff to any Bloon struck by ice shard aura.'
      },
      {
        path: '2-0-5 Icicle Impale',
        name: 'Permafrost + Metal Freeze',
        bestFor: 'DDT freeze lock',
        why: '2-0-5 allows Icicle Impale to pop and freeze lead/DDT blimps without requiring MIB Village.'
      }
    ],
    topSynergies: ['Tack Zone (2-0-5)', 'Sky Shredder (5-0-2)', 'Grandmaster Ninja (5-0-1)', 'Primary Mentoring (4-2-0)'],
    alchBuffCompatibility: 2,
    villageDiscountPriority: 'High',
    tips: 'Icicle Impale with 2-0-5 can freeze DDTs in their tracks, turning round 90, 95, and 99 into walkovers.'
  },
  {
    id: 'sniper-monkey',
    name: 'Sniper Monkey',
    category: 'Military',
    bestCrosspaths: [
      {
        path: '0-5-2 Elite Sniper',
        name: 'Bouncing Bullet + Shrapnel Shot',
        bestFor: 'Midgame carry, ceramic shred & cash supply',
        why: 'Bottom path 0-5-2 causes every bounce to produce shrapnel spikes, buffing all other snipers on map.'
      },
      {
        path: '5-2-0 Cripple MOAB',
        name: 'Shrapnel Debuff',
        bestFor: 'Boss fights (+5 damage debuff to boss)',
        why: 'Shrapnel applies the +5 damage debuff to multiple blimps in an area simultaneously.'
      },
      {
        path: '0-2-5 Elite Defender',
        name: 'Shrapnel Rapid Fire',
        bestFor: 'Half Cash cleanup & fast single-target',
        why: 'Machine gun firing rate that accelerates as bloons travel further down track.'
      }
    ],
    topSynergies: ['Alchemist (4-2-0)', 'Geraldo Sharpening Stone', 'Primary Mentoring / Village', 'Super Brittle'],
    alchBuffCompatibility: 4,
    villageDiscountPriority: 'Low',
    tips: 'Elite Sniper (0-5-2) with 4-2-0 Alchemist buff can solo through round 75 on most single-lane maps!'
  }
];
