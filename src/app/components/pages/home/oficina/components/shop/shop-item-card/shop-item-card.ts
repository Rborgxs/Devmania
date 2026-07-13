import { Component, input, inject } from '@angular/core';
import { ShopItem } from '../../../../../../../models/shop-item';
import { ShopService } from '../../../../../../../services/shop';
import { WalletService } from '../../../../../../../services/wallet';

@Component({
  selector: 'app-shop-item-card',
  standalone: true,
  imports: [],
  templateUrl: './shop-item-card.html',
  styleUrl: './shop-item-card.css'
})
export class ShopItemCard {
  item = input.required<ShopItem>();

  shopService = inject(ShopService);
  private readonly wallet = inject(WalletService);

  canAfford(): boolean {
    return this.wallet.hasEnough(this.item().price);
  }

  onActionClick(): void {
    const item = this.item();
    if (this.shopService.isOwned(item.id)) {
      this.shopService.equipItem(item);
    } else {
      this.shopService.purchaseItem(item);
    }
  }
}