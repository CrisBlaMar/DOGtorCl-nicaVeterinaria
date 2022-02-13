import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpClientModule } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { AuthResponse} from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpclient: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  login(email:string, contrasenia: string){
    const url = `${this.baseUrl}/auth/login`;
    const body =  {email, contrasenia};
    const opcionHeader = new HttpHeaders();
    opcionHeader.append('Access-Control-Allow-Origin','*');
    return this.httpclient.post<AuthResponse>(url, body, {headers:opcionHeader}); 
    //poner también en el registrer
  }

  validarToken() : Observable<AuthResponse>{
    const url = `${ this.baseUrl }/auth/login`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}` || '');

    return this.httpclient.get<AuthResponse>( url, { headers } )     
  }

  registro(usuario : Usuario){
    const url = `${this.baseUrl}/auth/register`;
    const body = usuario;
    const opcionHeader = new HttpHeaders();
    opcionHeader.append('Access-Control-Allow-Origin','*');
    return this.httpclient.post<AuthResponse>(url, body, {headers:opcionHeader}); 
  }
}
