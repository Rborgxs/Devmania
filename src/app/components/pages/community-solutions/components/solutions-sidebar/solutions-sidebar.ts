import { Component, input, output } from '@angular/core';
import { SolutionFilter } from '../../../../../models/community-post';

@Component({
  selector: 'app-solutions-sidebar',
  standalone: true,
  imports: [],
  host: { id: 'solutions-sidebar' },
  templateUrl: './solutions-sidebar.html',
  styleUrl: './solutions-sidebar.css'
})
export class SolutionsSidebar {
  activeFilter = input.required<SolutionFilter>();
  filterChange = output<SolutionFilter>();
  backToHome = output<void>();
  discussMentor = output<void>();

  filters: { id: SolutionFilter; label: string }[] = [
    { id: 'curtidas', label: 'Mais Curtidas' },
    { id: 'recentes', label: 'Mais Recentes' },
    { id: 'linhas', label: 'Menor Qtd. de Linhas' },
    { id: 'desempenho', label: 'Maior Desempenho' }
  ];
}