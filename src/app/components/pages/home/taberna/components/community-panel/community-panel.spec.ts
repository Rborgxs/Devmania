import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPanel } from './community-panel';

describe('CommunityPanel', () => {
  let component: CommunityPanel;
  let fixture: ComponentFixture<CommunityPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
