import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorRecommendation } from './mentor-recommendation';

describe('MentorRecommendation', () => {
  let component: MentorRecommendation;
  let fixture: ComponentFixture<MentorRecommendation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentorRecommendation],
    }).compileComponents();

    fixture = TestBed.createComponent(MentorRecommendation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
