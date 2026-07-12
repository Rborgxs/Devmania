import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseTrainingModal } from './purchase-training-modal';

describe('PurchaseTrainingModal', () => {
  let component: PurchaseTrainingModal;
  let fixture: ComponentFixture<PurchaseTrainingModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurchaseTrainingModal],
    }).compileComponents();

    fixture = TestBed.createComponent(PurchaseTrainingModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
