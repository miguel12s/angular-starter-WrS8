import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from 'src/app/shared/header/header.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    
  ]
})
export class WelcomeModule { }
