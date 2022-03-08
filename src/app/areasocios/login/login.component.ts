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
          
          localStorage.setItem('token',resp.access_token!) //añadimos al localstorage el token que genera la peticion de login
          this.usuarioservice.getIdUsuario(); //llamamos a este método para que cuando hagamos login nos guarde en el localstorage el email del usuario
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
