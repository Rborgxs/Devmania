import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WalletService {
  coins = signal(150);

  hasEnough(amount: number): boolean {
    return this.coins() >= amount;
  }

  spend(amount: number): void {
    if (this.hasEnough(amount)) {
      this.coins.update(c => c - amount);
    }
  }
}