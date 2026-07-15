import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAvatarCard } from './profile-avatar-card';

describe('ProfileAvatarCard', () => {
  let component: ProfileAvatarCard;
  let fixture: ComponentFixture<ProfileAvatarCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileAvatarCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileAvatarCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
