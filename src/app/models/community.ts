export type TabernaTab = 'chat-global' | 'guildas' | 'amigos';

export interface OnlinePlayer {
  id: string;
  name: string;
  avatar: string;
  role: string;
  eloName: string;
  status: 'online' | 'ausente' | 'em-duelo' | 'programando';
}

export interface RankingEntry {
  position: number;
  medal: string;
  playerName: string;
  title: string;
}

export interface RealmAnnouncement {
  id: string;
  category: 'evento' | 'atualizacao' | 'desafio' | 'manutencao';
  text: string;
}