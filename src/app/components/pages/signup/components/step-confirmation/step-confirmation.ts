import { Component, signal, computed, inject, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../../../../services/signup';
import { AuthService } from '../../../../../services/auth';

type ConfirmationPhase = 'form' | 'transition';
type UsernameStatus = 'idle' | 'checking' | 'available' | 'taken';

const REDIRECT_DELAY_MS = 2500;
const CHECK_DELAY_MS = 700;

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

  private checkTimeout?: ReturnType<typeof setTimeout>;

  readonly phase = signal<ConfirmationPhase>('form');

  readonly name = signal(this.signupService.data().name);
  readonly username = signal(this.signupService.data().username);
  readonly usernameStatus = signal<UsernameStatus>('idle');

  constructor() {
    effect(() => {
      const value = this.username().trim();
      clearTimeout(this.checkTimeout);

      if (value.length === 0) {
        this.usernameStatus.set('idle');
        return;
      }

      this.usernameStatus.set('checking');

      this.checkTimeout = setTimeout(() => {
        // Simulação: nomes com menos de 4 caracteres ou terminando em "1"
        // aparecem como indisponíveis, só pra ilustrar o feedback visual.
        const taken = value.length < 4 || value.endsWith('1');
        this.usernameStatus.set(taken ? 'taken' : 'available');
      }, CHECK_DELAY_MS);
    });
  }

  readonly canFinish = computed(() =>
    this.name().trim().length > 0 &&
    this.username().trim().length > 0 &&
    this.usernameStatus() === 'available'
  );

  onUsernameInput(value: string): void {
    const sanitized = value.replace(/\s/g, '').toLowerCase();
    this.username.set(sanitized);
  }

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