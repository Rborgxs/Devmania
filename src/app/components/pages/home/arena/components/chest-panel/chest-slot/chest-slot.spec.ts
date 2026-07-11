import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestSlot } from './chest-slot';

describe('ChestSlot', () => {
  let component: ChestSlot;
  let fixture: ComponentFixture<ChestSlot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChestSlot],
    }).compileComponents();

    fixture = TestBed.createComponent(ChestSlot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
