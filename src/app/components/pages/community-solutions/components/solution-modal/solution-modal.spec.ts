import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionModal } from './solution-modal';

describe('SolutionModal', () => {
  let component: SolutionModal;
  let fixture: ComponentFixture<SolutionModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionModal],
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
