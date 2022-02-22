import { Component, OnDestroy, OnInit } from '@angular/core';
import { Servicio } from '../../interfaces/servicio.interfaces';
import { ServicioService } from './servicios.service';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnDestroy, OnInit{

  constructor(private servicioService : ServicioService, private httpclient: HttpClient) { }
  servicios : Servicio [] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  private baseUrl: string = environment.baseUrl;


  /**mostrarServicios(){
    this.servicioService.obtenerServicios()
    .subscribe({
      next: (resp => {
      this.servicio = resp; 
    }),
      error: resp => {
       Swal.fire('Error', resp.error.message, 'error')
        
      }
    });
    
  }*/

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };

    const url = `${this.baseUrl}/servicio`;
    this.httpclient.get<Servicio[]>(url)
    .subscribe({
      next: (resp => {
      this.servicios = resp;
      
    }),
      error: resp => {
        Swal.fire('Error', resp.error.message, 'error')
        
      }
  });


   // this.mostrarServicios();
    //para que nos cargue nada más iniciar la app
  }

  ngOnDestroy(): void {
 
    this.dtTrigger.unsubscribe();
  }

}
