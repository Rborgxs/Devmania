import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionPost } from './solution-post';

describe('SolutionPost', () => {
  let component: SolutionPost;
  let fixture: ComponentFixture<SolutionPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionPost],
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
