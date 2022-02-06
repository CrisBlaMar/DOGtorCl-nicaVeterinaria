import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormucontactoComponent } from './formucontacto/formucontacto.component';
import { ContactoRoutingModule } from './contacto-routing.module';



@NgModule({
  declarations: [
    FormucontactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule { }
