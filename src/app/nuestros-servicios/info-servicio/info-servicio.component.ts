import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-servicio',
  templateUrl: './info-servicio.component.html',
  styleUrls: ['./info-servicio.component.css']
})
export class InfoServicioComponent implements OnInit {

  @Input()
  info : string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
