export interface MentorChatMessage {
  id: string;
  sender: 'user' | 'mentor';
  text: string;
  timestamp: string;
}

export interface Hint {
  id: string;
  label: string;
  cost: number;
  unlocked: boolean;
}