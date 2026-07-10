import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepWelcome } from './step-welcome';

describe('StepWelcome', () => {
  let component: StepWelcome;
  let fixture: ComponentFixture<StepWelcome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepWelcome],
    }).compileComponents();

    fixture = TestBed.createComponent(StepWelcome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
