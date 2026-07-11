import { ChestRarity } from './chest';

export type DuelQueueType = 'casual' | 'ranqueado';

export interface DuelProblem {
  id: string;
  title: string;
  description: string;
  examples: { input: string; output: string }[];
  restrictions: string[];
  functionSignature: string;
}

export interface DuelPlayerState {
  name: string;
  avatar: string;
  eloName: string;
  problemsSolved: number;
  attempts: number;
  submittedCode: string;
  language: string;
}

export interface DuelResultStats {
  totalTimeSeconds: number;
  winner: 'player' | 'opponent';
  rewardRarity: ChestRarity;
}