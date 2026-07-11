import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BattleStateService } from '../../../../../services/battle-state';

@Component({
  selector: 'app-submit-flow',
  standalone: true,
  imports: [],
  host: { id: 'submit-flow' },
  templateUrl: './submit-flow.html',
  styleUrl: './submit-flow.css'
})
export class SubmitFlow {
  battleState = inject(BattleStateService);
  private readonly router = inject(Router);

  formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  }

  viewRewards(): void {
    this.battleState.setSubmitPhase('reward');
  }

  goToCommunitySolutions(): void {
    this.battleState.setSubmitPhase('idle');
    this.router.navigateByUrl('/solucoes-comunidade');
  }
}