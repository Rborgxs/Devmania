import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Duel } from './duel';

describe('Duel', () => {
  let component: Duel;
  let fixture: ComponentFixture<Duel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Duel],
    }).compileComponents();

    fixture = TestBed.createComponent(Duel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
