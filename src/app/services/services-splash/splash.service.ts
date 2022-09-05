import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SplashService {
  hasAlreadyBeenActivated = false;

  constructor() { }
}
