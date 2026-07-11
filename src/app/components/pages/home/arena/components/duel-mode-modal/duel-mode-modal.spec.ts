import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelModeModal } from './duel-mode-modal';

describe('DuelModeModal', () => {
  let component: DuelModeModal;
  let fixture: ComponentFixture<DuelModeModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuelModeModal],
    }).compileComponents();

    fixture = TestBed.createComponent(DuelModeModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
