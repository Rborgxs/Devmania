export type FriendStatus = 'online' | 'ausente' | 'em-duelo' | 'programando';

export interface Friend {
  id: string;
  name: string;
  avatar: string;
  role: string;
  status: FriendStatus;
}

export type FriendMessageType = 'texto' | 'desafio' | 'projeto';

export interface FriendMessage {
  id: string;
  friendId: string;
  sender: 'user' | 'friend';
  type: FriendMessageType;
  text: string;
  timestamp: string;
}

export interface GiftItem {
  id: string;
  name: string;
  icon: string;
}