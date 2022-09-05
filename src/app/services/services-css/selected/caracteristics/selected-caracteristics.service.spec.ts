import { TestBed } from '@angular/core/testing';

import { SelectedCaracteristicsService } from './selected-caracteristics.service';

describe('SelectedCaracteristicsService', () => {
  let service: SelectedCaracteristicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedCaracteristicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
