import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdministradorComponent } from './administrador.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarEstudianteComponent } from './agregar-estudiante/agregar-estudiante.component';
import { AgregarDocenteComponent } from './agregar-docente/agregar-docente.component';
import { RegistroModule } from '../pages/registro/registro.module';
import { CrearTutoriaComponent } from './crear-tutoria/crear-tutoria.component';
import { ModificarEstudianteComponent } from './modificar-estudiante/modificar-estudiante.component';
import { ModificarDocenteComponent } from './modificar-docente/modificar-docente.component';
import { NgZorroAntdModule } from '../ngZorroAntdModule';
import { TablafacultadesComponent } from './tablafacultades/tablafacultades.component';
import { HistorialTutoriasComponent } from './historial-tutorias/historial-tutorias.component';
import { TablaRolesComponent } from './tabla-roles/tabla-roles.component';
import { TablaTipoDocumentosComponent } from './tabla-tipo-documentos/tabla-tipo-documentos.component';
import { TablaHorasComponent } from './tabla-horas/tabla-horas.component';
import { TablaProgramasComponent } from './tabla-programas/tabla-programas.component';
import { TablaMateriasComponent } from './tabla-materias/tabla-materias.component';
import { TablaSedesComponent } from './tabla-sedes/tabla-sedes.component';
import { TablaCapacidadesComponent } from './tabla-capacidades/tabla-capacidades.component';
import { TablaSalonesComponent } from './tabla-salones/tabla-salones.component';
import { TablaEstadosComponent } from './tabla-estados/tabla-estados.component';
import { TablaEstadosTutoriasComponent } from './tabla-estados-tutorias/tabla-estados-tutorias.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FacultadxmateriaComponent } from './facultadxmateria/facultadxmateria.component';
import { FacultadxprogramaComponent } from './facultadxprograma/facultadxprograma.component';
import { RegistroActividadComponent } from './registro-actividad/registro-actividad.component';
import { TipoRegistroActividadComponent } from './tipo-registro-actividad/tipo-registro-actividad.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { ReportesComponent } from './reportes/reportes.component';
import { NotificacionesHistorialComponent } from './notificaciones-historial/notificaciones-historial.component';




@NgModule({
  declarations: [
    UsuariosComponent,AdministradorComponent, AgregarDocenteComponent,AgregarEstudianteComponent, CrearTutoriaComponent, ModificarEstudianteComponent, ModificarDocenteComponent, TablafacultadesComponent, HistorialTutoriasComponent, TablaRolesComponent, TablaTipoDocumentosComponent, TablaHorasComponent, TablaProgramasComponent, TablaMateriasComponent, TablaSedesComponent, TablaCapacidadesComponent, TablaSalonesComponent, TablaEstadosComponent, TablaEstadosTutoriasComponent, DashboardComponent, FacultadxmateriaComponent, FacultadxprogramaComponent, RegistroActividadComponent, TipoRegistroActividadComponent, NotificacionesComponent,  ReportesComponent, NotificacionesHistorialComponent
  ],
  imports: [
    CommonModule,AdministradorRoutingModule,SharedModule,ReactiveFormsModule,RegistroModule,NgZorroAntdModule,FormsModule,
  ]
})
export class AdminModule { }
