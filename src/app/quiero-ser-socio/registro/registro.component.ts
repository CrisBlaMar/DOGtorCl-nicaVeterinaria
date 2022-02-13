import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../areasocios/usuarios-services/usuario.service';
import { Usuario } from '../../interfaces/usuario.interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private usuarioservice : UsuarioService,
    private form : FormBuilder) { }

  miFormulario: FormGroup = this.form.group({
    nombre: [],
    apellidos: [],
    email: [],
    contrasenia: [],
    direccion: [],
    cuenta_bancaria: [],
    telefono: [],
    dni: []
  })

  hacerRegistro (){
    let usuario : Usuario = this.miFormulario.value;
    console.log(this.miFormulario.value);
    this.usuarioservice.registro(usuario)
    .subscribe({
      next: (resp => {
       // this.usuarioservice.setToken(resp.token);
       //resetamos los datos para no tener que borrar 
        this.miFormulario.reset();
      }),
      error : err => {
        console.log(err);
        Swal.fire({
          title: '¡ERROR!',
          text: 'No ha podido registrarse',
          icon: 'error'
        })
        
      }
    });
  }

  ngOnInit(): void {
    
  }

}
