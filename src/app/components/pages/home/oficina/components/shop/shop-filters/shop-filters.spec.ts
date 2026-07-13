import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopFilters } from './shop-filters';

describe('ShopFilters', () => {
  let component: ShopFilters;
  let fixture: ComponentFixture<ShopFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
