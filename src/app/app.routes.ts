import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Login } from './shared/login/login';
import { FormularioRegistro } from './shared/formulario-registro/formulario-registro';
import { authGuard, accesoGuard } from './guards/auth-guard';
import { GestionEventos } from './features/gestion-eventos/gestion-eventos';
import { Contacto } from './features/contacto/contacto';
import { Galeria } from './features/galeria/galeria';
import { Servicios } from './features/servicios/servicios';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'galeria', component: Galeria },
  { path: 'contacto', component: Contacto },
  { path: 'login', component: Login },
  {
    path: 'servicios',
    component: Servicios,
    canMatch: [authGuard, accesoGuard]
  },
  {
    path: 'gestion-eventos',
    component: GestionEventos,
    canMatch: [authGuard, accesoGuard]
  },
  {
    path: 'gestion-usuarios',
    component: FormularioRegistro,
    canMatch: [authGuard, accesoGuard]
  },
  { path: '**', redirectTo: 'home' }
];