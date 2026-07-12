import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonExerciseList } from './lesson-exercise-list';

describe('LessonExerciseList', () => {
  let component: LessonExerciseList;
  let fixture: ComponentFixture<LessonExerciseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonExerciseList],
    }).compileComponents();

    fixture = TestBed.createComponent(LessonExerciseList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
