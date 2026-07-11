import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  host: { id: 'login' },
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private readonly router = inject(Router);

  username = signal('');
  password = signal('');
  showPassword = signal(false);
  lgpdAccepted = signal(false);

  togglePassword(): void {
    this.showPassword.update(v => !v);
  }

  onSubmit(): void {
    if (!this.lgpdAccepted()) {
      return;
    }
    console.log(this.username(), this.password());
    this.router.navigateByUrl('/masmorra');
  }

  loginWithGithub(): void {
    console.log('github oauth pendente');
  }

  loginWithGoogle(): void {
    console.log('google oauth pendente');
  }
}