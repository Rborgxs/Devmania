import { BattleMode } from './elo';

export interface ProfileStats {
  totalXp: number;
  gold: number;
  challengesCompleted: number;
  duelsWon: number;
  currentGuild: string;
  friendsAdded: number;
}

export interface UserProfile {
  displayName: string;
  username: string;
  bio: string;
  eloVisibility: Record<BattleMode, boolean>;
}

export type DayState = 'nao-estudou' | 'estudou' | 'sequencia-ativa' | 'meta-concluida';

export interface CalendarDay {
  day: number;
  state: DayState;
}
