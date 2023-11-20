import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablafacultadesComponent } from './tablafacultades.component';
const routes: Routes = [{path:'',component:TablafacultadesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablafacultadesRoutingModule { }
