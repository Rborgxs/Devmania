import { Component, inject } from '@angular/core';
import { BattleStateService } from '../../../../../../services/battle-state';
import { FileTreeNode } from './file-tree-node/file-tree-node';

@Component({
  selector: 'app-tab-files',
  standalone: true,
  imports: [FileTreeNode],
  templateUrl: './tab-files.html',
  styleUrl: './tab-files.css'
})
export class TabFiles {
  battleState = inject(BattleStateService);
}