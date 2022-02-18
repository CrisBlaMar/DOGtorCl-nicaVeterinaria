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
  
  email : string = '';
  contrasenia : string = '';
  mostrar: boolean =false;
  constructor(private usuarioservice : UsuarioService,
    private router : Router) { }


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
          /**Swal.fire({
            title: '¡ERROR!',
            text: 'El email o la contraseña son inválidos',
            icon: 'error'
          })*/
          Swal.fire('Error', resp.error.message, 'error')
          
        }
    });
  }
  ngOnInit(): void {
  }

}
