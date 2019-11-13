import { TestBed, async, inject } from '@angular/core/testing';

import { RolGuardGuard } from './rol-guard.guard';

describe('RolGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolGuardGuard]
    });
  });

  it('should ...', inject([RolGuardGuard], (guard: RolGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
