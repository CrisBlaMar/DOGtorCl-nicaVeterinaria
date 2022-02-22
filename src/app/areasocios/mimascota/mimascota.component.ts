import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuarios-services/usuario.service';
import { Mascota } from '../../interfaces/mascota.interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mimascota',
  templateUrl: './mimascota.component.html',
  styleUrls: ['./mimascota.component.css']
})
export class MimascotaComponent implements OnInit {

  constructor(private usuarioservice : UsuarioService, ) { }

  mascota : Mascota [] = [];

  mostrarMascotas(){
    const email = JSON.parse(localStorage.getItem('email') || '{}');
    this.usuarioservice.obtenerMascotasUsuario(email)
    .subscribe({
      next: (resp => {
      this.mascota = resp;
    }),
      error: resp => {
        Swal.fire('Error', resp.error.message, 'error')
        
      }
  });
  }

  ngOnInit(): void {

    this.mostrarMascotas();
  }

}
