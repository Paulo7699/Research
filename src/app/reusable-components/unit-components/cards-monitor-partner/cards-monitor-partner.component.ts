import { Component, Input, OnInit } from '@angular/core';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import { SelectedMonitorPartnersService } from 'src/app/services/services-css/selected/monitor/selected-monitor-partners.service';
import { ChartMonitorComponent } from '../chart-monitor/chart-monitor.component';

@Component({
  selector: 'app-cards-monitor-partner',
  templateUrl: './cards-monitor-partner.component.html',
  styleUrls: ['./cards-monitor-partner.component.scss']
})
export class CardsMonitorPartnerComponent implements OnInit {
  @Input()
  title : string = '';
  
  @Input()
  id : any | undefined; 

  @Input()
  color : string = '#B1E5FD'

  icon = faHandshake;
  
  constructor(
    private selectedMonitorPartnerService : SelectedMonitorPartnersService
  ) { }

  ngOnInit(): void {
  }

  selectItem() {
    this.selectedMonitorPartnerService.changeStateOfMonitoring(this.id);
  }

  isSelected() {
    return this.selectedMonitorPartnerService.isSelected(this.id);
  }

}
