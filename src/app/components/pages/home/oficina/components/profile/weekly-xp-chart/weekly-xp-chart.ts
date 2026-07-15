import { Component, inject, computed } from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexStroke, ApexFill, ApexDataLabels, ApexResponsive } from 'ng-apexcharts';
import { ProfileService } from '../../../../../../../services/profile';
import { chartBase, chartCategoryAxis, chartAccentStroke, CHART_DATA_LABELS_DISABLED, CHART_RESPONSIVE, CHART_ACCENT_COLOR } from '../../../../../../../shared/chart-theme';

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

  chart: ApexChart = chartBase('area', 220);

  xaxis: ApexXAxis = chartCategoryAxis(['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']);

  stroke: ApexStroke = chartAccentStroke();

  fill: ApexFill = {
    type: 'gradient',
    gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05 },
    colors: [CHART_ACCENT_COLOR]
  };

  dataLabels: ApexDataLabels = CHART_DATA_LABELS_DISABLED;

  responsive: ApexResponsive[] = CHART_RESPONSIVE;

  series = computed<ApexAxisChartSeries>(() => [
    { name: 'XP', data: this.profileService.weeklyXp() }
  ]);
}
