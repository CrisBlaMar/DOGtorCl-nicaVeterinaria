import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

    private urlBase: string = environment.baseUrl;
    constructor( private httpclient: HttpClient, private usuarioservice : UsuarioService) { }

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
      const email = control.value; //->este es el valor del campo email del formulario
      return this.usuarioservice.getEmailUsuario(email)
      .pipe(
        map (resp => {
          if(resp.email != null){
             return {email: true};
          }else{
           return null;
          }
        }),
        catchError (err => {
           return of(null);
        })
      );
     }


}



