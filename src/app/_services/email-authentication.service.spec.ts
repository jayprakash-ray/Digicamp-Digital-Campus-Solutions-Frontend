import { TestBed } from '@angular/core/testing';

import { EmailAuthenticationService } from './email-authentication.service';

describe('EmailAuthenticationService', () => {
  let service: EmailAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
