import { Component, output } from '@angular/core';
import { DuelQueueType } from '../../../../../../models/duel';

@Component({
  selector: 'app-duel-mode-modal',
  standalone: true,
  imports: [],
  host: { id: 'duel-mode-modal' },
  templateUrl: './duel-mode-modal.html',
  styleUrl: './duel-mode-modal.css'
})
export class DuelModeModal {
  close = output<void>();
  select = output<DuelQueueType>();
}