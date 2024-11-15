import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { operarioGuard } from './operario.guard';

describe('operarioGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => operarioGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
