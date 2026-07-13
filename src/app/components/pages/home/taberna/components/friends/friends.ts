import { Component, inject } from '@angular/core';
import { FriendsService } from '../../../../../../services/friends';
import { FriendsList } from './friends-list/friends-list';
import { FriendChat } from './friend-chat/friend-chat';

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [FriendsList, FriendChat],
  host: { id: 'friends' },
  templateUrl: './friends.html',
  styleUrl: './friends.css'
})
export class Friends {
  friendsService = inject(FriendsService);
}