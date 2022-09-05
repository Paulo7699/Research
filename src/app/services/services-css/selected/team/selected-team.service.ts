import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedTeamService {
  idMemberSelected : number | undefined;
  colorSelected : string | undefined;
  constructor() { }

  getMemberSelected() {
    return this.idMemberSelected;
  }

  getColorSelected() {
    return this.colorSelected;
  }

  setMemberSelected(id:number) {
    this.idMemberSelected = id;
  }

  setColorSelected(color:string) {
    this.colorSelected = color;
  }
}
