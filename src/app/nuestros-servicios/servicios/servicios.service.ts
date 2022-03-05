import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Servicio } from '../../interfaces/servicio.interfaces';
import { Tarifa } from '../../interfaces/tarifa.interfaces';

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

  obtenerTarifaDeServicio(referencia: number){
    const url = `${this.baseUrl}/servicio/${referencia}/tarifa`;
    return this.httpclient.get<Tarifa []>(url);
  }
  
}
