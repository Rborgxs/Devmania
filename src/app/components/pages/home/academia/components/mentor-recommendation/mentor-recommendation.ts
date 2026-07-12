import { Component } from '@angular/core';

interface SuggestedTraining {
  id: string;
  label: string;
}

@Component({
  selector: 'app-mentor-recommendation',
  standalone: true,
  imports: [],
  host: { id: 'mentor-recommendation' },
  templateUrl: './mentor-recommendation.html',
  styleUrl: './mentor-recommendation.css'
})
export class MentorRecommendation {
  mentorMessage = 'Jovem aventureiro, faz quatro dias desde sua última prática com Arrays. Treinar agora aumentará sua retenção e concederá um bônus de XP.';

  suggestions: SuggestedTraining[] = [
    { id: 'sg1', label: 'Revisar Arrays' },
    { id: 'sg2', label: 'Praticar Recursão' },
    { id: 'sg3', label: 'Continuar Árvores Binárias' }
  ];

  trainSuggestion(id: string): void {
    console.log('treinar sugestão', id);
  }
}