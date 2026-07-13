import { Component } from '@angular/core';
import { ChannelList } from './channel-list/channel-list';
import { ChannelChat } from './channel-chat/channel-chat';

@Component({
  selector: 'app-chat-global',
  standalone: true,
  imports: [ChannelList, ChannelChat],
  host: { id: 'chat-global' },
  templateUrl: './chat-global.html',
  styleUrl: './chat-global.css'
})
export class ChatGlobal {}