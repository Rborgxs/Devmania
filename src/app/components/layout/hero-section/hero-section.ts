import { Component } from '@angular/core';

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
export class HeroSection {
  readonly comments: FloatingElement[] = [
    { src: 'assets/hero-comment-1.png', alt: 'Comentário', positionClass: 'hero__float--comment-1' },
    { src: 'assets/hero-comment-2.png', alt: 'Comentário', positionClass: 'hero__float--comment-2' }
  ];

  readonly sideIcons: FloatingElement[] = [
    { src: 'assets/hero-icon-1.png', alt: 'Ícone lateral', positionClass: 'hero__float--icon-1' },
    { src: 'assets/hero-icon-2.png', alt: 'Ícone lateral', positionClass: 'hero__float--icon-2' },
    { src: 'assets/hero-icon-3.png', alt: 'Ícone lateral', positionClass: 'hero__float--icon-3' }
  ];
}