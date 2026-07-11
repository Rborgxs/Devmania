import { Component, inject, signal, computed, effect, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { DuelStateService } from '../../../../../../services/duel-state';

interface ConsoleEntry {
  id: string;
  success: boolean;
  message: string;
}

@Component({
  selector: 'app-duel-editor',
  standalone: true,
  imports: [FormsModule, MonacoEditorModule],
  host: { id: 'duel-editor' },
  templateUrl: './duel-editor.html',
  styleUrl: './duel-editor.css'
})
export class DuelEditor {
  duelState = inject(DuelStateService);
  private readonly platformId = inject(PLATFORM_ID);

  isBrowser = isPlatformBrowser(this.platformId);

  currentProblem = computed(() => this.duelState.problems()[this.duelState.player().problemsSolved]);
  code = signal('');
  consoleEntries = signal<ConsoleEntry[]>([]);

  editorOptions = {
    theme: 'vs-dark',
    language: 'javascript',
    minimap: { enabled: false },
    fontSize: 14,
    lineNumbers: 'on',
    automaticLayout: true,
    scrollBeyondLastLine: false
  };

  constructor() {
    effect(() => {
      const problem = this.currentProblem();
      this.code.set(problem ? problem.functionSignature : '');
    });
  }

  submitSolution(): void {
    if (this.duelState.matchEnded() || !this.currentProblem()) {
      return;
    }

    const success = this.code().trim().length > 10;

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