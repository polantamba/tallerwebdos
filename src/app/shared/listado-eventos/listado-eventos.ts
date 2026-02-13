import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evento } from '../../models/evento';
import { EventoService } from '../../services/evento-service';

@Component({
  selector: 'app-listado-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-eventos.html',
})
export class ListadoEventos {
  public servicio = inject(EventoService);

  @Input() eventos: Evento[] = [];

  
  prepararEdicion(item: Evento) {
    this.servicio.tempEvento = { ...item };
    this.servicio.esEdicion = true;
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }

  
  eliminar(id: string) {
    if (confirm('¿Confirmar eliminación permanente del registro?')) {
      this.servicio.deleteEvento(id).subscribe(() => {
        window.location.reload();
      });
    }
  }
}