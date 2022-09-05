import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedCaracteristicsService {
  idCaracteristicSelected : number | undefined;
  colorSelected : string | undefined;
  constructor() { }

  getCaracteristicSelected() {
    return this.idCaracteristicSelected;
  }

  setCaracteristicSelected(id:number) {
    this.idCaracteristicSelected = id;
  }

  getColorSelected() {
    return this.colorSelected;
  }
  setColorSelected(color:string) {
      this.colorSelected = color;
    }
}

