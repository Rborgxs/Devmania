import { Component, inject, signal } from '@angular/core';
import { AcademiaService } from '../../../../services/academia';
import { SearchFilters } from './components/search-filters/search-filters';
import { SubjectCard } from './components/subject-card/subject-card';
import { PurchaseTrainingModal } from './components/purchase-training-modal/purchase-training-modal';
import { MentorRecommendation } from './components/mentor-recommendation/mentor-recommendation';
import { PerformanceDashboard } from './components/performance-dashboard/performance-dashboard';
import { HeroJourney } from './components/hero-journey/hero-journey';
import { Subject, TrainingDifficulty } from '../../../../models/subject';

@Component({
  selector: 'app-academia',
  standalone: true,
  imports: [SearchFilters, SubjectCard, PurchaseTrainingModal, MentorRecommendation, PerformanceDashboard, HeroJourney],
  host: { id: 'academia' },
  templateUrl: './academia.html',
  styleUrl: './academia.css'
})
export class Academia {
  academiaService = inject(AcademiaService);

  isPurchaseModalOpen = signal(false);
  selectedSubject = signal<Subject | null>(null);

  onSubjectSelect(subject: Subject): void {
    this.selectedSubject.set(subject);
    this.isPurchaseModalOpen.set(true);
  }

  closePurchaseModal(): void {
    this.isPurchaseModalOpen.set(false);
  }

  onTrainingConfirmed(data: { subject: Subject; difficulty: TrainingDifficulty; quantity: number }): void {
    console.log('treino iniciado', data);
    this.isPurchaseModalOpen.set(false);
  }
}