import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../../../../../services/profile';

@Component({
  selector: 'app-streak-calendar',
  standalone: true,
  imports: [],
  host: { id: 'streak-calendar' },
  templateUrl: './streak-calendar.html',
  styleUrl: './streak-calendar.css'
})
export class StreakCalendar {
  profileService = inject(ProfileService);

  stateIcons: Record<string, string> = {
    'nao-estudou': '⚪',
    'estudou': '🟢',
    'sequencia-ativa': '🔥',
    'meta-concluida': '⭐'
  };
}