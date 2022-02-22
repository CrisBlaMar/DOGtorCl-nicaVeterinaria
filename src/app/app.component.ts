import { Component } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dogtor';

  cerrarSesion(){
    localStorage.clear();
    location.reload();
  }

  mostrar: boolean = true;

  mostrarCerrarSesion(){
    if(localStorage.getItem('token') == undefined){
      this.mostrar = false;
    }else{
      this.mostrar = true;
    }
  }
  
  ngOnInit(){
    this.mostrarCerrarSesion();
  }


}
