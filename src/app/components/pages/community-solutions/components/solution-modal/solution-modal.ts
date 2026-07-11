import { Component, input, output, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommunitySolutionsService } from '../../../../../services/community-solutions';
import { CommunityPost } from '../../../../../models/community-post';

@Component({
  selector: 'app-solution-modal',
  standalone: true,
  imports: [FormsModule],
  host: { id: 'solution-modal' },
  templateUrl: './solution-modal.html',
  styleUrl: './solution-modal.css'
})
export class SolutionModal {
  post = input.required<CommunityPost>();
  close = output<void>();

  private readonly solutionsService = inject(CommunitySolutionsService);
  commentDraft = signal('');

  copyCode(): void {
    navigator.clipboard.writeText(this.post().fullCode);
  }

  submitComment(): void {
    const text = this.commentDraft().trim();
    if (!text) {
      return;
    }
    this.solutionsService.addComment(this.post().id, text);
    this.commentDraft.set('');
  }
}