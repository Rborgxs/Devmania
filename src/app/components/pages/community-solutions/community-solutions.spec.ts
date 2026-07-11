import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySolutions } from './community-solutions';

describe('CommunitySolutions', () => {
  let component: CommunitySolutions;
  let fixture: ComponentFixture<CommunitySolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunitySolutions],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunitySolutions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
