import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaRolesComponent } from './tabla-roles.component';
const routes: Routes = [{path:'',component:TablaRolesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaRolesRoutingModule { }
