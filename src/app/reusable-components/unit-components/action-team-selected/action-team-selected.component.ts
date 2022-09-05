import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectedCaracteristicsService } from 'src/app/services/services-css/selected/caracteristics/selected-caracteristics.service';
import { SelectedLaboratoryService } from 'src/app/services/services-css/selected/laboratories/selected-laboratory.service';
import { SelectedPartnersService } from 'src/app/services/services-css/selected/partners/selected-partners.service';
import { SelectedProductService } from 'src/app/services/services-css/selected/products/selected-product.service';
import { SelectedTeamService } from 'src/app/services/services-css/selected/team/selected-team.service';
import { DialogAnimationComponent } from '../dialog-animation/dialog-animation.component';

@Component({
  selector: 'app-action-team-selected',
  templateUrl: './action-team-selected.component.html',
  styleUrls: ['./action-team-selected.component.scss']
})
export class ActionTeamSelectedComponent implements OnInit {
  dialogRef : any;
  @Input()
  color : string = '#B1E5FD'

  @Input()
  type : string = '';

  constructor(
    private selectedProductService : SelectedProductService, 
    private selectedLaboratoyService:SelectedLaboratoryService,
    private selectedPartnerService : SelectedPartnersService,
    private selectedTeamService : SelectedTeamService,
    private selectedCaracteristicService : SelectedCaracteristicsService,
    private router : Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  getSelectedColor() {
    switch(this.type) {
      case "1" : 
        return this.selectedProductService.getColorSelected();
      case "2" : 
        return this.selectedLaboratoyService.getColorSelected();
      case "3" : 
        return this.selectedPartnerService.getColorSelected();
      case "4" : 
        return this.selectedTeamService.getColorSelected();
      case "5" : 
        return this.selectedCaracteristicService.getColorSelected();
      default : 
        return null;
    }
  }

  navigateToDetails() {
    switch(this.type) {
      case "1" : 
        if(this.selectedProductService.getColorSelected())
          this.router.navigate(['detail-product/'+this.selectedProductService.getProductSelected()]);
        break;
      case "2" : 
        break;
      case "3" : 
        break;
      case "4" : 
        break;
      default : 
        break;
    }
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let itemToDelete = this.selectedTeamService.getMemberSelected();
    this.dialogRef = this.dialog.open(DialogAnimationComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:{
        itemToDelete : itemToDelete,
      }
    });

    this.dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
