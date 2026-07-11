import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BattleNavbar } from './components/battle-navbar/battle-navbar';
import { InfoPanel } from './components/info-panel/info-panel';
import { CodeEditor } from './components/code-editor/code-editor';
import { GitTerminal } from './components/git-terminal/git-terminal';
import { SubmitFlow } from './components/submit-flow/submit-flow';
import { BattleStateService } from '../../../services/battle-state';

@Component({
  selector: 'app-battle',
  standalone: true,
  imports: [BattleNavbar, InfoPanel, CodeEditor, GitTerminal, SubmitFlow],
  host: { id: 'battle' },
  templateUrl: './battle.html',
  styleUrl: './battle.css'
})
export class Battle implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly battleState = inject(BattleStateService);

  ngOnInit(): void {
    const isWeekly = this.route.snapshot.url.some(segment => segment.path === 'desafio-semanal');
    this.battleState.isWeeklyChallenge.set(isWeekly);
  }
}