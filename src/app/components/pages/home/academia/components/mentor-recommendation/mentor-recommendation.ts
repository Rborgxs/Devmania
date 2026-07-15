import { Component } from '@angular/core';

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
}