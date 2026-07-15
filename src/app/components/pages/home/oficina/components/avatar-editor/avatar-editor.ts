import { Component, signal } from '@angular/core';
import { AvatarPreview } from './avatar-preview/avatar-preview';
import { AppearanceOptions } from './appearance-options/appearance-options';
import { StreakCalendar } from '../profile/streak-calendar/streak-calendar';
import { WeeklyXpChart } from '../profile/weekly-xp-chart/weekly-xp-chart';

@Component({
  selector: 'app-avatar-editor',
  standalone: true,
  imports: [AvatarPreview, AppearanceOptions, StreakCalendar, WeeklyXpChart],
  host: { id: 'avatar-editor' },
  templateUrl: './avatar-editor.html',
  styleUrl: './avatar-editor.css'
})
export class AvatarEditor {
  readonly customizeModalOpen = signal(false);

  openCustomize(): void {
    this.customizeModalOpen.set(true);
  }

  closeCustomize(): void {
    this.customizeModalOpen.set(false);
  }
}