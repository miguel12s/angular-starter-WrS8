import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoRegistroActividadComponent } from './tipo-registro-actividad.component';
const routes: Routes = [{path:'',component:TipoRegistroActividadComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoRegistroActividadRoutingModule { }
