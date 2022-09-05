import { TestBed } from '@angular/core/testing';

import { SelectedLaboratoryService } from './selected-laboratory.service';

describe('SelectedLaboratoryService', () => {
  let service: SelectedLaboratoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedLaboratoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
