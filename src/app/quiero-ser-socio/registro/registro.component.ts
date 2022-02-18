import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../areasocios/usuarios-services/usuario.service';
import { Usuario } from '../../interfaces/usuario.interfaces';
import Swal from 'sweetalert2';
import { ValidacionesService } from '../../areasocios/usuarios-services/validaciones.service';
import { EmailValidatorService } from '../../areasocios/usuarios-services/emailValidcion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private usuarioservice : UsuarioService,
    private form : FormBuilder,
    private validacionesservice : ValidacionesService,
    private validacionemail : EmailValidatorService) { }

  miFormulario: FormGroup = this.form.group({
    nombre: [['', [ Validators.required, Validators.pattern( this.validacionesservice.patronNombre ) ] ]],
    apellidos: [['', [ Validators.required, Validators.pattern( this.validacionesservice.patronApellidos ) ] ]],
    email: [['', [ Validators.required, Validators.pattern( this.validacionesservice.patronEmail ) ]], [ this.validacionemail ]],
    contrasenia: [['', [ Validators.required, Validators.pattern( this.validacionesservice.patronContrasenia ) ] ]],
    telefono: [['', [ Validators.required, Validators.pattern( this.validacionesservice.patronTelefono ) ] ]],
    dni: [['', [ Validators.required, Validators.pattern( this.validacionesservice.patronDni ) ] ]]
  })

  noValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  get emailerror(): string {   
    const errors = this.miFormulario.get('email')?.errors!;
    if ( errors['required'] ) {
      return 'Debe introducir un email';
    } else if ( errors['pattern'] ) { //si no concuerda con el patrón del validator.service
      return 'El email debe tener un formato válido';
    } else if ( errors['email'] ) { //si ya existe ese email (email-validator)
      return 'El email ya está registrado, pruebe con otro';
    }

    return '';
  }


  hacerRegistro (){
    let usuario : Usuario = this.miFormulario.value;
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
    this.miFormulario.reset();
  }

}
