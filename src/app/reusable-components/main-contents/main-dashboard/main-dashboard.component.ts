import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';
import { FaBarClickedService } from 'src/app/services/services-css/fa-bars/fa-bar-clicked.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  @Input()
  title : string = '';
  
  //Codes for limits -> 0: Members, 1: Products, 2: Laboratories, 3: Partners
  itemsQuantity = [
    {title:"Members", quantity:"5", code:0, color:this.colorsService.getColorLight(4)},
    {title:"Products", quantity:"2", code:1, color:this.colorsService.getColorLight(5)},
    {title:"Laboratories", quantity:"3", code:2, color:this.colorsService.getColorLight(6)},
    {title:"Partners", quantity:"4", code:3, color:this.colorsService.getColorLight(7)}
  ];
  constructor(private faBarService:FaBarClickedService, private colorsService : ColorsService) { }

  ngOnInit(): void {
    this.faBarService.close();
  }

}
