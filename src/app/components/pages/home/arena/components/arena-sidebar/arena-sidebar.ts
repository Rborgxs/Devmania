import { Component, inject, computed } from '@angular/core';
import { FriendsService } from '../../../../../../services/friends';

@Component({
  selector: 'app-arena-sidebar',
  standalone: true,
  imports: [],
  host: { id: 'arena-sidebar' },
  templateUrl: './arena-sidebar.html',
  styleUrl: './arena-sidebar.css'
})
export class ArenaSidebar {
  private readonly friendsService = inject(FriendsService);

  onlineFriends = computed(() =>
    this.friendsService.friends().filter(f => f.status === 'online' || f.status === 'em-duelo')
  );

  openTournaments(): void {
    console.log('abrir torneios');
  }

  openGuildTournament(): void {
    console.log('abrir torneio de guildas');
  }

  openFriends(): void {
    console.log('abrir amigos');
  }
}