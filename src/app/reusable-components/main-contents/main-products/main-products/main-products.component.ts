import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';
import { FaBarClickedService } from 'src/app/services/services-css/fa-bars/fa-bar-clicked.service';
import { SelectedProductService } from 'src/app/services/services-css/selected/products/selected-product.service';

@Component({
  selector: 'app-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.scss']
})
export class MainProductsComponent implements OnInit {
  @Input()
  title : string = '';
  //Codes -> 0 : Members, 1 : Products, 2 : Laboratories, 3: Partners
  products = [
    //gradient of #FFBC99 -> https://coolors.co/ffbc99
    {title:"PlumpyNut", type:1, id:580, code:1, color:this.colorsService.getColorLight(0)},
    {title:"PlumpySup", type:1, id:251, code:1, color:this.colorsService.getColorLight(1)},
    {title:"PlumpyPlop", type:1, id:252, code:1, color:this.colorsService.getColorLight(2)},
    {title:"PlumpyPlok", type:1, id:253, code:1, color:this.colorsService.getColorLight(3)},
  ]

  constructor(private selectedProductService : SelectedProductService, private faBarService:FaBarClickedService, private colorsService : ColorsService) { }

  ngOnInit(): void {
    this.faBarService.close();
  }

  getSelectedColor() {
    return this.selectedProductService.getColorSelected();
  }
}
