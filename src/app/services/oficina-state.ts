import { Injectable, signal } from '@angular/core';
import { OficinaTab } from '../models/oficina';

@Injectable({ providedIn: 'root' })
export class OficinaStateService {
  activeTab = signal<OficinaTab>('avatar');

  setActiveTab(tab: OficinaTab): void {
    this.activeTab.set(tab);
  }
}
