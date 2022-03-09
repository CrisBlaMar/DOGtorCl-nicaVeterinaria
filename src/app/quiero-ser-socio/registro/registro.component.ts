import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidator, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UsuarioService } from '../../areasocios/usuarios-services/usuario.service';
import { Usuario } from '../../interfaces/usuario.interfaces';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {  EmailValidacionServices } from '../emailvali.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private usuarioservice : UsuarioService,
    private form : FormBuilder, private router : Router, private emailservice : EmailValidacionServices ) { }

    
  miFormulario: FormGroup = this.form.group({
    nombre: ['',[Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    apellidos: ['', [ Validators.required, Validators.pattern('([a-zA-Z]+) ([a-zA-Z]+)')]],
    email: ['', [ Validators.required, Validators.pattern('^[^@]+@[^@]+\.[a-zA-Z]{2,}$')], [this.emailservice]],
    contrasenia: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
    telefono: ['', [ Validators.required, Validators.pattern('^[0-9,$]*$') ] ],
    dni:['', [ Validators.required, Validators.pattern('[0-9]{8}[A-Za-z]{1}') ]]
  })

  /**
   * Método para un registro de un nuevo usuario 
   */
  hacerRegistro (){
    let usuario : Usuario = this.miFormulario.value;
    this.usuarioservice.registro(usuario)
    .subscribe({
      next: (resp => {
       // this.usuarioservice.setToken(resp.token);
       //resetamos los datos para no tener que borrar 
        this.miFormulario.reset();
        Swal.fire({
          title: '¡Enhorabuena! Ya formas parte de nuestra manada :)',
          icon: 'success',
          showCancelButton: true,
          confirmButtonColor: '#999966',
          confirmButtonText: `Iniciar Sesión`,
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigateByUrl('/areasocios')
          }
        })
      }),
      error : err => {
        Swal.fire(
          'Error', err.error.mensaje , ('error')
        )
        
      }
    });
  }

  ngOnInit(): void {
    this.miFormulario.reset();
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  get emailErrorMessage(): string {   
    const errors = this.miFormulario.get('email')?.errors!;
    if ( errors['required'] ) {
      return 'Debe introducir un email';
    } else if ( errors['pattern'] ) { 
      return 'El email no tiene un formato correcto';
    } else if ( errors['enUso'] ) {
      return 'El email ya se encuentra registrado, pruebe con otro';
    }

    return '';
  }

  


}
