import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios/servicios.component';
import { NuestrosServiciosRoutingModule } from '../nuestros-servicios/nuestrosServicios-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';
import { DondeEstoyModule } from '../donde-estoy/donde-estoy.module';


@NgModule({
  declarations: [
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    NuestrosServiciosRoutingModule,
    HttpClientModule,
    DataTablesModule,
    RouterModule,
    DondeEstoyModule
  ]
})
export class NuestrosServiciosModule { }

//2.5 
//2.3