import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTheoryPanel } from './lesson-theory-panel';

describe('LessonTheoryPanel', () => {
  let component: LessonTheoryPanel;
  let fixture: ComponentFixture<LessonTheoryPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonTheoryPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(LessonTheoryPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
