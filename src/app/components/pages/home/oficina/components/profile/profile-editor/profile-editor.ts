import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../../../../../../services/profile';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [FormsModule],
  host: { id: 'profile-editor' },
  templateUrl: './profile-editor.html',
  styleUrl: './profile-editor.css'
})
export class ProfileEditor {
  profileService = inject(ProfileService);

  usernameDraft = signal('');
  usernameError = signal(false);

  onDisplayNameChange(event: Event): void {
    this.profileService.updateDisplayName((event.target as HTMLInputElement).value);
  }

  onBioChange(event: Event): void {
    this.profileService.updateBio((event.target as HTMLTextAreaElement).value);
  }

  openUsernameModal(): void {
    this.usernameDraft.set(this.profileService.profile().username);
    this.profileService.openUsernameModal();
  }

  confirmUsernameChange(): void {
    const success = this.profileService.confirmUsernameChange(this.usernameDraft());
    this.usernameError.set(!success);
  }
}