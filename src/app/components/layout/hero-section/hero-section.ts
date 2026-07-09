import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface FloatingElement {
  src: string;
  alt: string;
  positionClass: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection implements AfterViewInit, OnDestroy {
  @ViewChild('contentRef') contentRef!: ElementRef<HTMLElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  readonly comments: FloatingElement[] = [
    { src: 'assets/hero-comment-1.png', alt: 'Comentário', positionClass: 'hero__float--comment-1' },
    { src: 'assets/hero-comment-2.png', alt: 'Comentário', positionClass: 'hero__float--comment-2' }
  ];

  readonly sideIcons: FloatingElement[] = [
    { src: 'assets/hero-icon-1.png', alt: 'Ícone lateral', positionClass: 'hero__float--icon-1' },
    { src: 'assets/hero-icon-2.png', alt: 'Ícone lateral', positionClass: 'hero__float--icon-2' },
    { src: 'assets/hero-icon-3.png', alt: 'Ícone lateral', positionClass: 'hero__float--icon-3' }
  ];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.contentRef.nativeElement.classList.add('reveal--visible');
        }
      },
      { threshold: 0.2 }
    );

    this.observer.observe(this.contentRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}