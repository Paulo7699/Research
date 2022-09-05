import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaBarClickedService {
  clicked : boolean = false;

  constructor() { }

  changeValue() {
    this.clicked = !this.clicked;
  }

  isClicked() {
    return this.clicked;
  }

  close() {
    this.clicked = false;
  }
}
