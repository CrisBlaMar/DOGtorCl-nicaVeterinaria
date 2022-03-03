import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../interfaces/mascota.interfaces';
import { UsuarioService } from '../../areasocios/usuarios-services/usuario.service';
import Swal from 'sweetalert2';
import { ServicioService } from '../../nuestros-servicios/servicios/servicios.service';
import { Servicio } from '../../interfaces/servicio.interfaces';

@Component({
  selector: 'app-pedircita',
  templateUrl: './pedircita.component.html',
  styleUrls: ['./pedircita.component.css']
})
export class PedircitaComponent implements OnInit {

  constructor(private usuarioservice : UsuarioService, private servicioService : ServicioService ) { }

  mascota : Mascota [] = [];
  servicio : Servicio [] = [];

  mostrarMascotas(){
    const email = JSON.parse(localStorage.getItem('email') || '{}');
    this.usuarioservice.obtenerMascotasUsuario()
    .subscribe({
      next: (resp => {
      this.mascota = resp;
    }),
      error: resp => {
        Swal.fire('Error', resp.error.message, 'error')
        
      }
  });
  }

  mostrarServicios(){
    this.servicioService.obtenerServicios()
    .subscribe({
      next: (resp => {
      this.servicio = resp; //en servicios guardamos la respuesta que queremos mostrar
    }),
      error: resp => {
        Swal.fire('Error', resp.error.message, 'error')
        
      }
  });
  }

  ngOnInit(): void {
    //Recordar SIEMPRE llamar aquí al método para que nos cargue los datos al cargar la página
    this.mostrarMascotas();
    this.mostrarServicios();
  }

}
