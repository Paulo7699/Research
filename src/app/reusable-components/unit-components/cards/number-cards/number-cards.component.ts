import { Component, Input, OnInit } from '@angular/core';
import { LimitsService } from 'src/app/services/services-limits/limits.service';

import { faFlask, faHandshake, faPeopleGroup, faWheatAwn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-number-cards',
  templateUrl: './number-cards.component.html',
  styleUrls: ['./number-cards.component.scss']
})
export class NumberCardsComponent implements OnInit {

  @Input()
  color : string = '#B1E5FD'

  @Input()
  title : string = '';

  @Input()
  quantity : any | undefined;

  @Input()
  code : any;


  arrayIcons = [faPeopleGroup, faWheatAwn, faFlask, faHandshake]

  constructor(private limitsService : LimitsService) { }

  ngOnInit(): void {
  }

  isHigherOrEqualsLimit() {
    if(this.code) {
      return this.limitsService.LIMITS[this.code] <= this.quantity;
    }
    else {
      console.log("code undefined");
      
    }
    return false;
  }

}
