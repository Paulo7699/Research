import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-account-partner',
  templateUrl: './form-account-partner.component.html',
  styleUrls: ['./form-account-partner.component.scss']
})
export class FormAccountPartnerComponent implements OnInit {
  @Input()
  color : string = "#B1E5FC";

  constructor() { }

  ngOnInit(): void {
  }

}
