import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Cita } from '../interfaces/cita.interfaces';

@Injectable({
    providedIn: 'root'
  })
  export class CitaService {

    constructor(private httpclient: HttpClient) { }

    private baseUrl: string = environment.baseUrl;


    /**
     * Método para realizar una cita previa
     * @param cita , la cita que vamos a pedir
     * @param chip , el chip de la mascota a la que le vamos a pedir la cita
     * @returns 
     */
    realizarCitaPrevia (cita : Cita, chip: number){
        const url = `${this.baseUrl}/user/cita/mascota/${chip}`;
        const body =  cita;
        let token = localStorage.getItem('token');
        const opcionHeader = new HttpHeaders()
        .set('Authorization', `Bearer ${token}`);
    
        return this.httpclient.post<Cita>(url, body, {headers:opcionHeader});
      }



  }