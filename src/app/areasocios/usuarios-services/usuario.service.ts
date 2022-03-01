import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpClientModule } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { AuthResponse} from '../../interfaces/interfaces';
import { Usuario } from 'src/app/interfaces/usuario.interfaces';
import { Mascota } from '../../interfaces/mascota.interfaces';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpclient: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  /**Método para hacer login */
  login(email:string, contrasenia: string){
    const url = `${this.baseUrl}/auth/login`;
    const body =  {email, contrasenia};
    const opcionHeader = new HttpHeaders();
    opcionHeader.append('Access-Control-Allow-Origin','*');
    return this.httpclient.post<AuthResponse>(url, body, {headers:opcionHeader}); 
    //poner también en el registrer
  }


  /**Método para validar el token */
  validarToken() : Observable<AuthResponse>{
    const url = `${ this.baseUrl }/auth/login`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}` || '');
    return this.httpclient.get<AuthResponse>( url, { headers } )     
  }

  /**Método para registrar un usuario */
  registro(usuario : Usuario){
    const url = `${this.baseUrl}/auth/register`;
    const body = usuario;
    const opcionHeader = new HttpHeaders();
    opcionHeader.append('Access-Control-Allow-Origin','*');
    return this.httpclient.post<AuthResponse>(url, body, {headers:opcionHeader}); 
  }

  /**Método para registrar mascotas a un usuario */
  registroMascota (mascota : Mascota, email : string){
    const url = `${this.baseUrl}/user/${email}/mascota`;
    const body =  mascota;
    let token = localStorage.getItem('token');
    const opcionHeader = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);

    return this.httpclient.post<AuthResponse>(url, body, {headers:opcionHeader});
  }



  getEmailUsuario(email:string){
    const url = `${this.baseUrl}/user/${email}`;
    return this.httpclient.get<Usuario>(url);
  }



  /**Método para obetener del token el usuario y su email */
  getIdUsuario(){
    const url = `${this.baseUrl}/user`;
    let token = localStorage.getItem("token")
    const opcionHeader = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    this.httpclient.get<string>(url, {headers : opcionHeader})
    .subscribe(
      resp =>{
        localStorage.setItem('email', JSON.stringify(resp));
      }
    )
  }
  
  /**Método para listar las mascotas de un usuario */
  obtenerMascotasUsuario(email : string){
    const url = `${this.baseUrl}/user/${email}/mascota`;
    let token = localStorage.getItem('token');
    const opcionHeader = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    return this.httpclient.get<Mascota []>(url, {headers:opcionHeader});
  }


  /**Método para obtener los datos de un usuario */
  obtenerDatosUsuario (email:string){
    const url = `${this.baseUrl}/user/${email}`;
    let token = localStorage.getItem('token');
    const opcionHeader = new HttpHeaders()
    .set('Authorization', `Bearer ${token}`);
    return this.httpclient.get<Usuario>(url, {headers:opcionHeader});
  }

  

}
