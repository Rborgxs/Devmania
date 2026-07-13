import { Component, inject } from '@angular/core';
import { CommunityService } from '../../../../../../services/community';
import { GuildService } from '../../../../../../services/guild';

@Component({
  selector: 'app-community-panel',
  standalone: true,
  imports: [],
  host: { id: 'community-panel' },
  templateUrl: './community-panel.html',
  styleUrl: './community-panel.css'
})
export class CommunityPanel {
  communityService = inject(CommunityService);
  guildService = inject(GuildService);

  statusIcons: Record<string, string> = {
    'online': '🟢',
    'ausente': '🌙',
    'em-duelo': '⚔️',
    'programando': '💻'
  };

  categoryIcons: Record<string, string> = {
    'evento': '🎉',
    'atualizacao': '🔧',
    'desafio': '⚔️',
    'manutencao': '🛠️'
  };
}