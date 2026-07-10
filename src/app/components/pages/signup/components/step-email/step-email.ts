import { Component, signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupService } from '../../../../../services/signup';
import { KingDialogueLayout } from '../../../../layout/king-dialogue/king-dialogue';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Component({
  selector: 'app-step-email',
  standalone: true,
  imports: [FormsModule, KingDialogueLayout],
  templateUrl: './step-email.html',
  styleUrl: './step-email.css'
})
export class StepEmail {
  private readonly signupService = inject(SignupService);

  readonly email = signal(this.signupService.data().email);
  readonly touched = signal(false);

  readonly isValid = computed(() => EMAIL_REGEX.test(this.email().trim()));
  readonly showError = computed(() => this.touched() && !this.isValid() && this.email().length > 0);

  onBlur(): void {
    this.touched.set(true);
  }

  continue(): void {
    if (!this.isValid()) {
      return;
    }
    this.signupService.updateData({ email: this.email().trim() });
    this.signupService.goToNextStep();
  }
}