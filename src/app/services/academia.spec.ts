import { TestBed } from '@angular/core/testing';

import { Academia } from './academia';

describe('Academia', () => {
  let service: Academia;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Academia);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
