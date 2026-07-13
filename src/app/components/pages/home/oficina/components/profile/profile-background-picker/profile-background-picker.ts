import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../../../../../services/profile';

@Component({
  selector: 'app-profile-background-picker',
  standalone: true,
  imports: [],
  host: { id: 'profile-background-picker' },
  templateUrl: './profile-background-picker.html',
  styleUrl: './profile-background-picker.css'
})
export class ProfileBackgroundPicker {
  profileService = inject(ProfileService);
}