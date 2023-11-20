import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutoriasPendientesComponent } from './tutorias-pendientes.component';

const routes: Routes = [
  {path:'',component:TutoriasPendientesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutoriasPendientesRoutingModule { }
