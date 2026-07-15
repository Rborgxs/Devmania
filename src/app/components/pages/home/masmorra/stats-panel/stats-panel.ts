import { Component } from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexNonAxisChartSeries, ApexPlotOptions, ApexFill, ApexDataLabels, ApexLegend, ApexStroke, ApexResponsive } from 'ng-apexcharts';
import { PlayerStatsCards } from '../../../../../models/player-stats';
import { chartBase, chartCategoryAxis, CHART_DATA_LABELS_DISABLED, CHART_RESPONSIVE, CHART_ACCENT_COLOR, CHART_AXIS_LABEL_COLOR, CHART_SUCCESS_COLOR, CHART_DANGER_COLOR, CHART_PURPLE_COLOR } from '../../../../../shared/chart-theme';

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

  barChart: ApexChart = chartBase('bar', 260);

  barXAxis: ApexXAxis = chartCategoryAxis(['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']);

  barPlotOptions: ApexPlotOptions = {
    bar: { columnWidth: '50%', borderRadius: 3 }
  };

  barFill: ApexFill = {
    colors: [CHART_ACCENT_COLOR]
  };

  barDataLabels: ApexDataLabels = CHART_DATA_LABELS_DISABLED;

  chartResponsive: ApexResponsive[] = CHART_RESPONSIVE;

  pieSeries: ApexNonAxisChartSeries = [40, 25, 20, 15];

  pieChart: ApexChart = chartBase('pie', 260);

  pieLabels: string[] = ['Fácil', 'Médio', 'Difícil', 'Especial'];

  /**
   * Cores oficiais do sistema: verde (sucesso/Fácil), amarelo (accent/Médio),
   * vermelho (perigo/Difícil), roxo (púrpura/Especial).
   */
  pieFill: ApexFill = {
    colors: [CHART_SUCCESS_COLOR, CHART_ACCENT_COLOR, CHART_DANGER_COLOR, CHART_PURPLE_COLOR]
  };

  pieStroke: ApexStroke = {
    colors: ['#3c271b'],
    width: 2
  };

  pieLegend: ApexLegend = {
    labels: { colors: CHART_AXIS_LABEL_COLOR },
    position: 'bottom'
  };
}
