import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedircitaComponent } from './pedircita/pedircita.component';
import { Guard } from '../areasocios/guard.service';

const routes: Routes = [
  {
    path:"", component: PedircitaComponent, pathMatch: "full", canActivate: [Guard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CitaPreviaRoutingModule { }