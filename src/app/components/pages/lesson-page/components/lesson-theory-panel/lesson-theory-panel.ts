import { Component, input, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lesson } from '../../../../../models/lesson';
import { WalletService } from '../../../../../services/wallet';

type TheoryTab = 'explicacao' | 'exemplos' | 'mentor' | 'materiais';

interface MentorMessage {
  id: string;
  sender: 'user' | 'mentor';
  text: string;
}

@Component({
  selector: 'app-lesson-theory-panel',
  standalone: true,
  imports: [FormsModule],
  host: { id: 'lesson-theory-panel' },
  templateUrl: './lesson-theory-panel.html',
  styleUrl: './lesson-theory-panel.css'
})
export class LessonTheoryPanel {
  lesson = input.required<Lesson>();

  private readonly wallet = inject(WalletService);

  activeTab = signal<TheoryTab>('explicacao');
  tabs: { id: TheoryTab; label: string }[] = [
    { id: 'explicacao', label: 'Explicação' },
    { id: 'exemplos', label: 'Exemplos' },
    { id: 'mentor', label: 'Mentor' },
    { id: 'materiais', label: 'Materiais' }
  ];

  mentorMessages = signal<MentorMessage[]>([
    { id: 'mm1', sender: 'mentor', text: 'Em que posso ajudar com esse assunto, aventureiro?' }
  ]);
  mentorDraft = signal('');
  private userMessageCount = 0;
  private readonly costPerFiveMessages = 10;

  sendMentorMessage(): void {
    const text = this.mentorDraft().trim();
    if (!text) {
      return;
    }

    this.mentorMessages.update(msgs => [...msgs, { id: crypto.randomUUID(), sender: 'user', text }]);
    this.userMessageCount++;

    if (this.userMessageCount % 5 === 0) {
      this.wallet.spend(this.costPerFiveMessages);
      this.mentorMessages.update(msgs => [
        ...msgs,
        { id: crypto.randomUUID(), sender: 'mentor', text: `(Cobrado ${this.costPerFiveMessages} moedas por essa rodada de perguntas)` }
      ]);
    }

    this.mentorDraft.set('');
  }
}