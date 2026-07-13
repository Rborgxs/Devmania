import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaTabs } from './oficina-tabs';

describe('OficinaTabs', () => {
  let component: OficinaTabs;
  let fixture: ComponentFixture<OficinaTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OficinaTabs],
    }).compileComponents();

    fixture = TestBed.createComponent(OficinaTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
