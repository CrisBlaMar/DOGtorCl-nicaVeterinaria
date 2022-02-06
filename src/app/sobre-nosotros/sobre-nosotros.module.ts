import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { SobreNosotrosRoutingModule } from './sobreNosotros-routing.module';



@NgModule({
  declarations: [
    NosotrosComponent
  ],
  imports: [
    CommonModule,
    SobreNosotrosRoutingModule
  ]
})
export class SobreNosotrosModule { }
