import { Component, inject } from '@angular/core';
import { ChestService } from '../../../../../../services/chest';
import { ChestSlot } from './chest-slot/chest-slot';

@Component({
  selector: 'app-chest-panel',
  standalone: true,
  imports: [ChestSlot],
  host: { id: 'chest-panel' },
  templateUrl: './chest-panel.html',
  styleUrl: './chest-panel.css'
})
export class ChestPanel {
  chestService = inject(ChestService);
}