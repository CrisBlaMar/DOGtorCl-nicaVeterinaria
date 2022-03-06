import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  /**
   * Que vamos a usar para mostrar en cada página donde se encuentra el usuario en cada momento
   */
  @Input() info : string= '';


  constructor() { }

  ngOnInit(): void {
  }

}
