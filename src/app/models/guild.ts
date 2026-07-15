export interface GuildMember {
  id: string;
  name: string;
  avatar: string;
  eloName: string;
  isOnline: boolean;
}

export interface Guild {
  id: string;
  name: string;
  emblem: string;
  memberCount: number;
  eloName: string;
  members: GuildMember[];
}

export interface GuildChatMessage {
  id: string;
  authorName: string;
  authorAvatar: string;
  text: string;
  timestamp: string;
}

export type DuelModeId = 'rapido' | 'rei-da-guilda' | 'melhor-de-5';

export interface DuelModeOption {
  id: DuelModeId;
  icon: string;
  name: string;
  description: string;
}

export interface GuildEvent {
  id: string;
  name: string;
  image: string;
  description: string;
  timeRemaining: string;
  rewards: string;
  participantCount: number;
}