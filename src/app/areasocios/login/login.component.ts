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
  
  email !: string;
  password !: string;

  constructor(private usuarioservice : UsuarioService,
    private router : Router) { }


  login() {
    this.usuarioservice.login( this.email, this.password )
    .subscribe({
        next: (resp => {
          localStorage.setItem('token',resp.access_token!)
          this.router.navigateByUrl('/areasocios/misdatos') //hay que poner la ruta completa
          //ya que misdatos está dentro de areasocios y solo se puede acceder a través de esa url
      }),
        error: resp => {
          console.log(resp);
          
          Swal.fire('Error', resp.error.message, 'error')
        }
    });
  }
  ngOnInit(): void {
  }

}
