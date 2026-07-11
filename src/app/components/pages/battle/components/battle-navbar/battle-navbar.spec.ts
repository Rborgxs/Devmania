import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleNavbar } from './battle-navbar';

describe('BattleNavbar', () => {
  let component: BattleNavbar;
  let fixture: ComponentFixture<BattleNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattleNavbar],
    }).compileComponents();

    fixture = TestBed.createComponent(BattleNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
