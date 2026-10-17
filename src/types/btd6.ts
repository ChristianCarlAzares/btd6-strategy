export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Boss';

export type GameMode = 'CHIMPS' | 'Half Cash' | 'Boss Event' | 'ABR' | 'Deflation' | 'Impoppable';

export type MicroIntensity = 'Low (AFK)' | 'Medium' | 'High (Micro)';

export type TowerCategory = 'Primary' | 'Military' | 'Magic' | 'Support' | 'Hero';

export interface KeyTower {
  name: string;
  crosspath: string;
  topPath: number;
  midPath: number;
  botPath: number;
  role: string;
  category: TowerCategory;
  costEstimate: number;
}

export interface BuildStep {
  roundRange: string;
  phase: string;
  actions: string[];
  tips: string;
}

export interface DangerRoundAlert {
  round: number;
  threat: string;
  counter: string;
}

export interface Strategy {
  id: string;
  title: string;
  subtitle: string;
  difficulty: DifficultyLevel;
  gameMode: GameMode;
  hero: string;
  heroCrosspath?: string;
  winRate: number; // percentage, e.g. 96
  patchVersion: string;
  microIntensity: MicroIntensity;
  totalCostEstimate: number;
  monkeyKnowledgeRequired: boolean;
  maps: string[];
  tags: string[];
  keyTowers: KeyTower[];
  buildOrder: BuildStep[];
  dangerousRounds: DangerRoundAlert[];
  pros: string[];
  cons: string[];
  synergyNotes: string;
  challengeCode: string;
  isFeatured?: boolean;
  metaRanking?: number;
}

export interface RoundInfo {
  round: number;
  rbe: number;
  notableBloons: string[];
  specialProperties: ('Camo' | 'Lead' | 'Fortified' | 'Regrow' | 'Purple' | 'MOAB' | 'DDT' | 'BAD')[];
  description: string;
  recommendedCounters: string[];
  dangerLevel: 'Low' | 'Medium' | 'High' | 'EXTREME';
}

export interface TowerSynergyInfo {
  id: string;
  name: string;
  category: TowerCategory;
  bestCrosspaths: {
    path: string;
    name: string;
    bestFor: string;
    why: string;
  }[];
  topSynergies: string[];
  alchBuffCompatibility: 1 | 2 | 3 | 4 | 5; // 5 = supreme
  villageDiscountPriority: 'High' | 'Medium' | 'Low';
  tips: string;
}
