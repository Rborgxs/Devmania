import { Component, inject, computed } from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexFill, ApexDataLabels } from 'ng-apexcharts';
import { ProfileService } from '../../../../../../../services/profile';

@Component({
  selector: 'app-weekly-xp-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  host: { id: 'weekly-xp-chart' },
  templateUrl: './weekly-xp-chart.html',
  styleUrl: './weekly-xp-chart.css'
})
export class WeeklyXpChart {
  profileService = inject(ProfileService);

  chart: ApexChart = {
    type: 'area',
    height: 220,
    toolbar: { show: false },
    background: 'transparent'
  };

  xaxis: ApexXAxis = {
    categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    labels: { style: { colors: '#e9da9c' } }
  };

  stroke: ApexStroke = {
    curve: 'smooth',
    colors: ['#ecb158'],
    width: 3
  };

  fill: ApexFill = {
    type: 'gradient',
    gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05 },
    colors: ['#ecb158']
  };

  dataLabels: ApexDataLabels = { enabled: false };

  series = computed<ApexAxisChartSeries>(() => [
    { name: 'XP', data: this.profileService.weeklyXp() }
  ]);
}