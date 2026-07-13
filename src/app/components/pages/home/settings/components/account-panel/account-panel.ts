import { Component, inject } from '@angular/core';
import { SettingsService } from '../../../../../../services/settings';
import { LinkedProvider } from '../../../../../../models/settings';

@Component({
  selector: 'app-account-panel',
  standalone: true,
  imports: [],
  host: { id: 'account-panel' },
  templateUrl: './account-panel.html',
  styleUrl: './account-panel.css'
})
export class AccountPanel {
  settingsService = inject(SettingsService);

  providerIcons: Record<LinkedProvider, string> = {
    google: '/assets/icons/settings/google.png',
    github: '/assets/icons/settings/github.png'
  };
}