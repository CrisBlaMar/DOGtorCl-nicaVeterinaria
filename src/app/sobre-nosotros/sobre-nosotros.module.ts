import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreNosotrosRoutingModule } from './sobreNosotros-routing.module';
import { SobreNosotrosComponent } from './sobre-nosotros.component';
import { DondeEstoyModule } from '../donde-estoy/donde-estoy.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SobreNosotrosComponent
  ],
  imports: [
    CommonModule,
    SobreNosotrosRoutingModule,
    DondeEstoyModule,
    RouterModule
  ]
})
export class SobreNosotrosModule { }
