import { TestBed } from '@angular/core/testing';

import { HeroJourneyService } from './hero-journey';

describe('HeroJourneyService', () => {
  let service: HeroJourneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroJourneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
