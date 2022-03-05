import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuarios-services/usuario.service';
import Swal from 'sweetalert2';
import { Mascota } from 'src/app/interfaces/mascota.interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  constructor(private usuarioservice : UsuarioService, private router : Router) { }

  mascotas : Mascota [] = [];

  mascota = {
    nombre: '',
    especie: '',
    raza: '',
    sexo: '',
    pelaje:'',
     };

  mascotasUsuario(){
    
    this.usuarioservice.obtenerMascotasUsuario()
    .subscribe({
      next: (resp => {
      this.mascotas = resp;
    }),
      error: resp => {
        Swal.fire('Error', resp.error.message, 'error')
        
      }
  });
  }

  editarDatosMascota(){
    for (let index = 0; index < this.mascotas.length; index++) {
      this.usuarioservice.editarMascota(parseInt(this.mascotas[index].chip))
      .subscribe({
        next: (resp =>{
          this.router.navigateByUrl("/areasocios/misdatos")
        })
      })
      
    }
    
  }

  ngOnInit(): void {
  }

}
