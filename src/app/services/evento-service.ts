import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Evento } from '../models/evento';

@Injectable({ providedIn: 'root' })
export class EventoService {
  private http = inject(HttpClient);
  private API_URL = 'https://polevents-7cdf4-default-rtdb.firebaseio.com'; 

  
  public esEdicion = false;
  public tempEvento: Evento = { nombre: '', descripcion: '', imageUrl: '', fecha: '', precio: 0 };

  getEventos() {
    return this.http.get<{ [key: string]: Evento }>(`${this.API_URL}/eventos.json`).pipe(
      map(res => res ? Object.keys(res).map(key => ({ ...res[key], id: key })) : [])
    );
  }

  postEvento(evento: Evento) {
    return this.http.post(`${this.API_URL}/eventos.json`, evento);
  }

  putEvento(id: string, evento: Evento) {
    return this.http.put(`${this.API_URL}/eventos/${id}.json`, evento);
  }

  deleteEvento(id: string) {
    return this.http.delete(`${this.API_URL}/eventos/${id}.json`);
  }
}