export type ChestRarity = 'comum' | 'raro' | 'lendario';
export type ChestStatus = 'bloqueado' | 'disponivel' | 'aberto';

export interface ChestReward {
  type: 'xp' | 'moedas' | 'insignia';
  label: string;
  amount?: number;
}

export interface Chest {
  id: string;
  status: ChestStatus;
  rarity: ChestRarity;
  unlocksAt?: number;
  rewards?: ChestReward[];
}