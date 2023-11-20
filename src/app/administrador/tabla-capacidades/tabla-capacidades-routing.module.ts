import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaCapacidadesComponent } from './tabla-capacidades.component';
const routes: Routes = [{path:'',component:TablaCapacidadesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaCapacidadesRoutingModule { }
