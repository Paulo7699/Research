import { Component, Input, OnInit } from '@angular/core';
import { SelectedAccountService } from 'src/app/services/services-css/selected/accounts/selected-account.service';
import { SelectedCaracteristicsService } from 'src/app/services/services-css/selected/caracteristics/selected-caracteristics.service';
import { SelectedLaboratoryService } from 'src/app/services/services-css/selected/laboratories/selected-laboratory.service';
import { SelectedPartnersService } from 'src/app/services/services-css/selected/partners/selected-partners.service';
import { SelectedProductService } from 'src/app/services/services-css/selected/products/selected-product.service';
import { SelectedTeamService } from 'src/app/services/services-css/selected/team/selected-team.service';

@Component({
  selector: 'app-title-part-main',
  templateUrl: './title-part-main.component.html',
  styleUrls: ['./title-part-main.component.scss']
})
export class TitlePartMainComponent implements OnInit {
  @Input()
  color : string = '#FFBC99';
  @Input()
  titleRight : string = '';
  @Input()
  titleLeft : string = '';

  @Input()
  type : string = '';

  constructor(
    private selectedProductService : SelectedProductService, 
    private selectedLaboratoryService : SelectedLaboratoryService,
    private selectedPartnerService : SelectedPartnersService,
    private selectedTeamSerivce : SelectedTeamService,
    private selectedCaracteristicService : SelectedCaracteristicsService,
    private selectedAccountService : SelectedAccountService
    ) { }

  ngOnInit(): void {
  }

  getSelectedColor() {
    switch(this.type) {
      case "1" : 
        return this.selectedProductService.getColorSelected();
      case "2" : 
        return this.selectedLaboratoryService.getColorSelected();
      case "3" : 
        return this.selectedPartnerService.getColorSelected();
      case "4" : 
        return this.selectedTeamSerivce.getColorSelected();
      case "5" :
        return this.selectedCaracteristicService.getColorSelected();
      case "6" :
        return this.selectedAccountService.getColorSelected();
      default : 
        return false;
    }
  }
}
