import { Injectable, signal, computed } from '@angular/core';
import { EloTier, EloProgress, BattleMode } from '../models/elo';

const TIER_NAMES = [
  'Aprendiz', 'Novato', 'Escudeiro', 'Guerreiro', 'Cavaleiro',
  'Guardião', 'Sentinela', 'Veterano', 'Campeão', 'Mestre',
  'Arquimago', 'Lenda', 'Herói', 'Imortal', 'Celestial',
  'Dragão', 'Titã', 'Supremo', 'Mítico', 'Deus da Arena'
];

function buildTiers(): EloTier[] {
  const tiers: EloTier[] = [];
  let requiredXp = 0;
  let increment = 500;

  TIER_NAMES.forEach((name, index) => {
    tiers.push({
      id: `tier-${index}`,
      name,
      icon: `/assets/icons/elo/${index}.png`,
      minXp: requiredXp
    });
    requiredXp += increment;
    increment = Math.round(increment * 1.25);
  });

  return tiers;
}

@Injectable({ providedIn: 'root' })
export class EloService {
  readonly tiers: EloTier[] = buildTiers();

  playerXp = signal<Record<BattleMode, number>>({
    feat: 2750,
    fix: 1200,
    style: 400
  });

  getProgress(mode: BattleMode): EloProgress {
    const xp = this.playerXp()[mode];
    return this.calculateProgress(xp);
  }

  private calculateProgress(xp: number): EloProgress {
    let currentTierIndex = 0;

    for (let i = 0; i < this.tiers.length; i++) {
      if (xp >= this.tiers[i].minXp) {
        currentTierIndex = i;
      } else {
        break;
      }
    }

    const tier = this.tiers[currentTierIndex];
    const nextTier = this.tiers[currentTierIndex + 1] ?? null;

    const xpIntoTier = xp - tier.minXp;
    const xpNeededForNextTier = nextTier ? nextTier.minXp - tier.minXp : 0;
    const progressPercent = nextTier ? Math.min(100, (xpIntoTier / xpNeededForNextTier) * 100) : 100;

    return {
      tier,
      nextTier,
      currentXp: xp,
      xpIntoTier,
      xpNeededForNextTier,
      progressPercent
    };
  }

  addXp(mode: BattleMode, amount: number): void {
    this.playerXp.update(current => ({
      ...current,
      [mode]: current[mode] + amount
    }));
  }
}