import { Component, input } from '@angular/core';

@Component({
  selector: 'app-elo-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './elo-progress-bar.html',
  styleUrl: './elo-progress-bar.css'
})
export class EloProgressBar {
  progressPercent = input.required<number>();
  currentXp = input.required<number>();
  xpIntoTier = input.required<number>();
  xpNeededForNextTier = input.required<number>();
}