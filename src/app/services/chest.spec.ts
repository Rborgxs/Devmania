import { TestBed } from '@angular/core/testing';

import { ChestService } from './chest';

describe('ChestService', () => {
  let service: ChestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
