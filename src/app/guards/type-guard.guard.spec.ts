import { TestBed } from '@angular/core/testing';

import { TypeGuardGuard } from './type-guard.guard';

describe('TypeGuardGuard', () => {
  let guard: TypeGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TypeGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
