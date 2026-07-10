import { Injectable, signal, computed } from '@angular/core';
import { SignupStep, SignupData } from '../models/signup';

const STEP_ORDER: SignupStep[] = [
  'welcome', 'email', 'verification', 'password', 'master', 'confirmation'
];

@Injectable({ providedIn: 'root' })
export class SignupService {
  private readonly currentStepSignal = signal<SignupStep>('welcome');
  private readonly dataSignal = signal<SignupData>({
    authProvider: null,
    email: '',
    verificationCode: '',
    password: '',
    masterId: null,
    name: '',
    username: ''
  });

  readonly currentStep = this.currentStepSignal.asReadonly();
  readonly data = this.dataSignal.asReadonly();

  readonly currentStepIndex = computed(() =>
    STEP_ORDER.indexOf(this.currentStepSignal())
  );

  readonly totalSteps = STEP_ORDER.length;

  readonly progressPercent = computed(() =>
    Math.round(((this.currentStepIndex() + 1) / this.totalSteps) * 100)
  );

  readonly canGoBack = computed(() => this.currentStepIndex() > 0);

  updateData(partial: Partial<SignupData>): void {
    this.dataSignal.update(current => ({ ...current, ...partial }));
  }

  goToNextStep(): void {
    const nextIndex = this.currentStepIndex() + 1;
    if (nextIndex < STEP_ORDER.length) {
      this.currentStepSignal.set(STEP_ORDER[nextIndex]);
    }
  }

  goToPreviousStep(): void {
    const prevIndex = this.currentStepIndex() - 1;
    if (prevIndex >= 0) {
      this.currentStepSignal.set(STEP_ORDER[prevIndex]);
    }
  }

  reset(): void {
    this.currentStepSignal.set('welcome');
    this.dataSignal.set({
      authProvider: null,
      email: '',
      verificationCode: '',
      password: '',
      masterId: null,
      name: '',
      username: ''
    });
  }
}