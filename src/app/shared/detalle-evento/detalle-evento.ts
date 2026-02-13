import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evento } from '../../models/evento';

@Component({
  selector: 'app-detalle-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-evento.html'
})
export class DetalleEvento {
  @Input() evento?: Evento;
  @Output() notificarAccion = new EventEmitter<string>();

  avisarSeleccion(): void {
    if (this.evento) {
      this.notificarAccion.emit(`Has seleccionado el paquete: ${this.evento.nombre}`);
    }
  }
}