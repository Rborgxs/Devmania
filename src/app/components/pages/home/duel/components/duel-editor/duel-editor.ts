import { Component, inject, signal, computed, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DuelStateService } from '../../../../../../services/duel-state';

interface ConsoleEntry {
  id: string;
  success: boolean;
  message: string;
}

@Component({
  selector: 'app-duel-editor',
  standalone: true,
  imports: [FormsModule],
  host: { id: 'duel-editor' },
  templateUrl: './duel-editor.html',
  styleUrl: './duel-editor.css'
})
export class DuelEditor {
  duelState = inject(DuelStateService);

  currentProblem = computed(() => this.duelState.problems()[this.duelState.player().problemsSolved]);

  /**
   * Buffer local editado pela textarea.
   * Reset SÓ quando o problema muda de ID (troca de desafio),
   * nunca a cada keystroke — evita perda de caret.
   */
  localCode = '';
  private lastProblemId: string | null = null;

  consoleEntries = signal<ConsoleEntry[]>([]);

  constructor() {
    effect(() => {
      const problem = this.currentProblem();
      const newId = problem?.id ?? null;
      if (newId !== this.lastProblemId) {
        this.localCode = problem ? problem.functionSignature : '';
        this.lastProblemId = newId;
      }
    });
  }

  onCodeChange(newCode: string): void {
    this.localCode = newCode;
  }

  onTab(event: Event): void {
    event.preventDefault();
    const textarea = event.target as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    this.localCode = this.localCode.slice(0, start) + '  ' + this.localCode.slice(end);
    queueMicrotask(() => {
      textarea.selectionStart = textarea.selectionEnd = start + 2;
    });
  }

  submitSolution(): void {
    if (this.duelState.matchEnded() || !this.currentProblem()) {
      return;
    }

    const success = this.localCode.trim().length > 10;

    this.consoleEntries.update(entries => [
      ...entries,
      {
        id: crypto.randomUUID(),
        success,
        message: success ? 'Solução aceita! Problema resolvido.' : 'Solução incorreta. Revise sua lógica.'
      }
    ]);

    if (success) {
      this.duelState.playerSolveProblem();
    } else {
      this.duelState.playerFailedAttempt();
    }
  }
}
