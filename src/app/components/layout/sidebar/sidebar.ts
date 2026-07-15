import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../../services/layout';
import { AuthService } from '../../../services/auth';
import { NavItem } from '../../../models/nav-item';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  host: { id: 'sidebar' },
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  layout = inject(LayoutService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  mainItems: NavItem[] = [
    { label: 'Masmorra', icon: 'main_icon_sidebar', route: '/masmorra' },
    { label: 'Arena', icon: 'arena_icon_sidebar', route: '/arena' },
    { label: 'Academia', icon: 'academia_icon_sidebar', route: '/academia' },
    { label: 'Taberna', icon: 'taberna_icon_sidebar', route: '/taberna' }
  ];

  bottomItems: NavItem[] = [
    { label: 'Oficina', icon: 'oficina_icon_sidebar', route: '/oficina' },
    { label: 'Configurações', icon: 'settings_icon_sidebar', route: '/configuracoes' }
  ];

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}