import { Component, signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../../../../services/signup';
import { AuthService } from '../../../../../services/auth';


type ConfirmationPhase = 'form' | 'transition';

const REDIRECT_DELAY_MS = 2500;

@Component({
  selector: 'app-step-confirmation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './step-confirmation.html',
  styleUrl: './step-confirmation.css'
})
export class StepConfirmation {
  private readonly signupService = inject(SignupService);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  readonly phase = signal<ConfirmationPhase>('form');

  readonly name = signal(this.signupService.data().name);
  readonly username = signal(this.signupService.data().username);

  readonly canFinish = computed(() =>
    this.name().trim().length > 0 && this.username().trim().length > 0
  );

  finishSignup(): void {
    if (!this.canFinish()) {
      return;
    }

    this.signupService.updateData({
      name: this.name().trim(),
      username: this.username().trim()
    });

    this.phase.set('transition');
    this.authService.login();

    setTimeout(() => {
      this.router.navigateByUrl('/masmorra');
    }, REDIRECT_DELAY_MS);
  }
}