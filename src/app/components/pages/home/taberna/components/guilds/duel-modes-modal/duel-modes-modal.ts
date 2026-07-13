import { Component, output } from '@angular/core';
import { DuelModeOption } from '../../../../../../../models/guild';

@Component({
  selector: 'app-duel-modes-modal',
  standalone: true,
  imports: [],
  host: { id: 'duel-modes-modal' },
  templateUrl: './duel-modes-modal.html',
  styleUrl: './duel-modes-modal.css'
})
export class DuelModesModal {
  close = output<void>();
  select = output<DuelModeOption>();

  modes: DuelModeOption[] = [
    { id: 'rapido', icon: '⚔️', name: 'Duelo Rápido', description: 'Desafia um membro aleatório da guilda.' },
    { id: 'rei-da-guilda', icon: '👑', name: 'Rei da Guilda', description: 'Convoca um torneio que aceita quantidades pares de membros.' },
    { id: 'melhor-de-5', icon: '🎯', name: 'Melhor de 5', description: 'Partida em melhor de cinco.' }
  ];
}