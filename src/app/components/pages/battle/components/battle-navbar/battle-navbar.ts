import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BattleStateService } from '../../../../../services/battle-state';
import { CodeExecutionService } from '../../../../../services/code-execution';

@Component({
  selector: 'app-battle-navbar',
  standalone: true,
  imports: [],
  host: { id: 'battle-navbar' },
  templateUrl: './battle-navbar.html',
  styleUrl: './battle-navbar.css'
})
export class BattleNavbar {
  battleState = inject(BattleStateService);
  private readonly codeExecution = inject(CodeExecutionService);
  private readonly router = inject(Router);

  difficultyLabel(): string {
    const labels: Record<string, string> = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' };
    return labels[this.battleState.difficulties[this.battleState.currentDifficultyIndex()]];
  }

  isFirstDifficulty(): boolean {
    return this.battleState.currentDifficultyIndex() === 0;
  }

  isLastDifficulty(): boolean {
    return this.battleState.currentDifficultyIndex() === this.battleState.difficulties.length - 1;
  }

  runTests(): void {
    this.codeExecution.runPublicTests();
    this.battleState.setActiveTab('testes');
  }

  submit(): void {
    if (!this.battleState.allPublicTestsPassed()) {
      return;
    }
    this.battleState.setActiveTab('resultados');
    this.codeExecution.submitHiddenTests();
  }

  exitBattle(): void {
    this.router.navigateByUrl('/masmorra');
  }
}