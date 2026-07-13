import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearancePanel } from './appearance-panel';

describe('AppearancePanel', () => {
  let component: AppearancePanel;
  let fixture: ComponentFixture<AppearancePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppearancePanel],
    }).compileComponents();

    fixture = TestBed.createComponent(AppearancePanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
