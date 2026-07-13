import { Component, inject, output } from '@angular/core';
import { GuildService } from '../../../../../../../services/guild';

@Component({
  selector: 'app-guild-events-modal',
  standalone: true,
  imports: [],
  host: { id: 'guild-events-modal' },
  templateUrl: './guild-events-modal.html',
  styleUrl: './guild-events-modal.css'
})
export class GuildEventsModal {
  guildService = inject(GuildService);
  close = output<void>();

  joinEvent(eventId: string): void {
    console.log('participando do evento', eventId);
  }
}