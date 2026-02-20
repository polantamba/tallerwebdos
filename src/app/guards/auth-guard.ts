import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const authGuard: CanMatchFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.sesionIniciada() ? true : router.parseUrl('/login');
};

export const accesoGuard: CanMatchFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const rol = auth.rolActual();
  return (rol === 'ADMIN' || rol === 'EMPLEADO') ? true : router.parseUrl('/home');
};

export const adminGuard: CanMatchFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.rolActual() === 'ADMIN' ? true : router.parseUrl('/home');
};