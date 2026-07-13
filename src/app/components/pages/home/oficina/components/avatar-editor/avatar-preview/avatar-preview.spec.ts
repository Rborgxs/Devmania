import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarPreview } from './avatar-preview';

describe('AvatarPreview', () => {
  let component: AvatarPreview;
  let fixture: ComponentFixture<AvatarPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
