import { Injectable, signal } from '@angular/core';
import { BattleMode } from '../models/elo';
import { DuelProblem, DuelPlayerState, DuelResultStats, DuelQueueType } from '../models/duel';
import { ChestRarity } from '../models/chest';

@Injectable({ providedIn: 'root' })
export class DuelStateService {
  currentMode = signal<BattleMode>('feat');
  currentQueueType = signal<DuelQueueType>('casual');

  setQueueContext(mode: BattleMode, queueType: DuelQueueType): void {
    this.currentMode.set(mode);
    this.currentQueueType.set(queueType);
  }

  problems = signal<DuelProblem[]>([
    {
      id: 'd1',
      title: 'Soma dos Tesouros',
      description: 'Calcule a soma total de um array de moedas encontradas na masmorra.',
      examples: [{ input: 'sumTreasure([10, 20, 30])', output: '60' }],
      restrictions: ['1 <= array.length <= 100'],
      functionSignature: 'function sumTreasure(coins) {\n\n}'
    },
    {
      id: 'd2',
      title: 'Inversão do Pergaminho',
      description: 'Inverta a ordem dos caracteres de um pergaminho antigo (string).',
      examples: [{ input: 'reverseScroll("magia")', output: '"aigam"' }],
      restrictions: ['1 <= scroll.length <= 200'],
      functionSignature: 'function reverseScroll(scroll) {\n\n}'
    },
    {
      id: 'd3',
      title: 'Maior Espada',
      description: 'Encontre o maior valor de dano dentre uma lista de espadas.',
      examples: [{ input: 'strongestSword([5, 12, 8])', output: '12' }],
      restrictions: ['1 <= swords.length <= 50'],
      functionSignature: 'function strongestSword(swords) {\n\n}'
    }
  ]);

  player = signal<DuelPlayerState>({
    name: 'Você',
    avatar: '/assets/avatars/default.png',
    eloName: 'Cavaleiro',
    problemsSolved: 0,
    attempts: 0,
    submittedCode: '',
    language: 'JavaScript'
  });

  opponent = signal<DuelPlayerState>({
    name: 'Sombra Rival',
    avatar: '/assets/avatars/avatar2.png',
    eloName: 'Guerreiro',
    problemsSolved: 0,
    attempts: 0,
    submittedCode: '',
    language: 'JavaScript'
  });

  matchStartedAt = signal(Date.now());
  matchEnded = signal(false);
  result = signal<DuelResultStats | null>(null);

  playerSolveProblem(): void {
    if (this.matchEnded()) {
      return;
    }

    this.player.update(p => ({ ...p, problemsSolved: p.problemsSolved + 1, attempts: p.attempts + 1 }));

    if (this.player().problemsSolved >= this.problems().length) {
      this.finishMatch('player');
    }
  }

  playerFailedAttempt(): void {
    this.player.update(p => ({ ...p, attempts: p.attempts + 1 }));
  }

  opponentSolveProblem(): void {
    if (this.matchEnded()) {
      return;
    }

    this.opponent.update(o => ({ ...o, problemsSolved: o.problemsSolved + 1 }));

    if (this.opponent().problemsSolved >= this.problems().length) {
      this.finishMatch('opponent');
    }
  }

  private finishMatch(winner: 'player' | 'opponent'): void {
    this.matchEnded.set(true);

    const totalTimeSeconds = Math.round((Date.now() - this.matchStartedAt()) / 1000);
    const rarity: ChestRarity = winner === 'player'
      ? (this.player().attempts <= 3 ? 'lendario' : this.player().attempts <= 5 ? 'raro' : 'comum')
      : 'comum';

    this.result.set({ totalTimeSeconds, winner, rewardRarity: rarity });
  }

  resetMatch(): void {
    this.player.update(p => ({ ...p, problemsSolved: 0, attempts: 0, submittedCode: '' }));
    this.opponent.update(o => ({ ...o, problemsSolved: 0 }));
    this.matchStartedAt.set(Date.now());
    this.matchEnded.set(false);
    this.result.set(null);
  }
}