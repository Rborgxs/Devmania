import { Component, signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupService } from '../../../../../services/signup';
import { KingDialogueLayout } from '../../../../layout/king-dialogue/king-dialogue';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  selector: 'app-step-welcome',
  standalone: true,
  imports: [FormsModule, KingDialogueLayout],
  templateUrl: './step-welcome.html',
  styleUrl: './step-welcome.css'
})
export class StepWelcome {
  private readonly signupService = inject(SignupService);

  readonly email = signal('');
  readonly touched = signal(false);

  readonly isEmailValid = computed(() => EMAIL_REGEX.test(this.email().trim()));
  readonly showEmailError = computed(() => this.touched() && !this.isEmailValid() && this.email().length > 0);

  continueWith(provider: 'google' | 'github'): void {
    this.signupService.updateData({ authProvider: provider });
    this.signupService.goToNextStep();
  }

  onEmailBlur(): void {
    this.touched.set(true);
  }

  continueWithEmail(): void {
    if (!this.isEmailValid()) {
      this.touched.set(true);
      return;
    }
    this.signupService.submitEmailFromWelcome(this.email().trim());
  }
}