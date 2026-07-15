import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEloList } from './profile-elo-list';

describe('ProfileEloList', () => {
  let component: ProfileEloList;
  let fixture: ComponentFixture<ProfileEloList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEloList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileEloList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
