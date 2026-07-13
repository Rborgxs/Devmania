import { Component } from '@angular/core';

interface SupportLink {
  label: string;
  url: string;
}

@Component({
  selector: 'app-support-panel',
  standalone: true,
  imports: [],
  host: { id: 'support-panel' },
  templateUrl: './support-panel.html',
  styleUrl: './support-panel.css'
})
export class SupportPanel {
  links: SupportLink[] = [
    { label: 'Perguntas Frequentes (FAQ)', url: 'https://exemplo.com/faq' },
    { label: 'Reportar Bug', url: 'https://exemplo.com/reportar-bug' },
    { label: 'Termos de Uso', url: 'https://exemplo.com/termos' },
    { label: 'Política de Privacidade', url: 'https://exemplo.com/privacidade' }
  ];
}