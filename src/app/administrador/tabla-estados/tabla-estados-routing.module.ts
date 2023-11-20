import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaEstadosComponent } from './tabla-estados.component';
const routes: Routes = [{path:'',component:TablaEstadosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaEstadosRoutingModule { }
