import { Component, inject } from '@angular/core';
import { ProfileService } from '../../../../../../../services/profile';
import { AvatarService } from '../../../../../../../services/avatar';
import { OficinaStateService } from '../../../../../../../services/oficina-state';

@Component({
  selector: 'app-profile-avatar-card',
  standalone: true,
  imports: [],
  host: { id: 'profile-avatar-card' },
  templateUrl: './profile-avatar-card.html',
  styleUrl: './profile-avatar-card.css'
})
export class ProfileAvatarCard {
  profileService = inject(ProfileService);
  avatarService = inject(AvatarService);
  private readonly oficinaState = inject(OficinaStateService);

  goToAvatarTab(): void {
    this.oficinaState.setActiveTab('avatar');
  }
}
