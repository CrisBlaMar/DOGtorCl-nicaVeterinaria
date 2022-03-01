import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { QuieroSerSocioRoutingModule } from './quieroSerSocio-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DondeEstoyModule } from '../donde-estoy/donde-estoy.module';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    QuieroSerSocioRoutingModule,
    ReactiveFormsModule,
    DondeEstoyModule
  ]
})
export class QuieroSerSocioModule { }
