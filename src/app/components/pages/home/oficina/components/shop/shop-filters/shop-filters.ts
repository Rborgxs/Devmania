import { Component, inject } from '@angular/core';
import { ShopService } from '../../../../../../../services/shop';
import { OwnershipFilter, ItemRarity } from '../../../../../../../models/shop-item';

@Component({
  selector: 'app-shop-filters',
  standalone: true,
  imports: [],
  host: { id: 'shop-filters' },
  templateUrl: './shop-filters.html',
  styleUrl: './shop-filters.css'
})
export class ShopFilters {
  shopService = inject(ShopService);

  ownershipOptions: { id: OwnershipFilter; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'possuidos', label: 'Possuídos' },
    { id: 'nao-possuidos', label: 'Não Possuídos' }
  ];

  onRarityChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value as ItemRarity | 'todas';
    this.shopService.activeRarity.set(value);
  }

  onPriceInput(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.shopService.maxPrice.set(value);
  }
}