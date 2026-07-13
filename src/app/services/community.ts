import { Injectable, signal } from '@angular/core';
import { OnlinePlayer, RankingEntry, RealmAnnouncement } from '../models/community';

@Injectable({ providedIn: 'root' })
export class CommunityService {
  onlinePlayers = signal<OnlinePlayer[]>([
    { id: 'op1', name: 'Aldric_dev', avatar: '/assets/avatars/avatar1.png', role: 'Arquimago', level: 42, status: 'online' },
    { id: 'op2', name: 'Serafina', avatar: '/assets/avatars/avatar2.png', role: 'Sentinela', level: 28, status: 'programando' },
    { id: 'op3', name: 'Draven', avatar: '/assets/avatars/default.png', role: 'Guardião', level: 35, status: 'em-duelo' },
    { id: 'op4', name: 'Morwenna', avatar: '/assets/avatars/avatar2.png', role: 'Cavaleiro', level: 19, status: 'online' }
  ]);

  ranking = signal<RankingEntry[]>([
    { position: 1, medal: '🥇', playerName: 'Aldric_dev', title: 'Mestre do Código' },
    { position: 2, medal: '🥈', playerName: 'Serafina', title: 'Senhor dos Bugs' },
    { position: 3, medal: '🥉', playerName: 'Draven', title: 'Arquiteto Supremo' },
    { position: 4, medal: '4º', playerName: 'Morwenna', title: 'Guardiã do Loop' },
    { position: 5, medal: '5º', playerName: 'Theron', title: 'Domador de Bugs' }
  ]);

  announcements = signal<RealmAnnouncement[]>([
    { id: 'a1', category: 'evento', text: 'Novo evento "O Inverno Está Chegando" já disponível!' },
    { id: 'a2', category: 'atualizacao', text: 'Atualização 2.4: melhorias no sistema de elos.' },
    { id: 'a3', category: 'desafio', text: 'Novos desafios semanais liberados na Masmorra.' },
    { id: 'a4', category: 'manutencao', text: 'Manutenção programada para domingo às 03h.' }
  ]);
}