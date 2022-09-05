import { TestBed } from '@angular/core/testing';

import { GuardPartnerLoginService } from './guard-partner-login.service';

describe('GuardPartnerLoginService', () => {
  let service: GuardPartnerLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardPartnerLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
