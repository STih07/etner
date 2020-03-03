import { TestBed } from '@angular/core/testing';

import { AuthorithationService } from './authorithation.service';

describe('AuthorithationService', () => {
  let service: AuthorithationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorithationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
