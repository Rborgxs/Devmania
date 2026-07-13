import { Injectable, signal, inject } from '@angular/core';
import { UserProfile, ProfileBadge, ProfileBackground, ProfileStats, CalendarDay } from '../models/profile';
import { WalletService } from './wallet';

const USERNAME_CHANGE_COST = 200;

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly wallet = inject(WalletService);

  profile = signal<UserProfile>({
    displayName: 'Aventureiro',
    username: '@aventureiro_dev',
    bio: 'Explorando os reinos do código, uma quest por vez.',
    backgroundId: 'bg1',
    selectedBadgeIds: ['b1', 'b3'],
    eloVisibility: { feat: true, fix: true, style: false }
  });

  availableBadges = signal<ProfileBadge[]>([
    { id: 'b1', name: 'Type é meu tipo', icon: '/assets/badges/typescript.png' },
    { id: 'b2', name: 'Club Anti Frontend', icon: '/assets/badges/anti-frontend.png' },
    { id: 'b3', name: 'Top One Form Brazil', icon: '/assets/badges/top-form.png' },
    { id: 'b4', name: 'Club Anti Backend', icon: '/assets/badges/anti-backend.png' },
    { id: 'b5', name: 'Engenheiro de Prompt', icon: '/assets/badges/prompt-engineer.png' },
    { id: 'b6', name: 'Uma Cobra na Minha Bota', icon: '/assets/badges/python.png' }
  ]);

  backgrounds = signal<ProfileBackground[]>([
    { id: 'bg1', name: 'Crepúsculo Dourado', gradient: 'linear-gradient(135deg, #ecb158, #3c271b)' },
    { id: 'bg2', name: 'Névoa Arcana', gradient: 'linear-gradient(135deg, #505169, #201e1a)' },
    { id: 'bg3', name: 'Fogueira da Taberna', gradient: 'linear-gradient(135deg, #6d4a27, #8a2b2b)' },
    { id: 'bg4', name: 'Floresta Sombria', gradient: 'linear-gradient(135deg, #2f7a4d, #201e1a)' }
  ]);

  stats = signal<ProfileStats>({
    totalXp: 8420,
    gold: 150,
    challengesCompleted: 62,
    duelsWon: 18,
    currentGuild: 'Ordem do Código Sagrado',
    friendsAdded: 9
  });

  usernameChangeModalOpen = signal(false);

  updateDisplayName(name: string): void {
    this.profile.update(p => ({ ...p, displayName: name }));
  }

  updateBio(bio: string): void {
    this.profile.update(p => ({ ...p, bio }));
  }

  setBackground(backgroundId: string): void {
    this.profile.update(p => ({ ...p, backgroundId }));
  }

  toggleBadge(badgeId: string): void {
    this.profile.update(p => {
      const isSelected = p.selectedBadgeIds.includes(badgeId);
      if (isSelected) {
        return { ...p, selectedBadgeIds: p.selectedBadgeIds.filter(id => id !== badgeId) };
      }
      if (p.selectedBadgeIds.length >= 5) {
        return p;
      }
      return { ...p, selectedBadgeIds: [...p.selectedBadgeIds, badgeId] };
    });
  }

  toggleEloVisibility(mode: 'feat' | 'fix' | 'style'): void {
    this.profile.update(p => ({
      ...p,
      eloVisibility: { ...p.eloVisibility, [mode]: !p.eloVisibility[mode] }
    }));
  }

  openUsernameModal(): void {
    this.usernameChangeModalOpen.set(true);
  }

  closeUsernameModal(): void {
    this.usernameChangeModalOpen.set(false);
  }

  confirmUsernameChange(newUsername: string): boolean {
    if (!this.wallet.hasEnough(USERNAME_CHANGE_COST)) {
      return false;
    }
    this.wallet.spend(USERNAME_CHANGE_COST);
    this.profile.update(p => ({ ...p, username: newUsername }));
    this.usernameChangeModalOpen.set(false);
    return true;
  }

  usernameChangeCost = USERNAME_CHANGE_COST;

  weeklyXp = signal([320, 480, 210, 600, 390, 720, 540]);

  currentStreak = signal(6);
  bestStreak = signal(14);
  weeklyGoal = signal(5);
  monthlyGoal = signal(20);

  calendarDays = signal<CalendarDay[]>(
    Array.from({ length: 30 }, (_, i) => {
      const day = i + 1;
      const rand = Math.random();
      let state: CalendarDay['state'] = 'nao-estudou';
      if (day <= 12) {
        state = rand > 0.7 ? 'meta-concluida' : rand > 0.3 ? 'sequencia-ativa' : 'estudou';
      }
      return { day, state };
    })
  );
}