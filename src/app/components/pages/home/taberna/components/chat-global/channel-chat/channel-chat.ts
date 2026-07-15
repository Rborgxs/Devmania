import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../../../../../../services/chat';

@Component({
  selector: 'app-channel-chat',
  standalone: true,
  imports: [FormsModule],
  host: { id: 'channel-chat' },
  templateUrl: './channel-chat.html',
  styleUrl: './channel-chat.css'
})
export class ChannelChat {
  chatService = inject(ChatService);

  draft = signal('');
  emojiPickerOpen = signal(false);

  quickEmojis = ['⚔️', '🛡️', '🔥', '😂', '👍', '🐉', '✨', '🏰', '📜', '🎯', '💀', '🍺'];

  send(): void {
    this.chatService.sendMessage(this.draft());
    this.draft.set('');
    this.emojiPickerOpen.set(false);
  }

  toggleEmojiPicker(): void {
    this.emojiPickerOpen.update(v => !v);
  }

  addEmoji(emoji: string): void {
    this.draft.update(d => d + emoji);
    this.emojiPickerOpen.set(false);
  }
}