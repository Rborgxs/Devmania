import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TerminalService } from '../../../../../services/terminal';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [FormsModule],
  host: { id: 'terminal' },
  templateUrl: './terminal.html',
  styleUrl: './terminal.css'
})
export class Terminal {
  terminalService = inject(TerminalService);
  draft = signal('');

  runCommand(): void {
    this.terminalService.runCommand(this.draft());
    this.draft.set('');
  }
}
