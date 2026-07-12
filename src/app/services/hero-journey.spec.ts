import { TestBed } from '@angular/core/testing';

import { HeroJourney } from './hero-journey';

describe('HeroJourney', () => {
  let service: HeroJourney;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroJourney);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
