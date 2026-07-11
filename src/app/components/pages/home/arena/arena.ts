import { Component, signal, inject } from '@angular/core';
import { ArenaSidebar } from './components/arena-sidebar/arena-sidebar';
import { ChestPanel } from './components/chest-panel/chest-panel';
import { ModeSelector } from './components/mode-selector/mode-selector';
import { DuelModeModal } from './components/duel-mode-modal/duel-mode-modal';
import { DuelSearchModal } from './components/duel-search-modal/duel-search-modal';
import { DuelStateService } from '../../../../services/duel-state';
import { BattleMode } from '../../../../models/elo';
import { DuelQueueType } from '../../../../models/duel';

@Component({
  selector: 'app-arena',
  standalone: true,
  imports: [ArenaSidebar, ChestPanel, ModeSelector, DuelModeModal, DuelSearchModal],
  host: { id: 'arena' },
  templateUrl: './arena.html',
  styleUrl: './arena.css'
})
export class Arena {
  private readonly duelState = inject(DuelStateService);

  isModeModalOpen = signal(false);
  isSearching = signal(false);
  pendingMode = signal<BattleMode>('feat');

  onDuelRequested(mode: BattleMode): void {
    this.pendingMode.set(mode);
    this.isModeModalOpen.set(true);
  }

  closeModeModal(): void {
    this.isModeModalOpen.set(false);
  }

  onQueueTypeSelected(queueType: DuelQueueType): void {
    this.duelState.setQueueContext(this.pendingMode(), queueType);
    this.isModeModalOpen.set(false);
    this.isSearching.set(true);
  }

  cancelSearch(): void {
    this.isSearching.set(false);
  }
}