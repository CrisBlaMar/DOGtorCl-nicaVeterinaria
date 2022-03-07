import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {

  constructor() { }

  @Output() 
  emitter : EventEmitter <string> = new EventEmitter();
  
  email: string = JSON.parse(localStorage.getItem('email') || '{}');

  masInfo(){
    if(localStorage.getItem('token') == undefined){
      this.emitter.emit("¡Hola!, aquí tienes más info") ;
    }else{
      this.emitter.emit("¡Hola, " + this.email + "! Aquí tienes más info") ;
    }
    
  }



  ngOnInit(): void {
  }

}
