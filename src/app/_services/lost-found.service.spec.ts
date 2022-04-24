import { TestBed } from '@angular/core/testing';

import { LostFoundService } from './lost-found.service';

describe('LostFoundService', () => {
  let service: LostFoundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LostFoundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
