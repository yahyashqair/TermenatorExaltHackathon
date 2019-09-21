import { TestBed } from '@angular/core/testing';

import { DonaterService } from './donater-service.service';

describe('DonaterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonaterService = TestBed.get(DonaterService);
    expect(service).toBeTruthy();
  });
});
