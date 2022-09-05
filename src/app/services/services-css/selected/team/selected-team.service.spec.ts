import { TestBed } from '@angular/core/testing';

import { SelectedTeamService } from './selected-team.service';

describe('SelectedTeamService', () => {
  let service: SelectedTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
