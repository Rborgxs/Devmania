import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Masmorra } from './masmorra';

describe('Masmorra', () => {
  let component: Masmorra;
  let fixture: ComponentFixture<Masmorra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Masmorra],
    }).compileComponents();

    fixture = TestBed.createComponent(Masmorra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
