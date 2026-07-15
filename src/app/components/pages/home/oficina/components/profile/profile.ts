import { Component } from '@angular/core';
import { ProfileAvatarCard } from './profile-avatar-card/profile-avatar-card';
import { ProfileEditor } from './profile-editor/profile-editor';
import { ProfileStats } from './profile-stats/profile-stats';
import { ProfileEloList } from './profile-elo-list/profile-elo-list';
import { AchievementsPanel } from './achievements-panel/achievements-panel';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ProfileAvatarCard,
    ProfileEditor,
    ProfileStats,
    ProfileEloList,
    AchievementsPanel
  ],
  host: { id: 'profile' },
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {}