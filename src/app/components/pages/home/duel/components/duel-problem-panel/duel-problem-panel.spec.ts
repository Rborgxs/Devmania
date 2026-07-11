import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelProblemPanel } from './duel-problem-panel';

describe('DuelProblemPanel', () => {
  let component: DuelProblemPanel;
  let fixture: ComponentFixture<DuelProblemPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuelProblemPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(DuelProblemPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
