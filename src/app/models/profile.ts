import { BattleMode } from './elo';

export interface ProfileBadge {
  id: string;
  name: string;
  icon: string;
}

export interface ProfileBackground {
  id: string;
  name: string;
  gradient: string;
}

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
  backgroundId: string;
  selectedBadgeIds: string[];
  eloVisibility: Record<BattleMode, boolean>;
}

export type DayState = 'nao-estudou' | 'estudou' | 'sequencia-ativa' | 'meta-concluida';

export interface CalendarDay {
  day: number;
  state: DayState;
}