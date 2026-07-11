import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { BattleStateService } from '../../../../../services/battle-state';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [FormsModule, MonacoEditorModule],
  host: { id: 'code-editor' },
  templateUrl: './code-editor.html',
  styleUrl: './code-editor.css'
})
export class CodeEditor {
  battleState = inject(BattleStateService);
  private readonly platformId = inject(PLATFORM_ID);

  isBrowser = isPlatformBrowser(this.platformId);
  isMaximized = signal(false);

  editorOptions = {
    theme: 'vs-dark',
    language: 'javascript',
    minimap: { enabled: false },
    fontSize: 14,
    lineNumbers: 'on',
    automaticLayout: true,
    scrollBeyondLastLine: false
  };

  copyCode(): void {
    if (this.isBrowser) {
      navigator.clipboard.writeText(this.battleState.currentCode());
    }
  }

  toggleMaximize(): void {
    this.isMaximized.update(v => !v);
  }

  restoreCode(): void {
    this.battleState.resetCode();
  }
}