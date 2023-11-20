import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificarDocenteComponent } from './modificar-docente.component';

const routes: Routes = [
  {path:'',component:ModificarDocenteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificarDocenteRoutingModule { }
