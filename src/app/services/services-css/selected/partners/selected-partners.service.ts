import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedPartnersService {
  idPartnerSelected : number | undefined;
  colorSelected : string | undefined;
  constructor() { }

  getPartnerSelected() {
    return this.idPartnerSelected;
  }

  getColorSelected() {
    return this.colorSelected;
  }

  setPartnerSelected(id:number) {
    this.idPartnerSelected = id;
  }

  setColorSelected(color:string) {
    this.colorSelected = color;
  }
}
