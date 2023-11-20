import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppModule } from '../app.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EstudianteRouting } from '../estudiante/estudiante-routing.module';
import { NgZorroAntdModule } from '../ngZorroAntdModule';
import { SidebarDocenteComponent } from './sidebar-admin/sidebar-docente/sidebar-docente.component';
import { DocenteRoutingModule } from '../docente/docente-routing.module';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';



@NgModule({
  declarations: [FooterComponent,HeaderComponent, SidebarComponent, SidebarDocenteComponent, SidebarAdminComponent],
  imports: [
    CommonModule,EstudianteRouting,NgZorroAntdModule
    ,DocenteRoutingModule
  ],
  exports:[
    FooterComponent,HeaderComponent,SidebarComponent,SidebarDocenteComponent,SidebarAdminComponent
  ]
})
export class SharedModule { }
