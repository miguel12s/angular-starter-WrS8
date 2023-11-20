import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaEstadosTutoriasComponent } from './tabla-estados-tutorias.component';
const routes: Routes = [{path:'',component:TablaEstadosTutoriasComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaEstadosTutoriasRoutingModule { }
