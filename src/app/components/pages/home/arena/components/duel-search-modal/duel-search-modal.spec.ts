import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelSearchModal } from './duel-search-modal';

describe('DuelSearchModal', () => {
  let component: DuelSearchModal;
  let fixture: ComponentFixture<DuelSearchModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuelSearchModal],
    }).compileComponents();

    fixture = TestBed.createComponent(DuelSearchModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
