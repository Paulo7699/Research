import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { FaBarClickedService } from 'src/app/services/services-css/fa-bars/fa-bar-clicked.service';
import { ErrorService } from 'src/app/services/services-errors/error.service';

@Component({
  selector: 'app-top-details-bar',
  templateUrl: './top-details-bar.component.html',
  styleUrls: ['./top-details-bar.component.scss']
})
export class TopDetailsBarComponent implements OnInit {
  @Input()
  title : string = '';

  faBars = faBars;

  public innerWidth: any;
  
  @Input()
  urlBack : string = '';

  faBack = faArrowLeft;

  constructor(
    private faBarService : FaBarClickedService, 
    private errorService : ErrorService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }

  changeValue() {
    this.faBarService.changeValue();
  }

  testError() {
    this.errorService.changeValue();
  }

  navigateBack() {
    this.router.navigate([this.urlBack]);
  }
}
