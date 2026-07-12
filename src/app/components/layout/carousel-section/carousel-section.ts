import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface CarouselSlide {
  frontImage: string;
  backImage: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-carousel-section',
  standalone: true,
  templateUrl: './carousel-section.html',
  styleUrl: './carousel-section.css'
})
export class CarouselSection implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private autoplayTimer?: ReturnType<typeof setInterval>;
  private readonly autoplayDelay = 5000;

  readonly activeSlide = signal(0);
  readonly flippedIndexes = signal<Set<number>>(new Set());

  readonly slides: CarouselSlide[] = [
    {
      frontImage: 'assets/icons/card_junior_front.png',
      backImage: 'assets/icons/card_junior_back.png',
      title: 'Dev Júnior',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend efficitur porta.',
      features: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed porta neque non odio']
    },
    {
      frontImage: 'assets/icons/card_pleno_front.png',
      backImage: 'assets/icons/card_pleno_back.png',
      title: 'Dev Pleno',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend efficitur porta.',
      features: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed porta neque non odio']
    },
    {
      frontImage: 'assets/icons/card_senior_front.png',
      backImage: 'assets/icons/card-senior-back.png',
      title: 'Dev Sênior',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend efficitur porta.',
      features: ['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed porta neque non odio']
    }
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  get currentSlide(): CarouselSlide {
    return this.slides[this.activeSlide()];
  }

  isCurrentFlipped(): boolean {
    return this.flippedIndexes().has(this.activeSlide());
  }

  setSlide(index: number): void {
    this.activeSlide.set(index);
    this.restartAutoplay();
  }

  toggleFlip(): void {
    const current = new Set(this.flippedIndexes());
    const index = this.activeSlide();
    current.has(index) ? current.delete(index) : current.add(index);
    this.flippedIndexes.set(current);
    this.restartAutoplay();
  }

  private startAutoplay(): void {
    this.autoplayTimer = setInterval(() => {
      this.activeSlide.set((this.activeSlide() + 1) % this.slides.length);
    }, this.autoplayDelay);
  }

  private stopAutoplay(): void {
    if (this.autoplayTimer) clearInterval(this.autoplayTimer);
  }

  private restartAutoplay(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.stopAutoplay();
    this.startAutoplay();
  }
}