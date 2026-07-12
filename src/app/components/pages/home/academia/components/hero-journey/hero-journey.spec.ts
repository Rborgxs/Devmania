import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJourney } from './hero-journey';

describe('HeroJourney', () => {
  let component: HeroJourney;
  let fixture: ComponentFixture<HeroJourney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroJourney],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroJourney);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
