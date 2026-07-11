import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTests } from './tab-tests';

describe('TabTests', () => {
  let component: TabTests;
  let fixture: ComponentFixture<TabTests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabTests],
    }).compileComponents();

    fixture = TestBed.createComponent(TabTests);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
