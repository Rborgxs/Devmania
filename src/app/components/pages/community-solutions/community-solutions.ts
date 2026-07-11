import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { CommunitySolutionsService } from '../../../services/community-solutions';
import { SolutionFilter, CommunityPost } from '../../../models/community-post';
import { SolutionPost } from './components/solution-post/solution-post';
import { SolutionModal } from './components/solution-modal/solution-modal';
import { SolutionsSidebar } from './components/solutions-sidebar/solutions-sidebar';

@Component({
  selector: 'app-community-solutions',
  standalone: true,
  imports: [SolutionPost, SolutionModal, SolutionsSidebar],
  host: { id: 'community-solutions' },
  templateUrl: './community-solutions.html',
  styleUrl: './community-solutions.css'
})
export class CommunitySolutions {
  solutionsService = inject(CommunitySolutionsService);
  private readonly router = inject(Router);

  activeFilter = signal<SolutionFilter>('curtidas');
  selectedPost = signal<CommunityPost | null>(null);

  sortedPosts = computed(() => {
    const posts = [...this.solutionsService.posts()];
    switch (this.activeFilter()) {
      case 'curtidas':
        return posts.sort((a, b) => b.likes - a.likes);
      case 'recentes':
        return posts.sort((a, b) => b.date.localeCompare(a.date));
      case 'linhas':
        return posts.sort((a, b) => a.linesOfCount - b.linesOfCount);
      case 'desempenho':
        return posts.sort((a, b) => b.performanceScore - a.performanceScore);
      default:
        return posts;
    }
  });

  setFilter(filter: SolutionFilter): void {
    this.activeFilter.set(filter);
  }

  openPost(post: CommunityPost): void {
    this.selectedPost.set(post);
  }

  closeModal(): void {
    this.selectedPost.set(null);
  }

  backToHome(): void {
    this.router.navigateByUrl('/masmorra');
  }

  discussWithMentor(): void {
    console.log('abrir mentor');
  }
}