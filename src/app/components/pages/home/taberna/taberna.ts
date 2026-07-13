import { Component, signal } from '@angular/core';
import { TabernaTabs } from './components/taberna-tabs/taberna-tabs';
import { ChatGlobal } from './components/chat-global/chat-global';
import { Guilds } from './components/guilds/guilds';
import { Friends } from './components/friends/friends';
import { CommunityPanel } from './components/community-panel/community-panel';
import { TabernaTab } from '../../../../models/community';

@Component({
  selector: 'app-taberna',
  standalone: true,
  imports: [TabernaTabs, ChatGlobal, Guilds, Friends, CommunityPanel],
  host: { id: 'taberna' },
  templateUrl: './taberna.html',
  styleUrl: './taberna.css'
})
export class Taberna {
  activeTab = signal<TabernaTab>('chat-global');

  setTab(tab: TabernaTab): void {
    this.activeTab.set(tab);
  }
}