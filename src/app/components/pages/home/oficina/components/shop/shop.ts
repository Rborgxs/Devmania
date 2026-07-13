import { Component, inject } from '@angular/core';
import { ShopService } from '../../../../../../services/shop';
import { ShopCategoryNav } from './shop-category-nav/shop-category-nav';
import { ShopFilters } from './shop-filters/shop-filters';
import { ShopItemCard } from './shop-item-card/shop-item-card';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShopCategoryNav, ShopFilters, ShopItemCard],
  host: { id: 'shop' },
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {
  shopService = inject(ShopService);
}