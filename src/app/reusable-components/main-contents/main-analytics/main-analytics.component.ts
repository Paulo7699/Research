import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';
import { FaBarClickedService } from 'src/app/services/services-css/fa-bars/fa-bar-clicked.service';
import { SelectedCaracteristicsService } from 'src/app/services/services-css/selected/caracteristics/selected-caracteristics.service';
import { SelectedMonitorPartnersService } from 'src/app/services/services-css/selected/monitor/selected-monitor-partners.service';
import { SelectedProductService } from 'src/app/services/services-css/selected/products/selected-product.service';

@Component({
  selector: 'app-main-analytics',
  templateUrl: './main-analytics.component.html',
  styleUrls: ['./main-analytics.component.scss']
})
export class MainAnalyticsComponent implements OnInit {
  @Input()
  title : string = '';

  @Input()
  partnerAsking : boolean = false;
  
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
  
  partners = [
    {title:"Samil", type:3, id:580,code:3, color:this.colorsService.getColorLight(0)},
    {title:"Hilina", type:3, id:251,code:3, color:this.colorsService.getColorLight(1)},
    {title:"Praia", type:3, id:252,code:3, color:this.colorsService.getColorLight(2)},
    {title:"Likio", type:3, id:253,code:3, color:this.colorsService.getColorLight(3)},
  ]
  constructor(
    private faBarService:FaBarClickedService, 
    private colorsService : ColorsService,
    private selectedProductsService : SelectedProductService,
    private selectedCaracteristicService : SelectedCaracteristicsService,
    private selectedPartnerMonitorService : SelectedMonitorPartnersService
    ) { }

  ngOnInit(): void {
    this.faBarService.close();
    if(this.partnerAsking)
        this.selectedPartnerMonitorService.changeStateOfMonitoring(999);//replace by user connected
  }

  isSelected(code : number) {
    switch(code) {
      case 0:
        return this.selectedProductsService.getProductSelected() !== undefined;
      case 1:
        return this.selectedCaracteristicService.getCaracteristicSelected() !== undefined;
      case 2:
        if(this.partnerAsking)
          return (this.selectedProductsService.getProductSelected() !== undefined && this.selectedCaracteristicService.getCaracteristicSelected() !== undefined);
        return this.selectedPartnerMonitorService.partnersToMonitor.length >0;
      default:
        return false;        
    }
  }

}
