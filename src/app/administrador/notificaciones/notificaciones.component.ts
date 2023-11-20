import { Component,Input, OnInit, inject } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { tap } from 'rxjs';
import { DocenteService } from 'src/app/docente/services/docente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { R3SelectorScopeMode } from '@angular/compiler';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent {
  searchValue = '';
  visible = false;
  listOfData: any[] = [
    
  ];
  datosModal:any={}
  notificaciones:any[]=[]
    estudiantes: any[]=[];
    notificationForm!:FormGroup
    data:any[]=[]
    private fb=inject(FormBuilder)
    constructor(private service:AdminService){
  this.notificationForm=this.initForm()
  
  
  
    }
    initForm():FormGroup{
      return this.fb.group({
        id:['',Validators.required],
        nombre_completo:['',Validators.required],
        correo:['',Validators.email],
        celular:['',Validators.required],
        mensaje:['',Validators.required],
        respuesta:['',Validators.required]

      })
    }
  
  
  reset(): void {
    this.searchValue = '';
    this.search();
  }
  
  search(): void {
    this.visible = false;
    
    this.data = this.notificaciones.filter((item: any) => item.nombres.indexOf(this.searchValue) !== -1);
  
    console.log(this.data);
  
  }
  
  ngOnInit(){
    this.service.getNotifications().pipe(
      tap((res:any)=>{
        this.notificaciones=res.resultado
        this.data = [...res.resultado];
        
        
      })
    ).subscribe()
  }

  
  listado(id:number){
    this.service.getNotification(id).pipe(
      tap((res:any)=>{
        console.log(res);
        
        this.notificationForm.patchValue(
          
          {
            id:res.id,
            nombre_completo:res.nombre_completo,
            correo:res.correo,
            celular:res.celular,
            mensaje:res.mensaje,

          }
        )
        
  
        
        
      })
    ).subscribe()
  }

  onSubmit(){
    const notification=this.notificationForm.value
    console.log(notification)
    this.service.updateNotification(notification).pipe(
      tap((res:any)=>{
        console.log(res)
      })
    ).subscribe()
  }
}
