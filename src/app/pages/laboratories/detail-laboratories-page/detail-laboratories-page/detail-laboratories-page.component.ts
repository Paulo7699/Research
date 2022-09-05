import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-laboratories-page',
  templateUrl: './detail-laboratories-page.component.html',
  styleUrls: ['./detail-laboratories-page.component.scss']
})
export class DetailLaboratoriesPageComponent implements OnInit {
  private routeSub: Subscription | undefined;
  idLaboratory : number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.idLaboratory = params['id'];
    });
  }
}
