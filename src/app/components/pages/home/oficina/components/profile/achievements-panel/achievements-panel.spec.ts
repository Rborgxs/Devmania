import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsPanel } from './achievements-panel';

describe('AchievementsPanel', () => {
  let component: AchievementsPanel;
  let fixture: ComponentFixture<AchievementsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(AchievementsPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
