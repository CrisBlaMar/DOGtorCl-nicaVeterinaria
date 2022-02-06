import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedircitaComponent } from './pedircita/pedircita.component';
import { CitaPreviaRoutingModule } from './citaPrevia-routing.module';



@NgModule({
  declarations: [
    PedircitaComponent
  ],
  imports: [
    CommonModule,
    CitaPreviaRoutingModule
  ]
})
export class CitaPreviaModule { }
