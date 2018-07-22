import { TestBed, inject } from '@angular/core/testing';

import { AuthorizationService } from './authorization.service';
import { NgxWindowTokenModule } from 'ngx-window-token';

describe('AuthorizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizationService],
      imports: [NgxWindowTokenModule]
    });
  });

  it('should be created', inject([AuthorizationService], (service: AuthorizationService) => {
    expect(service).toBeTruthy();
  }));
});
