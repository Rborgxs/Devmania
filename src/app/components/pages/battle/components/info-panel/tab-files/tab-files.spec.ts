import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabFiles } from './tab-files';

describe('TabFiles', () => {
  let component: TabFiles;
  let fixture: ComponentFixture<TabFiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabFiles],
    }).compileComponents();

    fixture = TestBed.createComponent(TabFiles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
