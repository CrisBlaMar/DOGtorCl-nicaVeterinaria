import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Usuario } from '../../interfaces/usuario.interfaces';

@Injectable({
    providedIn: 'root'
  })
export class EditarDatosService {

    constructor(private httpclient: HttpClient) { }

    private baseUrl: string = environment.baseUrl;


    /**
     * Petición para editar los datos de un usuario
     * @param usuario, el usuario que vamos a modificar
     * @returns la respuesta
     */
    editarmisDatos(usuario : Usuario){
        const url = `${this.baseUrl}/user`;
        const body =  usuario;
        let token = localStorage.getItem('token');
        const opcionHeader = new HttpHeaders()
        .set('Authorization', `Bearer ${token}`);
        return this.httpclient.put<Usuario>(url, body, {headers:opcionHeader});
    }



}