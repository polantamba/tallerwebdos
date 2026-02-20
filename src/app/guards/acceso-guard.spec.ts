import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { accesoGuard } from './acceso-guard';

describe('accesoGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accesoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
