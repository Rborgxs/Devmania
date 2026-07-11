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

interface FloatingIcon {
  src: string;
  alt: string;
  positionClass: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  host: { id: 'hero' },
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection implements AfterViewInit, OnDestroy {
  @ViewChild('contentRef') contentRef!: ElementRef<HTMLElement>;

  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  readonly floatingIcons: FloatingIcon[] = [
    { src: 'assets/icons/dev-js.png', alt: 'JavaScript', positionClass: 'hero__float--1' },
    { src: 'assets/icons/dev-html.png', alt: 'HTML', positionClass: 'hero__float--2' },
    { src: 'assets/icons/dev-angular.png', alt: 'Angular', positionClass: 'hero__float--3' },
    { src: 'assets/icons/dev-git.png', alt: 'Git', positionClass: 'hero__float--4' },
    { src: 'assets/icons/dev-css.png', alt: 'CSS', positionClass: 'hero__float--5' }
  ];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && this.contentRef.nativeElement.classList.add('reveal--visible'),
      { threshold: 0.2 }
    );
    this.observer.observe(this.contentRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}