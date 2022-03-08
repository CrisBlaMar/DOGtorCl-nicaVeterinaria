import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsuarioService } from '../usuarios-services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  constructor(private usuarioservice : UsuarioService,
    private router : Router) { }
  


  usuario = {
    nombre: '',
    contrasenia: '',
    apellidos: '',
    dni: '',
    telefono:'',
    email: '',
  };


/**
 * Método para hacer login con un usuario y contraseña
 */
  login() {
    this.usuarioservice.login( this.usuario.email, this.usuario.contrasenia )
    .subscribe({
        next: (resp => {
          
          localStorage.setItem('token',resp.access_token!)
          this.usuarioservice.getIdUsuario();
          this.router.navigateByUrl('/areasocios/opciones');
          
      }),
        error: resp => {
          Swal.fire('Error', resp.error.mensaje, 'error')

        }
    });
  }
  ngOnInit(): void {
  }

}
