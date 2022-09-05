import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  private colorsLight = [
    "#FFBC99",
    "#FF99B9",
    "#FDFF99",
    "#99DBFF",
    "#CABDFF",
    "#b5e4ca",
    "#B1E5FD",
    "#f5d7e3"
  ]

  constructor() { }

  getColorLight(id : number) {
    return this.colorsLight[id%this.colorsLight.length];
  } 
}
