export type AchievementRarity = 'comum' | 'incomum' | 'rara' | 'epica' | 'lendaria';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: AchievementRarity;
  coinReward: number;
  unlocked: boolean;
  progress?: { current: number; total: number };
  rewardCollected: boolean;
}