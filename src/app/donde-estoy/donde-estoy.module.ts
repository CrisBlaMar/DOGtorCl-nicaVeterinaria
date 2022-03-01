import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionComponent } from './ubicacion/ubicacion.component';



@NgModule({
  declarations: [
    UbicacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UbicacionComponent
  ]
})
export class DondeEstoyModule { }
