import { TestBed } from '@angular/core/testing';

import { GuardDevLoginService } from './guard-dev-login.service';

describe('GuardDevLoginService', () => {
  let service: GuardDevLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardDevLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
