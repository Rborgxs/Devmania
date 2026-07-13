import { Component, input, output } from '@angular/core';
import { TabernaTab } from '../../../../../../models/community';

interface TabOption {
  id: TabernaTab;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-taberna-tabs',
  standalone: true,
  imports: [],
  templateUrl: './taberna-tabs.html',
  styleUrl: './taberna-tabs.css'
})
export class TabernaTabs {
  activeTab = input.required<TabernaTab>();
  tabChange = output<TabernaTab>();

  tabs: TabOption[] = [
    { id: 'chat-global', label: 'Chat Global', icon: '🌎' },
    { id: 'guildas', label: 'Guildas', icon: '🛡️' },
    { id: 'amigos', label: 'Amigos', icon: '👥' }
  ];
}