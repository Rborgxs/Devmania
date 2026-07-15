import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyTermsModal } from './privacy-terms-modal';

describe('PrivacyTermsModal', () => {
  let component: PrivacyTermsModal;
  let fixture: ComponentFixture<PrivacyTermsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyTermsModal],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyTermsModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
