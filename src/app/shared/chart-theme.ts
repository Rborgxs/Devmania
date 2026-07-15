import { ApexChart, ApexDataLabels, ApexResponsive, ApexStroke, ApexXAxis } from 'ng-apexcharts';

/**
 * Config visual compartilhada para todos os gráficos ApexCharts da plataforma,
 * mantendo a identidade medieval (cores do styles.css) de forma consistente.
 * Antes desta extração, cada componente de gráfico duplicava esses mesmos
 * valores (cor dos eixos, cor da linha, toolbar oculta, fundo transparente...).
 */

export const CHART_AXIS_LABEL_COLOR = '#e9da9c';
export const CHART_ACCENT_COLOR = '#ecb158';
export const CHART_SUCCESS_COLOR = '#4caf7d';
export const CHART_DANGER_COLOR = '#d16060';
export const CHART_PURPLE_COLOR = '#505169';

/**
 * Cria um chart que ocupa 100% da largura do container e altura fluida,
 * com breakpoints internos do ApexCharts para reduzir altura em telas menores.
 */
export function chartBase(type: ApexChart['type'], height: number = 260): ApexChart {
  return {
    type,
    height,
    width: '100%',
    toolbar: { show: false },
    background: 'transparent',
    redrawOnParentResize: true,
    redrawOnWindowResize: true,
    animations: { enabled: true }
  };
}

export const CHART_RESPONSIVE: ApexResponsive[] = [
  {
    breakpoint: 900,
    options: { chart: { height: 220 } }
  },
  {
    breakpoint: 560,
    options: { chart: { height: 180 } }
  }
];

export function chartCategoryAxis(categories: string[]): ApexXAxis {
  return {
    categories,
    labels: { style: { colors: CHART_AXIS_LABEL_COLOR } }
  };
}

export function chartAccentStroke(width = 3): ApexStroke {
  return {
    curve: 'smooth',
    colors: [CHART_ACCENT_COLOR],
    width
  };
}

export const CHART_DATA_LABELS_DISABLED: ApexDataLabels = { enabled: false };

