export type QuestDifficulty = 'facil' | 'medio' | 'dificil';

export interface Quest {
  id: string;
  title: string;
  description: string;
  difficulty: QuestDifficulty;
  image: string;
  coinReward: number;
  xpReward?: number;
  input?: string;
  output?: string;
  week?: number;
  bugCount?: number;
}

export interface DayHistory {
  day: string;
  questTitle: string;
  coins: number;
  status: 'concluido' | 'pendente' | 'falhou';
}