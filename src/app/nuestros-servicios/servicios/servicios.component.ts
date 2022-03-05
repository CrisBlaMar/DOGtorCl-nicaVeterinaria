import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Servicio } from '../../interfaces/servicio.interfaces';
import { ServicioService } from './servicios.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { Tarifa } from '../../interfaces/tarifa.interfaces';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnDestroy, OnInit{

  constructor(private servicioService : ServicioService) { }

  servicios : Servicio [] = [];
  tarifas : Tarifa [] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  ids : number [] = [];

  mensajehijo: string= '';
  
  eventohijo(mensaje: string){
    this.mensajehijo = mensaje;
  }


  mostrarServicios(){
    this.servicioService.obtenerServicios()
    .subscribe({
      next: (resp => {
      this.servicios = resp;
      console.log(this.servicios);


      this.dtTrigger.next(null); 
    }),
      error: resp => {
       Swal.fire('Error', resp.error.message, 'error')
        
      }
    });
    
  }

  ngOnInit(): void {
    this.mostrarServicios();

     this.dtOptions = {
        pagingType: 'full_numbers',
        lengthMenu: [5, 10, 100], //al ponerlo aquí nunca funciona, tengo que añadirlo en el html
        processing: true
      };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
