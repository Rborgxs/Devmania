import { Component, inject } from '@angular/core';
import { BattleStateService } from '../../../../../../services/battle-state';

@Component({
  selector: 'app-tab-tests',
  standalone: true,
  imports: [],
  templateUrl: './tab-tests.html',
  styleUrl: './tab-tests.css'
})
export class TabTests {
  battleState = inject(BattleStateService);
}