import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-specification',
  templateUrl: './main-specification.component.html',
  styleUrls: ['./main-specification.component.scss']
})
export class MainSpecificationComponent implements OnInit {
  @Input()
  title : string = '';

  @Input()
  idCaracteristique : string = '';

  fields : string[] = ['min','max','unite'];

  specifications : any = //il faudra récupérer la spécification réelle dans le ngoninit 
    {
      min : 50,
      max : 80,
      unite : "kg"
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
