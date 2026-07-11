import { Injectable, signal } from '@angular/core';
import { Chest, ChestRarity } from '../models/chest';

const REWARD_TABLE: Record<ChestRarity, { type: 'xp' | 'moedas' | 'insignia'; label: string; amount?: number }[]> = {
  comum: [
    { type: 'xp', label: 'Experiência', amount: 80 },
    { type: 'moedas', label: 'Moedas', amount: 40 }
  ],
  raro: [
    { type: 'xp', label: 'Experiência', amount: 220 },
    { type: 'moedas', label: 'Moedas', amount: 120 },
    { type: 'insignia', label: 'Insígnia de JavaScript' }
  ],
  lendario: [
    { type: 'xp', label: 'Experiência', amount: 600 },
    { type: 'moedas', label: 'Moedas', amount: 400 },
    { type: 'insignia', label: 'Insígnia de Angular' },
    { type: 'insignia', label: 'Recompensa Especial: Título "Forjador de Código"' }
  ]
};

@Injectable({ providedIn: 'root' })
export class ChestService {
  chests = signal<Chest[]>([
    { id: 'c1', status: 'disponivel', rarity: 'comum' },
    { id: 'c2', status: 'bloqueado', rarity: 'raro', unlocksAt: Date.now() + 8135000 },
    { id: 'c3', status: 'bloqueado', rarity: 'lendario', unlocksAt: Date.now() + 21600000 }
  ]);

  openChest(chestId: string): void {
    this.chests.update(chests =>
      chests.map(c => {
        if (c.id !== chestId || c.status !== 'disponivel') {
          return c;
        }
        return { ...c, status: 'aberto', rewards: REWARD_TABLE[c.rarity] };
      })
    );
  }

  markUnlocked(chestId: string): void {
    this.chests.update(chests =>
      chests.map(c => c.id === chestId ? { ...c, status: 'disponivel' } : c)
    );
  }
}