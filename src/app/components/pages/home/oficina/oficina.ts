import { Component, inject } from '@angular/core';
import { OficinaTabs } from './components/oficina-tabs/oficina-tabs';
import { AvatarEditor } from './components/avatar-editor/avatar-editor';
import { Shop } from './components/shop/shop';
import { Profile } from './components/profile/profile';
import { OficinaTab } from '../../../../models/oficina';
import { OficinaStateService } from '../../../../services/oficina-state';

@Component({
  selector: 'app-oficina',
  standalone: true,
  imports: [OficinaTabs, AvatarEditor, Shop, Profile],
  host: { id: 'oficina' },
  templateUrl: './oficina.html',
  styleUrl: './oficina.css'
})
export class Oficina {
  private readonly oficinaState = inject(OficinaStateService);

  activeTab = this.oficinaState.activeTab;

  setTab(tab: OficinaTab): void {
    this.oficinaState.setActiveTab(tab);
  }
}