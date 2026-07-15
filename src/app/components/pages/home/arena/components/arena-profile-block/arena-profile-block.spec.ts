import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaProfileBlock } from './arena-profile-block';

describe('ArenaProfileBlock', () => {
  let component: ArenaProfileBlock;
  let fixture: ComponentFixture<ArenaProfileBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArenaProfileBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(ArenaProfileBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
