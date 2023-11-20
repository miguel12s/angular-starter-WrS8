import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocenteRoutingModule } from './docente-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { CrearTutoriaComponent } from './crear-tutoria/crear-tutoria.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DocenteComponent } from './docente.component';
import { HorarioComponent } from './horario/horario.component';
import { NgZorroAntdModule } from '../ngZorroAntdModule';
import { DocenteService } from './services/docente.service';
import { ModalCreartutoriaComponent } from './components/modal-creartutoria/modal-creartutoria.component';


@NgModule({
  declarations: [
    PerfilComponent,
    CrearTutoriaComponent,DocenteComponent,HorarioComponent, ModalCreartutoriaComponent,
  ],
  imports: [
    CommonModule,
    DocenteRoutingModule,ReactiveFormsModule,SharedModule,NgZorroAntdModule
  ],
  providers:[DocenteService]
})
export class DocenteModule { }
