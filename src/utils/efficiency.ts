import { Strategy } from '../types/btd6';

export type EfficiencyRank = 'S+' | 'S' | 'A' | 'B';

export interface EfficiencyReport {
  rank: EfficiencyRank;
  score: number;
  /** Average dollars spent per round of the 100-round CHIMPS clock. */
  costPerRound: number;
  /** Dollars per point of measured win reliability. */
  costPerWinPoint: number;
}

const MICRO_WEIGHT: Record<string, number> = {
  'Low (AFK)': 100,
  'Medium': 68,
  'High (Micro)': 42,
};

/**
 * Derives an efficiency score so every blueprint — including legacy entries
 * without explicit metadata — can be ranked on one comparable scale.
 *
 * 55% verified winrate + 30% budget efficiency + 15% attention cost.
 */
export function getEfficiency(strategy: Strategy): EfficiencyReport {
  const costPerRound = Math.round(strategy.totalCostEstimate / 100);
  const costPerWinPoint = Math.round(strategy.totalCostEstimate / Math.max(1, strategy.winRate));

  if (strategy.efficiencyScore !== undefined) {
    return {
      rank: strategy.efficiencyRank ?? rankFromScore(strategy.efficiencyScore),
      score: strategy.efficiencyScore,
      costPerRound,
      costPerWinPoint,
    };
  }

  const budgetScore = Math.max(0, Math.min(100, 100 - (strategy.totalCostEstimate - 40000) / 1600));
  const microScore = MICRO_WEIGHT[strategy.microIntensity] ?? 68;
  const score = Math.round(strategy.winRate * 0.55 + budgetScore * 0.3 + microScore * 0.15);

  return { rank: rankFromScore(score), score, costPerRound, costPerWinPoint };
}

export function rankFromScore(score: number): EfficiencyRank {
  if (score >= 92) return 'S+';
  if (score >= 85) return 'S';
  if (score >= 77) return 'A';
  return 'B';
}

export const RANK_LABEL: Record<EfficiencyRank, string> = {
  'S+': 'God-tier value',
  S: 'Elite value',
  A: 'Solid value',
  B: 'Niche value',
};
