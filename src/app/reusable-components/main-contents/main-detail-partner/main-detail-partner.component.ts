import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';
import { SelectedAccountService } from 'src/app/services/services-css/selected/accounts/selected-account.service';

@Component({
  selector: 'app-main-detail-partner',
  templateUrl: './main-detail-partner.component.html',
  styleUrls: ['./main-detail-partner.component.scss']
})
export class MainDetailPartnerComponent implements OnInit {
  @Input()
  title : string = '';

  @Input()
  idPartner : string = '';

  accounts = [
    {name:"Account01", type:6, id:570,code:6, color:this.colorsService.getColorLight(0)},
    {name:"Account02", type:6, id:221,code:6, color:this.colorsService.getColorLight(1)},
    {name:"Account03", type:6, id:25212,code:6, color:this.colorsService.getColorLight(2)},
    {name:"Account04", type:6, id:2513,code:6, color:this.colorsService.getColorLight(3)},
  ]
  
  constructor(
    private selectedAccountService : SelectedAccountService,
    private colorsService : ColorsService
  ) { }

  ngOnInit(): void {
  }

  getSelectedColor() {
    return this.selectedAccountService.getColorSelected();
  }
}
