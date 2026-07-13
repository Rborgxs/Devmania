import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyXpChart } from './weekly-xp-chart';

describe('WeeklyXpChart', () => {
  let component: WeeklyXpChart;
  let fixture: ComponentFixture<WeeklyXpChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyXpChart],
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyXpChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
