import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';
import { SelectedProductService } from 'src/app/services/services-css/selected/products/selected-product.service';

@Component({
  selector: 'app-main-completed-entries',
  templateUrl: './main-completed-entries.component.html',
  styleUrls: ['./main-completed-entries.component.scss']
})
export class MainCompletedEntriesComponent implements OnInit {
  @Input()
  title : string = '';
  
  products = [
    //gradient of #FFBC99 -> https://coolors.co/ffbc99
    {title:"PlumpyNut", type:1, id:580, code:1, color:this.colorsService.getColorLight(0)},
    {title:"PlumpySup", type:1, id:251, code:1, color:this.colorsService.getColorLight(1)},
    {title:"PlumpyPlop", type:1, id:252, code:1, color:this.colorsService.getColorLight(2)},
    {title:"PlumpyPlok", type:1, id:253, code:1, color:this.colorsService.getColorLight(3)},
  ]

  constructor(private colorsService : ColorsService, private selectedProductService:SelectedProductService) { }

  ngOnInit(): void {
  }

  productSelected() {
    return this.selectedProductService.getProductSelected() !== undefined;
  }

}
