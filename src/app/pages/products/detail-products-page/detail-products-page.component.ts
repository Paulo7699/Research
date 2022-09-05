import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-products-page',
  templateUrl: './detail-products-page.component.html',
  styleUrls: ['./detail-products-page.component.scss']
})
export class DetailProductsPageComponent implements OnInit {
  private routeSub: Subscription | undefined;
  idProduct : number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.idProduct = params['id'];
    });
  }

}
