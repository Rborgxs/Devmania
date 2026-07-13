import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildDetail } from './guild-detail';

describe('GuildDetail', () => {
  let component: GuildDetail;
  let fixture: ComponentFixture<GuildDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(GuildDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
