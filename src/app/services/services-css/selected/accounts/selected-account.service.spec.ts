import { TestBed } from '@angular/core/testing';

import { SelectedAccountService } from './selected-account.service';

describe('SelectedAccountService', () => {
  let service: SelectedAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
