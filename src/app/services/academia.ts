import { Injectable, signal, computed } from '@angular/core';
import { Subject, SubjectLevel, RecentTraining } from '../models/subject';

@Injectable({ providedIn: 'root' })
export class AcademiaService {
  searchTerm = signal('');
  activeLevel = signal<SubjectLevel | 'todos'>('todos');

  subjects = signal<Subject[]>([
    { id: 's1', name: 'Arrays', icon: '/assets/icons/subjects/arrays.png', description: 'Aprenda estruturas lineares, percorrer elementos e manipulação.', level: 'fundamentos' },
    { id: 's2', name: 'Functions', icon: '/assets/icons/subjects/functions.png', description: 'Declaração, parâmetros, retorno e escopo.', level: 'fundamentos' },
    { id: 's3', name: 'Recursion', icon: '/assets/icons/subjects/recursion.png', description: 'Chamadas recursivas, casos base e pilha de execução.', level: 'intermediario' },
    { id: 's4', name: 'Árvores Binárias', icon: '/assets/icons/subjects/trees.png', description: 'Estruturas hierárquicas, percursos e balanceamento.', level: 'avancado' },
    { id: 's5', name: 'Grafos', icon: '/assets/icons/subjects/graphs.png', description: 'Representação, busca em largura e profundidade.', level: 'avancado' },
    { id: 's6', name: 'Programação Dinâmica', icon: '/assets/icons/subjects/dp.png', description: 'Memoização, subestruturas ótimas e otimização.', level: 'expert' }
  ]);

  levelOptions: { id: SubjectLevel | 'todos'; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'fundamentos', label: 'Fundamentos' },
    { id: 'intermediario', label: 'Intermediário' },
    { id: 'avancado', label: 'Avançado' },
    { id: 'expert', label: 'Expert' }
  ];

  filteredSubjects = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    const level = this.activeLevel();

    return this.subjects().filter(subject => {
      const matchesTerm = !term || subject.name.toLowerCase().includes(term);
      const matchesLevel = level === 'todos' || subject.level === level;
      return matchesTerm && matchesLevel;
    });
  });

  recentTrainings = signal<RecentTraining[]>([
    { subjectName: 'Arrays', accuracyPercent: 92 },
    { subjectName: 'Functions', accuracyPercent: 84 },
    { subjectName: 'Recursion', accuracyPercent: 61 },
    { subjectName: 'Stack', accuracyPercent: 98 }
  ]);
}