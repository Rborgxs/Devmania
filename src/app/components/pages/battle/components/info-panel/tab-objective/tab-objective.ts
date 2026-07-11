import { Component, inject } from '@angular/core';
import { BattleStateService } from '../../../../../../services/battle-state';

@Component({
  selector: 'app-tab-objective',
  standalone: true,
  imports: [],
  templateUrl: './tab-objective.html',
  styleUrl: './tab-objective.css'
})
export class TabObjective {
  battleState = inject(BattleStateService);
}