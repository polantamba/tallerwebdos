import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoService } from '../../services/evento-service';
import { Evento } from '../../models/evento';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html'
})
export class Galeria implements OnInit {
  private servicio = inject(EventoService);
  eventos = signal<Evento[]>([]);

  ngOnInit() {
    this.servicio.getEventos().subscribe(data => {
      this.eventos.set(data);
    });
  }
}