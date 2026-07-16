import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  signal,
  inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface DuelCard {
  mode: 'feat' | 'fix' | 'style';
  image: string;
  title: string;
  description: string;
  kingQuote: string;
  kingImage: string;
}

@Component({
  selector: 'app-king-section',
  standalone: true,
  templateUrl: './king-section.html',
  styleUrl: './king-section.css'
})
export class KingSection implements AfterViewInit, OnDestroy {
  @ViewChild('sectionRef') sectionRef!: ElementRef<HTMLElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  readonly activeCard = signal(0);

  readonly cards: DuelCard[] = [
    {
      mode: 'feat',
      image: '/assets/icons/feat_logo.png',
      title: 'Feat',
      description: 'Construa uma funcionalidade nova do zero, seguindo os requisitos do desafio.',
      kingQuote: 'Construa uma funcionalidade do zero, aventureiro.',
      kingImage: '/assets/characters/rei_desafio.png'
    },
    {
      mode: 'fix',
      image: '/assets/icons/fix_logo.png',
      title: 'Fix',
      description: 'Encontre e corrija o bug escondido no código antes que o tempo se esgote.',
      kingQuote: 'Encontre o erro escondido antes que o tempo acabe.',
      kingImage: '/assets/characters/rei_fix.png'
    },
    {
      mode: 'style',
      image: '/assets/icons/style_logo.png',
      title: 'Style',
      description: 'Refatore o código existente, mantendo a mesma função com mais elegância.',
      kingQuote: 'Refatore com elegância! Uma tela linda também é honra.',
      kingImage: '/assets/characters/rei_default.png'
    }
  ];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset['cardIndex']);
            this.activeCard.set(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    this.sectionRef.nativeElement
      .querySelectorAll('[data-card-index]')
      .forEach(el => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  cardState(index: number): 'active' | 'behind-1' | 'behind-2' {
    const active = this.activeCard();
    const diff = (index - active + this.cards.length) % this.cards.length;
    if (diff === 0) return 'active';
    if (diff === 1) return 'behind-1';
    return 'behind-2';
  }

  selectCard(index: number): void {
    this.activeCard.set(index);
  }
}