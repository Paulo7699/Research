import { Component, HostListener, Input, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FaBarClickedService } from 'src/app/services/services-css/fa-bars/fa-bar-clicked.service';
import { ErrorService } from 'src/app/services/services-errors/error.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input()
  title : string = '';

  faBars = faBars;

  public innerWidth: any;

  constructor(private faBarService : FaBarClickedService, private errorService : ErrorService) { }

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

}
