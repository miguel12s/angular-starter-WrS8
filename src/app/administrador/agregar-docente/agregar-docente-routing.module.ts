import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarDocenteComponent } from './agregar-docente.component';

const routes: Routes = [
  {path:'',component:AgregarDocenteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarDocenteRoutingModule { }
