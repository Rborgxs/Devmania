import { Component, inject, computed } from '@angular/core';
import { DuelStateService } from '../../../../../../services/duel-state';

@Component({
  selector: 'app-duel-problem-panel',
  standalone: true,
  imports: [],
  host: { id: 'duel-problem-panel' },
  templateUrl: './duel-problem-panel.html',
  styleUrl: './duel-problem-panel.css'
})
export class DuelProblemPanel {
  duelState = inject(DuelStateService);

  currentProblem = computed(() => this.duelState.problems()[this.duelState.player().problemsSolved]);
}