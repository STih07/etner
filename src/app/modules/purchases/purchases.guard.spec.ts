import { TestBed } from '@angular/core/testing';

import { PurchasesGuard } from './purchases.guard';

describe('PurchasesGuard', () => {
  let guard: PurchasesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PurchasesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
