import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestPanel } from './chest-panel';

describe('ChestPanel', () => {
  let component: ChestPanel;
  let fixture: ComponentFixture<ChestPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChestPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(ChestPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
