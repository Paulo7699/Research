import { TestBed } from '@angular/core/testing';

import { SelectedMonitorPartnersService } from './selected-monitor-partners.service';

describe('SelectedMonitorPartnersService', () => {
  let service: SelectedMonitorPartnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedMonitorPartnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
