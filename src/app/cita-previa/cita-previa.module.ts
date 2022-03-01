import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedircitaComponent } from './pedircita/pedircita.component';
import { CitaPreviaRoutingModule } from './citaPrevia-routing.module';
import { RouterModule } from '@angular/router';
import { Guard } from '../areasocios/guard.service';
import { DondeEstoyModule } from '../donde-estoy/donde-estoy.module';



@NgModule({
  declarations: [
    PedircitaComponent
  ],
  imports: [
    CommonModule,
    CitaPreviaRoutingModule,
    RouterModule,
    DondeEstoyModule
  ],
  providers: [Guard]
})
export class CitaPreviaModule { }
