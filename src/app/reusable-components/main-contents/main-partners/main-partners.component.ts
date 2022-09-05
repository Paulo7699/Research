import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';
import { FaBarClickedService } from 'src/app/services/services-css/fa-bars/fa-bar-clicked.service';
import { SelectedPartnersService } from 'src/app/services/services-css/selected/partners/selected-partners.service';

@Component({
  selector: 'app-main-partners',
  templateUrl: './main-partners.component.html',
  styleUrls: ['./main-partners.component.scss']
})
export class MainPartnersComponent implements OnInit {
  @Input()
  title : string = '';
  //Codes -> 0 : Members, 1 : Products, 2 : Laboratories, 3: Partners
  partners = [
    {title:"Samil", type:3, id:580,code:3, color:this.colorsService.getColorLight(0)},
    {title:"Hilina", type:3, id:251,code:3, color:this.colorsService.getColorLight(1)},
    {title:"Praia", type:3, id:252,code:3, color:this.colorsService.getColorLight(2)},
    {title:"Likio", type:3, id:253,code:3, color:this.colorsService.getColorLight(3)},
  ]
  
  constructor(
    private selectedPartnerService : SelectedPartnersService, 
    private faBarService:FaBarClickedService,
    private colorsService : ColorsService
  ) { }

  ngOnInit(): void {
    this.faBarService.close();
  }

  getSelectedColor() {
    return this.selectedPartnerService.getColorSelected();
  }
}
