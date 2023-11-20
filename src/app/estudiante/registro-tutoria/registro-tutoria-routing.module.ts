import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroTutoriaComponent } from './registro-tutoria.component';

const routes: Routes = [
  {path:'',component:RegistroTutoriaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroTutoriaRoutingModule { }
