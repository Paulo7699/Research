import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';
import { FaBarClickedService } from 'src/app/services/services-css/fa-bars/fa-bar-clicked.service';
import { SelectedLaboratoryService } from 'src/app/services/services-css/selected/laboratories/selected-laboratory.service';
import { SelectedProductService } from 'src/app/services/services-css/selected/products/selected-product.service';

@Component({
  selector: 'app-main-laboratories',
  templateUrl: './main-laboratories.component.html',
  styleUrls: ['./main-laboratories.component.scss']
})
export class MainLaboratoriesComponent implements OnInit {
  @Input()
  title : string = '';
  //Codes -> 0 : Members, 1 : Products, 2 : Laboratories, 3: Partners
  laboratories = [
    {title:"Merieux", type:2, id:580,code:2, color:this.colorsService.getColorLight(0)},
    {title:"Meheu", type:2, id:251,code:2, color:this.colorsService.getColorLight(1)},
    {title:"SGS", type:2, id:252,code:2, color:this.colorsService.getColorLight(2)},
    {title:"Segess", type:2, id:253,code:2, color:this.colorsService.getColorLight(3)},
  ]
  constructor(private selectedLaboService : SelectedLaboratoryService, private faBarService:FaBarClickedService, private colorsService : ColorsService) { }

  ngOnInit(): void {
    this.faBarService.close();
  }

  getSelectedColor() {
    return this.selectedLaboService.getColorSelected();
  }
}
