import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearanceOptions } from './appearance-options';

describe('AppearanceOptions', () => {
  let component: AppearanceOptions;
  let fixture: ComponentFixture<AppearanceOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppearanceOptions],
    }).compileComponents();

    fixture = TestBed.createComponent(AppearanceOptions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
