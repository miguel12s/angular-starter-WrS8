import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PerfilComponent} from './perfil.component'
import { PerfilRoutingModule } from './perfil-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PerfilRoutingModule,
  ]
})
export class PerfilModule { }
