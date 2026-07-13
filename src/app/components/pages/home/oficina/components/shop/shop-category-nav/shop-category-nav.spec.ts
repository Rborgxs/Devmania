import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCategoryNav } from './shop-category-nav';

describe('ShopCategoryNav', () => {
  let component: ShopCategoryNav;
  let fixture: ComponentFixture<ShopCategoryNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCategoryNav],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopCategoryNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
