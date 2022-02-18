import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class ValidacionesService {
    
    public patronNombre: string = '([a-zA-Z])';
    public patronApellidos: string = '([a-zA-Z]+) ([a-zA-Z]+)';
    public patronEmail: string = '/[\w]+@{1}[\w]+\.[a-z]{2,3}/';  
    public patronContrasenia: string = '^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,8}$';//entre 6 caracteres y 8, mínimo un dígito, mínimo una mayúscula y mínimo una minúscula
    public patronTelefono: string = '^[0-9,$]*$';
    public patronDni: string = '((([X-Z])|([LM])){1}([-]?)((\d){7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]))';

    /**igual( p1: string, p2: string ) {

        return ( formGroup: AbstractControl ): ValidationErrors | null => {
    
          const pass1 = formGroup.get(p1)?.value;
          const pass2 = formGroup.get(p2)?.value;
          if ( pass1 !== pass2 ) {
            formGroup.get(p2)?.setErrors({ noigual: true });
            return { noigual: true }
          } 
          formGroup.get(p2)?.setErrors(null);
          return null
        }
      }*/

}