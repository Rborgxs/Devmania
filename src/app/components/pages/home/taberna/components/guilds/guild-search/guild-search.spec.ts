import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildSearch } from './guild-search';

describe('GuildSearch', () => {
  let component: GuildSearch;
  let fixture: ComponentFixture<GuildSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(GuildSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
