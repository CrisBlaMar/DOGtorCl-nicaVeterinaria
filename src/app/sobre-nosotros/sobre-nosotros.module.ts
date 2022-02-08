import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreNosotrosRoutingModule } from './sobreNosotros-routing.module';
import { SobreNosotrosComponent } from './sobre-nosotros.component';



@NgModule({
  declarations: [
    SobreNosotrosComponent
  ],
  imports: [
    CommonModule,
    SobreNosotrosRoutingModule
  ]
})
export class SobreNosotrosModule { }
