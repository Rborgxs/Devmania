import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabResults } from './tab-results';

describe('TabResults', () => {
  let component: TabResults;
  let fixture: ComponentFixture<TabResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabResults],
    }).compileComponents();

    fixture = TestBed.createComponent(TabResults);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
