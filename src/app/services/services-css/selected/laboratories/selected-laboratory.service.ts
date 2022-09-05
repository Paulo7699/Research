import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedLaboratoryService {
  idLaboratorySelected : number | undefined;
  colorSelected : string | undefined;
  constructor() { }

  getLaboratorySelected() {
    return this.idLaboratorySelected;
  }

  setLaboratorySelected(id:number) {
    this.idLaboratorySelected = id;
  }

  getColorSelected() {
    return this.colorSelected;
  }
  setColorSelected(color:string) {
      this.colorSelected = color;
    }
}
