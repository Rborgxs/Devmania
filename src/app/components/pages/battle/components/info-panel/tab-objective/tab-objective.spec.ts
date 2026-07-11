import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabObjective } from './tab-objective';

describe('TabObjective', () => {
  let component: TabObjective;
  let fixture: ComponentFixture<TabObjective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabObjective],
    }).compileComponents();

    fixture = TestBed.createComponent(TabObjective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
