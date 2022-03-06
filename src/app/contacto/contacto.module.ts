import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormucontactoComponent } from './formucontacto/formucontacto.component';
import { ContactoRoutingModule } from './contacto-routing.module';
import { DondeEstoyModule } from '../donde-estoy/donde-estoy.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormucontactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    DondeEstoyModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactoModule { }
