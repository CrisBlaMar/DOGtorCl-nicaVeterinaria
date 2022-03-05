import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../interfaces/mascota.interfaces';
import { UsuarioService } from '../../areasocios/usuarios-services/usuario.service';
import Swal from 'sweetalert2';
import { ServicioService } from '../../nuestros-servicios/servicios/servicios.service';
import { CitaService } from '../cita.service';
import { Cita } from 'src/app/interfaces/cita.interfaces';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pedircita',
  templateUrl: './pedircita.component.html',
  styleUrls: ['./pedircita.component.css']
})
export class PedircitaComponent implements OnInit {

  constructor(private form : FormBuilder, private usuarioservice : UsuarioService, private servicioService : ServicioService,
    private citaservice : CitaService ) { }

  mascotas : Mascota [] = [];
  masco!: Mascota;
  

  citaPrevia: FormGroup = this.form.group({
    fecha:[''],
    mascota : ['']

  })
  

  mostrarMascotas(){
    
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
 




  realizarCita(){
    let fecha: Date = this.citaPrevia.value.fecha.replace("T"," ");
    let cita : Cita = { "fecha": fecha};
    console.log(cita)
    this.citaservice.realizarCitaPrevia(cita, this.citaPrevia.value.mascota)
    .subscribe({
      next:  (resp=>{
        this.citaPrevia.reset();
      })
    });
    
  }







  ngOnInit(): void {
    //Recordar SIEMPRE llamar aquí al método para que nos cargue los datos al cargar la página
    this.mostrarMascotas();
  }

}
