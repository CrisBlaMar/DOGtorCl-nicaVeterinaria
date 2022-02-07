import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AreaSociosRoutingModule } from './areasocios-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MisdatosComponent } from './misdatos/misdatos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    MisdatosComponent
  ],
  imports: [
    CommonModule,
    AreaSociosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class AreasociosModule { }
