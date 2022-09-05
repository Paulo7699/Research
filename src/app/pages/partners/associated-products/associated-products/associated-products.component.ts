import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-associated-products',
  templateUrl: './associated-products.component.html',
  styleUrls: ['./associated-products.component.scss']
})
export class AssociatedProductsComponent implements OnInit {
  private routeSub: Subscription | undefined;
  idPartner : number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.idPartner = params['id'];
    });
  }
}
