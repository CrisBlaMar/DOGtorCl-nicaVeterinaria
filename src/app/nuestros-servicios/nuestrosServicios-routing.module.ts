import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
  {
    path:"", component: ServiciosComponent, pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class NuestrosServiciosRoutingModule { }