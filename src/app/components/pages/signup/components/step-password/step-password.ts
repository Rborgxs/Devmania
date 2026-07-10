import { Component, signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupService } from '../../../../../services/signup';
import { KingDialogueLayout } from '../../../../layout/king-dialogue/king-dialogue';

interface PasswordRule {
  label: string;
  test: (value: string) => boolean;
}

const RULES: PasswordRule[] = [
  { label: 'Mínimo de 8 caracteres', test: v => v.length >= 8 },
  { label: 'Letra maiúscula', test: v => /[A-Z]/.test(v) },
  { label: 'Letra minúscula', test: v => /[a-z]/.test(v) },
  { label: 'Número', test: v => /\d/.test(v) },
  { label: 'Caractere especial', test: v => /[!@#$%^&*(),.?":{}|<>]/.test(v) }
];

@Component({
  selector: 'app-step-password',
  standalone: true,
  imports: [FormsModule, KingDialogueLayout],
  templateUrl: './step-password.html',
  styleUrl: './step-password.css'
})
export class StepPassword {
  private readonly signupService = inject(SignupService);

  readonly password = signal('');
  readonly confirmPassword = signal('');
  readonly showPassword = signal(false);

  readonly ruleResults = computed(() =>
    RULES.map(rule => ({ label: rule.label, passed: rule.test(this.password()) }))
  );

  readonly allRulesPassed = computed(() =>
    this.ruleResults().every(r => r.passed)
  );

  readonly passwordsMatch = computed(() =>
    this.password().length > 0 && this.password() === this.confirmPassword()
  );

  readonly strength = computed(() => {
    const passedCount = this.ruleResults().filter(r => r.passed).length;
    if (passedCount <= 1) return { label: 'Fraca', percent: 20 };
    if (passedCount <= 3) return { label: 'Média', percent: 60 };
    if (passedCount === 4) return { label: 'Forte', percent: 80 };
    return { label: 'Muito forte', percent: 100 };
  });

  readonly canContinue = computed(() =>
    this.allRulesPassed() && this.passwordsMatch()
  );

  toggleShowPassword(): void {
    this.showPassword.update(v => !v);
  }

  continue(): void {
    if (!this.canContinue()) {
      return;
    }
    this.signupService.updateData({ password: this.password() });
    this.signupService.goToNextStep();
  }
}