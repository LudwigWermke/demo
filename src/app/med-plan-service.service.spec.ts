import { TestBed } from '@angular/core/testing';

import { MedPlanServiceService } from './med-plan-service.service';

describe('MedPlanServiceService', () => {
  let service: MedPlanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedPlanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
