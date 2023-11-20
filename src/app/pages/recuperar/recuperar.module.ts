import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperarRoutingModule } from './recuperar-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecuperarComponent } from './recuperar.component';


@NgModule({
  declarations: [RecuperarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecuperarRoutingModule
  ]
})
export class RecuperarModule { }
