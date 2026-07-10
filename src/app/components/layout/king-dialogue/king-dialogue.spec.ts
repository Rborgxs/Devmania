import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingDialogue } from './king-dialogue';

describe('KingDialogue', () => {
  let component: KingDialogue;
  let fixture: ComponentFixture<KingDialogue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingDialogue],
    }).compileComponents();

    fixture = TestBed.createComponent(KingDialogue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
