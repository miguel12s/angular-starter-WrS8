import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaHorasComponent } from './tabla-horas.component';
const routes: Routes = [{path:'',component:TablaHorasComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaHorasRoutingModule { }
