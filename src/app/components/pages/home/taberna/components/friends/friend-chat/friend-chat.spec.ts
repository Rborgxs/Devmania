import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendChat } from './friend-chat';

describe('FriendChat', () => {
  let component: FriendChat;
  let fixture: ComponentFixture<FriendChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendChat],
    }).compileComponents();

    fixture = TestBed.createComponent(FriendChat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
