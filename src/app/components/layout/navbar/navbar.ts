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

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  readonly isFilled = signal(false);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const landscapeEl = document.getElementById('landscape');
    if (!landscapeEl) {
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.isFilled.set(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    this.observer.observe(landscapeEl);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + startY - 80; // offset da navbar fixa
    const distance = targetY - startY;
    const duration = 600;
    const steps = 12; // quantidade de "saltos" — quanto menor, mais pixelado/entrecortado
    const stepDuration = duration / steps;

    let currentStep = 0;

    const jump = () => {
      currentStep++;
      const progress = currentStep / steps;
      window.scrollTo(0, startY + distance * progress);

      if (currentStep < steps) {
        setTimeout(jump, stepDuration);
      }
    };

    jump();
  }
} 