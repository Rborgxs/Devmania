import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFlow } from './submit-flow';

describe('SubmitFlow', () => {
  let component: SubmitFlow;
  let fixture: ComponentFixture<SubmitFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitFlow],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
