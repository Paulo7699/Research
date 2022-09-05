import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.scss']
})
export class FormProductsComponent implements OnInit {
  @Input()
  color : string = "#B1E5FC";

  @Input()
  placeholder: string = "Name";
  
  constructor() { }

  ngOnInit(): void {
  }

}
