import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AreaSociosRoutingModule } from './areasocios-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OpcionesComponent } from './opciones/opciones.component';
import { Guard } from './guard.service';
import { MimascotaComponent } from './mimascota/mimascota.component';
import { RegistromascotaComponent } from './registromascota/registromascota.component';
import { MisdatosComponent } from './misdatos/misdatos.component';



@NgModule({
  declarations: [
    LoginComponent,
    OpcionesComponent,
    MimascotaComponent,
    RegistromascotaComponent,
    MisdatosComponent
  ],
  imports: [
    CommonModule,
    AreaSociosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  providers: [Guard]
})
export class AreasociosModule { }
