import { Component, inject } from '@angular/core';
import { SettingsService } from '../../../../../../services/settings';
import { PrivacySettings } from '../../../../../../models/settings';

@Component({
  selector: 'app-privacy-panel',
  standalone: true,
  imports: [],
  host: { id: 'privacy-panel' },
  templateUrl: './privacy-panel.html',
  styleUrl: './privacy-panel.css'
})
export class PrivacyPanel {
  settingsService = inject(SettingsService);

  options: { key: keyof PrivacySettings; label: string; description: string }[] = [
    { key: 'publicProfile', label: 'Perfil Público', description: 'Outros jogadores podem visualizar seu perfil.' },
    { key: 'allowFriendRequests', label: 'Permitir Solicitações de Amizade', description: 'Receba pedidos de novos aventureiros.' },
    { key: 'allowGuildInvites', label: 'Permitir Convites para Guildas', description: 'Guildas podem te convidar para se juntar.' },
    { key: 'allowChallenges', label: 'Permitir Desafios', description: 'Outros jogadores podem te desafiar para duelos.' }
  ];
}