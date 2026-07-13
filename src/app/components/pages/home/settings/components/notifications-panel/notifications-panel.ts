import { Component, inject } from '@angular/core';
import { SettingsService } from '../../../../../../services/settings';
import { NotificationSettings } from '../../../../../../models/settings';

@Component({
  selector: 'app-notifications-panel',
  standalone: true,
  imports: [],
  host: { id: 'notifications-panel' },
  templateUrl: './notifications-panel.html',
  styleUrl: './notifications-panel.css'
})
export class NotificationsPanel {
  settingsService = inject(SettingsService);

  options: { key: keyof NotificationSettings; label: string }[] = [
    { key: 'newMessages', label: 'Novas Mensagens' },
    { key: 'guildInvites', label: 'Convites para Guildas' },
    { key: 'friendRequests', label: 'Solicitações de Amizade' },
    { key: 'duelInvites', label: 'Convites para Duelo' },
    { key: 'events', label: 'Eventos' },
    { key: 'achievementsUnlocked', label: 'Conquistas Desbloqueadas' },
    { key: 'platformNews', label: 'Notícias da Plataforma' }
  ];
}