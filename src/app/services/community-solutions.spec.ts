import { TestBed } from '@angular/core/testing';

import { CommunitySolutions } from './community-solutions';

describe('CommunitySolutions', () => {
  let service: CommunitySolutions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunitySolutions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
