import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errorTitle: string = 'Error Test';
  errorMessage: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus excepturi, architecto ea consequatur alias voluptatum saepe repellendus vel voluptas asperiores?";
  shown: boolean = false;

  constructor() { }

  setError(e:string) {
    this.errorMessage = e;
  } 

  getErrorMessage() {return this.errorMessage;}
  getErrorTitle() {return this.errorTitle;}
  isShown() {return this.shown;}

  changeValue() {
    this.shown = !this.shown;
  }
}
