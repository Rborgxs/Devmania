import {
  Component,
  AfterViewInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  signal
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

const SCROLL_TRIGGER_PX = 30;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private scrollHandler = () => this.onScroll();

  readonly isFilled = signal(false);
  readonly isMenuOpen = signal(false);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.scrollHandler);
    }
  }

  private onScroll(): void {
    this.isFilled.set(window.scrollY > SCROLL_TRIGGER_PX);
  }

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.closeMenu();
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const target = document.getElementById(sectionId);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}