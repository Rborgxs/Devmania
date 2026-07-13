import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelModesModal } from './duel-modes-modal';

describe('DuelModesModal', () => {
  let component: DuelModesModal;
  let fixture: ComponentFixture<DuelModesModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuelModesModal],
    }).compileComponents();

    fixture = TestBed.createComponent(DuelModesModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
