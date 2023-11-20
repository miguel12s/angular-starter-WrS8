import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialTutoriasComponent } from './historial-tutorias.component';
const routes: Routes = [{path:'',component:HistorialTutoriasComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistorialTutoriasRoutingModule { }
