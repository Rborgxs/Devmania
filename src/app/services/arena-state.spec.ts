import { TestBed } from '@angular/core/testing';

import { ArenaStateService } from './arena-state';

describe('ArenaStateService', () => {
  let service: ArenaStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArenaStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
