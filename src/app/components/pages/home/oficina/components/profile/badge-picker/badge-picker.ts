import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../../../../../services/profile';

@Component({
  selector: 'app-badge-picker',
  standalone: true,
  imports: [],
  host: { id: 'badge-picker' },
  templateUrl: './badge-picker.html',
  styleUrl: './badge-picker.css'
})
export class BadgePicker {
  profileService = inject(ProfileService);
}