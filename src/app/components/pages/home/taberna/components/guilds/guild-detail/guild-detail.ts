import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GuildService } from '../../../../../../../services/guild';
import { DuelModesModal } from '../duel-modes-modal/duel-modes-modal';
import { GuildEventsModal } from '../guild-events-modal/guild-events-modal';
import { DuelModeOption } from '../../../../../../../models/guild';

@Component({
  selector: 'app-guild-detail',
  standalone: true,
  imports: [FormsModule, DuelModesModal, GuildEventsModal],
  host: { id: 'guild-detail' },
  templateUrl: './guild-detail.html',
  styleUrl: './guild-detail.css'
})
export class GuildDetail {
  guildService = inject(GuildService);

  isDuelModalOpen = signal(false);
  isEventsModalOpen = signal(false);
  selectedDuelMode = signal<DuelModeOption | null>(null);
  draft = signal('');

  send(): void {
    this.guildService.sendGuildMessage(this.draft());
    this.draft.set('');
  }

  onDuelModeSelected(mode: DuelModeOption): void {
    this.selectedDuelMode.set(mode);
    this.isDuelModalOpen.set(false);
  }

  challengeMember(memberId: string): void {
    const mode = this.selectedDuelMode();
    if (mode) {
      this.guildService.challengeMember(memberId, mode.id);
    }
  }
}