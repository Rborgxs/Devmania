import { Component, input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Exercise } from '../../../../../models/lesson';

@Component({
  selector: 'app-lesson-exercise-list',
  standalone: true,
  imports: [],
  host: { id: 'lesson-exercise-list' },
  templateUrl: './lesson-exercise-list.html',
  styleUrl: './lesson-exercise-list.css'
})
export class LessonExerciseList {
  exercises = input.required<Exercise[]>();

  private readonly router = inject(Router);

  resolveExercise(exerciseId: string): void {
    this.router.navigate(['/batalha', exerciseId]);
  }
}