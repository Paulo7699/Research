import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details-partners-page',
  templateUrl: './details-partners-page.component.html',
  styleUrls: ['./details-partners-page.component.scss']
})
export class DetailsPartnersPageComponent implements OnInit {
  private routeSub: Subscription | undefined;
  idPartner : number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.idPartner = params['id'];
    });
  }

}
