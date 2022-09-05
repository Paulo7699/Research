import { Component, OnInit } from '@angular/core';
import { SelectedProductService } from 'src/app/services/services-css/selected/products/selected-product.service';

@Component({
  selector: 'app-completed-entries',
  templateUrl: './completed-entries.component.html',
  styleUrls: ['./completed-entries.component.scss']
})
export class CompletedEntriesComponent implements OnInit {

  constructor(private selectedProductService:SelectedProductService) { }

  ngOnInit(): void {
  }


}
