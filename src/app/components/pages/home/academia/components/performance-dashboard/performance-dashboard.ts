import { Component, inject } from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexFill, ApexDataLabels, ApexPlotOptions } from 'ng-apexcharts';
import { AcademiaService } from '../../../../../../services/academia';

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

  evolutionChart: ApexChart = {
    type: 'line',
    height: 220,
    toolbar: { show: false },
    background: 'transparent'
  };

  evolutionXAxis: ApexXAxis = {
    categories: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'],
    labels: { style: { colors: '#e9da9c' } }
  };

  evolutionStroke: ApexStroke = {
    curve: 'smooth',
    colors: ['#ecb158'],
    width: 3
  };

  evolutionDataLabels: ApexDataLabels = { enabled: false };

  subjectsSeries: ApexAxisChartSeries = [
    { name: 'Precisão (%)', data: [92, 84, 61, 98] }
  ];

  subjectsChart: ApexChart = {
    type: 'bar',
    height: 220,
    toolbar: { show: false },
    background: 'transparent'
  };

  subjectsXAxis: ApexXAxis = {
    categories: ['Arrays', 'Functions', 'Recursion', 'Stack'],
    labels: { style: { colors: '#e9da9c' } }
  };

  subjectsFill: ApexFill = {
    colors: ['#ecb158']
  };

  subjectsPlotOptions: ApexPlotOptions = {
    bar: { columnWidth: '50%', borderRadius: 3 }
  };

  subjectsDataLabels: ApexDataLabels = { enabled: false };
}