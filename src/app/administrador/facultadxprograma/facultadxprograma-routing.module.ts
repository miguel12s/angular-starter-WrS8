import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultadxprogramaComponent } from './facultadxprograma.component';
const routes: Routes = [{path:'',component:FacultadxprogramaComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultadxprogramaRoutingModule { }
