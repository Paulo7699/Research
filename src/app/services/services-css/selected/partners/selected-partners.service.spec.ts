import { TestBed } from '@angular/core/testing';

import { SelectedPartnersService } from './selected-partners.service';

describe('SelectedPartnersService', () => {
  let service: SelectedPartnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedPartnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
