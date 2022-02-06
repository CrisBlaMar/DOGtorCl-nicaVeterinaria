import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { QuieroSerSocioRoutingModule } from './quieroSerSocio-routing.module';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    QuieroSerSocioRoutingModule
  ]
})
export class QuieroSerSocioModule { }
