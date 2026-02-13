import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule], 
  templateUrl: './footer.html'
})
export class Footer {
  anio: number = new Date().getFullYear();


  enlaces = [
    { texto: 'Inicio', path: 'home' },
    { texto: 'Servicios', path: 'servicios' },
    { texto: 'Galería', path: 'galeria' },
    { texto: 'Contacto', path: 'contacto' }
  ];
}