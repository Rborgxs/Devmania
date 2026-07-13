import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreakCalendar } from './streak-calendar';

describe('StreakCalendar', () => {
  let component: StreakCalendar;
  let fixture: ComponentFixture<StreakCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreakCalendar],
    }).compileComponents();

    fixture = TestBed.createComponent(StreakCalendar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
