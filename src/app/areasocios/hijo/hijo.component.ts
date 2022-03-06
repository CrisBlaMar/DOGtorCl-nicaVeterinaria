import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor() { }
  
  @Output() 
  emitter : EventEmitter <string> = new EventEmitter();
  
  email: string = JSON.parse(localStorage.getItem('email') || '{}');

  /**
   * Método para usar output y mostrar un mensaje en un modal 
   * que se encuentra en el componente padre
   */
  masInfo(){
    this.emitter.emit("¡Hola, " + this.email + "! Aquí puedes modificar tus datos") ;
  }
  ngOnInit(): void {
  }

}
