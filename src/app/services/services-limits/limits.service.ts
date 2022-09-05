import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LimitsService {
  //Codes for limits -> 0: Members, 1: Products, 2: Laboratories, 3: Partners
  LIMITS = [5,5,5,5]
  constructor() { }
}
