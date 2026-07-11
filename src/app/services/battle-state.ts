import { Injectable, signal, computed } from '@angular/core';
import { Challenge, ExecutionLogEntry, FileNode, KnownBug } from '../models/battle';
import { ChatMessage, Hint } from '../models/mentor-chat';

export type InfoTab = 'objetivo' | 'testes' | 'resultados' | 'mentor';

@Injectable({ providedIn: 'root' })
export class BattleStateService {
  activeTab = signal<InfoTab>('objetivo');
  isWeeklyChallenge = signal(false);

  difficulties: import('../models/battle').Difficulty[] = ['facil', 'medio', 'dificil'];
  currentDifficultyIndex = signal(0);

  challenge = signal<Challenge>({
    id: 'q1',
    title: 'O Mensageiro do Rei',
    difficulty: 'facil',
    description: 'O Rei precisa enviar mensagens urgentes ao reino. Crie uma função que formate nomes de forma correta para os pergaminhos reais, capitalizando corretamente cada parte do nome.',
    rules: [
      'A função deve retornar uma string única.',
      'O primeiro nome e o sobrenome devem ser capitalizados.'
    ],
    restrictions: [
      '1 <= firstName.length <= 50',
      '1 <= lastName.length <= 50'
    ],
    examples: [
      { input: 'formatName("arthur", "pendragon")', output: '"Arthur Pendragon"' },
      { input: 'formatName("MERLIN", "AMBROSIUS")', output: '"Merlin Ambrosius"' }
    ],
    gitInstructions: {
      hasExistingRepo: true,
      commands: ['git add .', 'git commit -m "feat: implementa formatName"', 'git push origin main']
    },
    publicTests: [
      { id: 't1', input: 'formatName("arthur", "pendragon")', expectedOutput: '"Arthur Pendragon"' },
      { id: 't2', input: 'formatName("MERLIN", "AMBROSIUS")', expectedOutput: '"Merlin Ambrosius"' },
      { id: 't3', input: 'formatName("lancelot", "du lac")', expectedOutput: '"Lancelot Du Lac"' }
    ],
    functionSignature: 'function formatName(firstName, lastName) {\n\n}'
  });

  allPublicTestsPassed = computed(() =>
    this.challenge().publicTests.every(t => t.passed === true)
  );

  goToPreviousDifficulty(): void {
    this.currentDifficultyIndex.update(i => Math.max(0, i - 1));
  }

  goToNextDifficulty(): void {
    this.currentDifficultyIndex.update(i => Math.min(this.difficulties.length - 1, i + 1));
  }

  executionLog = signal<ExecutionLogEntry[]>([]);

  submitPhase = signal<'idle' | 'processing' | 'victory' | 'reward'>('idle');
  battleStartedAt = signal(Date.now());

  lastRewardSummary = signal<{
    coins: number;
    xp: number;
    totalTimeSeconds: number;
    hintsUsed: number;
    coinsSpentOnHints: number;
  } | null>(null);

  setSubmitPhase(phase: 'idle' | 'processing' | 'victory' | 'reward'): void {
    this.submitPhase.set(phase);
  }

  finalizeReward(): void {
    const elapsedSeconds = Math.round((Date.now() - this.battleStartedAt()) / 1000);
    this.lastRewardSummary.set({
      coins: 50,
      xp: 100,
      totalTimeSeconds: elapsedSeconds,
      hintsUsed: this.hints().filter(h => h.unlocked).length,
      coinsSpentOnHints: this.coinsSpentOnHints()
    });
  }

  mentorMessages = signal<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'mentor',
      text: 'Saudações, aventureiro! Estou aqui para ajudar com dúvidas sobre as ferramentas. Precisa de uma dica? Elas custam moedas.',
      timestamp: '09:00'
    }
  ]);

  hints = signal<Hint[]>([
    { id: 'h1', label: 'Dica sobre capitalização de strings', cost: 20, unlocked: false },
    { id: 'h2', label: 'Dica sobre concatenação', cost: 30, unlocked: false }
  ]);

  coinsSpentOnHints = signal(0);

  setActiveTab(tab: InfoTab): void {
    this.activeTab.set(tab);
  }

  addChatMessage(message: ChatMessage): void {
    this.mentorMessages.update(msgs => [...msgs, message]);
  }

  unlockHint(hintId: string): void {
    const hint = this.hints().find(h => h.id === hintId);
    if (!hint || hint.unlocked) {
      return;
    }
    this.hints.update(hints => hints.map(h => h.id === hintId ? { ...h, unlocked: true } : h));
    this.coinsSpentOnHints.update(v => v + hint.cost);
  }

  currentCode = signal(this.challenge().functionSignature);

  resetCode(): void {
    this.currentCode.set(this.challenge().functionSignature);
  }

  updateCode(code: string): void {
    this.currentCode.set(code);
  }

  fileTree = signal<FileNode[]>([
    {
      id: 'src',
      name: 'src',
      type: 'folder',
      children: [
        {
          id: 'components',
          name: 'components',
          type: 'folder',
          children: [
            { id: 'gate.js', name: 'gate-controller.js', type: 'file' },
            { id: 'guard.js', name: 'guard-patrol.js', type: 'file' }
          ]
        },
        { id: 'main.js', name: 'main.js', type: 'file' },
        { id: 'utils.js', name: 'utils.js', type: 'file' }
      ]
    },
    { id: 'readme', name: 'README.md', type: 'file' }
  ]);

  knownBugs = signal<KnownBug[]>([
    { id: 'b1', description: 'Portão principal não fecha após alarme disparado', resolved: false },
    { id: 'b2', description: 'Patrulha dos guardas trava em loop infinito', resolved: false },
    { id: 'b3', description: 'Contagem de progresso da fortaleza está incorreta', resolved: false },
    { id: 'b4', description: 'Função utilitária de log não grava horário', resolved: false },
    { id: 'b5', description: 'Validação de acesso aceita credenciais vazias', resolved: false }
  ]);

  bugsResolvedCount = computed(() => this.knownBugs().filter(b => b.resolved).length);

  markNextBugResolved(): void {
    const bugs = this.knownBugs();
    const nextIndex = bugs.findIndex(b => !b.resolved);
    if (nextIndex === -1) {
      return;
    }
    this.knownBugs.update(current =>
      current.map((b, i) => i === nextIndex ? { ...b, resolved: true } : b)
    );
  }
}