import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';
import { SelectedProductService } from 'src/app/services/services-css/selected/products/selected-product.service';

@Component({
  selector: 'app-main-add-entry',
  templateUrl: './main-add-entry.component.html',
  styleUrls: ['./main-add-entry.component.scss']
})
export class MainAddEntryComponent implements OnInit {
  @Input()
  title : string = '';

  products = [
    //gradient of #FFBC99 -> https://coolors.co/ffbc99
    {title:"PlumpyNut", type:1, id:580, code:1, color:this.colorsService.getColorLight(0)},
    {title:"PlumpySup", type:1, id:251, code:1, color:this.colorsService.getColorLight(1)},
    {title:"PlumpyPlop", type:1, id:252, code:1, color:this.colorsService.getColorLight(2)},
    {title:"PlumpyPlok", type:1, id:253, code:1, color:this.colorsService.getColorLight(3)},
  ]

  caracteristics = [
    //gradient of #FFBC99 -> https://coolors.co/ffbc99
    {title:"Vitamin", type:5, id:1, code:5, color:this.colorsService.getColorLight(0)},
    {title:"Sodium", type:5, id:2, code:5, color:this.colorsService.getColorLight(1)},
    {title:"Calcium", type:5, id:3, code:5, color:this.colorsService.getColorLight(2)},
    {title:"Potassium", type:5, id:4, code:5, color:this.colorsService.getColorLight(3)},
    {title:"Carbon", type:5, id:5, code:5, color:this.colorsService.getColorLight(4)},
    {title:"Iron", type:5, id:6, code:5, color:this.colorsService.getColorLight(5)}
  ]

  laboratories = [
    {title:"Merieux", type:2, id:580,code:2, color:this.colorsService.getColorLight(0)},
    {title:"Meheu", type:2, id:251,code:2, color:this.colorsService.getColorLight(1)},
    {title:"SGS", type:2, id:252,code:2, color:this.colorsService.getColorLight(2)},
    {title:"Segess", type:2, id:253,code:2, color:this.colorsService.getColorLight(3)},
  ]

  additionalFields = [
    {title:"Date of analysis"},
    {title:"Formula"},
    {title:"Premix"},
  ]

  colums = [
    {name:"Caracteristic"},
    {name:"Unit"},
    {name:"Laboratory"},
    {name:"Lab Name"},
    {name:"Incertitude"},
    {name:"Value"},
  ]
  
  constructor(private colorsService : ColorsService, private selectedProductService:SelectedProductService) { }

  ngOnInit(): void {
  }

  productSelected() {
    return this.selectedProductService.getProductSelected() !== undefined;
  }

}
