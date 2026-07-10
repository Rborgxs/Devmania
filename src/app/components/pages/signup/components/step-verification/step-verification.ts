import {
  Component,
  signal,
  computed,
  inject,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { SignupService } from '../../../../../services/signup';
import { KingDialogueLayout } from '../../../../layout/king-dialogue/king-dialogue';

const CODE_LENGTH = 4;
const RESEND_COOLDOWN_SECONDS = 30;

@Component({
  selector: 'app-step-verification',
  standalone: true,
  imports: [KingDialogueLayout],
  templateUrl: './step-verification.html',
  styleUrl: './step-verification.css'
})
export class StepVerification implements AfterViewInit {
  @ViewChildren('digitInput') digitInputs!: QueryList<ElementRef<HTMLInputElement>>;

  private readonly signupService = inject(SignupService);

  readonly digits = signal<string[]>(Array(CODE_LENGTH).fill(''));
  readonly resendCountdown = signal(RESEND_COOLDOWN_SECONDS);

  readonly code = computed(() => this.digits().join(''));
  readonly isComplete = computed(() => this.code().length === CODE_LENGTH);
  readonly canResend = computed(() => this.resendCountdown() === 0);

  private resendTimer?: ReturnType<typeof setInterval>;

  ngAfterViewInit(): void {
    this.startResendCountdown();
    this.digitInputs.first?.nativeElement.focus();
  }

  onInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').slice(-1);

    const updated = [...this.digits()];
    updated[index] = value;
    this.digits.set(updated);

    if (value && index < CODE_LENGTH - 1) {
      this.digitInputs.get(index + 1)?.nativeElement.focus();
    }
  }

  onKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Backspace' && !this.digits()[index] && index > 0) {
      this.digitInputs.get(index - 1)?.nativeElement.focus();
    }
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const pasted = event.clipboardData?.getData('text').replace(/\D/g, '').slice(0, CODE_LENGTH) ?? '';
    if (!pasted) {
      return;
    }

    const updated = Array(CODE_LENGTH).fill('');
    for (let i = 0; i < pasted.length; i++) {
      updated[i] = pasted[i];
    }
    this.digits.set(updated);

    const lastFilledIndex = Math.min(pasted.length, CODE_LENGTH) - 1;
    this.digitInputs.get(lastFilledIndex)?.nativeElement.focus();
  }

  continue(): void {
    if (!this.isComplete()) {
      return;
    }
    this.signupService.updateData({ verificationCode: this.code() });
    this.signupService.goToNextStep();
  }

  resendCode(): void {
    if (!this.canResend()) {
      return;
    }
    this.startResendCountdown();
  }

  private startResendCountdown(): void {
    this.resendCountdown.set(RESEND_COOLDOWN_SECONDS);
    clearInterval(this.resendTimer);

    this.resendTimer = setInterval(() => {
      const current = this.resendCountdown();
      if (current <= 1) {
        clearInterval(this.resendTimer);
        this.resendCountdown.set(0);
      } else {
        this.resendCountdown.set(current - 1);
      }
    }, 1000);
  }
}