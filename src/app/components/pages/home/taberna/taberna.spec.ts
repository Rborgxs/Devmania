import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taberna } from './taberna';

describe('Taberna', () => {
  let component: Taberna;
  let fixture: ComponentFixture<Taberna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taberna],
    }).compileComponents();

    fixture = TestBed.createComponent(Taberna);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
