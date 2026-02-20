import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario-service';
import { AuthService } from '../../services/auth-service';
import { Usuario } from '../../models/usuarios';

@Component({
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-registro.html'
})
export class FormularioRegistro implements OnInit {
  public auth = inject(AuthService);
  private servicioUsuario = inject(UsuarioService);

  listaUsuarios = signal<Usuario[]>([]);
  editando = signal<boolean>(false);

  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rol: 'EMPLEADO'
  };

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(res => {
      this.listaUsuarios.set(res);
    });
  }

  seleccionarParaEditar(usuario: Usuario) {
    if (this.auth.rolActual() !== 'ADMIN') return;
    this.editando.set(true);
    this.nuevoUsuario = { ...usuario };
  }

  guardarUsuario() {
    if (this.auth.rolActual() !== 'ADMIN') return;
    if (this.editando()) {
      this.servicioUsuario.putUsuario(this.nuevoUsuario.id!, this.nuevoUsuario).subscribe(() => {
        this.resetForm();
      });
    } else {
      this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(() => {
        this.resetForm();
      });
    }
  }

  eliminarUsuario(id: string) {
    if (this.auth.rolActual() !== 'ADMIN') return;
    if (confirm('¿Eliminar usuario?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        this.obtenerUsuarios();
      });
    }
  }

  resetForm() {
    this.editando.set(false);
    this.nuevoUsuario = { name: '', email: '', phone: '', password: '', rol: 'EMPLEADO' };
    this.obtenerUsuarios();
  }
}