import { Component } from '@angular/core';
import { AccordionSection } from './components/accordion-section/accordion-section';
import { AccountPanel } from './components/account-panel/account-panel';
import { SecurityPanel } from './components/security-panel/security-panel';
import { AppearancePanel } from './components/appearance-panel/appearance-panel';
import { NotificationsPanel } from './components/notifications-panel/notifications-panel';
import { PrivacyPanel } from './components/privacy-panel/privacy-panel';
import { SupportPanel } from './components/support-panel/support-panel';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    AccordionSection,
    AccountPanel,
    SecurityPanel,
    AppearancePanel,
    NotificationsPanel,
    PrivacyPanel,
    SupportPanel
  ],
  host: { id: 'settings' },
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {}