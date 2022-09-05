import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChartLine, faFlask, faHandshake, faPeopleGroup, faScaleBalanced, faWheatAwn, faAtom, faPerson, faAdd } from '@fortawesome/free-solid-svg-icons';
import { SelectedAccountService } from 'src/app/services/services-css/selected/accounts/selected-account.service';
import { SelectedCaracteristicsService } from 'src/app/services/services-css/selected/caracteristics/selected-caracteristics.service';
import { SelectedLaboratoryService } from 'src/app/services/services-css/selected/laboratories/selected-laboratory.service';
import { SelectedPartnersService } from 'src/app/services/services-css/selected/partners/selected-partners.service';
import { SelectedProductService } from 'src/app/services/services-css/selected/products/selected-product.service';
import { SelectedTeamService } from 'src/app/services/services-css/selected/team/selected-team.service';

@Component({
  selector: 'app-cards-selectable',
  templateUrl: './cards-selectable.component.html',
  styleUrls: ['./cards-selectable.component.scss']
})
export class CardsSelectableComponent implements OnInit {
  @Input()
  title : string = '';

  @Input()
  isEntry : boolean = false;
  @Input()
  entryType : string | undefined;
  
  @Input()
  id : any | undefined; //

  //Codes -> 0 : Members, 1 : Products, 2 : Laboratories, 3: Partners
  @Input()
  type : any;


  @Input()
  color : string = '#B1E5FD'

  @Input()
  code : any;

  @Input()
  isAdmin : boolean = false;


  arrayIcons = [faPeopleGroup, faWheatAwn, faFlask, faHandshake, faPeopleGroup, faAtom, faPerson,faChartLine, faScaleBalanced, faAdd]

  constructor(
    private selectedProductService:SelectedProductService,
    private selectedLaboratoyService:SelectedLaboratoryService,
    private selectedPartnerService:SelectedPartnersService,
    private selectedTeamService:SelectedTeamService,
    private selectedCaracteristicService : SelectedCaracteristicsService,
    private selectedAccountService : SelectedAccountService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  selectItem() {
    if(this.isEntry) {
      switch(this.entryType) {
        case "0":
          this.router.navigate(['new-entry']);
          break;
        case "1":
          this.router.navigate(['complete-entry']);
          break;
        case "2":
          this.router.navigate(['completed-entries']);
          break;
      }
    }
    else {
      switch(this.type) {
        case "1" : 
          this.selectedProductService.setProductSelected(this.id);
          this.selectedProductService.setColorSelected(this.color);
          break;
        case "2" : 
          this.selectedLaboratoyService.setLaboratorySelected(this.id);
          this.selectedLaboratoyService.setColorSelected(this.color);
          break;
        case "3" : 
          this.selectedPartnerService.setPartnerSelected(this.id);
          this.selectedPartnerService.setColorSelected(this.color);
          break;
        case "4" : 
          this.selectedTeamService.setMemberSelected(this.id);
          this.selectedTeamService.setColorSelected(this.color);
          break;
        case "5" : 
          this.selectedCaracteristicService.setCaracteristicSelected(this.id);
          this.selectedCaracteristicService.setColorSelected(this.color);
        break;
        case "6" : 
          this.selectedAccountService.setAccountSelected(this.id);
          this.selectedAccountService.setColorSelected(this.color);
        break;
        default :
          console.log("aucun type trouvé : "+this.type);
          break;
      }
    }
  }

  isSelected() {
    switch(this.type) {
      case "1" : 
        return this.selectedProductService.getProductSelected() == this.id;
      case "2" : 
        return this.selectedLaboratoyService.getLaboratorySelected() == this.id;
      case "3" : 
        return this.selectedPartnerService.getPartnerSelected() == this.id;
      case "4" : 
        return this.selectedTeamService.getMemberSelected() == this.id;
      case "5" :       
        return this.selectedCaracteristicService.getCaracteristicSelected() == this.id;
      case "6" : 
        return this.selectedAccountService.getAccountSelected() == this.id;
      default : 
        return false;
    }
  }
}
