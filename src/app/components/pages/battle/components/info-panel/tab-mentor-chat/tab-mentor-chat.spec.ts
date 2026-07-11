import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabMentorChat } from './tab-mentor-chat';

describe('TabMentorChat', () => {
  let component: TabMentorChat;
  let fixture: ComponentFixture<TabMentorChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabMentorChat],
    }).compileComponents();

    fixture = TestBed.createComponent(TabMentorChat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
