import { TestBed } from '@angular/core/testing';

import { BattleState } from './battle-state';

describe('BattleState', () => {
  let service: BattleState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BattleState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
