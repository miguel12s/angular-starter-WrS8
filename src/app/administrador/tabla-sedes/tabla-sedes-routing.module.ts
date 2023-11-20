import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaSedesComponent } from './tabla-sedes.component';
const routes: Routes = [{path:'',component:TablaSedesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaSedesRoutingModule { }
