import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';
import { FaBarClickedService } from 'src/app/services/services-css/fa-bars/fa-bar-clicked.service';
import { SelectedTeamService } from 'src/app/services/services-css/selected/team/selected-team.service';

@Component({
  selector: 'app-main-team',
  templateUrl: './main-team.component.html',
  styleUrls: ['./main-team.component.scss']
})
export class MainTeamComponent implements OnInit {
  @Input()
  title : string = '';
  //Codes -> 0 : Members, 1 : Products, 2 : Laboratories, 3: Partners
  team = [
    {name:"Mathilde", type:4, id:580,code:4, color:this.colorsService.getColorLight(0), isAdmin:true},
    {name:"Paul", type:4, id:251,code:4, color:this.colorsService.getColorLight(1), isAdmin:true},
    {name:"Francis", type:4, id:252,code:4, color:this.colorsService.getColorLight(2), isAdmin:false},
    {name:"Nicolas", type:4, id:253,code:4, color:this.colorsService.getColorLight(3), isAdmin:false},
  ]

  constructor(private selectedTeamService : SelectedTeamService, private faBarService:FaBarClickedService, private colorsService:ColorsService) { }

  ngOnInit(): void {
    this.faBarService.close();
  }

  getSelectedColor() {
    return this.selectedTeamService.getColorSelected();
  }
}
