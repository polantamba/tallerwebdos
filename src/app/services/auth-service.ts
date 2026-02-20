import { inject, Injectable, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario-service';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private servicioUsuario = inject(UsuarioService);
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  sesionIniciada = signal<boolean>(false);
  rolActual = signal<string | null>(null);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.sesionIniciada.set(localStorage.getItem('sesion') === 'true');
      this.rolActual.set(localStorage.getItem('rol'));
    }
  }

  login(email: string, password: string): Observable<boolean> {
    return this.servicioUsuario.getUsuarios().pipe(
      map(usuarios => {
        const u = usuarios.find(user => 
          user.email.toLowerCase().trim() === email.toLowerCase().trim() && 
          user.password.toString() === password.toString()
        );
        if (u) {
          if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('sesion', 'true');
            localStorage.setItem('rol', u.rol);
          }
          this.rolActual.set(u.rol);
          this.sesionIniciada.set(true);
          return true;
        }
        return false;
      })
    );
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
    this.sesionIniciada.set(false);
    this.rolActual.set(null);
    this.router.navigate(['/login']);
  }
}