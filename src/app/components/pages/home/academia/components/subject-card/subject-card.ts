import { Component, input, output } from '@angular/core';
import { Subject } from '../../../../../../models/subject';

@Component({
  selector: 'app-subject-card',
  standalone: true,
  imports: [],
  templateUrl: './subject-card.html',
  styleUrl: './subject-card.css'
})
export class SubjectCard {
  subject = input.required<Subject>();
  select = output<Subject>();
}