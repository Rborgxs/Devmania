import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID, output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duel-search-modal',
  standalone: true,
  imports: [],
  host: { id: 'duel-search-modal' },
  templateUrl: './duel-search-modal.html',
  styleUrl: './duel-search-modal.css'
})
export class DuelSearchModal implements OnInit, OnDestroy {
  cancel = output<void>();

  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  elapsedSeconds = signal(0);
  private tickInterval?: ReturnType<typeof setInterval>;
  private matchTimeout?: ReturnType<typeof setTimeout>;

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

    this.tickInterval = setInterval(() => {
      this.elapsedSeconds.update(v => v + 1);
    }, 1000);

    const randomDelay = 4000 + Math.random() * 6000;
    this.matchTimeout = setTimeout(() => {
      this.router.navigateByUrl('/duelo/match-001');
    }, randomDelay);
  }

  cancelSearch(): void {
    this.cancel.emit();
  }

  ngOnDestroy(): void {
    if (this.tickInterval) {
      clearInterval(this.tickInterval);
    }
    if (this.matchTimeout) {
      clearTimeout(this.matchTimeout);
    }
  }
}