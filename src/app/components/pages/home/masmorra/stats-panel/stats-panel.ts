import { Component } from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexNonAxisChartSeries, ApexPlotOptions, ApexStroke, ApexFill, ApexDataLabels, ApexLegend } from 'ng-apexcharts';
import { PlayerStatsCards } from '../../../../../models/player-stats';

@Component({
  selector: 'app-stats-panel',
  standalone: true,
  imports: [NgApexchartsModule],
  host: { id: 'stats-panel' },
  templateUrl: './stats-panel.html',
  styleUrl: './stats-panel.css'
})
export class StatsPanel {
  cards: PlayerStatsCards = {
    coinsEarned: 1240,
    avgTimePerChallenge: '8min',
    accuracyPercent: 76,
    topLanguage: 'JavaScript'
  };

  barSeries: ApexAxisChartSeries = [
    { name: 'Quests Concluídas', data: [1, 2, 0, 3, 2, 1, 2] }
  ];

  barChart: ApexChart = {
    type: 'bar',
    height: 260,
    toolbar: { show: false },
    background: 'transparent'
  };

  barXAxis: ApexXAxis = {
    categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    labels: { style: { colors: '#e9da9c' } }
  };

  barPlotOptions: ApexPlotOptions = {
    bar: { columnWidth: '50%', borderRadius: 3 }
  };

  barFill: ApexFill = {
    colors: ['#ecb158']
  };

  barDataLabels: ApexDataLabels = { enabled: false };

  radarSeries: ApexAxisChartSeries = [
    { name: 'Eficácia', data: [80, 65, 90, 55, 70] }
  ];

  radarChart: ApexChart = {
    type: 'radar',
    height: 280,
    toolbar: { show: false },
    background: 'transparent'
  };

  radarXAxis: ApexXAxis = {
    categories: ['Arrays', 'Strings', 'Funções', 'Padrões', 'JavaScript'],
    labels: { style: { colors: ['#e9da9c'] } }
  };

  radarFill: ApexFill = {
    colors: ['#ecb158'],
    opacity: 0.4
  };

  radarStroke: ApexStroke = {
    colors: ['#ecb158'],
    width: 2
  };

  pieSeries: ApexNonAxisChartSeries = [40, 25, 20, 15];

  pieChart: ApexChart = {
    type: 'pie',
    height: 260,
    background: 'transparent'
  };

  pieLabels: string[] = ['Fácil', 'Médio', 'Difícil', 'Especial'];

  pieFill: ApexFill = {
    colors: ['#4caf7d', '#ecb158', '#d16060', '#505169']
  };

  pieLegend: ApexLegend = {
    labels: { colors: '#e9da9c' }
  };

  lineSeries: ApexAxisChartSeries = [
    { name: 'Acertos (%)', data: [50, 58, 62, 60, 70, 76, 80] }
  ];

  lineChart: ApexChart = {
    type: 'line',
    height: 260,
    toolbar: { show: false },
    background: 'transparent'
  };

  lineXAxis: ApexXAxis = {
    categories: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7'],
    labels: { style: { colors: '#e9da9c' } }
  };

  lineStroke: ApexStroke = {
    curve: 'smooth',
    colors: ['#ecb158'],
    width: 3
  };

  lineDataLabels: ApexDataLabels = { enabled: false };
}