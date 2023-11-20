import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaTipoDocumentosComponent } from './tabla-tipo-documentos.component';
const routes: Routes = [{path:'',component:TablaTipoDocumentosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablaTipoDocumentosRoutingModule { }
