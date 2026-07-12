import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfomanceDashboard } from './perfomance-dashboard';

describe('PerfomanceDashboard', () => {
  let component: PerfomanceDashboard;
  let fixture: ComponentFixture<PerfomanceDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfomanceDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfomanceDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
