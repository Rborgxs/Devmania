import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgePicker } from './badge-picker';

describe('BadgePicker', () => {
  let component: BadgePicker;
  let fixture: ComponentFixture<BadgePicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgePicker],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgePicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
