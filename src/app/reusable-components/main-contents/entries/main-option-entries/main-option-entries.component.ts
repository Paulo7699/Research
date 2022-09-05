import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';

@Component({
  selector: 'app-main-option-entries',
  templateUrl: './main-option-entries.component.html',
  styleUrls: ['./main-option-entries.component.scss']
})
export class MainOptionEntriesComponent implements OnInit {
  @Input()
  title : string = '';

  options = [
    {title:"Add a new input", color:this.colorsService.getColorLight(0)},
    {title:"Complete an input", color:this.colorsService.getColorLight(1)},
    {title:"Completed inputs", color:this.colorsService.getColorLight(2)},
  ]

  constructor(private colorsService : ColorsService) { }

  ngOnInit(): void {
  }

}
