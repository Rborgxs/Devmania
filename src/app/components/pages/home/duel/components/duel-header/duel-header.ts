import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DuelStateService } from '../../../../../../services/duel-state';

@Component({
  selector: 'app-duel-header',
  standalone: true,
  imports: [],
  host: { id: 'duel-header' },
  templateUrl: './duel-header.html',
  styleUrl: './duel-header.css'
})
export class DuelHeader implements OnInit, OnDestroy {
  duelState = inject(DuelStateService);
  private readonly platformId = inject(PLATFORM_ID);

  elapsedSeconds = signal(0);
  private intervalId?: ReturnType<typeof setInterval>;

  formattedTime(): string {
    const total = this.elapsedSeconds();
    const minutes = Math.floor(total / 60);
    const seconds = total % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.intervalId = setInterval(() => {
      if (!this.duelState.matchEnded()) {
        this.elapsedSeconds.update(v => v + 1);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}