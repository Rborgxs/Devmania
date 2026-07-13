import { Component, inject } from '@angular/core';
import { AchievementService } from '../../../../../../../services/achievement';

@Component({
  selector: 'app-achievements-panel',
  standalone: true,
  imports: [],
  host: { id: 'achievements-panel' },
  templateUrl: './achievements-panel.html',
  styleUrl: './achievements-panel.css'
})
export class AchievementsPanel {
  achievementService = inject(AchievementService);
}