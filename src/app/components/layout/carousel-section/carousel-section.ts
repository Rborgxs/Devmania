import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface CardStats {
  attack: number;
  defense: number;
  speed: number;
  courage: number;
}

interface CarouselCard {
  level: number;
  name: string;
  imageUrl: string;
  backDescription: string;
  stats: CardStats;
}

interface CarouselFeature {
  text: string;
}

interface CarouselSlide {
  card: CarouselCard;
  title: string;
  description: string;
  features: CarouselFeature[];
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
  readonly maxStat = 10;

  readonly slides: CarouselSlide[] = [
    {
      card: {
        level: 4,
        name: 'Júnior',
        imageUrl: 'assets/carousel-junior.png',
        backDescription: 'Está começando agora, mas já carrega a coragem de encarar seu primeiro desafio.',
        stats: { attack: 3, defense: 4, speed: 5, courage: 6 }
      },
      title: 'Dev Júnior',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend efficitur porta. Sed porta neque non odio iaculis, id imperdiet mauris scelerisque.',
      features: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing' }
      ]
    },
    {
      card: {
        level: 7,
        name: 'Pleno',
        imageUrl: 'assets/carousel-pleno.png',
        backDescription: 'Já domina o básico e busca refinar suas técnicas em batalhas mais complexas.',
        stats: { attack: 6, defense: 6, speed: 6, courage: 7 }
      },
      title: 'Dev Pleno',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend efficitur porta. Sed porta neque non odio iaculis, id imperdiet mauris scelerisque.',
      features: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing' }
      ]
    },
    {
      card: {
        level: 10,
        name: 'Sênior',
        imageUrl: 'assets/carousel-senior.png',
        backDescription: 'Domina a arte do código e lidera outros aventureiros rumo à maestria.',
        stats: { attack: 9, defense: 8, speed: 7, courage: 9 }
      },
      title: 'Dev Sênior',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend efficitur porta. Sed porta neque non odio iaculis, id imperdiet mauris scelerisque.',
      features: [
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing' },
        { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing' }
      ]
    }
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoplay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  get currentSlide(): CarouselSlide {
    return this.slides[this.activeSlide()];
  }

  get statBlocks() {
    return Array.from({ length: this.maxStat });
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
      const next = (this.activeSlide() + 1) % this.slides.length;
      this.activeSlide.set(next);
    }, this.autoplayDelay);
  }

  private stopAutoplay(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
  }

  private restartAutoplay(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.stopAutoplay();
    this.startAutoplay();
  }
}