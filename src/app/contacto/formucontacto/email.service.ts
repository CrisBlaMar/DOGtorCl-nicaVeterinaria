import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Email } from "src/app/interfaces/email.interfaces";
import { environment } from "src/environments/environment";



@Injectable({
    providedIn: 'root'
  })
export class EmailService {


    constructor(private httpclient: HttpClient) { }

    private baseUrl: string = environment.baseUrl;


    enviarMensaje(mensaje : Email){
        const url = `${this.baseUrl}/enviaremail`;
        const body = mensaje;
        return this.httpclient.post<Email>(url, body);
    }



}