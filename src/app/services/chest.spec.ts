import { TestBed } from '@angular/core/testing';

import { Chest } from './chest';

describe('Chest', () => {
  let service: Chest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Chest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
