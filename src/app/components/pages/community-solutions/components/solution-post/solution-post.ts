import { Component, input, output, inject } from '@angular/core';
import { CommunitySolutionsService } from '../../../../../services/community-solutions';
import { CommunityPost } from '../../../../../models/community-post';

@Component({
  selector: 'app-solution-post',
  standalone: true,
  imports: [],
  host: { id: 'solution-post' },
  templateUrl: './solution-post.html',
  styleUrl: './solution-post.css'
})
export class SolutionPost {
  post = input.required<CommunityPost>();
  openCode = output<CommunityPost>();

  private readonly solutionsService = inject(CommunitySolutionsService);

  toggleLike(): void {
    this.solutionsService.toggleLike(this.post().id);
  }

  onOpenCode(): void {
    this.openCode.emit(this.post());
  }
}