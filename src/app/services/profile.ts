import { Injectable, signal, inject, computed } from '@angular/core';
import { UserProfile, ProfileStats, CalendarDay } from '../models/profile';
import { WalletService } from './wallet';

const USERNAME_CHANGE_COST = 200;

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly wallet = inject(WalletService);

  profile = signal<UserProfile>({
    displayName: 'Aventureiro',
    username: '@aventureiro_dev',
    bio: 'Explorando os reinos do código, uma quest por vez.',
    eloVisibility: { feat: true, fix: true, style: false }
  });

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
  weeklyXpTotal = computed(() => this.weeklyXp().reduce((sum, v) => sum + v, 0));

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
