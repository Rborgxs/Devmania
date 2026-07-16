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
    description: 'Está começando agora? A Devmania te guia do primeiro "Hello World" ao seu primeiro duelo, com quests pensadas pra construir sua lógica passo a passo.',
    features: [
      'Quests diárias com dificuldade progressiva',
      'Trilhas guiadas de linguagens e frameworks',
      'Feedback do Mestre a cada desafio'
    ]
  },
  {
    frontImage: 'assets/icons/card_pleno_front.png',
    backImage: 'assets/icons/card_pleno_back.png',
    title: 'Dev Pleno',
    description: 'Já programa e quer evoluir? Encare duelos em tempo real na Arena e suba de posição nas ligas enquanto aprofunda seu domínio técnico.',
    features: [
      'Duelos Feat, Fix e Style contra outros devs',
      'Treinos livres configuráveis por linguagem',
      'Progresso competitivo através das ligas'
    ]
  },
  {
    frontImage: 'assets/icons/card_senior_front.png',
    backImage: 'assets/icons/card_senior_back.png',
    title: 'Dev Sênior',
    description: 'Domina a arte do código? Lidere torneios, compartilhe conhecimento na Guilda e conquiste o topo das ligas mais disputadas da Devmania.',
    features: [
      'Torneios e recompensas para se divertir',
      'Participação ativa nas guildas e chats',
      'Insígnias exclusivas por linguagem dominada'
    ]
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