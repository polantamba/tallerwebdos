import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoService } from '../../services/evento-service';
import { Evento } from '../../models/evento';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.html'
})
export class Servicios implements OnInit {
  private servicio = inject(EventoService);
  
  lista = signal<Evento[]>([]);

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.servicio.getEventos().subscribe(data => {
      this.lista.set(data);
    });
  }
}