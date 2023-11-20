import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro.component';


@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,RegistroRoutingModule
 
  ],
  exports:[
    RegistroComponent
  ]
})
export class RegistroModule { }
