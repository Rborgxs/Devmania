import { Component, input, signal } from '@angular/core';
import { FileNode } from '../../../../../../../models/battle';

@Component({
  selector: 'app-file-tree-node',
  standalone: true,
  imports: [],
  templateUrl: './file-tree-node.html',
  styleUrl: './file-tree-node.css'
})
export class FileTreeNode {
  node = input.required<FileNode>();
  expanded = signal(true);

  toggle(): void {
    if (this.node().type === 'folder') {
      this.expanded.update(v => !v);
    }
  }
}