import { Component, inject, computed } from '@angular/core';
import { EloService } from '../../../../../../services/elo';
import { ArenaStateService } from '../../../../../../services/arena-state';
import { EloProgressBar } from '../elo-progress-bar/elo-progress-bar';

@Component({
  selector: 'app-arena-profile-block',
  standalone: true,
  imports: [EloProgressBar],
  host: { id: 'arena-profile-block' },
  templateUrl: './arena-profile-block.html',
  styleUrl: './arena-profile-block.css'
})
export class ArenaProfileBlock {
  private readonly eloService = inject(EloService);
  private readonly arenaState = inject(ArenaStateService);

  selectedMode = this.arenaState.selectedMode;

  progress = computed(() => this.eloService.getProgress(this.selectedMode()));

  modeLabel = computed(() => {
    const labels = { feat: 'Feat', fix: 'Fix', style: 'Style' } as const;
    return labels[this.selectedMode()];
  });
}
