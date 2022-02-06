import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedircitaComponent } from './pedircita/pedircita.component';

const routes: Routes = [
  {
    path:"", component: PedircitaComponent, pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CitaPreviaRoutingModule { }