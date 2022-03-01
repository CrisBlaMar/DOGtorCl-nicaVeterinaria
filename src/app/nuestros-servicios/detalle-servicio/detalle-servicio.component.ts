import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {

  constructor() { }

  @Output() emitter : EventEmitter <string> = new EventEmitter();
  mensaje : string = ''; 

  masInfo(){
    this.emitter.emit(this.mensaje);
  }



  ngOnInit(): void {
  }

}
