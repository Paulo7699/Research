import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn:'root'
})
export class SelectedMonitorPartnersService {
  partnersToMonitor : number[] = [];

  private componentMethodCallSource = new Subject<any>();
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();
  
  constructor() { }

  changeStateOfMonitoring(idPartner:number) {
    var index = this.partnersToMonitor.indexOf(idPartner);
    if (index !== -1) {
      this.partnersToMonitor.splice(index, 1);
    }else {
      this.partnersToMonitor.push(idPartner);
    }

    this.componentMethodCallSource.next(this.partnersToMonitor);
  }

  isSelected(idPartner:number) {
    return this.partnersToMonitor.indexOf(idPartner) !== -1;
  }

  updateChart() {
  }
}
