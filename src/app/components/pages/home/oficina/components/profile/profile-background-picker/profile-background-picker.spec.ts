import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBackgroundPicker } from './profile-background-picker';

describe('ProfileBackgroundPicker', () => {
  let component: ProfileBackgroundPicker;
  let fixture: ComponentFixture<ProfileBackgroundPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBackgroundPicker],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileBackgroundPicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
