import { Component, inject } from '@angular/core';
import { SettingsService } from '../../../../../../services/settings';
import { AppLanguage } from '../../../../../../models/settings';

@Component({
  selector: 'app-appearance-panel',
  standalone: true,
  imports: [],
  host: { id: 'appearance-panel' },
  templateUrl: './appearance-panel.html',
  styleUrl: './appearance-panel.css'
})
export class AppearancePanel {
  settingsService = inject(SettingsService);

  onLanguageChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value as AppLanguage;
    this.settingsService.updateAppearance('language', value);
  }
}