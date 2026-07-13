import { Injectable, signal, computed } from '@angular/core';
import {
  AccountData,
  LinkedAccountStatus,
  TwoFactorState,
  AppearanceSettings,
  NotificationSettings,
  PrivacySettings,
  PasswordStrength,
  LinkedProvider,
  AppLanguage
} from '../models/settings';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  account = signal<AccountData>({
    displayName: 'Aventureiro',
    username: '@aventureiro_dev',
    email: 'aventureiro@devmania.com',
    createdAt: '12/03/2025',
    accountId: 'DM-849213'
  });

  linkedAccounts = signal<LinkedAccountStatus[]>([
    { provider: 'google', label: 'Google', connected: true },
    { provider: 'github', label: 'GitHub', connected: false }
  ]);

  twoFactor = signal<TwoFactorState>({
    enabled: false,
    qrCodeUrl: '/assets/settings/qr-placeholder.png',
    recoveryCodes: ['A1B2-C3D4', 'E5F6-G7H8', 'I9J0-K1L2', 'M3N4-O5P6']
  });

  appearance = signal<AppearanceSettings>({
    highContrast: false,
    language: 'pt-BR'
  });

  languageOptions: { id: AppLanguage; label: string }[] = [
    { id: 'pt-BR', label: 'Português (Brasil)' },
    { id: 'en', label: 'English' },
    { id: 'es', label: 'Español' }
  ];

  notifications = signal<NotificationSettings>({
    newMessages: true,
    guildInvites: true,
    friendRequests: true,
    duelInvites: true,
    events: true,
    achievementsUnlocked: true,
    platformNews: false
  });

  privacy = signal<PrivacySettings>({
    publicProfile: true,
    allowFriendRequests: true,
    allowGuildInvites: true,
    allowChallenges: true
  });

  newPasswordDraft = signal('');

  passwordStrength = computed<PasswordStrength>(() => {
    const value = this.newPasswordDraft();
    if (value.length === 0) {
      return 'fraca';
    }

    let score = 0;
    if (value.length >= 8) score++;
    if (value.length >= 12) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    if (score <= 1) return 'fraca';
    if (score <= 2) return 'media';
    if (score <= 3) return 'forte';
    return 'muito-forte';
  });

  toggleLinkedAccount(provider: LinkedProvider): void {
    this.linkedAccounts.update(list =>
      list.map(acc => acc.provider === provider ? { ...acc, connected: !acc.connected } : acc)
    );
  }

  toggleTwoFactor(): void {
    this.twoFactor.update(state => ({ ...state, enabled: !state.enabled }));
  }

  updateAppearance<K extends keyof AppearanceSettings>(key: K, value: AppearanceSettings[K]): void {
    this.appearance.update(a => ({ ...a, [key]: value }));
  }

  toggleNotification(key: keyof NotificationSettings): void {
    this.notifications.update(n => ({ ...n, [key]: !n[key] }));
  }

  togglePrivacy(key: keyof PrivacySettings): void {
    this.privacy.update(p => ({ ...p, [key]: !p[key] }));
  }

  changePassword(currentPassword: string, newPassword: string): void {
    console.log('alterar senha', { currentPassword, newPassword });
    this.newPasswordDraft.set('');
  }

  requestEmailChange(newEmail: string): void {
    console.log('solicitar troca de e-mail', newEmail);
  }

  resendVerificationCode(): void {
    console.log('reenviar código de verificação');
  }
}