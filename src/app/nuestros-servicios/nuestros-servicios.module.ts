import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios/servicios.component';
import { NuestrosServiciosRoutingModule } from '../nuestros-servicios/nuestrosServicios-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    NuestrosServiciosRoutingModule,
    HttpClientModule,
    DataTablesModule
  ]
})
export class NuestrosServiciosModule { }
