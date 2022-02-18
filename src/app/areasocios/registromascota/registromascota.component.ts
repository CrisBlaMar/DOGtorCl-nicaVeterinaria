import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mascota } from '../../interfaces/mascota.interfaces';
import { UsuarioService } from '../usuarios-services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registromascota',
  templateUrl: './registromascota.component.html',
  styleUrls: ['./registromascota.component.css']
})
export class RegistromascotaComponent implements OnInit {

  constructor(private form : FormBuilder, private usuarioservice: UsuarioService) { }

  ngOnInit(): void {
  }

  miMascota: FormGroup = this.form.group({
    nombre: [],
    pelaje: [],
    raza: [],
    especie: [],
    sexo: []
  })

  getEmailUsuario() {
    this.usuarioservice.loginObteniendoUsuario()
    .subscribe((resp) => {
      console.log(resp);
      return localStorage.setItem('email', JSON.stringify(resp));
    });
  }


  email = localStorage.getItem('email') as string;


  hacerRegistro (){

    let mascota : Mascota = this.miMascota.value;
    this.usuarioservice.registroMascota(mascota, this.email)
    .subscribe({
      next: (resp => {

        this.miMascota.reset();
      }),
      error : err => {
        console.log(err);
        Swal.fire({
          title: '¡ERROR!',
          text: 'No ha podido registrar a su mascota',
          icon: 'error'
        })
        
      }
    });
  }
}
