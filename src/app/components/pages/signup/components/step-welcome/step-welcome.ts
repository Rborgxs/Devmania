import { Component, inject } from '@angular/core';
import { SignupService } from '../../../../../services/signup';
import { KingDialogueLayout } from '../../../../layout/king-dialogue/king-dialogue';

@Component({
  selector: 'app-step-welcome',
  standalone: true,
  imports: [KingDialogueLayout],
  templateUrl: './step-welcome.html',
  styleUrl: './step-welcome.css'
})
export class StepWelcome {
  private readonly signupService = inject(SignupService);

  continueWith(provider: 'google' | 'github'): void {
    this.signupService.updateData({ authProvider: provider });
    this.signupService.goToNextStep();
  }
}