import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BattleStateService } from '../../../../../../services/battle-state';

@Component({
  selector: 'app-tab-mentor-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tab-mentor-chat.html',
  styleUrl: './tab-mentor-chat.css'
})
export class TabMentorChat {
  battleState = inject(BattleStateService);
  draft = signal('');

  sendMessage(): void {
    const text = this.draft().trim();
    if (!text) {
      return;
    }
    this.battleState.addChatMessage({
      id: crypto.randomUUID(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    });
    this.draft.set('');
  }

  buyHint(hintId: string): void {
    this.battleState.unlockHint(hintId);
  }
}