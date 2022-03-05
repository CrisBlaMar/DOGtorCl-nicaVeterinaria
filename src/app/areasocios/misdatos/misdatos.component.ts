import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuarios-services/usuario.service';
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

    this.usuarioservice.obtenerDatosUsuario()
    .subscribe({
      next: (resp => {
      this.email = resp.email;
      this.apellidos = resp.apellidos;
      this.nombre = resp.nombre;
      this.telefono = resp.telefono;
      this.dni= resp.dni;

      console.log(this.email)
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
