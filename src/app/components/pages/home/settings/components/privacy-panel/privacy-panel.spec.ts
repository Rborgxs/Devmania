import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPanel } from './privacy-panel';

describe('PrivacyPanel', () => {
  let component: PrivacyPanel;
  let fixture: ComponentFixture<PrivacyPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
