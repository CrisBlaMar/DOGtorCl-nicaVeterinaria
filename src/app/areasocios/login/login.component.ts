import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsuarioService } from '../usuarios-services/usuario.service';
import Swal from 'sweetalert2';
import { Usuario } from '../../interfaces/usuario.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email : string = '';
  contrasenia : string = '';
  mostrar: boolean =false;
  constructor(private usuarioservice : UsuarioService,
    private router : Router) { }

  usuario: Usuario = {
    nombre: '',
    contrasenia: '',
    apellidos: '',
    dni: '',
    telefono:'',
    email: '',
  };


  login() {
    this.usuarioservice.login( this.email, this.contrasenia )
    .subscribe({
        next: (resp => {
          localStorage.setItem('token',resp.access_token!)
          this.router.navigateByUrl('/areasocios/opciones') 
      }),
        error: resp => {
          console.log(resp);
          this.mostrar= true;
          Swal.fire('Error', resp.error.message, 'error')
         /** Swal.fire({
            title: 'Error', 
            text: resp.error.message,
            icon: 'error',
            width: 600,
            padding: '3em',
            color: '#716add',
            //background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://giphy.com/gifs/catakawan-spaceshackph-spaceshack-jQgsHinH2Kv7xgg1vx")
              left top
              no-repeat
            `
          })*/
        }
    });
  }
  ngOnInit(): void {
  }

}
