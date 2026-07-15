import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingDialogueLayout } from './king-dialogue';

describe('KingDialogueLayout', () => {
  let component: KingDialogueLayout;
  let fixture: ComponentFixture<KingDialogueLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingDialogueLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(KingDialogueLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
