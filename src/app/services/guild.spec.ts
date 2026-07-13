import { TestBed } from '@angular/core/testing';

import { Guild } from './guild';

describe('Guild', () => {
  let service: Guild;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Guild);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
