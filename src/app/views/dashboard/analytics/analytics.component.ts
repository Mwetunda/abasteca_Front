import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  OnDestroy
} from "@angular/core";
import { matxAnimations } from "app/shared/animations/matx-animations";
import { ITheme, ThemeService } from "app/shared/services/theme.service";
import tinyColor from "tinycolor2";
import PerfectScrollbar from "perfect-scrollbar";
import { Subscription } from "rxjs";
import { EChartsOption } from "echarts";
import { Position } from "app/shared/components/perfect-scrollbar";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
  animations: matxAnimations
})
export class AnalyticsComponent implements OnInit {
  mostrarMetricasPosto: boolean = true;
  mostrarMetricasUsuarios: boolean = true;
  trafficVsSaleOptions: any;
  trafficVsSale: any;
  trafficData: any;
  saleData: any;

  sessionOptions: any;
  sessions: any;
  sessionsData: any;

  trafficGrowthChart: any;
  bounceRateGrowthChart: any;

  graficoPostosProvincia: EChartsOption;
  graficoBarraInvetidoPostosProvincia: EChartsOption;
  graficoLinhaPostosProvincia: EChartsOption;
  doughNutPie1Options: EChartsOption;
  doughNutPie2Options: EChartsOption;

  mostrarDashboard = true;

  statCardList = [
    {
      icon: "people",
      title: "Utilizadores",
      amount: "3,050",
      color: "primary"
    },
    {
      icon: "local_gas_station",
      title: "Postos de Abastecimento",
      amount: "80,500",
      color: "secondary"
    },
    {
      icon: "store",
      title: "Inventory Status",
      amount: "8.5% Stock Surplus",
      color: "primary"
    },
    {
      icon: "shopping_cart",
      title: "Orders to deliver",
      amount: "305 Orders",
      color: "secondary"
    },
    {
      icon: "store",
      title: "Inventory Status",
      amount: "8.5% Stock Surplus",
      color: "primary"
    },
  ];

  constructor(private themeService: ThemeService) { }

  ngAfterViewInit() { }

  ngOnInit() {
    this.themeService.onThemeChange.subscribe(activeTheme => {

    });

    this.construirGraficoPostosProvincia();
    this.construirGraficoBarraInvertidoPostosProvincia();
    this.construirGraficoLinhaPostosProvincia();
    this.construir1DoughNutPieOptions();
    this.construir2DoughNutPieOptions();
  }

  construirGraficoPostosProvincia() {
    this.graficoPostosProvincia = {
      // title: {
      //   text: 'Postos de Abastecimento por Província',
      //   subtext: 'Postos de Abastecimento por Província Distribuidos por Operadoras'
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        }
      },
      legend: {},
      grid: {
        top: '15%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Bengo', { value: "Benguela", textStyle: {} }, 'Bié', 'Cabinda', 'Cuando Cubango', 'Cuanza Norte', 'Cuanza Sul',
            'Cunene', 'Huambo', 'Huíla', 'Luanda', 'Lunda Norte', 'Lunda Sul', 'Malange', 'Moxico',
            'Namibe', 'Uíge', 'Záire'],
          axisLabel: {
            rotate: 40,
            interval: 0
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Sonangol',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320, 83, 652, 862, 674, 173, 561, 243, 68, 145, 25, 6]
        },
        {
          name: 'Total',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [120, 232, 401, 34, 90, 130, 20, 813, 152, 262, 174, 73, 261, 43, 8, 5, 3, 6]
        },
        {
          name: 'Sonangalp',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [3, 32, 21, 134, 98, 31, 6, 82, 62, 12, 24, 17, 51, 40, 8, 9, 35, 16]
        },
        {
          name: 'Pumangol',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [10, 65, 90, 23, 245, 345, 34, 89, 32, 54, 7, 12, 34, 3, 89, 6, 12, 4]
        },
        {
          name: 'Bandeira Branca',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [9, 65, 555, 345, 65, 23, 895, 4, 56, 314, 234, 355, 12, 456, 234, 46, 225, 12]
        },
        {
          name: 'TOMSA',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [2, 5, 9, 2, 4, 23, 90, 23, 34, 45, 2, 3, 24, 76, 54, 3, 34, 10]
        },
      ]
    }
  }

  construirGraficoBarraInvertidoPostosProvincia() {
    this.graficoBarraInvetidoPostosProvincia = {
      // title: {
      //   text: 'Postos de Abastecimento por Província',
      //   subtext: 'Postos de Abastecimento por Província Distribuidos por Operadoras'
      // },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        }
      },
      legend: {},
      grid: {
        top: '15%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'value',
          boundaryGap: [0, 0.01]
        }
      ],
      yAxis: [
        {
          type: 'category',
          data: ['Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cuando Cubango', 'Cuanza Norte', 'Cuanza Sul',
            'Cunene', 'Huambo', 'Huíla', 'Luanda', 'Lunda Norte', 'Lunda Sul', 'Malange', 'Moxico',
            'Namibe', 'Uíge', 'Záire'],
          axisLabel: {
            //rotate: 40,
            interval: 0
          },

        }
      ],
      series: [
        {
          name: 'Postos',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320, 83, 652, 862, 674, 173, 561, 243, 68, 145, 25, 6]
        },

      ]
    }
  }

  construirGraficoLinhaPostosProvincia() {
    this.graficoLinhaPostosProvincia = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        }
      },
      legend: {},
      grid: {
        top: '10%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cuando Cubango', 'Cuanza Norte', 'Cuanza Sul',
            'Cunene', 'Huambo', 'Huíla', 'Luanda', 'Lunda Norte', 'Lunda Sul', 'Malange', 'Moxico',
            'Namibe', 'Uíge', 'Záire'],
          axisLabel: {
            rotate: 40,
            interval: 0
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Sonangol',
          type: 'line',
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320, 83, 652, 862, 674, 173, 561, 243, 68, 145, 25, 6]
        },
        {
          name: 'Total',
          type: 'line',
          emphasis: {
            focus: 'series'
          },
          data: [120, 232, 401, 34, 90, 130, 20, 813, 152, 262, 174, 73, 261, 43, 8, 5, 3, 6]
        },
        {
          name: 'Sonangalp',
          type: 'line',
          emphasis: {
            focus: 'series'
          },
          data: [3, 32, 21, 134, 98, 31, 6, 82, 62, 12, 24, 17, 51, 40, 8, 9, 35, 16]
        },
        {
          name: 'Pumangol',
          type: 'line',
          emphasis: {
            focus: 'series'
          },
          data: [10, 65, 90, 23, 245, 345, 34, 89, 32, 54, 7, 12, 34, 3, 89, 6, 12, 4]
        },
        {
          name: 'Bandeira Branca',
          type: 'line',
          emphasis: {
            focus: 'series'
          },
          data: [9, 65, 555, 345, 65, 23, 895, 4, 56, 314, 234, 355, 12, 456, 234, 46, 225, 12]
        },
        {
          name: 'TOMSA',
          type: 'line',
          emphasis: {
            focus: 'series'
          },
          data: [2, 5, 9, 2, 4, 23, 90, 23, 34, 45, 2, 3, 24, 76, 54, 3, 34, 10]
        },
      ]
    }
  }

  construir1DoughNutPieOptions() {
    this.doughNutPie1Options = {

      // title: {
      //   text: 'Total de Postos de Abastecimento por  Operadora a Nível Nacional',
      //   subtext: 'Total de Postos de Abastecimento por  Operadora a Nível Nacional'
      // },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '10%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,

          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Sonangol' },
            { value: 635, name: 'Total' },
            { value: 580, name: 'Sonangalp' },
            { value: 884, name: 'Pumangol' },
            { value: 300, name: 'Bandeira Branca' },
            { value: 30, name: 'TOMSA' }
          ]
        }
      ]
    }
  }

  construir2DoughNutPieOptions() {
    this.doughNutPie2Options = {

      // title: {
      //   text: 'Total de Postos de Abastecimento por  Operadora a Nível Nacional',
      //   subtext: 'Total de Postos de Abastecimento por  Operadora a Nível Nacional'
      // },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '10%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          //padAngle: 5,
          itemStyle: {
            borderRadius: 10
          },

          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Sonangol' },
            { value: 635, name: 'Total' },
            { value: 580, name: 'Sonangalp' },
            { value: 884, name: 'Pumangol' },
            { value: 300, name: 'Bandeira Branca' },
            { value: 100, name: 'TOMSA' }
          ]
        }
      ]
    }
  }
}
