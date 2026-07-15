import { Component, signal, effect, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BattleStateService } from '../../../../../services/battle-state';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [FormsModule],
  host: { id: 'code-editor' },
  templateUrl: './code-editor.html',
  styleUrl: './code-editor.css'
})
export class CodeEditor implements OnDestroy {
  battleState = inject(BattleStateService);

  isMaximized = signal(false);

  /**
   * Buffer local que a textarea edita diretamente com two-way binding.
   *
   * A propagação para o BattleStateService acontece com debounce de 500ms
   * (não a cada tecla), evitando re-renders desnecessários.
   */
  localCode = '';
  private lastChallengeId = '';
  private syncTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    // Carrega o código inicial só quando o desafio muda (troca de dificuldade),
    // nunca a cada keystroke.
    effect(() => {
      const challengeId = this.battleState.challenge().id;
      if (challengeId !== this.lastChallengeId) {
        this.localCode = this.battleState.challenge().functionSignature;
        this.lastChallengeId = challengeId;
        // Sincroniza imediatamente com o serviço quando o desafio muda
        this.battleState.updateCode(this.localCode);
      }
    });
  }

  onCodeChange(newCode: string): void {
    this.localCode = newCode;
    if (this.syncTimer !== null) {
      clearTimeout(this.syncTimer);
    }
    this.syncTimer = setTimeout(() => {
      this.battleState.updateCode(this.localCode);
      this.syncTimer = null;
    }, 500);
  }

  copyCode(): void {
    navigator.clipboard.writeText(this.localCode);
  }

  toggleMaximize(): void {
    this.isMaximized.update(v => !v);
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

  restoreCode(): void {
    this.battleState.resetCode();
    this.localCode = this.battleState.challenge().functionSignature;
  }

  ngOnDestroy(): void {
    if (this.syncTimer !== null) {
      clearTimeout(this.syncTimer);
      // Envia a última versão antes de destruir
      this.battleState.updateCode(this.localCode);
    }
  }
}
