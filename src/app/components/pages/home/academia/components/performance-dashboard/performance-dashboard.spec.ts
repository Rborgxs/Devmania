import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceDashboard } from './performance-dashboard';

describe('PerformanceDashboard', () => {
  let component: PerformanceDashboard;
  let fixture: ComponentFixture<PerformanceDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(PerformanceDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
