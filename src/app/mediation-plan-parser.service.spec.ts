import { TestBed } from '@angular/core/testing';

import { MediationPlanParserService } from './mediation-plan-parser.service';

describe('MediationPlanParserService', () => {
  let service: MediationPlanParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediationPlanParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
