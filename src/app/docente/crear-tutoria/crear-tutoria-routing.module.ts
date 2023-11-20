import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTutoriaComponent } from './crear-tutoria.component';
import { authGuardGuard } from 'src/app/auth/auth-guard.guard';

const routes: Routes = [
  {path:'',component:CrearTutoriaComponent,canActivate:[authGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearTutoriaRoutingModule { }
