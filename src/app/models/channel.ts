export interface Channel {
  id: string;
  name: string;
  icon: string;
}

export interface TabernaChatMessage {
  id: string;
  channelId: string;
  authorName: string;
  authorAvatar: string;
  authorEloName: string;
  text: string;
  timestamp: string;
  isSelf?: boolean;
}