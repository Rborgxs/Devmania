import { Component, inject } from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexFill, ApexDataLabels, ApexPlotOptions } from 'ng-apexcharts';
import { AcademiaService } from '../../../../../../services/academia';
import { chartBase, chartCategoryAxis, chartAccentStroke, CHART_DATA_LABELS_DISABLED, CHART_ACCENT_COLOR } from '../../../../../../shared/chart-theme';

@Component({
  selector: 'app-performance-dashboard',
  standalone: true,
  imports: [NgApexchartsModule],
  host: { id: 'performance-dashboard' },
  templateUrl: './performance-dashboard.html',
  styleUrl: './performance-dashboard.css'
})
export class PerformanceDashboard {
  academiaService = inject(AcademiaService);

  stats = {
    averageAccuracy: 84,
    streakDays: 6,
    weeklyXp: 1420,
    avgTimePerExercise: '4min',
    questionsAnswered: 138,
    strongestSubject: 'Arrays',
    subjectToReview: 'Recursion'
  };

  evolutionSeries: ApexAxisChartSeries = [
    { name: 'Precisão (%)', data: [58, 65, 70, 74, 79, 84] }
  ];

  evolutionChart: ApexChart = chartBase('line', 220);

  evolutionXAxis: ApexXAxis = chartCategoryAxis(['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6']);

  evolutionStroke: ApexStroke = chartAccentStroke();

  evolutionDataLabels: ApexDataLabels = CHART_DATA_LABELS_DISABLED;

  subjectsSeries: ApexAxisChartSeries = [
    { name: 'Precisão (%)', data: [92, 84, 61, 98] }
  ];

  subjectsChart: ApexChart = chartBase('bar', 220);

  subjectsXAxis: ApexXAxis = chartCategoryAxis(['Arrays', 'Functions', 'Recursion', 'Stack']);

  subjectsFill: ApexFill = {
    colors: [CHART_ACCENT_COLOR]
  };

  subjectsPlotOptions: ApexPlotOptions = {
    bar: { columnWidth: '50%', borderRadius: 3 }
  };

  subjectsDataLabels: ApexDataLabels = CHART_DATA_LABELS_DISABLED;
}
