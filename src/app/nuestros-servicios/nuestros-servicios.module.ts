import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios/servicios.component';
import { NuestrosServiciosRoutingModule } from '../nuestros-servicios/nuestrosServicios-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    NuestrosServiciosRoutingModule,
    DataTablesModule,
    HttpClientModule
  ]
})
export class NuestrosServiciosModule { }
