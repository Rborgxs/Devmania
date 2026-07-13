import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildEventsModal } from './guild-events-modal';

describe('GuildEventsModal', () => {
  let component: GuildEventsModal;
  let fixture: ComponentFixture<GuildEventsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildEventsModal],
    }).compileComponents();

    fixture = TestBed.createComponent(GuildEventsModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
