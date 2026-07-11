import { Component, inject } from '@angular/core';
import { BattleStateService } from '../../../../../../services/battle-state';

@Component({
  selector: 'app-tab-results',
  standalone: true,
  imports: [],
  templateUrl: './tab-results.html',
  styleUrl: './tab-results.css'
})
export class TabResults {
  battleState = inject(BattleStateService);
}