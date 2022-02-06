import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AreaSociosRoutingModule } from './areasocios-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AreaSociosRoutingModule
  ]
})
export class AreasociosModule { }
