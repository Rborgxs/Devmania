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

interface DuelBubble {
  mode: 'feat' | 'fix' | 'style';
  label: string;
  kingQuote: string;
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

  readonly activeBubble = signal(0);

  readonly bubbles: DuelBubble[] = [
    { mode: 'feat', label: 'Feat', kingQuote: 'Construa uma funcionalidade do zero, aventureiro.' },
    { mode: 'fix', label: 'Fix', kingQuote: 'Encontre o erro escondido antes que o tempo acabe.' },
    { mode: 'style', label: 'Style', kingQuote: 'Refatore com elegância — código limpo também é honra.' }
  ];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset['bubbleIndex']);
            this.activeBubble.set(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    this.sectionRef.nativeElement
      .querySelectorAll('[data-bubble-index]')
      .forEach(el => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}