import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mascota } from '../../interfaces/mascota.interfaces';
import { UsuarioService } from '../usuarios-services/usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registromascota',
  templateUrl: './registromascota.component.html',
  styleUrls: ['./registromascota.component.css']
})
export class RegistromascotaComponent implements OnInit {

  constructor(private form : FormBuilder, private usuarioservice: UsuarioService,
    private router : Router) { }

  ngOnInit(): void {
  }

  miMascota: FormGroup = this.form.group({
    especie: [],
    nombre: [],
    pelaje: [],
    raza: [],
    sexo: []
  })


  
/**
 * Método para hacer el registro de una mascota
 * Añadir una mascota a un usuario
 */
  hacerRegistro (){
    
    let mascota : Mascota = this.miMascota.value;
    this.usuarioservice.registroMascota(mascota)
    .subscribe({
      next: (resp => {
        this.miMascota.reset();
        Swal.fire({
          title: 'Tu mascota ha sido registrada :)',
          icon: 'success',
          showDenyButton: true,
          confirmButtonColor: '#E9BB97',
          denyButtonColor: '#999966',
          confirmButtonText: 'Volver a Opciones',
          denyButtonText: `Registrar otra mascota`,
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigateByUrl('/areasocios/opciones')
          } else if (result.isDenied) {
            this.router.navigateByUrl("/areasocios/registromascota")
          }
        })
      }),
      error : err => {
        Swal.fire('Error', err.error.message, 'error')
        
      }
    });
  }
}
