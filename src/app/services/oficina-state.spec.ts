import { TestBed } from '@angular/core/testing';

import { OficinaStateService } from './oficina-state';

describe('OficinaStateService', () => {
  let service: OficinaStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OficinaStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
