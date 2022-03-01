import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuarios-services/usuario.service';
import { Usuario } from '../../interfaces/usuario.interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.css']
})
export class MisdatosComponent implements OnInit {

  constructor(private usuarioservice : UsuarioService) { }

  

  nombre: string ='';
  apellidos: string ='';
  email: string ='';
  telefono: string ='';
  dni: string ='';

  
  mostrarDatos(){
    const email = JSON.parse(localStorage.getItem('email') || '{}');
    console.log(email);
    this.usuarioservice.obtenerDatosUsuario(email)
    .subscribe({
      next: (resp => {
      this.email = resp.email;
      this.apellidos = resp.apellidos;
      this.nombre = resp.nombre;
      this.telefono = resp.telefono;
      this.dni= resp.dni;
    }),
      error: resp => {
        Swal.fire('Error', resp.error.message, 'error')
        
      }
  });
  }





  ngOnInit(): void {
    this.mostrarDatos();
  }

}
