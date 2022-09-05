import { Component, Input, OnInit } from '@angular/core';
import { FaBarClickedService } from 'src/app/services/services-css/fa-bars/fa-bar-clicked.service';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input()
  selectedIndex : any = 0;

  faClose = faClose;
  arrayPanel : any[]
  constructor(private faBarService:FaBarClickedService) {
    this.arrayPanel = [
      {title:"Dashboard", url:"", icon:0},
      {title:"Products", url:"/products", icon:1},
      {title:"Laboratories", url:"/laboratories", icon:2},
      {title:"Partners", url:"/partners", icon:3},
      {title:"Team", url:"/team", icon:4},
      {title:"Analysis", url:"/analytics", icon:5}
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
