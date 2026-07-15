import { Component, output, signal } from '@angular/core';

type ModalTab = 'privacidade' | 'termos';

@Component({
  selector: 'app-privacy-terms-modal',
  standalone: true,
  imports: [],
  host: { id: 'privacy-terms-modal' },
  templateUrl: './privacy-terms-modal.html',
  styleUrl: './privacy-terms-modal.css'
})
export class PrivacyTermsModal {
  readonly closed = output<void>();

  readonly activeTab = signal<ModalTab>('privacidade');

  setTab(tab: ModalTab): void {
    this.activeTab.set(tab);
  }

  close(): void {
    this.closed.emit();
  }
}
