import { Injectable, signal, inject } from '@angular/core';
import { TerminalLine } from '../models/terminal';
import { BattleStateService } from './battle-state';

@Injectable({ providedIn: 'root' })
export class TerminalService {
  private readonly battleState = inject(BattleStateService);

  lines = signal<TerminalLine[]>([
    { id: crypto.randomUUID(), type: 'output', text: 'Repositório inicializado. Branch: main' }
  ]);

  private readonly responses: Record<string, string> = {
    'git status': 'On branch main\nnothing to commit, working tree clean',
    'git log': 'commit a1b2c3d\nAuthor: aventureiro\nDate: hoje\n\n  feat: implementa formatName',
    'git push': 'Enumerating objects: 3, done.\nTo origin/main\n  a1b2c3d..e4f5g6h  main -> main',
    'git pull': 'Already up to date.',
    'git add .': '',
    'git commit -m': 'Validando alterações...'
  };

  runCommand(input: string): void {
    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }

    this.lines.update(lines => [...lines, { id: crypto.randomUUID(), type: 'command', text: trimmed }]);

    const matchedKey = Object.keys(this.responses).find(cmd => trimmed.startsWith(cmd));
    const output = matchedKey ? this.responses[matchedKey] : `Comando não reconhecido: ${trimmed}`;

    if (output) {
      this.lines.update(lines => [...lines, { id: crypto.randomUUID(), type: 'output', text: output }]);
    }

    if (matchedKey === 'git commit -m' && this.battleState.isWeeklyChallenge()) {
      this.battleState.markNextBugResolved();
      this.lines.update(lines => [
        ...lines,
        { id: crypto.randomUUID(), type: 'output', text: '✔ Validação automática concluída — 1 bug corrigido!' }
      ]);
    }
  }
}
