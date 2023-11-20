import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaProgramasComponent } from './tabla-programas.component';
const routes: Routes = [{path:'',component:TablaProgramasComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaProgramasRoutingModule { }
