import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelEditor } from './duel-editor';

describe('DuelEditor', () => {
  let component: DuelEditor;
  let fixture: ComponentFixture<DuelEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuelEditor],
    }).compileComponents();

    fixture = TestBed.createComponent(DuelEditor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
