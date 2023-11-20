import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarEstudianteComponent } from './modificar-estudiante.component';

const routes: Routes = [{
  path:'',component:ModificarEstudianteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarEstudianteRoutingModule { }
