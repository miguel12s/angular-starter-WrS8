import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaMateriasComponent } from './tabla-materias.component';
const routes: Routes = [{path:'',component:TablaMateriasComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaMateriasRoutingModule { }
