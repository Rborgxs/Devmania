import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepMaster } from './step-master';

describe('StepMaster', () => {
  let component: StepMaster;
  let fixture: ComponentFixture<StepMaster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepMaster],
    }).compileComponents();

    fixture = TestBed.createComponent(StepMaster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
