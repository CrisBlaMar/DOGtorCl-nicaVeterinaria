import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { QuieroSerSocioRoutingModule } from './quieroSerSocio-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    QuieroSerSocioRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuieroSerSocioModule { }
