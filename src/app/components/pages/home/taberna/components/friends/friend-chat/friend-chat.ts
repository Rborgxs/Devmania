import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FriendsService } from '../../../../../../../services/friends';

@Component({
  selector: 'app-friend-chat',
  standalone: true,
  imports: [FormsModule],
  host: { id: 'friend-chat' },
  templateUrl: './friend-chat.html',
  styleUrl: './friend-chat.css'
})
export class FriendChat {
  friendsService = inject(FriendsService);

  draft = signal('');
  isGiftPanelOpen = signal(false);

  send(): void {
    this.friendsService.sendMessage(this.draft());
    this.draft.set('');
  }

  shareChallenge(): void {
    this.friendsService.sendMessage('Desafio compartilhado: "A Forja do Ferreiro"', 'desafio');
  }

  shareProject(): void {
    this.friendsService.sendMessage('Projeto compartilhado: "Devmania Landing Page"', 'projeto');
  }

  challenge(): void {
    this.friendsService.challengeFriend();
  }

  toggleGiftPanel(): void {
    this.isGiftPanelOpen.update(v => !v);
  }

  sendGift(itemName: string): void {
    this.friendsService.sendMessage(`🎁 Presente enviado: ${itemName}`, 'texto');
    this.isGiftPanelOpen.set(false);
  }
}