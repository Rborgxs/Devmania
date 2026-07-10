import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepVerification } from './step-verification';

describe('StepVerification', () => {
  let component: StepVerification;
  let fixture: ComponentFixture<StepVerification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepVerification],
    }).compileComponents();

    fixture = TestBed.createComponent(StepVerification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
