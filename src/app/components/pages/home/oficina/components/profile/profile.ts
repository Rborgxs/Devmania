import { Component } from '@angular/core';
import { ProfileEditor } from './profile-editor/profile-editor';
import { BadgePicker } from './badge-picker/badge-picker';
import { ProfileBackgroundPicker } from './profile-background-picker/profile-background-picker';
import { ProfileStatsComponent } from './profile-stats/profile-stats';
import { WeeklyXpChart } from './weekly-xp-chart/weekly-xp-chart';
import { StreakCalendar } from './streak-calendar/streak-calendar';
import { AchievementsPanel } from './achievements-panel/achievements-panel';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProfileEditor,
    BadgePicker,
    ProfileBackgroundPicker,
    ProfileStatsComponent,
    WeeklyXpChart,
    StreakCalendar,
    AchievementsPanel
  ],
  host: { id: 'profile' },
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {}