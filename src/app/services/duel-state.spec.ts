import { TestBed } from '@angular/core/testing';

import { DuelState } from './duel-state';

describe('DuelState', () => {
  let service: DuelState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuelState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
