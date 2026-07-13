import { Component, inject, computed } from '@angular/core';
import { GuildService } from '../../../../../../../services/guild';

@Component({
  selector: 'app-guild-search',
  standalone: true,
  imports: [],
  host: { id: 'guild-search' },
  templateUrl: './guild-search.html',
  styleUrl: './guild-search.css'
})
export class GuildSearch {
  guildService = inject(GuildService);

  results = computed(() => {
    const term = this.guildService.searchTerm().toLowerCase().trim();
    if (!term) {
      return this.guildService.allGuilds();
    }
    return this.guildService.allGuilds().filter(g => g.name.toLowerCase().includes(term));
  });

  onSearchInput(event: Event): void {
    this.guildService.searchTerm.set((event.target as HTMLInputElement).value);
  }

  createGuild(): void {
    console.log('abrir criação de guilda');
  }
}