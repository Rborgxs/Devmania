import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../../../../../services/profile';

@Component({
  selector: 'app-profile-stats',
  standalone: true,
  imports: [],
  host: { id: 'profile-stats' },
  templateUrl: './profile-stats.html',
  styleUrl: './profile-stats.css'
})
export class ProfileStatsComponent {
  profileService = inject(ProfileService);
}