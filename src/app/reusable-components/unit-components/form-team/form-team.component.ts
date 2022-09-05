import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.scss']
})
export class FormTeamComponent implements OnInit {
  @Input()
  color : string = "#B1E5FC";
  
  constructor() { }

  ngOnInit(): void {
  }

}
