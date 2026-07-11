import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaSidebar } from './arena-sidebar';

describe('ArenaSidebar', () => {
  let component: ArenaSidebar;
  let fixture: ComponentFixture<ArenaSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArenaSidebar],
    }).compileComponents();

    fixture = TestBed.createComponent(ArenaSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
