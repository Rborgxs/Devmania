import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SettingsService } from '../../../../../../services/settings';

@Component({
  selector: 'app-security-panel',
  standalone: true,
  imports: [FormsModule],
  host: { id: 'security-panel' },
  templateUrl: './security-panel.html',
  styleUrl: './security-panel.css'
})
export class SecurityPanel {
  settingsService = inject(SettingsService);

  currentPassword = signal('');
  newEmailDraft = signal('');

  strengthLabels: Record<string, string> = {
    'fraca': 'Fraca',
    'media': 'Média',
    'forte': 'Forte',
    'muito-forte': 'Muito Forte'
  };

  submitPasswordChange(): void {
    this.settingsService.changePassword(this.currentPassword(), this.settingsService.newPasswordDraft());
    this.currentPassword.set('');
  }

  submitEmailChange(): void {
    this.settingsService.requestEmailChange(this.newEmailDraft());
    this.newEmailDraft.set('');
  }
}