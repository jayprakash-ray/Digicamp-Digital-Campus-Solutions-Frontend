import { TestBed } from '@angular/core/testing';

import { PackageHandlingService } from './package-handling.service';

describe('PackageHandlingService', () => {
  let service: PackageHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
