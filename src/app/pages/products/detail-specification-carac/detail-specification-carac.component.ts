import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SelectedCaracteristicsService } from 'src/app/services/services-css/selected/caracteristics/selected-caracteristics.service';
import { SelectedProductService } from 'src/app/services/services-css/selected/products/selected-product.service';

@Component({
  selector: 'app-detail-specification-carac',
  templateUrl: './detail-specification-carac.component.html',
  styleUrls: ['./detail-specification-carac.component.scss']
})
export class DetailSpecificationCaracComponent implements OnInit {
  private routeSub: Subscription | undefined;
  idProduct : number | undefined;
  idCaracteristique : number | undefined;

  constructor(
    private route: ActivatedRoute,
    private selectedCaracteristicService : SelectedCaracteristicsService,
    private selectedProductService : SelectedProductService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.idCaracteristique = params['id'];
    });

    this.idProduct = this.selectedProductService.getProductSelected();
  }

}
