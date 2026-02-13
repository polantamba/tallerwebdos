import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento-service';
import { ListadoEventos } from '../../shared/listado-eventos/listado-eventos';
import { AgregarEditar } from '../../shared/agregar-editar/agregar-editar';

@Component({
  selector: 'app-gestion-eventos',
  standalone: true,
  imports: [CommonModule, ListadoEventos, AgregarEditar],
  templateUrl: './gestion-eventos.html',
})
export class GestionEventos implements OnInit {
  private servicio = inject(EventoService);
  listaEventos = signal<Evento[]>([]);
  editando = false;
  eventoSeleccionado: Evento = this.resetEvento();

  ngOnInit() { this.obtenerEventos(); }

  obtenerEventos() {
    this.servicio.getEventos().subscribe(data => this.listaEventos.set(data));
  }

  seleccionarParaEditar(evento: Evento) {
    this.editando = true;
    this.eventoSeleccionado = { ...evento };
  }

  procesarGuardado(evento: Evento) {
    if (this.editando && evento.id) {
      this.servicio.putEvento(evento.id, evento).subscribe(() => {
        this.obtenerEventos();
        this.cancelar();
      });
    } else {
      this.servicio.postEvento(evento).subscribe(() => {
        this.obtenerEventos();
        this.cancelar();
      });
    }
  }

  procesarEliminacion(id: string) {
    if (confirm('¿Eliminar servicio de Pol Events?')) {
      this.servicio.deleteEvento(id).subscribe(() => this.obtenerEventos());
    }
  }

  cancelar() {
    this.editando = false;
    this.eventoSeleccionado = this.resetEvento();
  }

  private resetEvento(): Evento {
    return { nombre: '', descripcion: '', imageUrl: '', fecha: '', precio: 0 };
  }
}