import { Component, Input, OnInit } from '@angular/core';

import { faMinimize, faMaximize, faUniversity } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cards-specification',
  templateUrl: './cards-specification.component.html',
  styleUrls: ['./cards-specification.component.scss']
})
export class CardsSpecificationComponent implements OnInit {
  @Input()
  color : string = '#B1E5FD'

  @Input()
  title : string = '';

  @Input()
  quantity : any | undefined;

  @Input()
  codeSpecification : any;

  arrayIcons = [faMinimize, faMaximize, faUniversity]

  constructor() { }

  ngOnInit(): void {
  }

}
