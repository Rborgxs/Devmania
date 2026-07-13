import { Component, inject } from '@angular/core';
import { GuildService } from '../../../../../../services/guild';
import { GuildSearch } from './guild-search/guild-search';
import { GuildDetail } from './guild-detail/guild-detail';

@Component({
  selector: 'app-guilds',
  standalone: true,
  imports: [GuildSearch, GuildDetail],
  host: { id: 'guilds' },
  templateUrl: './guilds.html',
  styleUrl: './guilds.css'
})
export class Guilds {
  guildService = inject(GuildService);
}