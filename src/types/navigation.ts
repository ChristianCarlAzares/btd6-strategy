export type PageId =
  | 'spotlight'
  | 'vault'
  | 'atlas'
  | 'dangers'
  | 'planner'
  | 'synergies'
  | 'bosses';

export interface PageMeta {
  id: PageId;
  name: string;
  shortTitle: string;
  subtitle: string;
  badge?: string;
}

export const PAGES_REGISTRY: PageMeta[] = [
  {
    id: 'spotlight',
    name: 'Meta Spotlight',
    shortTitle: 'Spotlight',
    subtitle: 'Live v57.2 Meta Overview, Interactive Pop Minigame & Efficiency Leaderboard',
    badge: 'Home',
  },
  {
    id: 'vault',
    name: 'Strategy Vault',
    shortTitle: 'Strategy Vault',
    subtitle: '22 Categorized Tower Setup Blueprints with Round-by-Round Walkthroughs',
    badge: '22 Strats',
  },
  {
    id: 'atlas',
    name: 'Map & Mode Atlas',
    shortTitle: 'Map Atlas',
    subtitle: 'All 90 Maps × All 20 Game Modes (Easy, Medium, Hard & Special Events)',
    badge: '90×20',
  },
  {
    id: 'dangers',
    name: 'Danger Rounds',
    shortTitle: 'Danger Rounds',
    subtitle: 'Lethal Wave RBE Inspector, Immunities & Prescribed Counters (R24–R100)',
  },
  {
    id: 'planner',
    name: 'CHIMPS Planner',
    shortTitle: 'CHIMPS Planner',
    subtitle: 'Deterministic $178,909 Cash Simulator & Tier 5 Affordability Checker',
  },
  {
    id: 'synergies',
    name: 'Tower Synergies',
    shortTitle: 'Tower Synergies',
    subtitle: 'Optimal Crosspath Mathematics, Alchemist Buff Ratings & Village Priorities',
  },
  {
    id: 'bosses',
    name: 'Boss Events',
    shortTitle: 'Boss Events',
    subtitle: 'Elite Ranked Protocols for Bloonarius, Lych, Vortex, Dreadbloon, Phayze & Blastapopoulos',
    badge: '6 Bosses',
  },
];
