import { Component, inject, computed } from '@angular/core';
import { Router } from '@angular/router';
import { HeroJourneyService } from '../../../../../../services/hero-journey';

@Component({
  selector: 'app-hero-journey',
  standalone: true,
  imports: [],
  host: { id: 'hero-journey' },
  templateUrl: './hero-journey.html',
  styleUrl: './hero-journey.css'
})
export class HeroJourney {
  journeyService = inject(HeroJourneyService);
  private readonly router = inject(Router);

  nodes = computed(() => this.journeyService.positionedNodes());

  svgWidth = computed(() => this.nodes().length * 130 + 60);
  svgHeight = computed(() => 100);

  pathData = computed(() => {
    const points = this.nodes();
    if (points.length < 2) {
      return '';
    }

    let d = `M ${points[0].x + 20} ${points[0].y + 20}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2 + 20;
      d += ` Q ${midX} ${prev.y + 20}, ${curr.x + 20} ${curr.y + 20}`;
    }

    return d;
  });

  onNodeClick(route: string | undefined): void {
    if (route) {
      this.router.navigateByUrl(route);
    }
  }
}