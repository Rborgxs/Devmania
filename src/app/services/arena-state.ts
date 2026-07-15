import { Injectable, signal } from '@angular/core';
import { BattleMode } from '../models/elo';

@Injectable({ providedIn: 'root' })
export class ArenaStateService {
  selectedMode = signal<BattleMode>('feat');

  setMode(mode: BattleMode): void {
    this.selectedMode.set(mode);
  }
}
