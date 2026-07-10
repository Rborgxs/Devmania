import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../../../services/layout';
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

  mainItems: NavItem[] = [
    { label: 'Masmorra', icon: 'masmorra', route: '/masmorra' },
    { label: 'Arena', icon: 'arena', route: '/arena' },
    { label: 'Academia', icon: 'academia', route: '/academia' },
    { label: 'Taberna', icon: 'taberna', route: '/taberna' }
  ];

  bottomItems: NavItem[] = [
    { label: 'Oficina', icon: 'oficina', route: '/oficina' },
    { label: 'Configurações', icon: 'config', route: '/configuracoes' }
  ];
}