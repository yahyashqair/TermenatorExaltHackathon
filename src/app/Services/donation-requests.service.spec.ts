import { TestBed } from '@angular/core/testing';

import { DonationRequestsService } from './donation-requests.service';

describe('DonationRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonationRequestsService = TestBed.get(DonationRequestsService);
    expect(service).toBeTruthy();
  });
});
