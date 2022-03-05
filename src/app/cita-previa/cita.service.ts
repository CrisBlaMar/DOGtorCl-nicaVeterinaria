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


    realizarCitaPrevia (cita : Cita, chip: number){
        const url = `${this.baseUrl}/user/cita/mascota/${chip}`;
        const body =  cita;
        let token = localStorage.getItem('token');
        const opcionHeader = new HttpHeaders()
        .set('Authorization', `Bearer ${token}`);
    
        return this.httpclient.post<Cita>(url, body, {headers:opcionHeader});
      }



  }