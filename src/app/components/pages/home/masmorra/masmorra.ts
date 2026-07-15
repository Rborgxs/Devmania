import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Quest, DayHistory } from '../../../../models/quest';
import { StatsPanel } from './stats-panel/stats-panel';

@Component({
  selector: 'app-masmorra',
  standalone: true,
  imports: [RouterLink, StatsPanel],
  host: { id: 'masmorra' },
  templateUrl: './masmorra.html',
  styleUrl: './masmorra.css'
})
export class Masmorra {
  masterCardVisible = signal(true);
  historyModalOpen = signal(false);

  dailyQuests: Quest[] = [
    {
      id: 'q1',
      title: 'O Mensageiro do Rei',
      description: 'O Rei precisa enviar mensagens urgentes ao reino. Crie uma função que formate nomes de forma correta para os pergaminhos reais.',
      difficulty: 'facil',
      image: 'assets/quests/mensageiro.png',
      coinReward: 50,
      xpReward: 100,
      input: 'formatName("arthur", "pendragon")',
      output: '"Arthur Pendragon"'
    },
    {
      id: 'q2',
      title: 'O Enigma da Torre',
      description: 'Um enigma antigo bloqueia a passagem. Resolva o desafio de lógica para prosseguir.',
      difficulty: 'medio',
      image: 'assets/quests/torre.png',
      coinReward: 80,
      xpReward: 150,
      input: 'solveRiddle([3, 1, 4, 1, 5])',
      output: '14'
    },
    {
      id: 'q3',
      title: 'A Forja do Ferreiro',
      description: 'O ferreiro precisa de uma função que calcule a resistência das armaduras forjadas.',
      difficulty: 'dificil',
      image: 'assets/quests/forja.png',
      coinReward: 120,
      xpReward: 220,
      input: 'forgeStrength(80, 1.5)',
      output: '120'
    }
  ];

  weeklyChallenge: Quest = {
    id: 'w22',
    title: 'A Fortaleza Maldita',
    description: 'Um feitiço corrompeu o código de controle da fortaleza. Encontre e corrija todos os bugs!',
    difficulty: 'dificil',
    image: 'assets/quests/fortaleza.png',
    coinReward: 300,
    week: 22,
    bugCount: 5
  };

  weekHistory: DayHistory[] = [
    { day: 'Segunda', questTitle: 'O Mensageiro do Rei', coins: 50, status: 'concluido' },
    { day: 'Terça', questTitle: 'O Enigma da Torre', coins: 80, status: 'concluido' },
    { day: 'Quarta', questTitle: 'A Forja do Ferreiro', coins: 0, status: 'falhou' },
    { day: 'Quinta', questTitle: 'O Caminho das Runas', coins: 60, status: 'concluido' },
    { day: 'Sexta', questTitle: 'A Guarda Noturna', coins: 0, status: 'pendente' },
    { day: 'Sábado', questTitle: 'O Tesouro Perdido', coins: 0, status: 'pendente' },
    { day: 'Domingo', questTitle: 'A Última Prova', coins: 0, status: 'pendente' }
  ];

  currentQuestIndex = signal(0);

  currentQuest = computed(() => this.dailyQuests[this.currentQuestIndex()]);

  prevQuest(): void {
    this.currentQuestIndex.update(i => (i === 0 ? this.dailyQuests.length - 1 : i - 1));
  }

  nextQuest(): void {
    this.currentQuestIndex.update(i => (i === this.dailyQuests.length - 1 ? 0 : i + 1));
  }

  goToQuest(index: number): void {
    this.currentQuestIndex.set(index);
  }

  hideMasterCard(): void {
    this.masterCardVisible.set(false);
  }

  openHistory(): void {
    this.historyModalOpen.set(true);
  }

  closeHistory(): void {
    this.historyModalOpen.set(false);
  }

  difficultyLabel(difficulty: string): string {
    return { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[difficulty] ?? difficulty;
  }
}