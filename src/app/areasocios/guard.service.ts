import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { map, Observable, catchError, of } from 'rxjs';
import { UsuarioService } from './usuarios-services/usuario.service';
import Swal from 'sweetalert2';

@Injectable()
export class Guard implements CanActivate{

    constructor(private usuarioservice : UsuarioService, private router:Router){};

    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | any {
        let acceso = false;
        return this.usuarioservice.validarToken()
        .pipe(
            map(resp =>{
                
                acceso = true;
                return acceso;
            }),
            catchError (err =>{
                console.log(err);
                Swal.fire({
                    title: '¡ERROR!',
                    text: 'No puede acceder. La sesión ha expirado',
                    icon: 'error'
                  });
                this.router.navigateByUrl('/areasocios');
                acceso = false;
                return of(acceso)
                
            })
        )
    }


}