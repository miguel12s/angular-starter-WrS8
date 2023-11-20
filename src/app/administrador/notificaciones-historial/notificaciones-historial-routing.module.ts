import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificacionesHistorialComponent } from './notificaciones-historial.component';
const routes: Routes = [{path:'',component:NotificacionesHistorialComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacionesHistorialRoutingModule { }
