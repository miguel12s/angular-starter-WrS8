import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './administrador.component';

const routes: Routes = [
  {
    path: '',
    component: AdministradorComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'agregar',
        loadChildren: () =>
          import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
{      path:'reportes',
loadChildren:()=>
import('./reportes/reportes.module').then((m)=>m.ReportesModule)
    },
      
      {
        path: 'agregar/estudiante',
        loadChildren: () =>
          import('./agregar-estudiante/agregar-estudiante.module').then(
            (m) => m.AgregarEstudianteModule
          ),
      },
      {
        path: 'agregar/docente',
        loadChildren: () =>
          import('./agregar-docente/agregar-docente.module').then(
            (m) => m.AgregarDocenteModule
          ),
      },
      {
        path: 'modificar-docente',
        loadChildren: () =>
          import('./modificar-docente/modificar-docente.module').then(
            (m) => m.ModificarDocenteModule
          ),
      },
      {
        path: 'modificar-estudiante',
        loadChildren: () =>
          import('./modificar-estudiante/modificar-estudiante.module').then(
            (m) => m.ModificarEstudianteModule
          ),
      },{
        path: 'historial-tutorias',
        loadChildren: () =>
          import('./historial-tutorias/historial-tutorias.module').then(
            (m) => m.HistorialTutoriasModule
          ),
      },{
        path: 'tablafacultades',
        loadChildren: () =>
          import('./tablafacultades/tablafacultades.module').then(
            (m) => m.TablafacultadesModule
          ),
      },{
        path: 'tabla-roles',
        loadChildren: () =>
          import('./tabla-roles/tabla-roles.module').then(
            (m) => m.TablaRolesModule
          ),
      },{
        path: 'tabla-tipo-documentos',
        loadChildren: () =>
          import('./tabla-tipo-documentos/tabla-tipo-documentos.module').then(
            (m) => m.TablaTipoDocumentosModule
          ),
      },{
        path: 'tabla-horas',
        loadChildren: () =>
          import('./tabla-horas/tabla-horas.module').then(
            (m) => m.TablaHorasModule
          ),
      },{
        path: 'tabla-programas',
        loadChildren: () =>
          import('./tabla-programas/tabla-programas.module').then(
            (m) => m.TablaProgramasModule
          ),
      },{
        path: 'tabla-materias',
        loadChildren: () =>
          import('./tabla-materias/tabla-materias.module').then(
            (m) => m.TablaMateriasModule
          ),
      },{
        path: 'tabla-sedes',
        loadChildren: () =>
          import('./tabla-sedes/tabla-sedes.module').then(
            (m) => m.TablaSedesModule
          ),
      },{
        path: 'tabla-capacidades',
        loadChildren: () =>
          import('./tabla-capacidades/tabla-capacidades.module').then(
            (m) => m.TablaCapacidadesModule
          ),
      },{
        path: 'tabla-salones',
        loadChildren: () =>
          import('./tabla-salones/tabla-salones.module').then(
            (m) => m.TablaSalonesModule
          ),
      },{
        path: 'tabla-estados',
        loadChildren: () =>
          import('./tabla-estados/tabla-estados.module').then(
            (m) => m.TablaEstadosModule
          ),
      },{
        path: 'tabla-estados-tutorias',
        loadChildren: () =>
          import('./tabla-estados-tutorias/tabla-estados-tutorias.module').then(
            (m) => m.TablaEstadosTutoriasModule
          ),
      },{
        path: 'facultadxmateria',
        loadChildren: () =>
          import('./facultadxmateria/facultadxmateria.module').then(
            (m) => m.FacultadxmateriaModule
          ),
      },{
        path: 'facultadxprograma',
        loadChildren: () =>
          import('./facultadxprograma/facultadxprograma.module').then(
            (m) => m.FacultadxprogramaModule
          ),
      },{
        path: 'registro-actividad',
        loadChildren: () =>
          import('./registro-actividad/registro-actividad.module').then(
            (m) => m.RegistroActividadModule
          ),
      },{
        path: 'tipo-registro-actividad',
        loadChildren: () =>
          import('./tipo-registro-actividad/tipo-registro-actividad.module').then(
            (m) => m.TipoRegistroActividadModule
          ),
      },{
        path: 'notificaciones',
        loadChildren: () =>
          import('./notificaciones/notificaciones.module').then(
            (m) => m.NotificacionesModule
          ),
      },{
        path: 'notificaciones-historial',
        loadChildren: () =>
          import('./notificaciones-historial/notificaciones-historial.module').then(
            (m) => m.NotificacionesHistorialModule
          ),
      },
      {path:'crear-tutoria',loadChildren:()=>import('./crear-tutoria/crear-tutoria.module').then(m=>m.CrearTutoriaModule)},
      {path:'**',redirectTo:'deshabilitar-docente'}

  
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorRoutingModule {}
