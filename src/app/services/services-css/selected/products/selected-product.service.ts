import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductService {
  idProductSelected : number | undefined;
  colorSelected : string | undefined;
  constructor() { }

  getProductSelected() {
    return this.idProductSelected;
  }

  getColorSelected() {
    return this.colorSelected;
  }

  setProductSelected(id:number) {
    this.idProductSelected = id;
  }

  setColorSelected(color:string) {
    this.colorSelected = color;
  }
}
