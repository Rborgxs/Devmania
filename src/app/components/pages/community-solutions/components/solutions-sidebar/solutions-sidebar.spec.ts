import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsSidebar } from './solutions-sidebar';

describe('SolutionsSidebar', () => {
  let component: SolutionsSidebar;
  let fixture: ComponentFixture<SolutionsSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionsSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(SolutionsSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
