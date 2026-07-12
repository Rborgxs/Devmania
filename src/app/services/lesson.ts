import { Injectable, signal } from '@angular/core';
import { Lesson, ModuleInfo } from '../models/lesson';

@Injectable({ providedIn: 'root' })
export class LessonService {
  modules = signal<ModuleInfo[]>([
    {
      id: 'm1',
      name: 'Arrays I',
      description: 'Fundamentos de arrays: criação, acesso e manipulação básica.',
      lessons: [
        { id: 'l1', title: 'Introdução a Arrays', completed: true },
        { id: 'l2', title: 'Métodos de Array', completed: false },
        { id: 'l3', title: 'Percorrendo Arrays', completed: false }
      ]
    },
    {
      id: 'm2',
      name: 'Arrays II',
      description: 'Manipulação avançada, ordenação e busca em arrays.',
      lessons: [
        { id: 'l4', title: 'Ordenação', completed: false },
        { id: 'l5', title: 'Busca Binária', completed: false }
      ]
    }
  ]);

  lessons = signal<Record<string, Lesson>>({
    l1: {
      id: 'l1',
      moduleId: 'm1',
      title: 'Introdução a Arrays',
      explanation: 'Arrays são estruturas de dados que armazenam múltiplos valores em uma única variável, organizados de forma sequencial e acessíveis por índice.',
      examples: [
        { input: 'const arr = [1, 2, 3];', output: 'arr[0] // 1' }
      ],
      materials: [
        { type: 'documentacao', label: 'MDN — Array', url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array' },
        { type: 'video', label: 'Arrays em JavaScript (YouTube)', url: 'https://youtube.com' }
      ],
      exercises: [
        { id: 'ex1', title: 'Criar um array de números', difficulty: 'facil', coinReward: 15, status: 'concluido' },
        { id: 'ex2', title: 'Somar todos os elementos', difficulty: 'facil', coinReward: 15, status: 'pendente' },
        { id: 'ex3', title: 'Encontrar o maior valor', difficulty: 'medio', coinReward: 25, status: 'pendente' }
      ]
    }
  });

  getModule(moduleId: string): ModuleInfo | undefined {
    return this.modules().find(m => m.id === moduleId);
  }

  getLesson(lessonId: string): Lesson | undefined {
    return this.lessons()[lessonId];
  }
}