import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Servicios } from './features/servicios/servicios';
import { Galeria } from './features/galeria/galeria';
import { Contacto } from './features/contacto/contacto';
import { GestionEventos } from './features/gestion-eventos/gestion-eventos';
import { Error404 } from './features/error-404/error-404';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'servicios', component: Servicios },
    { path: 'galeria', component: Galeria },
    { path: 'contacto', component: Contacto },
    { path: 'gestion-eventos', component: GestionEventos },
    { path: '**', component: Error404 }
];