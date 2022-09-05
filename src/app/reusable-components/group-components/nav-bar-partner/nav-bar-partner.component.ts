import { Component, Input, OnInit } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FaBarClickedService } from 'src/app/services/services-css/fa-bars/fa-bar-clicked.service';

@Component({
  selector: 'app-nav-bar-partner',
  templateUrl: './nav-bar-partner.component.html',
  styleUrls: ['./nav-bar-partner.component.scss']
})
export class NavBarPartnerComponent implements OnInit {
  @Input()
  selectedIndex : any = 0;

  faClose = faClose;
  arrayPanel : any[]
  constructor(private faBarService:FaBarClickedService) {
    this.arrayPanel = [
      {title:"Entries", url:"/entries", icon:6},
      {title:"Analysis", url:"/analysis-partner", icon:5}
    ]
  }

  ngOnInit(): void {
  }

  isItClicked() {
    return this.faBarService.isClicked();
  }

  closeHamburgerMenu() {
    this.faBarService.changeValue();
  }
}
