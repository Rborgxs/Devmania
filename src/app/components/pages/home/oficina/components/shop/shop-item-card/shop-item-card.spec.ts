import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemCard } from './shop-item-card';

describe('ShopItemCard', () => {
  let component: ShopItemCard;
  let fixture: ComponentFixture<ShopItemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopItemCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopItemCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
