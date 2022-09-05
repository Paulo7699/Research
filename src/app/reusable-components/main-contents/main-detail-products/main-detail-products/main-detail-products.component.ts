import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';
import { SelectedCaracteristicsService } from 'src/app/services/services-css/selected/caracteristics/selected-caracteristics.service';

@Component({
  selector: 'app-main-detail-products',
  templateUrl: './main-detail-products.component.html',
  styleUrls: ['./main-detail-products.component.scss']
})
export class MainDetailProductsComponent implements OnInit {
  @Input()
  title : string = '';

  @Input()
  idProduct : string = '';
  //Codes -> 0 : Members, 1 : Products, 2 : Laboratories, 3: Partners
  caracteristics = [
    //gradient of #FFBC99 -> https://coolors.co/ffbc99
    {title:"Vitamin", type:5, id:1, code:5, color:this.colorsService.getColorLight(0)},
    {title:"Sodium", type:5, id:2, code:5, color:this.colorsService.getColorLight(1)},
    {title:"Calcium", type:5, id:3, code:5, color:this.colorsService.getColorLight(2)},
    {title:"Potassium", type:5, id:4, code:5, color:this.colorsService.getColorLight(3)},
    {title:"Carbon", type:5, id:5, code:5, color:this.colorsService.getColorLight(4)},
    {title:"Iron", type:5, id:6, code:5, color:this.colorsService.getColorLight(5)}
  ]
  constructor(private selectedCaracteristicService : SelectedCaracteristicsService, private colorsService:ColorsService) { }

  ngOnInit(): void {
  }

  getSelectedColor() {
    return this.selectedCaracteristicService.getColorSelected();
  }
}
