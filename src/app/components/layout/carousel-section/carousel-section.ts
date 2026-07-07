import { Component, signal } from '@angular/core';

interface DevCard {
  level: 'junior' | 'pleno' | 'senior';
  title: string;
  frontText: string;
  backText: string;
  iconUrl: string;
}

@Component({
  selector: 'app-carousel-section',
  standalone: true,
  templateUrl: './carousel-section.html',
  styleUrl: './carousel-section.css'
})
export class CarouselSection {
  readonly slides = ['/assets/carousel-1.png', '/assets/carousel-2.png', '/assets/carousel-3.png'];
  readonly activeSlide = signal(0);

  readonly cards: DevCard[] = [
    { level: 'junior', title: 'Dev Júnior', frontText: 'Está começando agora?', backText: 'Aprenda lógica com quests guiadas e desafios progressivos, do zero ao seu primeiro duelo.', iconUrl: '/assets/dev-junior.png' },
    { level: 'pleno', title: 'Dev Pleno', frontText: 'Já programa, quer evoluir?', backText: 'Enfrente duelos em tempo real e trilhas avançadas para consolidar seu conhecimento.', iconUrl: '/assets/dev-pleno.png' },
    { level: 'senior', title: 'Dev Sênior', frontText: 'Domina a arte do código?', backText: 'Lidere torneios, ajude a comunidade na Guilda e conquiste o topo das ligas.', iconUrl: '/assets/dev-senior.png' }
  ];

  readonly flippedCards = signal<Set<string>>(new Set());

  setSlide(index: number): void {
    this.activeSlide.set(index);
  }

  toggleFlip(level: string): void {
    const current = new Set(this.flippedCards());
    current.has(level) ? current.delete(level) : current.add(level);
    this.flippedCards.set(current);
  }

  isFlipped(level: string): boolean {
    return this.flippedCards().has(level);
  }
}