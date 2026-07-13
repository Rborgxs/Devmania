import { Component, inject } from '@angular/core';
import { ChatService } from '../../../../../../../services/chat';

@Component({
  selector: 'app-channel-list',
  standalone: true,
  imports: [],
  host: { id: 'channel-list' },
  templateUrl: './channel-list.html',
  styleUrl: './channel-list.css'
})
export class ChannelList {
  chatService = inject(ChatService);
}