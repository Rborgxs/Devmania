export interface AccountData {
  displayName: string;
  username: string;
  email: string;
  createdAt: string;
  accountId: string;
}

export type LinkedProvider = 'google' | 'github';

export interface LinkedAccountStatus {
  provider: LinkedProvider;
  label: string;
  connected: boolean;
}

export type PasswordStrength = 'fraca' | 'media' | 'forte' | 'muito-forte';

export interface TwoFactorState {
  enabled: boolean;
  qrCodeUrl: string;
  recoveryCodes: string[];
}

export type AppLanguage = 'pt-BR' | 'en' | 'es';

export interface AppearanceSettings {
  highContrast: boolean;
  language: AppLanguage;
}

export interface NotificationSettings {
  newMessages: boolean;
  guildInvites: boolean;
  friendRequests: boolean;
  duelInvites: boolean;
  events: boolean;
  achievementsUnlocked: boolean;
  platformNews: boolean;
}

export interface PrivacySettings {
  publicProfile: boolean;
  allowFriendRequests: boolean;
  allowGuildInvites: boolean;
  allowChallenges: boolean;
}