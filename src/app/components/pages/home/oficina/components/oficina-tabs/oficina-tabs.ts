import { Component, input, output } from '@angular/core';
import { OficinaTab } from '../../../../../../models/oficina';

interface TabOption {
  id: OficinaTab;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-oficina-tabs',
  standalone: true,
  imports: [],
  templateUrl: './oficina-tabs.html',
  styleUrl: './oficina-tabs.css'
})
export class OficinaTabs {
  activeTab = input.required<OficinaTab>();
  tabChange = output<OficinaTab>();

  tabs: TabOption[] = [
    { id: 'avatar', label: 'Avatar', icon: '🧙' },
    { id: 'loja', label: 'Loja', icon: '🛒' },
    { id: 'perfil', label: 'Perfil', icon: '👤' }
  ];
}