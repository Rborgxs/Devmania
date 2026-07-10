import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from '../../../services/signup';
import { StepWelcome } from './components/step-welcome/step-welcome';
import { StepEmail } from './components/step-email/step-email';
import { StepVerification } from './components/step-verification/step-verification';
import { StepPassword } from './components/step-password/step-password';
import { StepMaster } from './components/step-master/step-master';
import { StepConfirmation } from './components/step-confirmation/step-confirmation';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [StepWelcome, StepEmail, StepVerification, StepPassword, StepMaster, StepConfirmation],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  readonly signupService = inject(SignupService);
  private readonly router = inject(Router);

  handleBack(): void {
    if (this.signupService.canGoBack()) {
      this.signupService.goToPreviousStep();
    } else {
      this.router.navigateByUrl('/');
    }
  }
}