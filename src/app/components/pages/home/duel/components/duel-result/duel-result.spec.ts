import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelResult } from './duel-result';

describe('DuelResult', () => {
  let component: DuelResult;
  let fixture: ComponentFixture<DuelResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuelResult],
    }).compileComponents();

    fixture = TestBed.createComponent(DuelResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
