import { Component, OnInit } from '@angular/core';
import { SortArrayService } from 'src/app/services/services-array/sort-array.service';
import { faArrowAltCircleUp, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table-analysis',
  templateUrl: './table-analysis.component.html',
  styleUrls: ['./table-analysis.component.scss']
})
export class TableAnalysisComponent implements OnInit {
  titlesTh = [
    {title:"Date",increasing:true},
    {title:"Types",increasing:true},
    {title:"Partners",increasing:true},
    {title:"Products",increasing:true},
  ]

  selectedFilter = 0;

  faArrowAltCircleUp = faArrowAltCircleUp;
  faArrowAltCircleDown = faArrowAltCircleDown;

  //Codes -> 0:Update, 1:Creation
  codes = [{class:"update",title:"Update"}, {class:"creation",title:"Creation"}]
  
  dataTable = [
    {date:"25.02.2022", status:0, partner:"Samil", product:"PlumpyNut"},
    {date:"22.02.2022", status:1, partner:"Samil", product:"PlumpyAut"},
    {date:"21.02.2022", status:1, partner:"Samil", product:"PlumpySup"},
  ]

  constructor(private sortArrayService:SortArrayService) {
    this.dataTable = this.sortArrayService.sortArray(this.dataTable,0, this.titlesTh[0].increasing);
  }

  ngOnInit(): void {
  }

  //true : increasing
  //false : decreasing
  sortArray(numeroField:number) {
    this.titlesTh[numeroField].increasing = !this.titlesTh[numeroField].increasing;
    this.dataTable = this.sortArrayService.sortArray(this.dataTable,numeroField, this.titlesTh[numeroField].increasing);
    this.selectedFilter = numeroField;
  }
}
