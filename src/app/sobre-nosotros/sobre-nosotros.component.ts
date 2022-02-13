import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrls: ['./sobre-nosotros.component.css']
})
export class SobreNosotrosComponent implements OnInit {

  constructor() { }

  mostrar: boolean = false;

  ngOnInit(): void {
    this.mostrar=true;
  }

}