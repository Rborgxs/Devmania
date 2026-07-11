import { Component, input, output, signal, effect, inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chest } from '../../../../../../../models/chest';

@Component({
  selector: 'app-chest-slot',
  standalone: true,
  imports: [],
  templateUrl: './chest-slot.html',
  styleUrl: './chest-slot.css'
})
export class ChestSlot implements OnDestroy {
  chest = input.required<Chest>();
  openChest = output<string>();
  unlocked = output<string>();

  private readonly platformId = inject(PLATFORM_ID);
  private intervalId?: ReturnType<typeof setInterval>;

  remainingLabel = signal('');

  constructor() {
    effect(() => {
      const current = this.chest();
      this.clearTimer();

      if (current.status === 'bloqueado' && current.unlocksAt && isPlatformBrowser(this.platformId)) {
        this.tick(current.id, current.unlocksAt);
        this.intervalId = setInterval(() => this.tick(current.id, current.unlocksAt!), 1000);
      }
    });
  }

  private tick(chestId: string, unlocksAt: number): void {
    const diff = unlocksAt - Date.now();

    if (diff <= 0) {
      this.remainingLabel.set('00:00:00');
      this.clearTimer();
      this.unlocked.emit(chestId);
      return;
    }

    const hours = Math.floor(diff / 3_600_000);
    const minutes = Math.floor((diff % 3_600_000) / 60_000);
    const seconds = Math.floor((diff % 60_000) / 1000);

    this.remainingLabel.set(
      `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    );
  }

  private clearTimer(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  onOpenClick(): void {
    this.openChest.emit(this.chest().id);
  }

  ngOnDestroy(): void {
    this.clearTimer();
  }
}