import { Component, OnInit } from '@angular/core';
import { Servicio } from '../../interfaces/servicio.interfaces';
import { ServicioService } from './servicios.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{

  constructor(private servicioService : ServicioService, private httpclient : HttpClient) { }
  servicios : Servicio [] = [];

  dtOptions: DataTables.Settings = {};

  mostrarServicios(){
    this.servicioService.obtenerServicios()
    .subscribe({
      next: (resp => {
      this.servicios = resp; //en servicios guardamos la respuesta que queremos mostrar
    }),
      error: resp => {
        Swal.fire('Error', resp.error.message, 'error')
        
      }
  });
  }

  ngOnInit(): void {

    this.dtOptions= {
      pagingType: 'full_numbers',
      pageLength: 4,
      lengthMenu: [4, 8, 11],
      processing: true
    };

    this.mostrarServicios();
    //para que nos cargue nada más iniciar la app
  }

}
