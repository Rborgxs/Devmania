export type BattleMode = 'feat' | 'fix' | 'style';

export interface EloTier {
  id: string;
  name: string;
  icon: string;
  minXp: number;
}

export interface EloProgress {
  tier: EloTier;
  nextTier: EloTier | null;
  currentXp: number;
  xpIntoTier: number;
  xpNeededForNextTier: number;
  progressPercent: number;
}