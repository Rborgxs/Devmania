import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DuelStateService } from '../../../../../../services/duel-state';

@Component({
  selector: 'app-duel-result',
  standalone: true,
  imports: [],
  host: { id: 'duel-result' },
  templateUrl: './duel-result.html',
  styleUrl: './duel-result.css'
})
export class DuelResult {
  duelState = inject(DuelStateService);
  private readonly router = inject(Router);

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  }

  duelAgain(): void {
    this.router.navigateByUrl('/arena');
  }

  backToArena(): void {
    this.router.navigateByUrl('/arena');
  }
}