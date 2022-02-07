import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpClientModule } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { AuthResponse} from '../../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpclient: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  login(email:string, password: string){
    const url = `${this.baseUrl}/auth/login`;
    const body =  {email, password};
    return this.httpclient.post<AuthResponse>(url, body);
  }

  validarToken() : Observable<AuthResponse>{
    const url = `${ this.baseUrl }/users`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}` || '' );

    return this.httpclient.get<AuthResponse>( url, { headers } )     
  }
}
