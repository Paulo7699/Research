import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedAccountService {
  idAccountSelected : number | undefined;
  colorSelected : string | undefined;
  constructor() { }

  getAccountSelected() {
    return this.idAccountSelected;
  }

  setAccountSelected(id:number) {
    this.idAccountSelected = id;
  }

  getColorSelected() {
    return this.colorSelected;
  }
  setColorSelected(color:string) {
      this.colorSelected = color;
    }
}
