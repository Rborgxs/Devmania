import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oficina } from './oficina';

describe('Oficina', () => {
  let component: Oficina;
  let fixture: ComponentFixture<Oficina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oficina],
    }).compileComponents();

    fixture = TestBed.createComponent(Oficina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
