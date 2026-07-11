import { Component, signal, output } from '@angular/core';
import { BattleMode } from '../../../../../../models/elo';

interface ModeOption {
  id: BattleMode;
  label: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-mode-selector',
  standalone: true,
  imports: [],
  host: { id: 'mode-selector' },
  templateUrl: './mode-selector.html',
  styleUrl: './mode-selector.css'
})
export class ModeSelector {
  modeSelected = output<BattleMode>();
  duelRequested = output<BattleMode>();

  selectedMode = signal<BattleMode>('feat');
  hoveredTooltip = signal<BattleMode | null>(null);

  modes: ModeOption[] = [
    {
      id: 'feat',
      label: 'Feat',
      icon: '/assets/icons/arena/mode-feat.png',
      description: 'Crie funções, classes e funcionalidades do zero'
    },
    {
      id: 'fix',
      label: 'Fix',
      icon: '/assets/icons/arena/mode-fix.png',
      description: 'Debugue códigos e encontre bugs'
    },
    {
      id: 'style',
      label: 'Style',
      icon: '/assets/icons/arena/mode-style.png',
      description: 'Centralize divs e mexa com estilização'
    }
  ];

  selectMode(mode: BattleMode): void {
    this.selectedMode.set(mode);
    this.modeSelected.emit(mode);
  }

  showTooltip(mode: BattleMode): void {
    this.hoveredTooltip.set(mode);
  }

  hideTooltip(): void {
    this.hoveredTooltip.set(null);
  }

  requestDuel(): void {
    this.duelRequested.emit(this.selectedMode());
  }
}