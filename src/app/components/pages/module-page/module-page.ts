import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LessonService } from '../../../services/lesson';

@Component({
  selector: 'app-module-page',
  standalone: true,
  imports: [RouterLink],
  host: { id: 'module-page' },
  templateUrl: './module-page.html',
  styleUrl: './module-page.css'
})
export class ModulePage {
  private readonly route = inject(ActivatedRoute);
  private readonly lessonService = inject(LessonService);

  moduleId = computed(() => this.route.snapshot.paramMap.get('moduleId') ?? '');
  module = computed(() => this.lessonService.getModule(this.moduleId()));
}