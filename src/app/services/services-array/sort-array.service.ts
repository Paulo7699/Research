import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortArrayService {

  constructor() { }

  //true : increasing
  //false : decreasing
  sortArray(unsortedArray:any[], field:number, direction:boolean) {
    if(unsortedArray.length <= 0) return unsortedArray;
    const key = Object.keys(unsortedArray[0])[field];

    var sortedArray: any[] = unsortedArray.sort((obj1, obj2) => {
      if (obj1[key] > obj2[key]) {
        let retour = direction?1:-1;
        return retour;
      }
  
      if (obj1[key] < obj2[key]) {
        let retour = direction?-1:1;
        return retour;
      }
  
      return 0;
    });
    
    return sortedArray;
  }
}
