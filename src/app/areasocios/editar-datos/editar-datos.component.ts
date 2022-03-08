import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/usuario.interfaces';
import Swal from 'sweetalert2';
import { EditarDatosService } from './editar-datos.service';
import { UsuarioService } from '../usuarios-services/usuario.service';

@Component({
  selector: 'app-editar-datos',
  templateUrl: './editar-datos.component.html',
  styleUrls: ['./editar-datos.component.css']
})
export class EditarDatosComponent implements OnInit {

  carga : boolean = false;

  constructor(private editardatosservice : EditarDatosService, private form : FormBuilder, private usuarioservice : UsuarioService) { }

  miFormulario: FormGroup = this.form.group({
    nombre: ['',[Validators.required, Validators.pattern('^[A-Za-z ]+$')]],
    apellidos: ['', [ Validators.required, Validators.pattern('([a-zA-Z]+) ([a-zA-Z]+)')]],
    telefono: ['', [ Validators.required, Validators.pattern('^[0-9,$]*$') ] ],
    dni:['', [ Validators.required, Validators.pattern('[0-9]{8}[A-Za-z]{1}') ]]
  })



  /**Método para editar los datos del usuario */
  editarMisDatos(){
    let usuario : Usuario = this.miFormulario.value;
    this.editardatosservice.editarmisDatos(usuario)
    .subscribe({
      next: (resp =>{
        this.miFormulario.reset();
        location.reload();
      })
      ,
      error: resp => {
        Swal.fire('Error', resp.error.mensaje, 'error')
        
      }
    })

  }


  nombre: string ='';
  apellidos: string ='';
  email: string ='';
  telefono: string ='';
  dni: string ='';

  /**
   * Método para mostrar los datos del usuario
   */
   mostrarDatos(){

    this.usuarioservice.obtenerDatosUsuario()
    .subscribe({
      next: ((resp: { email: string; apellidos: string; nombre: string; telefono: string; dni: string; }) => {
      this.email = resp.email;
      this.apellidos = resp.apellidos;
      this.nombre = resp.nombre;
      this.telefono = resp.telefono;
      this.dni= resp.dni;
      this.carga = true;

    }),
      error: (resp: { error: { mensaje: string | undefined; }; }) => {
        Swal.fire('Error', resp.error.mensaje, 'error')
        
      }
  });
  }

  ngOnInit(): void {
    this.mostrarDatos();
  }

}
