import { TestBed } from '@angular/core/testing';

import { CommunitySolutionsService } from './community-solutions';

describe('CommunitySolutionsService', () => {
  let service: CommunitySolutionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunitySolutionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
