import { Injectable, signal, computed, inject } from '@angular/core';
import { Achievement } from '../models/achievement';
import { WalletService } from './wallet';

@Injectable({ providedIn: 'root' })
export class AchievementService {
  private readonly wallet = inject(WalletService);

  achievements = signal<Achievement[]>([
    { id: 'ach1', name: 'Primeiro Passo', description: 'Complete sua primeira quest.', icon: '/assets/achievements/first-step.png', rarity: 'comum', coinReward: 20, unlocked: true, rewardCollected: false },
    { id: 'ach2', name: 'Duelista Nato', description: 'Vença 10 duelos na Arena.', icon: '/assets/achievements/duelist.png', rarity: 'rara', coinReward: 80, unlocked: true, rewardCollected: true },
    { id: 'ach3', name: 'Mestre dos Arrays', description: 'Complete todos os exercícios de Arrays.', icon: '/assets/achievements/arrays-master.png', rarity: 'incomum', coinReward: 40, unlocked: false, progress: { current: 6, total: 10 }, rewardCollected: false },
    { id: 'ach4', name: 'Lenda da Guilda', description: 'Contribua com 1000 XP para sua guilda.', icon: '/assets/achievements/guild-legend.png', rarity: 'epica', coinReward: 150, unlocked: false, progress: { current: 420, total: 1000 }, rewardCollected: false },
    { id: 'ach5', name: 'Sequência de Ferro', description: 'Mantenha uma ofensiva de 30 dias.', icon: '/assets/achievements/iron-streak.png', rarity: 'lendaria', coinReward: 300, unlocked: false, progress: { current: 6, total: 30 }, rewardCollected: false }
  ]);

  unlockedAchievements = computed(() => this.achievements().filter(a => a.unlocked));
  lockedAchievements = computed(() => this.achievements().filter(a => !a.unlocked));

  pendingRewardsCount = computed(() =>
    this.achievements().filter(a => a.unlocked && !a.rewardCollected).length
  );

  collectReward(achievementId: string): void {
    const achievement = this.achievements().find(a => a.id === achievementId);
    if (!achievement || !achievement.unlocked || achievement.rewardCollected) {
      return;
    }
    this.wallet.coins.update(c => c + achievement.coinReward);
    this.achievements.update(list =>
      list.map(a => a.id === achievementId ? { ...a, rewardCollected: true } : a)
    );
  }

  collectAll(): void {
    this.achievements().forEach(a => {
      if (a.unlocked && !a.rewardCollected) {
        this.collectReward(a.id);
      }
    });
  }
}