import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroActividadComponent } from './registro-actividad.component';
const routes: Routes = [{path:'',component:RegistroActividadComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroActividadRoutingModule { }
