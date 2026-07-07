import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingSection } from './king-section';

describe('KingSection', () => {
  let component: KingSection;
  let fixture: ComponentFixture<KingSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KingSection],
    }).compileComponents();

    fixture = TestBed.createComponent(KingSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
