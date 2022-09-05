import { Component, Inject, Input, OnInit } from '@angular/core';
import { faFlask,  faHome, faWheatAwn, faPeopleGroup, faChartLine, faScaleBalanced, faArrowPointer} from '@fortawesome/free-solid-svg-icons';
import { faMap, faHandshake} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-title-panels',
  templateUrl: './title-panels.component.html',
  styleUrls: ['./title-panels.component.scss']
})
export class TitlePanelsComponent implements OnInit {
  @Input()
  title : string | undefined; 

  @Input()
  urlInput : string | undefined; 
  
  @Input()
  icon : any = 0;

  @Input()
  isSelected : any = false;

  arrayIcons = [faMap, faWheatAwn, faFlask, faHandshake, faPeopleGroup, faChartLine, faArrowPointer]

  test = faHome
  
  constructor() { }

  ngOnInit(): void {    
  }

}
