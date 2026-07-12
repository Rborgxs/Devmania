import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonService } from '../../../services/lesson';
import { LessonTheoryPanel } from './components/lesson-theory-panel/lesson-theory-panel';
import { LessonExerciseList } from './components/lesson-exercise-list/lesson-exercise-list';

@Component({
  selector: 'app-lesson-page',
  standalone: true,
  imports: [LessonTheoryPanel, LessonExerciseList],
  host: { id: 'lesson-page' },
  templateUrl: './lesson-page.html',
  styleUrl: './lesson-page.css'
})
export class LessonPage {
  private readonly route = inject(ActivatedRoute);
  private readonly lessonService = inject(LessonService);

  lessonId = computed(() => this.route.snapshot.paramMap.get('lessonId') ?? '');
  lesson = computed(() => this.lessonService.getLesson(this.lessonId()));
}