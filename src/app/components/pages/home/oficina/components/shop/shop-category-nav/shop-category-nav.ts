import { Component, inject } from '@angular/core';
import { ShopService } from '../../../../../../../services/shop';

@Component({
  selector: 'app-shop-category-nav',
  standalone: true,
  imports: [],
  host: { id: 'shop-category-nav' },
  templateUrl: './shop-category-nav.html',
  styleUrl: './shop-category-nav.css'
})
export class ShopCategoryNav {
  shopService = inject(ShopService);
}