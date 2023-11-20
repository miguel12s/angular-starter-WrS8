import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaSalonesComponent } from './tabla-salones.component';
const routes: Routes = [{path:'',component:TablaSalonesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaSalonesRoutingModule { }
