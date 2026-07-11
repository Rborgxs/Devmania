import { Component, inject, computed, signal } from '@angular/core';
import { EloService } from '../../../../../../services/elo';
import { BattleMode } from '../../../../../../models/elo';
import { EloProgressBar } from '../elo-progress-bar/elo-progress-bar';

@Component({
  selector: 'app-arena-sidebar',
  standalone: true,
  imports: [EloProgressBar],
  host: { id: 'arena-sidebar' },
  templateUrl: './arena-sidebar.html',
  styleUrl: './arena-sidebar.css'
})
export class ArenaSidebar {
  eloService = inject(EloService);

  selectedMode = signal<BattleMode>('feat');

  modeOptions: { value: BattleMode; label: string }[] = [
    { value: 'feat', label: 'Feat' },
    { value: 'fix', label: 'Fix' },
    { value: 'style', label: 'Style' }
  ];

  progress = computed(() => this.eloService.getProgress(this.selectedMode()));

  onModeChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value as BattleMode;
    this.selectedMode.set(value);
  }

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