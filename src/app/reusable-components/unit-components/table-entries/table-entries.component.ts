import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { SortArrayService } from 'src/app/services/services-array/sort-array.service';

@Component({
  selector: 'app-table-entries',
  templateUrl: './table-entries.component.html',
  styleUrls: ['./table-entries.component.scss']
})
export class TableEntriesComponent implements OnInit {
  titlesTh = [
    {title:"Date",increasing:true},
    {title:"Product",increasing:true}
  ]

  faArrowAltCircleUp = faArrowAltCircleUp;
  faArrowAltCircleDown = faArrowAltCircleDown;
  
  selectedFilter = 0;

  dataTable = [
    {date:"25.02.2022", product:"PlumpyNut"},
    {date:"22.02.2022", product:"PlumpyAut"},
    {date:"21.02.2022", product:"PlumpyPlok"},
  ]

  constructor(private sortArrayService:SortArrayService) {
    this.dataTable = this.sortArrayService.sortArray(this.dataTable,0, this.titlesTh[0].increasing);
  }

  ngOnInit(): void {
  }

  sortArray(numeroField:number) {
    this.titlesTh[numeroField].increasing = !this.titlesTh[numeroField].increasing;
    this.dataTable = this.sortArrayService.sortArray(this.dataTable,numeroField, this.titlesTh[numeroField].increasing);
    this.selectedFilter = numeroField;
  }
}
