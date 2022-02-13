import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registromascota',
  templateUrl: './registromascota.component.html',
  styleUrls: ['./registromascota.component.css']
})
export class RegistromascotaComponent implements OnInit {

  constructor(private form : FormBuilder) { }

  ngOnInit(): void {
  }

  miMascota: FormGroup = this.form.group({
    nombre: [],
    pelaje: [],
    raza: [],
    especie: [],
    sexo: []
  })
}
