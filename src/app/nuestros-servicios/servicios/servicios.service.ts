import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Servicio } from '../../interfaces/servicio.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpclient: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  obtenerServicios(){
    const url = `${this.baseUrl}/servicio`;
    return this.httpclient.get<Servicio[]>(url);
    //Servicio es un array de servicios
  }
  
}
