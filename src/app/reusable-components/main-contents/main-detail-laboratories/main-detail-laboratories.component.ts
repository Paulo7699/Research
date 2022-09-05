import { Component, Input, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/services-css/colors/colors.service';

@Component({
  selector: 'app-main-detail-laboratories',
  templateUrl: './main-detail-laboratories.component.html',
  styleUrls: ['./main-detail-laboratories.component.scss']
})
export class MainDetailLaboratoriesComponent implements OnInit {
  @Input()
  title : string = '';

  @Input()
  idLaboratory : string = '';

  productsAndCaracAndIncertitude = [
    //gradient of #FFBC99 -> https://coolors.co/ffbc99
    {
      title:"PlumpyNut", 
      id:580,
      color:this.colorsService.getColorLight(0),
      caracteristiques : [
        {
          nameCarac : "Vitamin",
          incertitude : 10
        },
        {
          nameCarac : "Calcium",
          incertitude : 10
        },
        {
          nameCarac : "Potassium",
          incertitude : 10
        }
      ]
    },
    {
      title:"PlumpySup", 
      id:251,
      color:this.colorsService.getColorLight(1),
      caracteristiques : [
        {
          nameCarac : "Vitamin",
          incertitude : 10
        },
        {
          nameCarac : "Calcium",
          incertitude : 10
        },
        {
          nameCarac : "Potassium",
          incertitude : 10
        }
      ]
    },
  ]

  constructor(
    private colorsService : ColorsService
  ) { }

  ngOnInit(): void {
  }

}
