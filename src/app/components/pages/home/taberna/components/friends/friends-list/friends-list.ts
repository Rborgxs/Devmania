import { Component, inject } from '@angular/core';
import { FriendsService } from '../../../../../../../services/friends';
import { FriendStatus } from '../../../../../../../models/friend';

@Component({
  selector: 'app-friends-list',
  standalone: true,
  imports: [],
  host: { id: 'friends-list' },
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css'
})
export class FriendsList {
  friendsService = inject(FriendsService);

  statusLabels: Record<FriendStatus, string> = {
    'online': '🟢 Online',
    'ausente': '🌙 Ausente',
    'em-duelo': '⚔️ Em duelo',
    'programando': '💻 Programando'
  };

  onSearchInput(event: Event): void {
    this.friendsService.searchTerm.set((event.target as HTMLInputElement).value);
  }
}