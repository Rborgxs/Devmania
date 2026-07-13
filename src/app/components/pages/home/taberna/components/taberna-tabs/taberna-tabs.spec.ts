import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabernaTabs } from './taberna-tabs';

describe('TabernaTabs', () => {
  let component: TabernaTabs;
  let fixture: ComponentFixture<TabernaTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabernaTabs],
    }).compileComponents();

    fixture = TestBed.createComponent(TabernaTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
