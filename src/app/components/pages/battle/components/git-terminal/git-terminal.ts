import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GitTerminalService } from '../../../../../services/git-terminal';

@Component({
  selector: 'app-git-terminal',
  standalone: true,
  imports: [FormsModule],
  host: { id: 'git-terminal' },
  templateUrl: './git-terminal.html',
  styleUrl: './git-terminal.css'
})
export class GitTerminal {
  terminalService = inject(GitTerminalService);
  draft = signal('');

  runCommand(): void {
    this.terminalService.runCommand(this.draft());
    this.draft.set('');
  }
}