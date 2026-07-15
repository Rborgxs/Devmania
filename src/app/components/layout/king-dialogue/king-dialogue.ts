import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-king-dialogue-layout',
  standalone: true,
  templateUrl: './king-dialogue.html',
  styleUrl: './king-dialogue.css'
})
export class KingDialogueLayout {
  @Input({ required: true }) speech = '';
  @Input() image = 'assets/characters/rei_default.png';
}