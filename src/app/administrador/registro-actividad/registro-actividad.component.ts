import { Component,Input, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs';
import { DocenteService } from 'src/app/docente/services/docente.service';
@Component({
  selector: 'app-registro-actividad',
  templateUrl: './registro-actividad.component.html',
  styleUrls: ['./registro-actividad.component.scss']
})
export class RegistroActividadComponent {
  searchValue = '';
  visible = false;
 
  registro_actividad:any[]=[]
    data:any[]=[]
  constructor(private service:AdminService){
  
  
  
  
    }
  
  
  reset(): void {
    this.searchValue = '';
    this.search();
  }
  
  search(): void {
    this.visible = false;
    
    this.data = this.registro_actividad.filter((item: any) => item.nombres.indexOf(this.searchValue) !== -1);
  
    console.log(this.data);
  
  }
  
  ngOnInit(){
    this.service.getRegistroActividad().pipe(
      tap((res:any)=>{
        this.registro_actividad=res.resultado
        this.data = [...res.resultado];
        
        
      })
    ).subscribe()
  }
  
}
