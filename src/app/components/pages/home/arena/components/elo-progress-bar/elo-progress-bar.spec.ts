import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloProgressBar } from './elo-progress-bar';

describe('EloProgressBar', () => {
  let component: EloProgressBar;
  let fixture: ComponentFixture<EloProgressBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EloProgressBar],
    }).compileComponents();

    fixture = TestBed.createComponent(EloProgressBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
