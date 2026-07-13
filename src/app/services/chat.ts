import { Injectable, signal, inject, computed } from '@angular/core';
import { Channel, ChatMessage } from '../models/channel';
import { EloService } from './elo';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly eloService = inject(EloService);

  channels = signal<Channel[]>([
    { id: 'geral', name: 'Geral', icon: '💬' },
    { id: 'noticias', name: 'Notícias', icon: '📰' },
    { id: 'ia', name: 'IA', icon: '🤖' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'duvidas', name: 'Dúvidas', icon: '❓' },
    { id: 'projetos', name: 'Projetos', icon: '🏗️' },
    { id: 'freelancer', name: 'Freelancer', icon: '💰' }
  ]);

  activeChannelId = signal('geral');

  activeChannel = computed(() =>
    this.channels().find(c => c.id === this.activeChannelId())
  );

  messagesByChannel = signal<Record<string, ChatMessage[]>>({
    geral: [
      {
        id: 'msg1',
        channelId: 'geral',
        authorName: 'Aldric_dev',
        authorAvatar: '/assets/avatars/avatar1.png',
        authorEloName: 'Arquimago',
        text: 'Alguém mais treinando pra Arena hoje?',
        timestamp: '14:32'
      },
      {
        id: 'msg2',
        channelId: 'geral',
        authorName: 'Morwenna',
        authorAvatar: '/assets/avatars/avatar2.png',
        authorEloName: 'Cavaleiro',
        text: 'Eu! Acabei de subir pro elo Cavaleiro 🎉',
        timestamp: '14:35'
      }
    ]
  });

  currentMessages = computed(() => this.messagesByChannel()[this.activeChannelId()] ?? []);

  selectChannel(channelId: string): void {
    this.activeChannelId.set(channelId);
  }

  sendMessage(text: string): void {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    const channelId = this.activeChannelId();

    const newMessage: ChatMessage = {
      id: crypto.randomUUID(),
      channelId,
      authorName: 'Você',
      authorAvatar: '/assets/avatars/default.png',
      authorEloName: 'Iniciante',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    this.messagesByChannel.update(current => ({
      ...current,
      [channelId]: [...(current[channelId] ?? []), newMessage]
    }));
  }
}