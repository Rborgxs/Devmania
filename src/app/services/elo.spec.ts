import { TestBed } from '@angular/core/testing';

import { Elo } from './elo';

describe('Elo', () => {
  let service: Elo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Elo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
