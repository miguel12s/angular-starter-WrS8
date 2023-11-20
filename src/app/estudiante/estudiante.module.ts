import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { HorarioComponent } from '../docente/horario/horario.component';
import { EstudianteRouting } from './estudiante-routing.module';
import { EstudianteComponent } from './estudiante.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TutoriasPendientesComponent } from './tutorias-pendientes/tutorias-pendientes.component';
import { BuscarComponent } from './buscar/buscar.component';
import { RegistroTutoriaComponent } from './registro-tutoria/registro-tutoria.component';
import { NgZorroAntdModule } from '../ngZorroAntdModule';
import { CardComponent } from './components/card/card.component';
import { ModalDescripcionComponent } from './components/modal-descripcion/modal-descripcion.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [ 
  
    PerfilComponent,
    EstudianteComponent,
    TutoriasPendientesComponent,
    BuscarComponent,
    RegistroTutoriaComponent,
    CardComponent,
    ModalDescripcionComponent,
    FilterPipe,
    
  ],
  imports: [
    CommonModule,
    EstudianteRouting,
  ReactiveFormsModule,SharedModule,NgZorroAntdModule
  ]
})
export class EstudianteModule { }
