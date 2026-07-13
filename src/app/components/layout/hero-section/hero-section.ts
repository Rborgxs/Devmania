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
    { src: '/assets/icons/angular_icon.png', alt: 'Angular', positionClass: 'hero__float--1' },
    { src: '/assets/icons/html_icon.png', alt: 'HTML', positionClass: 'hero__float--2' },
    { src: '/assets/icons/typescript_icon.png', alt: 'TypeScript', positionClass: 'hero__float--3' },
    { src: '/assets/icons/git_icon.png', alt: 'Git', positionClass: 'hero__float--4' },
    { src: '/assets/icons/python_icon.png', alt: 'Python', positionClass: 'hero__float--5' }
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