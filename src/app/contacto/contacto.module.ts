import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormucontactoComponent } from './formucontacto/formucontacto.component';
import { ContactoRoutingModule } from './contacto-routing.module';
import { DondeEstoyModule } from '../donde-estoy/donde-estoy.module';



@NgModule({
  declarations: [
    FormucontactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    DondeEstoyModule
  ]
})
export class ContactoModule { }
