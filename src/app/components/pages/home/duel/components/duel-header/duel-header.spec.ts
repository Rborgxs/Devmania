import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelHeader } from './duel-header';

describe('DuelHeader', () => {
  let component: DuelHeader;
  let fixture: ComponentFixture<DuelHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuelHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(DuelHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
