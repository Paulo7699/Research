import { Component, OnInit } from '@angular/core';
import { SortArrayService } from 'src/app/services/services-array/sort-array.service';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';
import { SituationService } from 'src/app/services/tests-services/situation.service';

@Component({
  selector: 'app-analytics-page',
  templateUrl: './analytics-page.component.html',
  styleUrls: ['./analytics-page.component.scss']
})
export class AnalyticsPageComponent implements OnInit {
  dataDisplayed : any[] = [];
  caracts : number[] = [1,2,3];
  barChartData : any | undefined;
  datasetcomplete : any[] = [];

  barChartOptions = {
    scales: {
      x: {
        display : false,
      },
      y: {
          beginAtZero: true
      }
    }
  }
  
  constructor(private situation:SituationService, private sortArray : SortArrayService, private colorsService:ColorsService) { }

  ngOnInit(): void {
    this.getDataDisplayed()
  }

  getDataDisplayed() {
    this.dataDisplayed = this.situation.getRandomData(3);
    
    this.dataDisplayed = this.sortArray.sortArray(this.dataDisplayed, 6, true);

    let datesSaisies : any[] = [];
    let valeurs : any[] = [];
    let valeursMin : any[] = [];
    let valeursMax : any[] = [];
    let valeursIncertitude : any[] = [];
    
    this.dataDisplayed.forEach(saisie => {
      datesSaisies.push(saisie.date);
      valeurs.push(saisie.valeur);
      valeursMin.push(saisie.valeurMin);
      valeursMax.push(saisie.valeurMax);
      valeursIncertitude.push(saisie.valeurIncertitude);
    });
    console.log(this.dataDisplayed)
    console.log(datesSaisies)
    console.log(valeurs)

    this.datasetcomplete = [{
      data: valeurs,
      radius:5,
      borderWith:2,
      hoverRadius:10,
      label: "Valeur Partenaire01",
      borderColor: this.colorsService.getColorLight(4),
      backgroundColor: this.colorsService.getColorLight(0),
      fill: false
    },
    {
      data: valeursMin,
      pointStyle:'circle',
      label: "ValeurMin Partenaire01",
      borderColor: this.colorsService.getColorLight(5),
      fill: false,
      hidden:true
    },
    {
      data: valeursMax,
      pointStyle:'circle',
      label: "ValeurMax Partenaire01",
      borderColor: this.colorsService.getColorLight(6),
      fill: false,
      hidden:true
    },
    {
      data: valeursIncertitude,
      pointStyle:'circle',
      label: "ValeurIncertitude Partenaire01",
      borderColor: this.colorsService.getColorLight(0),
      fill: false,
      hidden:true
    }];
    
    this.barChartData = {
      labels: datesSaisies,
      datasets: this.datasetcomplete
    }
  }
}
