import { Injectable, inject } from '@angular/core';
import { BattleStateService } from './battle-state';
import { ExecutionLogEntry } from '../models/battle';

@Injectable({ providedIn: 'root' })
export class CodeExecutionService {
  private readonly battleState = inject(BattleStateService);

  runPublicTests(): void {
    const tests = this.battleState.challenge().publicTests;
    const updatedTests = tests.map(test => ({
      ...test,
      actualOutput: test.expectedOutput,
      passed: true
    }));

    this.battleState.challenge.update(c => ({ ...c, publicTests: updatedTests }));
  }

  submitHiddenTests(): void {
    this.battleState.setSubmitPhase('processing');

    setTimeout(() => {
      const now = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

      const log: ExecutionLogEntry[] = [
        { id: crypto.randomUUID(), time: now, label: 'Teste oculto 1', passed: true, durationMs: 42 },
        { id: crypto.randomUUID(), time: now, label: 'Teste oculto 2', passed: true, durationMs: 38 },
        { id: crypto.randomUUID(), time: now, label: 'Teste oculto 3', passed: true, durationMs: 51 },
        { id: crypto.randomUUID(), time: now, label: 'Teste oculto 4', passed: true, durationMs: 29 }
      ];

      this.battleState.executionLog.set(log);

      const allPassed = log.every(entry => entry.passed);

      if (allPassed) {
        this.battleState.setSubmitPhase('victory');
        this.battleState.finalizeReward();
      } else {
        this.battleState.setSubmitPhase('idle');
      }
    }, 1800);
  }
}