import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormucontactoComponent} from './formucontacto/formucontacto.component';

const routes: Routes = [
  {
    path:"", component: FormucontactoComponent, pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ContactoRoutingModule { }