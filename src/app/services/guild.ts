import { Injectable, signal } from '@angular/core';
import { Guild, GuildChatMessage, DuelModeOption, GuildEvent } from '../models/guild';

@Injectable({ providedIn: 'root' })
export class GuildService {
  searchTerm = signal('');

  allGuilds = signal<Guild[]>([
    {
      id: 'g1',
      name: 'Ordem do Código Sagrado',
      emblem: '/assets/icons/guild/emblem1.png',
      memberCount: 24,
      eloName: 'Veterano',
      members: [
        { id: 'u1', name: 'Aldric_dev', avatar: '/assets/avatars/avatar1.png', eloName: 'Arquimago', isOnline: true },
        { id: 'u2', name: 'Morwenna', avatar: '/assets/avatars/avatar2.png', eloName: 'Cavaleiro', isOnline: true },
        { id: 'u3', name: 'Draven', avatar: '/assets/avatars/default.png', eloName: 'Guardião', isOnline: false }
      ]
    },
    {
      id: 'g2',
      name: 'Guilda dos Bugs Caçados',
      emblem: '/assets/icons/guild/emblem2.png',
      memberCount: 12,
      eloName: 'Guerreiro',
      members: [
        { id: 'u4', name: 'Serafina', avatar: '/assets/avatars/avatar2.png', eloName: 'Sentinela', isOnline: true }
      ]
    }
  ]);

  selectedGuild = signal<Guild | null>(null);

  guildMessages = signal<GuildChatMessage[]>([
    { id: 'gm1', authorName: 'Aldric_dev', authorAvatar: '/assets/avatars/avatar1.png', text: 'Bora treinar pro evento da semana?', timestamp: '10:15' }
  ]);

  duelModes: DuelModeOption[] = [
    { id: 'rapido', icon: '⚔️', name: 'Duelo Rápido', description: 'Desafia um membro aleatório da guilda.' },
    { id: 'rei-da-guilda', icon: '👑', name: 'Rei da Guilda', description: 'Convoca um torneio que aceita quantidades pares de membros.' },
    { id: 'melhor-de-5', icon: '🎯', name: 'Melhor de 5', description: 'Partida em melhor de cinco.' }
  ];

  events = signal<GuildEvent[]>([
    {
      id: 'e1',
      name: 'Guerra das Guildas',
      image: '/assets/events/guild-war.png',
      description: 'Guildas disputam território para ganhar ouro, XP e itens.',
      timeRemaining: '2d 14h',
      rewards: 'Ouro, XP, Itens raros',
      participantCount: 340
    },
    {
      id: 'e2',
      name: 'O Inverno Está Chegando',
      image: '/assets/events/winter-event.png',
      description: 'O Reino da IA está avançando sobre o continente dos desenvolvedores. Una sua guilda para defender o conhecimento humano antes que todo o código seja automatizado.',
      timeRemaining: '5d 02h',
      rewards: 'Insígnia Especial, Título Exclusivo',
      participantCount: 892
    },
    {
      id: 'e3',
      name: 'Torneio dos Mestres',
      image: '/assets/events/masters-tournament.png',
      description: 'Competição semanal de desafios de programação.',
      timeRemaining: '1d 08h',
      rewards: 'Moedas, XP em dobro',
      participantCount: 156
    },
    {
      id: 'e4',
      name: 'Caçada aos Bugs',
      image: '/assets/events/bug-hunt.png',
      description: 'Evento cooperativo onde os jogadores eliminam bugs espalhados pelo reino.',
      timeRemaining: '3d 20h',
      rewards: 'Insígnias, Moedas',
      participantCount: 421
    }
  ]);

  selectGuild(guild: Guild): void {
    this.selectedGuild.set(guild);
  }

  leaveGuildView(): void {
    this.selectedGuild.set(null);
  }

  sendGuildMessage(text: string): void {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }
    this.guildMessages.update(msgs => [
      ...msgs,
      {
        id: crypto.randomUUID(),
        authorName: 'Você',
        authorAvatar: '/assets/avatars/default.png',
        text: trimmed,
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }

  challengeMember(memberId: string, modeId: string): void {
    console.log('desafio enviado', memberId, modeId);
  }
}