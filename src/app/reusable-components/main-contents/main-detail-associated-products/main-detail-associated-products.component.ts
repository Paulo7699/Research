import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';

@Component({
  selector: 'app-main-detail-associated-products',
  templateUrl: './main-detail-associated-products.component.html',
  styleUrls: ['./main-detail-associated-products.component.scss']
})
export class MainDetailAssociatedProductsComponent implements OnInit {
  @Input()
  title : string = '';

  @Input()
  idPartner : string = '';

  products = [
    //gradient of #FFBC99 -> https://coolors.co/ffbc99
    {title:"PlumpyNut", type:1, id:580, code:1, color:this.colorsService.getColorLight(0)},
    {title:"PlumpySup", type:1, id:251, code:1, color:this.colorsService.getColorLight(1)},
    {title:"PlumpyPlop", type:1, id:252, code:1, color:this.colorsService.getColorLight(2)},
    {title:"PlumpyPlok", type:1, id:253, code:1, color:this.colorsService.getColorLight(3)},
  ]

  productsPartnerCanDo = [
    {title:"PlumpyNut", type:1, id:580, code:1, color:this.colorsService.getColorLight(0)}
  ]

  constructor(private colorsService : ColorsService) { }

  ngOnInit(): void {
  }


  associateProduct(idProd:number) {
    let product : any = this.products.filter(obj => {return obj.id === idProd})
    
    if(this.productsPartnerCanDo.find(obj => {return obj.id == idProd}) == undefined)
      this.productsPartnerCanDo.push(product[0]);
  }

  removeAssociation(idProd:number) {
    this.productsPartnerCanDo = this.productsPartnerCanDo.filter(obj => obj.id != idProd);
  }
}
