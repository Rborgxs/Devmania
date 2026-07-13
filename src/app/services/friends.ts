import { Injectable, signal, computed } from '@angular/core';
import { Friend, FriendMessage, GiftItem } from '../models/friend';

@Injectable({ providedIn: 'root' })
export class FriendsService {
  searchTerm = signal('');

  friends = signal<Friend[]>([
    { id: 'f1', name: 'Aldric_dev', avatar: '/assets/avatars/avatar1.png', role: 'Arquimago', status: 'online' },
    { id: 'f2', name: 'Morwenna', avatar: '/assets/avatars/avatar2.png', role: 'Cavaleiro', status: 'em-duelo' },
    { id: 'f3', name: 'Draven', avatar: '/assets/avatars/default.png', role: 'Guardião', status: 'programando' },
    { id: 'f4', name: 'Serafina', avatar: '/assets/avatars/avatar2.png', role: 'Sentinela', status: 'ausente' }
  ]);

  selectedFriend = signal<Friend | null>(null);

  messagesByFriend = signal<Record<string, FriendMessage[]>>({
    f1: [
      { id: 'fm1', friendId: 'f1', sender: 'friend', type: 'texto', text: 'E aí, bora duelar mais tarde?', timestamp: '13:20' }
    ]
  });

  giftItems = signal<GiftItem[]>([
    { id: 'gift1', name: '50 Moedas', icon: '/assets/icons/header/coin.png' },
    { id: 'gift2', name: 'Poção de XP', icon: '/assets/icons/gift/xp-potion.png' },
    { id: 'gift3', name: 'Pergaminho Raro', icon: '/assets/icons/gift/scroll.png' }
  ]);

  filteredFriends = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) {
      return this.friends();
    }
    return this.friends().filter(f => f.name.toLowerCase().includes(term));
  });

  currentMessages = computed(() => {
    const friend = this.selectedFriend();
    if (!friend) {
      return [];
    }
    return this.messagesByFriend()[friend.id] ?? [];
  });

  selectFriend(friend: Friend): void {
    this.selectedFriend.set(friend);
  }

  closeConversation(): void {
    this.selectedFriend.set(null);
  }

  sendMessage(text: string, type: FriendMessage['type'] = 'texto'): void {
    const friend = this.selectedFriend();
    if (!friend) {
      return;
    }
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    const newMessage: FriendMessage = {
      id: crypto.randomUUID(),
      friendId: friend.id,
      sender: 'user',
      type,
      text: trimmed,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    this.messagesByFriend.update(current => ({
      ...current,
      [friend.id]: [...(current[friend.id] ?? []), newMessage]
    }));
  }

  challengeFriend(): void {
    const friend = this.selectedFriend();
    if (friend) {
      console.log('desafio enviado pra', friend.name);
    }
  }

  addFriend(): void {
    console.log('abrir adicionar amigo');
  }
}