import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteComponent } from './docente.component';
import { authGuardGuard } from '../auth/auth-guard.guard';

const routes: Routes = [
  {path:'',component:DocenteComponent,children:[
    {path:'',redirectTo:'crearTutoria',pathMatch:'full'},
    {path:'perfilDocente',loadChildren:()=>import('./perfil/perfil.module').then(m=>m.PerfilModule)},
    {path:'crearTutoria',loadChildren:()=>import('./crear-tutoria/crear-tutoria.module').then(m=>m.CrearTutoriaModule)},
    {path:'historial-tutoria',loadChildren:()=>import('./horario/horario.module').then(m=>m.HorarioModule)}
  
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocenteRoutingModule { }
