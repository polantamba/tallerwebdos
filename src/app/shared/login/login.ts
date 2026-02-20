import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';

  private auth = inject(AuthService);
  private router = inject(Router);

  iniciarSesion() {
    this.auth.login(this.email, this.password).subscribe(success => {
      if (success) {
        alert('Bienvenido al sistema');
        this.router.navigate(['/home']);
      } else {
        alert('Acceso denegado: Usuario no encontrado o clave incorrecta');
      }
    });
  }
}