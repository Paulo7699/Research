import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SortArrayService } from 'src/app/services/services-array/sort-array.service';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';
import { SelectedMonitorPartnersService } from 'src/app/services/services-css/selected/monitor/selected-monitor-partners.service';
import { SituationService } from 'src/app/services/tests-services/situation.service';

@Component({
  selector: 'app-chart-monitor',
  templateUrl: './chart-monitor.component.html',
  styleUrls: ['./chart-monitor.component.scss']
})
export class ChartMonitorComponent implements OnInit {
  @Input()
  partnerAsking : boolean = false;

  partnersToMonitor : string = '';
  tailleActuelle = 1;

  dataDisplayed : any[] = [];
  caracts : number[] = [1,2,3];
  barChartData : any | undefined;
  datasetcomplete : any[] = [];
  datesSaisies : any[] = [];

  myChart : Chart | undefined;

  // barChartOptions = {
  //   scales: {
  //     x: {
  //       display : false,
  //     },
  //     y: {
  //         beginAtZero: true
  //     },     
  //   },
  //   plugins: {
  //       legend: {
  //           display: true,
  //           position:'left',
  //       }
  //   }
  // }


  constructor(
    private situation:SituationService, 
    private sortArray : SortArrayService, 
    private colorsService:ColorsService,
    private partnersMonitorService:SelectedMonitorPartnersService) { }

  ngOnInit(): void {
    this.partnersToMonitor = this.partnersMonitorService.partnersToMonitor[0]+'';
    this.partnersMonitorService.componentMethodCalled$.subscribe(res => {
      this.getTitle();
      this.getDataDisplayed();
    })

    this.getDataDisplayed();



    // line Chart
    this.myChart = new Chart('mapId', {
      type: 'line',
      plugins: [{
        id:'1',
        beforeInit: function(chart, args, options) {
          if(chart.legend)
            chart.legend.height += 500;
        }
      }],
      data: {
        labels: this.datesSaisies
        // [
        //   'January',
        //   'February',
        //   'March',
        //   'April',
        //   'May',
        //   'June',
        //   'July'
        // ],
        ,
        datasets: this.datasetcomplete
        // [
        //   {
        //     label: 'My First Dataset',
        //     data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
        //     fill: true,
        //     borderColor: 'rgb(75, 192, 192)',
        //     tension: 0.1,
        //     backgroundColor: 'orange',
        //     pointBorderColor: 'red',
        //     pointBackgroundColor: 'red'
        //   }
        // ]
      },
      options: {
        maintainAspectRatio: false,
        scales : {
          x:{
            display : false,
          }
        },
        responsive: true,
        plugins: {
          legend:{
            position:'bottom'
          },
        }
      }
    });

    this.myChart.render();
  }

  getSizeOfCanva() {
    let nbPartnersToMonitor = this.partnersMonitorService.partnersToMonitor.length;

    let totalSize = 300+100*nbPartnersToMonitor;
    return totalSize+"px"
  }

  getTitle() {
    this.partnersToMonitor = '';    
    for (let index = 0; index < this.partnersMonitorService.partnersToMonitor.length; index++) {
      const idPartner = this.partnersMonitorService.partnersToMonitor[index];
      this.partnersToMonitor += idPartner;
      if(index +1 < this.partnersMonitorService.partnersToMonitor.length){
        this.partnersToMonitor += ", ";
      }
    }
  }

  getDataDisplayed() {
    let nbPartners = this.partnersMonitorService.partnersToMonitor.length;

    this.dataDisplayed = this.situation.getRandomData(3);    
    this.dataDisplayed = this.sortArray.sortArray(this.dataDisplayed, 6, true);

    let valeurs : any[] = [];
    let valeursMin : any[] = [];
    let valeursMax : any[] = [];
    let valeursIncertitude : any[] = [];
    

    this.datesSaisies = [];
    this.dataDisplayed.forEach(saisie => {
      this.datesSaisies.push(saisie.date);
      valeurs.push(saisie.valeur);
      valeursMin.push(saisie.valeurMin);
      valeursMax.push(saisie.valeurMax);
      valeursIncertitude.push(saisie.valeurIncertitude);
    });

    let nomPartenaire = "Partnenaire-"+this.partnersMonitorService.partnersToMonitor[0];

    this.datasetcomplete = [{
      data: valeurs,
      radius:5,
      borderWith:2,
      hoverRadius:10,
      label: "Valeur"+nomPartenaire,
      borderColor: this.colorsService.getColorLight(4),
      backgroundColor: this.colorsService.getColorLight(0),
      fill: false
    },
    {
      data: valeursMin,
      pointStyle:'circle',
      label: "ValeurMin"+nomPartenaire,
      borderColor: this.colorsService.getColorLight(5),
      fill: false,
      hidden:!this.partnerAsking
    },
    {
      data: valeursMax,
      pointStyle:'circle',
      label: "ValeurMax"+nomPartenaire,
      borderColor: this.colorsService.getColorLight(6),
      fill: false,
      hidden:!this.partnerAsking
    },
    {
      data: valeursIncertitude,
      pointStyle:'circle',
      label: "ValeurIncertitude"+nomPartenaire,
      borderColor: this.colorsService.getColorLight(0),
      fill: false,
      hidden:!this.partnerAsking
    }];
    
    // this.barChartData = {
    //   labels: datesSaisies,
    //   datasets: this.datasetcomplete
    // }

    if(this.myChart){
      this.myChart.data.labels = this.datesSaisies;
      this.myChart.data.datasets = this.datasetcomplete;
      this.myChart.update();
    }

    for (let index = 1; index < nbPartners; index++) {
      this.addData(index, this.partnersMonitorService.partnersToMonitor[index]);      
    }
  }

  addData(index:number, idPartenaire:number) {
    let testData = this.situation.getRandomData(3);
    testData = this.sortArray.sortArray(testData, 6, true);

    let valeurs : any[] = [];
    
    testData.forEach(saisie => {
      valeurs.push(saisie.valeur);
    });

    let toBePushed = {
      data: valeurs,
      pointStyle:'circle',
      radius:5,
      borderWith:2,
      hoverRadius:10,
      label: "ValeurPartnenaire-"+idPartenaire,
      borderColor: this.colorsService.getColorLight(index),
      fill: false
    };

    this.datasetcomplete.push(toBePushed);
    if(this.myChart) {
      this.myChart.data.datasets = this.datasetcomplete;
      this.myChart?.update();
    }
    // this.barChartData = {
    //   datasets: this.datasetcomplete
    // }
  }

}
