import { Component, inject, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DuelStateService } from '../../../../services/duel-state';
import { DuelHeader } from './components/duel-header/duel-header';
import { DuelProblemPanel } from './components/duel-problem-panel/duel-problem-panel';
import { DuelEditor } from './components/duel-editor/duel-editor';
import { DuelResult } from './components/duel-result/duel-result';

@Component({
  selector: 'app-duel',
  standalone: true,
  imports: [DuelHeader, DuelProblemPanel, DuelEditor, DuelResult],
  host: { id: 'duel' },
  templateUrl: './duel.html',
  styleUrl: './duel.css'
})
export class Duel implements OnInit, OnDestroy {
  duelState = inject(DuelStateService);
  private readonly platformId = inject(PLATFORM_ID);
  private botTimeouts: ReturnType<typeof setTimeout>[] = [];

  ngOnInit(): void {
    this.duelState.resetMatch();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const problemCount = this.duelState.problems().length;
    let cumulativeDelay = 0;

    for (let i = 0; i < problemCount; i++) {
      cumulativeDelay += 15000 + Math.random() * 40000;
      const timeout = setTimeout(() => {
        this.duelState.opponentSolveProblem();
      }, cumulativeDelay);
      this.botTimeouts.push(timeout);
    }
  }

  ngOnDestroy(): void {
    this.botTimeouts.forEach(t => clearTimeout(t));
  }
}