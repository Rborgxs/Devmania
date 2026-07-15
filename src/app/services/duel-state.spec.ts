import { TestBed } from '@angular/core/testing';

import { DuelStateService } from './duel-state';

describe('DuelStateService', () => {
  let service: DuelStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuelStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
