import { Component, inject } from '@angular/core';
import { EloService } from '../../../../../../../services/elo';
import { BattleMode } from '../../../../../../../models/elo';
import { EloProgressBar } from '../../../../arena/components/elo-progress-bar/elo-progress-bar';

interface ModeRow {
  id: BattleMode;
  label: string;
}

@Component({
  selector: 'app-profile-elo-list',
  standalone: true,
  imports: [EloProgressBar],
  host: { id: 'profile-elo-list' },
  templateUrl: './profile-elo-list.html',
  styleUrl: './profile-elo-list.css'
})
export class ProfileEloList {
  private readonly eloService = inject(EloService);

  modes: ModeRow[] = [
    { id: 'feat', label: 'Feat' },
    { id: 'fix', label: 'Fix' },
    { id: 'style', label: 'Style' }
  ];

  progressFor(mode: BattleMode) {
    return this.eloService.getProgress(mode);
  }
}
