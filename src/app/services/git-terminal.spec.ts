import { TestBed } from '@angular/core/testing';

import { GitTerminal } from './git-terminal';

describe('GitTerminal', () => {
  let service: GitTerminal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitTerminal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
