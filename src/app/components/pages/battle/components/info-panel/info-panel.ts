import { Component, inject, computed } from '@angular/core';
import { BattleStateService, InfoTab } from '../../../../../services/battle-state';
import { TabObjective } from './tab-objective/tab-objective';
import { TabFiles } from './tab-files/tab-files';
import { TabTests } from './tab-tests/tab-tests';
import { TabResults } from './tab-results/tab-results';
import { TabMentorChat } from './tab-mentor-chat/tab-mentor-chat';

@Component({
  selector: 'app-info-panel',
  standalone: true,
  imports: [TabObjective, TabFiles, TabTests, TabResults, TabMentorChat],
  host: { id: 'info-panel' },
  templateUrl: './info-panel.html',
  styleUrl: './info-panel.css'
})
export class InfoPanel {
  battleState = inject(BattleStateService);

  tabs = computed<{ id: InfoTab; label: string }[]>(() => [
    this.battleState.isWeeklyChallenge()
      ? { id: 'objetivo' as InfoTab, label: 'Arquivos' }
      : { id: 'objetivo' as InfoTab, label: 'Objetivo' },
    { id: 'testes', label: 'Testes' },
    { id: 'resultados', label: 'Resultados' },
    { id: 'mentor', label: 'Mentor' }
  ]);
}