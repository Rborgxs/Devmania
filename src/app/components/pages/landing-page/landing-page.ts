import { Component } from '@angular/core';

import { Navbar } from '../../layout/navbar/navbar';
import { Landscape } from '../../layout/landscape/landscape'
import { HeroSection } from '../../layout/hero-section/hero-section';
import { CarouselSection } from '../../layout/carousel-section/carousel-section';
import { KingSection } from '../../layout/king-section/king-section';
import { AboutSection } from '../../layout/about-section/about-section';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [Navbar, Landscape, HeroSection, CarouselSection, KingSection, AboutSection],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {}