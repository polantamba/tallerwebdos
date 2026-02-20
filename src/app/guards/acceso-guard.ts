import { inject, PLATFORM_ID } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../services/auth-service';

export const accesoGuard: CanMatchFn = () => {
  const auth = inject(AuthService);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const rol = auth.rolActual();
    return rol === 'ADMIN' || rol === 'EMPLEADO';
  }
  
  return false;
};