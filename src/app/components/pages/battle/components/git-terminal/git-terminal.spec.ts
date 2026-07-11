import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitTerminal } from './git-terminal';

describe('GitTerminal', () => {
  let component: GitTerminal;
  let fixture: ComponentFixture<GitTerminal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitTerminal],
    }).compileComponents();

    fixture = TestBed.createComponent(GitTerminal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
