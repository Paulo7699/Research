import { TestBed } from '@angular/core/testing';

import { FaBarClickedService } from './fa-bar-clicked.service';

describe('FaBarClickedService', () => {
  let service: FaBarClickedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaBarClickedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
