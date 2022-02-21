import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Mascota } from '../../interfaces/mascota.interfaces';
import { UsuarioService } from '../usuarios-services/usuario.service';
import Swal from 'sweetalert2';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    especie: [],
    nombre: [],
    pelaje: [],
    raza: [],
    sexo: []
  })

  getEmailUsuario() {
    this.usuarioservice.getEmail()
    .subscribe((resp) => {
      console.log(resp);
      console.log("as")
      localStorage.setItem('email',resp);
    });
  }


  obtenerid(){
    this.usuarioservice.getEmail()
    .subscribe ({ 
      next : (resp =>{
        console.log(resp)
      }),
      error : err =>{

      }
      
    })
    
  }
  


  hacerRegistro (){
    this.getEmailUsuario();
    const email = localStorage.getItem('email') as string;
    console.log(email)
    let mascota : Mascota = this.miMascota.value;
    this.usuarioservice.registroMascota(mascota, email)
    .subscribe({
      next: (resp => {
        
        this.miMascota.reset();
      }),
      error : err => {

        Swal.fire({
          title: '¡ERROR!',
          text: 'No ha podido registrar a su mascota',
          icon: 'error'
        })
        
      }
    });
  }
}
